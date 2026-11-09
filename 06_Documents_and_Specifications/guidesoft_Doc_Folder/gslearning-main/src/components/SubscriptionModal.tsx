import React, { useState } from 'react';
import { X, Crown, Check, Star, Users, BookOpen, Calendar } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (planType: 'monthly' | 'yearly') => void;
}

export default function SubscriptionModal({ isOpen, onClose, onSubscribe }: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  if (!isOpen) return null;

  const plans = {
    monthly: {
      price: 99,
      period: 'month',
      savings: null,
    },
    yearly: {
      price: 999,
      period: 'year',
      savings: 'Save ₹189',
    },
  };

  const features = [
    'Access to all premium video courses',
    'Exclusive blog posts and case studies',
    'Priority registration for events',
    'Downloadable resources and code',
    'Community access and support',
    'Mobile app with offline downloads',
    'Certificate of completion',
    '24/7 customer support',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-3xl relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center">
              <Crown className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
              <h2 className="text-3xl font-bold mb-2">Unlock Premium Access</h2>
              <p className="text-lg text-blue-100">Join thousands of developers advancing their careers</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Plan Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Choose Your Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(plans).map(([planKey, plan]) => (
                  <button
                    key={planKey}
                    onClick={() => setSelectedPlan(planKey as 'monthly' | 'yearly')}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      selectedPlan === planKey
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-left">
                      <h4 className="font-bold text-lg capitalize mb-1">{planKey}</h4>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-bold">₹{plan.price}</span>
                        <span className="text-gray-500">/{plan.period}</span>
                      </div>
                      {plan.savings && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">What You'll Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-t border-b border-gray-200">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Premium Courses</div>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onSubscribe(selectedPlan)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Learning - ₹{plans[selectedPlan].price}/{plans[selectedPlan].period}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              ✓ 7-day money back guarantee • ✓ Cancel anytime • ✓ Secure payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}