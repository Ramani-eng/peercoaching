'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, Input, Chip, ChipGroup, ProgressBar } from '@/components/ui';
import { StartupIcon, TrophyIcon, UsersIcon, ChartIcon } from '@/components/icons';

const activeProjects = [
  {
    id: 1,
    title: 'E-commerce Dashboard UI',
    status: 'active',
    applicants: 12,
    hired: 2,
    deadline: '5 days left',
    skills: ['React', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Mobile App Landing Page',
    status: 'completed',
    applicants: 8,
    hired: 1,
    completedBy: 'Priya S.',
    rating: 4.8,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
];

const topStudents = [
  {
    id: 1,
    name: 'Rahul Kumar',
    avatar: 'R',
    points: 4520,
    skills: ['Python', 'ML', 'Data'],
    projectsCompleted: 5,
    teachingRate: 92,
  },
  {
    id: 2,
    name: 'Sneha Patel',
    avatar: 'S',
    points: 3890,
    skills: ['React', 'Node.js', 'TypeScript'],
    projectsCompleted: 4,
    teachingRate: 88,
  },
  {
    id: 3,
    name: 'Amit Singh',
    avatar: 'A',
    points: 3650,
    skills: ['UI/UX', 'Figma', 'Webflow'],
    projectsCompleted: 6,
    teachingRate: 85,
  },
  {
    id: 4,
    name: 'Priya Sharma',
    avatar: 'P',
    points: 3420,
    skills: ['Python', 'Django', 'PostgreSQL'],
    projectsCompleted: 3,
    teachingRate: 90,
  },
];

const dashboardStats = {
  activeProjects: 3,
  totalHired: 12,
  avgRating: 4.6,
  studentsContacted: 45,
};

export default function StartupDashboard() {
  const [showPostForm, setShowPostForm] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                <StartupIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Startup Dashboard</p>
                <p className="font-semibold text-slate-800">TechStart Inc.</p>
              </div>
            </div>
            <Button size="sm" onClick={() => setShowPostForm(true)}>
              + Post Project
            </Button>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-4xl mx-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-purple-50 border-purple-200">
            <div className="p-4">
              <p className="text-sm text-slate-600">Active Projects</p>
              <p className="text-2xl font-bold text-purple-600">{dashboardStats.activeProjects}</p>
            </div>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <div className="p-4">
              <p className="text-sm text-slate-600">Total Hired</p>
              <p className="text-2xl font-bold text-emerald-600">{dashboardStats.totalHired}</p>
            </div>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <div className="p-4">
              <p className="text-sm text-slate-600">Avg Rating</p>
              <p className="text-2xl font-bold text-amber-600">{dashboardStats.avgRating} ⭐</p>
            </div>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-4">
              <p className="text-sm text-slate-600">Contacted</p>
              <p className="text-2xl font-bold text-blue-600">{dashboardStats.studentsContacted}</p>
            </div>
          </Card>
        </div>

        {/* Post Project Form */}
        {showPostForm && (
          <Card elevated className="mb-6 animate-in fade-in duration-200">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800">Post New Project</h3>
                <button onClick={() => setShowPostForm(false)} className="text-slate-400 hover:text-slate-600">✕</button>
              </div>
              <div className="space-y-4">
                <Input label="Project Title" placeholder="e.g., Build a React Dashboard" />
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    className="w-full p-4 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 resize-none"
                    rows={3}
                    placeholder="Describe the project requirements..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Required Skills</label>
                  <ChipGroup>
                    {['React', 'Python', 'Node.js', 'Figma', 'Data'].map((skill) => (
                      <Chip key={skill}>{skill}</Chip>
                    ))}
                  </ChipGroup>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Points Required" placeholder="e.g., 2000" type="number" />
                  <Input label="Stipend (₹)" placeholder="e.g., 15000" type="number" />
                </div>
                <Button fullWidth>Post Project</Button>
              </div>
            </div>
          </Card>
        )}

        {/* Active Projects */}
        <Card elevated className="mb-6">
          <div className="p-5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <TrophyIcon className="w-5 h-5 text-slate-600" />
              <h2 className="font-semibold text-slate-800">Your Projects</h2>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {activeProjects.map((project) => (
              <div key={project.id} className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-slate-800">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'active' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {project.status === 'active' ? '● Active' : '✓ Completed'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>👥 {project.applicants} applicants</span>
                  <span>✓ {project.hired} hired</span>
                  {project.deadline && <span className="text-amber-600">⏱️ {project.deadline}</span>}
                  {project.rating && <span>⭐ {project.rating}</span>}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Student Leaderboard */}
        <Card elevated className="mb-6">
          <div className="p-5 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5 text-slate-600" />
                <h2 className="font-semibold text-slate-800">Hire-Ready Talent</h2>
              </div>
              <span className="text-sm text-teal-600 font-medium">Based on verified proof</span>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {topStudents.map((student, index) => (
              <div key={student.id} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-bold">
                      {student.avatar}
                    </div>
                    {index < 3 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-slate-800">{student.name}</h3>
                        <p className="text-sm text-slate-500">{student.points.toLocaleString()} points</p>
                      </div>
                      <Button size="sm" variant="secondary">View Profile</Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {student.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>🚀 {student.projectsCompleted} projects</span>
                      <span>🎓 {student.teachingRate}% teaching rate</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Info Notice */}
        <Card className="bg-slate-50 border-slate-200">
          <div className="p-4 flex items-start gap-3">
            <span className="text-lg">📋</span>
            <div>
              <p className="text-sm font-medium text-slate-700">Outcome-driven hiring</p>
              <p className="text-sm text-slate-500 mt-1">
                All student profiles show verified skills, completed projects, and teaching impact. 
                No resumes—just proven outcomes.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
