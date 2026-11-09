const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  project: {
    type: mongoose.Schema.ObjectId,
    ref: 'Project',
    default: null
  },
  service: {
    type: mongoose.Schema.ObjectId,
    ref: 'Service',
    default: null
  },
  transactionId: {
    type: String,
    required: [true, 'Transaction ID is required'],
    unique: true
  },
  paymentGateway: {
    type: String,
    enum: ['stripe', 'razorpay', 'paypal', 'upi', 'bank_transfer'],
    required: [true, 'Payment gateway is required']
  },
  gatewayTransactionId: {
    type: String,
    required: [true, 'Gateway transaction ID is required']
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'upi', 'net_banking', 'wallet', 'bank_transfer'],
    required: [true, 'Payment method is required']
  },
  amount: {
    currency: {
      type: String,
      required: [true, 'Currency is required'],
      default: 'INR',
      enum: ['INR', 'USD', 'EUR', 'GBP']
    },
    subtotal: {
      type: Number,
      required: [true, 'Subtotal is required'],
      min: [0, 'Subtotal must be positive']
    },
    tax: {
      type: Number,
      default: 0,
      min: [0, 'Tax must be positive']
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, 'Discount must be positive']
    },
    total: {
      type: Number,
      required: [true, 'Total amount is required'],
      min: [0, 'Total must be positive']
    }
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded', 'partial_refund'],
    default: 'pending'
  },
  description: {
    type: String,
    required: [true, 'Payment description is required'],
    maxLength: [500, 'Description cannot be more than 500 characters']
  },
  metadata: {
    customerName: String,
    customerEmail: String,
    customerPhone: String,
    billingAddress: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipCode: String
    },
    invoiceNumber: String,
    reference: String
  },
  paymentDetails: {
    cardLast4: String,
    cardBrand: String,
    upiId: String,
    bankName: String,
    accountNumber: String // Store only last 4 digits for security
  },
  fees: {
    gatewayFee: {
      type: Number,
      default: 0
    },
    platformFee: {
      type: Number,
      default: 0
    },
    netAmount: {
      type: Number,
      required: true
    }
  },
  timeline: [{
    status: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    note: String,
    updatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  }],
  refunds: [{
    refundId: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    reason: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed'],
      default: 'pending'
    },
    processedAt: Date,
    processedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    gatewayRefundId: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  webhook: {
    received: {
      type: Boolean,
      default: false
    },
    data: mongoose.Schema.Types.Mixed,
    receivedAt: Date
  },
  notes: [{
    message: {
      type: String,
      required: true
    },
    addedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  isRecurring: {
    type: Boolean,
    default: false
  },
  recurringDetails: {
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'quarterly', 'yearly']
    },
    startDate: Date,
    endDate: Date,
    nextPaymentDate: Date,
    totalCycles: Number,
    completedCycles: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  expiresAt: {
    type: Date,
    default: function() {
      return new Date(Date.now() + 30 * 60 * 1000); // 30 minutes from creation
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
PaymentSchema.index({ user: 1, status: 1 });
PaymentSchema.index({ gatewayTransactionId: 1 });
PaymentSchema.index({ status: 1, createdAt: -1 });
PaymentSchema.index({ 'amount.currency': 1 });
PaymentSchema.index({ paymentGateway: 1 });
PaymentSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Virtual for total refunded amount
PaymentSchema.virtual('totalRefunded').get(function() {
  return this.refunds.reduce((total, refund) => {
    return refund.status === 'completed' ? total + refund.amount : total;
  }, 0);
});

// Virtual for remaining amount after refunds
PaymentSchema.virtual('remainingAmount').get(function() {
  return this.amount.total - this.totalRefunded;
});

// Virtual for payment age
PaymentSchema.virtual('age').get(function() {
  return Date.now() - this.createdAt.getTime();
});

// Add status to timeline before saving
PaymentSchema.pre('save', function(next) {
  if (this.isModified('status')) {
    this.timeline.push({
      status: this.status,
      timestamp: new Date(),
      note: `Status changed to ${this.status}`
    });
  }
  
  // Calculate net amount after fees
  if (this.isModified('amount.total') || this.isModified('fees.gatewayFee') || this.isModified('fees.platformFee')) {
    this.fees.netAmount = this.amount.total - (this.fees.gatewayFee || 0) - (this.fees.platformFee || 0);
  }
  
  next();
});

// Instance method to process refund
PaymentSchema.methods.processRefund = function(amount, reason, processedBy) {
  if (this.status !== 'completed') {
    throw new Error('Can only refund completed payments');
  }
  
  if (amount > this.remainingAmount) {
    throw new Error('Refund amount exceeds remaining amount');
  }
  
  const refundId = `refund_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  
  this.refunds.push({
    refundId,
    amount,
    reason,
    processedBy,
    status: 'pending'
  });
  
  // Update payment status based on refund amount
  if (amount === this.remainingAmount) {
    this.status = 'refunded';
  } else {
    this.status = 'partial_refund';
  }
  
  return refundId;
};

// Instance method to add note
PaymentSchema.methods.addNote = function(message, addedBy) {
  this.notes.push({
    message,
    addedBy
  });
  return this.save();
};

// Static method to get payment statistics
PaymentSchema.statics.getStats = async function(startDate, endDate, filters = {}) {
  const matchStage = {
    createdAt: {
      $gte: new Date(startDate),
      $lte: new Date(endDate)
    },
    ...filters
  };
  
  const stats = await this.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: null,
        totalPayments: { $sum: 1 },
        totalAmount: { $sum: '$amount.total' },
        completedPayments: {
          $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] }
        },
        completedAmount: {
          $sum: { $cond: [{ $eq: ['$status', 'completed'] }, '$amount.total', 0] }
        },
        failedPayments: {
          $sum: { $cond: [{ $eq: ['$status', 'failed'] }, 1, 0] }
        },
        averageAmount: { $avg: '$amount.total' },
        totalRefunds: { $sum: { $size: '$refunds' } }
      }
    }
  ]);
  
  return stats[0] || {
    totalPayments: 0,
    totalAmount: 0,
    completedPayments: 0,
    completedAmount: 0,
    failedPayments: 0,
    averageAmount: 0,
    totalRefunds: 0
  };
};

// Static method to get payment trends
PaymentSchema.statics.getTrends = async function(period = 'daily', limit = 30) {
  const groupByPeriod = {
    daily: {
      _id: {
        year: { $year: '$createdAt' },
        month: { $month: '$createdAt' },
        day: { $dayOfMonth: '$createdAt' }
      }
    },
    monthly: {
      _id: {
        year: { $year: '$createdAt' },
        month: { $month: '$createdAt' }
      }
    },
    yearly: {
      _id: {
        year: { $year: '$createdAt' }
      }
    }
  };
  
  return await this.aggregate([
    { $match: { status: 'completed' } },
    {
      $group: {
        ...groupByPeriod[period],
        count: { $sum: 1 },
        totalAmount: { $sum: '$amount.total' },
        averageAmount: { $avg: '$amount.total' }
      }
    },
    { $sort: { '_id': -1 } },
    { $limit: limit }
  ]);
};

module.exports = mongoose.model('Payment', PaymentSchema);