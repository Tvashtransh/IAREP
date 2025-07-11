import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  iconName?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, iconName }) => {
  const base = 'px-4 py-2 rounded-md font-semibold flex items-center gap-2';
  const styles =
    variant === 'primary'
      ? 'bg-[#41E5FF] text-[#005C67] hover:bg-[#22C8B2]'
      : 'bg-[#ECFCFF] text-[#007B8F] hover:bg-[#D1F5F9]';
  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {iconName && (
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#E5E7EB" /><path d="M8 4l4 4-4 4-4-4 4-4z" fill="#007B8F"/></svg>
      )}
      {children}
    </button>
  );
};

export default Button; 