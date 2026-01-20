'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, Chip, ChipGroup } from '@/components/ui';
import { LockIcon } from '@/components/icons';

const projects = [
  {
    id: 1,
    title: 'E-commerce Dashboard UI',
    sponsor: 'TechStart Inc.',
    sponsorLogo: '🏢',
    skills: ['React', 'Tailwind CSS', 'Figma'],
    pointsRequired: 2000,
    description: 'Design and build a modern admin dashboard for an e-commerce platform.',
    duration: '2 weeks',
    stipend: '₹15,000',
  },
  {
    id: 2,
    title: 'Mobile App Landing Page',
    sponsor: 'AppLaunch Studio',
    sponsorLogo: '📱',
    skills: ['HTML', 'CSS', 'JavaScript'],
    pointsRequired: 1500,
    description: 'Create a responsive landing page for a fitness mobile app.',
    duration: '1 week',
    stipend: '₹8,000',
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    sponsor: 'DataViz Labs',
    sponsorLogo: '📊',
    skills: ['Python', 'Pandas', 'Plotly'],
    pointsRequired: 3000,
    description: 'Build an interactive dashboard to visualize sales analytics.',
    duration: '3 weeks',
    stipend: '₹25,000',
  },
  {
    id: 4,
    title: 'AI Chatbot Integration',
    sponsor: 'AI Solutions',
    sponsorLogo: '🤖',
    skills: ['Python', 'OpenAI API', 'Flask'],
    pointsRequired: 4000,
    description: 'Integrate an AI-powered chatbot into an existing customer support system.',
    duration: '4 weeks',
    stipend: '₹35,000',
  },
];

const currentPoints = 2450;

export default function ProjectsPage() {
  const [skillFilter, setSkillFilter] = useState<string | null>(null);
  const allSkills = [...new Set(projects.flatMap(p => p.skills))];

  const filteredProjects = skillFilter 
    ? projects.filter(p => p.skills.includes(skillFilter))
    : projects;

  return (
    <div className="min-h-screen bg-slate-50 pb-6">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-slate-500 hover:text-slate-700">
              ← Back
            </Link>
            <h1 className="font-semibold text-slate-800">Project Marketplace</h1>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 max-w-2xl mx-auto">
        {/* Points Status */}
        <Card className="mb-6 bg-gradient-to-r from-teal-50 to-blue-50 border-teal-100">
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Your Points</p>
              <p className="text-2xl font-bold text-teal-600">{currentPoints.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Eligible for</p>
              <p className="font-semibold text-slate-700">
                {projects.filter(p => p.pointsRequired <= currentPoints).length} projects
              </p>
            </div>
          </div>
        </Card>

        {/* Skill Filters */}
        <div className="mb-6">
          <p className="text-sm font-medium text-slate-700 mb-3">Filter by skill:</p>
          <ChipGroup>
            <Chip 
              selected={!skillFilter}
              onClick={() => setSkillFilter(null)}
            >
              All
            </Chip>
            {allSkills.map((skill) => (
              <Chip
                key={skill}
                selected={skillFilter === skill}
                onClick={() => setSkillFilter(skill)}
              >
                {skill}
              </Chip>
            ))}
          </ChipGroup>
        </div>

        {/* Projects List */}
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Available Projects</h3>
        <div className="space-y-4">
          {filteredProjects.map((project) => {
            const isEligible = currentPoints >= project.pointsRequired;
            
            return (
              <Card 
                key={project.id} 
                className={`transition-all ${!isEligible ? 'opacity-70' : 'hover:shadow-md hover:border-teal-200'}`}
              >
                <div className="p-5">
                  {/* Sponsor */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.sponsorLogo}</span>
                      <span className="text-sm font-medium text-slate-600">{project.sponsor}</span>
                    </div>
                    <span className="text-sm font-semibold text-teal-600">{project.stipend}</span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-semibold text-lg text-slate-800 mb-2">{project.title}</h4>
                  <p className="text-sm text-slate-500 mb-4">{project.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>⏱️ {project.duration}</span>
                      <span className={`font-medium ${isEligible ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {project.pointsRequired.toLocaleString()} pts required
                      </span>
                    </div>
                    {isEligible ? (
                      <Button size="sm">Apply</Button>
                    ) : (
                      <button 
                        disabled 
                        className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-400 text-sm font-medium rounded-xl cursor-not-allowed"
                      >
                        <LockIcon className="w-4 h-4" />
                        Locked
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-4xl mb-4">🔍</p>
            <p className="font-medium text-slate-700 mb-2">No projects found</p>
            <p className="text-sm text-slate-500">Try adjusting your filters</p>
          </Card>
        )}

        {/* Motivation Message */}
        {projects.some(p => p.pointsRequired > currentPoints) && (
          <Card className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100">
            <div className="p-4 flex items-start gap-3">
              <span className="text-2xl">🌟</span>
              <div>
                <p className="text-sm font-medium text-slate-700">Grow your skills to unlock more!</p>
                <p className="text-sm text-slate-500 mt-1">
                  Keep learning and teaching to earn more points and access premium projects.
                </p>
              </div>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
