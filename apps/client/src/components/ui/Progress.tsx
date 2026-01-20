'use client';

import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export function ProgressBar({ 
  value, 
  max = 100, 
  className = '',
  showLabel = false,
  size = 'md',
  glow = true
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5',
  };

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#CBD5E1]">Progress</span>
          <span className="text-[#00FFD1] font-semibold">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full bg-[rgba(56,189,248,0.15)] rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`bg-gradient-to-r from-[#00FFD1] via-[#38BDF8] to-[#818CF8] rounded-full transition-all duration-500 ease-out ${sizes[size]} ${glow ? 'shadow-[0_0_15px_rgba(0,255,209,0.6)]' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

export function StepProgress({ currentStep, totalSteps, labels }: StepProgressProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                  transition-all duration-300
                  ${i + 1 < currentStep 
                    ? 'bg-gradient-to-r from-[#00FFD1] to-[#38BDF8] text-[#0A0E17] shadow-[0_0_20px_rgba(0,255,209,0.5)]' 
                    : i + 1 === currentStep 
                      ? 'bg-gradient-to-r from-[#00FFD1] to-[#38BDF8] text-[#0A0E17] ring-4 ring-[rgba(0,255,209,0.3)] shadow-[0_0_30px_rgba(0,255,209,0.6)]' 
                      : 'bg-[rgba(56,189,248,0.15)] text-[#94A3B8] border border-[rgba(56,189,248,0.25)]'
                  }
                `}
              >
                {i + 1 < currentStep ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              {labels && labels[i] && (
                <span className={`mt-2 text-xs font-medium ${i + 1 <= currentStep ? 'text-[#00FFD1]' : 'text-[#94A3B8]'}`}>
                  {labels[i]}
                </span>
              )}
            </div>
            {i < totalSteps - 1 && (
              <div 
                className={`flex-1 h-1 mx-3 rounded-full transition-all duration-300 ${
                  i + 1 < currentStep 
                    ? 'bg-gradient-to-r from-[#00FFD1] to-[#38BDF8] shadow-[0_0_10px_rgba(0,255,209,0.5)]' 
                    : 'bg-[rgba(56,189,248,0.15)]'
                }`} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="text-center text-sm text-[#94A3B8] mt-4">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
