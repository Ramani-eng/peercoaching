'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Card, StatusBadge } from '@/components/ui';
import { ClockIcon, CheckCircleIcon } from '@/components/icons';

export default function VerificationPage() {
  const [notifying, setNotifying] = useState(false);
  const [notified, setNotified] = useState(false);

  const handleNotifyCollege = async () => {
    setNotifying(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setNotifying(false);
    setNotified(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-teal-50/30 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-semibold text-slate-800">PeerCoaching</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-md text-center">
          {/* Status Icon */}
          <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6 border-4 border-amber-100">
            <ClockIcon className="w-10 h-10 text-amber-500" />
          </div>

          {/* Status Badge */}
          <div className="mb-6">
            <StatusBadge status="pending">Verification Pending</StatusBadge>
          </div>

          {/* Main Message */}
          <h1 className="text-2xl font-bold text-slate-800 mb-3">
            Almost there!
          </h1>
          <p className="text-slate-500 mb-8">
            Your college needs to confirm your enrollment before you can start earning points and accessing all features.
          </p>

          {/* Status Card */}
          <Card elevated className="mb-6">
            <div className="p-6">
              <p className="text-sm font-medium text-slate-700 mb-4">Verification Timeline</p>
              
              {/* Timeline */}
              <div className="flex items-center justify-between relative">
                {/* Line */}
                <div className="absolute left-8 right-8 top-6 h-0.5 bg-slate-200" />
                <div className="absolute left-8 top-6 h-0.5 bg-teal-500" style={{ width: '20%' }} />
                
                {/* Steps */}
                {[
                  { label: 'Submitted', completed: true, active: true },
                  { label: 'Verified', completed: false, active: false },
                  { label: 'Active', completed: false, active: false },
                ].map((step, i) => (
                  <div key={step.label} className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.completed
                          ? 'bg-teal-500 text-white'
                          : step.active
                          ? 'bg-teal-500 text-white ring-4 ring-teal-100'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircleIcon className="w-6 h-6" />
                      ) : (
                        <span className="text-lg font-semibold">{i + 1}</span>
                      )}
                    </div>
                    <span className={`mt-3 text-sm font-medium ${step.completed || step.active ? 'text-teal-600' : 'text-slate-400'}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Info Card */}
          <Card className="mb-6 text-left">
            <div className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">ℹ️</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-1">What happens next?</p>
                  <p className="text-sm text-slate-500">
                    Your college representative will receive a verification request. Once they confirm your enrollment, you'll get full access.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Notify Button */}
          {!notified ? (
            <Button
              fullWidth
              size="lg"
              variant="secondary"
              onClick={handleNotifyCollege}
              loading={notifying}
            >
              🔔 Notify College Representative
            </Button>
          ) : (
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                <p className="text-sm font-medium text-emerald-700">
                  Notification sent to your college
                </p>
              </div>
            </div>
          )}

          {/* Reassurance */}
          <p className="mt-6 text-sm text-slate-400">
            ⏱️ Most verifications complete within 24–48 hours
          </p>

          {/* Link to Dashboard (limited access) */}
          <Link
            href="/dashboard"
            className="inline-block mt-8 text-sm text-teal-600 hover:text-teal-700 font-medium"
          >
            Explore dashboard with limited access →
          </Link>
        </div>
      </main>
    </div>
  );
}
