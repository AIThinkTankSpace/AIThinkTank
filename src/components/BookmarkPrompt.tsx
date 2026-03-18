"use client";

import { useState, useEffect } from "react";

interface BookmarkPromptProps {
  updateFrequency: string;
  formattedDate: string;
}

type DeviceType = "mac" | "ios" | "android" | "windows";

function getDeviceType(): DeviceType {
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  if (navigator.platform.toUpperCase().includes("MAC")) return "mac";
  return "windows";
}

function getBookmarkInstruction(device: DeviceType): string {
  switch (device) {
    case "mac":
      return "Press ⌘+D to bookmark this page";
    case "ios":
      return "Tap the Share button (□↑) then tap \"Add to Favorites\"";
    case "android":
      return "Tap the menu (⋮) then tap \"Add to Home screen\" or \"Bookmark\"";
    case "windows":
      return "Press Ctrl+D to bookmark this page";
  }
}

function getShortcutLabel(device: DeviceType): string | null {
  switch (device) {
    case "mac":
      return "⌘+D";
    case "windows":
      return "Ctrl+D";
    default:
      return null; // no keyboard shortcut on mobile
  }
}

export default function BookmarkPrompt({ updateFrequency, formattedDate }: BookmarkPromptProps) {
  const [device, setDevice] = useState<DeviceType>("windows");
  const [pulsed, setPulsed] = useState(false);

  useEffect(() => {
    setDevice(getDeviceType());
    const timer = setTimeout(() => setPulsed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const shortcutLabel = getShortcutLabel(device);
  const instruction = getBookmarkInstruction(device);

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      {/* Persuasive tagline */}
      <p className="text-sm text-gray-600 flex items-center gap-2">
        <span className="text-base">🔔</span>
        Fresh AI news added daily — bookmark this page so you never miss an update
      </p>

      {/* Bold bookmark CTA */}
      <button
        onClick={() => {
          alert(instruction + "\n\nYou'll always have quick access to the latest AI updates.");
        }}
        className={`group inline-flex items-center gap-2.5 text-sm font-bold px-6 py-3 rounded-xl bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg transition-all duration-300 ${
          pulsed ? "animate-bounce-once" : ""
        }`}
      >
        <svg className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        Bookmark this page
        {shortcutLabel && (
          <kbd className="hidden sm:inline px-2 py-0.5 bg-teal-700/50 border border-teal-500/30 rounded text-xs font-mono text-teal-100">
            {shortcutLabel}
          </kbd>
        )}
      </button>

      {/* Updated date — subtle, below the CTA */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Updated {formattedDate}
      </div>
    </div>
  );
}
