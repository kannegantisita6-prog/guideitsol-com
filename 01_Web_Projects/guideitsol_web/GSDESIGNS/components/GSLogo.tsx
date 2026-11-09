import React from 'react';

interface GSLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

const GSLogo: React.FC<GSLogoProps> = ({ 
  size = 'md', 
  className = '', 
  showText = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Circle */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        {/* Outer colorful ring */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="black"
          />
          
          {/* Colorful segments */}
          <path
            d="M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z"
            fill="#FF6B6B" // Coral/Red-Orange
          />
          <path
            d="M 50 50 L 100 50 A 50 50 0 0 1 50 100 Z"
            fill="#4ECDC4" // Teal/Seafoam Green
          />
          <path
            d="M 50 50 L 50 100 A 50 50 0 0 1 0 50 Z"
            fill="#9B59B6" // Purple/Lavender
          />
          <path
            d="M 50 50 L 0 50 A 50 50 0 0 1 50 0 Z"
            fill="#74B9FF" // Sky Blue
          />
          
          {/* White inner circle */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="white"
          />
          
          {/* GS Letters */}
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fill="black"
            fontSize="24"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            letterSpacing="-2"
          >
            GS
          </text>
        </svg>
      </div>
      
      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-gray-900 ${textSizes[size]}`}>
            GSSTUDIO
          </span>
          <span className={`text-gray-600 ${textSizes[size]}`} style={{ fontSize: '0.7em' }}>
            Design Platform
          </span>
        </div>
      )}
    </div>
  );
};

export default GSLogo;
