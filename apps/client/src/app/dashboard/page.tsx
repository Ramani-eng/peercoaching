'use client';

import Link from 'next/link';
import { Card, ProgressBar, Button } from '@/components/ui';
import { 
  BookOpenIcon, UsersIcon, TrophyIcon, ChartIcon, 
  LightbulbIcon, GiftIcon, StudentIcon, ArrowRightIcon 
} from '@/components/icons';

// Mock data
const userData = {
  name: 'Priya Sharma',
  level: 'Builder',
  points: 2450,
  nextLevelPoints: 5000,
  streak: 7,
  teachingImpact: 40,
};

const actionCards = [
  {
    id: 'learn',
    title: 'Continue Learning',
    description: 'Python Fundamentals',
    progress: 65,
    icon: BookOpenIcon,
    href: '/dashboard/learning',
    gradient: 'from-[#00FFD1] to-[#38BDF8]',
    glow: 'shadow-[0_0_25px_rgba(0,255,209,0.4)]',
  },
  {
    id: 'teach',
    title: 'Teach a Peer',
    description: '3 doubts waiting',
    badge: '3',
    icon: UsersIcon,
    href: '/dashboard/coaching',
    gradient: 'from-[#818CF8] to-[#A78BFA]',
    glow: 'shadow-[0_0_25px_rgba(129,140,248,0.4)]',
  },
  {
    id: 'projects',
    title: 'Apply for Projects',
    description: '5 new opportunities',
    badge: '5',
    icon: TrophyIcon,
    href: '/dashboard/projects',
    gradient: 'from-[#A78BFA] to-[#E879F9]',
    glow: 'shadow-[0_0_25px_rgba(167,139,250,0.4)]',
  },
  {
    id: 'impact',
    title: 'Teaching Impact',
    description: 'See your contribution',
    icon: ChartIcon,
    href: '/dashboard/points',
    gradient: 'from-[#FBBF24] to-[#FB7185]',
    glow: 'shadow-[0_0_25px_rgba(251,191,36,0.4)]',
  },
];

const navItems = [
  { icon: '🏠', label: 'Home', href: '/dashboard', active: true },
  { icon: '📚', label: 'Learn', href: '/dashboard/learning', active: false },
  { icon: '💬', label: 'Coach', href: '/dashboard/coaching', active: false },
  { icon: '🏆', label: 'Projects', href: '/dashboard/projects', active: false },
  { icon: '👤', label: 'Profile', href: '/dashboard/profile', active: false },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-gradient-to-b from-[rgba(17,25,40,0.95)] to-[rgba(17,25,40,0.85)] backdrop-blur-xl border-b border-[rgba(56,189,248,0.15)] sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFD1] to-[#818CF8] flex items-center justify-center text-[#0A0E17] font-bold text-lg shadow-[0_0_25px_rgba(0,255,209,0.4)]">
                {userData.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-[#94A3B8]">Welcome back,</p>
                <p className="font-semibold text-white">{userData.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(251,191,36,0.15)] rounded-full border border-[rgba(251,191,36,0.3)]">
              <span className="text-xl">🔥</span>
              <span className="font-bold text-[#FBBF24]">{userData.streak}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto">
        {/* Level & Points Card */}
        <Card elevated className="mb-6" glow="teal">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FBBF24] to-[#FB7185] flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="text-sm text-[#94A3B8]">Current Level</p>
                  <p className="font-bold text-xl text-white">{userData.level}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#00FFD1] via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">{userData.points.toLocaleString()}</p>
                <p className="text-sm text-[#94A3B8]">points</p>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#94A3B8]">Progress to Innovator</span>
                <span className="font-medium text-[#CBD5E1]">
                  {userData.points.toLocaleString()} / {userData.nextLevelPoints.toLocaleString()}
                </span>
              </div>
              <ProgressBar 
                value={userData.points} 
                max={userData.nextLevelPoints}
                size="lg"
              />
            </div>
          </div>
        </Card>

        {/* Insight Card */}
        <Card className="mb-6 !bg-gradient-to-r !from-[rgba(0,255,209,0.12)] !to-[rgba(129,140,248,0.12)] !border-[rgba(0,255,209,0.25)] !shadow-[0_0_30px_rgba(0,255,209,0.1)]">
          <div className="p-5">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,255,209,0.2)] flex items-center justify-center shadow-[0_0_15px_rgba(0,255,209,0.3)]">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Your Impact</p>
                <p className="text-sm text-[#CBD5E1]">
                  You earned <span className="font-bold text-[#00FFD1]">{userData.teachingImpact} points</span> by helping others succeed. Keep teaching! 🎯
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Cards */}
        <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {actionCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Link key={card.id} href={card.href}>
                <Card className="h-full hover:border-[rgba(0,255,209,0.4)] hover:shadow-[0_0_40px_rgba(0,255,209,0.15)] transition-all group">
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center ${card.glow} group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(0,255,209,0.5)] transition-all duration-300`}>
                        <IconComponent className="w-7 h-7 text-[#0A0E17]" />
                      </div>
                      {card.badge && (
                        <span className="px-3 py-1 bg-gradient-to-r from-[#FB7185] to-[#F43F5E] text-white text-xs font-bold rounded-full shadow-[0_0_15px_rgba(251,113,133,0.5)]">
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-white mb-1">{card.title}</h3>
                    <p className="text-sm text-[#94A3B8]">{card.description}</p>
                    {card.progress && (
                      <div className="mt-3">
                        <ProgressBar value={card.progress} size="sm" />
                        <p className="text-xs text-[#94A3B8] mt-1">{card.progress}% complete</p>
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* More Features */}
        <h2 className="text-lg font-bold text-white mb-4">Explore More</h2>
        <div className="space-y-3">
          <Link href="/dashboard/ideas">
            <Card className="hover:border-[rgba(167,139,250,0.4)] hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] transition-all">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(167,139,250,0.2)] flex items-center justify-center shadow-[0_0_15px_rgba(167,139,250,0.3)]">
                    <LightbulbIcon className="w-6 h-6 text-[#A78BFA]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Idea Incubation</p>
                    <p className="text-sm text-[#94A3B8]">Submit your innovative ideas</p>
                  </div>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-[#94A3B8]" />
              </div>
            </Card>
          </Link>
          <Link href="/dashboard/rewards">
            <Card className="hover:border-[rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(251,191,36,0.2)] flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                    <GiftIcon className="w-6 h-6 text-[#FBBF24]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Rewards & Benefits</p>
                    <p className="text-sm text-[#94A3B8]">Laptops, fee support & more</p>
                  </div>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-[#94A3B8]" />
              </div>
            </Card>
          </Link>
          <Link href="/kyc">
            <Card className="hover:border-[rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] transition-all">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(52,211,153,0.2)] flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                    <span className="text-xl">🪪</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Complete KYC</p>
                    <p className="text-sm text-[#94A3B8]">Unlock high-value rewards</p>
                  </div>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-[#94A3B8]" />
              </div>
            </Card>
          </Link>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(10,14,23,0.98)] to-[rgba(10,14,23,0.95)] backdrop-blur-xl border-t border-[rgba(56,189,248,0.15)] px-2 py-2 safe-area-pb">
        <div className="max-w-lg mx-auto flex items-center justify-around">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                item.active 
                  ? 'text-[#00FFD1] bg-[rgba(0,255,209,0.15)] shadow-[0_0_15px_rgba(0,255,209,0.2)]' 
                  : 'text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
