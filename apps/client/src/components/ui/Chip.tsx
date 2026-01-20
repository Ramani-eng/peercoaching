'use client';

import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function Chip({ children, selected, onClick, icon }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2.5 rounded-full
        text-sm font-medium transition-all duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFD1]
        ${selected 
          ? 'bg-gradient-to-r from-[#00FFD1] to-[#38BDF8] text-[#0A0E17] shadow-[0_0_20px_rgba(0,255,209,0.5)]' 
          : 'bg-gradient-to-br from-[rgba(17,25,40,0.8)] to-[rgba(22,33,55,0.75)] backdrop-blur-xl text-[#CBD5E1] border border-[rgba(56,189,248,0.2)] hover:border-[rgba(0,255,209,0.5)] hover:text-white hover:bg-gradient-to-br hover:from-[rgba(0,255,209,0.1)] hover:to-[rgba(56,189,248,0.08)] hover:shadow-[0_0_20px_rgba(0,255,209,0.2)]'
        }
      `}
    >
      {icon}
      {children}
    </button>
  );
}

interface ChipGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ChipGroup({ children, className = '' }: ChipGroupProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {children}
    </div>
  );
}
