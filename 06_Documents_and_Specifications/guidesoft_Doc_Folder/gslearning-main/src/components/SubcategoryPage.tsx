import React from 'react';
import { ArrowLeft, BookOpen, Users, Star, Clock, Play } from 'lucide-react';
import { Course } from '../types';
import CourseCard from './CourseCard';

interface SubcategoryPageProps {
  subcategory: string;
  categoryName: string;
  courses: Course[];
  userSubscriptionStatus: 'free' | 'premium' | 'expired';
  onBack: () => void;
  onCourseClick: (course: Course) => void;
  onSubscribeClick: () => void;
}

export default function SubcategoryPage({
  subcategory,
  categoryName,
  courses,
  userSubscriptionStatus,
  onBack,
  onCourseClick,
  onSubscribeClick
}: SubcategoryPageProps) {
  const subcategoryImages: { [key: string]: string } = {
    'Programming': 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=1200&h=400&fit=crop',
    'Web Development': 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=1200&h=400&fit=crop',
    'Mobile App Development': 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?w=1200&h=400&fit=crop',
    'Data Science': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=1200&h=400&fit=crop',
    'Artificial Intelligence': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=1200&h=400&fit=crop',
    'Digital Marketing': 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=1200&h=400&fit=crop',
    'Graphic Design': 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=1200&h=400&fit=crop'
  };

  const getSubcategoryImage = (subcategory: string): string => {
    const key = Object.keys(subcategoryImages).find(k => subcategory.includes(k));
    return key ? subcategoryImages[key] : 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=1200&h=400&fit=crop';
  };

  // Generate mock learning path
  const learningPath = [
    'Fundamentals & Basics',
    'Core Concepts',
    'Practical Projects',
    'Advanced Techniques',
    'Industry Best Practices',
    'Certification & Portfolio'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={getSubcategoryImage(subcategory)}
          alt={subcategory}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to {categoryName}</span>
            </button>
            
            <div className="mb-4">
              <span className="text-blue-300 font-medium">{categoryName}</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{subcategory}</h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              Master {subcategory.toLowerCase()} with comprehensive courses designed by industry experts
            </p>
            
            <div className="flex items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>{courses.length || Math.floor(Math.random() * 15) + 5} Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>{Math.floor(Math.random() * 5000) + 1000}+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{Math.floor(Math.random() * 50) + 20}+ Hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>{(4.5 + Math.random() * 0.4).toFixed(1)} Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Path */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Path</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningPath.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step}</h3>
                      <p className="text-sm text-gray-500">
                        {Math.floor(Math.random() * 10) + 3}-{Math.floor(Math.random() * 15) + 8} hours
                      </p>
                    </div>
                  </div>
                  {index < learningPath.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-5"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills You'll Learn */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills You'll Master</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Core Fundamentals',
                'Best Practices',
                'Industry Tools',
                'Project Development',
                'Problem Solving',
                'Code Optimization',
                'Testing & Debugging',
                'Deployment Strategies'
              ].map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="font-medium text-gray-800">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Courses */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Available Courses</h2>
            {userSubscriptionStatus === 'free' && (
              <button
                onClick={onSubscribeClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Subscribe for Full Access
              </button>
            )}
          </div>
          
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  userSubscriptionStatus={userSubscriptionStatus}
                  onCourseClick={onCourseClick}
                  onSubscribeClick={onSubscribeClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-lg p-12">
                <Play className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Courses Coming Soon!</h3>
                <p className="text-gray-500 mb-6">
                  We're creating amazing courses for {subcategory}. Be the first to know when they're ready!
                </p>
                <div className="space-y-4">
                  <button
                    onClick={onSubscribeClick}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Subscribe & Get Notified
                  </button>
                  <div>
                    <button
                      onClick={onBack}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Explore Other Subcategories
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}