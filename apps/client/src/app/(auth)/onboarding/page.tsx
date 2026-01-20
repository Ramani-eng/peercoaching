'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Card, Input, Chip, ChipGroup, StepProgress } from '@/components/ui';
import { CheckCircleIcon } from '@/components/icons';

const skillOptions = [
  { id: 'coding', label: '💻 Coding', icon: '💻' },
  { id: 'design', label: '🎨 Design', icon: '🎨' },
  { id: 'marketing', label: '📢 Marketing', icon: '📢' },
  { id: 'data', label: '📊 Data', icon: '📊' },
  { id: 'business', label: '💼 Business', icon: '💼' },
  { id: 'content', label: '✍️ Content', icon: '✍️' },
  { id: 'video', label: '🎬 Video', icon: '🎬' },
  { id: 'ai', label: '🤖 AI/ML', icon: '🤖' },
  { id: 'other', label: '➕ Other', icon: '➕' },
];

const journeySteps = [
  {
    icon: '🏛️',
    title: 'College Verification',
    description: 'Your college confirms your enrollment',
    color: '#00FFD1',
  },
  {
    icon: '📚',
    title: 'Skill Learning',
    description: 'Learn through curated roadmaps and earn points',
    color: '#38BDF8',
  },
  {
    icon: '🎓',
    title: 'Teaching Peers',
    description: 'Share knowledge and multiply your impact',
    color: '#A78BFA',
  },
  {
    icon: '🏆',
    title: 'Projects & Rewards',
    description: 'Unlock real projects and earn rewards',
    color: '#FBBF24',
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Step 1: Profile
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [otherSkill, setOtherSkill] = useState('');
  
  // Step 2: Skills
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/verification');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStep1Valid = name && collegeName && department && year;
  const isStep2Valid = selectedSkills.length >= 1;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FFD1] to-[#818CF8] flex items-center justify-center shadow-[0_0_25px_rgba(0,255,209,0.4)]">
            <span className="text-[#0A0E17] font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-semibold text-white">PeerCoaching</span>
        </Link>
        {step > 1 && (
          <button
            onClick={handleBack}
            className="text-sm text-[#CBD5E1] hover:text-[#00FFD1] transition-colors"
          >
            ← Back
          </button>
        )}
      </header>

      {/* Progress */}
      <div className="px-6 py-4 border-b border-[rgba(56,189,248,0.15)] bg-[rgba(17,25,40,0.6)] backdrop-blur-xl">
        <div className="max-w-md mx-auto">
          <StepProgress
            currentStep={step}
            totalSteps={3}
            labels={['Profile', 'Skills', 'Journey']}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 py-8">
        <div className="w-full max-w-md">
          {step === 1 && (
            <div className="animate-in fade-in duration-300">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                  Let's set up your profile
                </h1>
                <p className="text-[#CBD5E1]">
                  This helps us personalize your learning experience
                </p>
              </div>

              <Card elevated>
                <div className="p-6 space-y-5">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label="College Name"
                    placeholder="e.g., IIT Delhi, Anna University"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                  />
                  <Input
                    label="Department"
                    placeholder="e.g., Computer Science, MBA"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                  <div>
                    <label className="block text-sm font-medium text-[#CBD5E1] mb-3">
                      Current Year
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {['1st', '2nd', '3rd', '4th', '5th'].map((y) => (
                        <button
                          key={y}
                          onClick={() => setYear(y)}
                          className={`py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            year === y
                              ? 'bg-gradient-to-r from-[#00FFD1] to-[#38BDF8] text-[#0A0E17] shadow-[0_0_20px_rgba(0,255,209,0.4)]'
                              : 'bg-[rgba(56,189,248,0.1)] text-[#CBD5E1] border border-[rgba(56,189,248,0.2)] hover:border-[rgba(0,255,209,0.4)] hover:bg-[rgba(0,255,209,0.1)]'
                          }`}
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Button
                fullWidth
                size="lg"
                className="mt-6"
                onClick={handleNext}
                disabled={!isStep1Valid}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in duration-300">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                  What do you want to learn?
                </h1>
                <p className="text-[#CBD5E1]">
                  Select skills you're interested in. You can change these later.
                </p>
              </div>

              <Card elevated>
                <div className="p-6">
                  <ChipGroup className="justify-center">
                    {skillOptions.map((skill) => (
                      <Chip
                        key={skill.id}
                        selected={selectedSkills.includes(skill.id)}
                        onClick={() => toggleSkill(skill.id)}
                      >
                        {skill.label}
                      </Chip>
                    ))}
                  </ChipGroup>
                  
                  {/* Other skill input */}
                  {selectedSkills.includes('other') && (
                    <div className="mt-4">
                      <Input
                        placeholder="Tell us what else you'd like to learn..."
                        value={otherSkill}
                        onChange={(e) => setOtherSkill(e.target.value)}
                        className="text-center"
                      />
                    </div>
                  )}
                  
                  {selectedSkills.length > 0 && (
                    <p className="text-center text-sm text-[#00FFD1] mt-4 font-medium">
                      {selectedSkills.length} skill{selectedSkills.length > 1 ? 's' : ''} selected
                    </p>
                  )}
                </div>
              </Card>

              <Button
                fullWidth
                size="lg"
                className="mt-6"
                onClick={handleNext}
                disabled={!isStep2Valid}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in duration-300">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                  Here's how it works
                </h1>
                <p className="text-[#CBD5E1]">
                  Your path from learning to earning rewards
                </p>
              </div>

              <div className="space-y-4">
                {journeySteps.map((item, index) => (
                  <Card key={index} className="flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ 
                        background: `rgba(${item.color === '#00FFD1' ? '0,255,209' : item.color === '#38BDF8' ? '56,189,248' : item.color === '#A78BFA' ? '167,139,250' : '251,191,36'},0.15)`,
                        border: `1px solid rgba(${item.color === '#00FFD1' ? '0,255,209' : item.color === '#38BDF8' ? '56,189,248' : item.color === '#A78BFA' ? '167,139,250' : '251,191,36'},0.3)`,
                        boxShadow: `0 0 20px rgba(${item.color === '#00FFD1' ? '0,255,209' : item.color === '#38BDF8' ? '56,189,248' : item.color === '#A78BFA' ? '167,139,250' : '251,191,36'},0.2)`
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span 
                          className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-[#0A0E17]"
                          style={{ 
                            background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                            boxShadow: `0 0 15px ${item.color}66`
                          }}
                        >
                          {index + 1}
                        </span>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm text-[#94A3B8]">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 !bg-gradient-to-r !from-[rgba(0,255,209,0.12)] !to-[rgba(56,189,248,0.1)] !border-[rgba(0,255,209,0.25)] !shadow-[0_0_25px_rgba(0,255,209,0.1)]">
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(0,255,209,0.2)] flex items-center justify-center shadow-[0_0_15px_rgba(0,255,209,0.3)]">
                      <CheckCircleIcon className="w-5 h-5 text-[#00FFD1]" />
                    </div>
                    <p className="text-sm text-[#CBD5E1]">
                      <span className="font-semibold text-[#00FFD1]">Good news!</span> You're almost ready. 
                      Next, your college will verify your enrollment.
                    </p>
                  </div>
                </div>
              </Card>

              <Button
                fullWidth
                size="lg"
                className="mt-6"
                onClick={handleNext}
                loading={loading}
              >
                Complete Setup
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
