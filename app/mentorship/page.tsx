import React from 'react';

export default function MentorshipPage() {
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
              Expert 1:1 Mentorship
            </h1>
            <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
              Talk to someone who has done it before.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-inter leading-relaxed max-w-6xl mx-auto" style={{ marginBottom: '100px' }}>
            Get personal advice from mentors who have built businesses. They'll help you solve problems, make better decisions, and move forward with clarity. Behind every successful startup is a mentor who helped the founder navigate challenges and accelerate growth with real-world insights.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Half - How It Works Steps */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo">
                How It Works
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    Step 1: Submit Your Challenge
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Let us know what you're building and where you need support.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    Step 2: Get Matched with Expert
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    We pair you with someone who understands your stage and goals.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    Step 3: Book 1:1 Session
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Talk directly with your mentor and get actionable feedback.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                    Step 4: Stay Connected
                  </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Continue the relationship through follow-ups and check-ins.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Half - Mentor Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <img 
                  src="/images/Blogs/mentor.png" 
                  alt="Mentor" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 font-inter leading-relaxed mb-12">
            Good advice saves startups. Great advice accelerates them. Our mentor network isn't made of passive advisors—they're builders who care about your success.
          </p>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
              Ready for Expert Guidance?
            </h3>
            <p className="text-lg text-gray-700 font-inter mb-8 max-w-2xl mx-auto">
              Free for selected early-stage founders
            </p>
            <button 
              disabled
              className="inline-flex items-center px-8 py-4 bg-gray-400 text-white text-lg font-medium font-inter rounded-lg cursor-not-allowed opacity-75"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </article>
    </div>
  );
} 