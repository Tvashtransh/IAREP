'use client';

import { useState, useEffect } from 'react';

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const fetchSubmissions = async (userType = 'all', page = 1) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (userType !== 'all') params.append('userType', userType);
      params.append('page', page.toString());
      params.append('limit', '20');

      const response = await fetch(`/api/submit-form?${params}`);
      const data = await response.json();

      if (data.success) {
        setSubmissions(data.data);
        setPagination(data.pagination);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch submissions');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions(filter, currentPage);
  }, [filter, currentPage]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const exportToCSV = () => {
    if (submissions.length === 0) return;

    const headers = [
      'ID', 'User Type', 'Full Name', 'Email', 'Mobile', 'College', 'City', 
      'LinkedIn', 'Submitted At', 'IP Address'
    ];

    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        sub._id,
        sub.userType,
        `"${sub.fullName}"`,
        sub.email,
        sub.mobile,
        `"${sub.college}"`,
        `"${sub.city}"`,
        sub.linkedin || '',
        formatDate(sub.submittedAt),
        sub.ipAddress || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `form-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#41E5FF] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error}</p>
          <button 
            onClick={() => fetchSubmissions(filter, currentPage)}
            className="mt-4 px-4 py-2 bg-[#41E5FF] text-white rounded-lg hover:bg-[#22CCF8]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Form Submissions</h1>
          <p className="text-gray-600">Manage and view all business form submissions</p>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all' 
                    ? 'bg-[#41E5FF] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({pagination.totalCount || 0})
              </button>
              <button
                onClick={() => handleFilterChange('jobseeker')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'jobseeker' 
                    ? 'bg-[#41E5FF] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Job Seekers
              </button>
              <button
                onClick={() => handleFilterChange('aspiring')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'aspiring' 
                    ? 'bg-[#41E5FF] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Aspiring Entrepreneurs
              </button>
              <button
                onClick={() => handleFilterChange('founder')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'founder' 
                    ? 'bg-[#41E5FF] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Founders
              </button>
            </div>
            
            <button
              onClick={exportToCSV}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {submissions.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 text-lg">No submissions found</p>
              <p className="text-gray-400 text-sm mt-2">Firebase integration is pending. Form submissions will appear here once Firebase is configured.</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Submitted
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {submissions.map((submission) => (
                      <tr key={submission._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {submission.fullName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {submission.college}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            submission.userType === 'jobseeker' 
                              ? 'bg-blue-100 text-blue-800'
                              : submission.userType === 'aspiring'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {submission.userType === 'jobseeker' ? 'Job Seeker' :
                             submission.userType === 'aspiring' ? 'Aspiring' : 'Founder'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{submission.email}</div>
                          <div className="text-sm text-gray-500">{submission.mobile}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {submission.city}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(submission.submittedAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="text-[#41E5FF] hover:text-[#22CCF8] mr-4"
                          >
                            View Details
                          </button>
                          {submission.linkedin && (
                            <a
                              href={submission.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              LinkedIn
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={!pagination.hasPrev}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={!pagination.hasNext}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing page <span className="font-medium">{pagination.currentPage}</span> of{' '}
                          <span className="font-medium">{pagination.totalPages}</span> ({pagination.totalCount} total)
                        </p>
                      </div>
                      <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                          <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={!pagination.hasPrev}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Previous
                          </button>
                          <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={!pagination.hasNext}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Submission Details - {selectedSubmission.fullName}
                </h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
                  {JSON.stringify(selectedSubmission, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 