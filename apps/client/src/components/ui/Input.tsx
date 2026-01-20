'use client';

import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[#CBD5E1] mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full bg-gradient-to-br from-[rgba(17,25,40,0.9)] to-[rgba(22,33,55,0.85)]
            backdrop-blur-xl
            border border-[rgba(56,189,248,0.2)] rounded-xl px-4 py-3.5
            text-white placeholder-[#64748B]
            transition-all duration-300
            hover:border-[rgba(56,189,248,0.4)] hover:bg-gradient-to-br hover:from-[rgba(22,33,55,0.95)] hover:to-[rgba(30,41,70,0.9)]
            focus:outline-none focus:border-[#00FFD1] 
            focus:shadow-[0_0_0_3px_rgba(0,255,209,0.2),0_0_30px_rgba(0,255,209,0.25)]
            focus:bg-gradient-to-br focus:from-[rgba(22,33,55,0.98)] focus:to-[rgba(30,41,70,0.95)]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-[#FB7185] focus:border-[#FB7185] focus:shadow-[0_0_0_3px_rgba(251,113,133,0.2),0_0_30px_rgba(251,113,133,0.2)]' : ''}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-[#FB7185]">{error}</p>}
        {hint && !error && <p className="mt-2 text-sm text-[#94A3B8]">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
