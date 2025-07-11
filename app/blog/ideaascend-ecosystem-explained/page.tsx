"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function IdeaAscendEcosystemExplained() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">

      
      {/* Hero Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 relative">
        {/* Mobile Hero Layout */}
        <div className="block sm:hidden">
          {/* Green Background Section with Images at Top */}
          <div className="relative h-64 bg-gradient-to-br from-[#22CCB2] to-[#41E5FF] mx-4 rounded-lg overflow-hidden mb-6">
            {/* Background Pattern/Wave */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url('/images/Blogs/ecosystem.png')`,
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top'
              }}
            />
            
            {/* Character Illustration */}
            <div className="absolute right-4 bottom-4">
              <img 
                src="/images/Homepage Flat/GIRL.png" 
                alt="Character illustration" 
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* Text Content at Bottom */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-xl font-bold mb-2 font-archivo">
                IdeaAscend
              </h2>
              <p className="text-sm font-inter leading-relaxed">
                From Concept to Creation-
                <br />
                Accelerate your venture
              </p>
            </div>
          </div>

          {/* Main Content at Bottom */}
          <div className="px-4 text-center">
            <h1 className="text-lg font-bold text-gray-900 mb-3 font-archivo leading-tight">
              The IdeaAscend Ecosystem Explained: Mentors, Talent, Tools & More
            </h1>
            <p className="text-sm text-gray-700 font-inter mb-4">
              When you're building a startup, you quickly realize: ideas are just the beginning.
            </p>
            <div className="text-xs text-gray-600 font-inter">
              <span>March 15, 2025</span> • <span>8 min read</span>
            </div>
          </div>
        </div>

        {/* Desktop Version (unchanged) */}
        <div className="hidden sm:block max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-archivo leading-tight">
            The IdeaAscend Ecosystem Explained: Mentors, Talent, Tools & More
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            When you're building a startup, you quickly realize: ideas are just the beginning.
          </p>
          <div className="mt-8 text-base text-gray-600 font-inter">
            <span>March 15, 2025</span> • <span>8 min read</span>
          </div>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="flex justify-center">
          <Image 
            src="/images/Blogs/mentor.png" 
            alt="IdeaAscend ecosystem and process flow" 
            width={400} 
            height={300}
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-gray-700 font-inter leading-relaxed mb-6 sm:mb-8">
            Execution is everything—but execution is hard when you're doing it alone.
          </p>
            <p className="text-base sm:text-lg text-gray-700 font-inter leading-relaxed mb-6 sm:mb-8">
            Finding mentors, assembling a team, getting feedback, raising funds, learning what to prioritize—these aren't separate tasks. They're all part of one journey.
          </p>
            <p className="text-base sm:text-lg text-gray-700 font-inter leading-relaxed mb-8 sm:mb-12">
            That's why we built IdeaAscend as a full-stack ecosystem—a platform that gives early-stage founders everything they need to go from idea to execution, without losing momentum or clarity.
          </p>
          </div>

          {/* Step 1: Idea Validation */}
          <div className="mb-16 sm:mb-24 lg:mb-32">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div className="w-full max-w-2xl lg:max-w-none">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-archivo text-center lg:text-left">
            Step 1: Start with Clarity — Validate Your Idea
          </h2>
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
            Many founders begin with excitement. Few begin with validation.
          </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
            With IdeaAscend, the first step isn't writing code or launching a website. It's testing the why. You enter your idea into the platform, and we return with:
          </p>

                  <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-700 font-inter">
              <li className="flex items-center">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#41E5FF] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                        <span>AI-generated market insights</span>
              </li>
              <li className="flex items-center">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#41E5FF] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                        <span>User demand patterns</span>
              </li>
              <li className="flex items-center">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#41E5FF] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                        <span>Competitor analysis</span>
              </li>
              <li className="flex items-center">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#41E5FF] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                        <span>Strategic refinement suggestions</span>
              </li>
            </ul>
          </div>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-3 sm:mb-4">This helps you understand:</p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed font-semibold mb-4 sm:mb-6">
            Is this a real problem? Who faces it? Is your solution viable?
          </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed">
            You don't waste weeks building something nobody needs. You start smart.
          </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center w-full max-w-md lg:max-w-xl order-first lg:order-last">
                <div className="w-full">
                  <img 
                    src="/images/Blogs/validate.png" 
                    alt="Idea Validation" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Mentorship */}
          <div className="mb-16 sm:mb-24 lg:mb-32">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Image */}
              <div className="flex items-center justify-center w-full max-w-md lg:max-w-xl order-first">
                <div className="w-full">
                  <img 
                    src="/images/Blogs/mentor.png" 
                    alt="Mentorship" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full max-w-2xl lg:max-w-none">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-archivo text-center lg:text-left">
            Step 2: Talk to Real Mentors, Not Just Content
          </h2>
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
            There's no shortage of startup advice online. But what most first-time founders need is context, not just information.
          </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
            That's why IdeaAscend connects you with mentors who've been in the trenches—founders, operators, and domain experts who understand what it's like to build from zero.
          </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">1:1 Expert Calls</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Direct access to experienced founders and industry experts</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Business Model Feedback</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Get your business model reviewed by seasoned entrepreneurs</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Go-to-Market Reviews</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Strategic guidance on launching and scaling your product</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Weekly Check-ins</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Regular support during your critical sprint phases</p>
                    </div>
            </div>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed">
                    Mentorship is not generic. It's designed to solve the specific challenges you are facing, right now.
                  </p>
            </div>
            </div>
            </div>
          </div>

          {/* Step 3: Team Building */}
          <div className="mb-16 sm:mb-24 lg:mb-32">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div className="w-full max-w-2xl lg:max-w-none">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-archivo text-center lg:text-left">
            Step 3: Build Your Team with the Right People
          </h2>
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6 font-bold">
            A great idea without a team is just a plan.
          </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
            We know how hard it is to find co-founders, early teammates, or even interns who align with your values and vision.
          </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">Our Co-Founder & Team Match feature helps you:</p>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-3 sm:p-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 text-xs sm:text-sm">✓</div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter">Find people based on skills, mindset, and domain interest</p>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-3 sm:p-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 text-xs sm:text-sm">✓</div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter">Match with candidates looking for co-building opportunities</p>
                    </div>
                    <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-3 sm:p-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 text-xs sm:text-sm">✓</div>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter">Initiate collaboration before committing long-term</p>
              </div>
            </div>
            
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed">
                    Whether you're looking for a technical co-founder, a growth lead, or a design partner—you'll find serious, startup-minded talent here.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center w-full max-w-md lg:max-w-xl order-first lg:order-last">
                <div className="w-full">
                  <img 
                    src="/images/Blogs/wining team.png" 
                    alt="Team Building" 
                    className="w-full h-auto object-contain"
                  />
            </div>
              </div>
            </div>
          </div>

          {/* Step 4: Pitch Practice */}
          <div className="mb-16 sm:mb-24 lg:mb-32">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Image */}
              <div className="flex items-center justify-center w-full max-w-md lg:max-w-xl order-first">
                <div className="w-full">
                  <img 
                    src="/images/Blogs/pitch.png" 
                    alt="Pitch Practice" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full max-w-2xl lg:max-w-none">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-archivo text-center lg:text-left">
                  Step 4: Practice Your Pitch Until It's Investor-Ready
          </h2>
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
                    A great idea poorly communicated is still a poor pitch.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
                    Our Pitch Practice sessions help you refine your story, sharpen your presentation, and build confidence before you face real investors.
          </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Mock Pitch Sessions</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Practice with experienced entrepreneurs who give honest feedback</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Deck Reviews</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Get your pitch deck reviewed and improved by experts</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Story Crafting</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Learn to tell your startup story in a compelling way</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">Q&A Preparation</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Get ready for tough investor questions and scenarios</p>
              </div>
              </div>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed">
                    When you finally pitch to investors, you'll feel prepared, confident, and ready to secure the funding you need.
                  </p>
              </div>
              </div>
            </div>
          </div>

          {/* Step 5: Investor Connections */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 font-archivo">
                Step 5: Connect with the Right Investors
          </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-4 sm:mb-6">
                  The final piece of the ecosystem: getting your validated, team-backed, well-pitched idea in front of investors who understand your vision.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed mb-6 sm:mb-8">
                  We don't just throw you into a room full of investors. We facilitate meaningful connections with VCs, angel investors, and institutions that align with your industry, stage, and funding needs.
          </p>

                <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#41E5FF] text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl font-bold">💰</div>
                      <h4 className="font-bold text-gray-900 font-archivo mb-2 text-sm sm:text-base lg:text-lg">Curated Investor Network</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Access to pre-screened investors actively seeking startups in your domain</p>
            </div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#22CCB2] text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl font-bold">🎯</div>
                      <h4 className="font-bold text-gray-900 font-archivo mb-2 text-sm sm:text-base lg:text-lg">Smart Matching</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Algorithms that match your startup with investors based on thesis and portfolio fit</p>
            </div>
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#41E5FF] text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl font-bold">🤝</div>
                      <h4 className="font-bold text-gray-900 font-archivo mb-2 text-sm sm:text-base lg:text-lg">Warm Introductions</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-inter">Personal introductions that increase your chances of meaningful conversations</p>
            </div>
            </div>
          </div>

                <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-inter leading-relaxed">
                  This isn't about getting any funding—it's about getting the right funding from partners who will help you build something sustainable and impactful.
            </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#22CCB2] to-[#41E5FF] rounded-lg p-6 sm:p-8 lg:p-12 text-center mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 font-archivo">
🚀 Ready to Start Your Journey?</h3>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 font-inter max-w-2xl mx-auto">Join the IdeaAscend ecosystem and turn your startup idea into reality with the support of mentors, teammates, and investors.</p>
          <Link href="/business-form" className="bg-white text-[#22CCB2] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block font-inter text-sm sm:text-base lg:text-lg w-full sm:w-auto max-w-xs sm:max-w-none">
            Get Started Today
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-inter text-sm sm:text-base">&copy; 2025 IdeaAscend. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 