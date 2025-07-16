'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function ValidateIdeaSubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase
        .from('validate_idea_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setSubmissions(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading submissions...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-red-600">
            <p className="text-xl">Error loading submissions: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Validate Idea Submissions ({submissions.length})
        </h1>

        {submissions.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-xl">No submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {submission.full_name}
                    </h2>
                    <p className="text-gray-600">{submission.email}</p>
                    <p className="text-sm text-gray-500">
                      Submitted: {formatDate(submission.created_at)}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedSubmission(selectedSubmission === submission.id ? null : submission.id)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    {selectedSubmission === submission.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="font-medium text-gray-700">Role:</span>
                    <p className="text-gray-900">{submission.role}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Idea Name:</span>
                    <p className="text-gray-900">{submission.idea_name}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Industry:</span>
                    <p className="text-gray-900">{submission.idea_industry}</p>
                  </div>
                </div>

                {/* Pitch Deck Links */}
                {submission.pitch_deck_link && (
                  <div className="mb-4 p-4 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Pitch Deck Link:</span>
                    <a 
                      href={submission.pitch_deck_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline ml-2"
                    >
                      {submission.pitch_deck_link}
                    </a>
                  </div>
                )}

                {/* Detailed View */}
                {selectedSubmission === submission.id && (
                  <div className="mt-6 border-t pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Personal Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Details</h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Mobile:</span> {submission.mobile}</p>
                          <p><span className="font-medium">Education:</span> {submission.educational_degree}</p>
                          <p><span className="font-medium">College:</span> {submission.college}</p>
                          <p><span className="font-medium">City:</span> {submission.city}</p>
                          {submission.linkedin && (
                            <p><span className="font-medium">LinkedIn:</span> 
                              <a href={submission.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                                {submission.linkedin}
                              </a>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Business Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Details</h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Current Stage:</span> {submission.current_stage}</p>
                          <p><span className="font-medium">Team Size:</span> {submission.team_size}</p>
                          <p><span className="font-medium">Revenue Status:</span> {submission.revenue_status}</p>
                          <p><span className="font-medium">Timeline:</span> {submission.timeline}</p>
                          <p><span className="font-medium">Founder Duration:</span> {submission.founder_duration}</p>
                          {submission.has_business && (
                            <p><span className="font-medium">Has Business:</span> {submission.has_business}</p>
                          )}
                        </div>
                      </div>

                      {/* Idea Description */}
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Idea Description</h3>
                        <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                          {submission.idea_description}
                        </p>
                      </div>

                      {/* Interests */}
                      {submission.interests && submission.interests.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Interests</h3>
                          <div className="flex flex-wrap gap-2">
                            {submission.interests.map((interest, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Challenges */}
                      {submission.challenges && submission.challenges.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
                          <div className="space-y-1">
                            {submission.challenges.map((challenge, index) => (
                              <p key={index} className="text-sm text-gray-700">• {challenge}</p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Looking For */}
                      {submission.looking_for && submission.looking_for.length > 0 && (
                        <div className="md:col-span-2">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Looking For</h3>
                          <div className="flex flex-wrap gap-2">
                            {submission.looking_for.map((item, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Additional Details */}
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Satisfaction Level:</span>
                            <p>{submission.satisfaction_level}</p>
                          </div>
                          <div>
                            <span className="font-medium">Ascendthon Interest:</span>
                            <p>{submission.ascendthon_interest}</p>
                          </div>
                          <div>
                            <span className="font-medium">Platform Name:</span>
                            <p>{submission.platform_name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 