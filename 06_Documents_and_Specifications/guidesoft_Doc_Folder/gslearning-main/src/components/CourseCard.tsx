import React from 'react';
import { Play, Clock, Star, Users, Lock, Crown } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  userSubscriptionStatus: 'free' | 'premium' | 'expired';
  onCourseClick: (course: Course) => void;
  onSubscribeClick: () => void;
}

export default function CourseCard({ 
  course, 
  userSubscriptionStatus, 
  onCourseClick, 
  onSubscribeClick 
}: CourseCardProps) {
  const isLocked = course.isPremium && userSubscriptionStatus !== 'premium';

  const handleClick = () => {
    if (isLocked) {
      onSubscribeClick();
    } else {
      onCourseClick(course);
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Overlay for locked content */}
        {isLocked && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white">
              <Lock className="h-12 w-12 mx-auto mb-2" />
              <p className="text-sm font-medium">Premium Content</p>
            </div>
          </div>
        )}

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleClick}
            className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-4 transform scale-90 hover:scale-100 transition-transform duration-200"
          >
            <Play className="h-8 w-8 ml-1" />
          </button>
        </div>

        {/* Premium badge */}
        {course.isPremium && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Crown className="h-3 w-3" />
            <span>Premium</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {course.category}
          </span>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium text-gray-700">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            by <span className="font-medium">{course.instructor}</span>
          </div>
          
          <button
            onClick={handleClick}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isLocked
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isLocked ? 'Subscribe to Watch' : 'Watch Now'}
          </button>
        </div>
      </div>
    </div>
  );
}