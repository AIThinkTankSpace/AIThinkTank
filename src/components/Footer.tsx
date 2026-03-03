"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-3">
              AI<span className="text-blue-400">Think</span>Tank
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Making AI accessible for everyone — kids, teens, and professionals.
              Free, practical, and jargon-free.
            </p>
          </div>

          {/* Hubs */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-for-kids" className="hover:text-amber-400 transition-colors">AI for Kids</Link></li>
              <li><Link href="/ai-for-teens" className="hover:text-blue-400 transition-colors">AI for Teens</Link></li>
              <li><Link href="/ai-for-corporates" className="hover:text-green-400 transition-colors">AI for Corporates</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="https://youtube.com/@aithinktank" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">YouTube Channel</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-3">Get one good AI insight per week. No spam, ever.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI Think Tank. All rights reserved. | <Link href="https://www.aithinktank.space" className="hover:text-white">www.aithinktank.space</Link></p>
        </div>
      </div>
    </footer>
  );
}
