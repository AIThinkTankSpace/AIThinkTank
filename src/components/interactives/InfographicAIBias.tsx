"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicAIBias() {
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
            <span className="text-cyan-300">AI Bias</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-b border-cyan-500/30 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <span className="text-5xl mr-3">⚖️</span>
                Understanding AI Bias
              </h1>
              <p className="text-cyan-300 text-sm sm:text-base">
                How bias works, why it matters, and what you can do about it.
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
          <div className="bg-slate-800/60 border border-pink-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                All AI Systems Are Biased
              </span>
            </h2>
            <p className="text-gray-300 text-base mb-6">
              ChatGPT, Instagram algorithms, Netflix recommendations, college admissions AI. All of these systems are biased.
            </p>
            <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/30 rounded p-5 mb-6">
              <p className="text-white font-bold text-sm mb-2">Not in the "they prefer your taste" way.</p>
              <p className="text-gray-300 text-sm">
                In the <span className="font-bold">"they can discriminate against people based on race, gender, or where they were born"</span> way. And the wild part? The AI doesn't know it's doing it.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "🧠", title: "How It Works", desc: "AI learns from data. If data reflects human biases, AI learns them—and amplifies them." },
                { emoji: "⚠️", title: "The Problem", desc: "It's not intentional. That makes it harder to fix." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-pink-500/30 rounded p-4">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <h3 className="text-pink-300 font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Real Examples */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-cyan-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Real Examples: How AI Bias Happens
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "The Resume Filtering AI",
                  problem: "Amazon built an AI to screen job applicants.",
                  bias: "Trained on historical data where company hired more men for tech roles.",
                  result: "AI learned to deprioritize female candidates.",
                  lesson: "Historical data = historical bias. Had to shut it down."
                },
                {
                  title: "The Facial Recognition Failure",
                  problem: "Google Photos couldn't correctly label Black people's faces.",
                  bias: "Training data had few images of Black faces, many of animals.",
                  result: "Marked Black faces as 'gorillas.'",
                  lesson: "If training data isn't diverse, AI won't work for diverse people."
                },
                {
                  title: "The Loan Denial Algorithm",
                  problem: "Lenders used AI to assess creditworthiness.",
                  bias: "Historical lending data showed discrimination (fewer loans to Black Americans).",
                  result: "AI reproduced this discrimination at scale.",
                  lesson: "Training on biased historical data doesn't remove bias. It automates it."
                }
              ].map((example, i) => (
                <div key={i} className="bg-slate-900/50 border border-cyan-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border-b border-cyan-500/30 p-4 sm:p-5">
                    <h3 className="text-cyan-300 font-bold text-base">{example.title}</h3>
                  </div>
                  <div className="p-4 sm:p-5 space-y-2">
                    <div>
                      <p className="text-purple-400 text-xs uppercase font-bold mb-1">Problem</p>
                      <p className="text-gray-300 text-sm">{example.problem}</p>
                    </div>
                    <div>
                      <p className="text-pink-400 text-xs uppercase font-bold mb-1">The Bias</p>
                      <p className="text-gray-300 text-sm">{example.bias}</p>
                    </div>
                    <div>
                      <p className="text-red-400 text-xs uppercase font-bold mb-1">Result</p>
                      <p className="text-gray-300 text-sm">{example.result}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-700">
                      <p className="text-cyan-300 text-xs uppercase font-bold mb-1">Lesson</p>
                      <p className="text-gray-300 text-sm italic">{example.lesson}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 5 Types of Bias */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🔍 5 Types of AI Bias You Should Know
              </span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  num: 1,
                  type: "Data Bias",
                  detail: "The training data reflects real-world discrimination",
                  example: "AI trained on exam scores learns that students from certain regions score lower. It then predicts future students from those regions will too, creating a cycle."
                },
                {
                  num: 2,
                  type: "Sampling Bias",
                  detail: "The training data doesn't represent everyone",
                  example: "Facial recognition trained mostly on men, white people, young people fails for Black women, elders, disabled people."
                },
                {
                  num: 3,
                  type: "Label Bias",
                  detail: "People labeling data have their own biases",
                  example: "Humans label LinkedIn photos as 'professional' vs 'unprofessional.' Professional looks different in New York vs Mumbai. AI learns a culturally specific definition."
                },
                {
                  num: 4,
                  type: "Algorithmic Bias",
                  detail: "The AI's logic itself creates bias",
                  example: "AI optimizing hiring learns that 'people who take 2-week vacations have lower productivity' (false). Deprioritizes people from cultures celebrating specific holidays."
                },
                {
                  num: 5,
                  type: "Feedback Loop Bias",
                  detail: "Bias creates worse outcomes, which creates more bias",
                  example: "AI approves loans easier for one group → they have more money → they're 'better borrowers' → AI reinforces bias → other groups denied → bias gets worse."
                }
              ].map((item) => (
                <div key={item.num} className="bg-slate-800/60 border border-purple-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-b border-purple-500/30 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-purple-300 font-bold">{item.type}</h3>
                      <span className="text-2xl font-bold text-pink-400">{item.num}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">{item.detail}</p>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-gray-300 text-sm"><span className="text-cyan-300 font-bold">Example:</span> {item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Why It Matters to YOU */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-red-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                ⚡ Why This Matters to You (Even If You Don't Build AI)
              </span>
            </h2>
            <p className="text-gray-300 text-base mb-6">
              Imagine these scenarios:
            </p>
            <div className="space-y-3 mb-6">
              {[
                "You're applying to college. An AI scores your application—trained on previous biased data.",
                "You're getting a job or loan. An AI system evaluates you—using historical data with discrimination embedded.",
                "You're using a dating app. Algorithm shows different people to different users based on biased attractiveness patterns.",
                "You're in school. AI predicts student success but uses data from underrepresented regions."
              ].map((scenario, i) => (
                <div key={i} className="bg-slate-900/50 border border-red-500/30 rounded p-4 flex gap-3">
                  <span className="text-red-400 font-bold flex-shrink-0">⚠️</span>
                  <p className="text-gray-300 text-sm">{scenario}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded p-5">
              <p className="text-white font-bold text-sm mb-2">For teens specifically:</p>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm flex gap-2"><span className="text-red-400 flex-shrink-0">→</span> College admissions AI can bias against your region/background</li>
                <li className="text-gray-300 text-sm flex gap-2"><span className="text-red-400 flex-shrink-0">→</span> Hiring AI can eliminate you before a human sees your resume</li>
                <li className="text-gray-300 text-sm flex gap-2"><span className="text-red-400 flex-shrink-0">→</span> Content algorithms push extreme content based on biased history</li>
                <li className="text-gray-300 text-sm flex gap-2"><span className="text-red-400 flex-shrink-0">→</span> Educational AI not built for Indian diversity teaches less effectively</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Red Flags to Spot Bias */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-yellow-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                🚩 Red Flags: How to Spot AI Bias
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  flag: "Outcomes Differ by Group",
                  watch: "If AI accepts 70% of applications from Group A but 30% from Group B, something's wrong.",
                  applies: "Job applications, college admissions, loan approval, content recommendations"
                },
                {
                  flag: "Unequal Performance",
                  watch: "If ChatGPT gives worse answers about your culture, or recommends worse products for your region, it's biased.",
                  applies: "Language models, recommendation systems, diagnostic tools"
                },
                {
                  flag: "Lack of Transparency",
                  watch: "If a company won't say what data their AI was trained on, they're hiding something.",
                  applies: "Any AI product claiming proprietary methods"
                },
                {
                  flag: "Non-Diverse Team",
                  watch: "AI teams that are all one demographic create biased systems. They can't see blind spots they don't have.",
                  applies: "Check company leadership, hiring team diversity"
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/60 border border-yellow-500/30 rounded-lg p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-yellow-300 font-bold">{item.flag}</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-orange-400 text-xs uppercase font-bold mb-1">Watch for</p>
                      <p className="text-gray-300 text-sm">{item.watch}</p>
                    </div>
                    <div>
                      <p className="text-purple-400 text-xs uppercase font-bold mb-1">Applies to</p>
                      <p className="text-gray-300 text-sm">{item.applies}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: What You Can Do */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                💪 What You Can Actually Do About AI Bias
              </span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  path: "If You're Using AI",
                  actions: [
                    "Be aware of limits: ChatGPT is trained on English internet. It knows American culture better than Indian culture.",
                    "Don't assume accuracy: Just because AI sounds confident doesn't mean it's right. Check important outputs.",
                    "Report problems: If an AI seems unfair, report it. Companies need to know.",
                    "Question recommendations: Is it actually relevant, or is it repeating biased patterns?"
                  ],
                  icon: "👤"
                },
                {
                  path: "If You're Building AI (Future Path)",
                  actions: [
                    "Use diverse training data: Make sure your data represents the people you're building for.",
                    "Test on diverse users: Check: Does it work equally well for all demographics?",
                    "Document limitations: Be honest about what your AI can't do.",
                    "Have diverse teams: Hire different people. They'll spot biases you can't.",
                    "Monitor constantly: Even after launch, watch if behavior changes or bias emerges."
                  ],
                  icon: "🔨"
                },
                {
                  path: "If You're In School",
                  actions: [
                    "Learn about bias: Take courses or read about this. It's essential literacy.",
                    "Think critically: When you hear about AI making decisions, ask: 'What data was it trained on? Could it be biased?'",
                    "Speak up: If you see bias in school's AI use, question it.",
                    "Prepare for the future: AI ethics and bias mitigation is a real career path."
                  ],
                  icon: "🎓"
                }
              ].map((section, i) => (
                <div key={i} className="bg-slate-900/50 border border-green-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-b border-green-500/30 p-4 sm:p-5">
                    <h3 className="text-green-300 font-bold flex items-center gap-2">
                      <span className="text-2xl">{section.icon}</span>{section.path}
                    </h3>
                  </div>
                  <div className="p-4 sm:p-5">
                    <ul className="space-y-2">
                      {section.actions.map((action, j) => (
                        <li key={j} className="text-gray-300 text-sm flex gap-2">
                          <span className="text-green-400 flex-shrink-0">✓</span>{action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: India Context */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-orange-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                🇮🇳 Why AI Bias Matters Especially to India
              </span>
            </h2>
            <p className="text-gray-300 text-base mb-6">
              India is large, diverse, and increasingly using AI for critical decisions.
            </p>
            <div className="space-y-5">
              {[
                {
                  area: "Education",
                  issue: "AI predicting exam performance, college admissions AI"
                },
                {
                  area: "Credit & Lending",
                  issue: "AI determining loan eligibility"
                },
                {
                  area: "Job Matching",
                  issue: "AI screening resumes, recommending jobs"
                },
                {
                  area: "Healthcare",
                  issue: "AI diagnosing diseases (some trained on Western-only data)"
                },
                {
                  area: "Content Delivery",
                  issue: "Algorithms pushing content, news (can amplify regional bias)"
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/60 border border-orange-500/30 rounded p-4 flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">→</span>
                  <div>
                    <h4 className="text-orange-300 font-bold text-sm">{item.area}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{item.issue}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded p-5">
              <h4 className="text-orange-300 font-bold mb-3">India-Specific Bias Challenges:</h4>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm flex gap-2"><span className="text-orange-400 flex-shrink-0">•</span> Most AI trained on English-language, Western data</li>
                <li className="text-gray-300 text-sm flex gap-2"><span className="text-orange-400 flex-shrink-0">•</span> Regional representation in datasets is often poor</li>
                <li className="text-gray-300 text-sm flex gap-2"><span className="text-orange-400 flex-shrink-0">•</span> Cultural practices not well-represented</li>
                <li className="text-gray-300 text-sm flex gap-2"><span className="text-orange-400 flex-shrink-0">•</span> Class and caste biases in historical data embedded in AI</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-slate-900/60 border border-green-500/30 rounded text-center">
              <p className="text-green-300 font-bold text-sm">
                Opportunity: India needs people who understand AI AND understand Indian diversity. Building fair AI for India is a valuable career.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: The Honest Truth */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-cyan-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                🎯 The Honest Truth About AI Bias
              </span>
            </h2>
            <p className="text-gray-300 text-base mb-6">
              You can't remove all bias from AI. But you can:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { action: "Recognize it", icon: "👁️" },
                { action: "Measure it", icon: "📊" },
                { action: "Reduce it", icon: "⬇️" },
                { action: "Be transparent about it", icon: "💬" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/60 border border-cyan-500/30 rounded p-4 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-cyan-300 font-bold text-sm">{item.action}</p>
                </div>
              ))}
            </div>
            <div className="p-5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded">
              <p className="text-white font-bold text-sm mb-2">The companies and people doing this work are the ones building AI that's actually trustworthy.</p>
              <p className="text-gray-300 text-sm">
                When you understand bias, you're no longer a passive consumer of AI. You're someone who can spot problems, build better systems, and push for fairness. That's actually a superpower in 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/40 rounded-lg p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              📚 What You Should Do This Week
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">Pick one of these:</p>
            <div className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto space-y-3">
              <p><span className="text-cyan-300 font-bold">1.</span> Analyze an algorithm you use daily (TikTok, Instagram, YouTube): What patterns do you notice? Could some groups see different content?</p>
              <p><span className="text-cyan-300 font-bold">2.</span> Read about an AI bias case (search "AI bias examples"). Pick one. Understand why it happened. What should they have done differently?</p>
              <p><span className="text-cyan-300 font-bold">3.</span> Take a free online bias course (MIT's "Fairness and Machine Learning" or Google's "Fairness in Machine Learning")</p>
              <p><span className="text-cyan-300 font-bold">4.</span> Have a conversation with friends: "What AI are you using? Do you notice it treats different people differently?"</p>
            </div>
            <p className="text-purple-300 font-bold text-base">
              Use your awareness wisely.
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
                desc: "Learn to use AI ethically in your applications.",
                link: "/ai-for-teens/explore/infographic-college-apps"
              },
              {
                title: "Build an AI Portfolio",
                desc: "Create real projects that show you understand AI's impact.",
                link: "/ai-for-teens/explore/infographic-ai-portfolio"
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
            Understanding AI bias is essential literacy for 2026. Help your friends become critical thinkers about the AI they use every day.
          </p>
          <ShareButton variant="teens" />
        </section>
      </div>
    </div>
  );
}
