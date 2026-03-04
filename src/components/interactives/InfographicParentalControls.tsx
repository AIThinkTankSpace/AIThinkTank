"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicParentalControls() {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F0] to-[#F5E6FF] pb-12">
      {/* Breadcrumb */}
      <div className="bg-white/50 backdrop-blur-sm sticky top-0 z-40 border-b border-[#20C997]/20">
        <div className="max-w-5xl mx-auto px-4 py-3 text-sm text-[#2D1B69]">
          <Link href="/" className="hover:text-[#FF6B6B]">
            Home
          </Link>
          {" &gt; "}
          <Link href="/ai-for-kids" className="hover:text-[#FF6B6B]">
            AI for Kids
          </Link>
          {" &gt; "}
          <span className="font-semibold">Parental Controls</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1B69] mb-4">
            🛡️ Parental Controls for AI Apps
          </h1>
          <p className="text-lg text-[#2D1B69]/70 mb-6">
            Keep your child safe while they explore AI tools
          </p>
          <ShareButton variant="kids" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {/* The Challenge */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <div className="flex items-start gap-4">
            <span className="text-5xl">🤔</span>
            <div>
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-3">
                Why Standard Parental Controls Aren't Enough
              </h2>
              <p className="text-[#2D1B69]/80 mb-4">
                Traditional parental controls block websites and limit screen time. Those still matter, but AI apps are different because:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-lg">💬</span>
                  <p className="text-[#2D1B69]/80">
                    <span className="font-semibold">They're conversational:</span> Your child types questions. You can't simply block "bad websites."
                  </p>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-lg">📚</span>
                  <p className="text-[#2D1B69]/80">
                    <span className="font-semibold">They learn from interactions:</span> Some AI apps learn from usage, raising privacy questions.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-lg">⚡</span>
                  <p className="text-[#2D1B69]/80">
                    <span className="font-semibold">They're designed to be engaging:</span> AI apps are intentionally compelling, which can lead to extended use.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-lg">🔍</span>
                  <p className="text-[#2D1B69]/80">
                    <span className="font-semibold">Content is generated, not pre-screened:</span> Unlike YouTube, AI responses are created in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 3-Tier Approach */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#20C997]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span> The 3-Tier Safety Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 border-t-4 border-[#FF6B6B]">
              <p className="text-3xl mb-3">1️⃣</p>
              <h3 className="font-bold text-[#2D1B69] mb-2">
                Automated Filters
              </h3>
              <p className="text-sm text-[#2D1B69]/80 mb-4">
                Use built-in safety features on every platform. These block most obvious inappropriate content.
              </p>
              <div className="text-xs bg-[#FF6B6B]/10 rounded-xl p-3 text-[#2D1B69]/80">
                ✓ Content filters
                <br />✓ Age-gating
                <br />✓ Explicit content blocks
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-t-4 border-[#FFA94D]">
              <p className="text-3xl mb-3">2️⃣</p>
              <h3 className="font-bold text-[#2D1B69] mb-2">
                Conversation Awareness
              </h3>
              <p className="text-sm text-[#2D1B69]/80 mb-4">
                Know what your child is asking AI. This doesn't mean reading every chat—periodic spot-checks.
              </p>
              <div className="text-xs bg-[#FFA94D]/10 rounded-xl p-3 text-[#2D1B69]/80">
                ✓ Occasional reviews
                <br />✓ Ask what they learned
                <br />✓ Chat history checks
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-t-4 border-[#20C997]">
              <p className="text-3xl mb-3">3️⃣</p>
              <h3 className="font-bold text-[#2D1B69] mb-2">
                Trust &amp; Openness
              </h3>
              <p className="text-sm text-[#2D1B69]/80 mb-4">
                Build a relationship where your child tells you when something feels weird or uncomfortable.
              </p>
              <div className="text-xs bg-[#20C997]/10 rounded-xl p-3 text-[#2D1B69]/80">
                ✓ Open conversation
                <br />✓ Safe to report issues
                <br />✓ No punishment for reporting
              </div>
            </div>
          </div>
        </div>

        {/* Platform-Specific Guides */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">⚙️</span> Parental Controls by Platform
          </h2>

          {/* ChatGPT */}
          <div
            className="bg-white rounded-3xl border-2 border-[#20C997]/20 cursor-pointer hover:shadow-lg transition-all"
            onClick={() =>
              setExpandedPlatform(
                expandedPlatform === "chatgpt" ? null : "chatgpt"
              )
            }
          >
            <div className="p-6 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <span className="text-5xl">💬</span>
                <div>
                  <h3 className="text-xl font-bold text-[#2D1B69]">ChatGPT</h3>
                  <p className="text-sm text-[#2D1B69]/70">
                    Age 13+ per terms (with parental oversight)
                  </p>
                </div>
              </div>
              <span className="text-2xl">
                {expandedPlatform === "chatgpt" ? "▼" : "▶"}
              </span>
            </div>

            {expandedPlatform === "chatgpt" && (
              <div className="px-6 pb-6 space-y-4 bg-[#20C997]/5 border-t-2 border-[#20C997]/20">
                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#20C997]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    ✅ Built-in Safety Features
                  </p>
                  <ul className="space-y-2 text-sm text-[#2D1B69]/80">
                    <li>✓ Content filters block explicit requests</li>
                    <li>✓ "Plus" plan has custom instructions (parental rules)</li>
                    <li>✓ Can disable chat history for privacy</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FFA94D]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    📋 Setup Steps
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">1.</span> Create a family account (you control email)
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">2.</span> Go to Settings &gt; Temporary Chat to disable history if desired
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">3.</span> Use Custom Instructions: "Keep responses appropriate for age 10+"
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">4.</span> Check chat history occasionally
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    ⏱️ Screen Time Control
                  </p>
                  <p className="text-sm text-[#2D1B69]/80 mb-2">
                    Use device-level controls (Apple Screen Time, Google Family Link) to limit ChatGPT app time.
                  </p>
                  <p className="text-sm text-[#2D1B69]/80">
                    Recommended: 30 minutes for homework help, 15 minutes for exploration
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Google AI Tools */}
          <div
            className="bg-white rounded-3xl border-2 border-[#20C997]/20 cursor-pointer hover:shadow-lg transition-all"
            onClick={() =>
              setExpandedPlatform(
                expandedPlatform === "google" ? null : "google"
              )
            }
          >
            <div className="p-6 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <span className="text-5xl">🔍</span>
                <div>
                  <h3 className="text-xl font-bold text-[#2D1B69]">
                    Google AI Tools (Gemini, Bard)
                  </h3>
                  <p className="text-sm text-[#2D1B69]/70">
                    13+ for account, Family Link for younger kids
                  </p>
                </div>
              </div>
              <span className="text-2xl">
                {expandedPlatform === "google" ? "▼" : "▶"}
              </span>
            </div>

            {expandedPlatform === "google" && (
              <div className="px-6 pb-6 space-y-4 bg-[#20C997]/5 border-t-2 border-[#20C997]/20">
                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#20C997]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    ✅ Built-in Safety Features
                  </p>
                  <ul className="space-y-2 text-sm text-[#2D1B69]/80">
                    <li>✓ SafeSearch filters (moderate/strict modes)</li>
                    <li>✓ Content policies block violence &amp; hate speech</li>
                    <li>✓ Integrated with Family Link for control</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FFA94D]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    📋 Setup with Family Link
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">1.</span> Create Google account for child
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">2.</span> Add to Google Family Link
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">3.</span> Set content restrictions to "Strict"
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">4.</span> Enable app approval for new downloads
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">5.</span> Set screen time limits (45-60 min recommended)
                    </p>
                  </div>
                </div>

                <div className="bg-[#20C997]/10 rounded-2xl p-5 border-l-4 border-[#20C997]">
                  <p className="font-semibold text-[#2D1B69] text-sm">
                    💡 Bonus: Family Link shows exactly how much time spent on each app
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Amazon Alexa */}
          <div
            className="bg-white rounded-3xl border-2 border-[#20C997]/20 cursor-pointer hover:shadow-lg transition-all"
            onClick={() =>
              setExpandedPlatform(
                expandedPlatform === "alexa" ? null : "alexa"
              )
            }
          >
            <div className="p-6 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <span className="text-5xl">🔊</span>
                <div>
                  <h3 className="text-xl font-bold text-[#2D1B69]">
                    Amazon Alexa &amp; Voice Assistants
                  </h3>
                  <p className="text-sm text-[#2D1B69]/70">
                    Often the first AI kids encounter
                  </p>
                </div>
              </div>
              <span className="text-2xl">
                {expandedPlatform === "alexa" ? "▼" : "▶"}
              </span>
            </div>

            {expandedPlatform === "alexa" && (
              <div className="px-6 pb-6 space-y-4 bg-[#20C997]/5 border-t-2 border-[#20C997]/20">
                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#20C997]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    ✅ Built-in Safety Features
                  </p>
                  <ul className="space-y-2 text-sm text-[#2D1B69]/80">
                    <li>✓ Alexa Guard mode filters inappropriate content</li>
                    <li>✓ Communication restrictions (who can contact)</li>
                    <li>✓ Purchase controls (PIN required)</li>
                    <li>✓ Question filtering (custom settings)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FFA94D]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    📋 Setup Steps
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">1.</span> Open Alexa app &gt; More &gt; Alexa Guard
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">2.</span> Set to "Guard" mode (filters content)
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">3.</span> Disable voice purchasing
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">4.</span> Limit communications in Settings
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">5.</span> Enable Sensitive Content Filter (beta)
                    </p>
                  </div>
                </div>

                <div className="bg-[#FF6B6B]/10 rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
                  <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                    ⚠️ Important Privacy Consideration
                  </p>
                  <p className="text-[#2D1B69]/80 text-sm">
                    Voice assistants listen for wake words and record conversations. Discuss with your child: "Alexa hears what we say, even when we're not talking to it."
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Learning Apps */}
          <div
            className="bg-white rounded-3xl border-2 border-[#20C997]/20 cursor-pointer hover:shadow-lg transition-all"
            onClick={() =>
              setExpandedPlatform(
                expandedPlatform === "apps" ? null : "apps"
              )
            }
          >
            <div className="p-6 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <span className="text-5xl">📱</span>
                <div>
                  <h3 className="text-xl font-bold text-[#2D1B69]">
                    AI Learning Apps (Khan Academy, Duolingo, etc.)
                  </h3>
                  <p className="text-sm text-[#2D1B69]/70">
                    Purpose-built for learning
                  </p>
                </div>
              </div>
              <span className="text-2xl">
                {expandedPlatform === "apps" ? "▼" : "▶"}
              </span>
            </div>

            {expandedPlatform === "apps" && (
              <div className="px-6 pb-6 space-y-4 bg-[#20C997]/5 border-t-2 border-[#20C997]/20">
                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#20C997]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    ✅ Built-in Safety Features
                  </p>
                  <ul className="space-y-2 text-sm text-[#2D1B69]/80">
                    <li>✓ Age-gated content</li>
                    <li>✓ Limited to educational purposes</li>
                    <li>✓ Privacy policies focused on learning, not ads</li>
                    <li>✓ Parent email required for sign-up</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FFA94D]">
                  <p className="font-bold text-[#2D1B69] mb-3">
                    📋 Setup Steps
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">1.</span> Create account with YOUR email
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">2.</span> Check privacy settings (most have strong data policies)
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">3.</span> Set daily usage limits (30-45 min healthy)
                    </p>
                    <p className="text-[#2D1B69]/80">
                      <span className="font-semibold text-[#2D1B69]">4.</span> Review parent dashboard weekly
                    </p>
                  </div>
                </div>

                <div className="bg-[#20C997]/10 rounded-2xl p-5 border-l-4 border-[#20C997]">
                  <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                    💡 Parent Dashboard Pro Tip
                  </p>
                  <p className="text-[#2D1B69]/80 text-sm">
                    Most educational apps show progress, usage time, and areas where kids struggle. Use this to support learning, not just monitor.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Device-Level Controls */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">📱</span> Device-Level Controls (Work for ALL Apps)
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Apple */}
            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#2D1B69]">
              <h3 className="font-bold text-[#2D1B69] mb-3">🍎 Apple Screen Time</h3>
              <div className="text-sm space-y-2">
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">1.</span> Settings &gt; Screen Time
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">2.</span> Set App Limits by category
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">3.</span> Use Downtime for scheduled off-time
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">4.</span> Content &amp; Privacy Restrictions &gt; Web content
                </p>
              </div>
            </div>

            {/* Google */}
            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#4285F4]">
              <h3 className="font-bold text-[#2D1B69] mb-3">📱 Google Family Link</h3>
              <div className="text-sm space-y-2">
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">1.</span> Download app (parent &amp; child)
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">2.</span> Set app approval (you approve downloads)
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">3.</span> Manage screen time &amp; downtime
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">4.</span> Location tracking (bonus!)
                </p>
              </div>
            </div>

            {/* Windows */}
            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#0078D4]">
              <h3 className="font-bold text-[#2D1B69] mb-3">💻 Windows Controls</h3>
              <div className="text-sm space-y-2">
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">1.</span> Settings &gt; Family &amp; Users
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">2.</span> Set child account
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">3.</span> Web &amp; app filtering
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">4.</span> Screen time limits
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Conversation */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#20C997]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">💬</span> The Conversation to Have
          </h2>

          <div className="bg-white rounded-2xl p-6 space-y-4">
            <p className="text-[#2D1B69]/80 mb-4">
              Before your child starts using AI, discuss this clearly:
            </p>

            <div className="space-y-3">
              <div className="bg-[#C3FAE8]/20 rounded-xl p-4 border-l-4 border-[#C3FAE8]">
                <p className="font-semibold text-[#2D1B69] mb-2">
                  "AI is like a really smart library, but it's not perfect."
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  It doesn't know everything, and sometimes it makes things up.
                </p>
              </div>

              <div className="bg-[#20C997]/20 rounded-xl p-4 border-l-4 border-[#20C997]">
                <p className="font-semibold text-[#2D1B69] mb-2">
                  "Verify important information"
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  Don't assume AI is always right. Check sources.
                </p>
              </div>

              <div className="bg-[#FF6B6B]/20 rounded-xl p-4 border-l-4 border-[#FF6B6B]">
                <p className="font-semibold text-[#2D1B69] mb-2">
                  "No personal information"
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  Never give AI your address, phone, real name, or passwords.
                </p>
              </div>

              <div className="bg-[#FFA94D]/20 rounded-xl p-4 border-l-4 border-[#FFA94D]">
                <p className="font-semibold text-[#2D1B69] mb-2">
                  "If something seems wrong, ask me"
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  Weird content, confusing responses, anything that bothers you.
                </p>
              </div>

              <div className="bg-[#E8D5F5]/20 rounded-xl p-4 border-l-4 border-[#E8D5F5]">
                <p className="font-semibold text-[#2D1B69] mb-2">
                  "It's okay to say no"
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  If you feel uncomfortable, you don't have to use it.
                </p>
              </div>

              <div className="bg-[#C3FAE8]/20 rounded-xl p-4 border-l-4 border-[#C3FAE8]">
                <p className="font-semibold text-[#2D1B69] mb-2">
                  "Time limits matter"
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  Like all screen time, AI has healthy limits.
                </p>
              </div>
            </div>

            <div className="bg-[#E8D5F5]/10 rounded-xl p-4 border-t-2 border-[#E8D5F5] mt-4">
              <p className="font-semibold text-[#2D1B69] text-sm">
                💡 Remember: This isn't about fear—it's about informed use.
              </p>
            </div>
          </div>
        </div>

        {/* Red Flags */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🚨</span> Red Flags: When to Increase Controls
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Avoiding you while using AI
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Secrecy is a red flag
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Rapid increase in screen time
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Suddenly wants to use AI constantly
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Upset when access is limited
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Shows signs of addictive behavior
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Repeating false information as fact
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Not fact-checking AI responses
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Asking AI questions for trusted adults
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Prefer AI over parent/teacher advice
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Describing inappropriate content from AI
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Safety filters aren't working as intended
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#FF6B6B]/10 rounded-xl p-4 border-t-2 border-[#FF6B6B]">
            <p className="font-semibold text-[#2D1B69] mb-2">
              If you notice any of these:
            </p>
            <p className="text-[#2D1B69]/80 text-sm">
              Increase monitoring, consider limiting access temporarily, and investigate what's happening.
            </p>
          </div>
        </div>

        {/* Setup Checklist */}
        <div className="bg-gradient-to-br from-[#FFA94D]/10 to-[#FF6B6B]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">✅</span> Quick Setup Checklist
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <input type="checkbox" className="mt-1" disabled />
              <p className="text-[#2D1B69]">Choose one AI app your child will use</p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <input type="checkbox" className="mt-1" disabled />
              <p className="text-[#2D1B69]">
                Set up account or device-level parental controls
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <input type="checkbox" className="mt-1" disabled />
              <p className="text-[#2D1B69]">
                Enable content filters to "strict" or "moderate"
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <input type="checkbox" className="mt-1" disabled />
              <p className="text-[#2D1B69]">
                Set screen time limits (30-60 min per day)
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <input type="checkbox" className="mt-1" disabled />
              <p className="text-[#2D1B69]">Enable activity logging/monitoring</p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <input type="checkbox" className="mt-1" disabled />
              <p className="text-[#2D1B69]">Have the conversation about safe AI use</p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <input type="checkbox" className="mt-1" disabled />
              <p className="text-[#2D1B69]">
                Schedule weekly check-in: "What cool things did you learn with AI?"
              </p>
            </div>
          </div>
        </div>

        {/* Balance */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#E8D5F5]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/20">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">⚖️</span> Balancing Safety and Exploration
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#20C997]">
              <p className="font-bold text-[#2D1B69] mb-3">✅ Safe Exploration</p>
              <ul className="space-y-2 text-sm text-[#2D1B69]/80">
                <li>✓ Time limits that prevent addiction</li>
                <li>✓ Content filters for obvious harm</li>
                <li>✓ Your awareness of general usage</li>
                <li>✓ Open communication about encounters</li>
                <li>✓ Frequent conversations about learning</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#FF6B6B]">
              <p className="font-bold text-[#2D1B69] mb-3">❌ Over-Restriction</p>
              <ul className="space-y-2 text-sm text-[#2D1B69]/80">
                <li>✗ Complete bans (pushes underground)</li>
                <li>✗ No explanation for rules</li>
                <li>✗ Secret monitoring</li>
                <li>✗ Refusing helpful tools like Khanmigo</li>
                <li>✗ Lack of communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gradient-to-br from-[#20C997]/10 to-[#E8D5F5]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/20">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">
            🔗 Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Link
              href="/ai-for-kids/homework-help"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                📚 AI Homework Help
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                Using AI as a tutor effectively
              </p>
            </Link>
            <Link
              href="/ai-for-kids/voice-assistants"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                🔊 Voice Assistants for Kids
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                Safety guide for Alexa, Google, Siri
              </p>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#20C997]">
            <p className="font-semibold text-[#2D1B69] mb-3">
              💬 Share this guide with other parents
            </p>
            <ShareButton variant="kids" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FFA94D] rounded-3xl p-8 text-center text-white">
          <p className="text-lg font-bold mb-2">Ready to set up safe AI for your child?</p>
          <p className="text-base opacity-95 mb-4">
            Start with one platform and build from there.
          </p>
          <Link
            href="/ai-for-kids"
            className="inline-block bg-white text-[#FF6B6B] font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
          >
            Explore AI for Kids Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
