'use client';

import Link from 'next/link';
import { Card, ProgressBar } from '@/components/ui';
import { ChartIcon, TrophyIcon, UsersIcon } from '@/components/icons';

const pointsData = {
  totalPoints: 2450,
  thisMonth: 680,
  breakdown: [
    { activity: 'Learning Modules', points: 850, icon: '📚', color: 'bg-teal-500' },
    { activity: 'Teaching Peers', points: 920, icon: '🎓', color: 'bg-blue-500' },
    { activity: 'Projects Completed', points: 450, icon: '🚀', color: 'bg-purple-500' },
    { activity: 'Quizzes Passed', points: 230, icon: '✅', color: 'bg-emerald-500' },
  ],
  teachingStats: {
    totalSessions: 47,
    successRate: 84,
    studentsHelped: 32,
    avgRating: 4.7,
  },
  recentActivity: [
    { type: 'teaching', text: 'Helped Rahul understand Python loops', points: 25, time: '2 hours ago' },
    { type: 'learning', text: 'Completed React Hooks lesson', points: 15, time: 'Yesterday' },
    { type: 'teaching', text: 'Answered doubt on CSS Flexbox', points: 20, time: 'Yesterday' },
    { type: 'quiz', text: 'Passed JavaScript Basics quiz', points: 10, time: '2 days ago' },
  ],
};

export default function PointsPage() {
  const maxPoints = Math.max(...pointsData.breakdown.map(b => b.points));

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-slate-500 hover:text-slate-700">
              ← Back
            </Link>
            <h1 className="font-semibold text-slate-800">Points & Impact</h1>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto">
        {/* Total Points Card */}
        <Card elevated className="mb-6 bg-gradient-to-br from-teal-500 to-teal-600 border-0">
          <div className="p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <p className="text-teal-100 font-medium">Total Points Earned</p>
              <TrophyIcon className="w-8 h-8 text-teal-200" />
            </div>
            <p className="text-4xl font-bold mb-1">{pointsData.totalPoints.toLocaleString()}</p>
            <p className="text-teal-100">+{pointsData.thisMonth} this month</p>
          </div>
        </Card>

        {/* Points Breakdown */}
        <Card className="mb-6">
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <ChartIcon className="w-5 h-5 text-slate-600" />
              <h3 className="font-semibold text-slate-800">Points by Activity</h3>
            </div>
            <div className="space-y-4">
              {pointsData.breakdown.map((item) => (
                <div key={item.activity}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{item.activity}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item.points}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${(item.points / maxPoints) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Teaching Impact */}
        <Card className="mb-6">
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <UsersIcon className="w-5 h-5 text-slate-600" />
              <h3 className="font-semibold text-slate-800">Teaching Impact</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl text-center">
                <p className="text-2xl font-bold text-slate-800">{pointsData.teachingStats.totalSessions}</p>
                <p className="text-sm text-slate-500">Sessions</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl text-center">
                <p className="text-2xl font-bold text-emerald-600">{pointsData.teachingStats.successRate}%</p>
                <p className="text-sm text-slate-500">Success Rate</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl text-center">
                <p className="text-2xl font-bold text-blue-600">{pointsData.teachingStats.studentsHelped}</p>
                <p className="text-sm text-slate-500">Students Helped</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl text-center">
                <p className="text-2xl font-bold text-amber-600">{pointsData.teachingStats.avgRating}</p>
                <p className="text-sm text-slate-500">Avg. Rating ⭐</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Info Notice */}
        <Card className="mb-6 bg-slate-50 border-slate-200">
          <div className="p-4 flex items-start gap-3">
            <span className="text-lg">🔒</span>
            <div>
              <p className="text-sm font-medium text-slate-700">Points cannot be manually edited</p>
              <p className="text-sm text-slate-500 mt-1">
                All points are automatically calculated based on your verified activities. This ensures fairness for everyone.
              </p>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {pointsData.recentActivity.map((activity, index) => (
            <Card key={index}>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activity.type === 'teaching' ? 'bg-blue-50' :
                    activity.type === 'learning' ? 'bg-teal-50' :
                    'bg-emerald-50'
                  }`}>
                    <span className="text-lg">
                      {activity.type === 'teaching' ? '🎓' :
                       activity.type === 'learning' ? '📚' : '✅'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">{activity.text}</p>
                    <p className="text-xs text-slate-400">{activity.time}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-emerald-600">+{activity.points}</span>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
