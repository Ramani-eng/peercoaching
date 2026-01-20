'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, StatusBadge, ProgressBar } from '@/components/ui';
import { AdminIcon, ChartIcon, UsersIcon, ShieldCheckIcon, CheckCircleIcon } from '@/components/icons';

const platformMetrics = {
  totalUsers: 12458,
  activeToday: 3420,
  totalSessions: 45230,
  avgPoints: 1850,
  verificationRate: 94,
  disputeRate: 0.3,
};

const pendingApprovals = [
  {
    id: 1,
    type: 'college',
    title: 'New College Registration',
    details: 'Delhi University - Engineering Department',
    submittedAt: '3 hours ago',
  },
  {
    id: 2,
    type: 'startup',
    title: 'Startup Verification',
    details: 'TechLabs Inc. - Hiring verification',
    submittedAt: '5 hours ago',
  },
  {
    id: 3,
    type: 'reward',
    title: 'Laptop Reward Request',
    details: 'Rahul Kumar - 10,500 points - KYC verified',
    submittedAt: '1 day ago',
  },
];

const rewardRequests = [
  {
    id: 1,
    student: 'Priya Sharma',
    reward: 'Laptop',
    points: 10500,
    kyc: true,
    status: 'pending',
  },
  {
    id: 2,
    student: 'Amit Singh',
    reward: 'Semester Fee',
    points: 15200,
    kyc: true,
    status: 'pending',
  },
];

const ideaReviews = [
  {
    id: 1,
    title: 'AI-Powered Study Planner',
    student: 'Sneha Patel',
    status: 'under_review',
    votes: 45,
  },
  {
    id: 2,
    title: 'Campus Food Sharing',
    student: 'Rahul Kumar',
    status: 'approved',
    votes: 78,
  },
];

const recentLogs = [
  { action: 'User verified', user: 'Priya S.', time: '2 mins ago', type: 'success' },
  { action: 'Reward approved', user: 'System', time: '15 mins ago', type: 'success' },
  { action: 'Dispute flagged', user: 'Auto-detect', time: '1 hour ago', type: 'warning' },
  { action: 'College registered', user: 'Admin', time: '2 hours ago', type: 'info' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-slate-900 text-white hidden lg:block">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
              <AdminIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Admin Panel</p>
              <p className="text-xs text-slate-400">PeerCoaching</p>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { id: 'overview', label: 'Dashboard', icon: '📊' },
              { id: 'users', label: 'Users', icon: '👥' },
              { id: 'approvals', label: 'Approvals', icon: '✅', badge: 3 },
              { id: 'rewards', label: 'Rewards', icon: '🎁', badge: 2 },
              { id: 'ideas', label: 'Ideas', icon: '💡' },
              { id: 'compliance', label: 'Compliance', icon: '🛡️' },
              { id: 'logs', label: 'Audit Logs', icon: '📋' },
              { id: 'settings', label: 'Settings', icon: '⚙️' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-800">Admin Dashboard</h1>
              <p className="text-sm text-slate-500">Platform governance and management</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-slate-100 relative">
                <span className="text-xl">🔔</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-semibold">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 max-w-6xl">
          {/* Platform Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="bg-white">
              <div className="p-4">
                <p className="text-sm text-slate-500">Total Users</p>
                <p className="text-2xl font-bold text-slate-800">{platformMetrics.totalUsers.toLocaleString()}</p>
                <p className="text-xs text-emerald-600 mt-1">↑ 12% this month</p>
              </div>
            </Card>
            <Card className="bg-white">
              <div className="p-4">
                <p className="text-sm text-slate-500">Active Today</p>
                <p className="text-2xl font-bold text-slate-800">{platformMetrics.activeToday.toLocaleString()}</p>
                <p className="text-xs text-emerald-600 mt-1">↑ 8% vs yesterday</p>
              </div>
            </Card>
            <Card className="bg-white">
              <div className="p-4">
                <p className="text-sm text-slate-500">Total Sessions</p>
                <p className="text-2xl font-bold text-slate-800">{platformMetrics.totalSessions.toLocaleString()}</p>
                <p className="text-xs text-slate-500 mt-1">Peer coaching sessions</p>
              </div>
            </Card>
            <Card className="bg-white">
              <div className="p-4">
                <p className="text-sm text-slate-500">Verification Rate</p>
                <p className="text-2xl font-bold text-emerald-600">{platformMetrics.verificationRate}%</p>
                <p className="text-xs text-slate-500 mt-1">Students verified</p>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Pending Approvals */}
            <Card className="bg-white">
              <div className="p-5 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-slate-800">Pending Approvals</h2>
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                    {pendingApprovals.length}
                  </span>
                </div>
              </div>
              <div className="divide-y divide-slate-100">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-800">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.details}</p>
                      <p className="text-xs text-slate-400 mt-1">{item.submittedAt}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Approve</Button>
                      <Button size="sm" variant="ghost">Reject</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reward Requests */}
            <Card className="bg-white">
              <div className="p-5 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Reward Requests</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {rewardRequests.map((item) => (
                  <div key={item.id} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-800">{item.student}</p>
                      <p className="text-sm text-slate-500">
                        {item.reward} • {item.points.toLocaleString()} pts
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        {item.kyc && (
                          <span className="flex items-center gap-1 text-xs text-emerald-600">
                            <CheckCircleIcon className="w-3 h-3" /> KYC Verified
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Approve</Button>
                      <Button size="sm" variant="ghost">Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Idea Reviews */}
            <Card className="bg-white">
              <div className="p-5 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Idea Reviews</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {ideaReviews.map((idea) => (
                  <div key={idea.id} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-800">{idea.title}</p>
                      <p className="text-sm text-slate-500">by {idea.student}</p>
                      <p className="text-xs text-slate-400 mt-1">👍 {idea.votes} votes</p>
                    </div>
                    <StatusBadge status={idea.status === 'approved' ? 'active' : 'pending'}>
                      {idea.status === 'approved' ? 'Approved' : 'Under Review'}
                    </StatusBadge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Audit Logs */}
            <Card className="bg-white">
              <div className="p-5 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Recent Activity</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {recentLogs.map((log, index) => (
                  <div key={index} className="p-4 flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      log.type === 'success' ? 'bg-emerald-500' :
                      log.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-slate-800">{log.action}</p>
                      <p className="text-xs text-slate-400">{log.user} • {log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Trust & Fairness */}
          <Card className="mt-6 bg-slate-800 text-white border-0">
            <div className="p-5 flex items-center gap-4">
              <ShieldCheckIcon className="w-8 h-8 text-slate-400" />
              <div>
                <p className="font-semibold">Platform Governance</p>
                <p className="text-sm text-slate-400">
                  Ensuring trust, fairness, and compliance across all platform activities. 
                  Dispute rate: {platformMetrics.disputeRate}%
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
