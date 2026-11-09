import React from 'react';
import { Play, Star, Users, BookOpen, Calendar, Crown } from 'lucide-react';

interface HeroProps {
  onSubscribeClick: () => void;
  onWatchDemo: () => void;
}

export default function Hero({ onSubscribeClick, onWatchDemo }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Master Development,{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Design, Deploy
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Access premium courses, live workshops, and case studies from industry experts. 
              Join thousands of developers advancing their careers.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-lg">10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <span className="text-lg">150+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-lg">4.9 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={onSubscribeClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
              >
                <Crown className="h-6 w-6" />
                <span>Start Learning - ₹99/month</span>
              </button>
              
              <button
                onClick={onWatchDemo}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm"
              >
                <Play className="h-6 w-6" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="text-sm text-gray-400">
              <p>✓ Cancel anytime • ✓ 7-day money back guarantee • ✓ Access to all content</p>
            </div>
          </div>

          {/* Right Content - Feature Preview */}
          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Play className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Premium Video Courses</h4>
                    <p className="text-gray-300">High-quality video content from industry experts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Case Studies & Blogs</h4>
                    <p className="text-gray-300">Real-world projects and detailed breakdowns</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Live Workshops</h4>
                    <p className="text-gray-300">Interactive sessions with Q&A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}