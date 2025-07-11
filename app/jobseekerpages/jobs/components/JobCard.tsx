'use client';

import React from 'react';
import Image from 'next/image';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    logo: string;
    postedDate: string;
  };
  onApply: (jobId: string) => void;
  onContact: (jobId: string) => void;
}

export default function JobCard({ job, onApply, onContact }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex space-x-4">
          <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={job.logo}
              alt={`${job.company} logo`}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        <button
          onClick={() => onContact(job.id)}
          className="flex items-center space-x-2 text-[#41E5FF] hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>Message</span>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          {job.location}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          {job.type}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          {job.salary}
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Posted {job.postedDate}</span>
        <button
          onClick={() => onApply(job.id)}
          className="px-4 py-2 bg-[#41E5FF] text-white rounded-lg hover:bg-[#22CCB2] transition-colors"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
} 