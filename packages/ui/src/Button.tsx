'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  glow = true,
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center font-medium
    rounded-xl transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-indigo-500 to-purple-600
      hover:from-indigo-400 hover:to-purple-500
      text-white focus:ring-indigo-500
      ${glow ? 'shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50' : ''}
    `,
    secondary: `
      bg-[#1a1a25] border border-[#2a2a35]
      hover:bg-[#252530] hover:border-[#3a3a45]
      text-slate-200 focus:ring-purple-500
      ${glow ? 'hover:shadow-lg hover:shadow-purple-500/20' : ''}
    `,
    ghost: `
      bg-transparent hover:bg-[#1a1a25]
      text-slate-300 hover:text-white
      focus:ring-slate-500
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-rose-600
      hover:from-red-400 hover:to-rose-500
      text-white focus:ring-red-500
      ${glow ? 'shadow-lg shadow-red-500/30 hover:shadow-red-500/50' : ''}
    `,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
