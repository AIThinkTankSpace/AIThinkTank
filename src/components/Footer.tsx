"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="AI Think Tank" width={40} height={40} className="rounded-lg brightness-110" />
              <span className="text-white font-bold text-lg tracking-tight">AI Think Tank</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Making AI accessible for everyone — kids, teens, and professionals.
              Free, practical, and jargon-free.
            </p>
          </div>

          {/* Hubs */}
          <div>
            <h4 className="text-teal-400 text-xs font-semibold mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/ai-for-kids" className="hover:text-teal-300 transition-colors">AI for Kids</Link></li>
              <li><Link href="/ai-for-teens" className="hover:text-teal-300 transition-colors">AI for Teens</Link></li>
              <li><Link href="/ai-for-corporates" className="hover:text-teal-300 transition-colors">AI for Corporates</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-teal-400 text-xs font-semibold mb-4 uppercase tracking-widest">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/downloads" className="hover:text-teal-300 transition-colors">Free Downloads</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="https://youtube.com/@aithinktank" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube Channel</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-teal-400 text-xs font-semibold mb-4 uppercase tracking-widest">Stay Updated</h4>
            <p className="text-sm text-gray-500 mb-3">Get one good AI insight per week. No spam, ever.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-500 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} AI Think Tank. All rights reserved. | <Link href="https://www.aithinktank.space" className="hover:text-teal-400 transition-colors">www.aithinktank.space</Link></p>
        </div>
      </div>
    </footer>
  );
}
