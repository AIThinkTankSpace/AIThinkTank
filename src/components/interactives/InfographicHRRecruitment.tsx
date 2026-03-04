"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicHRRecruitment() {
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
          <span className="text-emerald-400">HR & Recruitment</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-transparent border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white mb-4">
                🎯 AI for HR & Recruitment
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Transform hiring, skill assessment, and employee development with AI
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
        {/* Where AI Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">✅</span> Where AI Creates Real Value
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Recruitment Screening */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-500/60 transition backdrop-blur-sm">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-white mb-3">Resume Screening</h3>
              <div className="space-y-3 text-slate-300">
                <p className="text-sm">Natural language processing matches qualifications automatically</p>
                <div className="bg-slate-900/50 border-l-2 border-emerald-500 pl-3 py-2">
                  <p className="text-xs font-semibold text-emerald-300 mb-1">IMPACT</p>
                  <p className="text-sm">Weeks → Days for review</p>
                </div>
              </div>
            </div>

            {/* Skill Assessment */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-500/60 transition backdrop-blur-sm">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-white mb-3">Skill Assessment</h3>
              <div className="space-y-3 text-slate-300">
                <p className="text-sm">Job-relevant tasks measure actual capability vs interview performance</p>
                <div className="bg-slate-900/50 border-l-2 border-emerald-500 pl-3 py-2">
                  <p className="text-xs font-semibold text-emerald-300 mb-1">BENEFIT</p>
                  <p className="text-sm">Fewer bad hires, faster cycles</p>
                </div>
              </div>
            </div>

            {/* Employee Development */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-500/60 transition backdrop-blur-sm">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Upskilling & Development</h3>
              <div className="space-y-3 text-slate-300">
                <p className="text-sm">Personalized learning paths adapted to individual needs and pace</p>
                <div className="bg-slate-900/50 border-l-2 border-emerald-500 pl-3 py-2">
                  <p className="text-xs font-semibold text-emerald-300 mb-1">ADVANTAGE</p>
                  <p className="text-sm">Scale personalization cost-effectively</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risks & Mistakes Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⚠️</span> Critical Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {/* Mistake 1 */}
            <div className="bg-gradient-to-r from-red-950/40 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">❌</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Culture Fit Prediction</h3>
                  <p className="text-slate-300 text-sm mb-3">AI claiming to identify "culture fit" often encodes bias for similarity, reducing diversity</p>
                  <div className="bg-slate-900/50 rounded px-3 py-2 text-xs text-red-300">
                    RESULT: Expensive system that screens for homogeneity, not capability
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 2 */}
            <div className="bg-gradient-to-r from-red-950/40 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">❌</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Automating Performance Ratings Without Governance</h3>
                  <p className="text-slate-300 text-sm mb-3">AI models lock in historical biases—if past high performers shared characteristics, algorithm learns those as signals</p>
                  <div className="bg-slate-900/50 rounded px-3 py-2 text-xs text-red-300">
                    RESULT: Systematic discrimination, legal liability, missed talent
                  </div>
                </div>
              </div>
            </div>

            {/* Mistake 3 */}
            <div className="bg-gradient-to-r from-red-950/40 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">❌</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Over-automating Hiring Decisions</h3>
                  <p className="text-slate-300 text-sm mb-3">Auto-rejection thresholds delegate judgment to unexplained algorithms, shrinking candidate pools</p>
                  <div className="bg-slate-900/50 rounded px-3 py-2 text-xs text-red-300">
                    RESULT: Narrower talent, inability to defend decisions to regulators
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🏗️</span> Ethical AI Hiring Framework
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-amber-400">1</span>
                  <h3 className="text-lg font-bold text-white">Define Success</h3>
                </div>
                <p className="text-slate-300 text-sm">Choose ONE clear metric: faster hiring, better hire quality, or diversity. Can't optimize conflicting goals.</p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-amber-400">2</span>
                  <h3 className="text-lg font-bold text-white">Validate Against Outcomes</h3>
                </div>
                <p className="text-slate-300 text-sm">Pilot 3-6 months before rollout. Track AI recommendations vs. actual hire performance and retention.</p>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-amber-400">3</span>
                  <h3 className="text-lg font-bold text-white">Maintain Human Authority</h3>
                </div>
                <p className="text-slate-300 text-sm">AI screens → humans review. AI assesses → humans interview. Keep decision authority with people.</p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-amber-400">4</span>
                  <h3 className="text-lg font-bold text-white">Audit Quarterly for Bias</h3>
                </div>
                <p className="text-slate-300 text-sm">Track acceptance rates by demographic group. If groups advance at different rates, investigate why.</p>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-amber-400">5</span>
                  <h3 className="text-lg font-bold text-white">Be Transparent</h3>
                </div>
                <p className="text-slate-300 text-sm">When candidates ask how decisions are made, explain truthfully. If you can't explain it, something's wrong.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools That Work */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🛠️</span> Tools That Deliver Real Value
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Screening Tools</h3>
              <p className="text-slate-300 text-sm mb-4">Textio, TalentDesk parse resumes against job descriptions</p>
              <div className="text-xs text-amber-300">Proven track record of reducing time and surfacing missed candidates</div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Skills Assessment</h3>
              <p className="text-slate-300 text-sm mb-4">HackerRank, CodeSignal (technical); Pymetrics (broader assessment)</p>
              <div className="text-xs text-amber-300">Validated against job performance with real track records</div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Learning & Development</h3>
              <p className="text-slate-300 text-sm mb-4">LinkedIn Learning, Coursera for Corporate personalized paths</p>
              <div className="text-xs text-amber-300">Validate impact on actual job performance, not just completion</div>
            </div>
          </div>
        </div>

        {/* Key Principle */}
        <div className="bg-gradient-to-r from-emerald-950/30 to-slate-900 border border-emerald-500/40 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">💡 The Core Principle</h3>
          <p className="text-slate-300 leading-relaxed">
            <span className="text-emerald-300 font-semibold">AI should expand opportunity, not gatekeep.</span> The best use removes busywork so your team focuses on human elements—relationship building, growth, nuanced career needs. The worst automates judgment at scale with black-box gatekeeping nobody can explain.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ai-for-corporates/ai-governance-framework-for-small-businesses" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">AI Governance Framework</h3>
                <p className="text-slate-400 text-sm">Build governance that protects while enabling adoption</p>
              </div>
            </Link>
            <Link href="/ai-for-corporates/ai-security-and-data-privacy-for-business-leaders" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">Security & Data Privacy</h3>
                <p className="text-slate-400 text-sm">Manage AI security risks and compliance effectively</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Ethical AI Hiring?</h3>
          <p className="text-slate-300 mb-6">Start with a pilot, measure outcomes, keep humans in control.</p>
          <ShareButton variant="corporate" />
        </div>
      </div>
    </div>
  );
}
