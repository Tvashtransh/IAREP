import React from 'react';
import JobCard, { JobCardProps } from './JobCard';

interface JobListProps {
  jobs: JobCardProps[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobs.map((job, idx) => (
        <JobCard key={idx} {...job} />
      ))}
    </div>
  );
};

export default JobList; 