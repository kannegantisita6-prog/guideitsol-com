'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MousePointer, 
  Type, 
  Image, 
  Square, 
  Circle, 
  Palette,
  Move,
  RotateCcw,
  Copy,
  Trash2,
  Layers,
  Eye,
  EyeOff
} from 'lucide-react';

interface Tool {
  id: string;
  icon: any;
  label: string;
}

interface ToolPanelProps {
  tools: Tool[];
  selectedTool: string;
  onToolSelect: (toolId: string) => void;
}

const ToolPanel: React.FC<ToolPanelProps> = ({ tools, selectedTool, onToolSelect }) => {
  const transformTools = [
    { id: 'move', icon: Move, label: 'Move' },
    { id: 'rotate', icon: RotateCcw, label: 'Rotate' },
  ];

  const actionTools = [
    { id: 'copy', icon: Copy, label: 'Copy' },
    { id: 'delete', icon: Trash2, label: 'Delete' },
  ];

  const viewTools = [
    { id: 'layers', icon: Layers, label: 'Layers' },
    { id: 'visibility', icon: Eye, label: 'Visibility' },
  ];

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col">
      {/* Main Tools */}
      <div className="flex-1 p-2 space-y-2">
        <div className="text-xs font-medium text-gray-500 px-2 py-1">Tools</div>
        
        {tools.map((tool) => (
          <motion.button
            key={tool.id}
            onClick={() => onToolSelect(tool.id)}
            className={`w-full h-12 flex flex-col items-center justify-center rounded-lg transition-all duration-200 ${
              selectedTool === tool.id
                ? 'bg-blue-100 text-blue-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tool.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{tool.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Transform Tools */}
      <div className="p-2 space-y-2 border-t border-gray-200">
        <div className="text-xs font-medium text-gray-500 px-2 py-1">Transform</div>
        
        {transformTools.map((tool) => (
          <motion.button
            key={tool.id}
            className="w-full h-12 flex flex-col items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tool.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{tool.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Action Tools */}
      <div className="p-2 space-y-2 border-t border-gray-200">
        <div className="text-xs font-medium text-gray-500 px-2 py-1">Actions</div>
        
        {actionTools.map((tool) => (
          <motion.button
            key={tool.id}
            className="w-full h-12 flex flex-col items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tool.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{tool.label}</span>
          </motion.button>
        ))}
      </div>

      {/* View Tools */}
      <div className="p-2 space-y-2 border-t border-gray-200">
        <div className="text-xs font-medium text-gray-500 px-2 py-1">View</div>
        
        {viewTools.map((tool) => (
          <motion.button
            key={tool.id}
            className="w-full h-12 flex flex-col items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tool.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{tool.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Color Palette */}
      <div className="p-2 border-t border-gray-200">
        <div className="text-xs font-medium text-gray-500 px-2 py-1 mb-2">Colors</div>
        <div className="grid grid-cols-2 gap-1">
          {[
            '#FF6B6B', '#4ECDC4', '#9B59B6', '#74B9FF',
            '#F39C12', '#E74C3C', '#2ECC71', '#34495E',
            '#FFFFFF', '#BDC3C7', '#95A5A6', '#000000'
          ].map((color, index) => (
            <motion.button
              key={index}
              className="w-6 h-6 rounded border border-gray-300"
              style={{ backgroundColor: color }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolPanel;
