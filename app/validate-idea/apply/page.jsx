"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CustomSelect from '../../components/CustomSelect.jsx';

const OPTIONS = [
  {
    label: 'Aspiring entrepreneur with idea',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#E6F9FF"/><path d="M16 9v14" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round"/><circle cx="16" cy="16" r="6" stroke="#41E5FF" strokeWidth="1.5"/></svg>
    ),
    value: 'aspiring',
  },
  {
    label: 'Early-Stage Founder',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#E6F9FF"/><path d="M16 10v12" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 16h8" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    value: 'founder',
  },
];

export default function ValidateIdeaFormPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState('');
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    mobile: '',
    educationalDegree: '',
    college: '',
    city: '',
    linkedin: '',
  });
  const [userErrors, setUserErrors] = useState({});
  const [aspiringIdea, setAspiringIdea] = useState({ name: '', industry: '' });
  const [aspiringErrors, setAspiringErrors] = useState({});
  const [aspiringInterests, setAspiringInterests] = useState([]);
  const [ideaDescription, setIdeaDescription] = useState('');
  const [ideaDescriptionError, setIdeaDescriptionError] = useState('');
  const [ideaDetailsStep3, setIdeaDetailsStep3] = useState({ stage: '', team: '', revenue: '', targetAudience: '', businessModel: '', achievements: '' });
  const [ideaDetailsStep3Errors, setIdeaDetailsStep3Errors] = useState({});
  const [founderDuration, setFounderDuration] = useState('');
  const [founderProductStatus, setFounderProductStatus] = useState('');
  const [founderStage, setFounderStage] = useState('');
  const [aspiringHasBusiness, setAspiringHasBusiness] = useState('');
  const [aspiringProductLink, setAspiringProductLink] = useState('');
  const [pitchDeckFile, setPitchDeckFile] = useState(null);
  const [pitchDeckLink, setPitchDeckLink] = useState('');
  const [pitchDeckUploadMethod, setPitchDeckUploadMethod] = useState('file');
  const [isDragOver, setIsDragOver] = useState(false);
  const ASPIRING_CHALLENGES = [
    'Difficulty validating startup ideas',
    'Struggling to find co-founders or build a team',
    'Lack of guidance from experienced mentors',
    'Unable to attract investors or pitch confidently',
    'No clear roadmap for building or scaling',
    'Limited access to startup networks or ecosystem',
    'Lack of technical support or development resources',
    'Inadequate knowledge of startup laws/registrations',
  ];
  const ASPIRING_APPROACHES = [
    'Self research, Youtube, blogs, free resources, free lancers',
    'Hiring freelancers or consultants',
    'Using existing platforms or communities',
    "I haven't found a solution yet",
  ];
  const ASPIRING_SATISFACTION = [
    'Very Dissatisfied',
    'Somewhat Dissatisfied',
    'Neutral',
    'Somewhat Satisfied',
    'Very Satisfied',
  ];
  const [aspiringChallenges, setAspiringChallenges] = useState([]);
  const [aspiringApproaches, setAspiringApproaches] = useState([]);
  const [aspiringPlatformName, setAspiringPlatformName] = useState('');
  const [aspiringSatisfaction, setAspiringSatisfaction] = useState('');
  const [aspiringStep5Errors, setAspiringStep5Errors] = useState({});
  const ASPIRING_TIMELINES = [
    'Immediately within 1',
    'In 2-3 months',
    'In 3-4 months',
  ];
  const ASPIRING_LOOKING_FOR = [
    'Hands-on mentorship from seasoned startup experts',
    'Co-founder matching and team building support',
    'Introductions and access to active investor networks',
    'Expert guidance in MVP and product development',
    'Support with legal setup and business structuring',
    'Strategic go-to-market planning and execution support',
    'Opportunities to join top startup bootcamps and accelerators',
    'Curated networking with like-minded startup founders',
  ];
  const ASCENDTHON_OPTIONS = ['Yes', 'Maybe later', 'No'];
  const [aspiringTimeline, setAspiringTimeline] = useState('');
  const [aspiringLookingFor, setAspiringLookingFor] = useState([]);
  const [aspiringAscendThon, setAspiringAscendThon] = useState('');
  const [aspiringStep6Errors, setAspiringStep6Errors] = useState({});

  // Role selection validation error state
  const [showRoleError, setShowRoleError] = useState(false);
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // --- Form Submission Handler ---
  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const formData = {
        role: selected,
        userDetails,
        aspiringIdea,
        aspiringInterests,
        ideaDescription,
        ideaDetailsStep3,
        aspiringChallenges,
        aspiringApproaches,
        aspiringPlatformName,
        aspiringSatisfaction,
        aspiringTimeline,
        aspiringLookingFor,
        aspiringAscendThon,
        founderDuration,
        founderProductStatus,
        founderStage,
        aspiringHasBusiness,
        aspiringProductLink,
        pitchDeckFile,
        pitchDeckLink
      };

      const response = await fetch('/api/submit-validate-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStep(7); // Go to success page
      } else {
        setSubmitError(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Validation and Handlers (frontend only, no API) ---
  const validateUserDetails = () => {
    const errors = {};
    if (!userDetails.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!userDetails.email.trim()) errors.email = 'Email is required';
    if (!userDetails.mobile.trim()) errors.mobile = 'Mobile Number is required';
    if (!userDetails.educationalDegree.trim()) errors.educationalDegree = 'Educational Degree is required';
    if (!userDetails.college.trim()) errors.college = 'College is required';
    if (!userDetails.city.trim()) errors.city = 'City is required';
    return errors;
  };
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  const INTEREST_OPTIONS = [
    'AI/ML', 'Fintech', 'EdTech', 'HealthTech', 'SaaS Tools', 'ClimateTech', 'AgriTech', 'Social Impact', 'E-commerce', 'Gaming', 'Cybersecurity', 'Mobility/EV', 'SpaceTech', 'FashionTech', 'FoodTech', 'Creator Tools', 'AdTech', 'B2B/Enterprise', 'HRTech', 'TravelTech', 'Web3/Blockchain', 'Media & News', 'Sports/Fitness', 'UX/UI Design', 'Networking Platforms',
  ];
  function InterestsSelectorAspiring() {
    return (
      <div className="flex flex-wrap gap-3 mb-2 mt-2 max-w-2xl">
        {INTEREST_OPTIONS.map((option) => {
          const isSelected = aspiringInterests.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => {
                if (isSelected) {
                  setAspiringInterests(aspiringInterests.filter((i) => i !== option));
                } else if (aspiringInterests.length < 5) {
                  setAspiringInterests([...aspiringInterests, option]);
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
  const validateIdeaDescription = () => {
    if (!ideaDescription.trim()) {
      return 'Please describe your idea in detail';
    }
    const wordCount = ideaDescription.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount > 300) {
      return 'Description must be 300 words or less';
    }
    return '';
  };
  const handleIdeaDescriptionChange = (e) => {
    setIdeaDescription(e.target.value);
    setIdeaDescriptionError('');
  };
  const validateIdeaDetailsStep3 = () => {
    const errors = {};
    if (!ideaDetailsStep3.stage.trim()) errors.stage = 'Current Stage is required';
    if (!ideaDetailsStep3.team.trim()) errors.team = 'Team Size is required';
    if (!ideaDetailsStep3.revenue.trim()) errors.revenue = 'Revenue Status is required';
    if (!ideaDetailsStep3.targetAudience.trim()) errors.targetAudience = 'Target Audience is required';
    if (!ideaDetailsStep3.businessModel.trim()) errors.businessModel = 'Business Model is required';
    return errors;
  };
  const handleIdeaDetailsStep3Change = (e) => {
    const { name, value } = e.target;
    setIdeaDetailsStep3((prev) => ({ ...prev, [name]: value }));
  };
  // Pitch deck upload handlers (frontend only)
  const handlePitchDeckFileUpload = (file) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'video/mp4', 'video/quicktime', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid file: PDF, JPG, PNG, MP4, MOV, PPT, or PPTX');
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      alert('File size must be less than 50MB');
      return;
    }
    setPitchDeckFile(file);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handlePitchDeckFileUpload(files[0]);
    }
  };
  function StepBar({ step, totalSteps }) {
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
  // --- UI Steps (frontend only) ---
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-[#F7F9FB] font-inter font-normal text-[14px]" suppressHydrationWarning={true}>
        {/* Step 1: Role Selection */}
        {step === 1 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Role Selection */}
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={1} totalSteps={8} />
                <div className="text-2xl font-bold text-[#23262F] mb-2 mt-[45px]">Which best describes you?</div>
                <div className="flex gap-6 mb-8 justify-center">
                  {OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setSelected(opt.value);
                        setShowRoleError(false);
                      }}
                      className={`flex flex-col items-center justify-center rounded-[10px] border transition-all text-center shadow-sm bg-white w-[180px] h-[228px] p-0
                        ${selected === opt.value ? 'border-[#41E5FF] shadow-lg' : 'border-[#DEE3EB]'}
                        hover:border-[#41E5FF] hover:bg-[#F7FCFF]`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <div className="mb-4">{opt.icon}</div>
                      <span className="text-[#23262F] text-[16px] font-normal leading-snug">{opt.label}</span>
                      {selected === opt.value && (
                        <div className="mt-4 flex items-center justify-center">
                          <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#41E5FF"/><path d="M8 15l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {/* Role Selection Error Message */}
                {!selected && step === 1 && showRoleError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Please select your role to continue.
                    </p>
                  </div>
                )}
                <div className="flex flex-row justify-between mt-4 w-full">
                  <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF] opacity-50 cursor-not-allowed" disabled style={{ fontFamily: 'Inter, sans-serif' }}>Previous</button>
                  <button 
                    type="button" 
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" 
                    style={{ fontFamily: 'Inter, sans-serif' }} 
                    onClick={() => {
                      if (!selected) {
                        setShowRoleError(true);
                        return;
                      }
                      setStep(2);
                    }}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Right: Welcome Image */}
            <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-white text-center px-8">
              <img src="/images/Blogs/validate.png" alt="Validate Your Idea" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Welcome to Idea Ascend</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Choose your role to get started on validating your startup idea. We'll personalize your experience based on your selection.
              </div>
            </div>
          </div>
        )}
        {/* Step 2: Basic Details */}
        {step === 2 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Form */}
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={2} totalSteps={8} />
                <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Basic Details</div>
                <form className="space-y-4 w-full">
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Full Name</label>
                    <input 
                      name="fullName" 
                      value={userDetails.fullName} 
                      onChange={handleUserChange} 
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" 
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} 
                    />
                    {userErrors.fullName && <p className="text-red-500 text-xs mt-1">{userErrors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Contact Email</label>
                    <input 
                      name="email" 
                      value={userDetails.email} 
                      onChange={handleUserChange} 
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" 
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} 
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
                    />
                    {userErrors.educationalDegree && <p className="text-red-500 text-xs mt-1">{userErrors.educationalDegree}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>College</label>
                    <input 
                      name="college" 
                      value={userDetails.college} 
                      onChange={handleUserChange} 
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" 
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} 
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
                    />
                    {userErrors.city && <p className="text-red-500 text-xs mt-1">{userErrors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>LinkedIn URL <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>(Optional)</span></label>
                    <input 
                      name="linkedin" 
                      value={userDetails.linkedin} 
                      onChange={handleUserChange} 
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" 
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} 
                    />
                  </div>
                  <div className="flex flex-row justify-between mt-4 w-full">
                    <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF] opacity-50 cursor-not-allowed" disabled style={{ fontFamily: 'Inter, sans-serif' }}>Previous</button>
                    <button 
                      type="button" 
                      className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" 
                      style={{ fontFamily: 'Inter, sans-serif' }} 
                      onClick={() => {
                        const errors = validateUserDetails();
                        setUserErrors(errors);
                        if (Object.keys(errors).length === 0) setStep(3);
                      }}
                    >
                      Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right: Illustration + Heading/Subheading */}
                          <div className="hidden md:flex w-full md:w-1/2 flex flex-col items-center justify-center bg-white text-center px-8">
                <img src="/images/Blogs/team.png" alt="User Profile Setup" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Your Input Drives Our Platform</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Welcome to Idea Ascend—the platform where ideas rise into reality. Let's begin with your basic information so we can better understand and serve your entrepreneurial vision.
              </div>
            </div>
          </div>
        )}
        {/* Step 3: Tell us about your idea */}
        {step === 3 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Aspiring Idea Info */}
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={3} totalSteps={8} />
                <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Tell us about your idea</div>
                <form className="space-y-6 w-full">
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Future Startup / Business Name</label>
                    <input
                      name="name"
                      value={aspiringIdea.name}
                      onChange={e => setAspiringIdea(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    />
                    {aspiringErrors.name && <p className="text-red-500 text-xs mt-1">{aspiringErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>What industry your idea belongs to</label>
                    <input
                      name="industry"
                      value={aspiringIdea.industry}
                      onChange={e => setAspiringIdea(prev => ({ ...prev, industry: e.target.value }))}
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    />
                    {aspiringErrors.industry && <p className="text-red-500 text-xs mt-1">{aspiringErrors.industry}</p>}
                  </div>
                  <div>
                    <div className="text-[#23262F] text-[16px] font-normal mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Select up to 5 topics that your idea relates to:
                    </div>
                    <div className="mb-2">
                      <InterestsSelectorAspiring />
                    </div>
                    {aspiringErrors.interests && <p className="text-red-500 text-xs mt-1">{aspiringErrors.interests}</p>}
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
                      className={`px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8] ${aspiringInterests.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      disabled={aspiringInterests.length === 0}
                      onClick={() => {
                        const errors = {};
                        if (!aspiringIdea.name.trim()) errors.name = 'Business Name is required';
                        if (!aspiringIdea.industry.trim()) errors.industry = 'Industry is required';
                        if (aspiringInterests.length === 0) errors.interests = 'Select at least 1 interest';
                        setAspiringErrors(errors);
                        if (Object.keys(errors).length === 0) setStep(4);
                      }}
                    >
                      Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right: Illustration */}
                          <div className="hidden md:flex w-full md:w-1/2 flex flex-col items-center justify-center bg-white text-center px-8">
                <img src="/images/Blogs/submit idea.png" alt="Tell us about your idea" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Share Your Vision</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Every great startup begins with a powerful idea. Tell us about your business concept and the industry you're passionate about transforming.
              </div>
            </div>
          </div>
        )}
        {/* Step 4: Tell us more about your idea */}
        {step === 4 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Form */}
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={4} totalSteps={8} />
                <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Tell us more about your idea</div>
                <form className="space-y-4 w-full">
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>
                      Describe your idea in detail (Max 300 words). This would help us understand your idea better
                    </label>
                    <textarea 
                      value={ideaDescription} 
                      onChange={handleIdeaDescriptionChange} 
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] resize-none" 
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      placeholder="Explain your startup idea, what problem it solves, how it works, what makes it unique, and your vision for the future..."
                    />
                    {ideaDescriptionError && <p className="text-red-500 text-xs mt-2">{ideaDescriptionError}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Current Stage</label>
                    <CustomSelect
                      name="stage"
                      value={ideaDetailsStep3.stage}
                      onChange={val => handleIdeaDetailsStep3Change({ target: { name: 'stage', value: val } })}
                      placeholder="Select Stage"
                      options={[
                        { value: 'idea', label: 'Idea Stage' },
                        { value: 'prototype', label: 'Prototype' },
                        { value: 'mvp', label: 'MVP' },
                        { value: 'early-revenue', label: 'Early Revenue' },
                        { value: 'scaling', label: 'Scaling' },
                      ]}
                    />
                    {ideaDetailsStep3Errors.stage && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep3Errors.stage}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Team Size</label>
                    <CustomSelect
                      name="team"
                      value={ideaDetailsStep3.team}
                      onChange={val => handleIdeaDetailsStep3Change({ target: { name: 'team', value: val } })}
                      placeholder="Select Team Size"
                      options={[
                        { value: 'solo', label: 'Solo (Just me)' },
                        { value: '2-3', label: '2-3 people' },
                        { value: '4-10', label: '4-10 people' },
                        { value: '10+', label: '10+ people' },
                      ]}
                    />
                    {ideaDetailsStep3Errors.team && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep3Errors.team}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Revenue Status</label>
                    <CustomSelect
                      name="revenue"
                      value={ideaDetailsStep3.revenue}
                      onChange={val => handleIdeaDetailsStep3Change({ target: { name: 'revenue', value: val } })}
                      placeholder="Select Revenue Status"
                      options={[
                        { value: 'pre-revenue', label: 'Pre-Revenue' },
                        { value: '0-1l', label: '₹0-1 Lakh' },
                        { value: '1-5l', label: '₹1-5 Lakhs' },
                        { value: '5-25l', label: '₹5-25 Lakhs' },
                        { value: '25l+', label: '₹25 Lakhs+' },
                      ]}
                    />
                    {ideaDetailsStep3Errors.revenue && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep3Errors.revenue}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Target Audience</label>
                    <input
                      name="targetAudience" 
                      value={ideaDetailsStep3.targetAudience} 
                      onChange={handleIdeaDetailsStep3Change} 
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      placeholder="e.g., College students, Small businesses"
                    />
                    {ideaDetailsStep3Errors.targetAudience && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep3Errors.targetAudience}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Business Model</label>
                    <CustomSelect
                      name="businessModel"
                      value={ideaDetailsStep3.businessModel}
                      onChange={val => handleIdeaDetailsStep3Change({ target: { name: 'businessModel', value: val } })}
                      placeholder="Select Business Model"
                      options={[
                        { value: 'subscription', label: 'Subscription' },
                        { value: 'freemium', label: 'Freemium' },
                        { value: 'marketplace', label: 'Marketplace' },
                        { value: 'saas', label: 'SaaS' },
                        { value: 'ecommerce', label: 'E-commerce' },
                        { value: 'advertising', label: 'Advertising' },
                        { value: 'transaction', label: 'Transaction-based' },
                        { value: 'other', label: 'Other' },
                      ]}
                    />
                    {ideaDetailsStep3Errors.businessModel && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep3Errors.businessModel}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Key Achievements <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>(Optional)</span></label>
                    <textarea 
                      name="achievements" 
                      value={ideaDetailsStep3.achievements} 
                      onChange={handleIdeaDetailsStep3Change} 
                      rows={3}
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" 
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} 
                      placeholder="Any notable achievements, milestones, or recognitions"
                    />
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
                      onClick={() => {
                        const descriptionError = validateIdeaDescription();
                        const fieldErrors = validateIdeaDetailsStep3();
                        setIdeaDescriptionError(descriptionError);
                        setIdeaDetailsStep3Errors(fieldErrors);
                        if (!descriptionError && Object.keys(fieldErrors).length === 0) setStep(5);
                      }}
                    >
                      Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right: Illustration */}
            <div className="hidden md:flex w-full md:w-1/2 flex flex-col items-center justify-center bg-[#F7F9FB] text-center px-8">
              <img src="/images/idea.png" alt="Step illustration" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Elaborate Your Vision</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Share the detailed story of your idea. Help us understand the problem you're solving, your solution, and what makes your approach unique.
              </div>
            </div>
          </div>
        )}
        {/* Step 4: Idea Validation */}
        {step === 4 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Idea Validation */}
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={4} totalSteps={7} />
                <div className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Idea Validation</div>
                <form className="space-y-6 w-full">
                  {/* How long they've been working on the idea */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      How long have you been working on this idea?
                    </div>
                    <div className="flex flex-col gap-2">
                      {['Less than 1 month', '1–6 months', '6–12 months', 'More than 1 year'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input type="radio" name="aspiringDuration" value={opt} checked={founderDuration === opt} onChange={() => setFounderDuration(opt)} className="accent-[#41E5FF]" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* If they've validated it with potential customers */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      Have you validated your idea with potential customers?
                    </div>
                    <div className="flex flex-col gap-2">
                      {['Yes, extensively', 'Yes, with a few people', 'Not yet', 'Not sure how to do this'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input type="radio" name="aspiringValidation" value={opt} checked={founderProductStatus === opt} onChange={() => setFounderProductStatus(opt)} className="accent-[#41E5FF]" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* If they've built a prototype or MVP */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      Have you built a prototype or MVP (Minimum Viable Product)?
                    </div>
                    <div className="flex flex-col gap-2">
                      {['Yes, I have a working prototype/MVP', 'I\'m in the process of building one', 'No, but I have detailed plans', 'No, I haven\'t started building yet'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input type="radio" name="aspiringPrototype" value={opt} checked={founderStage === opt} onChange={() => setFounderStage(opt)} className="accent-[#41E5FF]" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Have you built a business before */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      Have you built a business before?
                    </div>
                    <div className="flex flex-col gap-2">
                      {['Yes', 'No'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input type="radio" name="aspiringHasBusiness" value={opt} checked={aspiringHasBusiness === opt} onChange={() => setAspiringHasBusiness(opt)} className="accent-[#41E5FF]" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Optional product/website/pitch deck upload or link */}
                  <div>
                    <label className="block text-[#23262F] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>
                      Product/Website/Pitch Deck/Video <span className="text-gray-400">(Optional)</span>
                    </label>
                    {/* Toggle Buttons */}
                    <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => setPitchDeckUploadMethod('file')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                          pitchDeckUploadMethod === 'file'
                            ? 'bg-white text-[#41E5FF] shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Upload File
                      </button>
                      <button
                        type="button"
                        onClick={() => setPitchDeckUploadMethod('link')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                          pitchDeckUploadMethod === 'link'
                            ? 'bg-white text-[#41E5FF] shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Share Link
                      </button>
                    </div>
                    {pitchDeckUploadMethod === 'file' ? (
                      <div>
                        {/* File Upload Area */}
                        <div
                          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                            isDragOver
                              ? 'border-[#41E5FF] bg-blue-50'
                              : 'border-gray-300 hover:border-[#41E5FF]'
                          }`}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                        >
                          <input
                            type="file"
                            id="pitchDeckFile"
                            accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov,.ppt,.pptx"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handlePitchDeckFileUpload(file);
                            }}
                            className="hidden"
                          />
                          {pitchDeckFile ? (
                            <div className="space-y-2">
                              <div className="flex items-center justify-center text-green-600">
                                <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {pitchDeckFile.name} ({(pitchDeckFile.size / (1024 * 1024)).toFixed(2)} MB)
                              </p>
                              <button
                                type="button"
                                onClick={() => setPitchDeckFile(null)}
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
                                <label htmlFor="pitchDeckFile" className="cursor-pointer">
                                  <span className="text-[#41E5FF] hover:text-[#22CCB2] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Choose a file
                                  </span>
                                  <span className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}> or drag and drop</span>
                                </label>
                              </div>
                              <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                                PDF, JPG, PNG, MP4, MOV, PPT, PPTX up to 50MB
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        {/* Link Input */}
                        <input
                          type="url"
                          value={pitchDeckLink}
                          onChange={(e) => setPitchDeckLink(e.target.value)}
                          className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                          placeholder="https://yourwebsite.com or https://drive.google.com/..."
                        />
                        <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Share a link to your product, website, pitch deck, or demo video. Make sure the link is accessible to viewers.
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
            {/* Right: Illustration */}
                          <div className="hidden md:flex w-full md:w-1/2 flex flex-col items-center justify-center bg-white text-center px-8">
                <img src="/images/Blogs/validate.png" alt="Idea Validation" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Validate Your Concept</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Understanding your idea's market potential is crucial. Share how far you've progressed in validating your concept with real customers.
              </div>
            </div>
          </div>
        )}
        {/* Step 5: Challenges & Approaches */}
        {step === 5 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Challenges & Approaches */}
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={5} totalSteps={7} />
                <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Challenges & Approaches</div>
                <form className="space-y-6 w-full">
                  {/* Select up to 3 challenges */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      Select up to 3 challenges you're facing:
                    </div>
                    <div className="flex flex-col gap-2">
                      {ASPIRING_CHALLENGES.map(challenge => (
                        <label key={challenge} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input 
                            type="checkbox" 
                            checked={aspiringChallenges.includes(challenge)} 
                            onChange={() => {
                              if (aspiringChallenges.includes(challenge)) {
                                setAspiringChallenges(aspiringChallenges.filter(c => c !== challenge));
                              } else if (aspiringChallenges.length < 3) {
                                setAspiringChallenges([...aspiringChallenges, challenge]);
                              }
                            }} 
                            className="accent-[#41E5FF]" 
                          />
                          <span>{challenge}</span>
                        </label>
                      ))}
                    </div>
                    {aspiringStep5Errors.challenges && <p className="text-red-500 text-xs mt-1">{aspiringStep5Errors.challenges}</p>}
                  </div>
                  {/* Current approaches to solving these challenges */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      What approaches are you currently using to solve these challenges?
                    </div>
                    <div className="flex flex-col gap-2">
                      {ASPIRING_APPROACHES.map(approach => (
                        <label key={approach} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input 
                            type="checkbox" 
                            checked={aspiringApproaches.includes(approach)} 
                            onChange={() => {
                              if (aspiringApproaches.includes(approach)) {
                                setAspiringApproaches(aspiringApproaches.filter(a => a !== approach));
                              } else {
                                setAspiringApproaches([...aspiringApproaches, approach]);
                              }
                            }} 
                            className="accent-[#41E5FF]" 
                          />
                          <span>{approach}</span>
                          {approach === 'Using existing platforms or communities' && aspiringApproaches.includes(approach) && (
                            <input
                              type="text"
                              value={aspiringPlatformName}
                              onChange={e => setAspiringPlatformName(e.target.value)}
                              className="ml-2 px-3 py-2 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F] min-w-[180px]"
                              style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                              placeholder="Platform name (optional)"
                            />
                          )}
                        </label>
                      ))}
                    </div>
                    {aspiringStep5Errors.approaches && <p className="text-red-500 text-xs mt-1">{aspiringStep5Errors.approaches}</p>}
                  </div>
                  {/* Satisfaction with current approaches */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      How satisfied are you with your current approaches?
                    </div>
                    <div className="flex flex-col gap-2">
                      {ASPIRING_SATISFACTION.map(satisfaction => (
                        <label key={satisfaction} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input 
                            type="radio" 
                            name="aspiringSatisfaction" 
                            value={satisfaction} 
                            checked={aspiringSatisfaction === satisfaction} 
                            onChange={() => setAspiringSatisfaction(satisfaction)} 
                            className="accent-[#41E5FF]" 
                          />
                          <span>{satisfaction}</span>
                        </label>
                      ))}
                    </div>
                    {aspiringStep5Errors.satisfaction && <p className="text-red-500 text-xs mt-1">{aspiringStep5Errors.satisfaction}</p>}
                  </div>
                  <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                    <button
                      type="button"
                      className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      onClick={() => setStep(4)}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      onClick={() => {
                        const errors = {};
                        if (aspiringChallenges.length === 0) errors.challenges = 'Select at least 1 challenge';
                        if (aspiringApproaches.length === 0) errors.approaches = 'Select at least 1 approach';
                        if (!aspiringSatisfaction) errors.satisfaction = 'Please select your satisfaction level';
                        setAspiringStep5Errors(errors);
                        if (Object.keys(errors).length === 0) setStep(6);
                      }}
                    >
                      Submit <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right: Illustration */}
                          <div className="hidden md:flex w-full md:w-1/2 flex flex-col items-center justify-center bg-white text-center px-8">
                <img src="/images/Blogs/fail.png" alt="Challenges & Approaches" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Overcome Obstacles</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Every entrepreneur faces challenges. Help us understand your current obstacles and how you're addressing them so we can provide targeted support.
              </div>
            </div>
          </div>
        )}
        {/* Step 6: Timeline & Support Needs */}
        {step === 6 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Timeline & Support Needs */}
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={6} totalSteps={7} />
                <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Timeline & Support Needs</div>
                <form className="space-y-6 w-full">
                  {/* Timeline for launching */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      What's your timeline for launching your idea?
                    </div>
                    <div className="flex flex-col gap-2">
                      {ASPIRING_TIMELINES.map(timeline => (
                        <label key={timeline} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input
                            type="radio" 
                            name="aspiringTimeline" 
                            value={timeline} 
                            checked={aspiringTimeline === timeline} 
                            onChange={() => setAspiringTimeline(timeline)} 
                            className="accent-[#41E5FF]" 
                          />
                          <span>{timeline}</span>
                        </label>
                      ))}
                    </div>
                    {aspiringStep6Errors.timeline && <p className="text-red-500 text-xs mt-1">{aspiringStep6Errors.timeline}</p>}
                  </div>
                  {/* What they're looking for */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      What kind of support do you need for your startup idea? (Select all that apply)
                    </div>
                    <div className="flex flex-col gap-2">
                      {ASPIRING_LOOKING_FOR.map(item => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input
                            type="checkbox"
                            checked={aspiringLookingFor.includes(item)} 
                            onChange={() => {
                              if (aspiringLookingFor.includes(item)) {
                                setAspiringLookingFor(aspiringLookingFor.filter(i => i !== item));
                              } else {
                                setAspiringLookingFor([...aspiringLookingFor, item]);
                              }
                            }} 
                            className="accent-[#41E5FF]" 
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                    {aspiringStep6Errors.lookingFor && <p className="text-red-500 text-xs mt-1">{aspiringStep6Errors.lookingFor}</p>}
                  </div>
                  {/* Interest in AscendThon */}
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      Would you be interested in joining AscendThon, a 4-week startup bootcamp to help you validate and launch your idea?
                    </div>
                    <div className="flex flex-col gap-2">
                      {ASCENDTHON_OPTIONS.map(option => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                          <input 
                            type="radio" 
                            name="aspiringAscendThon" 
                            value={option} 
                            checked={aspiringAscendThon === option} 
                            onChange={() => setAspiringAscendThon(option)} 
                            className="accent-[#41E5FF]" 
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                    {aspiringStep6Errors.ascendThon && <p className="text-red-500 text-xs mt-1">{aspiringStep6Errors.ascendThon}</p>}
                  </div>
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                      {submitError}
                    </div>
                  )}
                  <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                    <button
                      type="button"
                      className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      onClick={() => setStep(5)}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className={`px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      disabled={isSubmitting}
                      onClick={() => {
                        const errors = {};
                        if (!aspiringTimeline) errors.timeline = 'Please select a timeline';
                        if (aspiringLookingFor.length === 0) errors.lookingFor = 'Select at least 1 option';
                        if (!aspiringAscendThon) errors.ascendThon = 'Please select an option';
                        setAspiringStep6Errors(errors);
                        if (Object.keys(errors).length === 0) {
                          handleFormSubmit();
                        }
                      }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'} 
                      {!isSubmitting && <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right: Illustration */}
                          <div className="hidden md:flex w-full md:w-1/2 flex flex-col items-center justify-center bg-white text-center px-8">
                <img src="/images/Blogs/mentor.png" alt="Timeline & Support" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Build Your Future</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Success requires planning and support. Share your timeline and let us know how we can help you build your startup journey step by step.
              </div>
            </div>
          </div>
        )}
        {/* Step 7: Thank You / Success */}
        {step === 7 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Thank You Message */}
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full text-center">
                <div className="mb-6">
                  <svg width="80" height="80" fill="none" viewBox="0 0 80 80" className="mx-auto mb-4">
                    <circle cx="40" cy="40" r="40" fill="#22CCB2"/>
                    <path d="M25 40l10 10 20-20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-archivo font-semibold text-[32px] md:text-[40px] mb-4 text-[#23262F]">Thank You for Submitting!</h2>
                <p className="font-inter text-[18px] text-[#23262F] mb-6 max-w-lg">Your information has been successfully submitted. Now, join the IdeaAscend Aspiring Entrepreneur Community!</p>
                <p className="font-inter text-[16px] text-[#6B7280] mb-8 max-w-lg">Connect with fellow aspiring founders, share your journey, and get support as you turn your idea into reality. Our WhatsApp community is the perfect place to network, learn, and grow together.</p>
                <a href="https://chat.whatsapp.com/Koc003PxjZ49wBqwFpDENL" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-[10px] bg-[#22CCB2] text-white font-semibold text-lg shadow-lg transition-all hover:bg-[#1CA88F] flex items-center gap-3 justify-center">
                  Join IdeaAscend Aspiring Entrepreneur Community
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 