"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicCollegeApps() {
  const [activeTab, setActiveTab] = useState("good");

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
            <span className="text-cyan-300">College Apps</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-b border-cyan-500/30 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <span className="text-5xl mr-3">📝</span>
                AI for College Essays
              </h1>
              <p className="text-cyan-300 text-sm sm:text-base">
                Brainstorm smart. Write authentically. Get accepted.
              </p>
            </div>
            <ShareButton variant="teens" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: The Truth */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                The Truth About AI & College Apps
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-purple-500/30 rounded p-5">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-cyan-300 font-bold mb-2">Smart AI Use</h3>
                <p className="text-gray-300 text-sm">Brainstorming, organizing, refining clarity, feedback on voice—like using Grammarly</p>
              </div>
              <div className="bg-slate-900/50 border border-pink-500/30 rounded p-5">
                <div className="text-4xl mb-3">❌</div>
                <h3 className="text-pink-300 font-bold mb-2">Gets You Rejected</h3>
                <p className="text-gray-300 text-sm">Writing entire essays, fake stories, making your voice sound "better," letting AI think for you</p>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded p-4">
              <p className="text-white text-sm sm:text-base">
                <span className="font-bold text-cyan-300">87% of college counselors</span> say AI proficiency is a key skill. They're not looking to reject AI use—they're looking to reject <span className="font-bold">plagiarism</span> and <span className="font-bold">inauthenticity</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What AI Can & Can't Do */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-cyan-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Where AI Actually Helps
              </span>
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/50 border-l-4 border-cyan-500 p-5 rounded">
                <h3 className="text-cyan-300 font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🧠</span> 1. Brainstorming & Organizing
                </h3>
                <p className="text-gray-300 text-sm">Blank page? Ask AI for 5-10 different essay angles. Pick the one that resonates with YOUR story.</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-purple-500 p-5 rounded">
                <h3 className="text-purple-300 font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">✏️</span> 2. Refining Your Draft
                </h3>
                <p className="text-gray-300 text-sm">YOU write. AI points out unclear parts: "You mention 'that moment'—which moment? Be specific."</p>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-pink-500 p-5 rounded">
                <h3 className="text-pink-300 font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🔍</span> 3. Checking Clarity
                </h3>
                <p className="text-gray-300 text-sm">Does this explain WHY something matters? Does a reader understand your story? AI finds gaps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Red Flags Admissions Officers Look For */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-pink-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                🚩 Red Flags That Get You Caught
              </span>
            </h2>
            <div className="space-y-3">
              {[
                { flag: "Sudden Style Shift", detail: "Your email sounds like you. Your other essays sound like you. But THIS essay? Sounds different. 🚨" },
                { flag: "Too Polished", detail: "Personal essays should feel real, not like a corporate brochure written by a professional." },
                { flag: "Inconsistent Stories", detail: "You mention a passion in the essay, but nowhere else in your application. That mismatch gets flagged." },
                { flag: "Vague Details", detail: "Real stories have specifics. AI-generated content is often generic and lacks personality." },
                { flag: "Voice Mismatch", detail: "You interview poorly but write incredibly well? That gap gets noticed during the admissions review." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/60 border border-pink-500/30 rounded p-4 flex gap-3">
                  <span className="text-lg flex-shrink-0">⚠️</span>
                  <div>
                    <h4 className="text-pink-300 font-bold text-sm">{item.flag}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: The 5-Week Process */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                📅 Your 5-Week Essay Roadmap
              </span>
            </h2>
            <div className="space-y-4">
              {[
                { week: 1, title: "Brainstorm", desc: "List 8-10 experiences. Ask AI: Which would make the strongest essay?", icon: "💭" },
                { week: 2, title: "Organize", desc: "Write rough outline. Ask AI: Does this flow logically?", icon: "🗂️" },
                { week: 3, title: "Write (YOU)", desc: "First draft in your voice, your words. Get human feedback.", icon: "✍️" },
                { week: 4, title: "Refine", desc: "Use AI for grammar and clarity checks only. You rewrite.", icon: "🔧" },
                { week: 5, title: "Polish", desc: "Final read: Does this sound like YOU? Submit.", icon: "✨" }
              ].map((w) => (
                <div key={w.week} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-white">
                    W{w.week}
                  </div>
                  <div className="flex-grow bg-slate-900/50 border border-purple-500/30 rounded p-4">
                    <h3 className="text-cyan-300 font-bold mb-1">{w.icon} {w.title}</h3>
                    <p className="text-gray-300 text-sm">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Power Prompts */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-cyan-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                💬 Prompts That Actually Work
              </span>
            </h2>
            <div className="space-y-3">
              {[
                { use: "Brainstorming", prompt: "I want to write about my experience [specific situation]. What are 3-4 different angles I could take?" },
                { use: "Organization", prompt: "Here's what I want to say: [your rough ideas]. Help me organize this into logical flow with strong opening and closing." },
                { use: "Clarity Check", prompt: "Does this paragraph explain why this experience matters to me? What's unclear?" },
                { use: "Voice Check", prompt: "Does this sound like me? Would a friend recognize how I actually talk in this writing?" }
              ].map((p, i) => (
                <div key={i} className="bg-slate-800/60 border border-cyan-500/30 rounded p-4">
                  <div className="text-cyan-400 font-bold text-xs sm:text-sm mb-2 uppercase tracking-wide">{p.use}</div>
                  <code className="text-gray-300 text-xs sm:text-sm block bg-slate-950/60 p-3 rounded border border-cyan-500/10 font-mono">
                    "{p.prompt}"
                  </code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Tools That Respect Your Authenticity */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                🛠️ Tools That Work (& Don't Get You Caught)
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tool: "Grammarly Premium", use: "Grammar & clarity without rewriting core message", status: "✅ Use It" },
                { tool: "Claude/ChatGPT", use: "Brainstorming, clarity checks, voice feedback", status: "✅ Use It" },
                { tool: "Hemingway App", use: "Shows unclear or verbose writing", status: "✅ Use It" },
                { tool: "Essay Generators", use: "AI essay writing services 'write for you'", status: "❌ Don't" }
              ].map((t, i) => (
                <div key={i} className={`border rounded p-4 ${t.status.includes("✅") ? "bg-slate-900/50 border-green-500/30" : "bg-slate-900/50 border-pink-500/30"}`}>
                  <div className={`font-bold mb-1 ${t.status.includes("✅") ? "text-green-300" : "text-pink-300"}`}>
                    {t.status}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{t.tool}</h4>
                  <p className="text-gray-300 text-xs">{t.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: What Admissions Officers Actually Care About */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                🎯 What Actually Gets You In
              </span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { num: 1, title: "Authenticity", desc: "Does your voice, story, and thinking feel real?" },
                { num: 2, title: "Self-Reveal", desc: "What do we learn about who you truly are?" },
                { num: 3, title: "Deep Thinking", desc: "Did you actually reflect, or is this surface-level?" }
              ].map((item) => (
                <div key={item.num} className="bg-slate-900/60 border border-purple-500/30 rounded p-5 text-center">
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-3">
                    {item.num}
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-900/60 border border-cyan-500/30 rounded text-center">
              <p className="text-gray-300 text-sm">
                <span className="text-cyan-300 font-bold">AI can help with #1 and #3</span>. But AI cannot create #2. Your story is yours alone.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: The Competitive Advantage */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-pink-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                🚀 Your Hidden Advantage
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Students who can use AI as a thinking partner (not a ghost writer) are more prepared for college. You're learning to:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Think clearly about what you want to communicate",
                "Accept feedback and improve your work",
                "Leverage tools instead of doing everything manually",
                "Distinguish your authentic voice from generic perfection"
              ].map((skill, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <p className="text-gray-300 text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/40 rounded-lg p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              💪 Your Move This Week
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Start with ONE college essay prompt. Brainstorm with AI. Then write it in your own words. See how AI as a tool feels different from AI as a replacement.
            </p>
            <p className="text-cyan-300 font-bold text-base">
              That's the approach that gets acceptances.
            </p>
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
                title: "Build an AI Portfolio for College",
                desc: "Stand out with real projects that impress admissions officers.",
                link: "/ai-for-teens/explore/infographic-ai-portfolio"
              },
              {
                title: "AI Internships & Competitions",
                desc: "Get paid to learn AI and build your resume right now.",
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
            Most students think AI use gets them rejected. You know better. Help others understand too.
          </p>
          <ShareButton variant="teens" />
        </section>
      </div>
    </div>
  );
}
