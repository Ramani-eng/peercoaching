'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, ProgressBar } from '@/components/ui';
import { LockIcon, CheckCircleIcon, ArrowRightIcon } from '@/components/icons';

const skillRoadmap = {
  name: 'Python Fundamentals',
  description: 'Master Python from basics to intermediate',
  totalLessons: 12,
  completedLessons: 7,
  levels: [
    {
      id: 1,
      name: 'Getting Started',
      status: 'completed',
      lessons: [
        { id: 1, title: 'Introduction to Python', type: 'video', completed: true },
        { id: 2, title: 'Setting Up Environment', type: 'task', completed: true },
        { id: 3, title: 'Variables & Data Types', type: 'quiz', completed: true },
      ],
    },
    {
      id: 2,
      name: 'Control Flow',
      status: 'completed',
      lessons: [
        { id: 4, title: 'Conditionals (if/else)', type: 'video', completed: true },
        { id: 5, title: 'Loops (for/while)', type: 'video', completed: true },
        { id: 6, title: 'Practice: Control Flow', type: 'quiz', completed: true },
      ],
    },
    {
      id: 3,
      name: 'Functions',
      status: 'current',
      lessons: [
        { id: 7, title: 'Defining Functions', type: 'video', completed: true },
        { id: 8, title: 'Parameters & Returns', type: 'video', completed: false },
        { id: 9, title: 'Practice: Functions', type: 'quiz', completed: false },
      ],
    },
    {
      id: 4,
      name: 'Data Structures',
      status: 'locked',
      lessons: [
        { id: 10, title: 'Lists & Tuples', type: 'video', completed: false },
        { id: 11, title: 'Dictionaries & Sets', type: 'video', completed: false },
        { id: 12, title: 'Final Assessment', type: 'quiz', completed: false },
      ],
    },
  ],
};

const typeIcons: Record<string, string> = {
  video: '🎬',
  task: '📝',
  quiz: '✅',
};

export default function LearningPage() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(3);
  const progress = (skillRoadmap.completedLessons / skillRoadmap.totalLessons) * 100;

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-slate-500 hover:text-slate-700">
              ← Back
            </Link>
            <h1 className="font-semibold text-slate-800">Learning</h1>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto">
        {/* Skill Header Card */}
        <Card elevated className="mb-6">
          <div className="p-5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-2xl shadow-md">
                🐍
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-lg text-slate-800">{skillRoadmap.name}</h2>
                <p className="text-sm text-slate-500">{skillRoadmap.description}</p>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500">Progress</span>
                <span className="font-medium text-teal-600">
                  {skillRoadmap.completedLessons} of {skillRoadmap.totalLessons} lessons
                </span>
              </div>
              <ProgressBar value={progress} size="lg" />
            </div>
          </div>
        </Card>

        {/* Quiz Requirement Notice */}
        <Card className="mb-6 bg-amber-50 border-amber-200">
          <div className="p-4 flex items-start gap-3">
            <span className="text-lg">📋</span>
            <div>
              <p className="text-sm font-medium text-amber-800">Quiz pass required to continue</p>
              <p className="text-sm text-amber-700 mt-1">
                Complete the quiz at the end of each level to unlock the next one.
              </p>
            </div>
          </div>
        </Card>

        {/* Skill Roadmap */}
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Skill Roadmap</h3>
        <div className="space-y-4">
          {skillRoadmap.levels.map((level, levelIndex) => {
            const isLocked = level.status === 'locked';
            const isCompleted = level.status === 'completed';
            const isCurrent = level.status === 'current';
            const isExpanded = expandedLevel === level.id;

            return (
              <Card
                key={level.id}
                className={`overflow-hidden ${isLocked ? 'opacity-60' : ''}`}
              >
                {/* Level Header */}
                <button
                  onClick={() => !isLocked && setExpandedLevel(isExpanded ? null : level.id)}
                  className="w-full p-4 flex items-center justify-between text-left"
                  disabled={isLocked}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isCompleted 
                        ? 'bg-emerald-100 text-emerald-600' 
                        : isCurrent 
                          ? 'bg-teal-100 text-teal-600 ring-2 ring-teal-500' 
                          : 'bg-slate-100 text-slate-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircleIcon className="w-5 h-5" />
                      ) : isLocked ? (
                        <LockIcon className="w-5 h-5" />
                      ) : (
                        <span className="font-semibold">{level.id}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{level.name}</p>
                      <p className="text-sm text-slate-500">
                        {level.lessons.filter(l => l.completed).length} / {level.lessons.length} lessons
                      </p>
                    </div>
                  </div>
                  {!isLocked && (
                    <ArrowRightIcon className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  )}
                </button>

                {/* Lessons */}
                {isExpanded && !isLocked && (
                  <div className="border-t border-slate-100 p-4 space-y-3">
                    {level.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className={`flex items-center gap-4 p-3 rounded-xl ${
                          lesson.completed 
                            ? 'bg-emerald-50' 
                            : 'bg-slate-50 hover:bg-teal-50 cursor-pointer'
                        }`}
                      >
                        <span className="text-xl">{typeIcons[lesson.type]}</span>
                        <div className="flex-1">
                          <p className={`font-medium ${lesson.completed ? 'text-slate-500' : 'text-slate-800'}`}>
                            {lesson.title}
                          </p>
                          <p className="text-xs text-slate-400 capitalize">{lesson.type}</p>
                        </div>
                        {lesson.completed ? (
                          <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <span className="text-xs font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded-full">
                            Start
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <Button fullWidth size="lg">
            Start Lesson: Parameters & Returns
          </Button>
        </div>
      </main>
    </div>
  );
}
