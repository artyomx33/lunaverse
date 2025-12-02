import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-black text-white hover:bg-neutral-800',
    secondary: 'bg-white text-black border border-black hover:bg-neutral-50',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
