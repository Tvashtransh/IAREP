'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function JobSeekerNavbar() {
  const pathname = usePathname();
  return (
    <div className="w-full h-16 bg-white border-b border-[#BEC1CA] flex items-center justify-between px-6">
      {/* Logo */}
      <div className="h-11 w-[123px] relative">
        <Link href="/jobseekerpages">
          <div className="w-full h-full relative flex items-center">
            <img
              src="/images/NewLogo.png"
              alt="IdeaAscend Logo"
              className="h-11 w-auto object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex h-12">
        <Link href="/jobseekerpages" className="h-full flex items-center px-3">
          <span className={pathname === '/jobseekerpages' ? 'text-[#41E5FF]' : 'text-[#565B6D] hover:text-[#41E5FF]'}>Dashboard</span>
        </Link>
        <Link href="/jobseekerpages/jobs" className="h-full flex items-center px-3">
          <span className={pathname === '/jobseekerpages/jobs' ? 'text-[#41E5FF]' : 'text-[#565B6D] hover:text-[#41E5FF]'}>All Jobs</span>
        </Link>
        <Link href="/jobseekerpages/people" className="h-full flex items-center px-3">
          <span className={pathname === '/jobseekerpages/people' ? 'text-[#41E5FF]' : 'text-[#565B6D] hover:text-[#41E5FF]'}>People</span>
        </Link>
        <Link href="/jobseekerpages/company" className="h-full flex items-center px-3">
          <span className={pathname === '/jobseekerpages/company' ? 'text-[#41E5FF]' : 'text-[#565B6D] hover:text-[#41E5FF]'}>Company</span>
        </Link>
        <Link href="/jobseekerpages/career-advice" className="h-full flex items-center px-3">
          <span className={pathname === '/jobseekerpages/career-advice' ? 'text-[#41E5FF]' : 'text-[#565B6D] hover:text-[#41E5FF]'}>Career Advice</span>
        </Link>
      </div>

      {/* User Menu */}
      {/* Removed messages icon, notification bell, user avatar, and dropdown arrow */}
    </div>
  );
} 