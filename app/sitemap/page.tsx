import React from 'react';
import Link from 'next/link';

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-gray-600">Complete navigation guide to all pages and services on IdeaAscend platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/collaborate" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Collaborate
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Mentorship
                </Link>
              </li>
            </ul>
          </section>

          {/* Platform Services */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/validate-idea" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Validate Your Idea
                </Link>
              </li>
              <li>
                <Link href="/validate-idea/apply" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Idea Validation Application
                </Link>
              </li>
              <li>
                <Link href="/pitch" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Pitch Your Idea
                </Link>
              </li>
              <li>
                <Link href="/business-form" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Business Form
                </Link>
              </li>
            </ul>
          </section>

          {/* Job Seeker Pages */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Seekers</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/startup-jobs" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Startup Jobs
                </Link>
              </li>
              <li>
                <Link href="/startup-jobs/apply" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Job Application
                </Link>
              </li>
              <li>
                <Link href="/jobseekerpages/alljobs" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  All Jobs
                </Link>
              </li>
              <li>
                <Link href="/jobseekerpages/applications" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  My Applications
                </Link>
              </li>
              <li>
                <Link href="/jobseekerpages/saved-jobs" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link href="/jobseekerpages/profile" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/jobseekerpages/profile/edit" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link href="/jobseekerpages/people" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  People
                </Link>
              </li>
              <li>
                <Link href="/jobseekerpages/company" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Companies
                </Link>
              </li>
            </ul>
          </section>

          {/* Blog Section */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Blog</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Blog Home
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-land-startup-job" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  How to Land a Startup Job
                </Link>
              </li>
              <li>
                <Link href="/blog/startup-resume-guide" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Startup Resume Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/remote-startup-work" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Remote Startup Work
                </Link>
              </li>
              <li>
                <Link href="/blog/co-founder-matching-guide" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Co-Founder Matching Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/why-startup-ideas-fail" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Why Startup Ideas Fail
                </Link>
              </li>
              <li>
                <Link href="/blog/what-happens-after-submission" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  What Happens After Submission
                </Link>
              </li>
              <li>
                <Link href="/blog/vision-behind-ideaascend" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Vision Behind IdeaAscend
                </Link>
              </li>
              <li>
                <Link href="/blog/ideaascend-ecosystem-explained" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  IdeaAscend Ecosystem Explained
                </Link>
              </li>
            </ul>
          </section>

          {/* Admin Section */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Admin Panel</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/admin/users" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  User Management
                </Link>
              </li>
              <li>
                <Link href="/admin/ideas" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Idea Management
                </Link>
              </li>
              <li>
                <Link href="/admin/jobs" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Job Management
                </Link>
              </li>
              <li>
                <Link href="/admin/job-applications" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Job Applications
                </Link>
              </li>
              <li>
                <Link href="/admin/submissions" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Form Submissions
                </Link>
              </li>
              <li>
                <Link href="/admin/business-form-submissions" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Business Form Submissions
                </Link>
              </li>
              <li>
                <Link href="/admin/validate-idea-submissions" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Idea Validation Submissions
                </Link>
              </li>
            </ul>
          </section>

          {/* Legal & Support */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal & Support</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-[#41E5FF] hover:text-[#41E5FF]/80">
                  Sitemap
                </Link>
              </li>
              <li>
                <span className="text-gray-600">Contact: IdeaAscend@gmail.com</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Platform Features Overview */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Idea Validation</h3>
              <p className="text-sm text-gray-600">Test and refine your startup concepts with expert feedback and market insights.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Mentorship</h3>
              <p className="text-sm text-gray-600">Connect with experienced founders and industry experts for guidance.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Job Matching</h3>
              <p className="text-sm text-gray-600">Find opportunities at startups that match your skills and interests.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Team Building</h3>
              <p className="text-sm text-gray-600">Discover co-founders and team members who share your vision.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-[#41E5FF] hover:text-[#41E5FF]/80 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 