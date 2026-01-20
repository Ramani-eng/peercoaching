'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  glow?: 'none' | 'teal' | 'purple' | 'blue' | 'pink';
  onClick?: () => void;
}

export function Card({ 
  children, 
  className = '', 
  elevated = false, 
  padding = 'md',
  glow = 'none',
  onClick 
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
  };

  const glowStyles = {
    none: '',
    teal: 'shadow-[0_0_40px_rgba(0,255,209,0.2)]',
    purple: 'shadow-[0_0_40px_rgba(167,139,250,0.2)]',
    blue: 'shadow-[0_0_40px_rgba(129,140,248,0.2)]',
    pink: 'shadow-[0_0_40px_rgba(244,114,182,0.2)]',
  };

  return (
    <div
      className={`
        bg-gradient-to-br from-[rgba(17,25,40,0.9)] to-[rgba(22,33,55,0.85)]
        backdrop-blur-xl rounded-2xl 
        border border-[rgba(56,189,248,0.15)]
        ${elevated ? 'bg-gradient-to-br from-[rgba(22,33,55,0.95)] to-[rgba(30,41,70,0.9)] shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]' : 'shadow-[0_4px_30px_rgba(0,0,0,0.3)]'}
        ${paddingStyles[padding]}
        ${glowStyles[glow]}
        ${onClick ? 'cursor-pointer hover:border-[rgba(0,255,209,0.4)] hover:bg-gradient-to-br hover:from-[rgba(0,255,209,0.08)] hover:to-[rgba(56,189,248,0.05)] hover:shadow-[0_0_50px_rgba(0,255,209,0.15)] transition-all duration-300' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface SelectableCardProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SelectableCard({ children, selected, onClick, className = '' }: SelectableCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300
        backdrop-blur-xl
        ${selected 
          ? 'border-[#00FFD1] bg-gradient-to-br from-[rgba(0,255,209,0.15)] to-[rgba(56,189,248,0.1)] shadow-[0_0_40px_rgba(0,255,209,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]' 
          : 'border-[rgba(56,189,248,0.15)] bg-gradient-to-br from-[rgba(17,25,40,0.8)] to-[rgba(22,33,55,0.7)] hover:border-[rgba(0,255,209,0.4)] hover:bg-gradient-to-br hover:from-[rgba(0,255,209,0.08)] hover:to-[rgba(56,189,248,0.05)] hover:shadow-[0_0_30px_rgba(0,255,209,0.15)]'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
