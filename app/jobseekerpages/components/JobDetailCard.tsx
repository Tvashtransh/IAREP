import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface JobDetailCardProps {
  jobTitle: string;
  salary: string;
  companyName: string;
  location: string;
  workSchedule: string;
  companySize: string;
  postedTime: string;
  description: string;
  responsibilities: string[];
  bannerImage: string;
  recruiterName: string;
  recruiterRole: string;
  recruiterAvatar: string;
  companyDesc: string;
  companyLogo: string;
  companyType: string;
  onSave: () => void;
  onApply: () => void;
}

const JobDetailCard: React.FC<JobDetailCardProps> = ({
  jobTitle,
  salary,
  companyName,
  location,
  workSchedule,
  companySize,
  postedTime,
  description,
  responsibilities,
  bannerImage,
  recruiterName,
  recruiterRole,
  recruiterAvatar,
  companyDesc,
  companyLogo,
  companyType,
  onSave,
  onApply,
}) => {
  const router = useRouter();

  return (
    <div className="w-[812px] min-h-[1204px] bg-white rounded-2xl border border-[#F3F4F6] overflow-hidden flex flex-col border-b border-[#E5E7EB] mb-4">
      {/* Banner */}
      <div className="relative w-full h-[156px]">
        <Image src={bannerImage} alt="Company Banner" layout="fill" objectFit="cover" className="w-full h-full object-cover" />
      </div>
      {/* Main content */}
      <div className="flex-1 px-10 pt-8 pb-10 flex flex-col gap-8">
        {/* Title, Salary, Actions */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#171A1F] mb-2">{jobTitle}</h1>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xl font-bold text-[#41E5FF]">{salary}</span>
            </div>
            <div className="flex items-center gap-4 text-[#6F7782] mb-4">
              {/* Company icon placeholder */}
              <span className="flex items-center gap-1 text-[16px] font-inter"><span className="i-mdi:domain text-lg" />{companyName}</span>
              {/* Location icon placeholder */}
              <span className="flex items-center gap-1 text-[16px] font-inter"><span className="i-mdi:map-marker text-lg" />{location}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="bg-[#F3F4F6] text-[#6F7782] rounded-lg px-3 py-1 text-[14px] font-normal font-inter h-[36px] flex items-center">Mid-Senior level</span>
              <span className="bg-[#F3F4F6] text-[#6F7782] rounded-lg px-3 py-1 text-[14px] font-normal font-inter h-[36px] flex items-center">Full-time</span>
              <span className="bg-[#F3F4F6] text-[#6F7782] rounded-lg px-3 py-1 text-[14px] font-normal font-inter h-[36px] flex items-center">Remote</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 min-w-[200px]">
            <div className="flex gap-2">
              <button onClick={onSave} className="w-[78px] h-[36px] bg-[#ECFDFF] text-[#007B8E] rounded-lg font-normal font-inter text-[14px] flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 13.5S2.5 9.5 2.5 6.25C2.5 4.17893 4.17893 2.5 6.25 2.5C7.2165 2.5 8.14286 2.96339 8.75 3.75C9.35714 2.96339 10.2835 2.5 11.25 2.5C13.3211 2.5 15 4.17893 15 6.25C15 9.5 8 13.5 8 13.5Z" stroke="#007B8E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                Save
              </button>
              <button onClick={onApply} className="w-[96px] h-[36px] bg-[#41E5FF] text-white rounded-lg font-normal font-inter text-[14px] flex items-center justify-center">Apply Now</button>
            </div>
            <div className="text-[#6F7782] font-inter font-normal text-[14px] text-right">{postedTime}</div>
          </div>
        </div>
        {/* Recruiter */}
        <div className="w-[748px] h-[172px] bg-white rounded-[6px] border border-[#BEC1CA] flex flex-col px-8 py-6 border-b border-[#E5E7EB]">
          <span className="text-lg font-bold text-[#171A1F] mb-4">Contact recruiter</span>
          <div className="flex items-center gap-6">
            <Image src={recruiterAvatar} alt={recruiterName} width={50} height={50} className="w-[50px] h-[50px] rounded-full object-cover border-2 border-[#22CCB2] bg-[#BAF3EB]" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#171A1F] text-base leading-tight">{recruiterName}</span>
                <span className="inline-block bg-[#F0FCFA] text-[#14796A] text-[12px] font-inter font-normal w-[77px] h-[28px] rounded-full flex items-center justify-center">Job poster</span>
              </div>
              <span className="text-[#6F7782] text-sm leading-tight">{recruiterRole}</span>
            </div>
            <div className="flex-1" />
            <button className="w-[106px] h-[36px] flex items-center justify-center border border-[#41E5FF] rounded-lg text-[#41E5FF] font-normal font-inter text-[14px] gap-2">
              <svg className="w-4 h-4" fill="none" stroke="#41E5FF" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Message
            </button>
          </div>
        </div>
        {/* Description & Responsibilities */}
        <div>
          <h2 className="font-bold text-[16px] font-inter text-[#171A1F] mb-2">Job Description</h2>
          <p className="text-[#171A1F] mb-4 text-[16px] font-normal font-inter">{description}</p>
          <h3 className="font-bold text-[16px] font-inter text-[#171A1F] mb-2">Responsibilities</h3>
          <ul className="list-none space-y-2">
            {responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[#6F7782] text-[16px] font-normal font-inter">
                <span className="mt-1 w-4 h-4 text-[#41E5FF]">✔️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* About Company */}
        <div className="w-[748px] h-[312px] bg-white rounded-[6px] border border-[#BEC1CA] flex flex-col px-8 py-6 mt-4 border-b border-[#E5E7EB]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[16px] font-bold font-inter text-[#171A1F]">About company</span>
            <button
              className="w-[168px] h-[36px] text-[#41E5FF] text-[14px] font-normal font-inter border border-transparent rounded-lg flex items-center justify-center hover:underline"
              onClick={() => router.push('/jobseekerpages/company')}
            >
              View company profile
            </button>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Image src={companyLogo} alt={companyName} width={52} height={52} className="w-[52px] h-[52px] rounded object-cover border border-[#BEC1CA]" />
            <span className="font-bold text-[#171A1F] text-[18px] font-archivo">{companyName}</span>
          </div>
          <p className="text-[#171A1F] mb-6 text-[16px] font-normal font-inter max-w-[684px]">{companyDesc}</p>
          <div className="flex flex-wrap gap-x-12 gap-y-2 text-[#6F7782] text-[16px] font-normal font-inter items-center">
            <div className="flex items-center gap-2"><span className="i-mdi:briefcase-outline w-5 h-5" />{companyType}</div>
            <div className="flex items-center gap-2"><span className="i-mdi:map-marker w-5 h-5" />{location}</div>
            <div className="flex items-center gap-2"><span className="i-mdi:account-group w-5 h-5" />{companySize}</div>
            <div className="flex items-center gap-2"><span className="i-mdi:calendar w-5 h-5" />{workSchedule}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailCard; 