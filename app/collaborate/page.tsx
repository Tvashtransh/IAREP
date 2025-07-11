import React from 'react';

export default function CollaboratePage() {
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
              Collaborate with Like-Minded People
            </h1>
            <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
              Work with people who share your passion.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-inter leading-relaxed max-w-6xl mx-auto" style={{ marginBottom: '100px' }}>
            Find teammates, co-founders, or project partners who think like you. Build together, learn together, and grow your startup idea as a team. Great ideas grow faster with the right collaborators who are ready to build, not just talk.
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
                Step 1: Build Your Profile
              </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Tell us what you're building and share your goals and interests.
              </p>
            </div>

                <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                Step 2: Discover Aligned People
              </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Get matched with collaborators who share your passion and domain.
              </p>
            </div>

                <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                Step 3: Connect & Explore
              </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Start conversations and build trust through shared values.
              </p>
            </div>

                <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-archivo">
                Step 4: Grow as a Team
              </h3>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Work together with mentorship and funding prep to back you.
              </p>
                </div>
              </div>
            </div>

            {/* Right Half - Collaborate Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <img 
                  src="/images/Blogs/collaborate.png" 
                  alt="Collaborate" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 font-inter leading-relaxed mb-12">
            Building great startups requires great people. Connect with like-minded individuals who share your vision and are ready to build something meaningful together.
          </p>

          {/* Coming Soon Section */}
          <div className="bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-2xl p-12 mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
              Coming Soon
            </h2>
          </div>
        </div>
      </article>
    </div>
  );
} 