'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  glow = true,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold
    rounded-xl transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFD1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E17]
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-[#00FFD1] via-[#38BDF8] to-[#818CF8]
      text-[#0A0E17] font-bold
      hover:shadow-[0_0_40px_rgba(0,255,209,0.5),0_0_80px_rgba(0,255,209,0.2)]
      hover:translate-y-[-2px]
      ${glow ? 'shadow-[0_0_30px_rgba(0,255,209,0.4)]' : ''}
    `,
    secondary: `
      bg-gradient-to-br from-[rgba(17,25,40,0.9)] to-[rgba(22,33,55,0.85)]
      backdrop-blur-xl
      text-white border border-[rgba(56,189,248,0.25)]
      hover:border-[rgba(0,255,209,0.5)] hover:bg-gradient-to-br hover:from-[rgba(0,255,209,0.1)] hover:to-[rgba(56,189,248,0.08)]
      hover:shadow-[0_0_30px_rgba(0,255,209,0.25)]
    `,
    ghost: `
      bg-transparent text-[#CBD5E1]
      hover:bg-[rgba(148,163,184,0.15)] hover:text-white
    `,
    danger: `
      bg-gradient-to-r from-[#FB7185] to-[#F43F5E]
      text-white font-bold
      hover:shadow-[0_0_40px_rgba(251,113,133,0.5)]
      hover:translate-y-[-2px]
      ${glow ? 'shadow-[0_0_30px_rgba(251,113,133,0.4)]' : ''}
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-[15px]',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
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
