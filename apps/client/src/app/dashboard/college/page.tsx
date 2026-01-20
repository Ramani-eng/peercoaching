'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, StatusBadge, ProgressBar } from '@/components/ui';
import { CollegeIcon, ChartIcon, UsersIcon, CheckCircleIcon, BookOpenIcon } from '@/components/icons';

const pendingVerifications = [
  {
    id: 1,
    name: 'Rahul Kumar',
    email: 'rahul.k@college.edu',
    department: 'Computer Science',
    year: '3rd Year',
    enrollmentId: 'CS2022001',
    submittedAt: '2 hours ago',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.s@college.edu',
    department: 'Electronics',
    year: '2nd Year',
    enrollmentId: 'EC2023045',
    submittedAt: '5 hours ago',
  },
  {
    id: 3,
    name: 'Amit Singh',
    email: 'amit.s@college.edu',
    department: 'Mechanical',
    year: '5th Year',
    enrollmentId: 'ME2021032',
    submittedAt: '1 day ago',
  },
];

// Students to track and guide
const activeStudents = [
  {
    id: 101,
    name: 'Sneha Patel',
    department: 'Computer Science',
    year: '3rd Year',
    points: 2450,
    currentSkill: 'React',
    progress: 75,
    lastActive: '2 hours ago',
    status: 'on_track',
    recentActivity: 'Completed React Hooks module',
  },
  {
    id: 102,
    name: 'Vikram Reddy',
    department: 'Electronics',
    year: '4th Year',
    points: 1850,
    currentSkill: 'Python',
    progress: 45,
    lastActive: '3 days ago',
    status: 'needs_attention',
    recentActivity: 'Stuck on Data Structures quiz',
  },
  {
    id: 103,
    name: 'Anita Sharma',
    department: 'Computer Science',
    year: '2nd Year',
    points: 3200,
    currentSkill: 'UI/UX Design',
    progress: 90,
    lastActive: '1 hour ago',
    status: 'excelling',
    recentActivity: 'Helped 5 peers this week',
  },
  {
    id: 104,
    name: 'Rohit Mehra',
    department: 'Mechanical',
    year: '5th Year',
    points: 980,
    currentSkill: 'Data Analysis',
    progress: 30,
    lastActive: '1 week ago',
    status: 'inactive',
    recentActivity: 'No activity in 7 days',
  },
];

const dashboardStats = {
  pendingCount: 3,
  verifiedCount: 156,
  totalStudents: 159,
  activeStudents: 142,
  needsGuidance: 12,
  departments: [
    { name: 'Computer Science', students: 45, avgPoints: 2340 },
    { name: 'Electronics', students: 38, avgPoints: 1890 },
    { name: 'Mechanical', students: 42, avgPoints: 1650 },
    { name: 'Civil', students: 30, avgPoints: 1420 },
  ],
  skillGrowth: [
    { skill: 'Python', growth: 85 },
    { skill: 'React', growth: 72 },
    { skill: 'Data Analysis', growth: 68 },
    { skill: 'UI/UX Design', growth: 55 },
  ],
};

export default function CollegeDashboard() {
  const [verifying, setVerifying] = useState<number | null>(null);
  const [verifiedIds, setVerifiedIds] = useState<number[]>([]);

  const handleVerify = async (id: number) => {
    setVerifying(id);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setVerifying(null);
    setVerifiedIds([...verifiedIds, id]);
  };

  const handleReject = async (id: number) => {
    // Handle rejection
    console.log('Rejected:', id);
  };

  const pendingList = pendingVerifications.filter(v => !verifiedIds.includes(v.id));

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <header className="bg-gradient-to-b from-[rgba(17,25,40,0.95)] to-[rgba(17,25,40,0.85)] backdrop-blur-xl border-b border-[rgba(56,189,248,0.15)] sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                <CollegeIcon className="w-6 h-6 text-[#0A0E17]" />
              </div>
              <div>
                <p className="text-sm text-[#94A3B8]">College Dashboard</p>
                <p className="font-semibold text-white">IIT Delhi</p>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              <span className="text-xl">⚙️</span>
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-4xl mx-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          <Card className="!bg-gradient-to-br !from-[rgba(251,191,36,0.15)] !to-[rgba(251,191,36,0.05)] !border-[rgba(251,191,36,0.3)]">
            <div className="p-4">
              <p className="text-sm text-[#CBD5E1]">Pending</p>
              <p className="text-2xl font-bold text-[#FBBF24]">{pendingList.length}</p>
            </div>
          </Card>
          <Card className="!bg-gradient-to-br !from-[rgba(52,211,153,0.15)] !to-[rgba(52,211,153,0.05)] !border-[rgba(52,211,153,0.3)]">
            <div className="p-4">
              <p className="text-sm text-[#CBD5E1]">Verified</p>
              <p className="text-2xl font-bold text-[#34D399]">{dashboardStats.verifiedCount + verifiedIds.length}</p>
            </div>
          </Card>
          <Card className="!bg-gradient-to-br !from-[rgba(56,189,248,0.15)] !to-[rgba(56,189,248,0.05)] !border-[rgba(56,189,248,0.3)]">
            <div className="p-4">
              <p className="text-sm text-[#CBD5E1]">Total</p>
              <p className="text-2xl font-bold text-[#38BDF8]">{dashboardStats.totalStudents}</p>
            </div>
          </Card>
          <Card className="!bg-gradient-to-br !from-[rgba(0,255,209,0.15)] !to-[rgba(0,255,209,0.05)] !border-[rgba(0,255,209,0.3)]">
            <div className="p-4">
              <p className="text-sm text-[#CBD5E1]">Active</p>
              <p className="text-2xl font-bold text-[#00FFD1]">{dashboardStats.activeStudents}</p>
            </div>
          </Card>
          <Card className="!bg-gradient-to-br !from-[rgba(251,113,133,0.15)] !to-[rgba(251,113,133,0.05)] !border-[rgba(251,113,133,0.3)]">
            <div className="p-4">
              <p className="text-sm text-[#CBD5E1]">Need Help</p>
              <p className="text-2xl font-bold text-[#FB7185]">{dashboardStats.needsGuidance}</p>
            </div>
          </Card>
          <Card className="!bg-gradient-to-br !from-[rgba(167,139,250,0.15)] !to-[rgba(167,139,250,0.05)] !border-[rgba(167,139,250,0.3)]">
            <div className="p-4">
              <p className="text-sm text-[#CBD5E1]">Departments</p>
              <p className="text-2xl font-bold text-[#A78BFA]">{dashboardStats.departments.length}</p>
            </div>
          </Card>
        </div>

        {/* Pending Verifications */}
        <Card elevated className="mb-6">
          <div className="p-5 border-b border-[rgba(56,189,248,0.15)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5 text-[#CBD5E1]" />
                <h2 className="font-semibold text-white">Pending Student Verifications</h2>
              </div>
              {pendingList.length > 0 && (
                <span className="px-3 py-1 bg-[rgba(251,191,36,0.2)] text-[#FBBF24] text-xs font-bold rounded-full border border-[rgba(251,191,36,0.3)]">
                  {pendingList.length} pending
                </span>
              )}
            </div>
          </div>

          {pendingList.length > 0 ? (
            <div className="divide-y divide-[rgba(56,189,248,0.1)]">
              {pendingList.map((student) => (
                <div key={student.id} className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center text-[#0A0E17] font-bold flex-shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                      {student.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <h3 className="font-semibold text-white">{student.name}</h3>
                          <p className="text-sm text-[#94A3B8]">{student.email}</p>
                        </div>
                        <span className="text-xs text-[#64748B]">{student.submittedAt}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 mb-3">
                        <span className="px-2 py-1 bg-[rgba(56,189,248,0.1)] text-[#CBD5E1] text-xs font-medium rounded-full border border-[rgba(56,189,248,0.2)]">
                          {student.department}
                        </span>
                        <span className="px-2 py-1 bg-[rgba(56,189,248,0.1)] text-[#CBD5E1] text-xs font-medium rounded-full border border-[rgba(56,189,248,0.2)]">
                          {student.year}
                        </span>
                        <span className="px-2 py-1 bg-[rgba(129,140,248,0.15)] text-[#A78BFA] text-xs font-medium rounded-full border border-[rgba(129,140,248,0.3)]">
                          ID: {student.enrollmentId}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => handleVerify(student.id)}
                          loading={verifying === student.id}
                        >
                          ✓ Verify
                        </Button>
                        <Button 
                          size="sm" 
                          variant="danger"
                          onClick={() => handleReject(student.id)}
                        >
                          ✕ Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[rgba(52,211,153,0.15)] flex items-center justify-center mx-auto mb-3 shadow-[0_0_25px_rgba(52,211,153,0.2)]">
                <CheckCircleIcon className="w-8 h-8 text-[#34D399]" />
              </div>
              <p className="font-medium text-white">All caught up!</p>
              <p className="text-sm text-[#94A3B8]">No pending verifications</p>
            </div>
          )}
        </Card>

        {/* Student Work Tracking & Guidance */}
        <Card elevated className="mb-6">
          <div className="p-5 border-b border-[rgba(56,189,248,0.15)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpenIcon className="w-5 h-5 text-[#CBD5E1]" />
                <h2 className="font-semibold text-white">Track & Guide Students</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[rgba(251,113,133,0.2)] text-[#FB7185] text-xs font-bold rounded-full border border-[rgba(251,113,133,0.3)]">
                  {activeStudents.filter(s => s.status === 'needs_attention' || s.status === 'inactive').length} need attention
                </span>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] mt-2">
              Monitor student progress and provide guidance to those who need help
            </p>
          </div>

          <div className="divide-y divide-[rgba(56,189,248,0.1)]">
            {activeStudents.map((student) => {
              const statusConfig = {
                on_track: { label: 'On Track', bg: 'bg-[rgba(52,211,153,0.15)]', text: 'text-[#34D399]', border: 'border-[rgba(52,211,153,0.3)]', avatar: 'from-[#34D399] to-[#10B981]' },
                excelling: { label: 'Excelling', bg: 'bg-[rgba(56,189,248,0.15)]', text: 'text-[#38BDF8]', border: 'border-[rgba(56,189,248,0.3)]', avatar: 'from-[#38BDF8] to-[#818CF8]' },
                needs_attention: { label: 'Needs Help', bg: 'bg-[rgba(251,191,36,0.15)]', text: 'text-[#FBBF24]', border: 'border-[rgba(251,191,36,0.3)]', avatar: 'from-[#FBBF24] to-[#F59E0B]' },
                inactive: { label: 'Inactive', bg: 'bg-[rgba(251,113,133,0.15)]', text: 'text-[#FB7185]', border: 'border-[rgba(251,113,133,0.3)]', avatar: 'from-[#FB7185] to-[#F43F5E]' },
              };
              const config = statusConfig[student.status as keyof typeof statusConfig];

              return (
                <div key={student.id} className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${config.avatar} flex items-center justify-center text-[#0A0E17] font-bold flex-shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                      {student.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-white">{student.name}</h3>
                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${config.bg} ${config.text} border ${config.border}`}>
                              {config.label}
                            </span>
                          </div>
                          <p className="text-sm text-[#94A3B8]">{student.department} • {student.year}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#00FFD1]">{student.points.toLocaleString()} pts</p>
                          <p className="text-xs text-[#64748B]">Last active: {student.lastActive}</p>
                        </div>
                      </div>

                      {/* Progress on current skill */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-[#CBD5E1]">Learning: {student.currentSkill}</span>
                          <span className="text-[#94A3B8]">{student.progress}%</span>
                        </div>
                        <ProgressBar value={student.progress} size="sm" />
                      </div>

                      {/* Recent activity */}
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-[#94A3B8]">
                          <span className="text-[#64748B]">Recent:</span> {student.recentActivity}
                        </p>
                        <div className="flex gap-2">
                          {(student.status === 'needs_attention' || student.status === 'inactive') && (
                            <Button size="sm" variant="primary">
                              💬 Send Guidance
                            </Button>
                          )}
                          <Button size="sm" variant="secondary">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Link */}
          <div className="p-4 border-t border-[rgba(56,189,248,0.1)] text-center">
            <button className="text-sm font-medium text-[#00FFD1] hover:text-[#38BDF8] transition-colors">
              View All {dashboardStats.totalStudents} Students →
            </button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Department Analytics */}
          <Card>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <ChartIcon className="w-5 h-5 text-[#CBD5E1]" />
                <h3 className="font-semibold text-white">Department-wise Analytics</h3>
              </div>
              <div className="space-y-4">
                {dashboardStats.departments.map((dept) => (
                  <div key={dept.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[#CBD5E1]">{dept.name}</span>
                      <span className="text-sm text-[#94A3B8]">{dept.students} students</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-[rgba(56,189,248,0.1)] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                          style={{ width: `${(dept.avgPoints / 3000) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#64748B] w-16 text-right">
                        {dept.avgPoints} avg pts
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Skill Growth */}
          <Card>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📈</span>
                <h3 className="font-semibold text-white">Skill Growth Trends</h3>
              </div>
              <div className="space-y-4">
                {dashboardStats.skillGrowth.map((skill) => (
                  <div key={skill.skill}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[#CBD5E1]">{skill.skill}</span>
                      <span className="text-sm font-semibold text-[#34D399]">+{skill.growth}%</span>
                    </div>
                    <ProgressBar value={skill.growth} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Info Notice */}
        <Card className="mt-6 !bg-gradient-to-r !from-[rgba(56,189,248,0.1)] !to-[rgba(129,140,248,0.08)] !border-[rgba(56,189,248,0.2)]">
          <div className="p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[rgba(56,189,248,0.15)] flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <span className="text-lg">🎓</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Your role as a College Representative</p>
              <p className="text-sm text-[#94A3B8] mt-1">
                You can verify student enrollments, track their learning progress, and send guidance 
                to students who need help. Point editing is not available to ensure platform fairness.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
