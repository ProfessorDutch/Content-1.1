import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  icon, 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'flex items-center space-x-2 px-4 py-2 rounded-md transition';
  const variants = {
    primary: 'bg-primary text-secondary hover:bg-primary-dark',
    secondary: 'bg-secondary text-primary hover:bg-secondary-dark',
    outline: 'border border-neutral/20 text-neutral-dark hover:bg-secondary'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}