"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicAIPortfolio() {
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
            <span className="text-cyan-300">AI Portfolio</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-b border-cyan-500/30 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <span className="text-5xl mr-3">🎯</span>
                Build Your AI Portfolio
              </h1>
              <p className="text-cyan-300 text-sm sm:text-base">
                3 months from zero to portfolio that stands out.
              </p>
            </div>
            <ShareButton variant="teens" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: Why Portfolios Matter */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Why Colleges Care About Your Portfolio
              </span>
            </h2>
            <div className="space-y-3">
              {[
                { num: 1, title: "Grades prove you follow instructions", sub: "Portfolios prove you can think." },
                { num: 2, title: "Anyone can take an AI course", sub: "Building a project shows initiative and depth." },
                { num: 3, title: "Your portfolio shows growth", sub: "Colleges see your thinking evolve through projects." },
                { num: 4, title: "90% of applicants don't have one", sub: "You will. That's your competitive moat." }
              ].map((item) => (
                <div key={item.num} className="bg-slate-900/50 border border-purple-500/30 rounded p-5 flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-cyan-300 font-bold text-sm">{item.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Project Types That Impress */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-cyan-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                4 Project Types That Impress Colleges
              </span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  type: "Type 1: Solving a Real Problem",
                  level: "⭐ Strongest",
                  example: "Built a chatbot for NEET exam prep, tested with 50 students",
                  shows: ["Identified a real problem", "Had initiative to solve it", "Validated it works", "Understand project lifecycle"],
                  difficulty: "Intermediate (2-3 weeks)",
                  tools: "ChatGPT API, Python, Flask"
                },
                {
                  type: "Type 2: Data Analysis with AI Insights",
                  level: "⭐ Strong",
                  example: "Analyzed how air quality affects exam performance in Mumbai",
                  shows: ["Work with data", "Ask good questions", "Think critically", "Explain complex findings"],
                  difficulty: "Beginner to Intermediate",
                  tools: "Python (pandas, matplotlib), Google Colab, Claude"
                },
                {
                  type: "Type 3: AI Creative Application",
                  level: "⭐ Strong",
                  example: "Built tool that generates personalized study schedules using AI",
                  shows: ["Understand AI enhancement", "Think about UX", "Build something people want", "Iterate and improve"],
                  difficulty: "Intermediate",
                  tools: "Python, Streamlit, Claude/ChatGPT API"
                },
                {
                  type: "Type 4: Writing About AI (Non-Technical)",
                  level: "⭐ Good",
                  example: "Wrote 12 articles on AI in Indian healthcare with 5 interviews",
                  shows: ["Research deeply", "Explain complex topics", "Build platform", "Understand real-world apps"],
                  difficulty: "Easy to Intermediate",
                  tools: "Writing, Medium, Substack, or LinkedIn"
                }
              ].map((project, i) => (
                <div key={i} className="bg-slate-900/50 border border-cyan-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-cyan-300 font-bold text-sm sm:text-base">{project.type}</h3>
                      <span className="text-lg flex-shrink-0">{project.level}</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm italic">{project.example}</p>
                  </div>
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <div className="text-purple-400 font-bold text-xs uppercase mb-2">What It Shows</div>
                      <div className="flex flex-wrap gap-2">
                        {project.shows.map((skill, j) => (
                          <span key={j} className="text-xs bg-slate-800 border border-purple-500/30 text-gray-300 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-slate-700">
                      <div>
                        <div className="text-green-400 font-bold text-xs uppercase mb-1">Difficulty</div>
                        <p className="text-gray-300 text-xs">{project.difficulty}</p>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-bold text-xs uppercase mb-1">Tools</div>
                        <p className="text-gray-300 text-xs">{project.tools}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 7-Step Process */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                🛠️ Build Your Project in 7 Steps
              </span>
            </h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "Find a Problem You Care About", time: "1 week", detail: "What frustrates you daily? Pick a recurring problem in your school/community." },
                { step: 2, title: "Define Success", time: "1 week", detail: "How will you know this worked? 30 students using it? 80% accuracy? 1,000 reads?" },
                { step: 3, title: "Learn Minimum Skills Needed", time: "2-4 weeks", detail: "Python basics? API usage? Data analysis? Learn just enough to build." },
                { step: 4, title: "Build Minimum Viable Version", time: "2-4 weeks", detail: "Don't aim for perfection. Aim for working. Your next version will be better." },
                { step: 5, title: "Test With Real Users", time: "1-2 weeks", detail: "Ask 10-20 people to use it. Document feedback. This is gold." },
                { step: 6, title: "Build Version 2", time: "2-3 weeks", detail: "Iterate based on real feedback. This separation shows maturity." },
                { step: 7, title: "Document & Share", time: "1-2 weeks", detail: "Write clear description. GitHub repo. Blog post. Simple portfolio site." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                    {item.step}
                  </div>
                  <div className="flex-grow bg-slate-800/60 border border-green-500/30 rounded p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-cyan-300 font-bold">{item.title}</h3>
                      <span className="text-xs bg-slate-900 text-green-400 px-2 py-1 rounded whitespace-nowrap font-bold">{item.time}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: 3-Month Timeline */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                📅 Real Timeline: Zero to Portfolio
              </span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  month: "Month 1",
                  phase: "Learn Skills + Brainstorm",
                  activities: [
                    "Weeks 1-2: Online course on Python and basics",
                    "Weeks 3-4: Brainstorm 5 problems, pick one"
                  ],
                  time: "Weeks 1-4"
                },
                {
                  month: "Month 2",
                  phase: "Build Version 1 + Test",
                  activities: [
                    "Weeks 1-3: Code the minimum working version",
                    "Week 4: Get feedback from 10 people"
                  ],
                  time: "Weeks 5-8"
                },
                {
                  month: "Month 3",
                  phase: "Improve + Document",
                  activities: [
                    "Weeks 1-2: Build version 2 based on feedback",
                    "Weeks 3-4: Write documentation, blog post, portfolio website"
                  ],
                  time: "Weeks 9-12"
                }
              ].map((m, i) => (
                <div key={i} className="bg-slate-900/50 border border-purple-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-b border-purple-500/30 p-4 sm:p-5">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-purple-300 font-bold text-lg">{m.month}</h3>
                      <span className="text-cyan-400 font-bold text-sm">{m.phase}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="space-y-2 mb-3">
                      {m.activities.map((activity, j) => (
                        <div key={j} className="flex gap-2 items-start">
                          <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                          <p className="text-gray-300 text-sm">{activity}</p>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 border-t border-slate-700 pt-3">
                      ⏱️ {m.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded text-center">
              <p className="text-white font-bold text-sm">
                Total: 3 months. Most peers won't have this. You will.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Portfolio Website */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-cyan-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                🌐 Your Portfolio Website (Keep It Simple)
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Colleges want to see your work, not fancy web design. A one-page site is perfect.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { tool: "GitHub Pages", note: "Free, easy, looks professional" },
                { tool: "Vercel", note: "Free, fast, great for portfolios" },
                { tool: "Simple HTML/CSS", note: "If you want to learn web design" },
                { tool: "Notion", note: "Surprisingly good for portfolios" }
              ].map((t, i) => (
                <div key={i} className="bg-slate-800/60 border border-cyan-500/30 rounded p-4">
                  <div className="font-bold text-cyan-300 mb-1">{t.tool}</div>
                  <p className="text-gray-300 text-xs sm:text-sm">{t.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-800/60 border border-purple-500/30 rounded p-5">
              <h3 className="text-purple-300 font-bold mb-3">Include on your site:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2"><span className="text-green-400 flex-shrink-0">✓</span> Your name and short bio (who are you?)</li>
                <li className="flex gap-2"><span className="text-green-400 flex-shrink-0">✓</span> 3-5 projects with descriptions and links</li>
                <li className="flex gap-2"><span className="text-green-400 flex-shrink-0">✓</span> Links to your blog, GitHub, LinkedIn</li>
                <li className="flex gap-2"><span className="text-green-400 flex-shrink-0">✓</span> One sentence on why you're interested in AI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: India Advantage */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-pink-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                🇮🇳 The India Advantage: Build What India Needs
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              International and Indian colleges increasingly value applications that show local relevance.
            </p>
            <div className="space-y-3">
              {[
                "AI tool for improving regional language education",
                "Data analysis on accessibility challenges in India",
                "AI chatbot for mental health awareness",
                "Tool for helping small business owners with inventory/pricing",
                "Analysis of pollution, traffic, or agricultural data relevant to your region"
              ].map((idea, i) => (
                <div key={i} className="bg-slate-900/50 border border-pink-500/30 rounded p-4 flex gap-3">
                  <span className="text-pink-400 font-bold flex-shrink-0">💡</span>
                  <p className="text-gray-300 text-sm">{idea}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-900/60 border border-pink-500/30 rounded text-center">
              <p className="text-gray-300 text-sm">
                <span className="text-pink-300 font-bold">Why this matters:</span> You show you understand real problems in your community. You're thinking beyond the classroom.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: How Colleges Evaluate */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                🎯 How Colleges Actually Evaluate Your Portfolio
              </span>
            </h2>
            <div className="space-y-3">
              {[
                { q: "Did you identify a real problem?", why: "Shows critical thinking" },
                { q: "Did you take initiative to solve it?", why: "Shows motivation" },
                { q: "Can you explain your approach clearly?", why: "Shows communication" },
                { q: "Did you iterate based on feedback?", why: "Shows maturity" },
                { q: "What did you learn?", why: "Shows growth mindset" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/60 border border-purple-500/30 rounded p-4 flex gap-4">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="text-cyan-300 font-bold text-sm">{item.q}</p>
                    <p className="text-gray-300 text-xs text-gray-400">→ {item.why}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-900/60 border border-cyan-500/30 rounded text-center">
              <p className="text-gray-300 text-sm">
                <span className="text-cyan-300 font-bold">A "simple" project that shows all of this</span> beats a "complicated" project that's just copied from tutorials.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Competitive Reality */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                🏆 What Separates the Strongest Applicants
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  level: "Average Applicant",
                  items: [
                    "Good grades",
                    "Attends robotics club",
                    "Took an online AI course"
                  ]
                },
                {
                  level: "Strong Applicant",
                  items: [
                    "Above +",
                    "Coded a project",
                    "Got feedback and improved it"
                  ]
                },
                {
                  level: "Exceptional Applicant",
                  items: [
                    "Above +",
                    "Built something for a real community",
                    "Documented it fully",
                    "Can articulate what they learned"
                  ]
                }
              ].map((tier, i) => (
                <div key={i} className={`border rounded-lg p-5 ${i === 2 ? "bg-gradient-to-r from-green-500/15 to-cyan-500/15 border-green-500/40" : "bg-slate-800/60 border-green-500/20"}`}>
                  <h3 className={`font-bold mb-3 ${i === 2 ? "text-green-300 text-lg" : "text-cyan-300"}`}>
                    {tier.level}
                  </h3>
                  <div className="space-y-2">
                    {tier.items.map((item, j) => (
                      <div key={j} className="flex gap-2 items-start text-gray-300 text-sm">
                        <span className={`flex-shrink-0 font-bold ${i === 2 ? "text-green-400" : "text-cyan-400"}`}>→</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded text-center">
              <p className="text-cyan-300 font-bold text-sm">
                You're reading this article. You're already thinking about standing out. You're already ahead.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/40 rounded-lg p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              🚀 Your Challenge This Week
            </h2>
            <ol className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto space-y-2 text-left">
              <li><span className="text-cyan-300 font-bold">1.</span> Identify one problem that frustrates you</li>
              <li><span className="text-cyan-300 font-bold">2.</span> Research if anyone else has solved it</li>
              <li><span className="text-cyan-300 font-bold">3.</span> Imagine your solution</li>
              <li><span className="text-cyan-300 font-bold">4.</span> Find one online course or tutorial on a tool that could help</li>
            </ol>
            <p className="text-purple-300 font-bold text-base">
              That's how it starts.
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
                title: "AI for College Essays",
                desc: "Learn the ethical way to use AI in your applications.",
                link: "/ai-for-teens/explore/infographic-college-apps"
              },
              {
                title: "AI Internships & Competitions",
                desc: "Get real experience, earn money, build your resume now.",
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
            Most peers will graduate without a portfolio. You're building yours. Help others do the same.
          </p>
          <ShareButton variant="teens" />
        </section>
      </div>
    </div>
  );
}
