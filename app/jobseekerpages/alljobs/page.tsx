import React from 'react';
import JobList from '../components/JobList';

const mockJobs = [
  {
    avatarUrl: '/avatars/company1.png',
    jobTitle: 'UI / UX Designer',
    salary: '$95K - $120K',
    tags: ['Mid-Senior level', 'Full-time', 'Remote'],
    location: 'Tucson, AZ',
    company: 'Laborum',
    isHot: true,
    isRemote: true,
    messageButton: {
      text: 'Message',
      dimensions: 'w-24 h-8', // 96x32 pixels
      color: 'bg-green-100 hover:bg-green-200 text-green-800'
    },
    connectButton: {
      text: 'Connect',
      dimensions: 'w-16 h-8', // 64x32 pixels
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-800'
    }
  },
  {
    avatarUrl: '/avatars/company2.png',
    jobTitle: 'UX Copywriter',
    salary: '$70K - $80K',
    tags: ['Hybrid'],
    location: 'Tulsa, OK',
    company: 'Aliq',
    isHot: false,
    isRemote: true,
    messageButton: {
      text: 'Message',
      dimensions: 'w-24 h-8',
      color: 'bg-green-100 hover:bg-green-200 text-green-800'
    },
    connectButton: {
      text: 'Connect',
      dimensions: 'w-16 h-8',
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-800'
    }
  },
  {
    avatarUrl: '/avatars/company3.png',
    jobTitle: 'Senior UI/UX Designer',
    salary: '$110K - $120K',
    tags: ['Full-time', 'Remote'],
    location: 'Columbus, OH',
    company: 'Pariatur',
    isHot: false,
    isRemote: true,
    messageButton: {
      text: 'Message',
      dimensions: 'w-24 h-8',
      color: 'bg-green-100 hover:bg-green-200 text-green-800'
    },
    connectButton: {
      text: 'Connect',
      dimensions: 'w-16 h-8',
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-800'
    }
  },
  {
    avatarUrl: '/avatars/company4.png',
    jobTitle: 'UX Researcher',
    salary: '$85K - $100K',
    tags: ['Full-time', 'On-site'],
    location: 'San Francisco, CA',
    company: 'TechVision',
    isHot: true,
    isRemote: false,
    messageButton: {
      text: 'Message',
      dimensions: 'w-24 h-8',
      color: 'bg-green-100 hover:bg-green-200 text-green-800'
    },
    connectButton: {
      text: 'Connect',
      dimensions: 'w-16 h-8',
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-800'
    }
  },
  {
    avatarUrl: '/avatars/company5.png',
    jobTitle: 'UI Designer',
    salary: '$90K - $110K',
    tags: ['Mid-level', 'Hybrid'],
    location: 'New York, NY',
    company: 'DesignHub',
    isHot: true,
    isRemote: false,
    messageButton: {
      text: 'Message',
      dimensions: 'w-24 h-8',
      color: 'bg-green-100 hover:bg-green-200 text-green-800'
    },
    connectButton: {
      text: 'Connect',
      dimensions: 'w-16 h-8',
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-800'
    }
  },
  {
    avatarUrl: '/avatars/company6.png',
    jobTitle: 'Web Designer',
    salary: '$75K - $95K',
    tags: ['Full-time', 'Remote'],
    location: 'Austin, TX',
    company: 'WebCraft',
    isHot: false,
    isRemote: true,
    messageButton: {
      text: 'Message',
      dimensions: 'w-24 h-8',
      color: 'bg-green-100 hover:bg-green-200 text-green-800'
    },
    connectButton: {
      text: 'Connect',
      dimensions: 'w-16 h-8',
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-800'
    }
  },
];

export default function AllJobsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">All Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockJobs.map((job, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={job.avatarUrl} alt={job.company} className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD37A] bg-white" />
              <div>
                <div className="text-xl font-bold text-[#171A1F]">{job.jobTitle}</div>
                <div className="text-lg text-[#171A1F] font-normal">{job.salary}</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="text-[#8F97A3] text-base">{job.company}</div>
              <div className="text-[#8F97A3] text-base">{job.location}</div>
              <div className="flex gap-2 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
            {/* About company section */}
            <div className="bg-cyan-50 rounded p-3 text-xs text-gray-600">
              <div className="font-semibold text-gray-800 mb-1">About company</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis.</div>
              <a href="/jobseekerpages/company" className="inline-block mt-2 text-cyan-600 hover:underline font-medium">View company profile</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 