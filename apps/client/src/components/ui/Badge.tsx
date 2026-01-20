'use client';

import React from 'react';

interface TrustBadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning';
}

export function TrustBadge({ icon, children, variant = 'default' }: TrustBadgeProps) {
  const variants = {
    default: 'bg-[rgba(0,255,209,0.15)] text-[#00FFD1] border-[rgba(0,255,209,0.3)] shadow-[0_0_15px_rgba(0,255,209,0.2)]',
    success: 'bg-[rgba(52,211,153,0.15)] text-[#34D399] border-[rgba(52,211,153,0.3)] shadow-[0_0_15px_rgba(52,211,153,0.2)]',
    warning: 'bg-[rgba(251,191,36,0.15)] text-[#FBBF24] border-[rgba(251,191,36,0.3)] shadow-[0_0_15px_rgba(251,191,36,0.2)]',
  };

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border backdrop-blur-xl ${variants[variant]}`}>
      {icon}
      {children}
    </span>
  );
}

interface StatusBadgeProps {
  status: 'pending' | 'verified' | 'active' | 'rejected';
  children?: React.ReactNode;
}

export function StatusBadge({ status, children }: StatusBadgeProps) {
  const styles = {
    pending: 'bg-[rgba(251,191,36,0.2)] text-[#FBBF24] border-[rgba(251,191,36,0.4)] shadow-[0_0_15px_rgba(251,191,36,0.2)]',
    verified: 'bg-[rgba(96,165,250,0.2)] text-[#60A5FA] border-[rgba(96,165,250,0.4)] shadow-[0_0_15px_rgba(96,165,250,0.2)]',
    active: 'bg-[rgba(52,211,153,0.2)] text-[#34D399] border-[rgba(52,211,153,0.4)] shadow-[0_0_15px_rgba(52,211,153,0.2)]',
    rejected: 'bg-[rgba(251,113,133,0.2)] text-[#FB7185] border-[rgba(251,113,133,0.4)] shadow-[0_0_15px_rgba(251,113,133,0.2)]',
  };

  const dotColors = {
    pending: 'bg-[#FBBF24] shadow-[0_0_10px_rgba(251,191,36,0.8)]',
    verified: 'bg-[#60A5FA] shadow-[0_0_10px_rgba(96,165,250,0.8)]',
    active: 'bg-[#34D399] shadow-[0_0_10px_rgba(52,211,153,0.8)]',
    rejected: 'bg-[#FB7185] shadow-[0_0_10px_rgba(251,113,133,0.8)]',
  };

  const labels = {
    pending: 'Pending',
    verified: 'Verified',
    active: 'Active',
    rejected: 'Rejected',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-xl ${styles[status]}`}>
      <span className={`w-2 h-2 rounded-full animate-pulse ${dotColors[status]}`} />
      {children || labels[status]}
    </span>
  );
}
