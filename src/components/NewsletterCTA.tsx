"use client";

import type { Category } from "@/lib/articles";
import { hubConfigs } from "@/lib/hub-config";

export default function NewsletterCTA({ category }: { category?: Category }) {
  const hub = category ? hubConfigs[category] : null;

  return (
    <div className={`rounded-2xl p-8 text-center ${hub ? hub.bgClass : "bg-gradient-to-br from-blue-50 to-purple-50"}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Want more like this?
      </h3>
      <p className="text-gray-600 mb-5 max-w-md mx-auto">
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
          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <button
          type="submit"
          className={`px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${
            hub ? hub.buttonClass : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Subscribe Free
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-3">
        Join thousands of curious minds. Unsubscribe anytime.
      </p>
    </div>
  );
}
