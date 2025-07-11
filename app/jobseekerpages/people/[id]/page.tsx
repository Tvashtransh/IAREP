import React from 'react';
import { notFound } from 'next/navigation';
import ClientSidebarButtons from '../../../components/ClientSidebarButtons';

const people = [
  {
    id: '1',
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
    description: 'Incididunt dolore ut aliquip culpa  mollit dolore sint esse non c',
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
  },
  {
    id: '2',
    name: 'Priyanshu Pethair',
    location: 'Bhopal',
    title: 'UI/UX Designer at IdeaAscend',
    avatar: '/avatars/person2.png',
    tags: ['UX Design', 'UI Design', 'Web Design'],
    profileLink: 'http://www.profilelink.com',
    connections: 40,
    connectionsAvatars: [
      '/avatars/person1.png',
      '/avatars/person3.png',
      '/avatars/person4.png',
      '/avatars/person5.png',
    ],
    description: 'Incididunt dolore ut aliquip culpa  mollit dolore sint esse non c',
    about: 'About Priyanshu Pethair... (mock data)',
    analytics: [
      { label: 'Profile views', value: 150 },
      { label: 'Impressions', value: 80 },
      { label: 'Searches', value: 60 },
    ],
    experience: [
      { role: 'UX UI Designer', company: 'IdeaAscend', type: 'Fulltime', period: 'Feb 2022 - Present', duration: '1 yr 3 mos' },
    ],
    skills: [
      { name: 'Design Software', years: 7 },
      { name: 'Research', years: 10 },
      { name: 'User Experience', years: 10 },
      { name: 'User Interface Design', years: 12 },
    ],
    education: [
      { school: 'Arena Multimedia, New York', degree: 'Advanced Diploma in Multimedia', period: '2014 - 2017' },
    ],
  },
];

export default function PersonProfilePage({ params }: { params: { id: string } }) {
  const person = people.find(p => p.id === params.id);
  if (!person) return notFound();

  return (
    <div className="flex gap-8 max-w-7xl mx-auto py-12 px-4">
      {/* Sidebar: Stack profile and green card vertically */}
      <div className="flex flex-col w-[377px]">
        <aside className="bg-white rounded-2xl border border-[#F3F4F6] h-[666px] flex flex-col items-center p-0 relative overflow-hidden">
          {/* Top blue rectangle */}
          <div className="absolute top-0 left-0 w-full h-[122px] bg-[#ECFCFF] rounded-t-2xl z-0" />
          {/* Avatar */}
          <div className="relative z-10 mt-[32px] mb-2 flex flex-col items-center">
            <div className="w-[140px] h-[140px] rounded-full bg-[#C2F7FF] flex items-center justify-center border-0">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-[140px] h-[140px] rounded-full object-cover"
              />
            </div>
          </div>
          {/* Name */}
          <div className="mt-2 text-[24px] font-bold text-[#41E5FF] text-center">{person.name}</div>
          {/* Title */}
          <div className="text-[16px] text-[#171A1F] text-center">{person.title}</div>
          {/* Description */}
          <div className="mt-2 text-[15px] text-[#9095A0] text-center px-8">
            {person.description}
          </div>
          {/* Tags */}
          <div className="flex gap-2 mt-3 mb-2 flex-wrap justify-center">
            {person.tags.map(tag => (
              <span key={tag} className="bg-[#F3F4F6] text-[#31343D] rounded-[10px] px-4 py-1 text-sm font-normal">{tag}</span>
            ))}
          </div>
          {/* Profile Link */}
          <div className="w-full px-8 mt-4">
            <div className="text-[#424856] text-[15px] mb-1">Profile link</div>
            <div className="flex items-center bg-[#F3F4F6] rounded-[6px] px-3 py-2">
              <span className="text-[#171A1F] flex-1 truncate">{person.profileLink}</span>
              {/* Copy icon */}
              <svg className="w-5 h-5 text-[#171A1F] cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" stroke="#171A1F" strokeWidth="1.5" />
                <rect x="3" y="3" width="13" height="13" rx="2" stroke="#A0A0A0" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          {/* Divider */}
          <div className="w-[317px] h-px bg-[#F3F4F6] my-8" />
          {/* Connections */}
          <div className="flex items-center gap-2 px-8 mb-2">
            <div className="flex -space-x-2">
              {person.connectionsAvatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Connection"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  style={{ zIndex: 10 - idx }}
                />
              ))}
            </div>
            <span className="text-[#9095A0] text-[15px] ml-2">+{person.connections} Connections</span>
          </div>
          <ClientSidebarButtons personId={person.id} />
        </aside>
        {/* Light Green Card Below Sidebar */}
        <aside className="bg-[#EFFEFA] rounded-[16px] border border-[#BDC1CA] w-[377px] mt-8 flex flex-col items-center p-0 overflow-hidden">
          {/* Illustration Placeholder */}
          <div className="w-[307px] h-[308px] mt-8 mb-4 flex items-center justify-center">
            {/* Replace with actual SVG or image if available */}
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="180" height="180" rx="24" fill="#D1FAE5" />
              <text x="50%" y="50%" textAnchor="middle" fill="#13CCB2" fontSize="18" dy=".3em">Illustration</text>
            </svg>
          </div>
          {/* Heading */}
          <div className="text-[22px] font-semibold text-[#13CCB2] text-center mb-2">Looking for new job?</div>
          {/* Description */}
          <div className="text-[15px] text-[#31343D] text-center mb-6 px-8">Reprehenderit nulla proident ullamco velit excepteur id ipsum fugiat magna</div>
          {/* Button */}
          <button className="w-[256px] h-[36px] mb-8 bg-[#13CCB2] rounded-[6px] text-white font-normal font-inter flex items-center justify-center text-[16px]">Start browsing</button>
        </aside>
      </div>
      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8">
        {/* About */}
        <section>
          <div className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-8 w-full" style={{ minHeight: 163 }}>
            <div className="flex items-center mb-6">
              <h3 className="font-bold text-[20px] text-[#171A1F] mr-4">About</h3>
              <span className="flex items-center bg-[#F0FCFA] rounded-[14px] px-4 py-1 text-[15px] font-medium text-[#147A74] ml-2">
                {/* Work icon */}
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="mr-2"><path d="M2.5 6.5A1.5 1.5 0 0 1 4 5h8a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 12 12H4a1.5 1.5 0 0 1-1.5-1.5v-5Z" stroke="#147A74" strokeWidth="1.2"/><path d="M6 5V4a2 2 0 1 1 4 0v1" stroke="#147A74" strokeWidth="1.2"/></svg>
                Open to work
              </span>
            </div>
            <div className="text-[#31343D] text-[16px] leading-relaxed">
              {person.about}
            </div>
          </div>
        </section>
        {/* Working Experience */}
        <section>
          <div className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-8 w-full">
            <h3 className="font-bold text-[20px] text-[#171A1F] mb-6">Working Experience</h3>
            <div className="flex flex-col gap-6">
              {person.experience.map((exp, idx) => (
                <div key={idx} className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-6 flex gap-6 items-start">
                  {/* Company logo/avatar placeholder */}
                  <div className="w-[60px] h-[60px] bg-[#F3F4F6] rounded-[10px] flex items-center justify-center mr-2">
                    {/* Optionally, insert <img src={exp.logo} ... /> here */}
                  </div>
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
                    <div className="text-[#31343D] text-[16px] mt-2">Lorem ipsum dolor sit amet, consectetr  elit. Diam, pellenesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetr  elit.</div>
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
              {person.skills.map((skill, idx) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <span className="font-normal font-inter text-[16px] text-[#171A1F]">{skill.name}</span>
                  {/* Years of Exp Tag */}
                  <span className="flex items-center bg-[#FDE7F4] rounded-[14px] px-4 py-1 text-[15px] font-medium text-[#E85E8B] ml-4">
                    {/* Bookmark icon */}
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="mr-2"><path d="M4.5 3.5A1.5 1.5 0 0 1 6 2h4a1.5 1.5 0 0 1 1.5 1.5v9.38a.5.5 0 0 1-.8.4l-3.2-2.4a.5.5 0 0 0-.6 0l-3.2 2.4a.5.5 0 0 1-.8-.4V3.5Z" stroke="#E85E8B" strokeWidth="1.2"/></svg>
                    {skill.years} Years of Exp
                  </span>
                  {/* Endorsements Tag */}
                  <span className="flex items-center bg-[#EFFCFB] rounded-[14px] px-4 py-1 text-[15px] font-medium text-[#146A5B] ml-2">
                    {/* Meeting icon */}
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="mr-2"><circle cx="8" cy="8" r="6" stroke="#146A5B" strokeWidth="1.2"/><path d="M5.5 7.5h5M8 5.5v5" stroke="#146A5B" strokeWidth="1.2"/></svg>
                    1 Endorsement
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Education */}
        <section>
          <div className="bg-white border border-[#F3F4F6] rounded-[10px] px-7 pt-6 pb-8 w-full">
            <h3 className="font-bold text-[20px] text-[#171A1F] mb-6">Education</h3>
            <div className="flex flex-col gap-6">
              {person.education.map((edu, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  {/* School logo/avatar placeholder */}
                  <div className="w-[64px] h-[64px] bg-[#F3F4F6] rounded-[10px] flex items-center justify-center">
                    {/* School logo would go here */}
                  </div>
                  <div className="flex-1">
                    <div className="text-[18px] font-bold text-[#171A1F] mb-2">{edu.school}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="text-[#6F7787]">
                        <path d="M2.5 6.5A1.5 1.5 0 0 1 4 5h8a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 12 12H4a1.5 1.5 0 0 1-1.5-1.5v-5Z" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M6 5V4a2 2 0 1 1 4 0v1" stroke="currentColor" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[15px] text-[#6F7787]">{edu.degree}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="text-[#6F7787]">
                        <path d="M12.5 2.5h-9A1 1 0 0 0 2.5 3.5v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M5.5 1.5v2M10.5 1.5v2M2.5 5.5h11" stroke="currentColor" strokeWidth="1.2"/>
                      </svg>
                      <span className="text-[15px] text-[#6F7787]">{edu.period}</span>
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

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ];
} 