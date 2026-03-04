"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicMeasuringSuccess() {
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
          <span className="text-emerald-400">Measuring AI Success</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-slate-900 to-transparent border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-white mb-4">
                📊 How to Measure AI Success
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Stop guessing. Measure what actually matters.
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
            <span className="text-4xl">⚠️</span> Why Most Organizations Fail at Measurement
          </h2>

          <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-8 space-y-4">
            <div>
              <h3 className="text-red-300 font-bold mb-2">The Real Story</h3>
              <p className="text-slate-300">Team deploys AI tool to summarize customer support tickets. Vendor shows: "Processes 10,000 tickets/month with 95% accuracy." Leadership thinks great. But nobody asked: Does this save support costs? Faster resolutions? Happy support agents?</p>
            </div>

            <div className="pt-4 border-t border-red-500/20">
              <h3 className="text-red-300 font-bold mb-2">The Outcome</h3>
              <p className="text-slate-300">A year later, tool still running, but not connected to any outcome anyone cares about. It becomes a budget line item nobody can justify. Project quietly dies.</p>
            </div>

            <div className="pt-4 border-t border-red-500/20 bg-red-950/20 rounded p-4">
              <h3 className="text-red-300 font-bold mb-2">The Root Cause</h3>
              <p className="text-slate-300"><span className="text-red-300 font-semibold">Organizations measure outputs instead of outcomes.</span> The AI tool outputs summaries. That's not success. Success is whether that output creates value.</p>
            </div>
          </div>
        </div>

        {/* Three-Layer Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🏗️</span> The Three-Layer Measurement Framework
          </h2>

          <p className="text-slate-300 text-lg mb-8">Measure AI success in three layers: adoption, quality, and business impact. Skip any layer, and you'll get misled.</p>

          <div className="space-y-8">
            {/* Layer 1 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-6">
                <div className="text-6xl flex-shrink-0">1️⃣</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Adoption Metrics</h3>
                  <p className="text-slate-300 mt-2">The Baseline: Is anyone actually using this?</p>
                </div>
              </div>

              <div className="ml-24 space-y-4">
                <p className="text-slate-300 mb-4">Without adoption, everything else is academic. If adoption is below 50%, stop measuring business impact. Focus on why people aren't using it.</p>

                <div className="space-y-3">
                  <div className="bg-slate-900/50 rounded p-4 border-l-4 border-emerald-500">
                    <p className="text-emerald-300 font-semibold text-sm mb-1">Active Usage Rate</p>
                    <p className="text-slate-300 text-sm">% of eligible users regularly using the system?</p>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4 border-l-4 border-emerald-500">
                    <p className="text-emerald-300 font-semibold text-sm mb-1">Feature Adoption</p>
                    <p className="text-slate-300 text-sm">Which parts do people use? Some features may be ignored entirely.</p>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4 border-l-4 border-emerald-500">
                    <p className="text-emerald-300 font-semibold text-sm mb-1">Time-to-Value</p>
                    <p className="text-slate-300 text-sm">How long between starting to use tool and seeing benefit?</p>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4 border-l-4 border-emerald-500">
                    <p className="text-emerald-300 font-semibold text-sm mb-1">Retention Rate</p>
                    <p className="text-slate-300 text-sm">Do people keep using it, or abandon after trial?</p>
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/30 rounded p-4 mt-4">
                  <p className="text-emerald-300 font-semibold text-sm mb-1">📊 Example</p>
                  <p className="text-slate-300 text-sm">"75% of support agents use the tool for initial ticket sorting" and "average agent uses it 5+ times per shift"</p>
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-6">
                <div className="text-6xl flex-shrink-0">2️⃣</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Quality Metrics</h3>
                  <p className="text-slate-300 mt-2">The Validation: Does it work correctly?</p>
                </div>
              </div>

              <div className="ml-24 space-y-4">
                <p className="text-slate-300 mb-4">Quality looks different for different applications. Don't stop here—high quality + zero usage = zero value.</p>

                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded p-4">
                    <p className="text-amber-400 font-semibold text-sm mb-3">For Analytical AI (data analysis, insights):</p>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>✓ Accuracy of insights vs manual analysis</li>
                      <li>✓ Completeness—does it miss important findings?</li>
                      <li>✓ Actionability—can decision-makers use these insights?</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4">
                    <p className="text-amber-400 font-semibold text-sm mb-3">For Generative AI (content, code):</p>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>✓ Usability—how much human editing needed?</li>
                      <li>✓ Adherence to guidelines or requirements</li>
                      <li>✓ Time saved vs starting from scratch</li>
                      <li>✓ Quality compared to human-created equivalents</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4">
                    <p className="text-amber-400 font-semibold text-sm mb-3">For Decision Support AI (recommendations, predictions):</p>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>✓ Precision—when it recommends, is it usually correct?</li>
                      <li>✓ Recall—does it catch cases you care about?</li>
                      <li>✓ False positive rate—how often alerts for non-issues?</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/30 rounded p-4 mt-4">
                  <p className="text-emerald-300 font-semibold text-sm mb-1">📊 Example</p>
                  <p className="text-slate-300 text-sm">"Summaries capture 90% of key customer issue details" and "support agents need minimal editing"</p>
                </div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <div className="flex gap-6 items-start mb-6">
                <div className="text-6xl flex-shrink-0">3️⃣</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Business Impact</h3>
                  <p className="text-slate-300 mt-2">What Actually Matters: Did this create value?</p>
                </div>
              </div>

              <div className="ml-24 space-y-4">
                <p className="text-slate-300 mb-4">This is where most organizations fail. Business impact is harder to measure, so they skip it. But it's the only metric that justifies investment.</p>

                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded p-4 border-l-4 border-gold-500">
                    <p className="text-amber-300 font-semibold text-sm mb-2">💰 Cost Reduction</p>
                    <p className="text-slate-300 text-sm mb-2">How much time/money does AI save?</p>
                    <ul className="space-y-1 text-slate-300 text-xs">
                      <li>Support: hours saved/month × labor cost</li>
                      <li>Document processing: docs processed/person × salary</li>
                      <li>Code: lines written/developer × productivity premium</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4 border-l-4 border-gold-500">
                    <p className="text-amber-300 font-semibold text-sm mb-2">📈 Revenue Impact</p>
                    <p className="text-slate-300 text-sm mb-2">Does AI help make more money?</p>
                    <ul className="space-y-1 text-slate-300 text-xs">
                      <li>Higher customer retention via better support</li>
                      <li>Faster sales cycles with AI lead qualification</li>
                      <li>Better pricing decisions optimized for profit</li>
                      <li>New revenue streams enabled by AI</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 rounded p-4 border-l-4 border-gold-500">
                    <p className="text-amber-300 font-semibold text-sm mb-2">🎯 Strategic Metrics</p>
                    <p className="text-slate-300 text-sm mb-2">Does AI improve competitive position?</p>
                    <ul className="space-y-1 text-slate-300 text-xs">
                      <li>Customer satisfaction (tickets answered faster)</li>
                      <li>Team productivity (code shipped faster)</li>
                      <li>Decision quality (fewer costly mistakes)</li>
                      <li>Scalability (handle more without proportional cost)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/30 rounded p-4 mt-4">
                  <p className="text-emerald-300 font-semibold text-sm mb-1">📊 Example</p>
                  <p className="text-slate-300 text-sm">"AI reduced resolution time from 6 hours to 4.5 hours (25% improvement)" and "team handles 30% more tickets without expanding headcount"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Actually Measure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🔧</span> How to Actually Measure (No Complex Setup)
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">✓ Adoption</h3>
              <p className="text-slate-300 text-sm">Use tool's built-in analytics or ask IT about usage logs. Take 2-minute screenshot weekly. That's it.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">✓ Quality</h3>
              <p className="text-slate-300 text-sm mb-2">For first 100 outputs, manually check 10%. Rate on simple scale: 1-2 (unusable), 3 (acceptable), 4-5 (excellent). Once confident, reduce to spot checks.</p>
              <p className="text-slate-400 text-xs">Most organizations get 80% confidence without specialized analytics.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">✓ Business Impact</h3>
              <p className="text-slate-300 text-sm mb-3">Think about what you'd do without the AI:</p>
              <ul className="text-slate-300 text-sm space-y-1 mb-3">
                <li><span className="text-emerald-300">Support tickets:</span> Without summarization, how long would this take? Multiply by labor rate.</li>
                <li><span className="text-emerald-300">Code generation:</span> Without AI, how many developer-hours?</li>
                <li><span className="text-emerald-300">Document review:</span> Compare hours with AI vs control group doing it manually.</li>
              </ul>
              <p className="text-slate-400 text-xs">Use spreadsheets. Create simple control groups. Compare before/after.</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⏱️</span> The Measurement Timeline
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex gap-6 items-start border-b border-slate-700/50 pb-6">
                <div className="text-3xl flex-shrink-0">📅</div>
                <div>
                  <h3 className="text-white font-bold mb-2">Weeks 1-4: Focus on Adoption</h3>
                  <p className="text-slate-300 text-sm">Is anyone using this? If adoption stalls by week 4, kill the project and learn why.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start border-b border-slate-700/50 pb-6">
                <div className="text-3xl flex-shrink-0">📅</div>
                <div>
                  <h3 className="text-white font-bold mb-2">Weeks 5-8: Validate Quality</h3>
                  <p className="text-slate-300 text-sm">Is it working correctly? If quality is poor by week 8, fix it or abandon it.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start border-b border-slate-700/50 pb-6">
                <div className="text-3xl flex-shrink-0">📅</div>
                <div>
                  <h3 className="text-white font-bold mb-2">Weeks 9-16: Measure Business Impact</h3>
                  <p className="text-slate-300 text-sm">Has this changed outcomes? Only after both adoption and quality look solid should you invest in business impact measurement.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-3xl flex-shrink-0">📅</div>
                <div>
                  <h3 className="text-white font-bold mb-2">Month 4+: Quarterly Reviews</h3>
                  <p className="text-slate-300 text-sm">Track business impact ongoing. Don't measure impact immediately—different applications need different time horizons.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Success Looks Like */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">✅</span> What Success Looks Like
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold text-lg mb-3">Adoption</h3>
              <p className="text-slate-300 text-sm mb-3">50%+ of eligible users actively using the tool</p>
              <div className="w-full bg-slate-900 rounded h-2">
                <div className="bg-emerald-500 h-2 rounded" style={{width: '50%'}}></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold text-lg mb-3">Quality</h3>
              <p className="text-slate-300 text-sm mb-3">AI outputs usable 80%+ of the time with minimal editing</p>
              <div className="w-full bg-slate-900 rounded h-2">
                <div className="bg-emerald-500 h-2 rounded" style={{width: '80%'}}></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-bold text-lg mb-3">Business Impact</h3>
              <p className="text-slate-300 text-sm mb-3">Project generates positive ROI within 6 months</p>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-emerald-300 text-2xl font-bold">+</span>
                <div className="w-full bg-slate-900 rounded h-2">
                  <div className="bg-emerald-500 h-2 rounded" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6 mt-6">
            <p className="text-slate-300"><span className="text-red-300 font-semibold">If you can't get these three metrics, the project isn't working.</span> Don't keep running it hoping improvement will come.</p>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⚠️</span> Common Measurement Mistakes
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-300 font-bold mb-2">Vanity Metrics</h3>
              <p className="text-slate-300 text-sm">"Tool processes 10,000 documents." Who cares if nobody needed them processed?</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-300 font-bold mb-2">Outputs vs Outcomes</h3>
              <p className="text-slate-300 text-sm">Tool generates 500 code suggestions daily. Not success unless those suggestions save developer time.</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-300 font-bold mb-2">Ignoring Adoption</h3>
              <p className="text-slate-300 text-sm">Perfectly accurate AI system nobody uses creates zero value.</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-300 font-bold mb-2">Measuring Too Late</h3>
              <p className="text-slate-300 text-sm">If you wait 12 months to assess impact, you've already overspent.</p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-slate-900 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-300 font-bold mb-2">Vendor Definitions of Success</h3>
              <p className="text-slate-300 text-sm">Vendors are incentivized to show impressive numbers. You need independent measurement.</p>
            </div>
          </div>
        </div>

        {/* Your Next Step */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🚀</span> Your Next Step
          </h2>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <p className="text-slate-300 mb-6">List your current or planned AI projects. For each, write down:</p>

            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded p-4 border-l-4 border-amber-500">
                <p className="text-amber-300 font-bold text-sm mb-1">1. One Adoption Metric</p>
                <p className="text-slate-300 text-sm">How will I know people are using this?</p>
              </div>

              <div className="bg-slate-900/50 rounded p-4 border-l-4 border-amber-500">
                <p className="text-amber-300 font-bold text-sm mb-1">2. One Quality Metric</p>
                <p className="text-slate-300 text-sm">How will I know it works correctly?</p>
              </div>

              <div className="bg-slate-900/50 rounded p-4 border-l-4 border-amber-500">
                <p className="text-amber-300 font-bold text-sm mb-1">3. One Business Impact Metric</p>
                <p className="text-slate-300 text-sm">How will I know this mattered?</p>
              </div>
            </div>

            <p className="text-emerald-300 font-semibold text-sm mt-6">That's enough to avoid the worst measurement mistakes. Implement these three measurements and you'll have more clarity on AI success than most large organizations.</p>
          </div>
        </div>

        {/* Key Principle */}
        <div className="bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/40 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">💡 The Core Truth</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            <span className="text-emerald-300 font-semibold">AI success measurement is simpler than you think.</span> Don't get lost in complex analytics. Focus on three things: Is anyone using it? Does it work correctly? Did it create business value? Measure those, and you'll know if your AI initiative is actually working.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ai-for-corporates/building-an-ai-first-culture-in-your-company" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">AI-First Culture</h3>
                <p className="text-slate-400 text-sm">Build culture where adoption becomes natural behavior</p>
              </div>
            </Link>
            <Link href="/ai-for-corporates/ai-governance-framework-for-small-businesses" className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-500/60 transition">
                <h3 className="text-white font-bold group-hover:text-emerald-300 transition mb-2">AI Governance</h3>
                <p className="text-slate-400 text-sm">Governance that enables fast, responsible AI adoption</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-emerald-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Measure AI Success?</h3>
          <p className="text-slate-300 mb-6">Define three metrics, measure them quarterly, and make data-driven decisions about AI investments.</p>
          <ShareButton variant="corporate" />
        </div>
      </div>
    </div>
  );
}
