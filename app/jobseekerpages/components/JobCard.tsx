import React from 'react';
import Tag from './Tag';
import Button from './Button';

export interface JobCardProps {
  avatarUrl: string;
  jobTitle: string;
  salary: string;
  tags: string[];
  location: string;
  company: string;
  isHot?: boolean;
  isRemote?: boolean;
  onSave?: () => void;
  onApply?: () => void;
  selected?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  avatarUrl,
  jobTitle,
  salary,
  tags,
  location,
  company,
  isHot,
  isRemote,
  onSave,
  onApply,
  selected,
}) => {
  return (
    <div className={`w-[340px] h-[220px] rounded-2xl border border-[#F3F4F6] p-6 flex flex-col justify-between transition-colors duration-300 overflow-hidden ${selected ? 'bg-[#ECFCFF]' : 'bg-white'} border-b border-[#E5E7EB]`}>
      <div className="flex items-center gap-4">
        <img src={avatarUrl} alt={company} className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD37A] bg-white" />
        <div>
          <div className="text-xl font-bold text-[#171A1F]">{jobTitle}</div>
          <div className="text-lg text-[#171A1F] font-normal">{salary}</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2 text-[#8F97A3] text-base">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M3.333 8.333 10 3.333l6.667 5v7.5A1.667 1.667 0 0 1 15 16.667H5A1.667 1.667 0 0 1 3.333 15.833v-7.5Z" stroke="#8F97A3" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8.333 16.667v-5h3.334v5" stroke="#8F97A3" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          <span>{company}</span>
        </div>
        <div className="flex items-center gap-2 text-[#8F97A3] text-base">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 18.333s6.667-5.833 6.667-10A6.667 6.667 0 1 0 3.333 8.333c0 4.167 6.667 10 6.667 10Z" stroke="#8F97A3" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="10" cy="8.333" r="2.5" stroke="#8F97A3" strokeWidth="1.5"/></svg>
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-[#8F97A3] text-base">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M5.833 3.333A1.667 1.667 0 0 0 4.167 5v11.667l5.833-3.334 5.833 3.334V5a1.667 1.667 0 0 0-1.666-1.667H5.833Z" stroke="#8F97A3" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          <span>{tags[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard; 