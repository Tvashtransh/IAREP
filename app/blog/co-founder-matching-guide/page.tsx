import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CoFounderMatchingGuide() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-archivo">
            The Complete Guide to Finding Your Co-Founder
          </h1>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            How to find, evaluate, and partner with the right co-founder for your startup journey.
          </p>
          <div className="mt-8 text-gray-600 font-inter">
            <span>August 5, 2025</span> • <span>10 min read</span>
          </div>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Image 
            src="/images/Blogs/wining team.png" 
            alt="Co-founder partnership and team building" 
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
              Building a startup alone is possible, but building with the right co-founder can be transformative.
          </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
              The right partnership combines complementary skills, shared vision, and mutual trust. The wrong one can sink even the best ideas.
          </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-12">
              Here's your complete guide to finding and partnering with a co-founder who'll help you build something extraordinary.
            </p>
          </div>

          {/* Why You Need a Co-Founder */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Why Consider a Co-Founder?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Complementary Skills</h4>
                <p className="text-lg text-gray-700 font-inter">Fill gaps in your expertise—technical, business, or domain knowledge you don't have.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Shared Workload</h4>
                <p className="text-lg text-gray-700 font-inter">Divide responsibilities and accelerate progress without burning out.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Better Decision Making</h4>
                <p className="text-lg text-gray-700 font-inter">Two perspectives lead to more thoughtful choices and fewer blind spots.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Investor Confidence</h4>
                <p className="text-lg text-gray-700 font-inter">Many investors prefer backing teams over solo founders for reduced risk.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-800 font-inter leading-relaxed font-medium">
                💡 Remember: You're not just finding someone to work with—you're choosing someone to build the future with.
              </p>
            </div>
          </div>

          {/* Step 1: Define What You Need */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 1: Define What You Need
                </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  Before you start looking, get clear on exactly what skills, experience, and qualities you need in a co-founder.
                </p>
                
                <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-6 mb-6">
                  <ul className="space-y-3 text-lg text-gray-700 font-inter">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Technical skills you lack (development, design, etc.)
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Business skills (sales, marketing, operations)
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Industry expertise and network
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Personality and working style fit
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  Write down your ideal co-founder profile before you start networking. This clarity will guide your search.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/collaborate.png" 
                    alt="Defining Co-founder Needs" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
                </div>
              </div>
              
          {/* Step 2: Where to Find Co-Founders */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/team.png" 
                    alt="Finding Co-founders" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Right Content */}
                <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 2: Where to Find Potential Co-Founders
                </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  The best co-founder relationships often start with existing connections, but there are many ways to meet the right person.
                </p>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Your Network</h4>
                    <p className="text-lg text-gray-700 font-inter">Former colleagues, classmates, and professional connections</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Startup Events</h4>
                    <p className="text-lg text-gray-700 font-inter">Meetups, hackathons, and entrepreneurship conferences</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Online Platforms</h4>
                    <p className="text-lg text-gray-700 font-inter">IdeaAscend, AngelList, FounderGroups, and LinkedIn</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Industry Communities</h4>
                    <p className="text-lg text-gray-700 font-inter">Slack groups, Discord servers, and professional associations</p>
                  </div>
                </div>
              </div>
                </div>
              </div>
              
          {/* Step 3: Evaluation Process */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
                <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 3: How to Evaluate Potential Co-Founders
                </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  Finding someone with the right skills is just the beginning. You need to evaluate compatibility across multiple dimensions.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">✓</div>
                    <p className="text-lg text-gray-700 font-inter">Shared vision and values alignment</p>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">✓</div>
                    <p className="text-lg text-gray-700 font-inter">Complementary skills and experience</p>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">✓</div>
                    <p className="text-lg text-gray-700 font-inter">Work style and communication compatibility</p>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">✓</div>
                    <p className="text-lg text-gray-700 font-inter">Commitment level and timeline expectations</p>
                  </div>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/validate.png" 
                    alt="Co-founder Evaluation" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Red Flags to Watch For */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Red Flags to Watch For
            </h2>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">⚠️ Unclear Commitment</h4>
                <p className="text-lg text-gray-700 font-inter">Won't quit their day job or commit full-time when needed</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">⚠️ Misaligned Vision</h4>
                <p className="text-lg text-gray-700 font-inter">Different ideas about product direction or company goals</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">⚠️ Poor Communication</h4>
                <p className="text-lg text-gray-700 font-inter">Doesn't respond promptly or communicate clearly about issues</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">⚠️ Ego Issues</h4>
                <p className="text-lg text-gray-700 font-inter">Unwilling to take feedback or share decision-making responsibilities</p>
              </div>
            </div>
          </div>



          {/* Legal and Equity Considerations */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Legal and Equity Considerations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-archivo">
                  Key Questions to Address
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Equity Split</h4>
                    <p className="text-lg text-gray-700 font-inter">How will you divide ownership? Consider contributions, risk, and future value.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Vesting Schedule</h4>
                    <p className="text-lg text-gray-700 font-inter">Protect the company if someone leaves early with vesting cliffs.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Roles & Responsibilities</h4>
                    <p className="text-lg text-gray-700 font-inter">Clearly define who does what to avoid future conflicts.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8">
                <h4 className="font-bold text-gray-900 font-archivo mb-4 text-lg">⚖️ Get Legal Help</h4>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-4">
                  Don't handle co-founder agreements casually. Invest in proper legal documentation from the start.
                </p>
                <ul className="space-y-2 text-lg text-gray-700 font-inter">
                  <li>• Founders' agreement</li>
                  <li>• Intellectual property assignment</li>
                  <li>• Equity vesting documents</li>
                  <li>• Exit provisions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How IdeaAscend Helps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              How IdeaAscend Helps You Find Co-Founders
            </h2>
          
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Skill-Based Matching</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Our platform matches you with potential co-founders based on complementary skills and shared interests.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Verified Profiles</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">All members are vetted with verified experience, skills, and commitment levels.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Collaboration Tools</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Built-in project tools to test working relationships before making commitments.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Legal Resources</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Access to templates and legal guidance for co-founder agreements and equity structures.</p>
                </div>
              </div>
          </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#22CCB2] to-[#41E5FF] rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6 font-archivo">
🚀 Ready to Find Your Co-Founder?</h3>
          <p className="text-lg text-white/90 mb-8 font-inter max-w-2xl mx-auto">Join IdeaAscend's co-founder matching platform and connect with serious entrepreneurs looking to build something great.</p>
          <Link href="/collaborate" className="bg-white text-[#22CCB2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block font-inter text-lg">
            Find Your Co-Founder
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