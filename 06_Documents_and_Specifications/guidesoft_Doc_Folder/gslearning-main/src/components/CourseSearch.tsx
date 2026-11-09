import React, { useState, useEffect } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { courseCategories, searchCategories, Category } from '../data/categories';

interface CourseSearchProps {
  onCategorySelect: (category: string | null) => void;
  onSubcategorySelect: (subcategory: string | null) => void;
  selectedCategory: string | null;
  selectedSubcategory: string | null;
}

export default function CourseSearch({ 
  onCategorySelect, 
  onSubcategorySelect, 
  selectedCategory, 
  selectedSubcategory 
}: CourseSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(courseCategories);

  useEffect(() => {
    if (searchQuery.trim()) {
      setFilteredCategories(searchCategories(searchQuery));
    } else {
      setFilteredCategories(courseCategories);
    }
  }, [searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery('');
    onCategorySelect(null);
    onSubcategorySelect(null);
    setShowFilters(false);
  };

  const selectedCategoryData = courseCategories.find(cat => cat.name === selectedCategory);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search courses, categories, or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium"
        >
          <Filter className="h-5 w-5" />
          <span>Advanced Filters</span>
          <ChevronDown className={`h-4 w-4 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>

        {(selectedCategory || selectedSubcategory) && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Active Filters */}
      {(selectedCategory || selectedSubcategory) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCategory && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
              <span>{selectedCategory}</span>
              <button onClick={() => onCategorySelect(null)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          {selectedSubcategory && (
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
              <span>{selectedSubcategory}</span>
              <button onClick={() => onSubcategorySelect(null)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
        </div>
      )}

      {/* Filters Panel */}
      {showFilters && (
        <div className="border-t border-gray-200 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onCategorySelect(category.name === selectedCategory ? null : category.name);
                      onSubcategorySelect(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="font-medium">{category.name}</div>
                    <div className="text-sm text-gray-500">{category.subcategories.length} subcategories</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Subcategories */}
            {selectedCategoryData && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {selectedCategoryData.name} Subcategories
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedCategoryData.subcategories.map((subcategory, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onSubcategorySelect(subcategory === selectedSubcategory ? null : subcategory);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                        selectedSubcategory === subcategory
                          ? 'bg-purple-100 text-purple-800 border border-purple-200'
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Category Pills */}
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="text-sm font-medium text-gray-600 mr-2">Popular:</span>
        {['Software & IT', 'Business & Professional', 'Creative Arts & Design', 'AI & Online Tools'].map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}