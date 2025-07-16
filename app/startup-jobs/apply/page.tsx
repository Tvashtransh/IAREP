"use client";

import React, { useState } from "react";

const INTEREST_OPTIONS = [
  "AI/ML", "Fintech", "EdTech", "HealthTech", "SaaS Tools", "ClimateTech", "AgriTech", "Social Impact", "E-commerce", "Gaming", "Cybersecurity", "Mobility/EV", "SpaceTech", "FashionTech", "FoodTech", "Creator Tools", "AdTech", "B2B/Enterprise", "HRTech", "TravelTech", "Web3/Blockchain", "Media & News", "Sports/Fitness", "UX/UI Design", "Networking Platforms",
];

export default function StartupJobsApplyPage() {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    mobile: '',
    educationalDegree: '',
    college: '',
    city: '',
    linkedin: '',
  });
  const [userErrors, setUserErrors] = useState<any>({});
  const [jobSeekerRoles, setJobSeekerRoles] = useState('');
  const [jobSeekerHopes, setJobSeekerHopes] = useState('');
  const [jobSeekerConnect, setJobSeekerConnect] = useState<string[]>([]);
  const [jobSeekerCollab, setJobSeekerCollab] = useState<string[]>([]);
  const [hasStartupExp, setHasStartupExp] = useState('');
  const [startupExpDetails, setStartupExpDetails] = useState({
    name: '',
    role: '',
    duration: '',
    value: '',
    lacks: '',
  });
  const [openToStartup, setOpenToStartup] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeLink, setResumeLink] = useState('');
  const [resumeUploadMethod, setResumeUploadMethod] = useState<'file' | 'link'>('file');
  const [isDragOver, setIsDragOver] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const jobSeekerConnectOptions = [
    'Tech-savvy peers to build exciting projects',
    'Founders or startup mentors for guidance and insight',
    'Designers, marketers, or developers for collaboration',
    'Recruiters from emerging startups',
    'Communities that support innovation and teamwork',
  ];
  
  const jobSeekerCollabOptions = [
    'Hackathons and short-term sprints',
    'Project-based teams working on real-world problems',
    'Long-term roles in startup teams',
    'Networking meetups and in-person events',
    'Online communities or discussion forums',
  ];

  const validateUserDetails = () => {
    const errors: any = {};
    if (!userDetails.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!userDetails.email.trim()) errors.email = 'Email is required';
    if (!userDetails.mobile.trim()) errors.mobile = 'Mobile Number is required';
    if (!userDetails.educationalDegree.trim()) errors.educationalDegree = 'Educational Degree is required';
    if (!userDetails.college.trim()) errors.college = 'College is required';
    if (!userDetails.city.trim()) errors.city = 'City is required';
    return errors;
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (file: File) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF, JPG, or PNG file.');
      return;
    }
    if (file.size > maxSize) {
      alert('File size should be less than 10MB.');
      return;
    }
    setResumeFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  function InterestsSelector() {
    return (
      <div className="flex flex-wrap gap-3 mb-2 mt-2 max-w-2xl">
        {INTEREST_OPTIONS.map((option) => {
          const isSelected = selectedInterests.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => {
                if (isSelected) {
                  setSelectedInterests(selectedInterests.filter((i) => i !== option));
                } else if (selectedInterests.length < 5) {
                  setSelectedInterests([...selectedInterests, option]);
                }
              }}
              className={`min-w-[64px] px-6 py-2 rounded-[10px] border text-[16px] font-normal transition-all flex items-center justify-center ${isSelected ? 'bg-white border-[#22CCB2] text-[#22CCB2]' : 'bg-white border-[#23262F] text-[#23262F]'} hover:border-[#22CCB2]`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }

  function StepBar({ step, totalSteps }: { step: number; totalSteps: number }) {
    return (
      <div className="flex items-center mb-8 mt-[50px] w-full max-w-lg mx-auto">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s, i) => (
          <div
            key={s}
            className={`flex-1 h-2 rounded-md mr-1.5 last:mr-0 ${(step >= s) ? 'bg-[#41E5FF] shadow-[0_4px_9px_0_rgba(65,229,255,0.11),0_0px_2px_0_rgba(65,229,255,0.12)]' : 'bg-[#DEE3EB]'}`}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F7F9FB] font-inter font-normal text-[14px]">
      {/* Step 1: User Details */}
      {step === 1 && (
        <div className="flex w-full min-h-screen">
          <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={1} totalSteps={6} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Your basic information</div>
              <form className="space-y-6 w-full">
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Full Name</label>
                  <input
                    name="fullName"
                    value={userDetails.fullName}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                  {userErrors.fullName && <p className="text-red-500 text-xs mt-1">{userErrors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={userDetails.email}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                  {userErrors.email && <p className="text-red-500 text-xs mt-1">{userErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Mobile Number</label>
                  <input
                    name="mobile"
                    value={userDetails.mobile}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                  {userErrors.mobile && <p className="text-red-500 text-xs mt-1">{userErrors.mobile}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Educational Degree</label>
                  <input
                    name="educationalDegree"
                    value={userDetails.educationalDegree}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                  {userErrors.educationalDegree && <p className="text-red-500 text-xs mt-1">{userErrors.educationalDegree}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>College/University</label>
                  <input
                    name="college"
                    value={userDetails.college}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                  {userErrors.college && <p className="text-red-500 text-xs mt-1">{userErrors.college}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>City</label>
                  <input
                    name="city"
                    value={userDetails.city}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                  {userErrors.city && <p className="text-red-500 text-xs mt-1">{userErrors.city}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>LinkedIn Profile URL <span className="text-gray-400">(Optional)</span></label>
                  <input
                    name="linkedin"
                    value={userDetails.linkedin}
                    onChange={handleUserChange}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                </div>
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF] opacity-50 cursor-not-allowed"
                    disabled
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => {
                      const errors = validateUserDetails();
                      setUserErrors(errors);
                      if (Object.keys(errors).length === 0) setStep(2);
                    }}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-[#F7F9FB] text-center px-8">
            <img src="/images/filling.png" alt="Step illustration" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Your Input Drives Our Platform</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Welcome to Idea Ascend—the platform where ideas rise into reality. Let's begin with your basic information so we can better understand and serve your entrepreneurial vision.
            </div>
          </div>
        </div>
      )}
      {/* Step 2: Job Seeker Interests */}
      {step === 2 && (
        <div className="flex w-full min-h-screen">
          <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={2} totalSteps={6} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Your Career Interests</div>
              <form className="space-y-6 w-full">
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 400, color: '#23262F' }}>
                    What type of roles are you most interested in?
                  </div>
                  <input
                    type="text"
                    value={jobSeekerRoles}
                    onChange={e => setJobSeekerRoles(e.target.value)}
                    placeholder="E.g., Software Developer, Product Manager, Marketing, etc."
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                </div>
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 400, color: '#23262F' }}>
                    What are you hoping to get out of your next role?
                  </div>
                  <input
                    type="text"
                    value={jobSeekerHopes}
                    onChange={e => setJobSeekerHopes(e.target.value)}
                    placeholder="E.g., learning, mentorship, impact, growth, etc."
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    suppressHydrationWarning={true}
                  />
                </div>
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 400, color: '#23262F' }}>
                    Select up to 5 topics that interest you:
                  </div>
                  <InterestsSelector />
                </div>
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(1)}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(3)}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-[#F7F9FB] text-center px-8">
            <img src="/images/goal%20target.png" alt="Career Interests" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Shape Your Path</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Tell us what excites you most about working in a startup. Your interests help us match you with the right opportunities.
            </div>
          </div>
        </div>
      )}
      {/* Step 3: Experience & Preferences */}
      {step === 3 && (
        <div className="flex w-full min-h-screen">
          <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={3} totalSteps={6} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Your Experience & Preferences</div>
              <form className="space-y-6 w-full">
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 400, color: '#23262F' }}>
                    Have you had the chance to work in a startup environment before?
                  </div>
                  <div className="flex gap-6 mb-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="hasStartupExp" value="yes" checked={hasStartupExp === 'yes'} onChange={() => setHasStartupExp('yes')} className="accent-[#41E5FF]" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="hasStartupExp" value="no" checked={hasStartupExp === 'no'} onChange={() => setHasStartupExp('no')} className="accent-[#41E5FF]" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>No</span>
                      </label>
                  </div>
                </div>
                {hasStartupExp === 'Yes' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• Name of the Startup:</label>
                      <input
                        name="name"
                        value={startupExpDetails.name}
                        onChange={e => setStartupExpDetails(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                        suppressHydrationWarning={true}
                      />
                    </div>
                    <div>
                      <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• Your Role:</label>
                      <input
                        name="role"
                        value={startupExpDetails.role}
                        onChange={e => setStartupExpDetails(prev => ({ ...prev, role: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                        suppressHydrationWarning={true}
                      />
                    </div>
                    <div>
                      <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• How long did you work there?</label>
                      <input
                        name="duration"
                        value={startupExpDetails.duration}
                        onChange={e => setStartupExpDetails(prev => ({ ...prev, duration: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                        suppressHydrationWarning={true}
                      />
                    </div>
                    <div>
                      <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• What value do you believe you added to the startup? <span className="text-gray-400">(1–2 lines)</span></label>
                      <input
                        name="value"
                        value={startupExpDetails.value}
                        onChange={e => setStartupExpDetails(prev => ({ ...prev, value: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                        suppressHydrationWarning={true}
                      />
                    </div>
                    <div>
                      <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• Based on your experience, what do you think most startups lack or struggle with? <span className="text-gray-400">(Optional, 1–2 lines)</span></label>
                      <input
                        name="lacks"
                        value={startupExpDetails.lacks}
                        onChange={e => setStartupExpDetails(prev => ({ ...prev, lacks: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                        suppressHydrationWarning={true}
                      />
                    </div>
                  </div>
                )}
                <div>
                  <div className="font-medium mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 400, color: '#23262F' }}>
                    If given a chance to work in a startup and gain real-world experience, would you be open to it?
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="openToStartup" value="yes" checked={openToStartup === 'yes'} onChange={() => setOpenToStartup('yes')} className="accent-[#41E5FF]" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>Yes, definitely</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="openToStartup" value="maybe" checked={openToStartup === 'maybe'} onChange={() => setOpenToStartup('maybe')} className="accent-[#41E5FF]" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>Maybe, I'd like to explore</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="openToStartup" value="no" checked={openToStartup === 'no'} onChange={() => setOpenToStartup('no')} className="accent-[#41E5FF]" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>Not right now</span>
                      </label>
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(2)}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(4)}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-[#F7F9FB] text-center px-8">
            <img src="/images/team%20work.png" alt="Experience & Preferences" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Showcase Your Experience</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Tell us about your previous experience and what you're looking for in your next role. This helps us match you with the right opportunities.
            </div>
          </div>
        </div>
      )}
      {/* Step 4: Resume Upload */}
      {step === 4 && (
        <div className="flex w-full min-h-screen">
          <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={4} totalSteps={6} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Upload Your Resume</div>
              <form className="space-y-6 w-full">
                <div>
                  <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setResumeUploadMethod('file')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${resumeUploadMethod === 'file' ? 'bg-white text-[#41E5FF] shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={() => setResumeUploadMethod('link')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${resumeUploadMethod === 'link' ? 'bg-white text-[#41E5FF] shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Share Link
                    </button>
                  </div>
                  {resumeUploadMethod === 'file' ? (
                    <div>
                      <div
                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${isDragOver ? 'border-[#41E5FF] bg-blue-50' : 'border-gray-300 hover:border-[#41E5FF]'}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <input
                          type="file"
                          id="resumeFile"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileInputChange}
                          className="hidden"
                        />
                        {resumeFile ? (
                          <div className="space-y-2">
                            <div className="flex items-center justify-center text-green-600">
                              <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              File uploaded successfully!
                            </div>
                            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {resumeFile.name} ({(resumeFile.size / (1024 * 1024)).toFixed(2)} MB)
                            </p>
                            <button
                              type="button"
                              onClick={() => setResumeFile(null)}
                              className="text-red-500 hover:text-red-700 text-sm"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Remove file
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <div>
                              <label htmlFor="resumeFile" className="cursor-pointer">
                                <span className="text-[#41E5FF] hover:text-[#22CCB2] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  Choose a file
                                </span>
                                <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}> or drag and drop</span>
                              </label>
                            </div>
                            <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                              PDF, JPG, PNG up to 10MB
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="url"
                        value={resumeLink}
                        onChange={e => setResumeLink(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                        placeholder="https://yourwebsite.com or https://drive.google.com/..."
                        suppressHydrationWarning={true}
                      />
                      <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Share a link to your resume. Make sure the link is accessible to viewers.
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(3)}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(5)}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-[#F7F9FB] text-center px-8">
            <img src="/images/Blogs/blog%20job.png" alt="Upload Resume" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Showcase Your Skills</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Upload your resume or share a link to help us understand your background and match you with the best opportunities.
            </div>
          </div>
        </div>
      )}
      {/* Step 5: Personalization */}
      {step === 5 && (
        <div className="flex w-full min-h-screen">
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-between">
            <div>
              <StepBar step={5} totalSteps={6} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Help us to personalize your experience better!</div>
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 400, color: '#23262F' }}>Who would you like to connect with in the startup ecosystem?</div>
              <div className="flex flex-col gap-2 mb-6">
                {jobSeekerConnectOptions.map(option => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={jobSeekerConnect.includes(option)}
                      onChange={() => {
                        if (jobSeekerConnect.includes(option)) {
                          setJobSeekerConnect(jobSeekerConnect.filter(item => item !== option));
                        } else {
                          setJobSeekerConnect([...jobSeekerConnect, option]);
                        }
                      }}
                      className="accent-[#41E5FF]"
                    />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>{option}</span>
                  </label>
                ))}
              </div>
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 400, color: '#23262F' }}>What type of collaboration opportunities interest you?</div>
              <div className="flex flex-col gap-2 mb-6">
                {jobSeekerCollabOptions.map(option => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={jobSeekerCollab.includes(option)}
                      onChange={() => {
                        if (jobSeekerCollab.includes(option)) {
                          setJobSeekerCollab(jobSeekerCollab.filter(item => item !== option));
                        } else {
                          setJobSeekerCollab([...jobSeekerCollab, option]);
                        }
                      }}
                      className="accent-[#41E5FF]"
                    />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-6 mt-8 mb-2 w-full">
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 10H7m0 0l2-2m-2 2l2 2" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(6)}
                className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Next
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-white text-center">
            <img src="/images/customization%20calci.png" alt="Personalize Experience" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Tailored Just for You</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Your interests help us curate personalized content, job recommendations, and networking opportunities that align with your career goals and passions.
            </div>
          </div>
        </div>
      )}
      {/* Step 6: Thank You & Community */}
      {step === 6 && (
        <div className="flex w-full min-h-screen">
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full text-center">
              <div className="mb-6">
                <svg width="80" height="80" fill="none" viewBox="0 0 80 80" className="mx-auto mb-4">
                  <circle cx="40" cy="40" r="40" fill="#22CCB2"/>
                  <path d="M25 40l10 10 20-20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-archivo font-semibold text-[32px] md:text-[40px] mb-4 text-[#23262F]">Thank You for Submitting!</h2>
              <p className="font-inter text-[18px] text-[#23262F] mb-6 max-w-lg">Your information has been successfully submitted. Now, join the IdeaAscend Job Seeker Community!</p>
              <p className="font-inter text-[16px] text-[#6B7280] mb-8 max-w-lg">Connect with like-minded job seekers, share experiences, and stay updated with the latest startup opportunities. Our WhatsApp community is the perfect place to network, learn, and grow together.</p>
              <button
                onClick={() => {
                  window.open('https://chat.whatsapp.com/EEihbPQHV6S2edQzaJYWlu', '_blank');
                  window.location.href = '/startup-jobs';
                }}
                className="px-10 py-4 rounded-[10px] bg-[#22CCB2] text-white font-semibold text-lg shadow-lg transition-all hover:bg-[#1CA88F] flex items-center gap-3 justify-center mx-auto"
              >
                Join IdeaAscend Job Seeker Community
              </button>
            </div>
          </div>
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-white text-center">
            <img src="/images/Blogs/dream%20job.png" alt="Thank You" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Your Journey Begins Here!</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Join our vibrant community of job seekers and startup enthusiasts. Together, we'll help you find the perfect role in an exciting startup.
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 