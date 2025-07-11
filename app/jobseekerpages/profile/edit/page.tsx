import React from 'react';
import Link from 'next/link';

export default function EditProfilePage() {
  return (
    <div className="w-full min-h-screen bg-[#F8F9FB]">
      <div className="flex max-w-[1040px] mx-auto">
        {/* Sidebar */}
        <aside className="w-[240px] flex flex-col pt-12 pl-4 pr-4 bg-[#F8F9FB] flex-shrink-0 sticky top-0 self-start h-screen">
          <nav className="flex flex-col gap-2 mb-8">
            <a className="h-10 flex items-center pl-4 rounded-[10px] bg-[#D7F9FF] text-[#007B8E] font-medium text-[16px]" href="#general">General Information</a>
            <a className="h-10 flex items-center pl-4 rounded-[10px] text-[#565D6D] font-medium text-[16px]" href="#about">About</a>
            <a className="h-10 flex items-center pl-4 rounded-[10px] text-[#565D6D] font-medium text-[16px]" href="#experience">Working Experiences</a>
            <a className="h-10 flex items-center pl-4 rounded-[10px] text-[#565D6D] font-medium text-[16px]" href="#skills">Skills</a>
            <a className="h-10 flex items-center pl-4 rounded-[10px] text-[#565D6D] font-medium text-[16px]" href="#education">Education</a>
          </nav>
          {/* Tips card */}
          <div className="bg-[#E6FCF5] rounded-[12px] px-6 py-6 flex flex-col items-center text-center mt-4">
            <img src="/tips-illustration.png" alt="Tips" className="w-28 h-28 mb-4" />
            <div className="text-[#13CCB2] font-bold text-[18px] mb-2">Tips to build an outstanding profile</div>
            <div className="text-[#565D6D] text-[15px] mb-4">Ea do duis nostrud culpa incididunt ex eni</div>
            <button className="bg-[#13CCB2] text-white rounded-[6px] px-5 py-2 font-medium text-[15px]">Learn more</button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-start pr-8 pt-12 max-w-[768px] w-full">
          {/* Header */}
          <div className="flex items-center justify-between w-[768px] mb-8">
            <div className="flex items-center gap-4">
              <Link href="/jobseekerpages/profile">
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F3F4F6]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="#23272E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </Link>
              <h1 className="text-[28px] font-bold text-[#171A1F]">Edit profile</h1>
            </div>
            <div className="flex gap-3">
              <Link href="/jobseekerpages/profile"><button className="bg-white border border-[#41E5FF] text-[#41E5FF] rounded px-6 py-2 font-medium">Cancel</button></Link>
              <button className="bg-[#41E5FF] text-white rounded px-6 py-2 font-medium">Save</button>
            </div>
          </div>
          {/* General Information */}
          <section id="general" className="bg-white border border-[#F3F4F6] rounded-[6px] mb-8" style={{ width: 768 }}>
            <div className="flex items-center justify-between px-0 pt-12 pb-0">
              <div className="flex items-center gap-4 pl-6">
                <h2 className="uppercase font-bold text-[22px] text-[#23272E] tracking-wide">General Information</h2>
                <span className="bg-[#E6FCF5] text-[#13CCB2] rounded-full px-4 py-1 text-[12px] font-normal font-inter">100% completed</span>
              </div>
              <button className="w-8 h-8 flex items-center justify-center mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 15l6-6 6 6" stroke="#6F7781" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="px-6 pb-12 pt-4">
              {/* Avatar Row */}
              <div className="flex items-center gap-6 mb-10" style={{ marginTop: 50 }}>
                <div className="flex flex-col items-start gap-2">
                  <span className="font-bold text-[16px] text-[#23272E] mb-1">Avatar</span>
                  <div className="flex items-center gap-4">
                    <img src="/avatars/person1.png" alt="Avatar" className="w-[76px] h-[76px] rounded-full object-cover" />
                    <button className="bg-[#E6FCF5] text-[#13CCB2] rounded px-4 py-1 text-[15px] font-medium">Change</button>
                    <button className="text-[#A0A0A0] text-[15px] font-medium ml-2">Remove</button>
                  </div>
                </div>
              </div>
              {/* Fields Row */}
              <div className="flex gap-6 mb-10">
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#23272E] mb-2">Name</label>
                  <input className="w-full bg-[#F6F8FA] rounded-[6px] px-3 py-2 text-[15px] text-[#23272E] outline-none" defaultValue="Jay Rutherford" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#23272E] mb-2">Title</label>
                  <div className="relative">
                    <select className="w-full bg-[#F6F8FA] rounded-[6px] px-3 py-2 text-[15px] text-[#23272E] appearance-none outline-none pr-8">
                      <option>Professional title</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="#23272E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* Professional Skills */}
              <div className="mb-10">
                <label className="font-bold text-[15px] text-[#23272E] mb-2 block">Professional Skills</label>
                <div className="flex gap-3 flex-wrap items-center">
                  <span className="flex items-center bg-[#41E5FF] text-[#005C6B] rounded-full px-4 py-1 text-[12px] font-normal font-inter">UX Research <button className="ml-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="#005C6B" strokeWidth="1.4" strokeLinecap="round"/></svg></button></span>
                  <span className="flex items-center bg-[#41E5FF] text-[#005C6B] rounded-full px-4 py-1 text-[12px] font-normal font-inter">UI Design <button className="ml-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="#005C6B" strokeWidth="1.4" strokeLinecap="round"/></svg></button></span>
                  <span className="flex items-center bg-[#41E5FF] text-[#005C6B] rounded-full px-4 py-1 text-[12px] font-normal font-inter">Web Design <button className="ml-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="#005C6B" strokeWidth="1.4" strokeLinecap="round"/></svg></button></span>
                  <button className="flex items-center gap-1 text-[#41E5FF] bg-transparent rounded-full px-2 py-1 text-[15px] font-medium ml-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round"/></svg> Add</button>
                </div>
              </div>
              {/* Description */}
              <div className="mb-10">
                <label className="font-bold text-[15px] text-[#23272E] mb-2 block">Description</label>
                <textarea className="w-full bg-[#F6F8FA] rounded-[6px] px-3 py-2 text-[15px] text-[#23272E] outline-none min-h-[120px] resize-none" defaultValue="" />
              </div>
              {/* Info Message */}
              <div className="bg-[#E6FCF5] rounded-[6px] flex items-center px-4 py-3 w-full mb-6">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2"><circle cx="8" cy="8" r="8" fill="#13CCB2"/><path d="M8 4v4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/><circle cx="8" cy="10.5" r="1" fill="white"/></svg>
                <span className="text-[12px] text-[#13CCB2] font-normal font-inter">This is how talent figures out what you need and why you're great to work with</span>
              </div>
            </div>
          </section>
          {/* About */}
          <section id="about" className="bg-white border border-[#F3F4F6] rounded-[6px] mb-8" style={{ width: 768 }}>
            <div className="flex items-center justify-between px-0 pt-8 pb-0">
              <div className="flex items-center gap-4 pl-6">
                <h2 className="uppercase font-bold text-[22px] text-[#23272E] tracking-wide">About</h2>
                <span className="bg-[#E6FCF5] text-[#13CCB2] rounded-full px-4 py-1 text-[12px] font-normal font-inter">Open to work</span>
              </div>
              <button className="w-8 h-8 flex items-center justify-center mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#6F7781" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="px-6 pb-12 pt-4">
              <div className="mb-8 mt-2">
                <label className="font-bold text-[15px] text-[#23272E] mb-2 block">Description</label>
                <textarea className="w-full bg-[#F6F8FA] rounded-[10px] px-3 py-4 text-[15px] text-[#23272E] outline-none min-h-[120px] resize-none" defaultValue="" />
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center">
                  <span className="inline-flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center mr-2">
                      <span className="block w-4 h-4 rounded-[2px] bg-[#41E5FF] border border-[#41E5FF] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6.5L5.5 9L9 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </span>
                    <span className="text-[16px] text-[#23272E] font-normal font-inter">Open to work</span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Working Experience */}
          <section id="experience" className="bg-white border border-[#F3F4F6] rounded-[6px] mx-auto mb-8" style={{ width: 768 }}>
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="flex items-center gap-4">
                <h2 className="uppercase font-bold text-[22px] text-[#23272E]">WORKING EXPERIENCE</h2>
              </div>
            </div>
            <div className="flex items-center justify-end px-6 mt-4">
              <button className="w-6 h-6 flex items-center justify-center">
                {/* Trash SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 10v6M12 10v6M15 10v6M4 6h16M10 6V4a2 2 0 0 1 4 0v2" stroke="#6F7781" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="5" y="6" width="14" height="14" rx="2" stroke="#6F7781" strokeWidth="2"/></svg>
              </button>
            </div>
            <div className="px-6 pt-4 pb-0">
              <div className="flex gap-6 mb-6">
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">Company name</label>
                  <div className="relative">
                    <select className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] appearance-none outline-none pr-8">
                      <option>Klanie</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 6l2 2 2-2" stroke="#23272E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">Employment type</label>
                  <div className="relative">
                    <select className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] appearance-none outline-none pr-8">
                      <option>Fulltime</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 6l2 2 2-2" stroke="#23272E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mb-6">
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">Title</label>
                  <input className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none" defaultValue="Senior UX UI Designer" />
                </div>
                <div className="flex-1 flex items-center gap-3 mt-6">
                  <input type="checkbox" checked readOnly id="current-role" className="peer hidden" />
                  <label htmlFor="current-role" className="w-4 h-4 rounded-[2px] bg-[#1EE1FF] border border-[#1EE1FF] flex items-center justify-center cursor-pointer mr-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6.5L5.5 9L9 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </label>
                  <span className="text-[15px] text-[#171A1F] font-inter">I am currently working in this role</span>
                </div>
              </div>
              <div className="flex gap-6 mb-6">
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">Start date</label>
                  <div className="relative">
                    <input className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none pr-8" defaultValue="Jan 2021" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="3.5" width="11" height="10" rx="2" stroke="#23272E" strokeWidth="1.2"/><path d="M5.5 1.5v2" stroke="#23272E" strokeWidth="1.2" strokeLinecap="round"/><path d="M10.5 1.5v2" stroke="#23272E" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col opacity-50">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">End date</label>
                  <div className="relative">
                    <input className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none pr-8" defaultValue="Jan 2021" disabled />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="3.5" width="11" height="10" rx="2" stroke="#23272E" strokeWidth="1.2"/><path d="M5.5 1.5v2" stroke="#23272E" strokeWidth="1.2" strokeLinecap="round"/><path d="M10.5 1.5v2" stroke="#23272E" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="font-bold text-[15px] text-[#31343D] mb-2 block">Description</label>
                <div className="relative">
                  <textarea className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none min-h-[110px] resize-y" defaultValue="" />
                  <span className="absolute bottom-2 right-2">
                    {/* Resize handle icon */}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10h8M4 8h6M6 6h4" stroke="#BCC1CA" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </span>
                </div>
              </div>
              <div className="border-t border-[#F3F4F6] pt-6 mt-6 flex items-center justify-end" style={{marginBottom: '15px'}}>
                <button className="flex items-center bg-[#41E5FF] text-white font-normal text-[16px] font-inter rounded-[6px] px-6 py-2 gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Add job
                </button>
              </div>
            </div>
          </section>
          {/* Skills */}
          <section id="skills" className="bg-white rounded-xl border border-[#F3F4F6] mb-8 mx-auto" style={{ width: 768 }}>
            <div className="flex items-center mb-4">
              <h2 className="text-[18px] font-bold text-[#171A1F] mr-4">SKILLS</h2>
              <span className="bg-[#ECFCFF] text-[#00CFFF] rounded px-3 py-1 text-[13px] font-medium ml-2">3 skills</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-[#ECFCFF] text-[#00CFFF] rounded px-3 py-1 text-[14px]">UX Research</span>
              <span className="bg-[#ECFCFF] text-[#00CFFF] rounded px-3 py-1 text-[14px]">UI Design</span>
              <span className="bg-[#ECFCFF] text-[#00CFFF] rounded px-3 py-1 text-[14px]">Web Design</span>
              <button className="bg-[#41E5FF] text-white rounded px-3 py-1 text-[14px]">+ Add</button>
            </div>
          </section>
          {/* Education */}
          <section id="education" className="bg-white border border-[#F3F4F6] rounded-[6px] mx-auto mb-8" style={{ width: 768 }}>
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="flex items-center gap-4">
                <h2 className="uppercase font-bold text-[22px] text-[#23272E]">EDUCATION</h2>
              </div>
            </div>
            <div className="flex items-center justify-end px-6 mt-4">
              <button className="w-6 h-6 flex items-center justify-center">
                {/* Trash SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 10v6M12 10v6M15 10v6M4 6h16M10 6V4a2 2 0 0 1 4 0v2" stroke="#6F7781" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="5" y="6" width="14" height="14" rx="2" stroke="#6F7781" strokeWidth="2"/></svg>
              </button>
            </div>
            <div className="px-6 pt-4 pb-0">
              <div className="flex gap-6 mb-6">
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">School</label>
                  <input className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none" defaultValue="Arena Multimedia, New York" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">Degree</label>
                  <input className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none" defaultValue="Advanced Diploma in Multimedia" />
                </div>
              </div>
              <div className="flex gap-6 mb-6">
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">Start year</label>
                  <div className="relative">
                    <input className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none pr-8" defaultValue="2014" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="3.5" width="11" height="10" rx="2" stroke="#23272E" strokeWidth="1.2"/><path d="M5.5 1.5v2" stroke="#23272E" strokeWidth="1.2" strokeLinecap="round"/><path d="M10.5 1.5v2" stroke="#23272E" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold text-[15px] text-[#31343D] mb-2">End year</label>
                  <div className="relative">
                    <input className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none pr-8" defaultValue="2017" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="3.5" width="11" height="10" rx="2" stroke="#23272E" strokeWidth="1.2"/><path d="M5.5 1.5v2" stroke="#23272E" strokeWidth="1.2" strokeLinecap="round"/><path d="M10.5 1.5v2" stroke="#23272E" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="font-bold text-[15px] text-[#31343D] mb-2 block">Description</label>
                <div className="relative">
                  <textarea className="w-full bg-[#F3F4F6] rounded-[6px] px-3 py-2 text-[15px] text-[#171A1F] outline-none min-h-[110px] resize-y" defaultValue="" />
                  <span className="absolute bottom-2 right-2">
                    {/* Resize handle icon */}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10h8M4 8h6M6 6h4" stroke="#BCC1CA" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </span>
                </div>
              </div>
              <div className="border-t border-[#F3F4F6] pt-6 mt-6 flex items-center justify-end" style={{marginBottom: '15px'}}>
                <button className="flex items-center bg-[#41E5FF] text-white font-normal text-[16px] font-inter rounded-[6px] px-6 py-2 gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Add education
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 