'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Wallet', href: '/wallet' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
];

// Custom Menu Icon Component
function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

// Custom X Icon Component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">D</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">DeFi Defense</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-silver-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/5 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/signup">
              <button className="bg-gradient-primary text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                Launch App
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-silver-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 glass-effect border-t border-white/5">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-silver-300 hover:text-white block px-3 py-2 text-base font-medium hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/signup">
                <button className="w-full bg-gradient-primary text-black px-6 py-2 rounded-lg font-semibold">
                  Launch App
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}