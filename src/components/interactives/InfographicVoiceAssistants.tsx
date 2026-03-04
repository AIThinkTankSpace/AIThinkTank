"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicVoiceAssistants() {
  const [expandedAge, setExpandedAge] = useState<string | null>(null);
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);

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
          <span className="font-semibold">Voice Assistants</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1B69] mb-4">
            🔊 Voice Assistants for Kids
          </h1>
          <p className="text-lg text-[#2D1B69]/70 mb-6">
            Benefits, concerns, and how to keep your child safe
          </p>
          <ShareButton variant="kids" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {/* What They Are */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#20C997]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <div className="flex items-start gap-4">
            <span className="text-5xl">🤖</span>
            <div>
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-3">
                What Voice Assistants Really Are
              </h2>
              <p className="text-[#2D1B69]/80 mb-4">
                Voice assistants like Alexa, Google Assistant, and Siri are AI programs that listen for their "wake word," process what you say, search for answers, and speak responses back.
              </p>
              <div className="bg-white rounded-2xl p-4 border-l-4 border-[#20C997]">
                <p className="font-semibold text-[#2D1B69] mb-2">
                  Important distinction:
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  They're not understanding you like a human does. They're matching patterns and retrieving information. This matters because it shapes both the benefits and the risks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">✅</span> The Benefits (Why Kids Should Use Them)
          </h2>

          <div className="space-y-4">
            {/* Asking Questions */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border-l-4 border-[#20C997]"
              onClick={() =>
                setExpandedBenefit(
                  expandedBenefit === "questions" ? null : "questions"
                )
              }
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">❓</span>
                  <h3 className="font-bold text-[#2D1B69]">
                    Learning Through Asking Questions
                  </h3>
                </div>
                <span className="text-2xl">
                  {expandedBenefit === "questions" ? "▼" : "▶"}
                </span>
              </div>

              {expandedBenefit === "questions" && (
                <div className="mt-4 space-y-3 bg-[#20C997]/10 rounded-xl p-4">
                  <p className="text-[#2D1B69]/80 text-sm">
                    Voice assistants make answering questions effortless. Your child wonders: "How tall is a giraffe?" Instead of looking it up, they ask Alexa.
                  </p>
                  <div className="bg-white rounded-xl p-3 border-l-4 border-[#20C997]">
                    <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                      What kids learn:
                    </p>
                    <ul className="space-y-1 text-sm text-[#2D1B69]/80">
                      <li>✓ Curiosity is encouraged</li>
                      <li>✓ How to ask questions to get information</li>
                      <li>✓ Quick access to knowledge</li>
                      <li>✓ Conversation as a tool</li>
                    </ul>
                  </div>
                  <p className="text-sm text-[#2D1B69]/80 italic">
                    Parent benefit: Your child asks for facts instead of constantly interrupting you.
                  </p>
                </div>
              )}
            </div>

            {/* Hands-Free */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border-l-4 border-[#20C997]"
              onClick={() =>
                setExpandedBenefit(
                  expandedBenefit === "handsfree" ? null : "handsfree"
                )
              }
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⏱️</span>
                  <h3 className="font-bold text-[#2D1B69]">
                    Hands-Free Convenience
                  </h3>
                </div>
                <span className="text-2xl">
                  {expandedBenefit === "handsfree" ? "▼" : "▶"}
                </span>
              </div>

              {expandedBenefit === "handsfree" && (
                <div className="mt-4 space-y-3 bg-[#20C997]/10 rounded-xl p-4">
                  <p className="text-[#2D1B69]/80 text-sm">
                    "Alexa, set a timer for 20 minutes" is easier than a kitchen timer for some kids.
                  </p>
                  <div className="bg-white rounded-xl p-3 border-l-4 border-[#20C997]">
                    <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                      Helps with:
                    </p>
                    <ul className="space-y-1 text-sm text-[#2D1B69]/80">
                      <li>✓ Reminders &amp; alarms</li>
                      <li>✓ Timers &amp; scheduling</li>
                      <li>✓ Developing independence</li>
                      <li>✓ Teaching responsibility</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Accessibility */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border-l-4 border-[#20C997]"
              onClick={() =>
                setExpandedBenefit(
                  expandedBenefit === "access" ? null : "access"
                )
              }
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">♿</span>
                  <h3 className="font-bold text-[#2D1B69]">
                    Accessibility for Some Kids
                  </h3>
                </div>
                <span className="text-2xl">
                  {expandedBenefit === "access" ? "▼" : "▶"}
                </span>
              </div>

              {expandedBenefit === "access" && (
                <div className="mt-4 space-y-3 bg-[#20C997]/10 rounded-xl p-4">
                  <p className="text-[#2D1B69]/80 text-sm">
                    For children with mobility issues, vision impairments, or dyslexia, voice interface opens doors that typing doesn't.
                  </p>
                  <p className="text-[#2D1B69]/80 text-sm font-semibold">
                    They can control their environment, access information, and participate more fully.
                  </p>
                </div>
              )}
            </div>

            {/* AI Literacy */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border-l-4 border-[#20C997]"
              onClick={() =>
                setExpandedBenefit(expandedBenefit === "literacy" ? null : "literacy")
              }
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🌍</span>
                  <h3 className="font-bold text-[#2D1B69]">
                    Exposure to AI as a Normal Tool
                  </h3>
                </div>
                <span className="text-2xl">
                  {expandedBenefit === "literacy" ? "▼" : "▶"}
                </span>
              </div>

              {expandedBenefit === "literacy" && (
                <div className="mt-4 space-y-3 bg-[#20C997]/10 rounded-xl p-4">
                  <p className="text-[#2D1B69]/80 text-sm">
                    Kids grow up in a voice-first world. Learning to use voice assistants appropriately is a life skill now.
                  </p>
                  <p className="text-[#2D1B69]/80 text-sm font-semibold">
                    It's not a luxury—it's preparing them for their future.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Concerns */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">⚠️</span> The Concerns (Why Parents Should Be Careful)
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">🎙️</span>
                <h3 className="font-bold text-[#2D1B69]">
                  Constant Listening (Perceived or Real)
                </h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80 mb-3">
                Devices listen for their wake word. In theory, they only record when activated. In practice, people worry about privacy.
              </p>
              <div className="bg-[#FF6B6B]/10 rounded-xl p-3 text-sm space-y-2">
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">The reality:</span> Amazon, Google, and Apple have confirmed devices record conversations. They use recordings to improve services (with some opt-out options).
                </p>
                <p className="font-semibold text-[#2D1B69]">
                  Your family's voice data is being collected.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">⚡</span>
                <h3 className="font-bold text-[#2D1B69]">Misinformation</h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80 mb-3">
                Voice assistants provide information quickly—but not always accurately.
              </p>
              <div className="bg-[#FF6B6B]/10 rounded-xl p-3 text-sm space-y-2">
                <p className="text-[#2D1B69]/80">
                  A child asks "What's a good diet?" and gets outdated, biased, or wrong information.
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">The danger:</span> One answer with authority. Kids might trust it too much.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">🧠</span>
                <h3 className="font-bold text-[#2D1B69]">Behavioral Changes</h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80 mb-3">
                Kids might start expecting instant answers without thinking.
              </p>
              <div className="bg-[#FF6B6B]/10 rounded-xl p-3 text-sm space-y-2">
                <ul className="space-y-1">
                  <li>✗ Stop looking things up in books</li>
                  <li>✗ Reduce conversation with humans</li>
                  <li>✗ Prefer instant answers over thinking</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">😅</span>
                <h3 className="font-bold text-[#2D1B69]">Unintended Commands</h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80">
                Younger kids sometimes activate assistants by accident. "Alexa" said in a sentence might trigger the device. They might ask for things that aren't appropriate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">🔒</span>
                <h3 className="font-bold text-[#2D1B69]">
                  Data &amp; Privacy Questions
                </h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80 mb-3">
                These questions don't have fully transparent answers yet:
              </p>
              <div className="bg-[#FF6B6B]/10 rounded-xl p-3 text-sm space-y-1">
                <p className="text-[#2D1B69]/80">
                  ❓ Where is your child's voice data stored?
                </p>
                <p className="text-[#2D1B69]/80">
                  ❓ Who has access to it?
                </p>
                <p className="text-[#2D1B69]/80">
                  ❓ Can it be sold or used in ways you don't know about?
                </p>
                <p className="text-[#2D1B69]/80">
                  ❓ What happens when your child turns 18?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Age Guidelines */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">📅</span> Age Guidelines
          </h2>

          <div className="space-y-4">
            {/* Ages 4-6 */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border-l-4 border-[#FFA94D]"
              onClick={() =>
                setExpandedAge(expandedAge === "age1" ? null : "age1")
              }
            >
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-[#2D1B69]">Ages 4-6: Very Limited Use</h3>
                <span className="text-2xl">
                  {expandedAge === "age1" ? "▼" : "▶"}
                </span>
              </div>

              {expandedAge === "age1" && (
                <div className="mt-4 space-y-3 bg-[#FFA94D]/10 rounded-xl p-4">
                  <div>
                    <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                      Good for:
                    </p>
                    <ul className="space-y-1 text-sm text-[#2D1B69]/80">
                      <li>✓ Timers</li>
                      <li>✓ Music</li>
                      <li>✓ Simple facts</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-3 border-l-2 border-[#FFA94D]">
                    <p className="text-[#2D1B69]/80 text-sm">
                      <span className="font-semibold text-[#2D1B69]">Remember:</span> Supervise always. Avoid storing voice data.
                    </p>
                  </div>
                  <p className="text-[#2D1B69]/80 text-sm italic">
                    Why: Younger kids might not understand "this is a machine" or test boundaries.
                  </p>
                </div>
              )}
            </div>

            {/* Ages 7-10 */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border-l-4 border-[#20C997]"
              onClick={() =>
                setExpandedAge(expandedAge === "age2" ? null : "age2")
              }
            >
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-[#2D1B69]">
                  Ages 7-10: Supervised Use with Boundaries
                </h3>
                <span className="text-2xl">
                  {expandedAge === "age2" ? "▼" : "▶"}
                </span>
              </div>

              {expandedAge === "age2" && (
                <div className="mt-4 space-y-3 bg-[#20C997]/10 rounded-xl p-4">
                  <div>
                    <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                      Good for:
                    </p>
                    <ul className="space-y-1 text-sm text-[#2D1B69]/80">
                      <li>✓ Homework questions</li>
                      <li>✓ Playing games or music</li>
                      <li>✓ Setting reminders</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-3 border-l-2 border-[#20C997]">
                    <p className="text-[#2D1B69]/80 text-sm">
                      <span className="font-semibold text-[#2D1B69]">Rule:</span> "You can ask Alexa 3 questions per day" (set clear limits)
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border-l-2 border-[#20C997]">
                    <p className="text-[#2D1B69]/80 text-sm">
                      <span className="font-semibold text-[#2D1B69]">⚠️ Never:</span> Give personal info (address, phone)
                    </p>
                  </div>
                  <p className="text-[#2D1B69]/80 text-sm italic">
                    Why: Can understand "this is a machine" but still blur human/AI boundaries.
                  </p>
                </div>
              )}
            </div>

            {/* Ages 11-14 */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border-l-4 border-[#FF6B6B]"
              onClick={() =>
                setExpandedAge(expandedAge === "age3" ? null : "age3")
              }
            >
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-[#2D1B69]">
                  Ages 11-14: More Independence with Guardrails
                </h3>
                <span className="text-2xl">
                  {expandedAge === "age3" ? "▼" : "▶"}
                </span>
              </div>

              {expandedAge === "age3" && (
                <div className="mt-4 space-y-3 bg-[#FF6B6B]/10 rounded-xl p-4">
                  <div>
                    <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                      Can do:
                    </p>
                    <ul className="space-y-1 text-sm text-[#2D1B69]/80">
                      <li>✓ Reminders &amp; homework help</li>
                      <li>✓ Voice commands (lights, speakers)</li>
                      <li>✓ More independent use</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-3 border-l-2 border-[#FF6B6B]">
                    <p className="text-[#2D1B69]/80 text-sm">
                      Should know not to share personal information and understand privacy implications.
                    </p>
                  </div>
                  <p className="text-[#2D1B69]/80 text-sm italic">
                    Why: Developing judgment but still benefit from oversight.
                  </p>
                </div>
              )}
            </div>

            {/* Ages 15+ */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border-l-4 border-[#E8D5F5]"
              onClick={() =>
                setExpandedAge(expandedAge === "age4" ? null : "age4")
              }
            >
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-[#2D1B69]">Ages 15+: Nearly Independent</h3>
                <span className="text-2xl">
                  {expandedAge === "age4" ? "▼" : "▶"}
                </span>
              </div>

              {expandedAge === "age4" && (
                <div className="mt-4 space-y-3 bg-[#E8D5F5]/10 rounded-xl p-4">
                  <p className="text-[#2D1B69]/80 text-sm">
                    Can use voice assistants with minimal oversight. Should understand privacy implications and make informed choices.
                  </p>
                  <p className="text-[#2D1B69]/80 text-sm italic">
                    Why: Capable of evaluating risks and making informed decisions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decision Framework */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#E8D5F5]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/20">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">✅</span> Should Your Family Use Voice Assistants?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#20C997]">
              <p className="font-bold text-[#2D1B69] mb-3">
                ✅ Makes Sense If:
              </p>
              <ul className="space-y-2 text-sm text-[#2D1B69]/80">
                <li>✓ You're comfortable with voice data collection</li>
                <li>✓ You'll actively use parental controls</li>
                <li>✓ You'll supervise initially</li>
                <li>✓ You can have honest conversations about privacy</li>
                <li>✓ Your child has a genuine use case</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#FF6B6B]">
              <p className="font-bold text-[#2D1B69] mb-3">
                ❌ Skip If:
              </p>
              <ul className="space-y-2 text-sm text-[#2D1B69]/80">
                <li>✗ Privacy concerns outweigh benefits</li>
                <li>✗ You can't supervise</li>
                <li>✗ Child shows unhealthy tech attachment</li>
                <li>✗ You want to minimize corporate data collection</li>
                <li>✗ You prefer traditional tools</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-[#20C997]/10 rounded-2xl p-5 border-l-4 border-[#20C997]">
            <p className="font-semibold text-[#2D1B69] text-sm">
              💡 Remember: There's no universal right answer. What matters is that you decide thoughtfully for YOUR family.
            </p>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="bg-gradient-to-br from-[#FFA94D]/10 to-[#FF6B6B]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🛠️</span> Setting Up Voice Assistants Safely
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
              <p className="font-bold text-[#2D1B69] mb-3">🔊 Amazon Alexa Setup</p>
              <div className="space-y-2 text-sm">
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">1.</span> Open Alexa app &gt; More &gt; Accounts &gt; Parental Controls
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">2.</span> Enable FreeTime (limits content, blocks shopping)
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">3.</span> Set explicit music filter to "ON"
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">4.</span> Disable voice purchasing entirely
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">5.</span> Manage Your Alexa Data &gt; decide on voice recording retention
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#20C997]">
              <p className="font-bold text-[#2D1B69] mb-3">🔍 Google Assistant Setup</p>
              <div className="space-y-2 text-sm">
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">1.</span> Google Home app &gt; Settings &gt; Family &gt; Parental Controls
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">2.</span> Set content filter to "Restricted"
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">3.</span> Enable SafeSearch
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">4.</span> Disable shopping and payments
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">5.</span> Review Voice &amp; Audio Activity settings
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#E8D5F5]">
              <p className="font-bold text-[#2D1B69] mb-3">🍎 Apple Siri Setup</p>
              <div className="space-y-2 text-sm">
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">1.</span> Settings &gt; Screen Time &gt; Content &amp; Privacy Restrictions
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">2.</span> Allow Siri only when unlocked
                </p>
                <p className="text-[#2D1B69]/80">
                  <span className="font-semibold text-[#2D1B69]">3.</span> Set restrictions on app usage
                </p>
                <p className="text-[#2D1B69]/80 mt-3 italic">
                  Note: Siri data less transparent than Alexa/Google. Review Apple's privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Device Placement */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">📍</span> Where to Place Your Devices
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#20C997]">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">Living room / Kitchen</p>
                <p className="text-sm text-[#2D1B69]/70">
                  Common areas where you can observe use
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">❌</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">Bedrooms</p>
                <p className="text-sm text-[#2D1B69]/70">
                  Limits supervision and raises privacy concerns
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">❌</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">Bathrooms</p>
                <p className="text-sm text-[#2D1B69]/70">Privacy and security concerns</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Talk */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#20C997]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">💬</span> The Conversation With Your Child
          </h2>

          <div className="bg-white rounded-2xl p-6 space-y-4">
            <p className="text-[#2D1B69]/80 text-sm">
              Before giving access, explain clearly and honestly:
            </p>

            <div className="bg-[#C3FAE8]/20 rounded-xl p-4 space-y-2 text-sm">
              <p className="font-semibold text-[#2D1B69]">
                "Alexa/Google/Siri is a computer program that listens and answers questions."
              </p>
              <div className="space-y-2 text-[#2D1B69]/80">
                <p>
                  <span className="font-semibold text-[#2D1B69]">▸ It's not a person</span> — doesn't understand like a friend
                </p>
                <p>
                  <span className="font-semibold text-[#2D1B69]">▸ It's not perfect</span> — sometimes gets things wrong
                </p>
                <p>
                  <span className="font-semibold text-[#2D1B69]">▸ It's recording</span> — a company keeps that recording
                </p>
                <p>
                  <span className="font-semibold text-[#2D1B69]">▸ No private info</span> — never share address, phone, real name
                </p>
                <p>
                  <span className="font-semibold text-[#2D1B69]">▸ It has limits</span> — you can use it for [X], not for [Y]
                </p>
                <p>
                  <span className="font-semibold text-[#2D1B69]">▸ You can say no</span> — if uncomfortable, don't use it
                </p>
              </div>
            </div>

            <div className="bg-[#E8D5F5]/10 rounded-xl p-4 border-l-4 border-[#E8D5F5]">
              <p className="font-semibold text-[#2D1B69] text-sm">
                💡 This isn't scary—it's honest. Kids appreciate transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Red Flags */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🚨</span> Red Flags: When to Cut Back
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69] text-sm">
                Child preferring to talk to assistant over asking you or peers
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69] text-sm">
                Behavioral problems when assistant is unavailable
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69] text-sm">
                Sharing personal information with the device
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69] text-sm">
                Noticeable increase in screen time dependence
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69] text-sm">
                Social isolation or reduced conversation with family
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69] text-sm">
                Unusual product purchases (despite safeguards)
              </p>
            </div>
          </div>
        </div>

        {/* Alternatives */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🤔</span> Alternatives (If You're Not Comfortable)
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">Google Home Hub</p>
                <p className="text-sm text-[#2D1B69]/70">
                  Displays info without as much voice data collection
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="text-2xl">🎵</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">Bluetooth Speakers</p>
                <p className="text-sm text-[#2D1B69]/70">
                  For music without voice control
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="text-2xl">🔌</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">Echo Dot + Privacy Controls</p>
                <p className="text-sm text-[#2D1B69]/70">
                  Smaller device, easier to control
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">No Smart Speaker at All</p>
                <p className="text-sm text-[#2D1B69]/70">
                  Completely valid choice. Not essential.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#E8D5F5]/10 rounded-2xl p-5 border-l-4 border-[#E8D5F5]">
            <p className="font-semibold text-[#2D1B69] text-sm">
              💡 Your family doesn't need a voice assistant. If the privacy tradeoff doesn't feel worth it, that's a completely reasonable decision.
            </p>
          </div>
        </div>

        {/* Bottom message */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#E8D5F5]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/20">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-4 text-center">
            🌍 Raising Kids in a Voice-First World
          </h2>
          <p className="text-[#2D1B69]/80 text-center mb-4">
            Voice assistants are becoming normal. By 2030, they'll be common in cars, schools, and workplaces. Kids today need to understand how to use them safely.
          </p>
          <p className="text-[#2D1B69]/80 text-center mb-4">
            That doesn't mean you MUST have one at home. But it does mean having the conversation about AI, privacy, and boundaries.
          </p>
          <div className="bg-white rounded-2xl p-5 border-l-4 border-[#20C997] space-y-2 text-sm">
            <p className="font-semibold text-[#2D1B69]">
              Whether or not you use voice assistants, teach your child:
            </p>
            <ul className="space-y-1 text-[#2D1B69]/80">
              <li>✓ How to ask good questions</li>
              <li>✓ When to verify information</li>
              <li>✓ Why privacy matters</li>
              <li>✓ How to interact respectfully with AI</li>
              <li>✓ That AI is a tool, not a friend</li>
            </ul>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gradient-to-br from-[#20C997]/10 to-[#E8D5F5]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/20">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">
            🔗 Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Link
              href="/ai-for-kids/parental-controls"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                🛡️ Parental Controls for AI Apps
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                Set up safeguards across all platforms
              </p>
            </Link>
            <Link
              href="/ai-for-kids/learning-apps"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                📱 Best AI Learning Apps for Kids
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                Educational AI tools that actually work
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
          <p className="text-lg font-bold mb-2">
            Ready to decide what's right for your family?
          </p>
          <p className="text-base opacity-95 mb-4">
            Use this guide to think through the tradeoffs and make an informed choice.
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
