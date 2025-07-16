'use client';

import React, { useState } from 'react';
import SearchFilters from './components/SearchFilters';
import JobCard from '../components/JobCard';
import Image from 'next/image';
import JobDetailCard from '../components/JobDetailCard';

// Mock data - replace with actual API call

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  logo: string;
  postedDate: string;
};

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior UX/UI Designer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    logo: '/company-logos/techcorp.png',
    postedDate: '2 days ago'
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'DesignHub',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$70k - $90k',
    logo: '/company-logos/designhub.png',
    postedDate: '1 week ago'
  },
  // Add more mock jobs as needed
];

function StepBar({ step, totalSteps }: { step: number; totalSteps: number }) {
  return (
    <div className="flex items-center mb-8 mt-[50px] w-full max-w-lg mx-auto">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
        <div
          key={s}
          className={`flex-1 h-2 rounded-md mr-1.5 last:mr-0 ${step >= s ? 'bg-[#41E5FF] shadow-[0_4px_9px_0_rgba(65,229,255,0.11),0_0px_2px_0_rgba(65,229,255,0.12)]' : 'bg-[#DEE3EB]'}`}
        ></div>
      ))}
    </div>
  );
}

const TOTAL_STEPS = 3;

export default function JobSeekerForm() {
  const [step, setStep] = useState(1);
  // Mock state for form fields
  const [basicInfo, setBasicInfo] = useState({ name: '', email: '' });
  const [careerInterest, setCareerInterest] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
    companyType: ''
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Step 1: Basic Info
  if (step === 1) {
  return (
      <div className="min-h-screen flex bg-[#F7F9FB] font-inter font-normal text-[14px]">
        <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
          <div className="max-w-lg mx-auto w-full">
            <StepBar step={1} totalSteps={TOTAL_STEPS} />
            <div className="mb-4 mt-[45px] font-archivo text-[30px] font-semibold text-[#23262F]">Basic Information</div>
            <form className="space-y-6 w-full">
              <div>
                <label className="block text-[#23262F] mb-1 font-archivo text-[18px] font-semibold">Full Name</label>
                <input
                  type="text"
                  value={basicInfo.name}
                  onChange={e => setBasicInfo({ ...basicInfo, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] font-inter"
                  style={{ color: '#23262F' }}
                />
              </div>
              <div>
                <label className="block text-[#23262F] mb-1 font-archivo text-[18px] font-semibold">Email</label>
                <input
                  type="email"
                  value={basicInfo.email}
                  onChange={e => setBasicInfo({ ...basicInfo, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] font-inter"
                  style={{ color: '#23262F' }}
                />
              </div>
              <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF] opacity-50 cursor-not-allowed" disabled>Previous</button>
                <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" onClick={() => setStep(2)}>Next</button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-8">
          <Image src="/images/Blogs/job.png" alt="Job Search" width={320} height={320} className="mx-auto rounded-lg mb-8" />
          <div className="mb-2 font-archivo text-[40px] font-bold text-[#23262F]">Find Your Dream Job</div>
          <div className="mb-6 max-w-lg mx-auto font-inter text-[16px] font-normal text-[#31343D]">Start your journey by sharing your basic details. We'll help you discover the best opportunities in the startup ecosystem.</div>
        </div>
      </div>
    );
  }

  // Step 2: Career Interests
  if (step === 2) {
    return (
      <div className="min-h-screen flex bg-[#F7F9FB] font-inter font-normal text-[14px]">
        <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
          <div className="max-w-lg mx-auto w-full">
            <StepBar step={2} totalSteps={TOTAL_STEPS} />
            <div className="mb-4 mt-[45px] font-archivo text-[30px] font-semibold text-[#23262F]">Your Career Interests</div>
            <form className="space-y-6 w-full">
              <div>
                <label className="block text-[#23262F] mb-1 font-archivo text-[18px] font-semibold">What type of roles are you most interested in?</label>
                <input
                  type="text"
                  value={careerInterest}
                  onChange={e => setCareerInterest(e.target.value)}
                  placeholder="E.g., Software Developer, Product Manager, Marketing, etc."
                  className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] font-inter"
                  style={{ color: '#23262F' }}
                />
              </div>
              <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" onClick={() => setStep(1)}>Previous</button>
                <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" onClick={() => setStep(3)}>Next</button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-8">
          <Image src="/images/Blogs/job.png" alt="Job Search" width={320} height={320} className="mx-auto rounded-lg mb-8" />
          <div className="mb-2 font-archivo text-[40px] font-bold text-[#23262F]">Explore Your Interests</div>
          <div className="mb-6 max-w-lg mx-auto font-inter text-[16px] font-normal text-[#31343D]">Tell us about your career interests so we can match you with the most relevant startup jobs and connections.</div>
        </div>
      </div>
    );
  }

  // Step 3: Job List (mocked)
  return (
    <div className="min-h-screen flex bg-[#F7F9FB] font-inter font-normal text-[14px]">
      <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
        <div className="max-w-lg mx-auto w-full">
          <StepBar step={3} totalSteps={TOTAL_STEPS} />
          <div className="mb-4 mt-[45px] font-archivo text-[30px] font-semibold text-[#23262F]">Available Startup Jobs</div>
          <div className="space-y-4">
            {mockJobs.map(job => (
              <div
                key={job.id}
                className="p-4 rounded-lg border border-[#DEE3EB] bg-[#F7F9FB]"
                onClick={() => setSelectedJob(job)}
              >
                <div className="font-archivo text-lg font-semibold text-[#23262F]">{job.title}</div>
                <div className="font-inter text-sm text-[#6B7280]">{job.company} • {job.location} • {job.salary}</div>
                <button className="mt-2 px-6 py-2 rounded-md bg-[#41E5FF] text-white font-semibold text-sm hover:bg-[#22CCF8]">Apply</button>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between gap-6 mt-8 w-full">
            <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" onClick={() => setStep(2)}>Previous</button>
            <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]">Submit</button>
          </div>
        </div>
          </div>
      <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-8">
        <Image src="/images/Blogs/job.png" alt="Job Search" width={320} height={320} className="mx-auto rounded-lg mb-8" />
        <div className="mb-2 font-archivo text-[40px] font-bold text-[#23262F]">Apply and Get Hired</div>
        <div className="mb-6 max-w-lg mx-auto font-inter text-[16px] font-normal text-[#31343D]">Browse and apply to curated startup jobs. We'll help you connect with the right teams and opportunities.</div>
      </div>
    </div>
  );
} 