import React from 'react';
import { ArrowLeft, BookOpen, Users, Star, Clock } from 'lucide-react';
import { Category } from '../data/categories';
import { Course } from '../types';
import CourseCard from './CourseCard';

interface CategoryPageProps {
  category: Category;
  courses: Course[];
  userSubscriptionStatus: 'free' | 'premium' | 'expired';
  onBack: () => void;
  onCourseClick: (course: Course) => void;
  onSubscribeClick: () => void;
  onSubcategoryClick: (subcategory: string) => void;
}

export default function CategoryPage({
  category,
  courses,
  userSubscriptionStatus,
  onBack,
  onCourseClick,
  onSubscribeClick,
  onSubcategoryClick
}: CategoryPageProps) {
  const categoryImages: { [key: string]: string } = {
    'Software & IT': 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=1200&h=400&fit=crop',
    'Non-Software Academic': 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?w=1200&h=400&fit=crop',
    'Business & Professional': 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=1200&h=400&fit=crop',
    'Online Earning & Freelancing': 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?w=1200&h=400&fit=crop',
    'Artificial Intelligence & Online Tools': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=1200&h=400&fit=crop',
    'Creative Arts & Design': 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=1200&h=400&fit=crop',
    'Lifestyle & Personal Growth': 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?w=1200&h=400&fit=crop',
    'Communication & Soft Skills': 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=1200&h=400&fit=crop',
    'Modeling & Entertainment': 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?w=1200&h=400&fit=crop',
    'Kids to College Learning': 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?w=1200&h=400&fit=crop',
    'Future Tech & Innovation': 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=1200&h=400&fit=crop'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={categoryImages[category.name] || 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=1200&h=400&fit=crop'}
          alt={category.name}
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
              <span>Back to Courses</span>
            </button>
            
            <h1 className="text-5xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              Explore comprehensive courses and master the skills that matter in {category.name.toLowerCase()}
            </p>
            
            <div className="flex items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>{courses.length} Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subcategories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.subcategories.map((subcategory, index) => (
              <button
                key={index}
                onClick={() => onSubcategoryClick(subcategory)}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-left border border-gray-100 hover:border-blue-200"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {subcategory}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {Math.floor(Math.random() * 20) + 5} courses
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600">
                      {(4.5 + Math.random() * 0.4).toFixed(1)}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Courses</h2>
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
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses available yet</h3>
              <p className="text-gray-500 mb-6">
                We're working on adding amazing courses for {category.name}. Check back soon!
              </p>
              <button
                onClick={onBack}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Explore Other Categories
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}