"use client";

import { useState } from "react";

interface ShareButtonProps {
  title?: string;
  url?: string;
  description?: string;
  variant?: "default" | "kids" | "teens" | "corporate";
}

export default function ShareButton({
  title,
  url,
  description,
  variant = "default",
}: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? url || window.location.href : "";
  const pageTitle = title || (typeof document !== "undefined" ? document.title : "AI Think Tank");
  const shareText = description ? `${pageTitle} — ${description}` : pageTitle;

  const colorSchemes = {
    default: {
      button: "bg-gray-100 hover:bg-gray-200 text-gray-700",
      menu: "bg-white border-gray-200",
      whatsapp: "hover:bg-green-50",
      twitter: "hover:bg-blue-50",
      linkedin: "hover:bg-blue-50",
      copy: "hover:bg-gray-50",
    },
    kids: {
      button: "bg-amber-100 hover:bg-amber-200 text-amber-800",
      menu: "bg-white border-amber-200",
      whatsapp: "hover:bg-green-50",
      twitter: "hover:bg-amber-50",
      linkedin: "hover:bg-amber-50",
      copy: "hover:bg-amber-50",
    },
    teens: {
      button: "bg-blue-100 hover:bg-blue-200 text-blue-800",
      menu: "bg-white border-blue-200",
      whatsapp: "hover:bg-green-50",
      twitter: "hover:bg-blue-50",
      linkedin: "hover:bg-blue-50",
      copy: "hover:bg-blue-50",
    },
    corporate: {
      button: "bg-slate-100 hover:bg-slate-200 text-slate-800",
      menu: "bg-white border-slate-200",
      whatsapp: "hover:bg-green-50",
      twitter: "hover:bg-slate-50",
      linkedin: "hover:bg-blue-50",
      copy: "hover:bg-slate-50",
    },
  };

  const colors = colorSchemes[variant];

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pageTitle,
          text: description || pageTitle,
          url: shareUrl,
        });
      } catch {
        // User cancelled or share failed silently
      }
    }
    setShowMenu(false);
  };

  const handleWhatsApp = () => {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareText}\n\n${shareUrl}`
    )}`;
    window.open(waUrl, "_blank");
    setShowMenu(false);
  };

  const handleTwitter = () => {
    const tUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(tUrl, "_blank");
    setShowMenu(false);
  };

  const handleLinkedIn = () => {
    const lUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(lUrl, "_blank");
    setShowMenu(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard failed silently
    }
    setShowMenu(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${colors.button}`}
        aria-label="Share this content"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Share
      </button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          />

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-56 rounded-xl shadow-lg border z-50 overflow-hidden ${colors.menu}`}
          >
            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors ${colors.whatsapp}`}
            >
              <span className="text-lg">💬</span>
              <span className="font-medium">WhatsApp</span>
            </button>

            {/* Twitter/X */}
            <button
              onClick={handleTwitter}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors ${colors.twitter}`}
            >
              <span className="text-lg">𝕏</span>
              <span className="font-medium">Twitter / X</span>
            </button>

            {/* LinkedIn */}
            <button
              onClick={handleLinkedIn}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors ${colors.linkedin}`}
            >
              <span className="text-lg">💼</span>
              <span className="font-medium">LinkedIn</span>
            </button>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors ${colors.copy}`}
            >
              <span className="text-lg">{copied ? "✅" : "🔗"}</span>
              <span className="font-medium">
                {copied ? "Link copied!" : "Copy link"}
              </span>
            </button>

            {/* Web Share API (mobile) */}
            {typeof navigator !== "undefined" && "share" in navigator && (
              <>
                <div className="border-t border-gray-100" />
                <button
                  onClick={handleWebShare}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors ${colors.copy}`}
                >
                  <span className="text-lg">📲</span>
                  <span className="font-medium">More options...</span>
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
