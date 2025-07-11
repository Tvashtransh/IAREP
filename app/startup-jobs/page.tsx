import React from 'react';

export default function StartupJobsPage() {
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
              Jobs in Startups
            </h1>
            <p className="text-xl text-gray-700 font-inter max-w-3xl mx-auto">
              Start your career with real work that matters.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-inter leading-relaxed max-w-6xl mx-auto" style={{ marginBottom: '100px' }}>
            Startups offer a unique opportunity to work on real-world challenges, take ownership early, and grow fast. At IdeaAscend, we connect students, fresh graduates, and professionals with exciting job opportunities in high-growth, innovation-driven startups.
          </p>

          <p className="text-xl text-gray-700 font-inter leading-relaxed max-w-6xl mx-auto mb-16">
            Whether you're looking for an internship, a full-time position, or your first break into the startup world, our platform helps you find roles where you can learn, contribute, and build meaningful experience from day one.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Half - Why Join a Startup Through IdeaAscend */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo">
                Why Join a Startup Through IdeaAscend
              </h2>
              
              <p className="text-xl text-gray-700 font-inter leading-relaxed mb-8">
                We don't just list jobs—we match you with startups that value learning, problem-solving, and a willingness to grow.
              </p>

              <p className="text-xl text-gray-700 font-inter leading-relaxed mb-6">
                Through IdeaAscend, you can:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Explore startup roles across technology, marketing, product, operations, design, and more
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Apply to internships, part-time and full-time positions across India's emerging ventures
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Connect with founders and hiring teams who are building with speed and vision
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#41E5FF] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-gray-700 font-inter leading-relaxed">
                    Get access to teams where your contributions actually matter
                  </p>
                </div>
              </div>
            </div>

            {/* Right Half - Blog Job Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <img 
                  src="/images/Blogs/blog job.png" 
                  alt="Blog Job" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Begin Your Startup Journey Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-archivo">
              Begin Your Startup Journey
            </h2>
            <p className="text-xl text-gray-700 font-inter leading-relaxed mb-8">
              The fastest way to grow is to work where growth is happening every day.
            </p>
            <p className="text-xl text-gray-700 font-inter leading-relaxed">
              If you're ready to join a team that moves quickly, solves real problems, and values your ideas—we invite you to explore startup roles on IdeaAscend.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#22CCB2]/10 to-[#41E5FF]/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-archivo">
              Explore Startup Jobs Now
            </h3>
            <p className="text-lg text-gray-700 font-inter mb-8 max-w-2xl mx-auto">
              Free for students, freshers, and early professionals.
            </p>
            <a 
              href="/startup-jobs/apply"
              className="inline-flex items-center px-8 py-4 bg-[#41E5FF] text-white text-lg font-medium font-inter rounded-lg hover:bg-[#22CCB2] transition-colors"
            >
              Explore Startup Jobs Now
            </a>
          </div>
        </div>
      </article>
    </div>
  );
} 