'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Card, SelectableCard } from '@/components/ui';
import { StudentIcon, CollegeIcon, StartupIcon, SponsorIcon, AdminIcon } from '@/components/icons';

const roles = [
  {
    id: 'student',
    title: 'Student',
    icon: StudentIcon,
    purpose: 'Learn skills, teach peers, earn rewards',
    bestFor: 'College students who want to grow and help others grow',
    gradient: 'from-[#00FFD1] to-[#38BDF8]',
    glow: 'shadow-[0_0_25px_rgba(0,255,209,0.4)]',
    iconBg: 'bg-gradient-to-br from-[#00FFD1] to-[#38BDF8]',
  },
  {
    id: 'college',
    title: 'College Representative',
    icon: CollegeIcon,
    purpose: 'Verify students, track learning analytics',
    bestFor: 'Faculty, coordinators, or placement officers',
    gradient: 'from-[#38BDF8] to-[#818CF8]',
    glow: 'shadow-[0_0_25px_rgba(56,189,248,0.4)]',
    iconBg: 'bg-gradient-to-br from-[#38BDF8] to-[#818CF8]',
  },
  {
    id: 'startup',
    title: 'Startup / Agency',
    icon: StartupIcon,
    purpose: 'Post projects, hire proven talent',
    bestFor: 'Startups and agencies looking for skilled students',
    gradient: 'from-[#A78BFA] to-[#E879F9]',
    glow: 'shadow-[0_0_25px_rgba(167,139,250,0.4)]',
    iconBg: 'bg-gradient-to-br from-[#A78BFA] to-[#E879F9]',
  },
  {
    id: 'sponsor',
    title: 'Business / College Sponsor',
    icon: SponsorIcon,
    purpose: 'Fund rewards, support student growth',
    bestFor: 'Organizations wanting to sponsor laptops, fees, or tools',
    gradient: 'from-[#FBBF24] to-[#FB7185]',
    glow: 'shadow-[0_0_25px_rgba(251,191,36,0.4)]',
    iconBg: 'bg-gradient-to-br from-[#FBBF24] to-[#FB7185]',
  },
  {
    id: 'admin',
    title: 'Admin',
    icon: AdminIcon,
    purpose: 'Manage platform, ensure fairness',
    bestFor: 'Platform administrators only',
    gradient: 'from-[#64748B] to-[#94A3B8]',
    glow: 'shadow-[0_0_25px_rgba(100,116,139,0.4)]',
    iconBg: 'bg-gradient-to-br from-[#64748B] to-[#94A3B8]',
  },
];

export default function RoleSelectPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!selectedRole) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (selectedRole === 'student') {
      router.push('/onboarding');
    } else if (selectedRole === 'college') {
      router.push('/dashboard/college');
    } else if (selectedRole === 'startup') {
      router.push('/dashboard/startup');
    } else if (selectedRole === 'admin') {
      router.push('/dashboard/admin');
    } else {
      router.push('/dashboard');
    }
  };

  const selectedRoleData = roles.find(r => r.id === selectedRole);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FFD1] to-[#818CF8] flex items-center justify-center shadow-[0_0_25px_rgba(0,255,209,0.4)]">
            <span className="text-[#0A0E17] font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-semibold text-white">PeerCoaching</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 py-8">
        <div className="w-full max-w-2xl">
          {/* Header Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              How will you use PeerCoaching?
            </h1>
            <p className="text-[#CBD5E1] max-w-md mx-auto">
              Your role defines what you can access on the platform. Choose the one that best describes you.
            </p>
          </div>

          {/* Role Cards */}
          <div className="space-y-4 mb-8">
            {roles.map((role) => {
              const IconComponent = role.icon;
              const isSelected = selectedRole === role.id;
              return (
                <SelectableCard
                  key={role.id}
                  selected={isSelected}
                  onClick={() => setSelectedRole(role.id)}
                  className="flex items-start gap-4"
                >
                  <div className={`w-14 h-14 rounded-xl ${role.iconBg} flex items-center justify-center flex-shrink-0 ${role.glow} ${isSelected ? 'scale-110' : ''} transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-[#0A0E17]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{role.title}</h3>
                      {isSelected && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#00FFD1] to-[#38BDF8] text-[#0A0E17] shadow-[0_0_15px_rgba(0,255,209,0.4)]">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#CBD5E1] mb-2">{role.purpose}</p>
                    <p className="text-xs text-[#94A3B8]">
                      <span className="font-medium text-[#CBD5E1]">Best for:</span> {role.bestFor}
                    </p>
                  </div>
                </SelectableCard>
              );
            })}
          </div>

          {/* Important Notice */}
          <Card className="mb-6 !bg-gradient-to-r !from-[rgba(251,191,36,0.15)] !to-[rgba(251,113,133,0.1)] !border-[rgba(251,191,36,0.3)]">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(251,191,36,0.2)] flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                  <span className="text-xl">⚠️</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#FBBF24]">Important</p>
                  <p className="text-sm text-[#CBD5E1] mt-1">
                    Your role defines what you can access. This can't be changed later, so choose carefully.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Button
            fullWidth
            size="lg"
            onClick={handleContinue}
            loading={loading}
            disabled={!selectedRole}
          >
            Continue as {selectedRoleData?.title || '...'}
          </Button>
        </div>
      </main>
    </div>
  );
}
