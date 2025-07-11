'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function JobApplicationsAdminPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState({
    status: 'all',
    company: 'all'
  });

  useEffect(() => {
    fetchApplications();
  }, [page, filters]);

  const fetchApplications = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...filters
      });
      
      const response = await fetch(`/api/admin/job-applications?${queryParams}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setApplications(result.data);
        setPagination(result.pagination);
      } else {
        throw new Error(result.error || 'Failed to fetch applications');
      }
    } catch (err) {
      console.error('Error fetching applications:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'reviewing': 'bg-blue-100 text-blue-800',
      'shortlisted': 'bg-green-100 text-green-800',
      'interviewed': 'bg-purple-100 text-purple-800',
      'rejected': 'bg-red-100 text-red-800',
      'accepted': 'bg-green-200 text-green-900',
      'withdrawn': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatSalary = (salary) => {
    if (!salary) return 'Not specified';
    return `₹${salary.toLocaleString()}`;
  };

  if (loading && applications.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
              <p className="mt-1 text-sm text-gray-600">
                Manage and review job applications from candidates
              </p>
            </div>
            <Link 
              href="/admin"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="reviewing">Reviewing</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="interviewed">Interviewed</option>
                <option value="rejected">Rejected</option>
                <option value="accepted">Accepted</option>
                <option value="withdrawn">Withdrawn</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <select
                value={filters.company}
                onChange={(e) => setFilters({...filters, company: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Companies</option>
                {/* Add dynamic company options here */}
              </select>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={() => setPage(1)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error}</p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={fetchApplications}
                    className="bg-red-100 px-3 py-2 rounded-md text-sm font-medium text-red-800 hover:bg-red-200"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Applications Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          {applications.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No job applications found</p>
              <p className="text-gray-400 mt-2">Try adjusting your filters or check back later</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job & Company
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Experience
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expected Salary
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applied Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applications.map((application) => (
                      <tr key={application.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {application.applicant_name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {application.applicant_email}
                              </div>
                              {application.applicant_phone && (
                                <div className="text-sm text-gray-500">
                                  {application.applicant_phone}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {application.job_title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.company_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.job_location}
                            {application.is_remote && (
                              <span className="ml-1 text-green-600">(Remote)</span>
                            )}
                          </div>
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                          </span>
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {application.years_of_experience} years
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatSalary(application.expected_salary)}
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(application.applied_at)}
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              View
                            </button>
                            {application.resume_file_info && (
                              <a 
                                href={application.resume_file_info.publicUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-900"
                              >
                                Resume
                              </a>
                            )}
                            {application.portfolio_url && (
                              <a 
                                href={application.portfolio_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-900"
                              >
                                Portfolio
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button
                      onClick={() => setPage(Math.max(1, page - 1))}
                      disabled={page === 1}
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
                      disabled={page === pagination.totalPages}
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing{' '}
                        <span className="font-medium">
                          {(page - 1) * pagination.limit + 1}
                        </span>{' '}
                        to{' '}
                        <span className="font-medium">
                          {Math.min(page * pagination.limit, pagination.total)}
                        </span>{' '}
                        of{' '}
                        <span className="font-medium">{pagination.total}</span>{' '}
                        results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                          onClick={() => setPage(Math.max(1, page - 1))}
                          disabled={page === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        
                        {/* Page numbers */}
                        {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                          const pageNum = Math.max(1, Math.min(pagination.totalPages - 4, page - 2)) + i;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setPage(pageNum)}
                              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                pageNum === page
                                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                        
                        <button
                          onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
                          disabled={page === pagination.totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 