'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Grid, List, Plus, Upload, Image, FileText, Star } from 'lucide-react';

const AssetPanel: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('images');

  const tabs = [
    { id: 'images', label: 'Images', icon: Image },
    { id: 'icons', label: 'Icons', icon: Star },
    { id: 'templates', label: 'Templates', icon: FileText },
  ];

  const sampleAssets = [
    { id: 1, name: 'Abstract Background', type: 'image', url: '/api/placeholder/200/200', category: 'backgrounds' },
    { id: 2, name: 'Business Icon Set', type: 'icon', url: '/api/placeholder/100/100', category: 'business' },
    { id: 3, name: 'Social Media Template', type: 'template', url: '/api/placeholder/300/200', category: 'social' },
    { id: 4, name: 'Gradient Overlay', type: 'image', url: '/api/placeholder/200/200', category: 'overlays' },
    { id: 5, name: 'Tech Icons', type: 'icon', url: '/api/placeholder/100/100', category: 'technology' },
    { id: 6, name: 'Presentation Template', type: 'template', url: '/api/placeholder/300/200', category: 'presentation' },
  ];

  const categories = [
    'All', 'Backgrounds', 'Business', 'Social', 'Technology', 'Presentation', 'Overlays'
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Search and Controls */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-4 w-4 inline mr-1" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full whitespace-nowrap hover:bg-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Upload Section */}
      <div className="p-4 border-b border-gray-200">
        <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors">
          <Upload className="h-5 w-5 mr-2" />
          Upload Assets
        </button>
      </div>

      {/* Assets Grid/List */}
      <div className="flex-1 overflow-auto p-4">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-3">
            {sampleAssets.map((asset) => (
              <motion.div
                key={asset.id}
                className="group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <asset.type === 'image' ? Image : asset.type === 'icon' ? Star : FileText} 
                    className="h-8 w-8 text-gray-400" 
                  />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-medium text-gray-900 truncate">{asset.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{asset.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {sampleAssets.map((asset) => (
              <motion.div
                key={asset.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <asset.type === 'image' ? Image : asset.type === 'icon' ? Star : FileText} 
                  className="h-6 w-6 text-gray-400" 
                />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{asset.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{asset.category}</p>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <Plus className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
            <Plus className="h-4 w-4 mr-1" />
            Add Text
          </button>
          <button className="flex items-center justify-center px-3 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <Upload className="h-4 w-4 mr-1" />
            Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetPanel;
