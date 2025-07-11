import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HowToLandStartupJob() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-archivo">
            How to Land Your Dream Startup Job
          </h1>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            A complete guide to breaking into the startup world and accelerating your career.
          </p>
          <div className="mt-8 text-gray-600 font-inter">
            <span>September 12, 2025</span> • <span>12 min read</span>
          </div>
        </div>
      </div>
      {/* Illustration Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Image 
            src="/images/Blogs/job.png" 
            alt="Job search and career opportunities" 
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
              Landing a job at a startup isn't just about having the right skills—it's about understanding the startup mindset.
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-12">
              Startups move fast, pivot quickly, and need people who can wear multiple hats. Here's your complete guide to breaking in.
            </p>
          </div>
          {/* Why Choose Startups */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Why Choose Startups?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Accelerated Growth</h4>
                <p className="text-lg text-gray-700 font-inter">Learn faster, take on bigger responsibilities, and advance your career at lightning speed.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Direct Impact</h4>
                <p className="text-lg text-gray-700 font-inter">Your work directly affects the company's success. Every contribution matters.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Equity Opportunities</h4>
                <p className="text-lg text-gray-700 font-inter">Many startups offer equity, giving you a stake in the company's future success.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Innovation Culture</h4>
                <p className="text-lg text-gray-700 font-inter">Work with cutting-edge technology and innovative solutions to real problems.</p>
              </div>
            </div>
          </div>

          {/* Step 1: Research */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 1: Research the Startup Ecosystem
                </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  Before applying anywhere, understand the startup landscape. Follow startup news, read about successful companies, and understand different business models.
                </p>
                
                <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-6 mb-6">
                  <ul className="space-y-3 text-lg text-gray-700 font-inter">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Subscribe to startup newsletters like The Hustle or Morning Brew
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Follow startup founders and VCs on Twitter/LinkedIn
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Attend local startup events and meetups
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Use platforms like AngelList, Crunchbase, and ProductHunt
                    </li>
                  </ul>
                </div>
                  </div>

              {/* Right Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/ecosystem.png" 
                    alt="Startup Research" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Build Skills */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/collaborate.png" 
                    alt="Building Skills" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 2: Build Startup-Relevant Skills
              </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  Startups value versatility and growth mindset over specialization. Focus on skills that are immediately applicable and show your ability to learn quickly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Technical Skills</h4>
                    <p className="text-lg text-gray-700 font-inter">Learn basic coding even if you're not a developer</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Digital Marketing</h4>
                    <p className="text-lg text-gray-700 font-inter">Understand marketing and analytics fundamentals</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Project Management</h4>
                    <p className="text-lg text-gray-700 font-inter">Develop agile and project coordination skills</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Data Analysis</h4>
                    <p className="text-lg text-gray-700 font-inter">Practice data interpretation and insights</p>
                  </div>
                </div>
              </div>
            </div>
                    </div>

          {/* Step 3: Craft Resume */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 3: Craft Your Startup Resume
                </h2>
                      <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  Your resume should tell a story of growth, adaptability, and results. Quantify your achievements and show how you've made an impact in previous roles.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">✓</div>
                    <p className="text-lg text-gray-700 font-inter">Use metrics to show your impact (increased sales by X%, reduced costs by Y%)</p>
                      </div>
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">✓</div>
                    <p className="text-lg text-gray-700 font-inter">Highlight any side projects or entrepreneurial experience</p>
                    </div>
                  <div className="flex items-start bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#22CCB2] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">✓</div>
                    <p className="text-lg text-gray-700 font-inter">Show examples of learning new skills quickly</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/dream job.png" 
                    alt="Resume Building" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Network */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <img 
                    src="/images/Blogs/team.png" 
                    alt="Networking" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
                  Step 4: Network Strategically
              </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                  In the startup world, who you know matters as much as what you know. Build genuine relationships with people in the ecosystem.
                </p>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Engage on Social Media</h4>
                    <p className="text-lg text-gray-700 font-inter">Engage with startup content and join conversations</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Informational Interviews</h4>
                    <p className="text-lg text-gray-700 font-inter">Reach out to startup employees for insights</p>
            </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Join Communities</h4>
                    <p className="text-lg text-gray-700 font-inter">Join startup communities and Slack groups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Strategy */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Your Application Strategy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Research First</h4>
                <p className="text-lg text-gray-700 font-inter">Understand the company's mission, recent news, and culture before applying</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Personalize Everything</h4>
                <p className="text-lg text-gray-700 font-inter">Customize your cover letter and resume for each application</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Follow Up</h4>
                <p className="text-lg text-gray-700 font-inter">Send thoughtful follow-ups that add value to the conversation</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-800 font-inter leading-relaxed font-medium">
                💡 Remember: Startups hire for potential and cultural fit as much as current skills
            </p>
            </div>
          </div>

          {/* Interview Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Ace the Interview
            </h2>
            
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Show Growth Mindset</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Demonstrate your ability to learn quickly and adapt to new challenges.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Ask Smart Questions</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Show genuine interest in the company's challenges and growth plans.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Share Your Vision</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Explain how you see yourself contributing to the company's mission.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Be Authentic</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Startups value authenticity and cultural fit over polished personas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#22CCB2] to-[#41E5FF] rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6 font-archivo">
🚀 Ready to Find Your Startup Job?</h3>
          <p className="text-lg text-white/90 mb-8 font-inter max-w-2xl mx-auto">Browse startup opportunities and accelerate your career with IdeaAscend.</p>
          <Link href="/startup-jobs" className="bg-white text-[#22CCB2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block font-inter text-lg">
            Browse Startup Jobs
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