import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VisionBehindIdeaAscend() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-archivo">
            The Vision Behind IdeaAscend
          </h1>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Why we built IdeaAscend, who it's for, and where we're headed in empowering founders from day zero.
          </p>
          <div className="mt-8 text-gray-600 font-inter">
            <span>April 8, 2025</span> • <span>8 min read</span>
          </div>
        </div>
      </div>
      {/* Illustration Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Image 
            src="/images/Blogs/idea behind.png" 
            alt="The vision and idea behind IdeaAscend" 
            width={500} 
            height={350}
            className="object-contain"
          />
        </div>
      </div>
      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 font-inter leading-relaxed mb-8">
              Every big company started with a single idea.
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
              But behind every great startup success story, there's a founder who almost gave up. Why?
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-12">
              Because the early days of building something new are filled with silence, confusion, and doubt.
            </p>
          </div>
          {/* Mission Statement */}
          <div className="mb-32">
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                At IdeaAscend, we exist to change that.
              </h2>
              <p className="text-lg text-gray-700 font-inter leading-relaxed max-w-3xl mx-auto">
                We didn't start IdeaAscend to be just another job board or funding platform. We started it because we believe in a future where any founder—no matter their background, age, or city—can build and scale their idea with confidence.
              </p>
            </div>
          </div>
          {/* The Problem Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              The Problem We Saw
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
                We spoke to hundreds of student founders, first-time entrepreneurs, and dreamers from small towns and large campuses. Here's what we kept hearing:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-lg text-gray-700 font-inter italic leading-relaxed">
                  "I have an idea, but I don't know what to do next."
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-lg text-gray-700 font-inter italic leading-relaxed">
                  "I wish I had someone experienced to guide me."
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-lg text-gray-700 font-inter italic leading-relaxed">
                  "I want to build something, but I don't have a team."
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-lg text-gray-700 font-inter italic leading-relaxed">
                  "I applied to incubators, but never heard back."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-800 font-inter leading-relaxed font-medium">
                💡 We realized: the real gap isn't in ideas—it's in access.
              </p>
            </div>
          </div>
          {/* Our Vision Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Our Vision
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
                We imagine a future where:
              </p>
            </div>
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start">
                <span className="text-2xl mr-4 mt-1">💰</span>
                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  A 19-year-old in Bhopal can validate a fintech idea and pitch to investors
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start">
                <span className="text-2xl mr-4 mt-1">👨‍💻</span>
                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  A final-year engineering student in Ranchi can become a CTO through a co-founder match
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start">
                <span className="text-2xl mr-4 mt-1">🏥</span>
                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  A small college team from Odisha can build, test, and scale a health-tech solution—without ever feeling lost or alone
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                This isn't just a platform. It's a movement.
              </h3>
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                We're building the infrastructure for India's next wave of entrepreneurs—people who think different, build different, and change the world.
              </p>
            </div>
          </div>
          {/* What We're Building */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              What We're Building
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Idea Validation Tools</h4>
                <p className="text-lg text-gray-700 font-inter">Test your concepts before you build, with AI-powered market insights and expert feedback</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Mentor Connections</h4>
                <p className="text-lg text-gray-700 font-inter">Get guidance from experienced founders who've walked the path you're on</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Team Matching</h4>
                <p className="text-lg text-gray-700 font-inter">Find co-founders and early team members who share your vision and complement your skills</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Funding Opportunities</h4>
                <p className="text-lg text-gray-700 font-inter">Connect with investors and get pitch-ready with our structured funding pipeline</p>
              </div>
            </div>
          </div>
          {/* Why Now Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Why Now?
            </h2>
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">India's Startup Moment</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">India is producing more unicorns than ever, but most founders still start without proper support systems.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Technology Enablement</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">AI and automation now make it possible to democratize access to mentorship, validation, and funding at scale.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Remote-First World</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Geographic barriers are breaking down. Talent from tier-2 and tier-3 cities can now build global companies.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Young Demographics</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">India has the world's largest young population—and they're hungry to build the future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action - OMITTED (no form) */}
      </article>
      {/* Want to learn more? Section - OMITTED (handled globally) */}
    </div>
  );
} 