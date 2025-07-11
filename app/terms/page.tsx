import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using IdeaAscend ("the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Platform. These Terms constitute a legally binding agreement between you and IdeaAscend.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Platform Description</h2>
            <p className="text-gray-700 leading-relaxed">
              IdeaAscend is a platform that connects entrepreneurs, job seekers, mentors, and investors. We provide services including startup idea validation, mentorship matching, job placement assistance, team building support, and access to funding opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Eligibility</h3>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old to use our Platform. By using the Platform, you represent that you meet this age requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Conduct and Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our Platform, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Provide accurate and truthful information</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain professional and respectful communication</li>
              <li>Comply with applicable laws and regulations</li>
              <li>Not engage in fraudulent or deceptive practices</li>
              <li>Not use the Platform for unauthorized commercial purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Platform Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, features, and functionality of the Platform are owned by IdeaAscend and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 User Content</h3>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of content you submit to the Platform. By submitting content, you grant IdeaAscend a license to use, display, and share your content for platform operations and service provision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IdeaAscend provides a platform for connections and opportunities but does not guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Successful funding for submitted ideas</li>
              <li>Job placement or employment outcomes</li>
              <li>The accuracy of third-party information</li>
              <li>Continuous platform availability</li>
              <li>Specific business results or outcomes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed">
              The Platform is provided "as is" without warranties of any kind. IdeaAscend disclaims all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              IdeaAscend shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform. Our total liability shall not exceed the amount you have paid us in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your account at any time for violation of these Terms. You may terminate your account by contacting us. Upon termination, your right to use the Platform ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in Indore, Madhya Pradesh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Platform. Your continued use constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms, contact us at:
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