'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Card, Input } from '@/components/ui';
import { ShieldCheckIcon, NoSpamIcon, GovVerifiedIcon, LockIcon } from '@/components/icons';

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'input' | 'otp'>('input');
  const [method, setMethod] = useState<'email' | 'mobile'>('email');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setStep('otp');
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    router.push('/role-select');
  };

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
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-md">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(0,255,209,0.15)] rounded-full text-sm font-medium text-[#00FFD1] border border-[rgba(0,255,209,0.3)] backdrop-blur-xl shadow-[0_0_15px_rgba(0,255,209,0.2)]">
              <NoSpamIcon className="w-4 h-4" />
              No spam
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(129,140,248,0.15)] rounded-full text-sm font-medium text-[#A78BFA] border border-[rgba(129,140,248,0.3)] backdrop-blur-xl shadow-[0_0_15px_rgba(129,140,248,0.2)]">
              <GovVerifiedIcon className="w-4 h-4" />
              Government-verified
            </span>
          </div>

          {/* Main Card */}
          <Card elevated className="mb-6">
            <div className="p-6 sm:p-8">
              {step === 'input' ? (
                <>
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">
                      Welcome to PeerCoaching
                    </h1>
                    <p className="text-[#CBD5E1]">
                      Sign in or create your account to get started
                    </p>
                  </div>

                  {/* Method Tabs */}
                  <div className="flex bg-[rgba(17,25,40,0.8)] rounded-xl p-1 mb-6 border border-[rgba(56,189,248,0.2)]">
                    <button
                      onClick={() => setMethod('email')}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                        method === 'email' 
                          ? 'bg-gradient-to-r from-[#00FFD1] to-[#38BDF8] text-[#0A0E17] shadow-[0_0_20px_rgba(0,255,209,0.4)]' 
                          : 'text-[#CBD5E1] hover:text-white'
                      }`}
                    >
                      Email
                    </button>
                    <button
                      onClick={() => setMethod('mobile')}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                        method === 'mobile' 
                          ? 'bg-gradient-to-r from-[#00FFD1] to-[#38BDF8] text-[#0A0E17] shadow-[0_0_20px_rgba(0,255,209,0.4)]' 
                          : 'text-[#CBD5E1] hover:text-white'
                      }`}
                    >
                      Mobile Number
                    </button>
                  </div>

                  {/* Input Field */}
                  {method === 'email' ? (
                    <Input
                      type="email"
                      label="Email Address"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <Input
                      type="tel"
                      label="Mobile Number"
                      placeholder="+91 98765 43210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  )}

                  {/* Explanation */}
                  <div className="flex items-start gap-3 mt-6 p-4 bg-[rgba(0,255,209,0.1)] rounded-xl border border-[rgba(0,255,209,0.25)] shadow-[0_0_20px_rgba(0,255,209,0.1)]">
                    <ShieldCheckIcon className="w-5 h-5 text-[#00FFD1] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#00FFD1]">
                      We verify identity to keep opportunities fair. You'll receive a one-time password to confirm it's you.
                    </p>
                  </div>

                  {/* CTA */}
                  <Button
                    fullWidth
                    size="lg"
                    className="mt-6"
                    onClick={handleSendOTP}
                    loading={loading}
                    disabled={method === 'email' ? !email : !mobile}
                  >
                    Continue with OTP
                  </Button>
                </>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-[rgba(0,255,209,0.2)] flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(0,255,209,0.3)]">
                      <LockIcon className="w-8 h-8 text-[#00FFD1]" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">
                      Enter verification code
                    </h1>
                    <p className="text-[#CBD5E1]">
                      We sent a 6-digit code to{' '}
                      <span className="font-medium text-[#00FFD1]">
                        {method === 'email' ? email : mobile}
                      </span>
                    </p>
                  </div>

                  {/* OTP Input */}
                  <Input
                    type="text"
                    label="One-Time Password"
                    placeholder="Enter 6-digit code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="text-center text-2xl tracking-[0.5em] font-mono"
                  />

                  <Button
                    fullWidth
                    size="lg"
                    className="mt-6"
                    onClick={handleVerifyOTP}
                    loading={loading}
                    disabled={otp.length !== 6}
                  >
                    Verify & Continue
                  </Button>

                  <button
                    onClick={() => setStep('input')}
                    className="w-full mt-4 text-sm text-[#CBD5E1] hover:text-[#00FFD1] transition-colors"
                  >
                    ← Use a different {method === 'email' ? 'email' : 'number'}
                  </button>
                </>
              )}
            </div>
          </Card>

          {/* Journey Illustration */}
          <div className="bg-[rgba(17,25,40,0.8)] backdrop-blur-xl rounded-2xl border border-[rgba(56,189,248,0.2)] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <p className="text-sm font-medium text-[#CBD5E1] mb-4 text-center">Your journey starts here</p>
            <div className="flex items-center justify-between">
              {[
                { icon: '📚', label: 'Learning', color: '#00FFD1' },
                { icon: '🎓', label: 'Teaching', color: '#38BDF8' },
                { icon: '🚀', label: 'Success', color: '#A78BFA' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border animate-float"
                      style={{ 
                        background: `rgba(${item.color === '#00FFD1' ? '0,255,209' : item.color === '#38BDF8' ? '56,189,248' : '167,139,250'},0.15)`,
                        borderColor: `rgba(${item.color === '#00FFD1' ? '0,255,209' : item.color === '#38BDF8' ? '56,189,248' : '167,139,250'},0.3)`,
                        boxShadow: `0 0 20px rgba(${item.color === '#00FFD1' ? '0,255,209' : item.color === '#38BDF8' ? '56,189,248' : '167,139,250'},0.2)`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    >
                      {item.icon}
                    </div>
                    <span className="mt-2 text-xs font-medium text-white">{item.label}</span>
                  </div>
                  {i < 2 && (
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#00FFD1]/40 to-[#818CF8]/40 mx-2 mb-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 text-center">
        <p className="text-sm text-[#94A3B8] mb-2">
          Your data is safe with us. We follow strict privacy guidelines.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/privacy" className="text-sm text-[#CBD5E1] hover:text-[#00FFD1] transition-colors">
            Privacy Policy
          </Link>
          <span className="text-[#64748B]">•</span>
          <Link href="/terms" className="text-sm text-[#CBD5E1] hover:text-[#00FFD1] transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
