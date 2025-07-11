import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              IdeaAscend ("we," "our," or "us") operates the IdeaAscend platform at ideaascend.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform for startup idea validation, mentorship services, job matching, and related entrepreneurial support services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect personal information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Name, email address, and phone number</li>
              <li>Educational background and professional experience</li>
              <li>LinkedIn profile and resume information</li>
              <li>City and location details</li>
              <li>Startup ideas, business concepts, and project descriptions</li>
              <li>Career interests and preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Usage Information</h3>
            <p className="text-gray-700 leading-relaxed">
              We automatically collect information about your interactions with our platform, including pages visited, features used, and time spent on various sections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Providing idea validation and feedback services</li>
              <li>Connecting you with mentors and industry experts</li>
              <li>Matching job seekers with startup opportunities</li>
              <li>Facilitating team building and co-founder matching</li>
              <li>Sending relevant updates and platform communications</li>
              <li>Improving our services and user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>With mentors when you request guidance or feedback</li>
              <li>With potential employers when you apply for startup positions</li>
              <li>With potential co-founders or team members for collaboration</li>
              <li>With service providers who assist in platform operations</li>
              <li>When required by law or to protect our legal rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance your experience, analyze platform usage, and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our platform may contain links to third-party services or integrate with external platforms. We are not responsible for the privacy practices of these third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify users of material changes through email or platform notifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700">
                Email: IdeaAscend@gmail.com<br />
                Address: Vikramshila Parisar DAVV, IT Park, Indore, MP India
              </p>
            </div>
          </section>
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