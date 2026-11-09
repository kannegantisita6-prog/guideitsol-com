'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Save, 
  Download, 
  Share, 
  Settings, 
  Layers, 
  Type, 
  Image, 
  Square, 
  Circle,
  Palette,
  Undo,
  Redo,
  Eye,
  EyeOff
} from 'lucide-react';
import Header from '@/components/Header';
import DesignCanvas from '@/components/DesignCanvas';
import ToolPanel from '@/components/ToolPanel';
import AssetPanel from '@/components/AssetPanel';
import PropertiesPanel from '@/components/PropertiesPanel';

export default function DesignStudio() {
  const [selectedTool, setSelectedTool] = useState('select');
  const [showAssets, setShowAssets] = useState(true);
  const [showProperties, setShowProperties] = useState(true);

  const tools = [
    { id: 'select', icon: ArrowLeft, label: 'Select' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'image', icon: Image, label: 'Image' },
    { id: 'rectangle', icon: Square, label: 'Rectangle' },
    { id: 'circle', icon: Circle, label: 'Circle' },
    { id: 'color', icon: Palette, label: 'Color' },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      
      {/* Studio Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="btn-ghost flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </button>
          <div className="h-6 w-px bg-gray-300"></div>
          <span className="text-sm text-gray-600">Untitled Design</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="btn-ghost flex items-center">
            <Undo className="h-4 w-4 mr-2" />
            Undo
          </button>
          <button className="btn-ghost flex items-center">
            <Redo className="h-4 w-4 mr-2" />
            Redo
          </button>
          <div className="h-6 w-px bg-gray-300"></div>
          <button className="btn-ghost flex items-center">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </button>
          <button className="btn-ghost flex items-center">
            <Share className="h-4 w-4 mr-2" />
            Share
          </button>
          <button className="btn-ghost flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="btn-primary flex items-center">
            <Save className="h-4 w-4 mr-2" />
            Save
          </button>
        </div>
      </div>

      {/* Main Studio Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Tools */}
        <ToolPanel 
          tools={tools}
          selectedTool={selectedTool}
          onToolSelect={setSelectedTool}
        />

        {/* Center - Canvas */}
        <div className="flex-1 flex flex-col">
          {/* Canvas Toolbar */}
          <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <select className="input-primary w-32">
                <option>1920 x 1080</option>
                <option>1080 x 1080</option>
                <option>1200 x 630</option>
                <option>Custom</option>
              </select>
              <span className="text-sm text-gray-600">100%</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="btn-ghost">
                <Layers className="h-4 w-4" />
              </button>
              <button className="btn-ghost">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-gray-100 p-4 overflow-auto">
            <div className="w-full h-full flex items-center justify-center">
              <DesignCanvas selectedTool={selectedTool} />
            </div>
          </div>
        </div>

        {/* Right Sidebar - Assets & Properties */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setShowAssets(true)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                showAssets 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Assets
            </button>
            <button
              onClick={() => setShowProperties(true)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                showProperties 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Properties
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto">
            {showAssets && <AssetPanel />}
            {showProperties && <PropertiesPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}
