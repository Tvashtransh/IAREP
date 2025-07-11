import React from 'react';

export default function ValidateIdeaPage() {
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
              Validate Your Startup Idea
            </h1>
            <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
              Test your idea before you build.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-inter leading-relaxed max-w-6xl mx-auto" style={{ marginBottom: '100px' }}>
            Launching a startup without validating your idea is like building a house on an unknown foundation. At IdeaAscend, we help you remove the guesswork by giving you data-driven insights, expert feedback, and real user signals—before you write a single line of code. Whether you're a student, a solo founder, or a small team, this step saves you time, money, and months of confusion.
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
                Step 1: Submit Your Idea
              </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                Answer a few guided questions about your startup concept, target audience, and assumptions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                Step 2: Get Instant Insights
              </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                Receive a report covering market demand, user pain points, competition, and opportunity zones.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                Step 3: Get Expert Feedback
              </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                Our mentor panel reviews your idea and suggests actionable improvements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                Step 4: Move Forward with Clarity
              </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                Based on the feedback, either refine your idea, build an MVP, or prepare for funding.
              </p>
                </div>
              </div>
            </div>

            {/* Right Half - Validate Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <img 
                  src="/images/Blogs/validate.png" 
                  alt="Validate" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 font-inter leading-relaxed mb-12">
            Get feedback from real users, understand market demand, and refine your concept before investing time and money. Make sure you're solving a problem people actually have.
          </p>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
              Ready to Validate Your Idea?
            </h3>
            <p className="text-lg text-gray-700 font-inter mb-8 max-w-2xl mx-auto">
              Free for early-stage founders
            </p>
            <a 
              href="/validate-idea/apply"
              className="inline-flex items-center px-8 py-4 bg-[#41E5FF] text-white text-lg font-medium font-inter rounded-lg hover:bg-[#22CCB2] transition-colors"
            >
              Start Validating Your Idea Now
            </a>
          </div>
        </div>
      </article>
    </div>
  );
} 