"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicGovernance() {
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
          <span className="text-emerald-400">AI Governance Framework</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-transparent border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white mb-4">
                ⚖️ AI Governance Framework
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Simple, lightweight governance that enables scale without bureaucracy
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
        {/* Why Governance Matters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🎯</span> Why Small Businesses Need Governance
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-lg font-bold text-white mb-3">Liability Exposure</h3>
              <p className="text-slate-300 text-sm">If your AI makes discriminatory or false decisions, governance docs prove you had reasonable safeguards in place</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="text-lg font-bold text-white mb-3">Team Alignment</h3>
              <p className="text-slate-300 text-sm">Without clear guidelines, departments adopt different tools incompatibly. Governance prevents fragmentation</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-lg font-bold text-white mb-3">Vendor Management</h3>
              <p className="text-slate-300 text-sm">Clear framework gives you the checklist for what vendors must meet</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-950/30 to-slate-900 border border-emerald-500/40 rounded-xl p-6">
            <p className="text-slate-300"><span className="text-emerald-300 font-semibold">Counter-intuitive truth:</span> Small businesses with governance move faster than those without. Clear rules = faster decisions.</p>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🏛️</span> The Four Pillars of AI Governance
          </h2>

          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start">
                <div className="text-5xl flex-shrink-0">1️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">AI Use Classification</h3>
                  <p className="text-slate-300 mb-6">Create three simple categories based on risk level</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 border-l-4 border-green-500 rounded p-4">
                      <p className="text-green-400 font-semibold text-sm mb-2">LOW-RISK</p>
                      <p className="text-slate-300 text-xs leading-relaxed">Drafting emails, brainstorming, summarizing docs, internal data analysis. Minimal oversight.</p>
                    </div>
                    <div className="bg-slate-900/50 border-l-4 border-amber-500 rounded p-4">
                      <p className="text-amber-400 font-semibold text-sm mb-2">MEDIUM-RISK</p>
                      <p className="text-slate-300 text-xs leading-relaxed">Customer data, recommendations, external-facing content. Need review and testing.</p>
                    </div>
                    <div className="bg-slate-900/50 border-l-4 border-red-500 rounded p-4">
                      <p className="text-red-400 font-semibold text-sm mb-2">HIGH-RISK</p>
                      <p className="text-slate-300 text-xs leading-relaxed">Hiring decisions, performance evaluations, sensitive financial/health data. Formal approval + monitoring.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start">
                <div className="text-5xl flex-shrink-0">2️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Core Approval Process</h3>
                  <p className="text-slate-300 mb-6">Lightweight workflow that prevents disasters without bureaucracy</p>

                  <div className="space-y-3">
                    <div className="flex gap-4 items-start bg-slate-900/30 rounded p-3">
                      <span className="text-amber-400 font-bold">1.</span>
                      <div>
                        <p className="text-white font-semibold">Identify</p>
                        <p className="text-slate-400 text-sm">Which category does this AI use fall into?</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start bg-slate-900/30 rounded p-3">
                      <span className="text-amber-400 font-bold">2.</span>
                      <div>
                        <p className="text-white font-semibold">Assess (for medium/high risk)</p>
                        <p className="text-slate-400 text-sm">What problem does it solve? What data will it use? What could go wrong?</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start bg-slate-900/30 rounded p-3">
                      <span className="text-amber-400 font-bold">3.</span>
                      <div>
                        <p className="text-white font-semibold">Approve</p>
                        <p className="text-slate-400 text-sm">Low: Manager. Medium: Finance/Legal. High: Full leadership.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start bg-slate-900/30 rounded p-3">
                      <span className="text-amber-400 font-bold">4.</span>
                      <div>
                        <p className="text-white font-semibold">Document</p>
                        <p className="text-slate-400 text-sm">Keep one-page summary of what was approved and why</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start">
                <div className="text-5xl flex-shrink-0">3️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Data & Privacy Standards</h3>
                  <p className="text-slate-300 mb-6">Simple rules about what data can be used and where</p>

                  <div className="bg-slate-900/50 rounded p-4 space-y-2 text-slate-300 text-sm">
                    <p><span className="text-emerald-300">✓</span> Which customer/employee data can be used for AI?</p>
                    <p><span className="text-emerald-300">✓</span> What data is strictly off-limits?</p>
                    <p><span className="text-emerald-300">✓</span> How long is data retained?</p>
                    <p><span className="text-emerald-300">✓</span> What's your vendor's data handling policy?</p>
                    <p className="text-xs text-slate-400 mt-3">Example: "We don't use customer PII in third-party tools without explicit consent"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start">
                <div className="text-5xl flex-shrink-0">4️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Monitoring & Updates</h3>
                  <p className="text-slate-300 mb-6">Quarterly reviews to keep framework relevant (2-3 hours per quarter)</p>

                  <div className="bg-slate-900/50 rounded p-4 space-y-2 text-slate-300 text-sm">
                    <p><span className="text-amber-300">→</span> Are approved projects delivering expected value?</p>
                    <p><span className="text-amber-300">→</span> Have any new risks emerged?</p>
                    <p><span className="text-amber-300">→</span> Are teams following the framework?</p>
                    <p><span className="text-amber-300">→</span> Do we need to adjust categories or processes?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 90-Day Roadmap */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🗓️</span> 90-Day Implementation Roadmap
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-amber-400 font-bold text-lg mb-4">Week 1-4</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-2xl">📋</span>
                    <div>
                      <p className="text-white font-semibold">Define Categories</p>
                      <p className="text-slate-400 text-sm">Create your three risk categories with examples from actual AI usage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-amber-400 font-bold text-lg mb-4">Week 5-8</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-2xl">✍️</span>
                    <div>
                      <p className="text-white font-semibold">Create Approval Process</p>
                      <p className="text-slate-400 text-sm">One-page process, shared with leadership, finalize with feedback</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-amber-400 font-bold text-lg mb-4">Week 9-12</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <p className="text-white font-semibold">Apply & Adjust</p>
                      <p className="text-slate-400 text-sm">Work through medium/high-risk projects, make adjustments as needed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-amber-400 font-bold text-lg mb-4">Month 3+</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <p className="text-white font-semibold">Quarterly Review</p>
                      <p className="text-slate-400 text-sm">Assess what's working, what needs adjustment, plan next quarter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-900/50 border border-emerald-500/30 rounded text-emerald-300 text-sm">
              <p><span className="font-semibold">Pro tip:</span> Use a shared Google Doc for your framework + simple spreadsheet for approvals. No special software needed.</p>
            </div>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⚠️</span> Pitfalls to Avoid
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">Making It Too Strict</h3>
              <p className="text-slate-300 text-sm">If painful, teams ignore it. Better loose governance people follow than strict governance that drives shadow AI.</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">Waiting for Perfect Policy</h3>
              <p className="text-slate-300 text-sm">80% solution implemented today beats 100% solution still being written next year. Start now.</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">Set and Forget</h3>
              <p className="text-slate-300 text-sm">AI capabilities evolve monthly. Your framework needs annual reviews minimum, quarterly quarterly checks.</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">Wrong People Involved</h3>
              <p className="text-slate-300 text-sm">Need input from operations, finance, and leadership. IT alone won't understand business context.</p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/40 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">💡 The Competitive Advantage</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            Small businesses with clear AI governance move faster than larger competitors without it. When someone proposes a new tool, they know exactly what to do. They fill out the approval form (15 minutes), get feedback (usually within a week), and launch. Compare that to organizations with no framework where projects stall indefinitely.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg mt-4">
            <span className="text-emerald-300 font-semibold">Your governance framework is a competitive advantage—not a constraint.</span>
          </p>
        </div>

        {/* Related Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ai-for-corporates/ai-security-and-data-privacy-for-business-leaders" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">Security & Data Privacy</h3>
                <p className="text-slate-400 text-sm">Protect your company from AI security risks</p>
              </div>
            </Link>
            <Link href="/ai-for-corporates/ai-for-hr-recruitment-and-talent-management" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">HR & Recruitment</h3>
                <p className="text-slate-400 text-sm">Apply governance to your hiring and talent systems</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Your Governance Framework?</h3>
          <p className="text-slate-300 mb-6">Start simple. Document decisions. Review quarterly. Scale with confidence.</p>
          <ShareButton variant="corporate" />
        </div>
      </div>
    </div>
  );
}
