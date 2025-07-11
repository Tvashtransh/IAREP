"use client";
import Image from 'next/image'
// import Navigation from '../components/Navigation'
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <style jsx>{`
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-18px) translateX(12px); }
          50% { transform: translateY(-8px) translateX(-15px); }
          75% { transform: translateY(-25px) translateX(8px); }
        }
        .bubble-float {
          animation: bubbleFloat 4s ease-in-out infinite;
        }
        .group:hover .bubble-float {
          animation-play-state: paused;
        }
      `}</style>
      {/* <Navigation /> */}
      
      <main>
        {/* Hero Section - Mobile First, Desktop Side-by-Side */}
        <section className="relative py-12 lg:py-20 overflow-hidden bg-white">
          {/* Background Wave Image - Desktop */}
          <div className="hidden lg:block absolute top-0 right-0 z-0">
            <Image
              src="/images/Header.png"
              alt="Background waves"
              width={800}
              height={664}
              className="object-contain opacity-40"
              priority
            />
          </div>
          
          {/* Background Wave Image - Mobile */}
          <div className="block lg:hidden absolute top-0 right-0 z-0">
            <Image
              src="/images/Header.png"
              alt="Background waves"
              width={400}
              height={332}
              className="object-contain opacity-40"
              priority
            />
          </div>
          
          <div className="container-responsive relative z-10">
            {/* Mobile Layout: Stacked (Image top, Text bottom) */}
            <div className="block lg:hidden text-center space-y-8">
              {/* Mobile Hero Image */}
              <div className="flex justify-center relative -mt-12">
                <div className="w-96 h-96 relative z-0">
                  <Image
                    src="/images/Blogs/header2.png"
                    alt="Lady watering mind illustration"
                    width={480}
                    height={480}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              
              {/* Mobile Text Content */}
              <div className="space-y-6 bg-transparent p-6 relative z-10">
                <h1 className="text-3xl font-bold text-[#41E5FF]">IdeaAscend</h1>
                <h2 className="text-gray-900 text-2xl font-bold">
                  From Concept to Creation-
                  <br />
                  Accelerate your venture
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  The platform where ideas rise into reality. Turn your concept into a thriving business with our unified support for founders, job seekers, and mentors. Let's build the future together!
                </p>
              </div>
            </div>

            {/* Desktop Layout: Side-by-Side */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Left: Text Content */}
              <div className="space-y-8 bg-transparent p-8 max-w-xl relative z-10">
                <div className="space-y-2">
                  <h1 className="text-5xl font-bold leading-tight text-[#41E5FF]">IdeaAscend</h1>
                  <h2 className="text-gray-900 text-5xl font-bold leading-tight whitespace-nowrap">
                    From Concept to Creation-<br />Accelerate your venture
                  </h2>
                </div>
                <div className="w-32 h-1.5" style={{backgroundColor: '#41E5FF'}}></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The platform where ideas rise into reality. Turn your concept into a thriving business with our unified support for founders, job seekers, and mentors. Let's build the future together!
                </p>
              </div>

              {/* Right: Illustration */}
              <div className="flex justify-center lg:justify-end relative -mt-12">
                <div className="w-full relative z-0" style={{maxWidth: '1080px'}}>
                  <Image
                    src="/images/Blogs/header2.png"
                    alt="Lady watering mind illustration"
                    width={1080}
                    height={1080}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container-responsive">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#41E5FF] mb-4">What We Do</h2>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block space-y-20">
              {/* Step 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#41E5FF] rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                    <h3 className="text-3xl font-bold">
                      <span className="text-[#41E5FF]">We guide you</span> <span className="text-gray-900">from day one</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We help early-stage founders turn their ideas into real startups with expert advice and mentorship from the beginning.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-80 relative">
                    <Image
                      src="/images/what%20we%20do/woman%20captain-cuate.png"
                      alt="Women Captain Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center order-2 lg:order-1">
                  <div className="w-[384px] h-[384px] relative">
                    <Image
                      src="/images/what%20we%20do/crane.jpg"
                      alt="Crane Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#41E5FF] rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                    <h3 className="text-3xl font-bold">
                      <span className="text-[#41E5FF]">We Help You Build</span> <span className="text-gray-900">What Matters</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Focus on solving real problems. We help you define your value, understand your users, and shape a solution that people truly need.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#41E5FF] rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                    <h3 className="text-3xl font-bold">
                      <span className="text-[#41E5FF]">Connect & Collaborate</span> <span className="text-gray-900">with the Right People</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Find co-founders, team members, and mentors who share your vision. Build a strong network that will support your journey to success.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-[352px] h-[352px] relative">
                    <Image
                      src="/images/what%20we%20do/Connected%20world-cuate.png"
                      alt="Connected World Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center order-2 lg:order-1">
                  <div className="w-[416px] h-[416px] relative">
                    <Image
                      src="/images/what%20we%20do/launch.jpg"
                      alt="Launch Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#41E5FF] rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                    <h3 className="text-3xl font-bold">
                      <span className="text-[#41E5FF]">Launch & Scale</span> <span className="text-gray-900">Your Venture</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    From MVP to market launch, we provide the resources and guidance you need to accelerate your venture and build the future together.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block lg:hidden space-y-12">
              {/* Step 1 - Mobile */}
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-[#41E5FF] rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <h3 className="text-xl font-bold">
                    <span className="text-[#41E5FF]">We guide you</span> <span className="text-gray-900">from day one</span>
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed px-4">
                  We help early-stage founders turn their ideas into real startups with expert advice and mentorship from the beginning.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="w-64 h-64 relative">
                    <Image
                      src="/images/what%20we%20do/woman%20captain-cuate.png"
                      alt="Women Captain Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 - Mobile */}
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-[#41E5FF] rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                  <h3 className="text-xl font-bold">
                    <span className="text-[#41E5FF]">We Help You Build</span> <span className="text-gray-900">What Matters</span>
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed px-4">
                  Focus on solving real problems. We help you define your value, understand your users, and shape a solution that people truly need.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="w-[307px] h-[307px] relative">
                    <Image
                      src="/images/what%20we%20do/crane.jpg"
                      alt="Crane Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 - Mobile */}
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-[#41E5FF] rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                  <h3 className="text-xl font-bold">
                    <span className="text-[#41E5FF]">Connect & Collaborate</span> <span className="text-gray-900">with the Right People</span>
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed px-4">
                  Find co-founders, team members, and mentors who share your vision. Build a strong network that will support your journey to success.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="w-[282px] h-[282px] relative">
                    <Image
                      src="/images/what%20we%20do/Connected%20world-cuate.png"
                      alt="Connected World Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 - Mobile */}
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-[#41E5FF] rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                  <h3 className="text-xl font-bold">
                    <span className="text-[#41E5FF]">Launch & Scale</span> <span className="text-gray-900">Your Venture</span>
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed px-4">
                  From MVP to market launch, we provide the resources and guidance you need to accelerate your venture and build the future together.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="w-[332px] h-[332px] relative">
                    <Image
                      src="/images/what%20we%20do/launch.jpg"
                      alt="Launch Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience a Unified Platform Section */}
        <section id="experience-unified-platform" className="w-full flex flex-col items-center justify-center mb-8">
          <h2 className="text-center font-archivo font-bold text-[48px] mb-4">
            <span style={{ color: '#41E5FF' }}>Experience</span>
            <span className="text-[#23262F]"> a Unified Platform</span>
          </h2>
          <p className="text-center text-[#A1A7B3] font-inter text-[16px] max-w-2xl font-normal">
            Your idea matters. We help you transform it into a meaningful business — all on one unified platform built for bold problem-solvers.
          </p>
          <p className="text-center text-[#A1A7B3] font-inter text-[16px] max-w-2xl font-normal mt-4">
            At IdeaAscend, we support founders through five strategic stages designed to accelerate startup success
          </p>
        </section>
        <div style={{ height: '70px' }} />

        {/* Validate Your Startup Idea Card */}
        <section className="w-full flex justify-center mb-12">
          <div className="relative w-full max-w-[1130px] min-h-[323px] bg-[#EFFDFB] rounded-2xl shadow-sm overflow-hidden flex items-center px-12 py-10 group">
            <div className="absolute right-0 -top-32 w-[445px] h-[445px] rounded-full bg-[#22CCB2] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="bubble-float absolute right-10 bottom-10 w-[46px] h-[46px] rounded-full bg-[#41E5FF] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="relative z-10 flex-1 max-w-2xl">
              <h2 className="font-archivo font-semibold text-[48px] mb-4 text-[#181A1F]">Validate Your Startup Idea</h2>
              <p className="font-inter text-[16px] text-[#181A1F] mb-2 font-normal">Build with clarity from the start.</p>
              <p className="font-inter text-[16px] text-[#181A1F] mb-8 font-normal">Gain expert-backed insights to sharpen your concept, understand your target users, and discover real market opportunities</p>
              <a href="/validate-idea" className="inline-flex w-[265px] h-[52px] bg-[#41E5FF] text-white rounded-lg font-inter text-[18px] font-normal items-center justify-center transition hover:bg-[#22CCB2] no-underline">
                Validate Your Idea
              </a>
            </div>
          </div>
        </section>
        <div style={{ height: '50px' }} />

        <section className="w-full flex justify-center mb-12">
          <div className="relative w-full max-w-[1130px] min-h-[323px] bg-[#FDF5F1] rounded-2xl shadow-sm overflow-hidden flex items-center px-12 py-10 group">
            <div className="absolute right-0 -top-32 w-[445px] h-[445px] rounded-full bg-[#EA916E] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="bubble-float absolute right-10 bottom-10 w-[46px] h-[46px] rounded-full bg-[#E85E8C] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="relative z-10 flex-1 max-w-2xl">
              <h2 className="font-archivo font-semibold text-[48px] mb-4 text-[#181A1F]">Expert 1:1 Mentorship</h2>
              <p className="font-inter text-[16px] text-[#181A1F] mb-2 font-normal">Talk to someone who has done it before.</p>
              <p className="font-inter text-[16px] text-[#181A1F] mb-8 font-normal">Get personal advice from mentors who have built businesses. They'll help you solve problems, make better decisions, and move forward with clarity.</p>
              <a href="/mentorship" className="inline-flex w-[265px] h-[52px] bg-[#41E5FF] text-white rounded-lg font-inter text-[18px] font-normal items-center justify-center transition hover:bg-[#22CCB2] no-underline">
                Get Mentorship
              </a>
            </div>
          </div>
        </section>
        <div style={{ height: '101px' }} />
        <section className="w-full flex justify-center mb-12">
          <div className="relative w-full max-w-[1130px] min-h-[322px] bg-[rgba(34,204,178,0.08)] rounded-2xl shadow-sm overflow-hidden flex items-center px-12 py-10 group">
            <div className="absolute right-0 top-0 w-[445px] h-[445px] rounded-full bg-[#22CCB2] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="bubble-float absolute right-10 bottom-10 w-[46px] h-[46px] rounded-full bg-[#EA916E] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="relative z-10 flex-1 max-w-2xl">
              <h2 className="font-archivo font-semibold text-[48px] mb-4 text-[#181A1F]">Collaborate with Like-Minded People</h2>
              <p className="font-inter text-[16px] text-[#181A1F] mb-2 font-normal">Work with people who share your passion.</p>
              <p className="font-inter text-[16px] text-[#181A1F] mb-8 font-normal">Find teammates, co-founders, or project partners who think like you. Build together, learn together, and grow your startup idea as a team.</p>
              <a href="/collaborate" className="inline-flex w-[261px] h-[52px] bg-[#41E5FF] text-white rounded-lg font-inter text-[18px] font-normal items-center justify-center transition hover:bg-[#22CCB2] no-underline">
                Join our network
              </a>
            </div>
          </div>
        </section>
        <div style={{ height: '101px' }} />
        <section className="w-full flex justify-center mb-12">
          <div className="relative w-full max-w-[1130px] min-h-[323px] bg-[#FDF5F1] rounded-2xl shadow-sm overflow-hidden flex items-center px-12 py-10 group">
            <div className="absolute right-0 -top-20 w-[445px] h-[445px] rounded-full bg-[#EA916E] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="bubble-float absolute right-10 bottom-10 w-[46px] h-[47px] rounded-full bg-[#E85E8C] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="relative z-10 flex-1 max-w-2xl">
              <h2 className="font-archivo font-semibold text-[48px] mb-4 text-[#181A1F]">Pitch in Front of Investors</h2>
              <p className="font-inter text-[16px] text-[#181A1F] mb-2 font-normal">Looking to raise money for your idea?</p>
              <p className="font-inter text-[16px] text-[#181A1F] mb-8 font-normal">We give you a chance to present your idea to investors who are looking to support new startups. If they like it, they might fund you or help you grow.</p>
              <a href="/pitch" className="inline-flex w-[261px] h-[52px] bg-[#41E5FF] text-white rounded-lg font-inter text-[18px] font-normal items-center justify-center transition hover:bg-[#22CCB2] no-underline">
                Know more
              </a>
            </div>
          </div>
        </section>
        <div style={{ height: '120px' }} />
        <section className="w-full flex justify-center mb-12">
          <div className="relative w-full max-w-[1130px] min-h-[322px] bg-[#EFFDFB] rounded-2xl shadow-sm overflow-hidden flex items-center px-12 py-10 group">
            <div className="absolute right-0 -top-32 w-[445px] h-[445px] rounded-full bg-[#22CCB2] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="bubble-float absolute right-10 bottom-10 w-[46px] h-[46px] rounded-full bg-[#41E5FF] opacity-100 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="relative z-10 flex-1 max-w-2xl">
              <h2 className="font-archivo font-semibold text-[48px] mb-4 text-[#181A1F]">Jobs in Startups</h2>
              <p className="font-inter text-[16px] text-[#181A1F] mb-2 font-normal">Discover exciting job opportunities in high-growth startups.</p>
              <p className="font-inter text-[16px] text-[#181A1F] mb-8 font-normal">Explore roles across innovative companies and take the next step in your career with fast-growing startups shaping the future.</p>
              <a href="/startup-jobs" className="inline-flex w-[265px] h-[52px] bg-[#41E5FF] text-white rounded-lg font-inter text-[18px] font-normal items-center justify-center transition hover:bg-[#22CCB2] no-underline">
                Explore Startup Jobs
              </a>
            </div>
          </div>
        </section>
        <div style={{ height: '120px' }} />

        {/* Trusted by Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container-responsive">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Trusted by</h2>
            </div>

            {/* Logo Grid */}
            <div className="flex flex-row items-center justify-center gap-6 md:gap-16">
              {/* AIM Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/AIM.png"
                  alt="AIM"
                  width={66}
                  height={66}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity w-[66px] h-[66px] md:w-[88px] md:h-[88px]"
                />
              </div>

              {/* Prestige Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/Prestige.png"
                  alt="Prestige"
                  width={66}
                  height={66}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity w-[66px] h-[66px] md:w-[88px] md:h-[88px]"
                />
              </div>

              {/* DAVV IC Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/davv IC.png"
                  alt="DAVV Innovation Center"
                  width={66}
                  height={66}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity w-[66px] h-[66px] md:w-[88px] md:h-[88px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Turn your idea into reality Section */}
        <section className="py-16 lg:py-20">
          <div className="container-responsive">
            <div className="max-w-7xl mx-auto">
              <div className="bg-[#41E5FF] rounded-3xl px-8 md:px-12 lg:px-16 py-12 lg:py-16 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                  {/* Content Side */}
                  <div className="text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 font-archivo leading-tight">
                      Turn your idea into reality
                    </h2>
                    <p className="font-inter font-normal text-white text-[22px] mb-8" style={{ fontFamily: 'Inter, Archivo, sans-serif', fontWeight: 400 }}>
                      fill the form to join IdeaAscend and get access of all services.
                    </p>
                    <div className="mt-8">
                      <a 
                        href="/business-form" 
                        className="inline-flex w-[265px] h-[52px] bg-[#41E5FF] text-white rounded-lg font-inter text-[18px] font-normal items-center justify-center transition hover:bg-[#22CCB2] no-underline"
                      >
                        Business Form
                      </a>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="hidden lg:flex justify-center items-center">
                    <Image 
                      src="/images/Homepage Flat/bussinessform.png" 
                      alt="Business Form Illustration"
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the IdeaAscend Community Section */}
        <section id="join-community" className="py-16 bg-white">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Join the <span className="text-[#41E5FF]">IdeaAscend</span> Community
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                Connect with like-minded entrepreneurs, innovators, and mentors who share your passion for turning ideas into successful businesses. Our community provides support, inspiration, and valuable networking opportunities to help you grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Job Seekers Card */}
              <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">For Job Seekers</h3>
                <p className="text-gray-600 mb-6 text-center">Find exciting opportunities in innovative startups that match your skills and passion.</p>
                <a href="https://chat.whatsapp.com/EEihbPQHV6S2edQzaJYWlu" target="_blank" rel="noopener noreferrer" className="bg-[#41E5FF] hover:bg-[#22CCB2] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full max-w-xs text-center">
                  Join us as Job Seeker
                </a>
              </div>
              {/* Startup Founders Card */}
              <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">For Startup Founders</h3>
                <p className="text-gray-600 mb-6 text-center">Connect with entrepreneurs, get mentorship, and accelerate your startup journey.</p>
                <a href="https://chat.whatsapp.com/DiCkLNcqbEA16jTKEjKQxx" target="_blank" rel="noopener noreferrer" className="bg-[#41E5FF] hover:bg-[#22CCB2] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full max-w-xs text-center">
                  Join us as Startup Founder
                </a>
              </div>
              {/* Aspiring Entrepreneur Card */}
              <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">For Aspiring Entrepreneur</h3>
                <p className="text-gray-600 mb-6 text-center">Turn your ideas into reality with guidance and support from our entrepreneurial community.</p>
                <a href="https://chat.whatsapp.com/Koc003PxjZ49wBqwFpDENL" target="_blank" rel="noopener noreferrer" className="bg-[#41E5FF] hover:bg-[#22CCB2] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full max-w-xs text-center">
                  Join us as Aspiring Entrepreneur
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#eafdff]">
          <div className="w-full">
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Hear from our awesome users!</h2>
            </div>
            
            <div className="w-full">
              {/* First Row */}
              <div className="relative mb-12">
                <div className="overflow-x-auto scrollbar-hide smooth-scroll">
                  <div className="flex gap-4 md:gap-6 pb-4 pl-4" style={{ width: 'max-content', minWidth: '100vw' }}>
                    {/* Testimonial 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-[380px] md:w-[420px] h-[242px] flex-shrink-0">
                      <div className="flex items-center mb-3">
                        <img src="/images/reviews/kunal.png" alt="Kunal Hemnani" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-bold text-lg text-gray-900">Kunal Hemnani</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">IdeaAscend supported my entrepreneurial vision. Their mentorship program and development tools were game-changing for my startup.</p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-[380px] md:w-[420px] h-[242px] flex-shrink-0">
                      <div className="flex items-center mb-3">
                        <img src="/images/reviews/jayram.png" alt="Jayram Dangi" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-bold text-lg text-gray-900">Jayram Dangi</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">I was struggling to find the right startup opportunity until I discovered IdeaAscend. Within two months, I found a software engineer role that perfectly matched my skills and career goals.</p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-[380px] md:w-[420px] h-[242px] flex-shrink-0">
                      <div className="flex items-center mb-3">
                        <img src="/images/reviews/shikha.png" alt="Shikha Agrawal" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-bold text-lg text-gray-900">Shikha Agrawal</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">IdeaAscend helped me transition from college to my first startup role. The platform matches you with companies that truly value fresh talent and innovative thinking.</p>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-[380px] md:w-[420px] h-[242px] flex-shrink-0">
                      <div className="flex items-center mb-3">
                        <img src="/images/reviews/shivam.png" alt="Shivam Kakodiya" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-bold text-lg text-gray-900">Shivam Kakodiya</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">Moving from a corporate job to startup was scary, but IdeaAscend made the transition smooth. The platform showed me opportunities I never knew existed.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide smooth-scroll">
                  <div className="flex gap-4 md:gap-6 pb-4 pl-4" style={{ width: 'max-content', minWidth: '100vw' }}>
                    {/* Testimonial 5 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-[380px] md:w-[420px] h-[242px] flex-shrink-0">
                      <div className="flex items-center mb-3">
                        <img src="/images/reviews/swati.png" alt="Swati Jain" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-bold text-lg text-gray-900">Swati Jain</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">After years in traditional business, IdeaAscend gave me the confidence to pursue my own venture. The mentorship program connected me with experienced founders who guided me through early challenges.</p>
                    </div>

                    {/* Testimonial 6 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-[380px] md:w-[420px] h-[242px] flex-shrink-0">
                      <div className="flex items-center mb-3">
                        <img src="/images/reviews/raghav.png" alt="Raghav Agrawal" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-bold text-lg text-gray-900">Raghav Agrawal</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">IdeaAscend connected me with the right mentors who helped refine my business model. The investor introductions were genuine and led to meaningful conversations about funding.</p>
                    </div>

                    {/* Testimonial 7 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-[380px] md:w-[420px] h-[242px] flex-shrink-0">
                      <div className="flex items-center mb-3">
                        <img src="/images/reviews/anshul.png" alt="Anshul Nimore" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-bold text-lg text-gray-900">Anshul Nimore</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">What I like most about IdeaAscend is how they focus on cultural fit, not just technical skills. I found a role where I can actually make an impact.</p>
                    </div>

                    {/* Testimonial 8 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start w-[380px] md:w-[420px] h-[242px] flex-shrink-0">
                      <div className="flex items-center mb-3">
                        <img src="/images/reviews/animesh.png" alt="Animesh Khare" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-bold text-lg text-gray-900">Animesh Khare</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">Amazing platform that helped me connect with like-minded entrepreneurs. The mentorship program is exceptional and truly valuable.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Want to learn more? Section */}
        <section id="want-to-learn-more" className="w-full flex flex-col items-center justify-center py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h2 className="text-center font-archivo font-bold mb-16 text-[#181A1F]" style={{ fontSize: '48px', fontWeight: 700 }}>
              Want to <span className="text-[#41E5FF]">learn</span> more?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Blog 1 - How to Land a Job at a Startup */}
              <div 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                style={{ height: 'auto' }}
                onClick={() => window.open('/blog/how-to-land-startup-job', '_blank')}
              >
                <div className="h-48 bg-white flex items-center justify-center">
                  <img 
                    src="/images/Blogs/job.png" 
                    alt="Job at startup" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 font-archivo">How to Land a Job at a Startup</h3>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">Your roadmap to getting hired by India's most promising startups—even if you're just starting out.</p>
                </div>
              </div>

              {/* Blog 2 - What Happens After You Submit Your Idea */}
              <div 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                style={{ height: 'auto' }}
                onClick={() => window.open('/blog/what-happens-after-submission', '_blank')}
              >
                <div className="h-48 bg-white flex items-center justify-center">
                  <img 
                    src="/images/Blogs/submit idea.png" 
                    alt="Idea submission" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 font-archivo">What Happens After You Submit Your Idea?</h3>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">A behind-the-scenes look at how your startup idea moves from submission to strategy, mentorship, and funding.</p>
                </div>
              </div>

              {/* Blog 3 - The Vision Behind IdeaAscend */}
              <div 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                style={{ height: 'auto' }}
                onClick={() => window.open('/blog/vision-behind-ideaascend', '_blank')}
              >
                <div className="h-48 bg-white flex items-center justify-center">
                  <img 
                    src="/images/Blogs/idea behind.png" 
                    alt="Vision behind IdeaAscend" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 font-archivo">The Vision Behind IdeaAscend</h3>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">Why we built IdeaAscend, who it's for, and where we're headed. Empowering founders from day zero.</p>
                </div>
              </div>

              {/* Blog 4 - Why Most Startup Ideas Fail */}
              <div 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                style={{ height: 'auto' }}
                onClick={() => window.open('/blog/why-startup-ideas-fail', '_blank')}
              >
                <div className="h-48 bg-white flex items-center justify-center">
                  <img 
                    src="/images/Blogs/idea fail.png" 
                    alt="Startup failure" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 font-archivo">Why Most Startup Ideas Fail</h3>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">Learn the 4 most common reasons startup ideas fail and how IdeaAscend helps you validate smarter before you build.</p>
                </div>
              </div>

              {/* Blog 5 - The IdeaAscend Ecosystem Explained */}
              <div 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                style={{ height: 'auto' }}
                onClick={() => window.open('/blog/ideaascend-ecosystem-explained', '_blank')}
              >
                <div className="h-48 bg-white flex items-center justify-center">
                  <img 
                    src="/images/Blogs/mentor.png" 
                    alt="IdeaAscend ecosystem" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 font-archivo">The IdeaAscend Ecosystem Explained</h3>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">Discover how IdeaAscend supports founders at every stage—from idea validation to team building and investor connections.</p>
                </div>
              </div>

              {/* Blog 6 - How to Build a Winning Startup Team */}
              <div 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                style={{ height: 'auto' }}
                onClick={() => window.open('/blog/co-founder-matching-guide', '_blank')}
              >
                <div className="h-48 bg-white flex items-center justify-center">
                  <img 
                    src="/images/Blogs/team.png" 
                    alt="Startup team building" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 font-archivo">How to Build a Winning Startup Team</h3>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">Learn how to find the right co-founder with IdeaAscend's Co-Founder Match tool. From team building strategies to equity decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>


    </>
  )
} 