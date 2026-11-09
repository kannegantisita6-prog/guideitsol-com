'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Image, Circle, Group } from 'react-konva';
import { motion } from 'framer-motion';

interface DesignElement {
  id: string;
  type: 'text' | 'rectangle' | 'circle' | 'image';
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  radius?: number;
  imageUrl?: string;
}

interface DesignCanvasProps {
  selectedTool: string;
}

const DesignCanvas: React.FC<DesignCanvasProps> = ({ selectedTool }) => {
  const stageRef = useRef<any>(null);
  const [elements, setElements] = useState<DesignElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });

  // Sample elements for demonstration
  useEffect(() => {
    const sampleElements: DesignElement[] = [
      {
        id: '1',
        type: 'text',
        x: 100,
        y: 100,
        text: 'Welcome to GSSTUDIO',
        fontSize: 32,
        fontFamily: 'Arial',
        fill: '#333333'
      },
      {
        id: '2',
        type: 'rectangle',
        x: 200,
        y: 200,
        width: 150,
        height: 100,
        fill: '#4ECDC4',
        stroke: '#2C3E50',
        strokeWidth: 2
      },
      {
        id: '3',
        type: 'circle',
        x: 400,
        y: 300,
        radius: 50,
        fill: '#FF6B6B',
        stroke: '#2C3E50',
        strokeWidth: 2
      }
    ];
    setElements(sampleElements);
  }, []);

  const handleStageClick = (e: any) => {
    if (selectedTool === 'text') {
      const stage = e.target.getStage();
      const point = stage.getPointerPosition();
      
      const newElement: DesignElement = {
        id: Date.now().toString(),
        type: 'text',
        x: point.x,
        y: point.y,
        text: 'Double click to edit',
        fontSize: 16,
        fontFamily: 'Arial',
        fill: '#000000'
      };
      
      setElements([...elements, newElement]);
    } else if (selectedTool === 'rectangle') {
      const stage = e.target.getStage();
      const point = stage.getPointerPosition();
      
      const newElement: DesignElement = {
        id: Date.now().toString(),
        type: 'rectangle',
        x: point.x,
        y: point.y,
        width: 100,
        height: 60,
        fill: '#74B9FF',
        stroke: '#2C3E50',
        strokeWidth: 1
      };
      
      setElements([...elements, newElement]);
    } else if (selectedTool === 'circle') {
      const stage = e.target.getStage();
      const point = stage.getPointerPosition();
      
      const newElement: DesignElement = {
        id: Date.now().toString(),
        type: 'circle',
        x: point.x,
        y: point.y,
        radius: 30,
        fill: '#9B59B6',
        stroke: '#2C3E50',
        strokeWidth: 1
      };
      
      setElements([...elements, newElement]);
    }
  };

  const handleElementClick = (elementId: string) => {
    setSelectedElement(elementId);
  };

  const handleElementDragEnd = (elementId: string, newX: number, newY: number) => {
    setElements(elements.map(el => 
      el.id === elementId ? { ...el, x: newX, y: newY } : el
    ));
  };

  const handleTextDoubleClick = (elementId: string) => {
    const element = elements.find(el => el.id === elementId);
    if (element && element.type === 'text') {
      const newText = prompt('Enter text:', element.text);
      if (newText !== null) {
        setElements(elements.map(el => 
          el.id === elementId ? { ...el, text: newText } : el
        ));
      }
    }
  };

  const renderElement = (element: DesignElement) => {
    const isSelected = selectedElement === element.id;
    
    switch (element.type) {
      case 'text':
        return (
          <Text
            key={element.id}
            x={element.x}
            y={element.y}
            text={element.text || ''}
            fontSize={element.fontSize || 16}
            fontFamily={element.fontFamily || 'Arial'}
            fill={element.fill || '#000000'}
            draggable={selectedTool === 'select'}
            onClick={() => handleElementClick(element.id)}
            onTap={() => handleElementClick(element.id)}
            onDragEnd={(e) => handleElementDragEnd(element.id, e.target.x(), e.target.y())}
            onDblClick={() => handleTextDoubleClick(element.id)}
            onDblTap={() => handleTextDoubleClick(element.id)}
            stroke={isSelected ? '#3B82F6' : undefined}
            strokeWidth={isSelected ? 2 : undefined}
          />
        );
        
      case 'rectangle':
        return (
          <Rect
            key={element.id}
            x={element.x}
            y={element.y}
            width={element.width || 100}
            height={element.height || 60}
            fill={element.fill || '#74B9FF'}
            stroke={isSelected ? '#3B82F6' : (element.stroke || '#2C3E50')}
            strokeWidth={isSelected ? 3 : (element.strokeWidth || 1)}
            draggable={selectedTool === 'select'}
            onClick={() => handleElementClick(element.id)}
            onTap={() => handleElementClick(element.id)}
            onDragEnd={(e) => handleElementDragEnd(element.id, e.target.x(), e.target.y())}
          />
        );
        
      case 'circle':
        return (
          <Circle
            key={element.id}
            x={element.x}
            y={element.y}
            radius={element.radius || 30}
            fill={element.fill || '#9B59B6'}
            stroke={isSelected ? '#3B82F6' : (element.stroke || '#2C3E50')}
            strokeWidth={isSelected ? 3 : (element.strokeWidth || 1)}
            draggable={selectedTool === 'select'}
            onClick={() => handleElementClick(element.id)}
            onTap={() => handleElementClick(element.id)}
            onDragEnd={(e) => handleElementDragEnd(element.id, e.target.x(), e.target.y())}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="canvas-area"
    >
      <Stage
        ref={stageRef}
        width={canvasSize.width}
        height={canvasSize.height}
        onClick={handleStageClick}
        onTap={handleStageClick}
        style={{ 
          background: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        <Layer>
          {elements.map(renderElement)}
        </Layer>
      </Stage>
      
      {/* Canvas Info */}
      <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-sm text-sm text-gray-600">
        {canvasSize.width} × {canvasSize.height}
      </div>
      
      {/* Tool Info */}
      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg shadow-sm text-sm text-gray-600">
        Tool: {selectedTool.charAt(0).toUpperCase() + selectedTool.slice(1)}
      </div>
    </motion.div>
  );
};

export default DesignCanvas;
