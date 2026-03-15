"use client";

import { useState, useEffect } from "react";

interface BookmarkPromptProps {
  updateFrequency: string;
  formattedDate: string;
}

export default function BookmarkPrompt({ updateFrequency, formattedDate }: BookmarkPromptProps) {
  const [copied, setCopied] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().includes("MAC"));
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-6 inline-flex flex-col items-center gap-3">
      {/* Updated date */}
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <svg className="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Updated {formattedDate} — we refresh this page {updateFrequency}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        {/* Copy link button */}
        <button
          onClick={handleCopyLink}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
            copied
              ? "bg-teal-100 text-teal-700 border border-teal-200"
              : "bg-white border border-gray-200 text-gray-700 hover:border-teal-300 hover:text-teal-700 hover:shadow-sm"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Link copied!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Copy page link
            </>
          )}
        </button>

        {/* Bookmark shortcut hint */}
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-400 px-3 py-2 bg-gray-50 rounded-lg border border-gray-100">
          <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z" />
          </svg>
          or press <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono font-bold text-gray-600 shadow-sm">{isMac ? "Cmd" : "Ctrl"}+D</kbd> to bookmark
        </span>
      </div>
    </div>
  );
}
