'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, Input, StatusBadge } from '@/components/ui';
import { LightbulbIcon } from '@/components/icons';

const myIdeas = [
  {
    id: 1,
    title: 'AI-Powered Study Planner',
    problem: 'Students struggle to manage time effectively across multiple subjects.',
    solution: 'An AI app that creates personalized study schedules based on deadlines and learning pace.',
    impact: 'Could help 1000+ students improve their grades and reduce stress.',
    status: 'under_review',
    submittedAt: '2 days ago',
  },
  {
    id: 2,
    title: 'Campus Food Sharing Network',
    problem: 'Food waste in hostels and unused mess coupons.',
    solution: 'A platform where students can share excess food or transfer meal credits.',
    impact: 'Reduce food waste by 30% and help students in need.',
    status: 'approved',
    submittedAt: '1 week ago',
    feedback: 'Great idea! You\'ve been matched with a mentor to develop this further.',
  },
];

const statusMap: Record<string, { label: string; status: 'pending' | 'verified' | 'active' | 'rejected' }> = {
  submitted: { label: 'Submitted', status: 'pending' },
  under_review: { label: 'Under Review', status: 'pending' },
  approved: { label: 'Approved', status: 'active' },
  rejected: { label: 'Rejected', status: 'rejected' },
};

export default function IdeasPage() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [impact, setImpact] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setShowForm(false);
    // Reset form
    setTitle('');
    setProblem('');
    setSolution('');
    setImpact('');
  };

  const isFormValid = title && problem && solution && impact;

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-slate-500 hover:text-slate-700">
              ← Back
            </Link>
            <h1 className="font-semibold text-slate-800">Idea Incubation</h1>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto">
        {/* Hero Card */}
        <Card elevated className="mb-6 bg-gradient-to-br from-purple-500 to-pink-500 border-0">
          <div className="p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <LightbulbIcon className="w-8 h-8 text-purple-200" />
              <h2 className="text-xl font-bold">Great ideas deserve support</h2>
            </div>
            <p className="text-purple-100 mb-4">
              Have an idea that could help students or solve a real problem? Submit it here and get guidance, mentorship, and potential funding.
            </p>
            <Button
              variant="secondary"
              className="bg-white text-purple-600 border-0 hover:bg-purple-50"
              onClick={() => setShowForm(true)}
            >
              ✨ Submit New Idea
            </Button>
          </div>
        </Card>

        {/* Submit Form */}
        {showForm && (
          <Card elevated className="mb-6 animate-in fade-in duration-200">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800">Submit Your Idea</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <Input
                  label="Idea Title"
                  placeholder="Give your idea a catchy name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Problem Statement
                  </label>
                  <textarea
                    className="w-full p-4 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none"
                    rows={3}
                    placeholder="What problem are you trying to solve?"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Proposed Solution
                  </label>
                  <textarea
                    className="w-full p-4 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none"
                    rows={3}
                    placeholder="How do you plan to solve it?"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Expected Impact
                  </label>
                  <textarea
                    className="w-full p-4 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none"
                    rows={2}
                    placeholder="Who will benefit and how?"
                    value={impact}
                    onChange={(e) => setImpact(e.target.value)}
                  />
                </div>

                <Button
                  fullWidth
                  onClick={handleSubmit}
                  loading={submitting}
                  disabled={!isFormValid}
                >
                  Submit Idea
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Status Guide */}
        <Card className="mb-6 bg-slate-50 border-slate-200">
          <div className="p-4">
            <p className="text-sm font-medium text-slate-700 mb-3">Idea Journey</p>
            <div className="flex items-center justify-between">
              {['Submitted', 'Under Review', 'Approved / Rejected'].map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-sm font-semibold text-slate-500">
                      {i + 1}
                    </div>
                    <span className="mt-2 text-xs text-slate-500 text-center max-w-[80px]">{step}</span>
                  </div>
                  {i < 2 && <div className="w-8 h-0.5 bg-slate-200 mx-1 mb-6" />}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* My Ideas */}
        <h3 className="text-lg font-semibold text-slate-800 mb-4">My Ideas</h3>
        <div className="space-y-4">
          {myIdeas.map((idea) => {
            const statusInfo = statusMap[idea.status];
            return (
              <Card key={idea.id}>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-slate-800">{idea.title}</h4>
                    <StatusBadge status={statusInfo.status}>{statusInfo.label}</StatusBadge>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-slate-600">Problem</p>
                      <p className="text-slate-500">{idea.problem}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-600">Solution</p>
                      <p className="text-slate-500">{idea.solution}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-600">Impact</p>
                      <p className="text-slate-500">{idea.impact}</p>
                    </div>
                  </div>

                  {idea.feedback && (
                    <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                      <p className="text-sm font-medium text-emerald-700">💬 Feedback</p>
                      <p className="text-sm text-emerald-600 mt-1">{idea.feedback}</p>
                    </div>
                  )}

                  <p className="text-xs text-slate-400 mt-4">Submitted {idea.submittedAt}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {myIdeas.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-4xl mb-4">💡</p>
            <p className="font-medium text-slate-700 mb-2">No ideas submitted yet</p>
            <p className="text-sm text-slate-500">Your innovative ideas could change the world!</p>
          </Card>
        )}
      </main>
    </div>
  );
}
