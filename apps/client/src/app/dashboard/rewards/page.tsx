'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, ProgressBar, StatusBadge } from '@/components/ui';
import { GiftIcon, CheckCircleIcon, LockIcon } from '@/components/icons';

const currentPoints = 2450;
const kycCompleted = true;

const rewards = [
  {
    id: 1,
    title: 'Laptop',
    description: 'High-performance laptop for coding and design',
    image: '💻',
    pointsRequired: 10000,
    kycRequired: true,
    category: 'hardware',
    available: 5,
  },
  {
    id: 2,
    title: 'Semester Fee Support',
    description: 'Partial or full semester fee coverage',
    image: '🎓',
    pointsRequired: 15000,
    kycRequired: true,
    category: 'financial',
    available: 10,
  },
  {
    id: 3,
    title: 'GitHub Pro (1 Year)',
    description: 'Access to GitHub Copilot and advanced features',
    image: '🐙',
    pointsRequired: 2000,
    kycRequired: false,
    category: 'software',
    available: 50,
  },
  {
    id: 4,
    title: 'Figma Pro (1 Year)',
    description: 'Professional design tools subscription',
    image: '🎨',
    pointsRequired: 2500,
    kycRequired: false,
    category: 'software',
    available: 30,
  },
  {
    id: 5,
    title: 'LinkedIn Premium',
    description: '6 months LinkedIn Premium Career subscription',
    image: '💼',
    pointsRequired: 3000,
    kycRequired: false,
    category: 'software',
    available: 25,
  },
  {
    id: 6,
    title: 'Cloud Credits',
    description: '$100 AWS/GCP credits for your projects',
    image: '☁️',
    pointsRequired: 1500,
    kycRequired: false,
    category: 'software',
    available: 100,
  },
];

export default function RewardsPage() {
  const [requesting, setRequesting] = useState<number | null>(null);

  const handleRequest = async (rewardId: number) => {
    setRequesting(rewardId);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setRequesting(null);
    // Show success message
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-slate-500 hover:text-slate-700">
              ← Back
            </Link>
            <h1 className="font-semibold text-slate-800">Rewards & Benefits</h1>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto">
        {/* Points & KYC Status */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 border-0">
            <div className="p-4 text-white">
              <p className="text-teal-100 text-sm">Your Points</p>
              <p className="text-2xl font-bold">{currentPoints.toLocaleString()}</p>
            </div>
          </Card>
          <Card className={`${kycCompleted ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
            <div className="p-4">
              <p className="text-sm text-slate-600">KYC Status</p>
              <div className="flex items-center gap-2 mt-1">
                {kycCompleted ? (
                  <>
                    <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-emerald-700">Verified</span>
                  </>
                ) : (
                  <>
                    <LockIcon className="w-5 h-5 text-amber-600" />
                    <span className="font-semibold text-amber-700">Incomplete</span>
                  </>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Aspiration Message */}
        <Card className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100">
          <div className="p-4 flex items-start gap-3">
            <GiftIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-slate-700">Earn through excellence</p>
              <p className="text-sm text-slate-500 mt-1">
                These rewards recognize your learning journey and teaching impact. Keep growing!
              </p>
            </div>
          </div>
        </Card>

        {/* Rewards List */}
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Available Rewards</h3>
        <div className="space-y-4">
          {rewards.map((reward) => {
            const isPointsEligible = currentPoints >= reward.pointsRequired;
            const isKycEligible = !reward.kycRequired || kycCompleted;
            const isEligible = isPointsEligible && isKycEligible;
            const progress = Math.min((currentPoints / reward.pointsRequired) * 100, 100);

            return (
              <Card 
                key={reward.id}
                className={`transition-all ${!isEligible ? 'opacity-80' : 'hover:shadow-md hover:border-teal-200'}`}
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center text-3xl flex-shrink-0 border border-slate-200">
                      {reward.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-slate-800">{reward.title}</h4>
                        {isEligible && (
                          <StatusBadge status="active">Eligible</StatusBadge>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 mb-3">{reward.description}</p>

                      {/* Requirements */}
                      <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                        <span className={`font-medium ${isPointsEligible ? 'text-emerald-600' : 'text-slate-600'}`}>
                          {reward.pointsRequired.toLocaleString()} pts
                        </span>
                        {reward.kycRequired && (
                          <span className={`flex items-center gap-1 ${isKycEligible ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {isKycEligible ? <CheckCircleIcon className="w-4 h-4" /> : <LockIcon className="w-4 h-4" />}
                            KYC Required
                          </span>
                        )}
                        <span className="text-slate-400">
                          {reward.available} available
                        </span>
                      </div>

                      {/* Progress Bar */}
                      {!isPointsEligible && (
                        <div className="mb-3">
                          <div className="flex justify-between text-xs text-slate-500 mb-1">
                            <span>Progress</span>
                            <span>{currentPoints} / {reward.pointsRequired}</span>
                          </div>
                          <ProgressBar value={progress} size="sm" />
                        </div>
                      )}

                      {/* Action */}
                      {isEligible ? (
                        <Button 
                          size="sm" 
                          onClick={() => handleRequest(reward.id)}
                          loading={requesting === reward.id}
                        >
                          Request Approval
                        </Button>
                      ) : !isKycEligible ? (
                        <Link href="/kyc">
                          <Button size="sm" variant="secondary">
                            Complete KYC
                          </Button>
                        </Link>
                      ) : (
                        <p className="text-sm text-slate-400">
                          Need {(reward.pointsRequired - currentPoints).toLocaleString()} more points
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Info Notice */}
        <Card className="mt-6 bg-slate-50 border-slate-200">
          <div className="p-4 flex items-start gap-3">
            <span className="text-lg">ℹ️</span>
            <div>
              <p className="text-sm font-medium text-slate-700">How rewards work</p>
              <p className="text-sm text-slate-500 mt-1">
                Once you request approval, our team verifies your eligibility. 
                Approved rewards are processed within 7-14 business days.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
