'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Card, Input } from '@/components/ui';
import { ShieldCheckIcon, LockIcon, CheckCircleIcon } from '@/components/icons';

export default function KYCPage() {
  const router = useRouter();
  const [step, setStep] = useState<'aadhaar' | 'pan' | 'success'>('aadhaar');
  const [aadhaarOtp, setAadhaarOtp] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyAadhaar = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setStep('pan');
  };

  const handleVerifyPAN = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setStep('success');
  };

  const maskedPAN = panNumber.length >= 4 
    ? `XXXX${panNumber.slice(-4).toUpperCase()}`
    : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-teal-50/30 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-semibold text-slate-800">PeerCoaching</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-md">
          {step === 'aadhaar' && (
            <div className="animate-in fade-in duration-300">
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6 border-4 border-teal-100">
                <ShieldCheckIcon className="w-10 h-10 text-teal-600" />
              </div>

              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">
                  Identity Verification
                </h1>
                <p className="text-slate-500">
                  A quick one-time verification to keep the platform safe
                </p>
              </div>

              {/* Trust Card */}
              <Card className="mb-6 bg-blue-50 border-blue-100">
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <LockIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800 mb-1">Your privacy is protected</p>
                      <p className="text-sm text-blue-700">
                        We verify identity to prevent misuse. We <strong>NEVER store</strong> your Aadhaar number. Only OTP verification is used.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Main Card */}
              <Card elevated>
                <div className="p-6">
                  <p className="text-sm font-medium text-slate-700 mb-4">
                    Aadhaar-linked Mobile OTP
                  </p>
                  <p className="text-sm text-slate-500 mb-4">
                    Enter the OTP sent to your Aadhaar-registered mobile number
                  </p>
                  
                  <Input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={aadhaarOtp}
                    onChange={(e) => setAadhaarOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="text-center text-2xl tracking-[0.5em] font-mono"
                  />

                  <button className="w-full mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium">
                    Didn't receive OTP? Resend
                  </button>
                </div>
              </Card>

              {/* Security Badges */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <LockIcon className="w-4 h-4" />
                  <span>256-bit encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>UIDAI compliant</span>
                </div>
              </div>

              <Button
                fullWidth
                size="lg"
                className="mt-6"
                onClick={handleVerifyAadhaar}
                loading={loading}
                disabled={aadhaarOtp.length !== 6}
              >
                Verify OTP
              </Button>

              {/* Privacy Note */}
              <p className="mt-6 text-center text-xs text-slate-400">
                By verifying, you agree to our identity verification terms. 
                Your data is handled as per government guidelines.
              </p>
            </div>
          )}

          {step === 'pan' && (
            <div className="animate-in fade-in duration-300">
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6 border-4 border-emerald-100">
                <CheckCircleIcon className="w-10 h-10 text-emerald-600" />
              </div>

              <div className="text-center mb-2">
                <p className="text-sm font-medium text-emerald-600 mb-2">✓ Aadhaar Verified</p>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">
                  PAN Verification
                </h1>
                <p className="text-slate-500">
                  Required only for benefits like laptops or fee support
                </p>
              </div>

              {/* Info Card */}
              <Card className="my-6 bg-amber-50 border-amber-100">
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">💡</span>
                    <div>
                      <p className="text-sm font-medium text-amber-800 mb-1">Why do we need PAN?</p>
                      <p className="text-sm text-amber-700">
                        Government regulations require PAN for high-value benefits. This ensures rewards reach the right person.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Main Card */}
              <Card elevated>
                <div className="p-6">
                  <Input
                    label="PAN Number"
                    placeholder="ABCDE1234F"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value.toUpperCase().slice(0, 10))}
                    className="font-mono tracking-wider"
                  />

                  {maskedPAN && (
                    <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600">
                        Preview: <span className="font-mono font-medium">{maskedPAN}</span>
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Only last 4 digits are stored for verification
                      </p>
                    </div>
                  )}
                </div>
              </Card>

              <Button
                fullWidth
                size="lg"
                className="mt-6"
                onClick={handleVerifyPAN}
                loading={loading}
                disabled={panNumber.length !== 10}
              >
                Verify PAN
              </Button>

              <button
                onClick={() => router.push('/dashboard')}
                className="w-full mt-4 text-sm text-slate-500 hover:text-slate-700"
              >
                Skip for now →
              </button>
            </div>
          )}

          {step === 'success' && (
            <div className="animate-in fade-in duration-300 text-center">
              {/* Success Animation */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200 animate-bounce">
                <CheckCircleIcon className="w-12 h-12 text-white" />
              </div>

              <h1 className="text-2xl font-bold text-slate-800 mb-2">
                Verification Complete! 🎉
              </h1>
              <p className="text-slate-500 mb-8">
                Your identity is verified. You're now eligible for all rewards and benefits.
              </p>

              <Card elevated className="mb-6 text-left">
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">Aadhaar Verified</p>
                      <p className="text-xs text-slate-400">Identity confirmed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">PAN Verified</p>
                      <p className="text-xs text-slate-400">Eligible for high-value rewards</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Button
                fullWidth
                size="lg"
                onClick={() => router.push('/dashboard')}
              >
                Go to Dashboard
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
