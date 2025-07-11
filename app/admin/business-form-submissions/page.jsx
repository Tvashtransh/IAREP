// Exact copy of src/app/admin/business-form-submissions/page.jsx including Supabase config and helpers for admin business form submissions logic and structure
'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../../src/lib/supabaseClient';
import { fetchRecords, insertRecord, updateRecord, deleteRecord } from '../../src/lib/supabaseHelpers';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function BusinessFormSubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchSubmissions();
  }, [filter]);

  const fetchSubmissions = async () => {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey);
      
      let query = supabase
        .from('complete_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('user_type', filter);
      }

      const { data, error } = await query;

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

  const openFileInNewTab = (fileInfo) => {
    if (fileInfo?.publicUrl) {
      window.open(fileInfo.publicUrl, '_blank');
    } else if (fileInfo?.filePath) {
      // Construct URL from file path
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data } = supabase.storage.from('uploads').getPublicUrl(fileInfo.filePath);
      window.open(data.publicUrl, '_blank');
    } else {
      alert('File URL not available');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getFileFromSubmission = (submission) => {
    // Check for different file types based on user type
    if (submission.user_type === 'jobseeker' && submission.resume_file_info) {
      return { type: 'Resume', info: submission.resume_file_info };
    }
    if (submission.user_type === 'aspiring' && submission.aspiring_pitch_deck) {
      return { type: 'Pitch Deck', info: submission.aspiring_pitch_deck };
    }
    if (submission.user_type === 'founder' && submission.founder_pitch_deck) {
      return { type: 'Pitch Deck', info: submission.founder_pitch_deck };
    }
    return null;
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
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Business Form Submissions ({submissions.length})
          </h1>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            {['all', 'jobseeker', 'aspiring', 'founder'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-md capitalize transition-colors ${
                  filter === filterType
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {filterType === 'all' ? 'All Types' : filterType}
              </button>
            ))}
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-xl">No submissions found for the selected filter.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => {
              const fileInfo = getFileFromSubmission(submission);
              
              return (
                <div key={submission.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {submission.full_name}
                      </h2>
                      <p className="text-gray-600">{submission.email}</p>
                      <div className="flex gap-4 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          submission.user_type === 'jobseeker' ? 'bg-blue-100 text-blue-800' :
                          submission.user_type === 'aspiring' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {submission.user_type}
                        </span>
                        <p className="text-sm text-gray-500">
                          {formatDate(submission.created_at)}
                        </p>
                      </div>
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
                      <span className="font-medium text-gray-700">Mobile:</span>
                      <p className="text-gray-900">{submission.mobile}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">City:</span>
                      <p className="text-gray-900">{submission.city}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Education:</span>
                      <p className="text-gray-900">{submission.educational_degree}</p>
                    </div>
                  </div>

                  {/* File Upload Section */}
                  {fileInfo && (
                    <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-blue-800">{fileInfo.type}:</span>
                          <p className="text-blue-700">
                            {fileInfo.info.originalName || fileInfo.info.name}
                            {fileInfo.info.size && (
                              <span className="text-sm"> ({Math.round(fileInfo.info.size / 1024)} KB)</span>
                            )}
                          </p>
                        </div>
                        <button
                          onClick={() => openFileInNewTab(fileInfo.info)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                          View File
                        </button>
                      </div>
                    </div>
                  )}

                  {/* External Links */}
                  {submission.user_type === 'aspiring' && submission.aspiring_pitch_deck_link && (
                    <div className="mb-4 p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-800">Pitch Deck Link:</span>
                      <a 
                        href={submission.aspiring_pitch_deck_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-700 hover:underline ml-2"
                      >
                        {submission.aspiring_pitch_deck_link}
                      </a>
                    </div>
                  )}

                  {submission.user_type === 'founder' && submission.founder_pitch_deck_link && (
                    <div className="mb-4 p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-800">Pitch Deck Link:</span>
                      <a 
                        href={submission.founder_pitch_deck_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-700 hover:underline ml-2"
                      >
                        {submission.founder_pitch_deck_link}
                      </a>
                    </div>
                  )}

                  {/* Detailed View */}
                  {selectedSubmission === submission.id && (
                    <div className="mt-6 border-t pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* User-specific details based on type */}
                        {submission.user_type === 'jobseeker' && (
                          <>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Seeker Details</h3>
                              <div className="space-y-2 text-sm">
                                <p><span className="font-medium">Startup Experience:</span> {submission.has_startup_exp || 'Not specified'}</p>
                                <p><span className="font-medium">Open to Startups:</span> {submission.open_to_startup || 'Not specified'}</p>
                              </div>
                            </div>
                            
                            {submission.selected_interests && submission.selected_interests.length > 0 && (
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                  {submission.selected_interests.map((interest, index) => (
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
                          </>
                        )}

                        {submission.user_type === 'aspiring' && (
                          <>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">Aspiring Entrepreneur Details</h3>
                              <div className="space-y-2 text-sm">
                                {submission.aspiring_idea && (
                                  <p><span className="font-medium">Idea:</span> {submission.aspiring_idea.name} ({submission.aspiring_idea.industry})</p>
                                )}
                                <p><span className="font-medium">Has Business:</span> {submission.aspiring_has_business || 'Not specified'}</p>
                                <p><span className="font-medium">Timeline:</span> {submission.aspiring_timeline || 'Not specified'}</p>
                              </div>
                            </div>
                            
                            {submission.aspiring_interests && submission.aspiring_interests.length > 0 && (
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                  {submission.aspiring_interests.map((interest, index) => (
                                    <span 
                                      key={index}
                                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                                    >
                                      {interest}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {submission.user_type === 'founder' && (
                          <>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">Founder Details</h3>
                              <div className="space-y-2 text-sm">
                                {submission.founder_idea && (
                                  <p><span className="font-medium">Company:</span> {submission.founder_idea.name} ({submission.founder_idea.industry})</p>
                                )}
                                {submission.founder_details && (
                                  <>
                                    <p><span className="font-medium">Stage:</span> {submission.founder_details.stage}</p>
                                    <p><span className="font-medium">Duration:</span> {submission.founder_details.duration}</p>
                                  </>
                                )}
                                <p><span className="font-medium">Team Size:</span> {submission.founder_team_size || 'Not specified'}</p>
                              </div>
                            </div>
                            
                            {submission.founder_interests && submission.founder_interests.length > 0 && (
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                  {submission.founder_interests.map((interest, index) => (
                                    <span 
                                      key={index}
                                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                                    >
                                      {interest}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
} 