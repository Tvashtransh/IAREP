import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#171A1F] text-[#DEE1E6] py-12 border-t border-[#BDCACB]/20">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-3">
            <div className="h-11 w-[123px] relative mb-8">
              <Image
                src="/images/NewLogo.png"
                alt="IdeaAscend Logo"
                fill
                className="object-contain"
              />
            </div>

          </div>

          {/* Product Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[#DEE1E6] text-lg font-medium mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link href="/startup-jobs" className="text-[#DEE1E6] hover:text-[#41E5FF] transition-colors">All Jobs</Link></li>
              <li><Link href="/startup-jobs/companies" className="text-[#DEE1E6] hover:text-[#41E5FF] transition-colors">Companies</Link></li>
              <li><Link href="/validate-idea" className="text-[#DEE1E6] hover:text-[#41E5FF] transition-colors">Candidates</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[#DEE1E6] text-lg font-medium mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-[#DEE1E6] hover:text-[#41E5FF] transition-colors">Blog</Link></li>
              <li><Link href="/guides" className="text-[#DEE1E6] hover:text-[#41E5FF] transition-colors">User guides</Link></li>
              <li><Link href="/webinars" className="text-[#DEE1E6] hover:text-[#41E5FF] transition-colors">Webinars</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[#DEE1E6] text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[#DEE1E6] hover:text-[#41E5FF] transition-colors">About</Link></li>
              <li><Link href="/collaborate" className="text-[#DEE1E6] hover:text-[#41E5FF] transition-colors">Join us</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <h3 className="text-[#41E5FF] text-lg font-medium mb-2">Subscribe to our newsletter</h3>
            <p className="text-[#DEE1E6] mb-6 text-sm">For product announcements and exclusive insights</p>
            
            <div className="flex gap-1">
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.67 3.45H13.33L8 8.78L2.67 3.45Z" stroke="white" strokeWidth="1.37"/>
                    <path d="M1.73 2.87H14.27V13.13H1.73V2.87Z" stroke="white" strokeWidth="1.37" fill="none"/>
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Input your email"
                  className="w-full bg-[#1D1D1D] text-white px-4 py-2 pl-10 text-sm placeholder-[#FBFBFB] border-0 focus:outline-none focus:ring-2 focus:ring-[#41E5FF]/50"
                />
              </div>
              <button className="bg-[#41E5FF] text-[#005C6A] px-6 py-2 font-medium text-sm whitespace-nowrap hover:bg-[#41E5FF]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[#DEE1E6]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-[#DEE1E6] text-sm">© 2025 IdeaAscend, Inc.</div>
            
            {/* Links */}
            <div className="flex items-center gap-2 text-[#DEE1E6] text-sm">
              <Link href="/privacy" className="hover:text-[#41E5FF] transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#41E5FF] transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/sitemap" className="hover:text-[#41E5FF] transition-colors">Sitemap</Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Twitter */}
              <Link href="https://twitter.com/ideaascend" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6 4.2C20.88 4.56 20.1 4.8 19.26 4.92C20.1 4.44 20.76 3.66 21.06 2.7C20.28 3.18 19.38 3.48 18.42 3.66C17.7 2.88 16.68 2.4 15.54 2.4C13.38 2.4 11.64 4.14 11.64 6.3C11.64 6.66 11.7 6.96 11.76 7.26C8.28 7.08 5.28 5.58 3.42 3.24C3.06 3.78 2.82 4.44 2.82 5.16C2.82 6.54 3.54 7.74 4.62 8.46C3.96 8.46 3.36 8.28 2.82 7.98C2.82 8.01 2.82 8.04 2.82 8.07C2.82 9.96 4.14 11.58 5.88 11.94C5.52 12.06 5.16 12.12 4.74 12.12C4.44 12.12 4.14 12.09 3.87 12.03C4.44 13.65 5.88 14.82 7.56 14.85C6.24 15.87 4.56 16.5 2.76 16.5C2.4 16.5 2.04 16.47 1.68 16.41C3.36 17.49 5.34 18.12 7.5 18.12C15.54 18.12 20.04 12.18 20.04 7.08V6.72C20.76 6.18 21.36 5.52 21.84 4.8L21.6 4.2Z" fill="#2EE5FF"/>
                </svg>
              </Link>

              {/* Facebook */}
              <Link href="https://facebook.com/ideaascend" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6 2.4H19.2C17.52 2.4 16.8 3.84 16.8 5.76V8.16H14.4V11.52H16.8V21.6H20.16V11.52H22.56L22.92 8.16H20.16V6.24C20.16 5.52 20.4 5.16 21.24 5.16H22.92V2.4H21.6Z" fill="#2E6FE8"/>
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link href="https://linkedin.com/company/ideaascend" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 3H3C2.175 3 1.5 3.675 1.5 4.5V19.5C1.5 20.325 2.175 21 3 21H21C21.825 21 22.5 20.325 22.5 19.5V4.5C22.5 3.675 21.825 3 21 3ZM7.5 18H5.25V9H7.5V18ZM6.375 8.1C5.775 8.1 5.25 7.575 5.25 6.975C5.25 6.375 5.775 5.85 6.375 5.85C6.975 5.85 7.5 6.375 7.5 6.975C7.5 7.575 6.975 8.1 6.375 8.1ZM18.75 18H16.5V13.5C16.5 12.75 16.05 12.375 15.375 12.375C14.7 12.375 14.25 12.75 14.25 13.5V18H12V9H14.25V10.125C14.625 9.45 15.45 9 16.5 9C18 9 18.75 9.9 18.75 11.625V18Z" fill="#587EDE"/>
                </svg>
              </Link>

              {/* YouTube */}
              <Link href="https://youtube.com/@ideaascend" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6 5.22C21.36 4.5 20.82 3.96 20.1 3.72C18.84 3.6 12 3.6 12 3.6C12 3.6 5.16 3.6 3.9 3.72C3.18 3.96 2.64 4.5 2.4 5.22C2.4 6.48 2.4 12 2.4 12C2.4 12 2.4 17.52 2.4 18.78C2.64 19.5 3.18 20.04 3.9 20.28C5.16 20.4 12 20.4 12 20.4C12 20.4 18.84 20.4 20.1 20.28C20.82 20.04 21.36 19.5 21.6 18.78C21.6 17.52 21.6 12 21.6 12C21.6 12 21.6 6.48 21.6 5.22ZM10.2 15.6V8.4L15.6 12L10.2 15.6Z" fill="#E82E2E"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 