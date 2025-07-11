import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function StartupResumeGuide() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-archivo">
            How to Build a Startup Resume That Gets You Hired
            </h1>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            Stand out in the startup world with a resume that showcases your entrepreneurial mindset and adaptability.
          </p>
          <div className="mt-8 text-gray-600 font-inter">
            <span>October 28, 2025</span> • <span>8 min read</span>
          </div>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-center">
            <Image 
            src="/images/Blogs/job.png" 
            alt="Startup resume building and career development" 
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
              Startup hiring is different. Fast-paced, results-driven, and focused on potential over pedigree.
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
              Your traditional corporate resume won't cut it. You need to show agility, ownership, and the ability to wear multiple hats.
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-12">
              Here's how to craft a resume that speaks startup language and gets you in the door.
            </p>
          </div>

          {/* What Startups Look For */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              What Startups Actually Look For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Ownership Mindset</h4>
                <p className="text-lg text-gray-700 font-inter">Did you take initiative? Drive results? Think like an owner rather than just execute tasks?</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Adaptability</h4>
                <p className="text-lg text-gray-700 font-inter">Can you handle ambiguity, pivot quickly, and learn new skills on the fly?</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Quantifiable Impact</h4>
                <p className="text-lg text-gray-700 font-inter">Numbers matter. Revenue generated, users acquired, processes improved.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Growth Potential</h4>
                <p className="text-lg text-gray-700 font-inter">Evidence of continuous learning and upward trajectory in responsibility.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-800 font-inter leading-relaxed font-medium">
                💡 Remember: Startups hire for potential and cultural fit, not just past experience.
              </p>
            </div>
          </div>

          {/* Essential Sections */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Essential Resume Sections for Startups
            </h2>

            {/* Professional Summary */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-archivo">
                    1. Professional Summary (Not Objective)
                  </h3>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                    Skip the generic objective. Lead with a punchy summary that positions you as someone who gets things done.
                  </p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">
✅ Good Example:</h4>
                    <p className="text-lg text-gray-700 font-inter italic">"Growth-focused marketing professional with 3+ years driving user acquisition for early-stage SaaS companies. Increased MRR by 300% at previous startup through data-driven campaigns and conversion optimization."</p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-bold text-red-900 font-archivo mb-3 text-lg">
❌ Avoid:</h4>
                    <p className="text-lg text-red-700 font-inter italic">"Seeking a challenging position where I can utilize my skills and grow professionally."</p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xl">
                    <img 
                      src="/images/Blogs/collaborate.png" 
                      alt="Professional Summary" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xl">
                    <img 
                      src="/images/Blogs/validate.png" 
                      alt="Experience Section" 
                      className="w-full h-auto object-contain"
                    />
            </div>
          </div>

                {/* Right Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-archivo">
                    2. Results-Focused Experience
                  </h3>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                    Use the STAR method (Situation, Task, Action, Result) but emphasize quantifiable results.
                  </p>

                  <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-6 mb-6">
                    <ul className="space-y-3 text-lg text-gray-700 font-inter">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                        Lead with action verbs (Built, Launched, Grew, Optimized)
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                        Include metrics whenever possible
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                        Show progression and increasing responsibility
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                        Highlight cross-functional collaboration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                      <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-archivo">
                    3. Skills That Matter in Startups
                        </h3>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                    Focus on skills that translate directly to startup success—technical, analytical, and soft skills.
                  </p>

                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Technical Skills</h4>
                      <p className="text-lg text-gray-700 font-inter">Programming languages, analytics tools, design software</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Growth Skills</h4>
                      <p className="text-lg text-gray-700 font-inter">SEO, SEM, content marketing, conversion optimization</p>
                      </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Startup Tools</h4>
                      <p className="text-lg text-gray-700 font-inter">Slack, Notion, Figma, Mixpanel, Stripe, etc.</p>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xl">
                    <img 
                      src="/images/Blogs/ecosystem.png" 
                      alt="Skills Section" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Startup-Specific Tips */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Startup-Specific Resume Tips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">📊 Emphasize Data & Metrics</h4>
                <p className="text-lg text-gray-700 font-inter">Replace vague descriptions with specific numbers. "Increased conversion rate by 15%" beats "Improved website performance."</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">🚀 Show Startup Experience</h4>
                <p className="text-lg text-gray-700 font-inter">Highlight any startup experience, side projects, or entrepreneurial ventures—even failed ones show initiative.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">🎯 Customize for Each Role</h4>
                <p className="text-lg text-gray-700 font-inter">Tailor your resume to match the specific startup's stage, industry, and needs. Generic resumes get ignored.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">⚡ Keep It Concise</h4>
                <p className="text-lg text-gray-700 font-inter">Startups move fast. One page for junior roles, max two pages for senior positions. Every word should add value.</p>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Common Startup Resume Mistakes
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">❌</div>
                <div>
                  <h4 className="font-bold text-red-900 font-archivo mb-2 text-lg">Focusing on Job Duties Instead of Impact</h4>
                  <p className="text-lg text-red-700 font-inter">Don't list what you were supposed to do—highlight what you actually achieved and the business impact.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">❌</div>
                <div>
                  <h4 className="font-bold text-red-900 font-archivo mb-2 text-lg">Over-Designing</h4>
                  <p className="text-lg text-red-700 font-inter">Fancy graphics and colors distract from content. Keep it clean, readable, and ATS-friendly.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">❌</div>
                <div>
                  <h4 className="font-bold text-red-900 font-archivo mb-2 text-lg">Including Irrelevant Information</h4>
                  <p className="text-lg text-red-700 font-inter">Skip hobbies, references, and outdated skills. Focus on what's relevant to the startup role.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Before & After Example */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Before & After: Marketing Manager Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before */}
              <div>
                <h3 className="text-xl font-bold text-red-700 mb-4 font-archivo">❌ Before (Generic)</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2">Marketing Manager, TechCorp (2022-2024)</h4>
                  <ul className="space-y-2 text-lg text-gray-700 font-inter">
                    <li>• Managed social media accounts</li>
                    <li>• Created marketing campaigns</li>
                    <li>• Worked with design team</li>
                    <li>• Analyzed campaign performance</li>
                    <li>• Responsible for email marketing</li>
                  </ul>
                </div>
              </div>

              {/* After */}
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-4 font-archivo">✅ After (Startup-Ready)</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2">Marketing Manager, TechCorp (2022-2024)</h4>
                  <ul className="space-y-2 text-lg text-gray-700 font-inter">
                    <li>• Grew social media following by 250% (10K to 35K) through content strategy optimization</li>
                    <li>• Launched 5 multi-channel campaigns generating $200K+ in pipeline</li>
                    <li>• Led cross-functional team of 4 to deliver campaigns 2 weeks ahead of schedule</li>
                    <li>• Improved campaign ROI by 40% using A/B testing and analytics</li>
                    <li>• Built email automation system increasing engagement rates from 2.1% to 4.3%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Final Checklist */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              Final Resume Checklist
            </h2>
            
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-4 text-lg">Content</h4>
                  <ul className="space-y-2 text-lg text-gray-700 font-inter">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Clear, compelling professional summary
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Quantified achievements with metrics
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Relevant skills and technologies
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Startup-relevant experience emphasized
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-4 text-lg">Format</h4>
                  <ul className="space-y-2 text-lg text-gray-700 font-inter">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      ATS-friendly format (no graphics/tables)
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Consistent formatting and font
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Error-free spelling and grammar
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                      Tailored to specific startup role
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#22CCB2] to-[#41E5FF] rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6 font-archivo">
🚀 Ready to Apply to Startups?</h3>
          <p className="text-lg text-white/90 mb-8 font-inter max-w-2xl mx-auto">Browse startup jobs on IdeaAscend and find your next opportunity with innovative companies.</p>
          <Link href="/startup-jobs" className="bg-white text-[#22CCB2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block font-inter text-lg">
            Explore Startup Jobs
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