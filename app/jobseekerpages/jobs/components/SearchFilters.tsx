'use client';

import React from 'react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filterType: string, value: string) => void;
}

export default function SearchFilters({ onSearch, onFilterChange }: SearchFiltersProps) {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-end justify-between mt-8">
            <h2 className="text-[48px] font-bold font-archivo leading-none">
              <span className="text-[#171A1F]">Search</span> <span className="text-[#41E5FF]">Jobs</span>
            </h2>
            <button className="text-[#41E5FF] hover:opacity-80 mb-2">Clear filter</button>
          </div>
          {/* Subheadings and controls */}
          <div className="flex items-start gap-2">
            {/* Search group */}
            <div className="flex flex-col flex-1">
              <span className="font-bold text-[18px] font-archivo mb-2 text-[#171A1F]">Search</span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="UX UI Designer"
                  className="h-[43px] pl-12 pr-4 w-full bg-[#F3F4F6] rounded-lg border-none focus:ring-1 focus:ring-[#41E5FF] focus:outline-none text-[#171A1F] placeholder:text-[#A0A0A0] font-inter text-[16px] font-normal"
                  onChange={(e) => onSearch(e.target.value)}
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            {/* Divider */}
            <div className="h-[60px] w-px bg-[#E5E7EB] mx-2 self-center" />
            {/* Filters group */}
            <div className="flex flex-col flex-1">
              <span className="font-bold text-[18px] font-archivo mb-2 text-[#171A1F]">Filters</span>
              <div className="flex gap-4 items-center flex-nowrap">
                {/* Location Filter */}
                <div className="relative w-[149px]">
                  <select
                    className="w-[149px] h-[43px] pl-4 pr-10 bg-[#F3F4F6] rounded-lg border-none appearance-none focus:ring-1 focus:ring-[#41E5FF] focus:outline-none text-[#171A1F] font-inter text-[16px] font-normal"
                    onChange={(e) => onFilterChange('location', e.target.value)}
                  >
                    <option value="">Location</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">On-site</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {/* Job Type Filter */}
                <div className="relative w-[169px]">
                  <select
                    className="w-[169px] h-[43px] pl-4 pr-10 bg-[#F3F4F6] rounded-lg border-none appearance-none focus:ring-1 focus:ring-[#41E5FF] focus:outline-none text-[#171A1F] font-inter text-[16px] font-normal"
                    onChange={(e) => onFilterChange('jobType', e.target.value)}
                  >
                    <option value="">Job type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {/* Experience Level Filter */}
                <div className="relative w-[179px]">
                  <select
                    className="w-[179px] h-[43px] pl-4 pr-10 bg-[#F3F4F6] rounded-lg border-none appearance-none focus:ring-1 focus:ring-[#41E5FF] focus:outline-none text-[#171A1F] font-inter text-[16px] font-normal"
                    onChange={(e) => onFilterChange('experience', e.target.value)}
                  >
                    <option value="">Experience level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                    <option value="lead">Lead Level</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {/* Company Type Filter */}
                <div className="relative w-[238px]">
                  <select
                    className="w-[238px] h-[43px] pl-4 pr-10 bg-[#F3F4F6] rounded-lg border-none appearance-none focus:ring-1 focus:ring-[#41E5FF] focus:outline-none text-[#171A1F] font-inter text-[16px] font-normal"
                    onChange={(e) => onFilterChange('companyType', e.target.value)}
                  >
                    <option value="">Company type</option>
                    <option value="startup">Startup</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="agency">Agency</option>
                    <option value="nonprofit">Non-profit</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for dropdown options */}
      <style jsx global>{`
        select option {
          background-color: white !important;
          color: #171A1F !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 16px !important;
          font-weight: 400 !important;
          padding: 8px 12px !important;
        }
        
        select option:hover {
          background-color: #E6F9FF !important;
          color: #171A1F !important;
        }
        
        select option:checked,
        select option:focus {
          background-color: #E6F9FF !important;
          color: #171A1F !important;
        }
        
        select:focus {
          outline: none !important;
          box-shadow: 0 0 0 1px #41E5FF !important;
          border: none !important;
        }
      `}</style>
    </>
  );
} 