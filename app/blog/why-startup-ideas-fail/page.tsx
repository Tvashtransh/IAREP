import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyStartupIdeasFail() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-archivo">
            Why Most Startup Ideas Fail (and How to Improve Yours)
          </h1>
          <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
            What early-stage founders often miss — and how IdeaAscend helps you build something people actually want.
          </p>
          <div className="mt-8 text-gray-600 font-inter">
            <span>May 22, 2025</span> • <span>7 min read</span>
          </div>
        </div>
      </div>
      {/* Illustration Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Image 
            src="/images/Blogs/idea fail.png" 
            alt="Startup failure analysis and validation" 
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
            Every founder starts with optimism.
          </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
            You see a problem, you think of a solution, and you start building. But somewhere between idea and launch, most startups lose momentum. Why?
          </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-12">
              The answer isn't always lack of funding, bad timing, or competition. <strong>The problem usually begins at the idea stage.</strong>
          </p>
          </div>

          {/* Key Insight */}
          <div className="mb-32">
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-12 text-center">
              <p className="text-lg text-gray-700 font-inter leading-relaxed mb-4">
                At IdeaAscend, we've reviewed hundreds of early-stage concepts. The pattern is clear:
              </p>
              <p className="text-xl font-bold text-gray-900 font-archivo">
                Most startup ideas fail not because they were too early, too late, or too small—but because they were never validated properly.
          </p>
            </div>
          </div>

          {/* The 4 Common Reasons */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 font-archivo text-center">
            The 4 Most Common Reasons Startup Ideas Fail
          </h2>

            {/* Reason 1 */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-archivo">
                    1. Building for a Problem That Doesn't Exist
                  </h3>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                    Many founders build for a problem they experience, but don't ask: Is this a widespread pain point? Are people actively looking for a solution?
            </p>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
              You might build a beautiful product, but if it's solving a non-urgent problem, you'll struggle to find traction.
            </p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">✅ Fix:</h4>
                    <p className="text-lg text-gray-700 font-inter">Talk to users. Validate with real conversations, not assumptions. If no one's searching for your solution, you may be solving the wrong thing.</p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xl">
                    <img 
                      src="/images/Blogs/validate.png" 
                      alt="Problem Validation" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xl">
                    <img 
                      src="/images/Blogs/idea.png" 
                      alt="Solution Focus" 
                      className="w-full h-auto object-contain"
                    />
            </div>
          </div>

                {/* Right Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-archivo">
                    2. Falling in Love with the Solution, Not the Problem
                  </h3>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
              This is common with technical founders: you start building a tool because it's exciting, not because it's needed.
            </p>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                    You fall into the trap of shipping features, adding layers of polish—but forgetting to ask: "Does this solve anything in a better, cheaper, or faster way than what's already out there?"
            </p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">✅ Fix:</h4>
                    <p className="text-lg text-gray-700 font-inter">Stay brutally focused on the core problem. Don't build features for the sake of activity. Start with clarity, not complexity.</p>
                  </div>
                </div>
            </div>
          </div>

            {/* Reason 3 */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-archivo">
                    3. Misjudging the Market Size or Willingness to Pay
                  </h3>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
              Even if your idea is useful, the market might be too small or fragmented to support a business. Or worse—you may be targeting people who love free tools but won't pay for a solution.
            </p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">✅ Fix:</h4>
                    <p className="text-lg text-gray-700 font-inter">Before building, understand your TAM (Total Addressable Market). More importantly, test monetization willingness through early landing pages, waitlists, or mock pricing.</p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xl">
                    <img 
                      src="/images/Blogs/ecosystem.png" 
                      alt="Market Analysis" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xl">
                    <img 
                      src="/images/Blogs/collaborate.png" 
                      alt="Feedback Loop" 
                      className="w-full h-auto object-contain"
                    />
            </div>
          </div>

                {/* Right Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-archivo">
                    4. No Feedback Loop, No Iteration
                  </h3>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
                    You can't improve what you don't test. Startups that fail often operate in isolation—no user input, no experimentation, no feedback loop.
            </p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">✅ Fix:</h4>
                    <p className="text-lg text-gray-700 font-inter">Treat every week like a learning sprint. Talk to users, release rough prototypes, and adjust fast. Success comes from iteration, not perfection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How IdeaAscend Helps */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
            How IdeaAscend Helps You Validate Smarter
          </h2>

            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 font-inter leading-relaxed mb-8">
            Instead of building blindly, IdeaAscend gives you a structured way to test your assumptions before you invest your time, money, or energy.
          </p>
            </div>

            {/* Step 1: Market Feedback */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-archivo text-center">
              1. Submit Your Idea → Get Instant Market Feedback
            </h3>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">AI-driven market analysis</h4>
                  <p className="text-lg text-gray-700 font-inter">Comprehensive market research and trends analysis</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Competitor mapping</h4>
                  <p className="text-lg text-gray-700 font-inter">Identify existing solutions and market gaps</p>
              </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Category benchmarking</h4>
                  <p className="text-lg text-gray-700 font-inter">Compare against industry standards and metrics</p>
              </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Preliminary user insights</h4>
                  <p className="text-lg text-gray-700 font-inter">Early user behavior and preference patterns</p>
              </div>
            </div>

              <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-6">
                <ul className="space-y-3 text-lg text-gray-700 font-inter">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                How saturated your space is
              </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                Whether people are already solving this problem
              </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[#41E5FF] rounded-full mr-3"></span>
                Where your opportunity might lie
              </li>
            </ul>
            </div>
          </div>

            {/* Step 2: Mentor Review */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-archivo text-center">
              2. Mentor Review to Stress-Test Your Thinking
            </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Problem Statement</h4>
                  <p className="text-lg text-gray-700 font-inter">Is the problem clear, urgent, and widespread?</p>
              </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Target Audience</h4>
                  <p className="text-lg text-gray-700 font-inter">Who exactly are you building for?</p>
              </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <h4 className="font-bold text-gray-900 font-archivo mb-2 text-lg">Business Model</h4>
                  <p className="text-lg text-gray-700 font-inter">How will you generate sustainable revenue?</p>
              </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-800 font-inter leading-relaxed font-medium">
                💡 This process can save you months of misguided building and help you start with confidence.
              </p>
            </div>
          </div>

          {/* Success Framework */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo text-center">
              The Validation Success Framework
            </h2>
            
            <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Before You Build</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Validate the problem, understand your market, and define your value proposition clearly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">While You Build</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Maintain constant feedback loops with potential users and iterate based on real data.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">After You Launch</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Continue validating assumptions and be ready to pivot when evidence points in a new direction.</p>
              </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-archivo mb-3 text-lg">Scale Smart</h4>
                  <p className="text-lg text-gray-700 font-inter leading-relaxed">Use validation insights to make informed decisions about features, pricing, and market expansion.</p>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#22CCB2] to-[#41E5FF] rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6 font-archivo">
🚀 Ready to Validate Your Idea?</h3>
          <p className="text-lg text-white/90 mb-8 font-inter max-w-2xl mx-auto">Stop building in the dark. Get data-driven insights and expert feedback on your startup concept.</p>
          <Link href="/validate-idea" className="bg-white text-[#22CCB2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block font-inter text-lg">
              Validate Your Idea Now
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