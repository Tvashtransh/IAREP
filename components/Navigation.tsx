'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId?: string,
    href?: string
  ) => {
    if (pathname === '/' && sectionId) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else if (pathname === '/' && !sectionId) {
      // Home link: scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    } else if (sectionId) {
      e.preventDefault();
      router.push('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }, 400);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services', sectionId: 'experience-unified-platform' },
    { href: '/community', label: 'Community', sectionId: 'join-community' },
    { href: '/blog', label: 'Blog', sectionId: 'want-to-learn-more' },
  ]

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Mobile: Hamburger Menu + Logo */}
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="w-5 h-0.5 bg-gray-600"></span>
              <span className="w-5 h-0.5 bg-gray-600"></span>
              <span className="w-5 h-0.5 bg-gray-600"></span>
            </button>
            
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/NewLogo.png"
                alt="IdeaAscend Logo"
                width={45}
                height={45}
                className="object-contain h-[36px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop: Logo + Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Desktop Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/NewLogo.png"
                alt="IdeaAscend Logo"
                width={51}
                height={51}
                className="object-contain h-[41px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-primary-500 font-medium transition-colors duration-200"
                  onClick={(e) => handleNavClick(e, link.sectionId, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 font-medium transition-colors duration-200 text-base"
                  onClick={(e) => handleNavClick(e, link.sectionId, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 