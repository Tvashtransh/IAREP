'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomSelect from '../components/CustomSelect.jsx';


// Type for dropdown options
interface OptionType {
  value: string;
  label: string;
}

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

const INTEREST_OPTIONS = [
  'AI/ML', 'Fintech', 'EdTech', 'HealthTech', 'SaaS Tools', 'ClimateTech', 'AgriTech', 'Social Impact', 'E-commerce', 'Gaming', 'Cybersecurity', 'Mobility/EV', 'SpaceTech', 'FashionTech', 'FoodTech', 'Creator Tools', 'AdTech', 'B2B/Enterprise', 'HRTech', 'TravelTech', 'Web3/Blockchain', 'Media & News', 'Sports/Fitness', 'UX/UI Design', 'Networking Platforms',
];

// Dropdown options for pitch form
const STAGE_OPTIONS: OptionType[] = [
  { value: 'idea', label: 'Idea Stage' },
  { value: 'prototype', label: 'Prototype' },
  { value: 'mvp', label: 'MVP' },
  { value: 'early-revenue', label: 'Early Revenue' },
  { value: 'scaling', label: 'Scaling' }
];

const TEAM_SIZE_OPTIONS: OptionType[] = [
  { value: 'solo', label: 'Solo (Just me)' },
  { value: '2-3', label: '2-3 people' },
  { value: '4-10', label: '4-10 people' },
  { value: '10+', label: '10+ people' }
];

const REVENUE_STATUS_OPTIONS: OptionType[] = [
  { value: 'pre-revenue', label: 'Pre-Revenue' },
  { value: '0-1l', label: '₹0-1 Lakh' },
  { value: '1-5l', label: '₹1-5 Lakhs' },
  { value: '5-25l', label: '₹5-25 Lakhs' },
  { value: '25l+', label: '₹25 Lakhs+' }
];

const BUSINESS_MODEL_OPTIONS: OptionType[] = [
  { value: 'subscription', label: 'Subscription' },
  { value: 'freemium', label: 'Freemium' },
  { value: 'marketplace', label: 'Marketplace' },
  { value: 'saas', label: 'SaaS' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'advertising', label: 'Advertising' },
  { value: 'transaction', label: 'Transaction-based' },
  { value: 'other', label: 'Other' }
];

function InterestsSelectorAspiring({ aspiringInterests, setAspiringInterests }: { aspiringInterests: string[]; setAspiringInterests: (v: string[]) => void }) {
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

function FounderInterestsSelector({ founderInterests, setFounderInterests }: { founderInterests: string[]; setFounderInterests: (v: string[]) => void }) {
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

// Constants for form options (add these near the top after imports)
const ASPIRING_CHALLENGES = [
  'Finding the right co-founder or team',
  'Validating my startup idea',
  'Building an MVP or prototype',
  'Understanding my target market',
  'Getting initial funding or investment',
  'Learning business and entrepreneurship skills',
  'Networking and finding mentors',
  'Managing time between idea and other commitments'
];

const ASPIRING_APPROACHES = [
  "Reading books, blogs, or online resources",
  "Taking online courses or attending workshops",
  "Networking at events or meetups",
  "Using existing platforms or communities",
  "Working with a mentor or advisor",
  "Joining an accelerator or incubator program",
  "Learning by trial and error",
  "Not actively addressing these challenges yet"
];

const ASPIRING_SATISFACTION = [
  "Very satisfied — making great progress",
  "Somewhat satisfied — seeing some progress",
  "Neutral — mixed results",
  "Somewhat dissatisfied — limited progress",
  "Very dissatisfied — not making progress"
];

const ASPIRING_TIMELINES = [
  "Within 3 months",
  "3-6 months",
  "6-12 months",
  "More than a year",
  "I'm still exploring and not sure"
];

const ASPIRING_LOOKING_FOR = [
  "Co-founder matching",
  "Mentorship and guidance",
  "Funding and investment opportunities",
  "Networking with like-minded entrepreneurs",
  "Access to resources and tools",
  "Skill development and learning",
  "Market validation support",
  "Technical development help"
];

const ASCENDTHON_OPTIONS = [
  "Yes, very interested",
  "Maybe, I'd like to learn more",
  "No, not interested right now"
];

const PAST_STARTUP_STAGES = [
  "Ideation phase",
  "MVP/Prototype development",
  "Early revenue generation",
  "Growth phase",
  "Exit (acquisition/IPO)",
  "Failed/Shut down"
];

const FOUNDER_SUPPORT_OPTIONS = [
  "Mentorship and strategic guidance",
  "Access to funding and investors",
  "Networking opportunities",
  "Technical development support",
  "Marketing and growth strategies",
  "Operational and legal guidance",
  "Access to talent and hiring",
  "Others"
];

export default function PitchPage() {
  const [showForm, setShowForm] = useState(false);
  // Add these lines for modal state
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
  const [userErrors, setUserErrors] = useState<any>({});
  const [aspiringIdea, setAspiringIdea] = useState({ name: '', industry: '' });
  const [aspiringErrors, setAspiringErrors] = useState<any>({});
  const [aspiringInterests, setAspiringInterests] = useState<string[]>([]);
  const [aspiringDuration, setAspiringDuration] = useState('');
  const [aspiringValidation, setAspiringValidation] = useState('');
  const [aspiringPrototype, setAspiringPrototype] = useState('');
  const [aspiringHasBusiness, setAspiringHasBusiness] = useState('');
  const [aspiringPitchDeckUploadMethod, setAspiringPitchDeckUploadMethod] = useState('file');
  const [aspiringIsDragOver, setAspiringIsDragOver] = useState(false);
  const [aspiringPitchDeckFile, setAspiringPitchDeckFile] = useState<File | null>(null);
  const [aspiringPitchDeckLink, setAspiringPitchDeckLink] = useState('');
  const [aspiringHasTeam, setAspiringHasTeam] = useState('');
  const [aspiringSkills, setAspiringSkills] = useState('');
  const [aspiringChallenge, setAspiringChallenge] = useState('');
  const [aspiringMotivation, setAspiringMotivation] = useState('');
  const [aspiringGoals, setAspiringGoals] = useState('');
  const [aspiringConsent, setAspiringConsent] = useState(false);
  const [founderIdea, setFounderIdea] = useState({ name: '', industry: '' });
  const [founderErrors, setFounderErrors] = useState<any>({});
  const [founderInterests, setFounderInterests] = useState<string[]>([]);
  const [founderStage, setFounderStage] = useState('');
  const [founderDuration, setFounderDuration] = useState('');
  const [founderBusinessModel, setFounderBusinessModel] = useState('');
  const [founderProductStatus, setFounderProductStatus] = useState('');
  const [founderPitchDeckFile, setFounderPitchDeckFile] = useState<File | null>(null);
  const [founderPitchDeckUploadMethod, setFounderPitchDeckUploadMethod] = useState('file');
  const [founderIsDragOver, setFounderIsDragOver] = useState(false);
  const [founderPitchDeckLink, setFounderPitchDeckLink] = useState('');
  const [founderHasTeam, setFounderHasTeam] = useState('');
  const [founderSkills, setFounderSkills] = useState('');
  const [founderChallenge, setFounderChallenge] = useState('');
  const [founderMotivation, setFounderMotivation] = useState('');
  const [founderGoals, setFounderGoals] = useState('');
  const [founderConsent, setFounderConsent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [aspiringChallenges, setAspiringChallenges] = useState<string[]>([]);
  const [aspiringApproaches, setAspiringApproaches] = useState<string[]>([]);
  const [aspiringSatisfaction, setAspiringSatisfaction] = useState('');
  const [aspiringStep5Errors, setAspiringStep5Errors] = useState<any>({});
  const [aspiringPlatformName, setAspiringPlatformName] = useState('');
  const [aspiringTimeline, setAspiringTimeline] = useState('');
  const [aspiringLookingFor, setAspiringLookingFor] = useState<string[]>([]);
  const [aspiringTimelineSupport, setAspiringTimelineSupport] = useState('');
  const [aspiringAscendThon, setAspiringAscendThon] = useState('');
  const [aspiringStep6Errors, setAspiringStep6Errors] = useState<any>({});

  const [founderHasPastExp, setFounderHasPastExp] = useState('');
  const [founderPastExpDetails, setFounderPastExpDetails] = useState({
    name: '',
    role: '',
    sector: '',
    stage: ''
  });
  const [founderTeamStatus, setFounderTeamStatus] = useState('');
  const [founderMissingRoles, setFounderMissingRoles] = useState('');
  const [founderTeamConfidence, setFounderTeamConfidence] = useState('');
  const [founderLaunchPlan, setFounderLaunchPlan] = useState('');
  const [founderFunding, setFounderFunding] = useState('');
  const [founderPersonalInvestment, setFounderPersonalInvestment] = useState('');
  const [founderInvestmentDetails, setFounderInvestmentDetails] = useState('');
  const [founderSupport, setFounderSupport] = useState<string[]>([]);
  const [founderSupportOther, setFounderSupportOther] = useState('');
  const [founderContext, setFounderContext] = useState('');

  // Add state variables for Goals & Funding step
  const [goal1, setGoal1] = useState('');
  const [goal2, setGoal2] = useState('');
  const [goal3, setGoal3] = useState('');
  const [launchPlan, setLaunchPlan] = useState('');
  const [fundingRequirement, setFundingRequirement] = useState('');
  const [selfInvested, setSelfInvested] = useState('');

  // Add state for founder step 5
  const [founderChallenges, setFounderChallenges] = useState<string[]>([]);
  const [founderApproaches, setFounderApproaches] = useState<string[]>([]);
  const [founderSatisfaction, setFounderSatisfaction] = useState('');
  const [founderStep5Errors, setFounderStep5Errors] = useState<any>({});

  // Add state for founder step 6 (Timeline & Support)
  const [founderTimeline, setFounderTimeline] = useState('');
  const [founderLookingFor, setFounderLookingFor] = useState<string[]>([]);
  const [founderAscendThon, setFounderAscendThon] = useState('');
  const [founderStep6Errors, setFounderStep6Errors] = useState<any>({});

  // Role selection validation error state
  const [showRoleError, setShowRoleError] = useState(false);
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Add state for detailed idea/business description step
  const [aspiringIdeaDescription, setAspiringIdeaDescription] = useState('');
  const [aspiringIdeaDescriptionError, setAspiringIdeaDescriptionError] = useState('');
  const [aspiringIdeaDetailsStep, setAspiringIdeaDetailsStep] = useState({
    stage: '',
    team: '',
    revenue: '',
    targetAudience: '',
    businessModel: '',
    achievements: ''
  });
  const [aspiringIdeaDetailsStepErrors, setAspiringIdeaDetailsStepErrors] = useState<any>({});

  const [founderBusinessDescription, setFounderBusinessDescription] = useState('');
  const [founderBusinessDescriptionError, setFounderBusinessDescriptionError] = useState('');
  const [founderBusinessDetailsStep, setFounderBusinessDetailsStep] = useState({
    stage: '',
    team: '',
    revenue: '',
    targetAudience: '',
    businessModel: '',
    achievements: ''
  });
  const [founderBusinessDetailsStepErrors, setFounderBusinessDetailsStepErrors] = useState<any>({});

  // --- Form Submission Handler ---
  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const formData = {
        role: selected,
        userDetails,
        aspiringIdeaDescription,
        founderBusinessDescription,
        aspiringIdeaDetailsStep,
        founderBusinessDetailsStep,
        aspiringInterests,
        founderInterests,
        aspiringChallenges,
        founderChallenges,
        aspiringApproaches,
        founderApproaches,
        aspiringPlatformName,
        founderPlatformName: '', // Add if available
        aspiringSatisfaction,
        founderSatisfaction,
        aspiringTimeline,
        founderTimeline,
        aspiringLookingFor,
        founderLookingFor,
        aspiringAscendThon,
        founderAscendThon,
        aspiringPitchDeckFile,
        founderPitchDeckFile,
        aspiringPitchDeckLink,
        founderPitchDeckLink
      };

      const response = await fetch('/api/submit-pitch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
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

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
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

  // Validation and handlers for detailed idea description (aspiring)
  const validateAspiringIdeaDescription = () => {
    if (!aspiringIdeaDescription.trim()) {
      return 'Please describe your idea in detail';
    }
    const wordCount = aspiringIdeaDescription.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount > 300) {
      return 'Description must be 300 words or less';
    }
    return '';
  };

  const handleAspiringIdeaDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAspiringIdeaDescription(e.target.value);
    setAspiringIdeaDescriptionError('');
  };

  const validateAspiringIdeaDetailsStep = () => {
    const errors: any = {};
    if (!aspiringIdeaDetailsStep.stage.trim()) errors.stage = 'Current stage is required';
    if (!aspiringIdeaDetailsStep.team.trim()) errors.team = 'Team size is required';
    if (!aspiringIdeaDetailsStep.revenue.trim()) errors.revenue = 'Revenue status is required';
    if (!aspiringIdeaDetailsStep.targetAudience.trim()) errors.targetAudience = 'Target audience is required';
    if (!aspiringIdeaDetailsStep.businessModel.trim()) errors.businessModel = 'Business model is required';
    return errors;
  };

  const handleAspiringIdeaDetailsStepChange = (e: any) => {
    const { name, value } = e.target || e;
    setAspiringIdeaDetailsStep((prev: any) => ({ ...prev, [name]: value }));
    setAspiringIdeaDetailsStepErrors((prev: any) => ({ ...prev, [name]: '' }));
  };

  const handleAspiringIdeaDetailsSelectChange = (name: string, value: string) => {
    setAspiringIdeaDetailsStep((prev: any) => ({ ...prev, [name]: value }));
    setAspiringIdeaDetailsStepErrors((prev: any) => ({ ...prev, [name]: '' }));
  };

  // Validation and handlers for detailed business description (founder)
  const validateFounderBusinessDescription = () => {
    if (!founderBusinessDescription.trim()) {
      return 'Please describe your business in detail';
    }
    const wordCount = founderBusinessDescription.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount > 300) {
      return 'Description must be 300 words or less';
    }
    return '';
  };

  const handleFounderBusinessDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFounderBusinessDescription(e.target.value);
    setFounderBusinessDescriptionError('');
  };

  const validateFounderBusinessDetailsStep = () => {
    const errors: any = {};
    if (!founderBusinessDetailsStep.stage.trim()) errors.stage = 'Current stage is required';
    if (!founderBusinessDetailsStep.team.trim()) errors.team = 'Team size is required';
    if (!founderBusinessDetailsStep.revenue.trim()) errors.revenue = 'Revenue status is required';
    if (!founderBusinessDetailsStep.targetAudience.trim()) errors.targetAudience = 'Target audience is required';
    if (!founderBusinessDetailsStep.businessModel.trim()) errors.businessModel = 'Business model is required';
    return errors;
  };

  const handleFounderBusinessDetailsStepChange = (e: any) => {
    const { name, value } = e.target || e;
    setFounderBusinessDetailsStep((prev: any) => ({ ...prev, [name]: value }));
    setFounderBusinessDetailsStepErrors((prev: any) => ({ ...prev, [name]: '' }));
  };

  const handleFounderBusinessDetailsSelectChange = (name: string, value: string) => {
    setFounderBusinessDetailsStep((prev: any) => ({ ...prev, [name]: value }));
    setFounderBusinessDetailsStepErrors((prev: any) => ({ ...prev, [name]: '' }));
  };

  const handlePitchDeckFileUpload = (file: File, role: 'aspiring' | 'founder') => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'video/mp4', 'video/quicktime', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid file: PDF, JPG, PNG, MP4, MOV, PPT, or PPTX');
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      alert('File size must be less than 50MB');
      return;
    }
    if (role === 'aspiring') {
      setAspiringPitchDeckFile(file);
    } else {
      setFounderPitchDeckFile(file);
    }
  };

  const handleAspiringDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setAspiringIsDragOver(true);
  };

  const handleAspiringDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setAspiringIsDragOver(false);
  };

  const handleAspiringDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setAspiringIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handlePitchDeckFileUpload(files[0], 'aspiring');
    }
  };

  const handleFounderDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setFounderIsDragOver(true);
  };

  const handleFounderDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setFounderIsDragOver(false);
  };

  const handleFounderDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFounderIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handlePitchDeckFileUpload(files[0], 'founder');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Combined Navigation and Hero Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <a href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors" style={{ marginLeft: '-200px' }}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-archivo">
              Pitch in Front of Investors
            </h1>
            <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
              Looking to raise money for your idea?
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-inter leading-relaxed max-w-6xl mx-auto" style={{ marginBottom: '100px' }}>
            We give you a chance to present your idea to investors who are looking to support new startups. If they like it, they might fund you or help you grow. From sharpening your story to handling investor questions, we guide you every step of the way.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Half - Our Process Steps */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo">
                Our Process
              </h2>
              <p className="text-lg text-gray-700 font-inter mb-8">
                We follow a step-by-step approach to help you become pitch-ready:
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    1. Submit Your Application
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Founders submit a short overview of their idea and startup stage. No traction required—we look for potential and clarity.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    2. Validation and Review
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Each selected startup is reviewed by our platform and mentors to assess market fit, feasibility, and strengths.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    3. Pitch Deck and Story Preparation
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    We work with you to structure your business story, create a compelling deck, and refine your messaging.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    4. Mentorship and Pitch Practice
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    You'll participate in private sessions with mentors to rehearse your pitch and improve based on detailed feedback.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    5. Pitch to Investors
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    On Pitch Day, you will present your startup to investors who are actively exploring early-stage opportunities.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Half - Pitch Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <img 
                  src="/images/Blogs/pitch.png" 
                  alt="Pitch" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-700 font-inter leading-relaxed mb-12">
            This is your opportunity to move from planning to pitching on a serious stage built for emerging founders. Let us help you tell your story and open the right doors.
          </p>
          <div className="bg-gradient-to-r from-[#41E5FF]/10 to-[#22CCB2]/10 rounded-2xl p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
              Introducing: IdeaAscend PitchWeek 2025
            </h2>
            <p className="text-xl text-gray-700 font-inter mb-8">
              Your chance to pitch in front of seasoned investors.
            </p>
            <p className="text-base text-gray-700 font-inter leading-relaxed mb-8">
              PitchWeek is our flagship initiative where we select 10 promising startups, help them validate their ideas, refine their business model, and prepare their pitch for investors. Over a focused period, we work closely with each startup to make sure they are ready to present their business in the best possible way.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">Selected founders will:</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-gray-700 font-inter">Validate their startup idea with structured guidance</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-gray-700 font-inter">Get help creating a clear and compelling pitch deck</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-gray-700 font-inter">Attend private mentoring and pitch training sessions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-gray-700 font-inter">Present their startup to a panel of experienced investors</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-gray-700 font-inter">Receive feedback, funding opportunities, and long-term support</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 font-inter font-medium mb-6">
              This is your opportunity to move from planning to pitching—on a serious stage built for emerging founders.
            </p>
            <div className="text-center">
              <button 
                onClick={() => setShowForm(true)}
                className="inline-flex items-center px-8 py-4 bg-[#41E5FF] text-white text-lg font-medium font-inter rounded-lg hover:bg-[#22CCB2] transition-colors"
                type="button"
              >
                Register your startup for IdeaAscend PitchWeek 2025
              </button>
            </div>
          </div>
            </div>
      </article>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-auto"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full bg-white overflow-auto"
            >
              {/* --- FULL MULTI-STEP FORM FOR BOTH FLOWS STARTS HERE --- */}
              {/* Role Selection Step */}
              {step === 1 && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Role Selection */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-between">
                    <div>
                      <div className="flex items-center mb-8">
                        <button
                          onClick={() => setShowForm(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <StepBar step={1} totalSteps={selected === 'aspiring' ? 9 : selected === 'founder' ? 9 : 5} />
                      <div className="text-2xl font-bold text-[#23262F] mb-2 mt-[45px]">Which best describes you?</div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-8 justify-center">
                      {OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setSelected(opt.value);
                            setShowRoleError(false);
                          }}
                          className={`flex flex-col items-center justify-center rounded-[10px] border transition-all text-center shadow-sm bg-white w-full md:w-[234px] h-[180px] md:h-[296px] p-0
                            ${selected === opt.value ? 'border-[#41E5FF] shadow-lg' : 'border-[#DEE3EB]'}
                            hover:border-[#41E5FF] hover:bg-[#F7FCFF]`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <div className="mb-4">{opt.icon}</div>
                          <span className="text-[#23262F] text-[16px] font-normal leading-snug px-4">{opt.label}</span>
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
                    <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                      <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(1)}>Previous</button>
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
                    <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-white text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/Blogs/pitch.png" alt="Pitch to Investors" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Welcome to Idea Ascend</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Choose your role to get started on your entrepreneurial journey. We'll personalize your experience based on your selection.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 1 for Aspiring Entrepreneur */}
              {step === 2 && selected === 'aspiring' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Form */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={2} totalSteps={9} />
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
                  {/* Right: Illustration */}
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-white text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/Blogs/team.png" alt="User Profile Setup" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Your Input Drives Our Platform</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Welcome to Idea Ascend—the platform where ideas rise into reality. Let's begin with your basic information so we can better understand and serve your entrepreneurial vision.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 1 for Early-Stage Founder */}
              {step === 2 && selected === 'founder' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Form */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={2} totalSteps={9} />
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
                  {/* Right: Illustration */}
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/filling.png" alt="Step illustration" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Your Input Drives Our Platform</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Welcome to Idea Ascend—the platform where ideas rise into reality. Let's begin with your basic information so we can better understand and serve your entrepreneurial vision.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 3 for Aspiring Entrepreneur */}
              {step === 3 && selected === 'aspiring' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Aspiring Idea Info */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                                              <StepBar step={3} totalSteps={9} />
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
                            <InterestsSelectorAspiring aspiringInterests={aspiringInterests} setAspiringInterests={setAspiringInterests} />
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
                              const errors: any = {};
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
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-white text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/Blogs/submit idea.png" alt="Tell us about your idea" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Share Your Vision</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Every great startup begins with a powerful idea. Tell us about your business concept and the industry you're passionate about transforming.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 3 for Early-Stage Founder */}
              {step === 3 && selected === 'founder' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Idea Info */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={3} totalSteps={9} />
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
                            <FounderInterestsSelector founderInterests={founderInterests} setFounderInterests={setFounderInterests} />
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
                              const errors: any = {};
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
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-white text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/Blogs/ecosystem.png" alt="Tell us about your Startup" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Build Your Legacy</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Every successful startup begins with a clear vision. Tell us about your venture and the industry you're disrupting so we can provide the right support for your journey.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 4 for Aspiring Entrepreneur - Tell us more about your idea */}
              {step === 4 && selected === 'aspiring' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Form */}
                  <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={4} totalSteps={9} />
                      <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Tell us more about your idea</div>
                      <form className="space-y-4 w-full">
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>
                            Describe your idea in detail (Max 300 words). This would help us understand your idea better
                          </label>
                          <textarea 
                            value={aspiringIdeaDescription} 
                            onChange={handleAspiringIdeaDescriptionChange} 
                            rows={6}
                            className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] resize-none" 
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                            placeholder="Explain your startup idea, what problem it solves, how it works, what makes it unique, and your vision for the future..."
                          />
                          {aspiringIdeaDescriptionError && <p className="text-red-500 text-xs mt-2">{aspiringIdeaDescriptionError}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Current Stage</label>
                          <CustomSelect
                            name="stage"
                            value={STAGE_OPTIONS.find(opt => opt.value === aspiringIdeaDetailsStep.stage) || null}
                            onChange={val => handleAspiringIdeaDetailsStepChange({ target: { name: 'stage', value: val } })}
                            placeholder="Select Stage"
                            options={STAGE_OPTIONS}
                          />
                          {aspiringIdeaDetailsStepErrors.stage && <p className="text-red-500 text-xs mt-1">{aspiringIdeaDetailsStepErrors.stage}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Team Size</label>
                          <CustomSelect
                            name="team"
                            value={TEAM_SIZE_OPTIONS.find(opt => opt.value === aspiringIdeaDetailsStep.team) || null}
                            onChange={val => handleAspiringIdeaDetailsStepChange({ target: { name: 'team', value: val } })}
                            placeholder="Select Team Size"
                            options={TEAM_SIZE_OPTIONS}
                          />
                          {aspiringIdeaDetailsStepErrors.team && <p className="text-red-500 text-xs mt-1">{aspiringIdeaDetailsStepErrors.team}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Revenue Status</label>
                          <CustomSelect
                            name="revenue"
                            value={REVENUE_STATUS_OPTIONS.find(opt => opt.value === aspiringIdeaDetailsStep.revenue) || null}
                            onChange={val => handleAspiringIdeaDetailsStepChange({ target: { name: 'revenue', value: val } })}
                            placeholder="Select Revenue Status"
                            options={REVENUE_STATUS_OPTIONS}
                          />
                          {aspiringIdeaDetailsStepErrors.revenue && <p className="text-red-500 text-xs mt-1">{aspiringIdeaDetailsStepErrors.revenue}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Target Audience</label>
                          <input
                            name="targetAudience" 
                            value={aspiringIdeaDetailsStep.targetAudience} 
                            onChange={handleAspiringIdeaDetailsStepChange} 
                            className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                            placeholder="e.g., College students, Small businesses"
                          />
                          {aspiringIdeaDetailsStepErrors.targetAudience && <p className="text-red-500 text-xs mt-1">{aspiringIdeaDetailsStepErrors.targetAudience}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Business Model</label>
                          <CustomSelect
                            name="businessModel"
                            value={BUSINESS_MODEL_OPTIONS.find(opt => opt.value === aspiringIdeaDetailsStep.businessModel) || null}
                            onChange={val => handleAspiringIdeaDetailsStepChange({ target: { name: 'businessModel', value: val } })}
                            placeholder="Select Business Model"
                            options={BUSINESS_MODEL_OPTIONS}
                          />
                          {aspiringIdeaDetailsStepErrors.businessModel && <p className="text-red-500 text-xs mt-1">{aspiringIdeaDetailsStepErrors.businessModel}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Key Achievements <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>(Optional)</span></label>
                          <textarea 
                            name="achievements" 
                            value={aspiringIdeaDetailsStep.achievements} 
                            onChange={handleAspiringIdeaDetailsStepChange} 
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
                              const descriptionError = validateAspiringIdeaDescription();
                              const fieldErrors = validateAspiringIdeaDetailsStep();
                              setAspiringIdeaDescriptionError(descriptionError);
                              setAspiringIdeaDetailsStepErrors(fieldErrors);
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

              {/* Step 5 for Aspiring Entrepreneur - Idea Validation */}
              {step === 5 && selected === 'aspiring' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Idea Validation */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                                              <StepBar step={5} totalSteps={9} />
                      <div className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Idea Validation</div>
                      <form className="space-y-6 w-full">
                        {/* How long they've been working on the idea */}
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            How long have you been working on this idea?
                          </div>
                          <div className="flex flex-col gap-2">
                            {ASPIRING_TIMELINES.map(opt => (
                              <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input type="radio" name="aspiringTimeline" value={opt} checked={aspiringTimeline === opt} onChange={() => setAspiringTimeline(opt)} className="accent-[#41E5FF]" />
                                <span>{opt}</span>
                              </label>
                            ))}
                          </div>
                          {aspiringStep6Errors.timeline && <p className="text-red-500 text-xs mt-1">{aspiringStep6Errors.timeline}</p>}
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
                        {/* Optional product/website/pitch deck upload or link */}
                        <div>
                          <label className="block text-[#23262F] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>
                            Product/Website/Pitch Deck/Video <span className="text-gray-400">(Optional)</span>
                          </label>
                          {/* Toggle Buttons */}
                          <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
                            <button
                              type="button"
                              onClick={() => setAspiringPitchDeckUploadMethod('file')}
                              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                                aspiringPitchDeckUploadMethod === 'file'
                                  ? 'bg-white text-[#41E5FF] shadow-sm'
                                  : 'text-gray-600 hover:text-gray-800'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Upload File
                            </button>
                            <button
                              type="button"
                              onClick={() => setAspiringPitchDeckUploadMethod('link')}
                              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                                aspiringPitchDeckUploadMethod === 'link'
                                  ? 'bg-white text-[#41E5FF] shadow-sm'
                                  : 'text-gray-600 hover:text-gray-800'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Share Link
                            </button>
                          </div>
                          {aspiringPitchDeckUploadMethod === 'file' ? (
                            <div>
                              {/* File Upload Area */}
                              <div
                                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                                  aspiringIsDragOver
                                    ? 'border-[#41E5FF] bg-blue-50'
                                    : 'border-gray-300 hover:border-[#41E5FF]'
                                }`}
                                onDragOver={handleAspiringDragOver}
                                onDragLeave={handleAspiringDragLeave}
                                onDrop={handleAspiringDrop}
                              >
                                <input
                                  type="file"
                                  id="aspiringPitchDeckFile"
                                  accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov,.ppt,.pptx"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handlePitchDeckFileUpload(file, 'aspiring');
                                  }}
                                  className="hidden"
                                />
                                {aspiringPitchDeckFile ? (
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-center text-green-600">
                                      <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      File uploaded successfully!
                                    </div>
                                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                      {aspiringPitchDeckFile.name} ({(aspiringPitchDeckFile.size / (1024 * 1024)).toFixed(2)} MB)
                                    </p>
                                    <button
                                      type="button"
                                      onClick={() => setAspiringPitchDeckFile(null)}
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
                                      <label htmlFor="aspiringPitchDeckFile" className="cursor-pointer">
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
                                value={aspiringPitchDeckLink}
                                onChange={(e) => setAspiringPitchDeckLink(e.target.value)}
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
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/Blogs/validate.png" alt="Idea Validation" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Validate Your Concept</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Understanding your idea's market potential is crucial. Share how far you've progressed in validating your concept with real customers.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 4 for Early-Stage Founder - Tell us more about your business */}
              {step === 4 && selected === 'founder' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Form */}
                  <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={4} totalSteps={10} />
                      <div className="mb-4 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Tell us more about your business</div>
                      <form className="space-y-4 w-full">
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>
                            Describe your business in detail (Max 300 words). This would help us understand your business better
                          </label>
                          <textarea 
                            value={founderBusinessDescription} 
                            onChange={handleFounderBusinessDescriptionChange} 
                            rows={6}
                            className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB] resize-none" 
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                            placeholder="Explain your startup business, what problem it solves, how it works, what makes it unique, and your vision for the future..."
                          />
                          {founderBusinessDescriptionError && <p className="text-red-500 text-xs mt-2">{founderBusinessDescriptionError}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Current Stage</label>
                          <CustomSelect
                            options={STAGE_OPTIONS as any}
                            value={STAGE_OPTIONS.find(opt => opt.value === founderBusinessDetailsStep.stage) || null}
                            onChange={(val: any) => handleFounderBusinessDetailsStepChange({ target: { name: 'stage', value: val } })}
                            placeholder="Select Stage"
                            name="stage"
                          />
                          {founderBusinessDetailsStepErrors.stage && <p className="text-red-500 text-xs mt-1">{founderBusinessDetailsStepErrors.stage}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Team Size</label>
                          <CustomSelect
                            options={TEAM_SIZE_OPTIONS as any}
                            value={TEAM_SIZE_OPTIONS.find(opt => opt.value === founderBusinessDetailsStep.team) || null}
                            onChange={(val: any) => handleFounderBusinessDetailsStepChange({ target: { name: 'team', value: val } })}
                            placeholder="Select Team Size"
                            name="team"
                          />
                          {founderBusinessDetailsStepErrors.team && <p className="text-red-500 text-xs mt-1">{founderBusinessDetailsStepErrors.team}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Revenue Status</label>
                          <CustomSelect
                            options={REVENUE_STATUS_OPTIONS as any}
                            value={REVENUE_STATUS_OPTIONS.find(opt => opt.value === founderBusinessDetailsStep.revenue) || null}
                            onChange={(val: any) => handleFounderBusinessDetailsStepChange({ target: { name: 'revenue', value: val } })}
                            placeholder="Select Revenue Status"
                            name="revenue"
                          />
                          {founderBusinessDetailsStepErrors.revenue && <p className="text-red-500 text-xs mt-1">{founderBusinessDetailsStepErrors.revenue}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Target Audience</label>
                          <input
                            name="targetAudience" 
                            value={founderBusinessDetailsStep.targetAudience} 
                            onChange={handleFounderBusinessDetailsStepChange} 
                            className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                            placeholder="e.g., College students, Small businesses"
                          />
                          {founderBusinessDetailsStepErrors.targetAudience && <p className="text-red-500 text-xs mt-1">{founderBusinessDetailsStepErrors.targetAudience}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Business Model</label>
                          <CustomSelect
                            options={BUSINESS_MODEL_OPTIONS as any}
                            value={BUSINESS_MODEL_OPTIONS.find(opt => opt.value === founderBusinessDetailsStep.businessModel) || null}
                            onChange={(val: any) => handleFounderBusinessDetailsStepChange({ target: { name: 'businessModel', value: val } })}
                            placeholder="Select Business Model"
                            name="businessModel"
                          />
                          {founderBusinessDetailsStepErrors.businessModel && <p className="text-red-500 text-xs mt-1">{founderBusinessDetailsStepErrors.businessModel}</p>}
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Key Achievements <span className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>(Optional)</span></label>
                          <textarea 
                            name="achievements" 
                            value={founderBusinessDetailsStep.achievements} 
                            onChange={handleFounderBusinessDetailsStepChange} 
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
                              const descriptionError = validateFounderBusinessDescription();
                              const fieldErrors = validateFounderBusinessDetailsStep();
                              setFounderBusinessDescriptionError(descriptionError);
                              setFounderBusinessDetailsStepErrors(fieldErrors);
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
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Elaborate Your Business</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Share the detailed story of your business. Help us understand the problem you're solving, your solution, and what makes your approach unique.
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4 for Early-Stage Founder - Startup Progress & Details */}
              {step === 4 && selected === 'founder' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Startup Details Step 4 */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={4} totalSteps={9} />
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
                        {/* Optional product/website/pitch deck upload or link */}
                        <div>
                          <label className="block text-[#23262F] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>
                            Product/Website/Pitch Deck/Video <span className="text-gray-400">(Optional)</span>
                          </label>
                          {/* Toggle Buttons */}
                          <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
                            <button
                              type="button"
                              onClick={() => setFounderPitchDeckUploadMethod('file')}
                              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                                founderPitchDeckUploadMethod === 'file'
                                  ? 'bg-white text-[#41E5FF] shadow-sm'
                                  : 'text-gray-600 hover:text-gray-800'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Upload File
                            </button>
                            <button
                              type="button"
                              onClick={() => setFounderPitchDeckUploadMethod('link')}
                              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                                founderPitchDeckUploadMethod === 'link'
                                  ? 'bg-white text-[#41E5FF] shadow-sm'
                                  : 'text-gray-600 hover:text-gray-800'
                              }`}
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Share Link
                            </button>
                          </div>
                          {founderPitchDeckUploadMethod === 'file' ? (
                            <div>
                              {/* File Upload Area */}
                              <div
                                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                                  founderIsDragOver
                                    ? 'border-[#41E5FF] bg-blue-50'
                                    : 'border-gray-300 hover:border-[#41E5FF]'
                                }`}
                                onDragOver={handleFounderDragOver}
                                onDragLeave={handleFounderDragLeave}
                                onDrop={handleFounderDrop}
                              >
                                <input
                                  type="file"
                                  id="founderPitchDeckFile"
                                  accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov,.ppt,.pptx"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handlePitchDeckFileUpload(file, 'founder');
                                  }}
                                  className="hidden"
                                />
                                {founderPitchDeckFile ? (
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-center text-green-600">
                                      <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      File uploaded successfully!
                                    </div>
                                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                      {founderPitchDeckFile.name} ({(founderPitchDeckFile.size / (1024 * 1024)).toFixed(2)} MB)
                                    </p>
                                    <button
                                      type="button"
                                      onClick={() => setFounderPitchDeckFile(null)}
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
                                      <label htmlFor="founderPitchDeckFile" className="cursor-pointer">
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
                                value={founderPitchDeckLink}
                                onChange={(e) => setFounderPitchDeckLink(e.target.value)}
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
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/jumping%20people.png" alt="Startup Progress & Growth" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Track Your Progress</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Understanding where you are in your startup journey helps us provide the most relevant resources and support tailored to your current stage.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 6 for Aspiring Entrepreneur - Challenges & Approaches */}
              {step === 6 && selected === 'aspiring' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Team & Skills */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                                              <StepBar step={6} totalSteps={9} />
                      <div className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Challenges & Approaches</div>
                      <form className="space-y-6 w-full">
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
                          <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(5)}>Previous</button>
                          <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => {
                            const errors: any = {};
                            if (aspiringChallenges.length === 0) errors.challenges = 'Select at least 1 challenge';
                            if (aspiringApproaches.length === 0) errors.approaches = 'Select at least 1 approach';
                            if (!aspiringSatisfaction) errors.satisfaction = 'Please select your satisfaction level';
                            setAspiringStep5Errors(errors);
                            if (Object.keys(errors).length === 0) setStep(7);
                          }}>Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right: Illustration */}
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/Challenges%20and%20approaches.png" alt="Challenges & Approaches" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Overcome Obstacles</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Every entrepreneur faces challenges. Help us understand your current obstacles and how you're addressing them so we can provide targeted support.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 7 for Aspiring Entrepreneur: Timeline and Support */}
              {step === 7 && selected === 'aspiring' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Timeline & Support */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                                              <StepBar step={7} totalSteps={9} />
                      <div className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Timeline & Support</div>
                      <form className="space-y-6 w-full">
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            What's your timeline for launching your idea?
                          </div>
                          <div className="flex flex-col gap-2">
                            {["Immediately within 1 month", "In 2-3 months", "In 3-4 months"].map(opt => (
                              <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input type="radio" name="aspiringTimelineSupport" value={opt} checked={aspiringTimelineSupport === opt} onChange={() => setAspiringTimelineSupport(opt)} className="accent-[#41E5FF]" />
                                <span>{opt}</span>
                              </label>
                            ))}
                          </div>
                          {aspiringStep6Errors.timeline && <p className="text-red-500 text-xs mt-1">{aspiringStep6Errors.timeline}</p>}
                        </div>
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            Would you be interested in joining AscendThon, a 4-week startup bootcamp to help you validate and launch your idea?
                          </div>
                          <div className="flex flex-col gap-2">
                            {["Yes", "Maybe later", "No"].map(opt => (
                              <label key={opt} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input type="radio" name="aspiringAscendThon" value={opt} checked={aspiringAscendThon === opt} onChange={() => setAspiringAscendThon(opt)} className="accent-[#41E5FF]" />
                                <span>{opt}</span>
                              </label>
                            ))}
                          </div>
                          {aspiringStep6Errors.ascendThon && <p className="text-red-500 text-xs mt-1">{aspiringStep6Errors.ascendThon}</p>}
                        </div>
                        <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                          <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(6)}>Previous</button>
                          <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => {
                            const errors: any = {};
                            if (!aspiringTimelineSupport) errors.timeline = 'Please select a timeline';
                            if (!aspiringAscendThon) errors.ascendThon = 'Please select an option';
                            setAspiringStep6Errors(errors);
                            if (Object.keys(errors).length === 0) setStep(8);
                          }}>Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right: Illustration (hidden on mobile) */}
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/building%20blocks.png" alt="Timeline & Support" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Build Your Future</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Success requires planning and support. Share your timeline and let us know how we can help you build your startup journey step by step.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 8 for Aspiring Entrepreneur - Motivation & Goals */}
              {step === 8 && selected === 'aspiring' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Motivation & Goals */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={8} totalSteps={9} />
                      <div className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Motivation & Goals</div>
                      <form className="space-y-6 w-full">
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>Why did you start this startup?</label>
                          <textarea
                            name="aspiringMotivation"
                            value={aspiringMotivation}
                            onChange={e => setAspiringMotivation(e.target.value)}
                            className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                            rows={3}
                            placeholder="Share your motivation, vision, or personal story."
                          />
                        </div>
                        <div>
                          <label className="block text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400 }}>What do you hope to achieve in the next 6 months?</label>
                          <textarea
                            name="aspiringGoals"
                            value={aspiringGoals}
                            onChange={e => setAspiringGoals(e.target.value)}
                            className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                            style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                            rows={3}
                            placeholder="E.g., scale product, raise funding, expand team, etc."
                          />
                        </div>
                        <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                          <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(7)}>Previous</button>
                          <button type="button" className={`px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`} style={{ fontFamily: 'Inter, sans-serif' }} disabled={isSubmitting} onClick={() => {
                            // No validation needed for Motivation & Goals step - it's optional
                            handleFormSubmit();
                          }}>{isSubmitting ? 'Submitting...' : 'Submit'} {!isSubmitting && <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right: Illustration (hidden on mobile) */}
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/Blogs/vision.png" alt="Motivation & Goals" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Set Your Goals</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Your motivation and goals drive your journey. Share what inspires you and what you aim to accomplish in the near future.
                    </div>
                  </div>
                </div>
              )}

              {/* Step 9 for Aspiring Entrepreneur - Final Submission */}
              {step === 9 && selected === 'aspiring' && (
                <div className="flex w-full min-h-screen justify-center bg-white">
                  {/* Centered Content */}
                  <div className="flex flex-col px-4 md:px-12 py-6 md:py-10 justify-center max-w-2xl mx-auto">
                    <div className="w-full text-center">
                      <StepBar step={8} totalSteps={8} />
                      <div className="mb-6">
                        <svg width="80" height="80" fill="none" viewBox="0 0 80 80" className="mx-auto mb-4">
                          <circle cx="40" cy="40" r="40" fill="#22CCB2"/>
                          <path d="M25 40l10 10 20-20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="mb-8 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Application Submitted Successfully!</div>
                      <div className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 400, color: '#31343D' }}>
                        Thank you for applying to IdeaAscend PitchWeek 2025. We've received your application and will review it carefully.
                      </div>
                      <div className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                        Our team will contact you within 5-7 business days with next steps. Keep an eye on your email for updates!
                      </div>
                      <div className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#6B7280' }}>
                        Now, join the IdeaAscend Aspiring Entrepreneur Community to connect with other aspiring entrepreneurs, share your ideas, and get support as you build your startup.
                    </div>
                          <button
                            type="button"
                        className="px-10 py-4 rounded-[10px] bg-[#22CCB2] text-white font-semibold text-lg shadow-lg transition-all hover:bg-[#1CA88F] flex items-center gap-3 justify-center mx-auto mb-4" 
                        onClick={() => window.open('https://chat.whatsapp.com/Koc003PxjZ49wBqwFpDENL', '_blank')}
                          >
                        Join IdeaAscend Aspiring Entrepreneur Community
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                          <button
                            type="button"
                        className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF] mx-auto" 
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        onClick={() => setShowForm(false)}
                          >
                        Close
                          </button>
                    </div>
                  </div>
                </div>
              )}






              {/* Step 5 for Early-Stage Founder - Pitch Deck Upload */}
              {step === 5 && selected === 'founder' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Pitch Deck Upload */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={5} totalSteps={8} />
                      <div className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Pitch Deck & Materials</div>
                      <form className="space-y-6 w-full">
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
                              <div
                                onDragOver={handleFounderDragOver}
                                onDragLeave={handleFounderDragLeave}
                                onDrop={handleFounderDrop}
                                className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer ${
                                  founderIsDragOver 
                                    ? 'border-[#41E5FF] bg-[#F7FCFF]' 
                                    : 'border-[#DEE3EB] bg-[#F7F9FB] hover:border-[#41E5FF] hover:bg-[#F7FCFF]'
                                }`}
                                onClick={() => document.getElementById('founder-pitch-deck-upload')?.click()}
                              >
                                <div className="flex flex-col items-center">
                                  <svg className="w-8 h-8 text-[#41E5FF] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                  </svg>
                                  <p className="text-[#23262F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400 }}>
                                    {founderPitchDeckFile ? founderPitchDeckFile.name : 'Drag and drop your file here, or click to browse'}
                                  </p>
                                  <p className="text-[#666] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    PDF, PPT, PPTX, DOC, DOCX, MP4 (Max 10MB)
                                  </p>
                                </div>
                              </div>
                              <input
                                id="founder-pitch-deck-upload"
                                type="file"
                                className="hidden"
                                accept=".pdf,.ppt,.pptx,.doc,.docx,.mp4"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) handlePitchDeckFileUpload(file, 'founder');
                                }}
                              />
                            </div>
                          ) : (
                            <input
                              type="url"
                              value={founderPitchDeckLink}
                              onChange={(e) => setFounderPitchDeckLink(e.target.value)}
                              className="w-full px-4 py-3 rounded-md border border-[#DEE3EB] focus:border-[#41E5FF] focus:outline-none text-[16px] font-normal bg-[#F7F9FB]"
                              style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}
                              placeholder="https://your-website.com or https://drive.google.com/..."
                            />
                          )}
                        </div>
                        <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                          <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(4)}>Previous</button>
                          <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(6)}>Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right: Illustration (hidden on mobile) */}
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/goal%20target.png" alt="Pitch Materials" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Show Your Vision</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Share your pitch deck, demo, or website to help us understand your startup better and provide more targeted support.
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6 for Early-Stage Founder */}
              {step === 6 && selected === 'founder' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Challenges & Approaches */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={7} totalSteps={9} />
                      <div className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Challenges & Approaches</div>
                      <form className="space-y-6 w-full">
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            Select up to 3 challenges you're facing:
                          </div>
                          <div className="flex flex-col gap-2">
                            {ASPIRING_CHALLENGES.map(challenge => (
                              <label key={challenge} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input 
                                  type="checkbox" 
                                  checked={founderChallenges.includes(challenge)} 
                                  onChange={() => {
                                    if (founderChallenges.includes(challenge)) {
                                      setFounderChallenges(founderChallenges.filter(c => c !== challenge));
                                    } else if (founderChallenges.length < 3) {
                                      setFounderChallenges([...founderChallenges, challenge]);
                                    }
                                  }} 
                                  className="accent-[#41E5FF]" 
                                />
                                <span>{challenge}</span>
                              </label>
                            ))}
                          </div>
                          {founderStep5Errors.challenges && <p className="text-red-500 text-xs mt-1">{founderStep5Errors.challenges}</p>}
                        </div>
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            What approaches are you currently using to solve these challenges?
                          </div>
                          <div className="flex flex-col gap-2">
                            {ASPIRING_APPROACHES.map(approach => (
                              <label key={approach} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input 
                                  type="checkbox" 
                                  checked={founderApproaches.includes(approach)} 
                                  onChange={() => {
                                    if (founderApproaches.includes(approach)) {
                                      setFounderApproaches(founderApproaches.filter(a => a !== approach));
                                    } else {
                                      setFounderApproaches([...founderApproaches, approach]);
                                    }
                                  }} 
                                  className="accent-[#41E5FF]" 
                                />
                                <span>{approach}</span>
                              </label>
                            ))}
                          </div>
                          {founderStep5Errors.approaches && <p className="text-red-500 text-xs mt-1">{founderStep5Errors.approaches}</p>}
                        </div>
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            How satisfied are you with your current approaches?
                          </div>
                          <div className="flex flex-col gap-2">
                            {ASPIRING_SATISFACTION.map(satisfaction => (
                              <label key={satisfaction} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input 
                                  type="radio" 
                                  name="founderSatisfaction" 
                                  value={satisfaction} 
                                  checked={founderSatisfaction === satisfaction} 
                                  onChange={() => setFounderSatisfaction(satisfaction)} 
                                  className="accent-[#41E5FF]" 
                                />
                                <span>{satisfaction}</span>
                              </label>
                            ))}
                          </div>
                          {founderStep5Errors.satisfaction && <p className="text-red-500 text-xs mt-1">{founderStep5Errors.satisfaction}</p>}
                        </div>
                        <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                          <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(6)}>Previous</button>
                          <button type="button" className="px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => {
                            const errors: any = {};
                            if (founderChallenges.length === 0) errors.challenges = 'Select at least 1 challenge';
                            if (founderApproaches.length === 0) errors.approaches = 'Select at least 1 approach';
                            if (!founderSatisfaction) errors.satisfaction = 'Please select your satisfaction level';
                            setFounderStep5Errors(errors);
                            if (Object.keys(errors).length === 0) setStep(8);
                          }}>Next <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right: Illustration (hidden on mobile) */}
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/Challenges%20and%20approaches.png" alt="Challenges & Approaches" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Overcome Obstacles</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Every entrepreneur faces challenges. Help us understand your current obstacles and how you're addressing them so we can provide targeted support.
                    </div>
                  </div>
                </div>
              )}
              {/* Step 8 for Early-Stage Founder */}
              {step === 8 && selected === 'founder' && (
                <div className="flex w-full min-h-screen">
                  {/* Left: Timeline & Support */}
                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-12 py-6 md:py-10 bg-white justify-center">
                    <div className="max-w-lg mx-auto w-full">
                      <StepBar step={8} totalSteps={9} />
                      <div className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 24, fontWeight: 600, color: '#23262F' }}>Timeline & Support Needs</div>
                      <form className="space-y-6 w-full">
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            What's your timeline for launching your idea?
                          </div>
                          <div className="flex flex-col gap-2">
                            {ASPIRING_TIMELINES.map(timeline => (
                              <label key={timeline} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input type="radio" name="founderTimeline" value={timeline} checked={founderTimeline === timeline} onChange={() => setFounderTimeline(timeline)} className="accent-[#41E5FF]" />
                                <span>{timeline}</span>
                              </label>
                            ))}
                          </div>
                          {founderStep6Errors.timeline && <p className="text-red-500 text-xs mt-1">{founderStep6Errors.timeline}</p>}
                        </div>
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            What kind of support do you need for your startup idea? (Select all that apply)
                          </div>
                          <div className="flex flex-col gap-2">
                            {ASPIRING_LOOKING_FOR.map(item => (
                              <label key={item} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input type="checkbox" checked={founderLookingFor.includes(item)} onChange={() => {
                                  if (founderLookingFor.includes(item)) {
                                    setFounderLookingFor(founderLookingFor.filter(i => i !== item));
                                  } else {
                                    setFounderLookingFor([...founderLookingFor, item]);
                                  }
                                }} className="accent-[#41E5FF]" />
                                <span>{item}</span>
                              </label>
                            ))}
                          </div>
                          {founderStep6Errors.lookingFor && <p className="text-red-500 text-xs mt-1">{founderStep6Errors.lookingFor}</p>}
                        </div>
                        <div>
                          <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, fontWeight: 600, color: '#23262F' }}>
                            Would you be interested in joining AscendThon, a 4-week startup bootcamp to help you validate and launch your idea?
                          </div>
                          <div className="flex flex-col gap-2">
                            {ASCENDTHON_OPTIONS.map(option => (
                              <label key={option} className="flex items-center gap-2 cursor-pointer text-[#23262F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#23262F' }}>
                                <input type="radio" name="founderAscendThon" value={option} checked={founderAscendThon === option} onChange={() => setFounderAscendThon(option)} className="accent-[#41E5FF]" />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                          {founderStep6Errors.ascendThon && <p className="text-red-500 text-xs mt-1">{founderStep6Errors.ascendThon}</p>}
                        </div>
                        <div className="flex flex-row justify-between gap-6 mt-4 w-full">
                          <button type="button" className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF]" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setStep(7)}>Previous</button>
                          <button type="button" className={`px-8 py-3 rounded-[6px] bg-[#41E5FF] text-white font-normal text-lg flex items-center gap-2 shadow transition-all hover:bg-[#22CCF8] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`} style={{ fontFamily: 'Inter, sans-serif' }} disabled={isSubmitting} onClick={() => {
                            const errors: any = {};
                            if (!founderTimeline) errors.timeline = 'Please select a timeline';
                            if (founderLookingFor.length === 0) errors.lookingFor = 'Select at least 1 option';
                            if (!founderAscendThon) errors.ascendThon = 'Please select an option';
                            setFounderStep6Errors(errors);
                            if (Object.keys(errors).length === 0) {
                              handleFormSubmit();
                            }
                          }}>{isSubmitting ? 'Submitting...' : 'Submit'} {!isSubmitting && <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Right: Illustration (hidden on mobile) */}
                  <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F7F9FB] text-center px-4 md:px-8 py-6 md:py-10">
                    <img src="/images/building%20blocks.png" alt="Timeline & Support" className="max-w-lg w-full mb-8" />
                    <div className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 40, fontWeight: 700, color: '#23262F' }}>Build Your Future</div>
                    <div className="mb-6 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                      Success requires planning and support. Share your timeline and let us know how we can help you build your startup journey step by step.
                    </div>
                  </div>
                </div>
              )}

              {/* Step 9 for Early-Stage Founder - Final Submission */}
              {step === 9 && selected === 'founder' && (
                <div className="flex w-full min-h-screen justify-center bg-white">
                  {/* Centered Content */}
                  <div className="flex flex-col px-4 md:px-12 py-6 md:py-10 justify-center max-w-2xl mx-auto">
                    <div className="w-full text-center">
                      <StepBar step={9} totalSteps={9} />
                      <div className="mb-6">
                        <svg width="80" height="80" fill="none" viewBox="0 0 80 80" className="mx-auto mb-4">
                          <circle cx="40" cy="40" r="40" fill="#22CCB2"/>
                          <path d="M25 40l10 10 20-20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="mb-8 mt-[45px]" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 30, fontWeight: 600, color: '#23262F' }}>Application Submitted Successfully!</div>
                      <div className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 400, color: '#31343D' }}>
                        Thank you for applying to IdeaAscend PitchWeek 2025. We've received your application and will review it carefully.
                      </div>
                      <div className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#31343D' }}>
                        Our team will contact you within 5-7 business days with next steps. Keep an eye on your email for updates!
                      </div>
                      <div className="mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 400, color: '#6B7280' }}>
                        Now, join the IdeaAscend Founder Community to connect with other early-stage founders, share your journey, and get support as you build your startup.
                      </div>
                      <button 
                        type="button" 
                        className="px-10 py-4 rounded-[10px] bg-[#22CCB2] text-white font-semibold text-lg shadow-lg transition-all hover:bg-[#1CA88F] flex items-center gap-3 justify-center mx-auto mb-4" 
                        onClick={() => window.open('https://chat.whatsapp.com/DiCkLNcqbEA16jTKEjKQxx', '_blank')}
                      >
                        Join IdeaAscend Founder Community
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                      <button 
                        type="button" 
                        className="px-8 py-3 rounded-[6px] border border-[#41E5FF] text-[#41E5FF] bg-white font-normal text-lg flex items-center gap-2 transition-all hover:bg-[#F7FCFF] mx-auto" 
                        style={{ fontFamily: 'Inter, sans-serif' }} 
                        onClick={() => setShowForm(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* --- FULL MULTI-STEP FORM FOR BOTH FLOWS ENDS HERE --- */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 