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

export default function FindJobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
    companyType: ''
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    // Implement filter logic
  };

  const handleApply = (jobId: string) => {
    // Implement apply logic
    console.log('Applying to job:', jobId);
  };

  const handleContact = (jobId: string) => {
    // Implement contact logic
    console.log('Contacting about job:', jobId);
  };

  // Animation: when a job is selected, cards move to a vertical column and detail appears
  return (
    <div className="min-h-screen bg-white">
      <div className="py-8">
        <SearchFilters
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900">
            {mockJobs.length} results for '{searchQuery || 'UX UI Designer'}'
          </h2>
        </div>
        <div className={`flex gap-12 transition-all duration-500 ${selectedJob ? 'items-start' : ''} mb-10`}> 
          {/* Left: Job List */}
          <div className={`transition-all duration-500 ${selectedJob ? 'w-[360px]' : 'flex-1'} ${selectedJob ? 'flex flex-col gap-6' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'}`}>
            {mockJobs.map(job => (
              <div
                key={job.id}
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedJob(job)}
              >
                <JobCard
                  avatarUrl={job.logo}
                  jobTitle={job.title}
                  salary={job.salary}
                  tags={[job.type]}
                  location={job.location}
                  company={job.company}
                  selected={!!(selectedJob && selectedJob.id === job.id)}
                />
              </div>
            ))}
          </div>
          {/* Right: Job Detail */}
          {selectedJob && (
            <JobDetailCard
              jobTitle={selectedJob.title}
              salary={selectedJob.salary}
              companyName={selectedJob.company}
              location={selectedJob.location}
              workSchedule={"Mon - Fri"}
              companySize={"100 - 300 employees"}
              postedTime={selectedJob.postedDate}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis. Nibh dictumst vulputate odio pellentesque sit quis ac, sit ipsum. Sit rhoncus velit in sed massa arcu sit eu."}
              responsibilities={[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis.",
                "Nibh dictumst vulputate odio pellentesque sit quis ac, sit ipsum."
              ]}
              bannerImage={selectedJob.logo}
              recruiterName={"Romy Murray"}
              recruiterRole={"Hiring Manager"}
              recruiterAvatar={"/recruiters/romy-murray.jpg"}
              companyDesc={"Incididunt velit consequat eu esse cillum ut elit ad ut irure dolore sunt Lorem tempor consectetur esse culpa dolor. Ut non minim dolor irure tempor esse aute culpa eu enim."}
              companyLogo={selectedJob.logo}
              companyType={"Outsource"}
              onSave={() => {}}
              onApply={() => {}}
            />
          )}
        </div>
        {!selectedJob && (
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 border border-[#41E5FF] text-[#41E5FF] rounded-lg hover:bg-[#41E5FF] hover:text-white transition-colors">
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 