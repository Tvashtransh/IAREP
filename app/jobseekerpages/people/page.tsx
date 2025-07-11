"use client";
import React, { useState } from 'react';
import PeopleList from '../../components/PeopleList';
import PeopleSidebar from '../../components/PeopleSidebar';

export default function PeoplePage() {
  // Placeholder/mock data for now
  const people = [
    {
      id: 1,
      name: 'Diana Ross',
      avatar: '/avatars/person1.png',
      location: 'New York',
      title: 'UI Designer at Amet Company',
      tags: ['UX Research', 'UI Design', 'Web Design'],
      status: 'Open for work',
      sentMessage: true,
    },
    // ...more mock people
  ];

  // State for search and filters (for demonstration)
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    role: '',
    experience: '',
    industry: '',
  });

  const handleSearch = (query: string) => setSearch(query);
  const handleFilterChange = (type: string, value: string) => setFilters(f => ({ ...f, [type]: value }));
  const handleClear = () => {
    setSearch('');
    setFilters({ location: '', role: '', experience: '', industry: '' });
  };

  return (
    <div className="bg-[#FCFCFC] min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col items-stretch">
        <div className="flex-1">
          <h1 className="font-archivo font-bold text-[48px] mb-7">
            <span className="text-black">Build your </span>
            <span className="text-[#41e5ff]">Network</span>
          </h1>
          {/* Search and Filter Bar (copied from jobs SearchFilters) */}
          <div className="w-full max-w-7xl px-0">
            <div className="flex items-end w-full">
              {/* Search group */}
              <div className="flex flex-col mr-2">
                <span className="font-bold text-[18px] font-archivo mb-2 text-[#171A1F]">Search</span>
                <div className="relative w-[348px]">
                  <input
                    type="text"
                    placeholder="Search people (e.g. Designer)"
                    className="h-[43px] pl-12 pr-4 w-full bg-[#F3F4F6] rounded-lg border-none focus:ring-0 focus:border-[#E5E7EB] focus:outline-none text-[#171A1F] placeholder:text-[#A0A0A0] font-inter text-[16px] font-normal"
                    value={search}
                    onChange={e => handleSearch(e.target.value)}
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
              <div className="h-[60px] w-px bg-[#E5E7EB] mx-1 self-end" />
              {/* Filters group */}
              <div className="flex flex-col ml-2">
                <span className="font-bold text-[18px] font-archivo mb-2 text-[#171A1F]">Filter</span>
                <div className="flex flex-row gap-2 items-end">
                  {/* Location Filter */}
                  <div className="relative w-[149px]">
                    <select
                      className="w-[149px] h-[43px] pl-4 pr-10 bg-[#F3F4F6] rounded-lg border-none appearance-none focus:ring-0 focus:border-[#E5E7EB] focus:outline-none text-[#171A1F] font-inter text-[16px] font-normal"
                      value={filters.location}
                      onChange={e => handleFilterChange('location', e.target.value)}
                    >
                      <option value="">Location</option>
                      <option value="newyork">New York</option>
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
                  {/* Experience Level Filter */}
                  <div className="relative w-[179px]">
                    <select
                      className="w-[179px] h-[43px] pl-4 pr-10 bg-[#F3F4F6] rounded-lg border-none appearance-none focus:ring-0 focus:border-[#E5E7EB] focus:outline-none text-[#171A1F] font-inter text-[16px] font-normal"
                      value={filters.experience}
                      onChange={e => handleFilterChange('experience', e.target.value)}
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
                  {/* Role Filter (149px) */}
                  <div className="relative w-[149px]">
                    <select
                      className="w-[149px] h-[43px] pl-4 pr-10 bg-[#F3F4F6] rounded-lg border-none appearance-none focus:ring-0 focus:border-[#E5E7EB] focus:outline-none text-[#171A1F] font-inter text-[16px] font-normal"
                      value={filters.role}
                      onChange={e => handleFilterChange('role', e.target.value)}
                    >
                      <option value="">Role</option>
                      <option value="designer">Designer</option>
                      <option value="developer">Developer</option>
                      <option value="manager">Manager</option>
                      <option value="analyst">Analyst</option>
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
                  {/* Industry Filter (248px) */}
                  <div className="relative w-[248px]">
                    <select
                      className="w-[248px] h-[43px] pl-4 pr-10 bg-[#F3F4F6] rounded-lg border-none appearance-none focus:ring-0 focus:border-[#E5E7EB] focus:outline-none text-[#171A1F] font-inter text-[16px] font-normal"
                      value={filters.industry}
                      onChange={e => handleFilterChange('industry', e.target.value)}
                    >
                      <option value="">Industry</option>
                      <option value="it">IT</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                      <option value="finance">Finance</option>
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
                  {/* Clear filter button, right-aligned and vertically centered */}
                  <button onClick={handleClear} className="text-[#41E5FF] hover:opacity-80 whitespace-nowrap ml-4 mb-1">Clear filters</button>
                </div>
              </div>
            </div>
          </div>
          {/* End Search and Filter Bar */}
          <div className="flex flex-row items-start w-full">
            <div className="flex-1">
              <PeopleList people={people} />
            </div>
            <div className="ml-8 mt-[100px]">
              <PeopleSidebar />
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        select:focus {
          outline: none !important;
          box-shadow: 0 0 0 2px #E5E7EB !important;
          border-color: #E5E7EB !important;
        }
        select option:checked, select option:focus {
          background-color: #41E5FF !important;
          color: #fff !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 16px !important;
          font-weight: 400 !important;
        }
        select option:hover {
          background-color: #E6F9FF !important;
          color: #171A1F !important;
        }
      `}</style>
    </div>
  );
} 