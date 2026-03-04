"use client";

import type { Category } from "@/lib/articles";
import { hubConfigs } from "@/lib/hub-config";

export default function NewsletterCTA({ category }: { category?: Category }) {
  const hub = category ? hubConfigs[category] : null;

  return (
    <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-teal-50/80 to-emerald-50/50 border border-teal-100/50">
      <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-xl flex items-center justify-center">
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Want more like this?
      </h3>
      <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
        We send one good AI insight per week. No spam, no fluff — just practical
        content you can use.
      </p>
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 bg-white transition-colors"
        />
        <button
          type="submit"
          className={`px-6 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm ${
            hub ? hub.buttonClass : "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-200"
          }`}
        >
          Subscribe Free
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-4">
        Join thousands of curious minds. Unsubscribe anytime.
      </p>
    </div>
  );
}
