'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Type, 
  Square, 
  Circle, 
  Image as ImageIcon,
  Palette,
  Move,
  RotateCcw,
  Copy,
  Trash2,
  Eye,
  EyeOff,
  Lock,
  Unlock
} from 'lucide-react';

const PropertiesPanel: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState({
    type: 'text',
    name: 'Welcome Text',
    visible: true,
    locked: false
  });

  const [textProperties, setTextProperties] = useState({
    content: 'Welcome to GSSTUDIO',
    fontSize: 32,
    fontFamily: 'Arial',
    fontWeight: 'normal',
    color: '#333333',
    alignment: 'left'
  });

  const [shapeProperties, setShapeProperties] = useState({
    fill: '#4ECDC4',
    stroke: '#2C3E50',
    strokeWidth: 2,
    opacity: 100,
    borderRadius: 0
  });

  const [positionProperties, setPositionProperties] = useState({
    x: 100,
    y: 100,
    width: 200,
    height: 60,
    rotation: 0
  });

  const fontFamilies = [
    'Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana', 'Roboto', 'Open Sans'
  ];

  const fontWeights = [
    { value: 'normal', label: 'Normal' },
    { value: 'bold', label: 'Bold' },
    { value: '100', label: 'Thin' },
    { value: '300', label: 'Light' },
    { value: '500', label: 'Medium' },
    { value: '700', label: 'Bold' },
    { value: '900', label: 'Black' }
  ];

  const alignments = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' }
  ];

  const colors = [
    '#FF6B6B', '#4ECDC4', '#9B59B6', '#74B9FF',
    '#F39C12', '#E74C3C', '#2ECC71', '#34495E',
    '#FFFFFF', '#BDC3C7', '#95A5A6', '#000000'
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Element Info */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {selectedElement.type === 'text' && <Type className="h-4 w-4 text-blue-600" />}
            {selectedElement.type === 'rectangle' && <Square className="h-4 w-4 text-green-600" />}
            {selectedElement.type === 'circle' && <Circle className="h-4 w-4 text-purple-600" />}
            {selectedElement.type === 'image' && <ImageIcon className="h-4 w-4 text-orange-600" />}
            <span className="font-medium text-gray-900">{selectedElement.name}</span>
          </div>
          <div className="flex items-center space-x-1">
            <button className={`p-1 rounded ${selectedElement.visible ? 'text-gray-600' : 'text-gray-400'}`}>
              {selectedElement.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </button>
            <button className={`p-1 rounded ${selectedElement.locked ? 'text-gray-600' : 'text-gray-400'}`}>
              {selectedElement.locked ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center px-3 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </button>
          <button className="flex items-center justify-center px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </button>
        </div>
      </div>

      {/* Properties Sections */}
      <div className="flex-1 overflow-auto">
        {/* Text Properties */}
        {selectedElement.type === 'text' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 border-b border-gray-200"
          >
            <h3 className="text-sm font-medium text-gray-900 mb-3">Text Properties</h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  value={textProperties.content}
                  onChange={(e) => setTextProperties({...textProperties, content: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Font Size</label>
                  <input
                    type="number"
                    value={textProperties.fontSize}
                    onChange={(e) => setTextProperties({...textProperties, fontSize: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Font Family</label>
                  <select
                    value={textProperties.fontFamily}
                    onChange={(e) => setTextProperties({...textProperties, fontFamily: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {fontFamilies.map(font => (
                      <option key={font} value={font}>{font}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Font Weight</label>
                  <select
                    value={textProperties.fontWeight}
                    onChange={(e) => setTextProperties({...textProperties, fontWeight: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {fontWeights.map(weight => (
                      <option key={weight.value} value={weight.value}>{weight.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Alignment</label>
                  <select
                    value={textProperties.alignment}
                    onChange={(e) => setTextProperties({...textProperties, alignment: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {alignments.map(align => (
                      <option key={align.value} value={align.value}>{align.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Color</label>
                <div className="grid grid-cols-6 gap-2">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded border-2 ${
                        textProperties.color === color ? 'border-blue-500' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setTextProperties({...textProperties, color})}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Shape Properties */}
        {(selectedElement.type === 'rectangle' || selectedElement.type === 'circle') && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 border-b border-gray-200"
          >
            <h3 className="text-sm font-medium text-gray-900 mb-3">Shape Properties</h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Fill Color</label>
                <div className="grid grid-cols-6 gap-2">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded border-2 ${
                        shapeProperties.fill === color ? 'border-blue-500' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setShapeProperties({...shapeProperties, fill: color})}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Stroke Width</label>
                  <input
                    type="number"
                    value={shapeProperties.strokeWidth}
                    onChange={(e) => setShapeProperties({...shapeProperties, strokeWidth: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Opacity</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={shapeProperties.opacity}
                    onChange={(e) => setShapeProperties({...shapeProperties, opacity: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {selectedElement.type === 'rectangle' && (
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Border Radius</label>
                  <input
                    type="number"
                    value={shapeProperties.borderRadius}
                    onChange={(e) => setShapeProperties({...shapeProperties, borderRadius: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Position Properties */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4"
        >
          <h3 className="text-sm font-medium text-gray-900 mb-3">Position & Size</h3>
          
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">X Position</label>
                <input
                  type="number"
                  value={positionProperties.x}
                  onChange={(e) => setPositionProperties({...positionProperties, x: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Y Position</label>
                <input
                  type="number"
                  value={positionProperties.y}
                  onChange={(e) => setPositionProperties({...positionProperties, y: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Width</label>
                <input
                  type="number"
                  value={positionProperties.width}
                  onChange={(e) => setPositionProperties({...positionProperties, width: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Height</label>
                <input
                  type="number"
                  value={positionProperties.height}
                  onChange={(e) => setPositionProperties({...positionProperties, height: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Rotation</label>
              <input
                type="number"
                min="0"
                max="360"
                value={positionProperties.rotation}
                onChange={(e) => setPositionProperties({...positionProperties, rotation: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
