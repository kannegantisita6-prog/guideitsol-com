const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Import payment controller
const {
  createPayment,
  verifyPayment,
  getPayments,
  getPayment,
  updatePaymentStatus,
  processRefund,
  handleWebhook,
  getPaymentStats
} = require('../controllers/payments');

// Import middleware
const { protect, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validation');

// Validation rules
const createPaymentValidation = [
  body('amount.subtotal')
    .isFloat({ min: 1 })
    .withMessage('Subtotal must be a positive number'),
  body('amount.currency')
    .isIn(['INR', 'USD', 'EUR', 'GBP'])
    .withMessage('Invalid currency'),
  body('paymentMethod')
    .isIn(['card', 'upi', 'net_banking', 'wallet', 'bank_transfer'])
    .withMessage('Invalid payment method'),
  body('description')
    .isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters'),
  body('metadata.customerName')
    .optional()
    .isLength({ min: 2, max: 100 })
    .withMessage('Customer name must be between 2 and 100 characters'),
  body('metadata.customerEmail')
    .optional()
    .isEmail()
    .withMessage('Invalid email address'),
  body('metadata.customerPhone')
    .optional()
    .isMobilePhone('any')
    .withMessage('Invalid phone number')
];

const verifyPaymentValidation = [
  body('paymentId')
    .notEmpty()
    .withMessage('Payment ID is required'),
  body('gatewayTransactionId')
    .notEmpty()
    .withMessage('Gateway transaction ID is required'),
  body('signature')
    .optional()
    .notEmpty()
    .withMessage('Signature cannot be empty if provided')
];

// Routes

/**
 * @route   POST /api/payments/create
 * @desc    Create a new payment
 * @access  Public/Private (based on requirements)
 */
router.post('/create', createPaymentValidation, validate, createPayment);

/**
 * @route   POST /api/payments/verify
 * @desc    Verify payment after successful transaction
 * @access  Public/Private
 */
router.post('/verify', verifyPaymentValidation, validate, verifyPayment);

/**
 * @route   GET /api/payments
 * @desc    Get all payments (with filters)
 * @access  Private (Admin/Manager)
 */
router.get('/', protect, authorize('admin', 'manager'), getPayments);

/**
 * @route   GET /api/payments/stats
 * @desc    Get payment statistics
 * @access  Private (Admin/Manager)
 */
router.get('/stats', protect, authorize('admin', 'manager'), getPaymentStats);

/**
 * @route   GET /api/payments/:id
 * @desc    Get single payment
 * @access  Private
 */
router.get('/:id', protect, getPayment);

/**
 * @route   PUT /api/payments/:id/status
 * @desc    Update payment status
 * @access  Private (Admin/Manager)
 */
router.put('/:id/status', 
  protect, 
  authorize('admin', 'manager'),
  [
    body('status')
      .isIn(['pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded'])
      .withMessage('Invalid status'),
    body('note')
      .optional()
      .isLength({ max: 500 })
      .withMessage('Note cannot be more than 500 characters')
  ],
  validate,
  updatePaymentStatus
);

/**
 * @route   POST /api/payments/:id/refund
 * @desc    Process refund for a payment
 * @access  Private (Admin/Manager)
 */
router.post('/:id/refund',
  protect,
  authorize('admin', 'manager'),
  [
    body('amount')
      .isFloat({ min: 0.01 })
      .withMessage('Refund amount must be greater than 0'),
    body('reason')
      .isLength({ min: 10, max: 500 })
      .withMessage('Refund reason must be between 10 and 500 characters')
  ],
  validate,
  processRefund
);

/**
 * @route   POST /api/payments/webhook/razorpay
 * @desc    Handle Razorpay webhooks
 * @access  Public (Webhook)
 */
router.post('/webhook/razorpay', handleWebhook);

/**
 * @route   POST /api/payments/webhook/stripe
 * @desc    Handle Stripe webhooks
 * @access  Public (Webhook)
 */
router.post('/webhook/stripe', handleWebhook);

module.exports = router;