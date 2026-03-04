"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicAICulture() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Breadcrumb */}
      <div className="bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-slate-400">
          <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/ai-for-corporates" className="hover:text-emerald-400 transition">AI for Corporates</Link>
          <span className="mx-2">/</span>
          <span className="text-emerald-400">AI-First Culture</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-transparent border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white mb-4">
                🌱 Building an AI-First Culture
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Transform adoption from mandate to natural behavior
              </p>
              <div className="flex gap-3">
                <ShareButton variant="corporate" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* The Problem */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⚠️</span> How AI Adoption Typically Fails
          </h2>

          <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-8">
            <p className="text-slate-300 leading-relaxed mb-6">
              Your CEO mandates AI adoption. You roll out tools. Most employees ignore them. Six months later, penetration is 15% and morale is worse because people feel forced to adopt technology they don't understand.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="text-red-300 font-semibold">This fails not because the technology is bad, but because the culture isn't ready.</span> Building AI-first culture requires a completely different approach than top-down mandates.
            </p>
          </div>
        </div>

        {/* Three Misconceptions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">❌</span> Three Common Misconceptions
          </h2>

          <div className="space-y-6">
            {/* Misconception 1 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-4">
                <div className="text-5xl flex-shrink-0">1️⃣</div>
                <h3 className="text-2xl font-bold text-white self-center">Create an "AI Center of Excellence"</h3>
              </div>

              <div className="ml-20 space-y-4">
                <div className="bg-slate-900/50 border-l-4 border-red-500 pl-4 py-2">
                  <p className="text-red-300 font-semibold text-sm mb-1">WHAT HAPPENS</p>
                  <p className="text-slate-300 text-sm">AI experts build solutions nobody uses because they don't understand actual problems. Adoption stalls at 20%.</p>
                </div>

                <div className="bg-slate-900/50 border-l-4 border-amber-500 pl-4 py-2">
                  <p className="text-amber-300 font-semibold text-sm mb-1">WHY IT FAILS</p>
                  <p className="text-slate-300 text-sm">Culture change doesn't happen from the center pushing outward—it happens from edges pushing inward. When your CFO, operations manager, and sales VP are all experimenting with AI, that creates culture.</p>
                </div>
              </div>
            </div>

            {/* Misconception 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-4">
                <div className="text-5xl flex-shrink-0">2️⃣</div>
                <h3 className="text-2xl font-bold text-white self-center">Mandatory AI Training for Everyone</h3>
              </div>

              <div className="ml-20 space-y-4">
                <div className="bg-slate-900/50 border-l-4 border-red-500 pl-4 py-2">
                  <p className="text-red-300 font-semibold text-sm mb-1">WHAT HAPPENS</p>
                  <p className="text-slate-300 text-sm">High completion rates, but 6 months later nobody uses it. Without context and application, training is forgotten immediately.</p>
                </div>

                <div className="bg-slate-900/50 border-l-4 border-amber-500 pl-4 py-2">
                  <p className="text-amber-300 font-semibold text-sm mb-1">WHY IT FAILS</p>
                  <p className="text-slate-300 text-sm">People go back to whatever process worked before the moment they face a real problem. Training without context = no behavior change.</p>
                </div>
              </div>
            </div>

            {/* Misconception 3 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-4">
                <div className="text-5xl flex-shrink-0">3️⃣</div>
                <h3 className="text-2xl font-bold text-white self-center">Teach Everyone How AI Works</h3>
              </div>

              <div className="ml-20 space-y-4">
                <div className="bg-slate-900/50 border-l-4 border-red-500 pl-4 py-2">
                  <p className="text-red-300 font-semibold text-sm mb-1">WHAT HAPPENS</p>
                  <p className="text-slate-300 text-sm">Some people fascinated, most bored or intimidated by transformers and attention mechanisms.</p>
                </div>

                <div className="bg-slate-900/50 border-l-4 border-amber-500 pl-4 py-2">
                  <p className="text-amber-300 font-semibold text-sm mb-1">WHY IT FAILS</p>
                  <p className="text-slate-300 text-sm">Most employees don't need to understand how AI works. They need to know what AI can do for THEIR specific job. A financial analyst needs: "This tool processes earnings reports 10x faster." Not: "Neural networks use attention mechanisms."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Phases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">📈</span> What Actually Works: Three Phases
          </h2>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-8">
              <div className="flex gap-4 items-start mb-6">
                <div className="bg-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Phase 1: Activation (Months 1-3)</h3>
                  <p className="text-slate-300">Goal: Create curiosity and reduce fear</p>
                </div>
              </div>

              <div className="space-y-4 ml-16">
                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-emerald-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 1: Voluntary Pilots</h4>
                  <p className="text-slate-300 text-sm">Identify early adopters per department. Give them budget and freedom to experiment on problems THEY choose. Operations manager optimizes scheduling. Marketing tests AI copywriting. Finance tests data analysis.</p>
                  <p className="text-emerald-300 text-xs mt-2 font-semibold">Why: Early adopters become advocates. Peer influence spreads curiosity naturally.</p>
                </div>

                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-emerald-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 2: "Lunch & Learn" Program</h4>
                  <p className="text-slate-300 text-sm">Monthly 30-minute sessions where employees share AI discoveries. No mandatory attendance. No theory. "I tested 3 writing tools this month and here's what I learned" is infinitely more compelling than "Let me explain LLMs."</p>
                  <p className="text-emerald-300 text-xs mt-2 font-semibold">Why: Peer learning is 5x more influential than top-down communication.</p>
                </div>

                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-emerald-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 3: Celebrate Failures</h4>
                  <p className="text-slate-300 text-sm">Sales team tries AI lead qualification tool. Doesn't work well. In traditional culture: quietly abandoned. In AI-first culture: shared lessons—why it didn't work, what they'd do differently.</p>
                  <p className="text-emerald-300 text-xs mt-2 font-semibold">Why: Failure becomes information. People experiment more when failures are valued.</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-amber-950/30 to-slate-900 border border-amber-500/30 rounded-xl p-8">
              <div className="flex gap-4 items-start mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Phase 2: Enablement (Months 4-8)</h3>
                  <p className="text-slate-300">Goal: Remove barriers and build genuine skill</p>
                </div>
              </div>

              <div className="space-y-4 ml-16">
                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-amber-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 1: Clear Resource Pathways</h4>
                  <p className="text-slate-300 text-sm">Department-specific guidance. "For writers: Here are 3 tools, how to use them, your team's guidelines." "For analysts: These platforms help with your common tasks." Use real examples from that department.</p>
                </div>

                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-amber-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 2: AI Champions in Each Team</h4>
                  <p className="text-slate-300 text-sm">Not experts—interested people spending 5 hours/month helping colleagues with specific problems. Your accounting champion isn't an ML expert but knows how AI helps with expense categorization.</p>
                </div>

                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-amber-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 3: Permission, Not Restriction</h4>
                  <p className="text-slate-300 text-sm">Instead of "here's the one approved tool," create guidelines: "You can use AI tools in this category if they're SOC 2 certified, don't retain data, and use encryption." Prevents shadow IT while allowing flexibility.</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-500/30 rounded-xl p-8">
              <div className="flex gap-4 items-start mb-6">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Phase 3: Normalization (Months 8+)</h3>
                  <p className="text-slate-300">Goal: Make AI so embedded it becomes unremarkable</p>
                </div>
              </div>

              <div className="space-y-4 ml-16">
                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-blue-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 1: Integrate Into Workflows</h4>
                  <p className="text-slate-300 text-sm">Instead of "AI tools you might use," integrate them into regular work: "Our content approval process includes AI draft step before human review." AI becomes "how we work," not optional extra.</p>
                </div>

                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-blue-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 2: Measure & Celebrate Impact</h4>
                  <p className="text-slate-300 text-sm">Quarterly share: "Teams using AI for this task completed 30% more work with same headcount" or "AI increased code quality by 15%." Make impact visible.</p>
                </div>

                <div className="bg-slate-900/30 rounded p-4 border-l-4 border-blue-500">
                  <h4 className="text-white font-bold text-sm mb-2">Strategy 3: Update Job Expectations</h4>
                  <p className="text-slate-300 text-sm">Add "effectively uses AI tools relevant to this role" to job descriptions and performance reviews. Signals AI competency is expected, not optional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Addressing Concerns */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">💬</span> Addressing Legitimate Concerns
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Concern: "AI will replace me"</h3>
              <p className="text-slate-300 text-sm mb-3">Show concrete examples: When data analyst has AI for data cleaning, she spends time on strategic analysis instead. Better for her career AND company.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Concern: "I don't understand this"</h3>
              <p className="text-slate-300 text-sm mb-3">Pair confused employees with early adopters. 30 minutes of peer help beats hours of documentation. Create "recipes"—step-by-step instructions for specific tasks.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Concern: "What about mistakes or bias?"</h3>
              <p className="text-slate-300 text-sm mb-3">Legitimate. For high-stakes decisions, keep AI advisory, not decision-making. Don't skip due diligence just because it's faster.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Concern: "Data security & privacy?"</h3>
              <p className="text-slate-300 text-sm mb-3">Have clear policies. Be transparent about where data goes. If employees can't trust data handling, adoption won't happen.</p>
            </div>
          </div>
        </div>

        {/* Culture Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">📊</span> Culture Metrics That Matter
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0">📈</span>
                <div>
                  <h3 className="text-white font-bold">Penetration Rate</h3>
                  <p className="text-slate-300 text-sm">% of employees actively using AI tools (target: 60%+ by month 8)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0">🔀</span>
                <div>
                  <h3 className="text-white font-bold">Tool Diversity</h3>
                  <p className="text-slate-300 text-sm">How many different tools in use? Healthy: 8+ tools, not everyone on the same one</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0">💬</span>
                <div>
                  <h3 className="text-white font-bold">Peer Learning</h3>
                  <p className="text-slate-300 text-sm">How many impromptu conversations about AI? (Anecdotal but important)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0">🚀</span>
                <div>
                  <h3 className="text-white font-bold">Experiment Velocity</h3>
                  <p className="text-slate-300 text-sm">How many new AI applications tried per month?</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0">👥</span>
                <div>
                  <h3 className="text-white font-bold">Early Adopter Influence</h3>
                  <p className="text-slate-300 text-sm">Are resisters working with early adopters, or checked out?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning: AI Theater */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⚠️</span> Avoid "AI Theater"
          </h2>

          <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-8">
            <p className="text-slate-300 leading-relaxed mb-4">
              Don't declare yourself "AI-first" without actually being willing to change. If you:
            </p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li className="flex gap-3"><span className="text-red-300">×</span> Resist AI suggestions from employees</li>
              <li className="flex gap-3"><span className="text-red-300">×</span> Keep tight restrictions while claiming to encourage adoption</li>
              <li className="flex gap-3"><span className="text-red-300">×</span> Resist changing processes to accommodate AI</li>
            </ul>
            <p className="text-slate-300">
              ...people will notice. Your culture will become cynical.
            </p>
            <p className="text-emerald-300 font-semibold mt-4">
              Genuine AI-first culture requires leadership willingness to experiment, fail, learn, and adapt.
            </p>
          </div>
        </div>

        {/* 90-Day Roadmap */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🗓️</span> Your 90-Day AI Culture Roadmap
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-white font-bold text-lg mb-2">Month 1</h3>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>✓ Identify 3-5 early adopters per department</li>
                  <li>✓ Give them budget and freedom to experiment</li>
                  <li>✓ Start monthly peer learning sessions</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-white font-bold text-lg mb-2">Month 2</h3>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>✓ Celebrate early wins publicly</li>
                  <li>✓ Share what's working</li>
                  <li>✓ Normalize experimentation</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-white font-bold text-lg mb-2">Month 3</h3>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>✓ Create department-specific AI guidance</li>
                  <li>✓ Assign AI champions</li>
                  <li>✓ Measure early adoption metrics</li>
                </ul>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-white font-bold text-lg mb-2">Months 4-6</h3>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>✓ Scale successful experiments</li>
                  <li>✓ Remove barriers</li>
                  <li>✓ Build skill through peer learning</li>
                </ul>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-white font-bold text-lg mb-2">Months 6-8</h3>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>✓ Integrate AI into standard processes</li>
                  <li>✓ Update job descriptions</li>
                  <li>✓ Measure impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/40 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">💡 The Counter-Intuitive Truth</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            <span className="text-emerald-300 font-semibold">AI-first culture doesn't happen from top-down mandates.</span> It emerges when employees see peers succeeding with AI, feel safe experimenting, and experience tangible benefits. Build that environment, and adoption happens naturally.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg mt-4">
            Don't force adoption. Enable discovery. The results will follow.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ai-for-corporates/how-to-measure-ai-success-in-your-organization" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">Measuring AI Success</h3>
                <p className="text-slate-400 text-sm">Prove culture change is creating business value</p>
              </div>
            </Link>
            <Link href="/ai-for-corporates/ai-governance-framework-for-small-businesses" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">AI Governance</h3>
                <p className="text-slate-400 text-sm">Governance that enables, not restricts, adoption</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Your AI-First Culture?</h3>
          <p className="text-slate-300 mb-6">Start with early adopters, celebrate peer learning, normalize experimentation. Culture follows behavior.</p>
          <ShareButton variant="corporate" />
        </div>
      </div>
    </div>
  );
}
