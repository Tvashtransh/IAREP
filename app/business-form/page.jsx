'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CustomSelect from '../components/CustomSelect.jsx';

const OPTIONS = [
  {
    label: 'Job seeker Interested in startups',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#E6F9FF"/><path d="M10 14V12.5C10 10.567 11.567 9 13.5 9h5c1.933 0 3.5 1.567 3.5 3.5V14" stroke="#41E5FF" strokeWidth="1.5"/><rect x="8" y="14" width="16" height="9" rx="2" stroke="#41E5FF" strokeWidth="1.5"/><path d="M13 18h6" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    value: 'jobseeker',
  },
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

const INTEREST_OPTIONS = [
  'AI/ML',
  'Fintech',
  'EdTech',
  'HealthTech',
  'SaaS Tools',
  'ClimateTech',
  'AgriTech',
  'Social Impact',
  'E-commerce',
  'Gaming',
  'Cybersecurity',
  'Mobility/EV',
  'SpaceTech',
  'FashionTech',
  'FoodTech',
  'Creator Tools',
  'AdTech',
  'B2B/Enterprise',
  'HRTech',
  'TravelTech',
  'Web3/Blockchain',
  'Media & News',
  'Sports/Fitness',
  'UX/UI Design',
  'Networking Platforms',
];

export default function BusinessFormPage() {
  const [selected, setSelected] = useState(null);
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
  const [userErrors, setUserErrors] = useState({});
  const [jobSeekerConnect, setJobSeekerConnect] = useState([]);
  const [jobSeekerCollab, setJobSeekerCollab] = useState([]);
  const [hasStartupExp, setHasStartupExp] = useState('');
  const [startupExpDetails, setStartupExpDetails] = useState({
    name: '',
    role: '',
    duration: '',
    value: '',
    lacks: '',
  });
  const [openToStartup, setOpenToStartup] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeLink, setResumeLink] = useState('');
  const [resumeUploadMethod, setResumeUploadMethod] = useState('file');
  const [isDragOver, setIsDragOver] = useState(false);
  const [aspiringIdea, setAspiringIdea] = useState({
    name: '',
    industry: '',
  });
  const [aspiringErrors, setAspiringErrors] = useState({});
  const [aspiringInterests, setAspiringInterests] = useState([]);
  const [aspiringDetails, setAspiringDetails] = useState({
    describe: '',
    problem: '',
    solution: '',
    inspiration: '',
  });
  const [aspiringDetailsErrors, setAspiringDetailsErrors] = useState({});

  // Add state for aspiring duration
  const [aspiringDuration, setAspiringDuration] = useState('');

  // Add state for aspiring validation
  const [aspiringValidation, setAspiringValidation] = useState('');

  // Add state for aspiring prototype
  const [aspiringPrototype, setAspiringPrototype] = useState('');

  // Add state for detailed idea description step
  const [ideaDescription, setIdeaDescription] = useState('');
  const [ideaDescriptionError, setIdeaDescriptionError] = useState('');
  const [ideaDetailsStep4, setIdeaDetailsStep4] = useState({
    stage: '',
    team: '',
    revenue: '',
    targetAudience: '',
    businessModel: '',
    achievements: ''
  });
  const [ideaDetailsStep4Errors, setIdeaDetailsStep4Errors] = useState({});

  // Add state for motivation and goals step
  const [aspiringMotivationStep, setAspiringMotivationStep] = useState('');
  const [aspiringGoalsStep, setAspiringGoalsStep] = useState('');
  const [founderMotivationStep, setFounderMotivationStep] = useState('');
  const [founderGoalsStep, setFounderGoalsStep] = useState('');

  // Role selection validation error state
  const [showRoleError, setShowRoleError] = useState(false);

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

  const handleContinue = () => {
    if (selected) {
      setStep(2);
    }
  };

  const validateUserDetails = () => {
    const errors = {};
    if (!userDetails.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!userDetails.email.trim()) errors.email = 'Email is required';
    if (!userDetails.mobile.trim()) errors.mobile = 'Mobile Number is required';
    if (!userDetails.educationalDegree.trim()) errors.educationalDegree = 'Educational Degree is required';
    if (!userDetails.college.trim()) errors.college = 'College is required';
    if (!userDetails.city.trim()) errors.city = 'City is required';
    // Optionally: add regex validation for email/mobile
    return errors;
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Add validation and handler functions for detailed idea step
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

  const validateIdeaDetailsStep4 = () => {
    const errors = {};
    if (!ideaDetailsStep4.stage.trim()) errors.stage = 'Current Stage is required';
    if (!ideaDetailsStep4.team.trim()) errors.team = 'Team Size is required';
    if (!ideaDetailsStep4.revenue.trim()) errors.revenue = 'Revenue Status is required';
    if (!ideaDetailsStep4.targetAudience.trim()) errors.targetAudience = 'Target Audience is required';
    if (!ideaDetailsStep4.businessModel.trim()) errors.businessModel = 'Business Model is required';
    return errors;
  };

  const handleIdeaDetailsStep4Change = (e) => {
    const { name, value } = e.target;
    setIdeaDetailsStep4((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (file) => {
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
      handleFileUpload(files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  // Pitch deck upload handler functions
  const handlePitchDeckFileUpload = (file, type) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'video/mp4', 'video/quicktime', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
    const maxSize = 50 * 1024 * 1024; // 50MB for pitch decks/videos

    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF, JPG, PNG, MP4, MOV, PPT, or PPTX file.');
      return;
    }

    if (file.size > maxSize) {
      alert('File size should be less than 50MB.');
      return;
    }

    if (type === 'aspiring') {
      setAspiringPitchDeckFile(file);
    } else if (type === 'founder') {
      setFounderPitchDeckFile(file);
    }
  };

  const handleAspiringPitchDeckDragOver = (e) => {
    e.preventDefault();
    setAspiringIsDragOver(true);
  };

  const handleAspiringPitchDeckDragLeave = (e) => {
    e.preventDefault();
    setAspiringIsDragOver(false);
  };

  const handleAspiringPitchDeckDrop = (e) => {
    e.preventDefault();
    setAspiringIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handlePitchDeckFileUpload(files[0], 'aspiring');
    }
  };

  const handleAspiringPitchDeckFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handlePitchDeckFileUpload(files[0], 'aspiring');
    }
  };

  const handleFounderPitchDeckDragOver = (e) => {
    e.preventDefault();
    setFounderIsDragOver(true);
  };

  const handleFounderPitchDeckDragLeave = (e) => {
    e.preventDefault();
    setFounderIsDragOver(false);
  };

  const handleFounderPitchDeckDrop = (e) => {
    e.preventDefault();
    setFounderIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handlePitchDeckFileUpload(files[0], 'founder');
    }
  };

  const handleFounderPitchDeckFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handlePitchDeckFileUpload(files[0], 'founder');
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

  // Add a StepBar component for job seeker and aspiring steps
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
  const ASPIRING_FREQUENCIES = ['Daily', 'Weekly', 'Monthly', 'Rarely'];
  const ASPIRING_SATISFACTION = [
    'Very Dissatisfied',
    'Somewhat Dissatisfied',
    'Neutral',
    'Somewhat Satisfied',
    'Very Satisfied',
  ];
  const [aspiringChallenges, setAspiringChallenges] = useState([]);
  const [aspiringOtherChallenge, setAspiringOtherChallenge] = useState('');
  const [aspiringFrequency, setAspiringFrequency] = useState('');
  const [aspiringApproaches, setAspiringApproaches] = useState([]);
  const [aspiringPlatformName, setAspiringPlatformName] = useState('');
  const [aspiringSatisfaction, setAspiringSatisfaction] = useState('');
  const [aspiringStep5Errors, setAspiringStep5Errors] = useState({});
  const [aspiringProductLink, setAspiringProductLink] = useState('');
  const [aspiringHasBusiness, setAspiringHasBusiness] = useState('');

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
  const [aspiringStep8Errors, setAspiringStep8Errors] = useState({});

  // State for early-stage founder step 3 (copy of aspiring step 3)
  const [founderIdea, setFounderIdea] = useState({
    name: '',
    industry: '',
  });
  const [founderErrors, setFounderErrors] = useState({});
  const [founderInterests, setFounderInterests] = useState([]);

  // Add FounderInterestsSelector component (same as InterestsSelector but for founderInterests)
  function FounderInterestsSelector() {
    return (
      <div className="flex flex-wrap gap-3 mb-2 mt-2 max-w-2xl">
        {INTEREST_OPTIONS.map((option) => {
          const isSelected = founderInterests.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => {
                if (isSelected) {
                  setFounderInterests(founderInterests.filter((i) => i !== option));
                } else if (founderInterests.length < 5) {
                  setFounderInterests([...founderInterests, option]);
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

  // Founder Step 4 state
  const [founderStage, setFounderStage] = useState('');
  const [founderDuration, setFounderDuration] = useState('');
  const [founderBusinessModel, setFounderBusinessModel] = useState('');
  const [founderProductStatus, setFounderProductStatus] = useState('');

  // Founder Step 5 state
  const FOUNDER_CHALLENGES = [
    'Validating the market need',
    'Finding co-founders or hiring the right team',
    'Lack of industry mentors',
    'Fundraising or pitching to investors',
    'Building or scaling the product',
    'Getting initial customers or user traction',
    'Legal, compliance, or registration hurdles',
    'Building a go-to-market strategy',
    'Others',
  ];
  const FOUNDER_FREQUENCIES = ['Daily', 'Weekly', 'Monthly', 'Rarely'];
  const FOUNDER_APPROACHES = [
    'Self research, Youtube, blogs, free resources',
    'Hired freelancers / consultants',
    'Using startup platforms or communities',
    'Accelerator or incubator program',
    "Haven't found a solution yet",
  ];
  const FOUNDER_SATISFACTION = [
    'Very Dissatisfied',
    'Somewhat Dissatisfied',
    'Neutral',
    'Somewhat Satisfied',
    'Very Satisfied',
  ];
  const [founderChallenges, setFounderChallenges] = useState([]);
  const [founderOtherChallenge, setFounderOtherChallenge] = useState('');
  const [founderFrequency, setFounderFrequency] = useState('');
  const [founderApproaches, setFounderApproaches] = useState([]);
  const [founderPlatformName, setFounderPlatformName] = useState('');
  const [founderSatisfaction, setFounderSatisfaction] = useState('');
  const [founderProductLink, setFounderProductLink] = useState('');

  // Founder Step 6 - Past Startup Experience state
  const PAST_STARTUP_STAGES = [
    'Idea Stage',
    'MVP Built',
    'Acquired Customers',
    'Revenue-Generating',
    'Funded',
    'Shut Down'
  ];
  const [founderHasPastExp, setFounderHasPastExp] = useState('');
  const [founderPastExpDetails, setFounderPastExpDetails] = useState({
    name: '',
    role: '',
    sector: '',
    stage: ''
  });

  // Founder Step 7 - Team and Roles state (moved from step 6)
  const [founderTeamStatus, setFounderTeamStatus] = useState('');
  const [founderMissingRoles, setFounderMissingRoles] = useState('');
  const [founderTeamConfidence, setFounderTeamConfidence] = useState('');

  // Founder Step 8 - Goals & Funding state (moved from step 7)
  const [founderGoals, setFounderGoals] = useState('');
  const [founderLaunchPlan, setFounderLaunchPlan] = useState('');
  const [founderFunding, setFounderFunding] = useState('');
  const [founderPersonalInvestment, setFounderPersonalInvestment] = useState('');
  const [founderInvestmentDetails, setFounderInvestmentDetails] = useState('');

  // Founder Step 9 state (moved from step 8)
  const FOUNDER_SUPPORT_OPTIONS = [
    'Strategy building & market research',
    '1:1 mentorship & strategic guidance',
    'Co-founder / team matching',
    'Product feedback or prototype reviews',
    'Pitch development & investor readiness',
    'Investor introductions & fundraising',
    'Community networking & ecosystem connects',
    'Others',
  ];
  const [founderSupport, setFounderSupport] = useState([]);
  const [founderSupportOther, setFounderSupportOther] = useState('');
  const [founderContext, setFounderContext] = useState('');

  const [showCommunity, setShowCommunity] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Pitch deck upload state variables
  const [aspiringPitchDeckFile, setAspiringPitchDeckFile] = useState(null);
  const [aspiringPitchDeckLink, setAspiringPitchDeckLink] = useState('');
  const [aspiringPitchDeckUploadMethod, setAspiringPitchDeckUploadMethod] = useState('file');
  const [aspiringIsDragOver, setAspiringIsDragOver] = useState(false);
  
  const [founderPitchDeckFile, setFounderPitchDeckFile] = useState(null);
  const [founderPitchDeckLink, setFounderPitchDeckLink] = useState('');
  const [founderPitchDeckUploadMethod, setFounderPitchDeckUploadMethod] = useState('file');
  const [founderIsDragOver, setFounderIsDragOver] = useState(false);

  // Form submission function
  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    try {
      // Gather all form state into one object
      const formData = {
        selected,
        userDetails,
        jobSeekerConnect,
        jobSeekerCollab,
        hasStartupExp,
        startupExpDetails,
        openToStartup,
        selectedInterests,
        resumeLink,
        aspiringIdea,
        aspiringInterests,
        aspiringDetails,
        aspiringChallenges,
        aspiringApproaches,
        aspiringPlatformName,
        aspiringSatisfaction,
        aspiringProductLink,
        aspiringHasBusiness,
        aspiringTimeline,
        aspiringLookingFor,
        aspiringAscendThon,
        founderIdea,
        founderInterests,
        founderStage,
        founderDuration,
        founderBusinessModel,
        founderProductStatus,
        founderProductLink,
        founderChallenges,
        founderOtherChallenge,
        founderApproaches,
        founderPlatformName,
        founderSatisfaction,
        founderHasPastExp,
        founderPastExpDetails,
        founderTeamStatus,
        founderMissingRoles,
        founderTeamConfidence,
        founderGoals,
        founderLaunchPlan,
        founderFunding,
        founderPersonalInvestment,
        founderInvestmentDetails,
        founderSupport,
        founderSupportOther,
        founderContext,
        aspiringMotivationStep,
        aspiringGoalsStep,
        founderMotivationStep,
        founderGoalsStep
      };
      const res = await fetch('/api/submit-business-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitSuccess(true);
        setStep('success');
      } else {
        setSubmitError(result.error || 'Submission failed');
      }
    } catch (err) {
      setSubmitError('Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const [jobSeekerRoles, setJobSeekerRoles] = useState('');
  const [jobSeekerHopes, setJobSeekerHopes] = useState('');

  return (
    <>
      <div className="min-h-screen flex bg-[#F7F9FB] font-inter font-normal text-[14px]" suppressHydrationWarning={true}>
        {/* Step 1: Role Selection */}
        {step === 1 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Role Selection */}
            <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-between">
              {/* Top: Logo and progress */}
              <div>
                <div className="flex items-center mb-8">
                </div>
                <StepBar step={1} totalSteps={selected === 'aspiring' ? 10 : selected === 'founder' ? 10 : 6} />
                <div className="text-2xl font-bold text-[#23262F] mb-2 mt-[45px]">Which best describes you?</div>
              </div>
              {/* Options */}
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
              {/* Navigation Buttons */}
              <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF] opacity-50 cursor-not-allowed" disabled style={{ fontFamily: 'Inter, sans-serif' }}>Previous</button>
                <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => {
                  if (!selected) {
                    setShowRoleError(true);
                    return;
                  }
                  setStep(2);
                }}>Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              </div>
            </div>
            {/* Right: Welcome Image */}
                          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-white text-center">
                <img src="/images/Blogs/home.png" alt="Welcome to Business Form" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Welcome to Idea Ascend</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Choose your role to get started on your entrepreneurial journey. We'll personalize your experience based on your selection.
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex w-full min-h-screen">
            {/* Left: Form */}
            <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={2} totalSteps={selected === 'aspiring' ? 10 : selected === 'founder' ? 10 : 6} />
                <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Basic Details</div>
                <form className="space-y-4 w-full">
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Full Name</label>
                    <input name="fullName" value={userDetails.fullName} onChange={handleUserChange} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} />
                    {userErrors.fullName && <p className="text-red-500 text-xs mt-1">{userErrors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Contact Email</label>
                    <input name="email" value={userDetails.email} onChange={handleUserChange} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} />
                    {userErrors.email && <p className="text-red-500 text-xs mt-1">{userErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Mobile Number</label>
                    <input name="mobile" value={userDetails.mobile} onChange={handleUserChange} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} />
                    {userErrors.mobile && <p className="text-red-500 text-xs mt-1">{userErrors.mobile}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Educational Degree</label>
                    <input name="educationalDegree" value={userDetails.educationalDegree} onChange={handleUserChange} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} />
                    {userErrors.educationalDegree && <p className="text-red-500 text-xs mt-1">{userErrors.educationalDegree}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>College</label>
                    <input name="college" value={userDetails.college} onChange={handleUserChange} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} />
                    {userErrors.college && <p className="text-red-500 text-xs mt-1">{userErrors.college}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>City</label>
                    <input name="city" value={userDetails.city} onChange={handleUserChange} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} />
                    {userErrors.city && <p className="text-red-500 text-xs mt-1">{userErrors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>LinkedIn URL <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>(Optional)</span></label>
                    <input name="linkedin" value={userDetails.linkedin} onChange={handleUserChange} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }} />
                  </div>
                  <div className="flex flex-row justify-between mt-4 w-full">
                    <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(1)}>Previous</button>
                    <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => {
                      const errors = validateUserDetails();
                      setUserErrors(errors);
                      if (Object.keys(errors).length === 0) setStep(3);
                    }}>Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right: Illustration + Heading/Subheading */}
                          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-white text-center">
                <img src="/images/Blogs/team.png" alt="User Profile Setup" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Your Input Drives Our Platform</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Welcome to Idea Ascend—the platform where ideas rise into reality. Let's begin with your basic information so we can better understand and serve your entrepreneurial vision.
              </div>
            </div>
          </div>
        )}
        {/* Step 3: Job Seeker Interests */}
        {step === 3 && selected === 'jobseeker' && (
          <div className="flex w-full min-h-screen">
            <div className="w-full md:w-1/2 flex flex-col px-12 py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={3} totalSteps={6} />
                <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Your Career Interests</div>
                <form className="space-y-6 w-full">
            <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 600, color: '#23262F' }}>
                      What type of roles are you most interested in?
              </div>
                    <input
                      type="text"
                      value={jobSeekerRoles}
                      onChange={e => setJobSeekerRoles(e.target.value)}
                      placeholder="E.g., Software Developer, Product Manager, Marketing, etc."
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    />
                  </div>
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 600, color: '#23262F' }}>
                      What are you hoping to get out of your next role?
                    </div>
                          <input
                      type="text"
                      value={jobSeekerHopes}
                      onChange={e => setJobSeekerHopes(e.target.value)}
                      placeholder="E.g., learning, mentorship, impact, growth, etc."
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    />
                </div>
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 600, color: '#23262F' }}>
                      Select up to 5 topics that interest you:
                    </div>
                    <InterestsSelector />
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
              <img src="/images/goal%20target.png" alt="Career Interests" className="max-w-lg w-full mb-8" />
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Shape Your Path</div>
              <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                Tell us what excites you most about working in a startup. Your interests help us match you with the right opportunities.
              </div>
            </div>
          </div>
        )}
        
        {/* Step 3: Aspiring Idea Info */}
        {step === 3 && selected === 'aspiring' && (
          <div className="flex w-full min-h-screen">
            {/* Left: Aspiring Idea Info */}
            <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={3} totalSteps={10} />
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
                      <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-white text-center">
              <img src="/images/Blogs/submit idea.png" alt="Tell us about your idea" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Share Your Vision</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Every great startup begins with a powerful idea. Tell us about your business concept and the industry you're passionate about transforming.
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Tell us more about your idea (Aspiring Entrepreneur) */}
      {step === 4 && selected === 'aspiring' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Form */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
                              <StepBar step={4} totalSteps={10} />
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
                    value={ideaDetailsStep4.stage}
                    onChange={val => handleIdeaDetailsStep4Change({ target: { name: 'stage', value: val } })}
                    placeholder="Select Stage"
                    options={[
                      { value: 'idea', label: 'Idea Stage' },
                      { value: 'prototype', label: 'Prototype' },
                      { value: 'mvp', label: 'MVP' },
                      { value: 'early-revenue', label: 'Early Revenue' },
                      { value: 'scaling', label: 'Scaling' },
                    ]}
                  />
                  {ideaDetailsStep4Errors.stage && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep4Errors.stage}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Team Size</label>
                  <CustomSelect
                    name="team"
                    value={ideaDetailsStep4.team}
                    onChange={val => handleIdeaDetailsStep4Change({ target: { name: 'team', value: val } })}
                    placeholder="Select Team Size"
                    options={[
                      { value: 'solo', label: 'Solo (Just me)' },
                      { value: '2-3', label: '2-3 people' },
                      { value: '4-10', label: '4-10 people' },
                      { value: '10+', label: '10+ people' },
                    ]}
                  />
                  {ideaDetailsStep4Errors.team && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep4Errors.team}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Revenue Status</label>
                  <CustomSelect
                    name="revenue"
                    value={ideaDetailsStep4.revenue}
                    onChange={val => handleIdeaDetailsStep4Change({ target: { name: 'revenue', value: val } })}
                    placeholder="Select Revenue Status"
                    options={[
                      { value: 'pre-revenue', label: 'Pre-Revenue' },
                      { value: '0-1l', label: '₹0-1 Lakh' },
                      { value: '1-5l', label: '₹1-5 Lakhs' },
                      { value: '5-25l', label: '₹5-25 Lakhs' },
                      { value: '25l+', label: '₹25 Lakhs+' },
                    ]}
                  />
                  {ideaDetailsStep4Errors.revenue && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep4Errors.revenue}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Target Audience</label>
                  <input
                    name="targetAudience" 
                    value={ideaDetailsStep4.targetAudience} 
                    onChange={handleIdeaDetailsStep4Change} 
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    placeholder="e.g., College students, Small businesses"
                  />
                  {ideaDetailsStep4Errors.targetAudience && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep4Errors.targetAudience}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Business Model</label>
                  <CustomSelect
                    name="businessModel"
                    value={ideaDetailsStep4.businessModel}
                    onChange={val => handleIdeaDetailsStep4Change({ target: { name: 'businessModel', value: val } })}
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
                  {ideaDetailsStep4Errors.businessModel && <p className="text-red-500 text-xs mt-1">{ideaDetailsStep4Errors.businessModel}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Key Achievements <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>(Optional)</span></label>
                  <textarea 
                    name="achievements" 
                    value={ideaDetailsStep4.achievements} 
                    onChange={handleIdeaDetailsStep4Change} 
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
                      const fieldErrors = validateIdeaDetailsStep4();
                      setIdeaDescriptionError(descriptionError);
                      setIdeaDetailsStep4Errors(fieldErrors);
                      if (!descriptionError && Object.keys(fieldErrors).length === 0) setStep(5);
                    }}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right: Illustration + Heading/Subheading */}
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/idea.png" alt="Step illustration" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Elaborate Your Vision</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Share the detailed story of your idea. Help us understand the problem you're solving, your solution, and what makes your approach unique.
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Idea Validation (Aspiring Entrepreneur) */}
      {step === 5 && selected === 'aspiring' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Idea Validation */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={5} totalSteps={10} />
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
                        <input type="radio" name="aspiringDuration" value={opt} checked={aspiringDuration === opt} onChange={() => setAspiringDuration(opt)} className="accent-[#41E5FF]" />
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
                        <input type="radio" name="aspiringValidation" value={opt} checked={aspiringValidation === opt} onChange={() => setAspiringValidation(opt)} className="accent-[#41E5FF]" />
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
                        <input type="radio" name="aspiringPrototype" value={opt} checked={aspiringPrototype === opt} onChange={() => setAspiringPrototype(opt)} className="accent-[#41E5FF]" />
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
                {/* Product/Website/Pitch Deck Upload Section */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    Product/Website/Pitch Deck/Video <span className="text-gray-400">(Optional)</span>
                  </div>
                  
                  {/* Upload Method Toggle */}
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      onClick={() => setAspiringPitchDeckUploadMethod('file')}
                      className={`px-4 py-2 rounded-md border transition-all ${
                        aspiringPitchDeckUploadMethod === 'file' 
                          ? 'bg-[#41E5FF] text-white border-[#41E5FF]' 
                          : 'bg-white text-[#23262F] border-[#DEE3EB] hover:border-[#41E5FF]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400 }}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={() => setAspiringPitchDeckUploadMethod('link')}
                      className={`px-4 py-2 rounded-md border transition-all ${
                        aspiringPitchDeckUploadMethod === 'link' 
                          ? 'bg-[#41E5FF] text-white border-[#41E5FF]' 
                          : 'bg-white text-[#23262F] border-[#DEE3EB] hover:border-[#41E5FF]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400 }}
                    >
                      Share Link
                    </button>
                  </div>

                  {aspiringPitchDeckUploadMethod === 'file' ? (
                    <div>
                      {/* File Upload Area */}
                      <div
                        onDragOver={handleAspiringPitchDeckDragOver}
                        onDragLeave={handleAspiringPitchDeckDragLeave}
                        onDrop={handleAspiringPitchDeckDrop}
                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer ${
                          aspiringIsDragOver 
                            ? 'border-[#41E5FF] bg-[#F7FCFF]' 
                            : 'border-[#DEE3EB] bg-[#F7F9FB] hover:border-[#41E5FF] hover:bg-[#F7FCFF]'
                        }`}
                        onClick={() => document.getElementById('aspiring-pitch-deck-upload')?.click()}
                      >
                        <input
                          id="aspiring-pitch-deck-upload"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov,.ppt,.pptx"
                          onChange={handleAspiringPitchDeckFileInputChange}
                          className="hidden"
                        />
                        
                        {aspiringPitchDeckFile ? (
                          <div className="space-y-2">
                            <div className="text-green-600">
                              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="text-[#23262F] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {aspiringPitchDeckFile.name}
                            </div>
                            <div className="text-[#6B7280] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {(aspiringPitchDeckFile.size / 1024 / 1024).toFixed(2)} MB
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setAspiringPitchDeckFile(null);
                              }}
                              className="text-[#41E5FF] text-sm hover:underline"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Remove file
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="text-[#6B7280]">
                              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                            </div>
                            <div className="text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 500 }}>
                              Drop your files here or click to browse
                            </div>
                            <div className="text-[#6B7280] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Supported formats: PDF, JPG, PNG, MP4, MOV, PPT, PPTX (Max 50MB)
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="url"
                        placeholder="Paste your website URL, Google Drive link, or any other relevant link"
                        value={aspiringPitchDeckLink}
                        onChange={(e) => setAspiringPitchDeckLink(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      />
                      <div className="text-[#6B7280] text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Make sure your link is publicly accessible or set to "Anyone with the link can view"
                      </div>
                    </div>
                  )}
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
                      if (!aspiringDuration) errors.duration = 'Please select how long you\'ve been working on the idea';
                      if (!aspiringValidation) errors.validation = 'Please select if you\'ve validated your idea';
                      if (!aspiringPrototype) errors.prototype = 'Please select if you\'ve built a prototype';
                      if (!aspiringHasBusiness) errors.hasBusiness = 'Please select if you\'ve built a business before';
                      setAspiringStep5Errors(errors);
                      if (Object.keys(errors).length === 0) {
                        setStep(6);
                      }
                    }}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
                            <img src="/images/Blogs/validate.png" alt="Idea Validation" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Validate Your Concept</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Understanding your idea's market potential is crucial. Share how far you've progressed in validating your concept with real customers.
            </div>
          </div>
        </div>
      )}
      
      {/* Step 6: Challenges & Approaches (Aspiring Entrepreneur) */}
      {step === 6 && selected === 'aspiring' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Challenges & Approaches */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={6} totalSteps={10} />
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
                    onClick={() => setStep(5)}
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
                      if (Object.keys(errors).length === 0) setStep(8);
                    }}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/Challenges%20and%20approaches.png" alt="Challenges & Approaches" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Overcome Obstacles</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Every entrepreneur faces challenges. Help us understand your current obstacles and how you're addressing them so we can provide targeted support.
            </div>
          </div>
        </div>
      )}
      
      {/* Step 8: Motivation & Goals (Aspiring Entrepreneur) */}
      {step === 8 && selected === 'aspiring' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Motivation & Goals */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={8} totalSteps={10} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Motivation & Goals</div>
              <form className="space-y-6 w-full">
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Why do you want to start this venture?</label>
                  <textarea
                    name="aspiringMotivationStep"
                    value={aspiringMotivationStep}
                    onChange={e => setAspiringMotivationStep(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    rows={3}
                    placeholder="Share your motivation, vision, or personal story."
                  />
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>What do you hope to achieve in the next 6 months?</label>
                  <textarea
                    name="aspiringGoalsStep"
                    value={aspiringGoalsStep}
                    onChange={e => setAspiringGoalsStep(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    rows={3}
                    placeholder="E.g., validate idea, build MVP, find co-founder, etc."
                  />
                </div>
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(6)}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => {
                      const errors = {};
                      if (!aspiringMotivationStep) errors.motivation = 'Please share your motivation';
                      if (!aspiringGoalsStep) errors.goals = 'Please share your goals';
                      setAspiringStep8Errors(errors);
                      if (Object.keys(errors).length === 0) {
                    setStep(9);
                      }
                    }}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/idea.png" alt="Motivation & Goals" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Drive Your Success</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Your motivation and goals are the foundation of your startup journey. Share what drives you and what you aim to accomplish in the coming months.
            </div>
          </div>
        </div>
      )}

      {/* Step 9: Timeline & Support Needs (Aspiring Entrepreneur) */}
      {step === 9 && selected === 'aspiring' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Timeline & Support Needs */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={9} totalSteps={10} />
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
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(8)}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => {
                      const errors = {};
                      if (!aspiringTimeline) errors.timeline = 'Please select a timeline';
                      if (aspiringLookingFor.length === 0) errors.lookingFor = 'Select at least 1 option';
                      if (!aspiringAscendThon) errors.ascendThon = 'Please select an option';
                      setAspiringStep6Errors(errors);
                      if (Object.keys(errors).length === 0) {
                        setStep(10);
                      }
                    }}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
                {submitError && (
                  <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
          {/* Right: Illustration and text (hide on mobile) */}
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/building%20blocks.png" alt="Timeline & Support" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Build Your Future</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Success requires planning and support. Share your timeline and let us know how we can help you build your startup journey step by step.
            </div>
          </div>
        </div>
      )}

      {/* Step 10: Thank You Page (Aspiring Entrepreneur) */}
      {step === 10 && selected === 'aspiring' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Thank You Message */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full text-center">
              <div className="mb-6">
                <svg width="80" height="80" fill="none" viewBox="0 0 80 80" className="mx-auto mb-4">
                  <circle cx="40" cy="40" r="40" fill="#22CCB2"/>
                  <path d="M25 40l10 10 20-20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-archivo font-semibold text-[32px] md:text-[40px] mb-4 text-[#23262F]">Thank You for Submitting!</h2>
              <p className="font-inter text-[18px] text-[#23262F] mb-6 max-w-lg">Your idea has been successfully submitted. Now, join the IdeaAscend Aspiring Entrepreneur Community!</p>
              <p className="font-inter text-[16px] text-[#6B7280] mb-8 max-w-lg">Connect with other aspiring entrepreneurs, share your ideas, and get support as you build your startup. Our WhatsApp community is the perfect place to network, learn, and grow together.</p>
              <button
                onClick={async () => {
                  await handleFormSubmit();
                  window.open('https://chat.whatsapp.com/Koc003PxjZ49wBqwFpDENL', '_blank');
                }}
                className="px-10 py-4 rounded-[10px] bg-[#22CCB2] text-white font-semibold text-lg shadow-lg transition-all hover:bg-[#1CA88F] flex items-center gap-3 justify-center"
              >
                Join IdeaAscend Aspiring Entrepreneur Community
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          {/* Right: Jumping People Image */}
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/jumping%20people.png" alt="Community celebration" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Turn Ideas Into Reality!</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Join an inspiring community of aspiring entrepreneurs who are turning their ideas into successful startups. Together, we'll transform dreams into reality!
            </div>
          </div>
        </div>
      )}
      
      {/* Step 4: Startup Experience Section */}
      {step === 4 && selected === 'jobseeker' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Startup Experience Section */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={4} totalSteps={6} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Startup Experience</div>
              <div className="mb-4">
                <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 600, color: '#23262F' }}>
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
              {hasStartupExp === 'yes' && (
                <div className="mb-6 space-y-4">
                  <div>
                    <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• Name of the Startup:</label>
                    <input type="text" value={startupExpDetails.name} onChange={e => setStartupExpDetails(d => ({ ...d, name: e.target.value }))} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F]" style={{ color: '#23262F' }} />
                  </div>
                  <div>
                    <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• Your Role:</label>
                    <input type="text" value={startupExpDetails.role} onChange={e => setStartupExpDetails(d => ({ ...d, role: e.target.value }))} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F]" style={{ color: '#23262F' }} />
                  </div>
                  <div>
                    <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• How long did you work there?</label>
                    <input type="text" value={startupExpDetails.duration} onChange={e => setStartupExpDetails(d => ({ ...d, duration: e.target.value }))} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F]" style={{ color: '#23262F' }} />
                  </div>
                  <div>
                    <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• What value do you believe you added to the startup? <span className="text-gray-400">(1–2 lines)</span></label>
                    <input type="text" value={startupExpDetails.value} onChange={e => setStartupExpDetails(d => ({ ...d, value: e.target.value }))} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F]" style={{ color: '#23262F' }} />
                  </div>
                  <div>
                    <label className="block mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>• Based on your experience, what do you think most startups lack or struggle with? <span className="text-gray-400">(Optional, 1–2 lines)</span></label>
                    <input type="text" value={startupExpDetails.lacks} onChange={e => setStartupExpDetails(d => ({ ...d, lacks: e.target.value }))} className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F]" style={{ color: '#23262F' }} />
                  </div>
                </div>
              )}
              {hasStartupExp === 'no' && (
                <div className="mb-6">
                  <div className="font-medium mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 600, color: '#23262F' }}>
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
              )}
              <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(step - 1)}>Previous</button>
                <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(step + 1)}>Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              </div>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/people%20computer.png" alt="Startup Experience" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Your Experience Matters</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Your startup experience helps us understand your background and find the perfect opportunities that match your skill level and interests.
            </div>
          </div>
        </div>
      )}
      {/* Step 5: Interests Selection (Job Seeker) */}
      {step === 5 && selected === 'jobseeker' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Interests Selection */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-between">
            {/* Logo and Progress */}
            <div>
              <div className="flex items-center mb-8"></div>
              <StepBar step={5} totalSteps={6} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Help us to personalize your experience better!</div>
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 600, color: '#23262F' }}>Who would you like to connect with in the startup ecosystem?</div>
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
              <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 18, fontWeight: 600, color: '#23262F' }}>What type of collaboration opportunities interest you?</div>
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
            {/* Navigation Buttons */}
            <div className="flex flex-row justify-between gap-6 mt-8 mb-2 w-full">
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-[#F7F9FB] font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 10H7m0 0l2-2m-2 2l2 2" stroke="#41E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back
              </button>
              <div className="flex flex-row gap-6">
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
              {submitError && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {submitError}
                </div>
              )}
            </div>
          </div>
                      {/* Right: Illustration */}
            <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/customization%20calci.png" alt="Personalize Experience" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Tailored Just for You</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Your interests help us curate personalized content, job recommendations, and networking opportunities that align with your career goals and passions.
            </div>
          </div>
        </div>
      )}
      {/* Final step for Job Seeker WhatsApp community */}
      {step === 6 && selected === 'jobseeker' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Thank You Message */}
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
                onClick={async () => {
                  await handleFormSubmit();
                  window.open('https://chat.whatsapp.com/EEihbPQHV6S2edQzaJYWlu', '_blank');
                }}
                className="px-10 py-4 rounded-[10px] bg-[#22CCB2] text-white font-semibold text-lg shadow-lg transition-all hover:bg-[#1CA88F] flex items-center gap-3 justify-center"
              >
                Join IdeaAscend Job Seeker Community
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          {/* Right: Jumping People Image */}
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/jumping%20people.png" alt="Community celebration" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Welcome to the Community!</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Join hundreds of ambitious job seekers who are building their careers in the startup ecosystem. Together, we grow stronger!
            </div>
          </div>
        </div>
      )}
      {step === 3 && selected === 'founder' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Idea Info */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
                              <StepBar step={3} totalSteps={10} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Tell us about your Startup</div>
              <form className="space-y-6 w-full">
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Startup / Business Name</label>
                  <input
                    name="name"
                    value={founderIdea.name}
                    onChange={e => setFounderIdea(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                  />
                  {founderErrors.name && <p className="text-red-500 text-xs mt-1">{founderErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>What industry your Startup belongs to</label>
                  <input
                    name="industry"
                    value={founderIdea.industry}
                    onChange={e => setFounderIdea(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                  />
                  {founderErrors.industry && <p className="text-red-500 text-xs mt-1">{founderErrors.industry}</p>}
                </div>
                <div>
                  <div className="text-[#23262F] text-[16px] font-normal mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Select up to 5 topics that your Startup relates to:
                  </div>
                  <div className="mb-2">
                    <FounderInterestsSelector />
                  </div>
                  {founderErrors.interests && <p className="text-red-500 text-xs mt-1">{founderErrors.interests}</p>}
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
                    className={`px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8] ${founderInterests.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    disabled={founderInterests.length === 0}
                    onClick={() => {
                      const errors = {};
                      if (!founderIdea.name.trim()) errors.name = 'Business Name is required';
                      if (!founderIdea.industry.trim()) errors.industry = 'Industry is required';
                      if (founderInterests.length === 0) errors.interests = 'Select at least 1 interest';
                      setFounderErrors(errors);
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
          <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/people%20computer.png" alt="Tell us about your Startup" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Build Your Legacy</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Every successful startup begins with a clear vision. Tell us about your venture and the industry you're disrupting so we can provide the right support for your journey.
            </div>
          </div>
        </div>
      )}
      {/* Step 4: Startup Details Step 4 */}
      {step === 4 && selected === 'founder' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Startup Details Step 4 */}
                      <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
              <div className="max-w-lg mx-auto w-full">
                <StepBar step={4} totalSteps={10} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Startup Progress & Details</div>
              <form className="space-y-6 w-full">
                {/* 1. What stage best describes your startup? */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    What stage best describes your startup?
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Concept / Ideation', 'Prototype / MVP', 'Early Revenue', 'Growth / Scaling'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderStage" value={opt} checked={founderStage === opt} onChange={() => setFounderStage(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* 1.2 How long have you been working on this startup? */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    How long have you been working on this startup?
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Less than 1 month', '1–6 months', '6–12 months', 'More than 1 year'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderDuration" value={opt} checked={founderDuration === opt} onChange={() => setFounderDuration(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* 1.3 What is your current business model? (Optional) */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    What is your current business model? <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>(Optional)</span>
                  </div>
                  <input
                    type="text"
                    value={founderBusinessModel}
                    onChange={e => setFounderBusinessModel(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    placeholder="E.g., Subscription, B2B SaaS, Commission, Freemium, etc."
                  />
                </div>
                {/* 1.4 Is your product currently live or in development? */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    Is your product currently live or in development?
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Fully live', 'Private beta', 'Prototype / MVP testing', 'In development'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderProductStatus" value={opt} checked={founderProductStatus === opt} onChange={() => setFounderProductStatus(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Product/Website/Pitch Deck Upload Section */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    Product/Website/Pitch Deck/Video <span className="text-gray-400">(Optional)</span>
                  </div>
                  
                  {/* Upload Method Toggle */}
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      onClick={() => setFounderPitchDeckUploadMethod('file')}
                      className={`px-4 py-2 rounded-md border transition-all ${
                        founderPitchDeckUploadMethod === 'file' 
                          ? 'bg-[#41E5FF] text-white border-[#41E5FF]' 
                          : 'bg-white text-[#23262F] border-[#DEE3EB] hover:border-[#41E5FF]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400 }}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={() => setFounderPitchDeckUploadMethod('link')}
                      className={`px-4 py-2 rounded-md border transition-all ${
                        founderPitchDeckUploadMethod === 'link' 
                          ? 'bg-[#41E5FF] text-white border-[#41E5FF]' 
                          : 'bg-white text-[#23262F] border-[#DEE3EB] hover:border-[#41E5FF]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400 }}
                    >
                      Share Link
                    </button>
                  </div>

                  {founderPitchDeckUploadMethod === 'file' ? (
                    <div>
                      {/* File Upload Area */}
                      <div
                        onDragOver={handleFounderPitchDeckDragOver}
                        onDragLeave={handleFounderPitchDeckDragLeave}
                        onDrop={handleFounderPitchDeckDrop}
                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer ${
                          founderIsDragOver 
                            ? 'border-[#41E5FF] bg-[#F7FCFF]' 
                            : 'border-[#DEE3EB] bg-[#F7F9FB] hover:border-[#41E5FF] hover:bg-[#F7FCFF]'
                        }`}
                        onClick={() => document.getElementById('founder-pitch-deck-upload')?.click()}
                      >
                        <input
                          id="founder-pitch-deck-upload"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov,.ppt,.pptx"
                          onChange={handleFounderPitchDeckFileInputChange}
                          className="hidden"
                        />
                        
                        {founderPitchDeckFile ? (
                          <div className="space-y-2">
                            <div className="text-green-600">
                              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="text-[#23262F] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {founderPitchDeckFile.name}
                            </div>
                            <div className="text-[#6B7280] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {(founderPitchDeckFile.size / 1024 / 1024).toFixed(2)} MB
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFounderPitchDeckFile(null);
                              }}
                              className="text-[#41E5FF] text-sm hover:underline"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Remove file
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="text-[#6B7280]">
                              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                            </div>
                            <div className="text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 500 }}>
                              Drop your files here or click to browse
                            </div>
                            <div className="text-[#6B7280] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Supported formats: PDF, JPG, PNG, MP4, MOV, PPT, PPTX (Max 50MB)
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="url"
                        placeholder="Paste your website URL, Google Drive link, or any other relevant link"
                        value={founderPitchDeckLink}
                        onChange={(e) => setFounderPitchDeckLink(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      />
                      <div className="text-[#6B7280] text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Make sure your link is publicly accessible or set to "Anyone with the link can view"
                      </div>
                    </div>
                  )}
                </div>
                {/* Navigation Buttons */}
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
          <div className="w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/images/jumping%20people.png" alt="Startup Progress & Growth" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Track Your Progress</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Understanding where you are in your startup journey helps us provide the most relevant resources and support tailored to your current stage.
            </div>
          </div>
        </div>
      )}
      {/* Step 5: Startup Challenges Step 5 */}
      {step === 5 && selected === 'founder' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Startup Challenges Step 5 */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
                              <StepBar step={5} totalSteps={10} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Startup Challenges & Approaches</div>
              <form className="space-y-6 w-full">
                {/* 2.1 Top 3 challenges */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    What are the top 3 challenges you're currently facing? <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>(Choose up to 3)</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {FOUNDER_CHALLENGES.map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input
                          type="checkbox"
                          name="founderChallenges"
                          value={opt}
                          checked={founderChallenges.includes(opt)}
                          onChange={e => {
                            if (e.target.checked) {
                              if (founderChallenges.length < 3) setFounderChallenges([...founderChallenges, opt]);
                            } else {
                              setFounderChallenges(founderChallenges.filter(c => c !== opt));
                            }
                          }}
                          disabled={!founderChallenges.includes(opt) && founderChallenges.length >= 3 && opt !== 'Others'}
                          className="accent-[#41E5FF]"
                        />
                        <span>{opt}</span>
                        {opt === 'Others' && founderChallenges.includes('Others') && (
                          <input
                            type="text"
                            value={founderOtherChallenge}
                            onChange={e => setFounderOtherChallenge(e.target.value)}
                            className="ml-2 px-3 py-2 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F] min-w-[180px]"
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                            placeholder="Please specify"
                          />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2.3 Approaches (multi-select) */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    How are you currently trying to solve these challenges? <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>(Select all that apply)</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {FOUNDER_APPROACHES.map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input
                          type="checkbox"
                          name="founderApproaches"
                          value={opt}
                          checked={founderApproaches.includes(opt)}
                          onChange={e => {
                            if (e.target.checked) {
                              setFounderApproaches([...founderApproaches, opt]);
                            } else {
                              setFounderApproaches(founderApproaches.filter(a => a !== opt));
                            }
                          }}
                          className="accent-[#41E5FF]"
                        />
                        <span>{opt}</span>
                        {opt === 'Using startup platforms or communities' && founderApproaches.includes(opt) && (
                          <input
                            type="text"
                            value={founderPlatformName}
                            onChange={e => setFounderPlatformName(e.target.value)}
                            className="ml-2 px-3 py-2 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F] min-w-[180px]"
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                            placeholder="Platform name (optional)"
                          />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
                {/* 2.4 Satisfaction (single select) */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    How satisfied are you with your current approach?
                  </div>
                  <div className="flex flex-col gap-2">
                    {FOUNDER_SATISFACTION.map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderSatisfaction" value={opt} checked={founderSatisfaction === opt} onChange={() => setFounderSatisfaction(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Navigation Buttons */}
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
                onClick={() => setStep(6)}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
                      {/* Right: Illustration */}
            <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
              <img src="/images/Challenges%20and%20approaches.png" alt="Startup Challenges & Approaches" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Conquer Every Challenge</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Every founder faces unique obstacles on their journey. Share your current challenges and how you're tackling them so we can provide the most relevant support and resources.
            </div>
          </div>
        </div>
      )}
      {/* Step 6: Past Startup Experience */}
      {step === 6 && selected === 'founder' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Past Startup Experience Step 6 */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={6} totalSteps={10} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Past Startup Experience</div>
              <form className="space-y-6 w-full">
                {/* Have you previously built or worked with a startup? */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    Have you previously built or worked with a startup?
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderHasPastExp" value={opt} checked={founderHasPastExp === opt} onChange={() => setFounderHasPastExp(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Conditional fields if "Yes" is selected */}
                {founderHasPastExp === 'Yes' && (
                  <>
                    {/* Name of the startup */}
                    <div>
                      <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Name of the startup:</label>
                      <input
                        type="text"
                        value={founderPastExpDetails.name}
                        onChange={e => setFounderPastExpDetails(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      />
                    </div>
                    
                    {/* Your role in the startup */}
                    <div>
                      <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Your role in the startup:</label>
                      <input
                        type="text"
                        value={founderPastExpDetails.role}
                        onChange={e => setFounderPastExpDetails(prev => ({ ...prev, role: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      />
                    </div>
                    
                    {/* What did the startup do */}
                    <div>
                      <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>What did the startup do? (Sector / Product / Service):</label>
                      <input
                        type="text"
                        value={founderPastExpDetails.sector}
                        onChange={e => setFounderPastExpDetails(prev => ({ ...prev, sector: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      />
                    </div>
                    
                    {/* Which stage did it reach */}
                    <div>
                      <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Which stage did it reach?</label>
                      <select
                        value={founderPastExpDetails.stage}
                        onChange={e => setFounderPastExpDetails(prev => ({ ...prev, stage: e.target.value }))}
                        className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      >
                        <option value="">Select stage</option>
                        {PAST_STARTUP_STAGES.map(stage => (
                          <option key={stage} value={stage}>{stage}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
                
                {/* Navigation Buttons */}
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
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(7)}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/assets/signup-illustration.png" alt="Step illustration" className="max-w-lg w-full mb-8" />
          </div>
        </div>
      )}
      {/* Step 7: Team & Roles */}
      {step === 7 && selected === 'founder' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Team & Roles Step 7 */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
                              <StepBar step={7} totalSteps={10} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Team & Roles</div>
              <form className="space-y-6 w-full">
                {/* 3.1 Solo/team status */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    Are you a solo founder or do you have a team?
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Solo founder', 'Small team (2–5 members)', 'Growing team (6–15 members)', 'Established team (15+ members)'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderTeamStatus" value={opt} checked={founderTeamStatus === opt} onChange={() => setFounderTeamStatus(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* 3.2 Missing roles (short answer) */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    What key roles or skillsets are you missing in your team? <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>(Optional)</span>
                  </div>
                  <input
                    type="text"
                    value={founderMissingRoles}
                    onChange={e => setFounderMissingRoles(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    placeholder="E.g., Tech co-founder, UI/UX designer, digital marketer, operations lead, legal advisor, etc."
                  />
                </div>
                {/* 3.3 Team confidence (single select) */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    How confident are you in your current team's ability to execute your vision?
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      "Extremely confident — we're aligned and moving fast",
                      'Confident — but still need a few more key hires',
                      'Neutral — still figuring out roles and responsibilities',
                      'Not confident — major team gaps exist',
                      "Not applicable — I'm currently solo",
                    ].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderTeamConfidence" value={opt} checked={founderTeamConfidence === opt} onChange={() => setFounderTeamConfidence(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Navigation Buttons */}
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(6)}
              >
                    Previous
              </button>
              <button
                type="button"
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(8)}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex flex-col items-center justify-center bg-[#F7F9FB] text-center">
            <img src="/assets/signup-illustration.png" alt="Step illustration" className="max-w-lg w-full mb-8" />
          </div>
        </div>
      )}

      {/* Step 8: Motivation & Goals (Founder) */}
      {step === 8 && selected === 'founder' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Motivation & Goals */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
              <StepBar step={8} totalSteps={10} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Motivation & Goals</div>
              <form className="space-y-6 w-full">
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Why did you start this startup?</label>
                  <textarea
                    name="founderMotivationStep"
                    value={founderMotivationStep}
                    onChange={e => setFounderMotivationStep(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    rows={3}
                    placeholder="Share your motivation, vision, or personal story."
                  />
              </div>
                <div>
                  <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>What do you hope to achieve in the next 6 months?</label>
                  <textarea
                    name="founderGoalsStep"
                    value={founderGoalsStep}
                    onChange={e => setFounderGoalsStep(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    rows={3}
                    placeholder="E.g., scale product, raise funding, expand team, etc."
                  />
            </div>
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(7)}>Previous</button>
                  <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => {
                    // No validation needed for Motivation & Goals step - it's optional
                    setStep(9);
                  }}>Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          </div>
              </form>
            </div>
          </div>
          {/* Right: Illustration (hidden on mobile) */}
          <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
            <img src="/images/idea.png" alt="Motivation & Goals" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Drive Your Success</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Your motivation and goals are the foundation of your startup journey. Share what drives you and what you aim to accomplish in the coming months.
            </div>
          </div>
        </div>
      )}

      {/* Step 9: Goals & Funding (Founder) */}
      {step === 9 && selected === 'founder' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Goals & Funding Step 9 */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full">
                              <StepBar step={9} totalSteps={10} />
              <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Goals & Funding</div>
              <form className="space-y-6 w-full">
                {/* 4.1 Top 3 goals (paragraph input) */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    What are your top 3 goals for the next 6 months?
                  </div>
                  <textarea
                    value={founderGoals}
                    onChange={e => setFounderGoals(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F] resize-none"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                    placeholder='E.g., "Launch MVP", "Get 100 paying users", "Raise seed round"'
                  />
                </div>
                {/* 4.2 Launch/scale timeline (single select) */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    When do you plan to launch or scale your startup?
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Within 1 month', '1-2 months', 'Under 3 months'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderLaunchPlan" value={opt} checked={founderLaunchPlan === opt} onChange={() => setFounderLaunchPlan(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* 4.3 Funding requirement (single select) */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    Do you have a funding requirement at this stage?
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Not right now', 'Exploring options', 'Actively looking for funding', 'Already raised capital'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderFunding" value={opt} checked={founderFunding === opt} onChange={() => setFounderFunding(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* 4.4 Personal Investment */}
                <div>
                  <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                    Have you invested any of your own money into your current startup?
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                        <input type="radio" name="founderPersonalInvestment" value={opt} checked={founderPersonalInvestment === opt} onChange={() => setFounderPersonalInvestment(opt)} className="accent-[#41E5FF]" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Conditional: Investment details if "Yes" */}
                {founderPersonalInvestment === 'Yes' && (
                  <div>
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                      If yes, please mention the approximate amount and its utilization:
                    </div>
                    <textarea
                      value={founderInvestmentDetails}
                      onChange={e => setFounderInvestmentDetails(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] text-[#23262F] resize-none"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                      placeholder="E.g., ₹1.5 lakhs for MVP development, initial marketing, legal setup, etc."
                    />
                  </div>
                )}
                {/* Navigation Buttons */}
                <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                                    onClick={() => setStep(8)}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setStep(10)}
                  >
                    Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
                {submitError && (
                  <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
                      {/* Right: Illustration */}
            <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
              <img src="/images/building%20blocks.png" alt="Goals & Funding" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Chart Your Course</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Define your strategic goals and funding roadmap. Help us understand your vision and timeline so we can connect you with the right resources and opportunities to scale your startup.
            </div>
          </div>
        </div>
      )}

      {/* Final step for Early-Stage Founder WhatsApp community */}
      {step === 10 && selected === 'founder' && (
        <div className="flex w-full min-h-screen">
          {/* Left: Thank You Message */}
          <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
            <div className="max-w-lg mx-auto w-full text-center">
              <div className="mb-6">
                <svg width="80" height="80" fill="none" viewBox="0 0 80 80" className="mx-auto mb-4">
                  <circle cx="40" cy="40" r="40" fill="#22CCB2"/>
                  <path d="M25 40l10 10 20-20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-archivo font-semibold text-[32px] md:text-[40px] mb-4 text-[#23262F]">Thank You for Submitting!</h2>
              <p className="font-inter text-[18px] text-[#23262F] mb-6 max-w-lg">Your information has been successfully submitted. Now, join the IdeaAscend Founder Community!</p>
              <p className="font-inter text-[16px] text-[#6B7280] mb-8 max-w-lg">Connect with other early-stage founders, share your journey, and get support as you build your startup. Our WhatsApp community is the perfect place to network, learn, and grow together.</p>
              <button
                onClick={async () => {
                  await handleFormSubmit();
                  window.open('https://chat.whatsapp.com/DiCkLNcqbEA16jTKEjKQxx', '_blank');
                }}
                className="px-10 py-4 rounded-[10px] bg-[#22CCB2] text-white font-semibold text-lg shadow-lg transition-all hover:bg-[#1CA88F] flex items-center gap-3 justify-center"
              >
                Join IdeaAscend Founder Community
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
                      {/* Right: Jumping People Image */}
            <div className="hidden md:flex w-full md:w-1/2 px-4 md:px-8 py-6 md:py-10 flex-col items-center justify-center bg-[#F7F9FB] text-center">
              <img src="/images/jumping%20people.png" alt="Community celebration" className="max-w-lg w-full mb-8" />
            <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Scale New Heights!</div>
            <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
              Join an elite network of ambitious founders who are scaling innovative startups. Together, we'll conquer challenges and celebrate victories!
            </div>
          </div>
        </div>
      )}
      {step === 'success' && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Thank you for your submission!</h2>
          <p className="text-lg">Your business form has been received (frontend-only demo).</p>
        </div>
      )}
    </div>
  </>
  );
} 