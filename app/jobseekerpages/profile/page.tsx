import React from 'react';
import Tag from '../components/Tag';
import Button from '../components/Button';
import Link from 'next/link';

const user = {
  name: 'Sanket Neekhra',
  location: 'Indergarh',
  title: 'UI/UX Designer at IdeaAscend',
  avatar: '/avatars/person1.png',
  tags: ['UX Design', 'UI Design', 'Web Design'],
  profileLink: 'http://www.profilelink.com',
  connections: 50,
  connectionsAvatars: [
    '/avatars/person2.png',
    '/avatars/person3.png',
    '/avatars/person4.png',
    '/avatars/person5.png',
  ],
  description: 'Incididunt dolore ut aliquip culpa mollit dolore sint esse non c',
  about: 'About Sanket Neekhra... (mock data)',
  analytics: [
    { label: 'Profile views', value: 200 },
    { label: 'Impressions', value: 100 },
    { label: 'Searches', value: 70 },
  ],
  experience: [
    { role: 'Senior UX UI Designer', company: 'IdeaAscend', type: 'Fulltime', period: 'Jan 2021 - Present', duration: '1 yr 7 mos' },
  ],
  skills: [
    { name: 'Design Software', years: 9 },
    { name: 'Research', years: 13 },
    { name: 'User Experience', years: 13 },
    { name: 'User Interface Design', years: 15 },
  ],
  education: [
    { school: 'Arena Multimedia, New York', degree: 'Advanced Diploma in Multimedia', period: '2014 - 2017' },
  ],
};

export default function MyProfilePage() {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto py-12 px-4">
        {/* Sidebar */}
      <div className="flex flex-col w-[377px]">
        <aside className="bg-white rounded-2xl border border-[#F3F4F6] h-[666px] flex flex-col items-center p-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[122px] bg-[#ECFCFF] rounded-t-2xl z-0" />
          <div className="relative z-10 mt-[32px] mb-2 flex flex-col items-center">
            <div className="w-[140px] h-[140px] rounded-full bg-[#C2F7FF] flex items-center justify-center border-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-[140px] h-[140px] rounded-full object-cover"
              />
            </div>
          </div>
          <div className="mt-2 text-[24px] font-bold text-[#41E5FF] text-center">{user.name}</div>
          <div className="text-[16px] text-[#171A1F] text-center">{user.title}</div>
          <div className="mt-2 text-[15px] text-[#9095A0] text-center px-8">
            {user.description}
          </div>
          <div className="flex gap-2 mt-3 mb-2 flex-wrap justify-center">
            {user.tags.map(tag => (
              <span key={tag} className="bg-[#F3F4F6] text-[#31343D] rounded-[10px] px-4 py-1 text-sm font-normal">{tag}</span>
            ))}
          </div>
          <div className="w-full px-8 mt-4">
            <div className="text-[#424856] text-[15px] mb-1">Profile link</div>
            <div className="flex items-center bg-[#F3F4F6] rounded-[6px] px-3 py-2">
              <span className="text-[#171A1F] flex-1 truncate">{user.profileLink}</span>
              <svg className="w-5 h-5 text-[#171A1F] cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" stroke="#171A1F" strokeWidth="1.5" />
                <rect x="3" y="3" width="13" height="13" rx="2" stroke="#A0A0A0" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="w-[317px] h-px bg-[#F3F4F6] my-8" />
          <div className="flex items-center gap-2 px-8 mb-2">
            <div className="flex -space-x-2">
              {user.connectionsAvatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Connection"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  style={{ zIndex: 10 - idx }}
                />
              ))}
            </div>
            <span className="text-[#9095A0] text-[15px] ml-2">+{user.connections} Connections</span>
          </div>
          <div className="mt-[30px] px-8">
            <Link href="/jobseekerpages/profile/edit">
              <button className="w-[317px] h-[44px] bg-[#41E5FF] text-[#005C6B] rounded-[6px] text-[15px] font-normal font-inter flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.335 3.9L16.1 5.665L5.435 16.33L3.67 14.565L14.335 3.9Z" stroke="#005C6B" strokeWidth="1.704"/>
                  <path d="M11.435 5.015L14.985 8.565" stroke="#005C6B" strokeWidth="1.704"/>
                </svg>
                Edit profile
              </button>
            </Link>
          </div>
          {/* No Message/Connect buttons for main user */}
        </aside>
        {/* Light Green Card Below Sidebar */}
        <aside className="bg-[#EFFEFA] rounded-[16px] border border-[#BDC1CA] w-[377px] mt-8 flex flex-col items-center p-0 overflow-hidden">
          <div className="w-[307px] h-[308px] mt-8 mb-4 flex items-center justify-center">
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="180" height="180" rx="24" fill="#D1FAE5" />
              <text x="50%" y="50%" textAnchor="middle" fill="#13CCB2" fontSize="18" dy=".3em">Illustration</text>
            </svg>
          </div>
          <div className="text-[22px] font-semibold text-[#13CCB2] text-center mb-2">Looking for new job?</div>
          <div className="text-[15px] text-[#31343D] text-center mb-6 px-8">Reprehenderit nulla proident ullamco velit excepteur id ipsum fugiat magna</div>
          <Link href="/jobseekerpages/alljobs">
            <button className="w-[256px] h-[36px] mb-8 bg-[#13CCB2] rounded-[6px] text-white font-normal font-inter flex items-center justify-center text-[16px]">Start browsing</button>
          </Link>
        </aside>
      </div>
      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8">
        {/* Analytics This Month */}
        <section>
          <div className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-8 w-full mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[20px] text-[#171A1F]">Analytics this month</h3>
              <div className="flex items-center gap-2">
                {/* Lock icon (privacy) */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5.833 8.333V6.667a4.167 4.167 0 118.334 0v1.666" stroke="#9095A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="3.333" y="8.333" width="13.334" height="8.334" rx="2" stroke="#9095A0" strokeWidth="1.5"/><circle cx="10" cy="13.333" r="1.25" stroke="#9095A0" strokeWidth="1.5"/></svg>
                <span className="text-[#9095A0] text-[15px]">Private to you</span>
              </div>
            </div>
            <div className="flex gap-6 mt-6 flex-wrap">
              {/* Profile views bar chart card */}
              <div className="flex-1 min-w-[220px] max-w-[260px] bg-white border border-[#F3F4F6] rounded-[16px] p-6 flex flex-col items-start justify-between">
                <span className="font-semibold text-[#171A1F] text-[16px] mb-2">Profile views</span>
                {/* Bar chart */}
                <div className="w-full flex flex-col items-center">
                  <div className="flex gap-2 items-end h-24 w-full justify-between">
                    <div className="flex flex-col items-center">
                      <div className="bg-[#41E5FF] w-6 h-16 rounded-t"></div>
                      <span className="text-xs text-[#9095A0] mt-2">w1</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#41E5FF] w-6 h-12 rounded-t"></div>
                      <span className="text-xs text-[#9095A0] mt-2">w2</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#41E5FF] w-6 h-5 rounded-t"></div>
                      <span className="text-xs text-[#9095A0] mt-2">w3</span>
                    </div>
          <div className="flex flex-col items-center">
                      <div className="bg-[#41E5FF] w-6 h-16 rounded-t"></div>
                      <span className="text-xs text-[#9095A0] mt-2">w4</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* 200 viewers card */}
              <div className="flex-1 min-w-[180px] max-w-[220px] bg-white border border-[#F3F4F6] rounded-[16px] p-6 flex flex-col items-start justify-between">
                <div className="flex items-center gap-2 mb-2">
                  {/* Users icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#41E5FF" strokeWidth="1.5"/><path d="M23 21v-2a4 4 0 00-3-3.87" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 010 7.75" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-[20px] font-bold text-[#171A1F]">200 viewers</span>
                <span className="text-[#9095A0] text-[15px] mt-2">Amet eiusmod</span>
              </div>
              {/* 100 Impressions card */}
              <div className="flex-1 min-w-[180px] max-w-[220px] bg-white border border-[#F3F4F6] rounded-[16px] p-6 flex flex-col items-start justify-between">
                <div className="flex items-center gap-2 mb-2">
                  {/* Star icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" stroke="#E95E8C" strokeWidth="1.5" fill="none"/><path d="M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.03 4.38.38-3.32 2.88 1 4.28z" fill="#E95E8C"/></svg>
                </div>
                <span className="text-[20px] font-bold text-[#171A1F]">100 Impressions</span>
                <span className="text-[#9095A0] text-[15px] mt-2">Amet eiusmod</span>
              </div>
              {/* 70 Searches card */}
              <div className="flex-1 min-w-[180px] max-w-[220px] bg-white border border-[#F3F4F6] rounded-[16px] p-6 flex flex-col items-start justify-between">
                <div className="flex items-center gap-2 mb-2">
                  {/* Search icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#F4926B" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#F4926B" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <span className="text-[20px] font-bold text-[#171A1F]">70 Searches</span>
                <span className="text-[#9095A0] text-[15px] mt-2">Amet eiusmod</span>
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section>
          <div className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-8 w-full" style={{ minHeight: 163 }}>
            <div className="flex items-center mb-6">
              <h3 className="font-bold text-[20px] text-[#171A1F] mr-4">About</h3>
              <span className="flex items-center bg-[#F0FCFA] rounded-[14px] px-4 py-1 text-[15px] font-medium text-[#147A74] ml-2">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="mr-2"><path d="M2.5 6.5A1.5 1.5 0 0 1 4 5h8a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 12 12H4a1.5 1.5 0 0 1-1.5-1.5v-5Z" stroke="#147A74" strokeWidth="1.2"/><path d="M6 5V4a2 2 0 1 1 4 0v1" stroke="#147A74" strokeWidth="1.2"/></svg>
                Open to work
              </span>
            </div>
            <div className="text-[#31343D] text-[16px] leading-relaxed">
              {user.about}
            </div>
          </div>
        </section>
        {/* Working Experience */}
        <section>
          <div className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-8 w-full">
            <h3 className="font-bold text-[20px] text-[#171A1F] mb-6">Working Experience</h3>
            <div className="flex flex-col gap-6">
              {user.experience.map((exp, idx) => (
                <div key={idx} className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-6 flex gap-6 items-start">
                  <div className="w-[60px] h-[60px] bg-[#F3F4F6] rounded-[10px] flex items-center justify-center mr-2"></div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-[18px] text-[#171A1F] mr-4">{exp.role}</span>
                      <span className="ml-auto flex items-center bg-[#F0FCFA] rounded-[14px] px-4 py-1 text-[15px] font-medium text-[#147A74]">Working</span>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[#9095A0] text-[15px]">{exp.type}</span>
                      <span className="w-px h-4 bg-[#E0E2E7]"></span>
                      <span className="text-[#9095A0] text-[15px]">{exp.company}</span>
                      <span className="w-px h-4 bg-[#E0E2E7]"></span>
                      <span className="text-[#9095A0] text-[15px]">{exp.period} ({exp.duration})</span>
                    </div>
                    <div className="text-[#31343D] text-[15px]">Lorem ipsum dolor sit amet, consectetur elit. Diam, pellentesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetur elit.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Skills */}
        <section>
          <div className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-8 w-full">
            <h3 className="font-bold text-[20px] text-[#171A1F] mb-6">Skill</h3>
            <div className="flex flex-col gap-6">
              {/* Skill: Design Software */}
              <div className="flex items-center gap-4">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><g><g><g><g><g><g><path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#41E5FF" strokeWidth="1.368"/></g><g><path d="M5.31 8.31L7.25 10.25L11.25 6.25" stroke="#41E5FF" strokeWidth="1.368" strokeLinecap="round" strokeLinejoin="round"/></g></g></g></g></g></g></svg>
                <span className="text-[18px] font-normal text-[#171A1F] w-48">Design Software</span>
                <span className="flex items-center bg-[#FDE0EB] rounded-full px-4 py-1 text-[15px] font-normal text-[#E95E8C] ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 2.5A1.5 1.5 0 0 1 6 1h4a1.5 1.5 0 0 1 1.5 1.5v11.086a.5.5 0 0 1-.832.374L8 11.207l-2.668 2.753A.5.5 0 0 1 4.5 13.586V2.5Z" stroke="#E95E8C" strokeWidth="1.2"/></svg>
                  5 Years of Exp
                </span>
                <span className="flex items-center bg-[#E6FAF7] rounded-full px-4 py-1 text-[15px] font-normal text-[#147A74] ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#147A74" strokeWidth="1.2"/><path d="M5.5 7.5a2.5 2.5 0 1 1 5 0v1.5" stroke="#147A74" strokeWidth="1.2"/></svg>
                  1 Endorsement
                </span>
              </div>
              {/* Skill: Research */}
              <div className="flex items-center gap-4">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><g><g><g><g><g><g><path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#41E5FF" strokeWidth="1.368"/></g><g><path d="M5.31 8.31L7.25 10.25L11.25 6.25" stroke="#41E5FF" strokeWidth="1.368" strokeLinecap="round" strokeLinejoin="round"/></g></g></g></g></g></g></svg>
                <span className="text-[18px] font-normal text-[#171A1F] w-48">Research</span>
                <span className="flex items-center bg-[#FDE0EB] rounded-full px-4 py-1 text-[15px] font-normal text-[#E95E8C] ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 2.5A1.5 1.5 0 0 1 6 1h4a1.5 1.5 0 0 1 1.5 1.5v11.086a.5.5 0 0 1-.832.374L8 11.207l-2.668 2.753A.5.5 0 0 1 4.5 13.586V2.5Z" stroke="#E95E8C" strokeWidth="1.2"/></svg>
                  3 Years of Exp
                </span>
                <span className="flex items-center bg-[#E6FAF7] rounded-full px-4 py-1 text-[15px] font-normal text-[#147A74] ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#147A74" strokeWidth="1.2"/><path d="M5.5 7.5a2.5 2.5 0 1 1 5 0v1.5" stroke="#147A74" strokeWidth="1.2"/></svg>
                  20 Endorsements
                </span>
              </div>
              {/* Skill: User Experience */}
              <div className="flex items-center gap-4">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><g><g><g><g><g><g><path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#41E5FF" strokeWidth="1.368"/></g><g><path d="M5.31 8.31L7.25 10.25L11.25 6.25" stroke="#41E5FF" strokeWidth="1.368" strokeLinecap="round" strokeLinejoin="round"/></g></g></g></g></g></g></svg>
                <span className="text-[18px] font-normal text-[#171A1F] w-48">User Experience</span>
                <span className="flex items-center bg-[#FDE0EB] rounded-full px-4 py-1 text-[15px] font-normal text-[#E95E8C] ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 2.5A1.5 1.5 0 0 1 6 1h4a1.5 1.5 0 0 1 1.5 1.5v11.086a.5.5 0 0 1-.832.374L8 11.207l-2.668 2.753A.5.5 0 0 1 4.5 13.586V2.5Z" stroke="#E95E8C" strokeWidth="1.2"/></svg>
                  3 Years of Exp
                </span>
                <span className="flex items-center bg-[#E6FAF7] rounded-full px-4 py-1 text-[15px] font-normal text-[#147A74] ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#147A74" strokeWidth="1.2"/><path d="M5.5 7.5a2.5 2.5 0 1 1 5 0v1.5" stroke="#147A74" strokeWidth="1.2"/></svg>
                  1 Endorsement
                </span>
              </div>
              {/* Skill: User Interface Design */}
              <div className="flex items-center gap-4">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><g><g><g><g><g><g><path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#41E5FF" strokeWidth="1.368"/></g><g><path d="M5.31 8.31L7.25 10.25L11.25 6.25" stroke="#41E5FF" strokeWidth="1.368" strokeLinecap="round" strokeLinejoin="round"/></g></g></g></g></g></g></svg>
                <span className="text-[18px] font-normal text-[#171A1F] w-48">User Interface Design</span>
                <span className="flex items-center bg-[#FDE0EB] rounded-full px-4 py-1 text-[15px] font-normal text-[#E95E8C] ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 2.5A1.5 1.5 0 0 1 6 1h4a1.5 1.5 0 0 1 1.5 1.5v11.086a.5.5 0 0 1-.832.374L8 11.207l-2.668 2.753A.5.5 0 0 1 4.5 13.586V2.5Z" stroke="#E95E8C" strokeWidth="1.2"/></svg>
                  5 Years of Exp
                </span>
                <span className="flex items-center bg-[#E6FAF7] rounded-full px-4 py-1 text-[15px] font-normal text-[#147A74] ml-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#147A74" strokeWidth="1.2"/><path d="M5.5 7.5a2.5 2.5 0 1 1 5 0v1.5" stroke="#147A74" strokeWidth="1.2"/></svg>
                  3 Years of Exp
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Education */}
        <section>
          <div className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-8 w-full">
            <h3 className="font-bold text-[20px] text-[#171A1F] mb-6">Education</h3>
            <div className="flex flex-col gap-6">
              {user.education.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="w-[64px] h-[64px] bg-white border border-[#BDC1CA] rounded-[10px] flex items-center justify-center">
                    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="27.74" stroke="#FFC061" strokeWidth="2.92"/>
                      <circle cx="40.5" cy="26.18" r="8.09" fill="#FB007E"/>
                      <circle cx="40.5" cy="37.82" r="8.09" fill="#00ABE0"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[18px] font-normal text-[#171A1F]">{edu.school}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.3 1.72H13.7V8.56H2.3V1.72Z" stroke="#6F7781" strokeWidth="1.368"/>
                        <path d="M2.3 8H13.7V11.42H2.3V8Z" stroke="#6F7781" strokeWidth="1.368"/>
                        <path d="M2.3 10.86H13.7V14.28H2.3V10.86Z" stroke="#6F7781" strokeWidth="1.368"/>
                      </svg>
                      <span className="text-[15px] text-[#9095A0]">{edu.degree}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.73 1.715H14.27V3.425H1.73V1.715Z" stroke="#6F7781" strokeWidth="1.368"/>
                        <path d="M5.14 1.715H5.14V3.425H5.14V1.715Z" stroke="#6F7781" strokeWidth="1.368"/>
                        <path d="M10.86 1.715H10.86V3.425H10.86V1.715Z" stroke="#6F7781" strokeWidth="1.368"/>
                        <path d="M1.73 3.44H14.27V5.71H1.73V3.44Z" stroke="#6F7781" strokeWidth="1.368"/>
                        <path d="M1.73 5.71H14.27V13.7H1.73V5.71Z" stroke="#6F7781" strokeWidth="1.368"/>
                      </svg>
                      <span className="text-[15px] text-[#9095A0]">{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
        </section>
      </main>
    </div>
  );
} 