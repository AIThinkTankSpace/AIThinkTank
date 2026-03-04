"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-teal-100/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="AI Think Tank" width={44} height={44} className="rounded-lg" priority />
            <span className="text-lg font-bold text-gray-900 tracking-tight">AI Think Tank</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/ai-for-kids"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-colors"
            >
              AI for Kids
            </Link>
            <Link
              href="/ai-for-teens"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-colors"
            >
              AI for Teens
            </Link>
            <Link
              href="/ai-for-corporates"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-colors"
            >
              AI for Corporates
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-teal-100/50">
            <div className="flex flex-col gap-1 pt-3">
              <Link href="/ai-for-kids" className="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-teal-50 hover:text-teal-700" onClick={() => setMobileMenuOpen(false)}>
                AI for Kids
              </Link>
              <Link href="/ai-for-teens" className="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-teal-50 hover:text-teal-700" onClick={() => setMobileMenuOpen(false)}>
                AI for Teens
              </Link>
              <Link href="/ai-for-corporates" className="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-teal-50 hover:text-teal-700" onClick={() => setMobileMenuOpen(false)}>
                AI for Corporates
              </Link>
              <Link href="/about" className="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
