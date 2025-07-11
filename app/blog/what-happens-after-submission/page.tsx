import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhatHappensAfterSubmission() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-archivo">
            What Happens After You Submit Your Idea?
          </h1>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            A behind-the-scenes look at IdeaAscend's validation process and what to expect after you hit "submit."
          </p>
          <div className="mt-8 text-gray-600 font-inter">
            <span>June 18, 2025</span> • <span>6 min read</span>
          </div>
        </div>
      </div>
      {/* Illustration Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Image 
            src="/images/Blogs/submit idea.png" 
            alt="Idea submission and validation process" 
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
              You've got an idea. You've filled out the form. You've hit submit.
          </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
              Now what? What actually happens behind the scenes at IdeaAscend?
          </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-12">
              Here's a detailed walkthrough of our validation process—from the moment you submit to the moment you get actionable feedback.
            </p>
          </div>

          {/* Step 1: Immediate Analysis */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 1: Immediate AI Analysis
            </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  The moment you submit your idea, our AI system begins analyzing your concept across multiple dimensions.
            </p>

                <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-6 mb-6">
                  <ul className="space-y-3 text-lg text-gray-700 font-inter">
                <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Market size and opportunity assessment
                </li>
                <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Competitive landscape mapping
                </li>
                <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Problem urgency evaluation
                </li>
                <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Initial feasibility check
                </li>
              </ul>
            </div>

                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  You'll receive a comprehensive report with initial insights and preliminary scoring across key metrics.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/ecosystem.png" 
                    alt="AI Analysis Process" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Human Review */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/mentor.png" 
                    alt="Human Review Process" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 2: Human Expert Review
            </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  Our network of experienced founders, investors, and domain experts review your idea for insights that AI might miss.
            </p>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Problem-Solution Fit</h4>
                    <p className="text-lg text-gray-700 font-inter">Does your solution truly address the problem you've identified?</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Market Validation</h4>
                    <p className="text-lg text-gray-700 font-inter">Is there evidence of real demand for this solution?</p>
              </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Business Model Viability</h4>
                    <p className="text-lg text-gray-700 font-inter">Can this idea generate sustainable revenue?</p>
              </div>
              </div>
              </div>
            </div>
          </div>

          {/* Step 3: Detailed Feedback */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 3: Detailed Feedback & Recommendations
            </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  You receive a comprehensive validation report with specific, actionable recommendations for next steps.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">✓</div>
                    <p className="text-lg text-gray-700 font-inter">Strengths and unique value propositions</p>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">⚠</div>
                    <p className="text-lg text-gray-700 font-inter">Potential risks and challenges to address</p>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">→</div>
                    <p className="text-lg text-gray-700 font-inter">Specific next steps and validation experiments</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/validate.png" 
                    alt="Feedback Process" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              What You Get in Your Validation Report
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Market Analysis</h4>
                <p className="text-lg text-gray-700 font-inter">Detailed market size, trends, and opportunity assessment with data-driven insights.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Competitive Landscape</h4>
                <p className="text-lg text-gray-700 font-inter">Comprehensive competitor analysis and market positioning recommendations.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Validation Score</h4>
                <p className="text-lg text-gray-700 font-inter">Overall viability rating based on multiple assessment criteria and expert evaluation.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Action Plan</h4>
                <p className="text-lg text-gray-700 font-inter">Step-by-step roadmap for testing and developing your idea further.</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Your Possible Next Steps
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Move Forward</h4>
                <p className="text-lg text-gray-700 font-inter">If validated, get matched with co-founders, mentors, and resources to build your MVP.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Refine & Resubmit</h4>
                <p className="text-lg text-gray-700 font-inter">Use feedback to pivot or refine your concept and submit an improved version.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Explore New Ideas</h4>
                <p className="text-lg text-gray-700 font-inter">If this idea isn't viable, use insights gained to develop stronger concepts.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-800 font-inter leading-relaxed font-medium">
                💡 Remember: Validation is just the beginning. The real journey starts when you begin building based on validated insights.
              </p>
            </div>
          </div>


        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#22CCB2] to-[#41E5FF] rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6 font-archivo">
🚀 Ready to Submit Your Idea?</h3>
          <p className="text-lg text-white/90 mb-8 font-inter max-w-2xl mx-auto">Join hundreds of founders who have validated their concepts with IdeaAscend's proven process.</p>
          <Link href="/validate-idea" className="bg-white text-[#22CCB2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block font-inter text-lg">
            Start Your Validation Journey
            </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-inter">&copy; 2025 IdeaAscend. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 