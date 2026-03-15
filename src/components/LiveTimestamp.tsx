"use client";

import { useState, useEffect } from "react";

function getRelativeTime(buildTime: string): string {
  const now = Date.now();
  const built = new Date(buildTime).getTime();
  const diffMs = now - built;

  const minutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(diffMs / 3600000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `Updated ${minutes} min ago`;
  if (hours < 24) return `Updated ${hours}h ago`;
  return `Updated today`;
}

export default function LiveTimestamp({ buildTime }: { buildTime: string }) {
  const [timeText, setTimeText] = useState("");

  useEffect(() => {
    // Set immediately on mount
    setTimeText(getRelativeTime(buildTime));

    // Refresh every 60 seconds
    const interval = setInterval(() => {
      setTimeText(getRelativeTime(buildTime));
    }, 60000);

    return () => clearInterval(interval);
  }, [buildTime]);

  if (!timeText) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-teal-700 font-medium">
      {/* Pulsing live dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      {timeText}
    </span>
  );
}
