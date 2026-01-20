// Shared constants across the platform

export const ROLES = {
  STUDENT: 'student',
  COLLEGE: 'college',
  STARTUP: 'startup',
  ADMIN: 'admin',
} as const;

export const ROLE_LABELS: Record<string, string> = {
  student: 'Student',
  college: 'College Representative',
  startup: 'Startup / Agency',
  admin: 'Administrator',
};

export const APP_CONFIG = {
  name: 'PeerCoaching',
  tagline: 'Learn. Teach. Grow Together.',
  version: '1.0.0',
};

// Theme colors for glowsmorphic dark theme
export const THEME_COLORS = {
  primary: '#6366f1', // Indigo
  secondary: '#8b5cf6', // Purple
  accent: '#22d3ee', // Cyan glow
  success: '#10b981', // Emerald
  warning: '#f59e0b', // Amber
  error: '#ef4444', // Red
  background: {
    dark: '#0a0a0f',
    card: '#12121a',
    elevated: '#1a1a25',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#94a3b8',
    muted: '#64748b',
  },
  glow: {
    primary: 'rgba(99, 102, 241, 0.4)',
    accent: 'rgba(34, 211, 238, 0.3)',
    success: 'rgba(16, 185, 129, 0.3)',
  },
};

// Firebase collections
export const COLLECTIONS = {
  USERS: 'users',
  STUDENTS: 'students',
  COLLEGES: 'colleges',
  STARTUPS: 'startups',
  SESSIONS: 'coaching_sessions',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  REWARDS: 'rewards',
  ANALYTICS: 'analytics',
};
