'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, Chip, ChipGroup } from '@/components/ui';

const doubts = [
  {
    id: 1,
    question: 'How do I reverse a string in Python without using built-in functions?',
    skill: 'Python',
    difficulty: 'Beginner',
    askedBy: 'Rahul K.',
    time: '5 mins ago',
    points: 20,
  },
  {
    id: 2,
    question: 'What is the difference between margin and padding in CSS?',
    skill: 'Design',
    difficulty: 'Beginner',
    askedBy: 'Sneha M.',
    time: '12 mins ago',
    points: 15,
  },
  {
    id: 3,
    question: 'How do I implement binary search recursively?',
    skill: 'DSA',
    difficulty: 'Intermediate',
    askedBy: 'Amit S.',
    time: '25 mins ago',
    points: 30,
  },
  {
    id: 4,
    question: 'Can you explain how React useEffect cleanup works?',
    skill: 'React',
    difficulty: 'Intermediate',
    askedBy: 'Priya R.',
    time: '1 hour ago',
    points: 25,
  },
];

const myDoubts = [
  {
    id: 101,
    question: 'How do I connect Firebase to Next.js?',
    skill: 'React',
    status: 'answered',
    answeredBy: 'Vikram T.',
    answer: 'You need to install firebase package and initialize it in a separate config file...',
  },
  {
    id: 102,
    question: 'What is the best way to handle state in large React apps?',
    skill: 'React',
    status: 'pending',
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-emerald-100 text-emerald-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default function CoachingPage() {
  const [tab, setTab] = useState<'answer' | 'ask'>('answer');

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-slate-500 hover:text-slate-700">
              ← Back
            </Link>
            <h1 className="font-semibold text-slate-800">Peer Coaching</h1>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto">
        {/* Tabs */}
        <div className="flex bg-white rounded-xl p-1 border border-slate-200 mb-6">
          <button
            onClick={() => setTab('answer')}
            className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${
              tab === 'answer'
                ? 'bg-teal-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            🎓 Answer a Doubt
          </button>
          <button
            onClick={() => setTab('ask')}
            className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${
              tab === 'ask'
                ? 'bg-teal-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            🤔 Ask a Doubt
          </button>
        </div>

        {tab === 'answer' && (
          <div className="animate-in fade-in duration-200">
            {/* Points Rule */}
            <Card className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <div className="p-4 flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-sm font-medium text-amber-800">Points awarded only if learner passes</p>
                  <p className="text-sm text-amber-700 mt-1">
                    After you answer, the learner takes a short quiz. Your points are credited only when they pass.
                  </p>
                </div>
              </div>
            </Card>

            {/* Doubts List */}
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Doubts Waiting for Help</h3>
            <div className="space-y-4">
              {doubts.map((doubt) => (
                <Card key={doubt.id} className="hover:shadow-md hover:border-teal-200 transition-all">
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {doubt.askedBy.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                            {doubt.skill}
                          </span>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${difficultyColors[doubt.difficulty]}`}>
                            {doubt.difficulty}
                          </span>
                          <span className="text-xs text-slate-400">{doubt.time}</span>
                        </div>
                        <p className="font-medium text-slate-800 mb-3">{doubt.question}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-slate-500">Asked by {doubt.askedBy}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-amber-600">+{doubt.points} pts</span>
                            <Button size="sm">Answer</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {tab === 'ask' && (
          <div className="animate-in fade-in duration-200">
            {/* Ask New Doubt */}
            <Card elevated className="mb-6">
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 mb-4">Ask a New Doubt</h3>
                <textarea
                  className="w-full p-4 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none"
                  rows={4}
                  placeholder="Type your question here..."
                />
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <span className="text-sm text-slate-600">Select skill:</span>
                  <ChipGroup>
                    {['Python', 'React', 'Design', 'Data'].map((skill) => (
                      <Chip key={skill} selected={skill === 'React'}>
                        {skill}
                      </Chip>
                    ))}
                  </ChipGroup>
                </div>
                <Button fullWidth className="mt-4">
                  Submit Doubt
                </Button>
              </div>
            </Card>

            {/* My Doubts */}
            <h3 className="text-lg font-semibold text-slate-800 mb-4">My Doubts</h3>
            <div className="space-y-4">
              {myDoubts.map((doubt) => (
                <Card key={doubt.id}>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                        {doubt.skill}
                      </span>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        doubt.status === 'answered' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {doubt.status === 'answered' ? '✓ Answered' : '⏳ Pending'}
                      </span>
                    </div>
                    <p className="font-medium text-slate-800 mb-2">{doubt.question}</p>
                    {doubt.status === 'answered' && doubt.answer && (
                      <div className="p-3 bg-slate-50 rounded-lg mt-3">
                        <p className="text-sm text-slate-500 mb-1">Answered by {doubt.answeredBy}</p>
                        <p className="text-sm text-slate-700">{doubt.answer}</p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
