import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = "font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 rounded-full cursor-pointer";
  
  const variantClasses = {
    primary: "bg-primary-blue hover:bg-primary-blue/90 text-white shadow-[0_4px_12px_rgba(74,127,255,0.3)]",
    secondary: "bg-white hover:bg-primary-blue text-primary-blue hover:text-white border-2 border-primary-blue"
  };
  
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base", 
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
