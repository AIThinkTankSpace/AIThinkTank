"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicBoardExams() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Breadcrumb */}
      <div className="bg-slate-950 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-xs sm:text-sm text-cyan-400/80 flex items-center gap-2">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <span className="text-purple-500/50">/</span>
            <Link href="/ai-for-teens" className="hover:text-cyan-300">AI for Teens</Link>
            <span className="text-purple-500/50">/</span>
            <span className="text-cyan-300">Board Exam Prep</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-b border-cyan-500/30 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <span className="text-5xl mr-3">📚</span>
                AI for Board Exams
              </h1>
              <p className="text-cyan-300 text-sm sm:text-base">
                Study smarter for CBSE, ICSE, state boards with AI tools.
              </p>
            </div>
            <ShareButton variant="teens" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: The Reality */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-cyan-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Board Exams Are Stressful. AI Makes Them Manageable.
              </span>
            </h2>
            <p className="text-gray-300 text-base mb-6">
              Physics, chemistry, biology (or history, geography, economics). A lot to memorize. A lot to understand. Not much time. The good news? AI can handle the busywork so you focus on actually understanding concepts.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Traditional Way",
                  items: ["Confusing textbook", "Busy coach (2x/week)", "Generic tutorials", "Manual time tracking"],
                  time: "1 year of studying"
                },
                {
                  title: "With Smart AI",
                  items: ["AI explains until it clicks", "Always available 24/7", "AI shows step-by-step", "Track everything automatically"],
                  time: "3 months to excellence"
                }
              ].map((approach, i) => (
                <div key={i} className="bg-slate-900/50 border border-cyan-500/30 rounded p-5">
                  <h3 className="text-cyan-300 font-bold mb-3">{approach.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {approach.items.map((item, j) => (
                      <li key={j} className="text-gray-300 text-sm flex gap-2">
                        <span className={i === 0 ? "text-red-400" : "text-green-400"}>
                          {i === 0 ? "✗" : "✓"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`p-2 rounded text-center text-sm font-bold ${i === 0 ? "bg-red-500/20 text-red-300" : "bg-green-500/20 text-green-300"}`}>
                    {approach.time}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded">
              <p className="text-white text-sm"><span className="font-bold">Reality:</span> Using these tools will improve your score probably by 10-15 percentage points. But only if you actually study. AI removes busywork, not the need for hard work.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Essential AI Tools */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                🛠️ The Tools That Actually Work
              </span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  tool: "Claude & ChatGPT",
                  use: "Concept Explanation",
                  best: "For clear, multiple explanations",
                  example: "Ask: 'Explain photosynthesis like I'm 12 years old'",
                  cost: "Free (basic) or $20/month",
                  icon: "🧠"
                },
                {
                  tool: "WolframAlpha",
                  use: "Problem Solving",
                  best: "Math, Physics, Chemistry step-by-step",
                  example: "Paste any problem, see every step to solution",
                  cost: "Free (basics) or $7/month",
                  icon: "🔬"
                },
                {
                  tool: "Symbolab",
                  use: "Formula Reference",
                  best: "Physics & Math formulas with derivations",
                  example: "Search 'projectile motion' → all related formulas",
                  cost: "Free (ads) or $12/month",
                  icon: "📐"
                },
                {
                  tool: "Khan Academy",
                  use: "Video Explanations",
                  best: "Clear, comprehensive coverage of all subjects",
                  example: "Physics, Math, Biology with excellent explanations",
                  cost: "Free",
                  icon: "📹"
                },
                {
                  tool: "Byju's / Unacademy",
                  use: "Mock Tests & Practice",
                  best: "CBSE/ICSE specific, AI tracks weak areas",
                  example: "Full mock tests with feedback",
                  cost: "₹3,000-5,000/year or ₹999-3,999/month",
                  icon: "✅"
                },
                {
                  tool: "Grammarly",
                  use: "Writing Clarity",
                  best: "Humanities answers (History, English)",
                  example: "Improve grammar and clarity of your answers",
                  cost: "Free (basic) or $12/month",
                  icon: "✏️"
                }
              ].map((tool, i) => (
                <div key={i} className="bg-slate-900/50 border border-green-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-b border-green-500/30 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-green-300 font-bold flex items-center gap-2">
                          <span className="text-2xl">{tool.icon}</span>{tool.tool}
                        </h3>
                        <p className="text-purple-300 text-sm font-semibold mt-1">{tool.use}</p>
                      </div>
                      <span className="text-xs bg-slate-900 text-cyan-400 px-3 py-1 rounded font-bold whitespace-nowrap">{tool.cost}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 space-y-2">
                    <div>
                      <p className="text-cyan-400 text-xs uppercase font-bold mb-1">Best For</p>
                      <p className="text-gray-300 text-sm">{tool.best}</p>
                    </div>
                    <div>
                      <p className="text-purple-400 text-xs uppercase font-bold mb-1">Example</p>
                      <p className="text-gray-300 text-sm">{tool.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 3-Month Study Strategy */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                📅 Your 3-Month Board Exam Study Plan
              </span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  month: "Month 1: Foundation",
                  goal: "Understand concepts deeply using AI",
                  daily: "90 minutes",
                  breakdown: [
                    "30 min: Watch one concept video (Khan Academy)",
                    "30 min: Use Claude to deepen understanding. Ask until you get it.",
                    "30 min: Practice 5-10 problems (WolframAlpha if stuck)"
                  ],
                  metric: "Can you explain concept to a friend without notes?"
                },
                {
                  month: "Month 2: Practice",
                  goal: "Practice questions in exam format, track weak areas",
                  daily: "120 minutes",
                  breakdown: [
                    "30 min: Do 10 practice questions from weakest topics",
                    "30 min: Review wrong answers. Ask Claude: 'Why is this wrong?'",
                    "30 min: Do 10 new questions focusing on speed",
                    "30 min: Revise concepts you got wrong"
                  ],
                  metric: "Accuracy goes 60% → 75% → 85%"
                },
                {
                  month: "Month 3: Mastery",
                  goal: "Full-length exams and last-minute revision",
                  daily: "150 minutes",
                  breakdown: [
                    "60 min: Full-length mock test (exam conditions, time-limited)",
                    "30 min: Review mistakes",
                    "30 min: Revise weak concepts",
                    "10 min: Confidence check"
                  ],
                  metric: "Scoring 80%+ consistently on practice tests"
                }
              ].map((phase, i) => (
                <div key={i} className="bg-slate-800/60 border border-purple-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-b border-purple-500/30 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-purple-300 font-bold text-lg">{phase.month}</h3>
                      <span className="text-xs bg-slate-900 text-pink-400 px-3 py-1 rounded font-bold">{phase.daily} daily</span>
                    </div>
                    <p className="text-cyan-300 font-semibold text-sm">{phase.goal}</p>
                  </div>
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <p className="text-green-400 font-bold text-xs uppercase mb-2">Daily Routine</p>
                      <ul className="space-y-1">
                        {phase.breakdown.map((item, j) => (
                          <li key={j} className="text-gray-300 text-sm flex gap-2">
                            <span className="text-green-400 flex-shrink-0">→</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-slate-700">
                      <p className="text-cyan-300 font-bold text-xs uppercase mb-1">Success Metric</p>
                      <p className="text-gray-300 text-sm">{phase.metric}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded text-center">
              <p className="text-white font-bold text-sm">
                Three months of smart studying with AI beats one year of traditional studying without tools.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Subject-Specific Tips */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-blue-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                🎯 Subject-Specific AI Strategies
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  subject: "Physics",
                  tools: "WolframAlpha (problems), Claude (concepts)",
                  struggles: "Circular motion, SHM, waves, optics, thermodynamics",
                  tip: "Physics is logic, not memorization. Ask Claude: 'Why does F=ma?' Learn the 'why' instead of the formula."
                },
                {
                  subject: "Chemistry",
                  tools: "WolframAlpha (reactions), Claude (mechanisms)",
                  struggles: "Organic reaction mechanisms, inorganic properties, numerical problems",
                  tip: "For organic: Ask Claude to explain electron movement step-by-step. For inorganic: Find patterns. Chemistry is pattern-recognition."
                },
                {
                  subject: "Mathematics",
                  tools: "WolframAlpha (verification), Symbolab (formulas)",
                  struggles: "Too many formulas, multiple approaches per problem",
                  tip: "Use WolframAlpha to check answers first. Learn derivations, not formulas. Understanding the 'why' makes formulas stick."
                },
                {
                  subject: "Biology",
                  tools: "Khan Academy (explanations), Claude (concepts)",
                  struggles: "Too much to memorize, complex diagrams, seems disconnected",
                  tip: "Ask Claude for real-life examples. Draw while listening. Use spaced repetition (Anki app, free). Connect to reality."
                },
                {
                  subject: "English & Literature",
                  tools: "Claude (analysis), Grammarly (clarity)",
                  struggles: "Author's intention, comprehension answers, essay structure",
                  tip: "For analysis: Ask Claude questions, don't let it do thinking for you. Write essays first, then ask Grammarly to improve clarity."
                },
                {
                  subject: "History & Geography",
                  tools: "Claude (timelines & context), Grammarly (clarity)",
                  struggles: "Too many dates, cause-effect chains, essay answers",
                  tip: "Ask Claude to create visual timelines. Ask 'Why did this happen?' not just 'What happened?' Use Grammarly for answer clarity."
                }
              ].map((subject, i) => (
                <div key={i} className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-blue-300 font-bold">{subject.subject}</h3>
                    <span className="text-xs bg-slate-800 text-cyan-400 px-2 py-1 rounded font-mono">Tools: {subject.tools}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-pink-400 font-bold text-xs uppercase mb-1">Common Struggles</p>
                      <p className="text-gray-300">{subject.struggles}</p>
                    </div>
                    <div className="border-t border-slate-700 pt-2">
                      <p className="text-green-400 font-bold text-xs uppercase mb-1">AI Pro Tip</p>
                      <p className="text-gray-300">{subject.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: What NOT to Do */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-red-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                🚫 Red Lines: What NOT to Do
              </span>
            </h2>
            <div className="space-y-3">
              {[
                { no: "Don't let AI write your answers", why: "You learn nothing. Teachers can tell. Your voice disappears." },
                { no: "Don't rely 100% on AI for concept learning", why: "AI fills gaps, not replaces textbooks. Read your textbook + class notes." },
                { no: "Don't use AI during mock tests", why: "Mocks simulate real exams. You need to know what you can do without help." },
                { no: "Don't submit AI-generated answers", why: "That's plagiarism. Boards take this seriously." },
                { no: "Don't ignore where AI is wrong", why: "AI sometimes gives incorrect information. Verify with textbooks." }
              ].map((rule, i) => (
                <div key={i} className="bg-slate-800/60 border border-red-500/30 rounded p-4 flex gap-3">
                  <span className="text-2xl flex-shrink-0">❌</span>
                  <div>
                    <h4 className="text-red-300 font-bold text-sm">{rule.no}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{rule.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Realistic Timeline */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                📊 Your Score Progression (Realistic)
              </span>
            </h2>
            <div className="space-y-3">
              {[
                { weeks: "Weeks 1-4", phase: "Foundation", score: "50% → 65%", detail: "Use AI to understand concepts deeply" },
                { weeks: "Weeks 5-8", phase: "Practice", score: "65% → 80%", detail: "Practice heavily with AI feedback" },
                { weeks: "Weeks 9-12", phase: "Mastery", score: "80% → 85%+", detail: "Full-length exams, final revision" }
              ].map((phase, i) => (
                <div key={i} className="bg-slate-900/50 border border-green-500/30 rounded p-4 flex gap-4">
                  <div className="flex-shrink-0 text-center">
                    <p className="text-cyan-400 font-bold text-xs">{phase.weeks}</p>
                    <div className="mt-2 flex gap-1">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className={`w-1.5 h-6 rounded ${j < i + 1 ? "bg-gradient-to-t from-green-500 to-cyan-400" : "bg-slate-700"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-green-300 font-bold text-sm mb-1">{phase.phase}</h4>
                    <p className="text-cyan-300 font-bold text-sm mb-1">{phase.score}</p>
                    <p className="text-gray-300 text-xs">{phase.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: First Step */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/40 rounded-lg p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              🚀 Your First Step This Week
            </h2>
            <div className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto space-y-3">
              <p><span className="text-cyan-300 font-bold">1.</span> Pick one subject you're struggling with</p>
              <p><span className="text-cyan-300 font-bold">2.</span> Go to Khan Academy (free)</p>
              <p><span className="text-cyan-300 font-bold">3.</span> Watch one concept video</p>
              <p><span className="text-cyan-300 font-bold">4.</span> If still confused, ask Claude the same question</p>
              <p><span className="text-cyan-300 font-bold">5.</span> Compare how they explain it</p>
              <p><span className="text-cyan-300 font-bold">6.</span> Do 5 practice problems</p>
              <p><span className="text-cyan-300 font-bold">7.</span> Note how much better you understand it</p>
            </div>
            <p className="text-purple-300 font-bold text-base">
              That's the power of AI for boards. Not magic. Just clarity.
            </p>
          </div>
        </section>

        {/* Section 8: India Advantage */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-orange-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                🇮🇳 The Indian Advantage
              </span>
            </h2>
            <p className="text-gray-300 text-base mb-6">
              Indian students are good at working hard. AI doesn't remove the need for hard work. It removes busywork. It gives you clarity faster.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-800/60 border border-orange-500/30 rounded p-5">
                <h3 className="text-orange-300 font-bold mb-3">Indian Board Exams Test:</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm flex gap-2"><span className="text-orange-400 flex-shrink-0">✓</span> Deep understanding + application (not just memorization)</li>
                  <li className="text-gray-300 text-sm flex gap-2"><span className="text-orange-400 flex-shrink-0">✓</span> Ability to explain concepts clearly</li>
                  <li className="text-gray-300 text-sm flex gap-2"><span className="text-orange-400 flex-shrink-0">✓</span> Problem-solving under time pressure</li>
                </ul>
              </div>
              <div className="bg-slate-800/60 border border-green-500/30 rounded p-5">
                <h3 className="text-green-300 font-bold mb-3">AI Helps With All Three:</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm flex gap-2"><span className="text-green-400 flex-shrink-0">→</span> Explains until concepts click deeply</li>
                  <li className="text-gray-300 text-sm flex gap-2"><span className="text-green-400 flex-shrink-0">→</span> Helps you explain better</li>
                  <li className="text-gray-300 text-sm flex gap-2"><span className="text-green-400 flex-shrink-0">→</span> Tracks speed and accuracy on practice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            📚 Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "AI for College Essays",
                desc: "Use AI ethically in your applications alongside your board prep.",
                link: "/ai-for-teens/explore/infographic-college-apps"
              },
              {
                title: "AI Internships & Competitions",
                desc: "Earn money while prepping—balance opportunities with exam prep.",
                link: "/ai-for-teens/explore/infographic-internships"
              }
            ].map((article, i) => (
              <Link key={i} href={article.link} className="group">
                <div className="bg-slate-800/60 border border-purple-500/40 rounded-lg p-5 h-full hover:border-cyan-400/60 transition-colors">
                  <h3 className="text-cyan-300 font-bold mb-2 group-hover:text-purple-300 transition-colors">{article.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{article.desc}</p>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-wide group-hover:text-purple-300">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/40 rounded-lg p-8 text-center">
          <h3 className="text-white font-bold text-lg mb-3">Share This With Your Friends</h3>
          <p className="text-gray-300 text-sm mb-5">
            Most students don't know AI can help them study smarter. Help your friends ace their board exams with smart AI tools.
          </p>
          <ShareButton variant="teens" />
        </section>
      </div>
    </div>
  );
}
