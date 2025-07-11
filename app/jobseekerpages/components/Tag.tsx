import React from 'react';

interface TagProps {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, color = 'bg-[#F3F4F6]', textColor = 'text-[#171A1F]', className = '' }) => (
  <span className={`px-3 py-1 rounded-md text-xs font-medium ${color} ${textColor} ${className}`}>{children}</span>
);

export default Tag; 