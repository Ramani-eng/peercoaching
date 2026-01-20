// User roles for the platform
export type UserRole = 'student' | 'college' | 'startup' | 'admin';

// Base user interface
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
  isActive: boolean;
}

// Student specific profile
export interface StudentProfile extends User {
  role: 'student';
  collegeId?: string;
  skills: string[];
  learningGoals: string[];
  teachingSkills: string[];
  enrollmentVerified: boolean;
}

// College Representative profile
export interface CollegeProfile extends User {
  role: 'college';
  collegeName: string;
  collegeId: string;
  department?: string;
  verificationDocuments?: string[];
}

// Startup/Agency profile
export interface StartupProfile extends User {
  role: 'startup';
  companyName: string;
  companyWebsite?: string;
  industry: string;
  sponsoredProjects: string[];
}

// Admin profile
export interface AdminProfile extends User {
  role: 'admin';
  permissions: AdminPermission[];
}

export type AdminPermission = 
  | 'manage_users'
  | 'manage_content'
  | 'manage_compliance'
  | 'view_analytics'
  | 'manage_rewards';

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
