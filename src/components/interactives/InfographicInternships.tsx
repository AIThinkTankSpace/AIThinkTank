"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicInternships() {
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
            <span className="text-cyan-300">Internships & Competitions</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-b border-cyan-500/30 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <span className="text-5xl mr-3">💰</span>
                Get Paid to Learn AI
              </h1>
              <p className="text-cyan-300 text-sm sm:text-base">
                Real internships, competitions, and opportunities. Starting this month.
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
          <div className="bg-slate-800/60 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                You Can Start This Month
              </span>
            </h2>
            <p className="text-gray-300 text-base mb-6">
              Right now, in 2026, there are companies actively hiring high schoolers to do actual AI work—and paying them well. There are also competitions where you can build projects, win cash, and get recognized by top tech companies.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { num: "$15-25", label: "Data annotation hourly rate", icon: "💵" },
                { num: "$200-600", label: "Monthly earnings (10 hrs/week)", icon: "📈" },
                { num: "100K+", label: "Prize pools in competitions", icon: "🏆" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/50 border border-green-500/30 rounded p-4 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-green-400 font-bold text-lg">{stat.num}</div>
                  <p className="text-gray-300 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-cyan-300 font-bold text-sm">The catch? You have to know where to look.</p>
          </div>
        </section>

        {/* Section 2: Companies Hiring Teens */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-cyan-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                🏢 Companies Hiring Teens for AI Work NOW
              </span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  company: "Scale AI, Appen, Outlier",
                  role: "Data Annotation (Remote)",
                  pay: "$15-$25/hour USD",
                  commitment: "5-20 hours/week (your choice)",
                  skills: "Attention to detail, critical thinking",
                  india: "✓ Hires from India, flexible for students",
                  value: "Learn how AI systems actually work from inside",
                  apply: ["scale.com", "appen.com", "outlier.ai", "surge.ai"]
                },
                {
                  company: "Google",
                  role: "BOLD Internship + Summer Internships",
                  pay: "Fully paid + housing stipend",
                  commitment: "Full-time (summer break)",
                  skills: "Python helpful but not required",
                  india: "✓ Accepts international applications",
                  value: "Work with world-class engineers on real projects",
                  apply: ["google.com/careers/students"]
                },
                {
                  company: "Microsoft",
                  role: "TEALS Program",
                  pay: "Varies (some paid, some learning-focused)",
                  commitment: "10-15 hours/week during school year",
                  skills: "Curiosity about technology",
                  india: "~ Primarily US-based, some international opportunities",
                  value: "Paired with professional engineers on real projects",
                  apply: ["tealsk12.org"]
                },
                {
                  company: "Internship.com & LinkedIn",
                  role: "Various AI & ML Intern Roles",
                  pay: "$18-$30/hour",
                  commitment: "Varies",
                  skills: "Varies by role",
                  india: "✓ Many remote roles, Indian companies hiring",
                  value: "Wide variety of opportunities and companies",
                  apply: ["internship.com", "linkedin.com (search 'AI internship high school')"]
                }
              ].map((job, i) => (
                <div key={i} className="bg-slate-900/50 border border-cyan-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30 p-4 sm:p-5">
                    <h3 className="text-cyan-300 font-bold text-base sm:text-lg">{job.company}</h3>
                    <p className="text-purple-300 text-sm font-semibold">{job.role}</p>
                  </div>
                  <div className="p-4 sm:p-5 space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <div className="text-green-400 font-bold text-xs uppercase mb-1">Pay</div>
                        <p className="text-gray-300 text-sm">{job.pay}</p>
                      </div>
                      <div>
                        <div className="text-purple-400 font-bold text-xs uppercase mb-1">Commitment</div>
                        <p className="text-gray-300 text-sm">{job.commitment}</p>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-bold text-xs uppercase mb-1">Skills Needed</div>
                        <p className="text-gray-300 text-sm">{job.skills}</p>
                      </div>
                      <div>
                        <div className="text-pink-400 font-bold text-xs uppercase mb-1">India Access</div>
                        <p className="text-gray-300 text-sm">{job.india}</p>
                      </div>
                    </div>
                    <div className="border-t border-slate-700 pt-3">
                      <p className="text-gray-300 text-sm mb-3"><span className="text-cyan-300 font-bold">Why it's great:</span> {job.value}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.apply.map((link, j) => (
                          <span key={j} className="text-xs bg-slate-800 border border-cyan-500/30 text-cyan-400 px-2 py-1 rounded font-mono">
                            {link}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: High-Paying Competitions */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-pink-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                🏅 High-Paying Competitions (With Real Prize Money)
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  name: "Kaggle Competitions",
                  prize: "$10,000-$100,000+",
                  difficulty: "Beginner to Expert",
                  time: "1-3 months per competition",
                  skills: "Python, data analysis, ML knowledge",
                  value: "Portfolio builder. Winners recruited by top companies.",
                  india: "Strong participation from India. Indian winners actively recruited."
                },
                {
                  name: "Google Code Jam & Cloud Challenge",
                  prize: "$5,000-$50,000",
                  difficulty: "Intermediate to Advanced",
                  time: "Various throughout year",
                  skills: "Competitive programming or AI/ML",
                  value: "Recognition from Google. Great for college apps.",
                  india: "Open to all countries globally."
                },
                {
                  name: "Microsoft Imagine Cup",
                  prize: "$100,000+ total pool + travel to finals",
                  difficulty: "All levels",
                  time: "Annual competition",
                  skills: "Team of 2-3, varies by track",
                  value: "Global recognition. Team-based. Real-world problem solving.",
                  india: "Actively recruits from India. Indian teams regularly in finals."
                },
                {
                  name: "Smart India Hackathon",
                  prize: "₹50,000 - 10 lakhs",
                  difficulty: "All levels",
                  time: "Weekend + follow-ups",
                  skills: "Varies",
                  value: "Government-run, prestigious recognition in India.",
                  india: "Made for Indian students. Perfect for your profile."
                }
              ].map((comp, i) => (
                <div key={i} className="bg-slate-800/60 border border-pink-500/30 rounded-lg p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-pink-300 font-bold text-base sm:text-lg">{comp.name}</h3>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-sm sm:text-base">{comp.prize}</div>
                      <div className="text-xs text-gray-400">prize pool</div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3 text-sm">
                    <div className="text-gray-300"><span className="text-cyan-400 font-bold">Difficulty:</span> {comp.difficulty}</div>
                    <div className="text-gray-300"><span className="text-cyan-400 font-bold">Time:</span> {comp.time}</div>
                    <div className="text-gray-300"><span className="text-cyan-400 font-bold">Skills:</span> {comp.skills}</div>
                    <div className="text-gray-300"><span className="text-cyan-400 font-bold">India:</span> {comp.india}</div>
                  </div>
                  <p className="text-gray-300 text-sm border-t border-slate-700 pt-3">
                    <span className="text-purple-300 font-bold">Why:</span> {comp.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: 3-Month Action Plan */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                🎯 Realistic 3-Month Path to Real Experience
              </span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  month: "Month 1",
                  title: "Start Earning Money",
                  actions: [
                    "Apply to Appen, Scale, Outlier",
                    "Complete application (2-3 weeks)",
                    "Start working (flexible hours)"
                  ],
                  outcome: "Expected: $200-$500 for 10 hrs/week",
                  why: "Low barrier to entry. Learn how AI works from inside. Start earning immediately."
                },
                {
                  month: "Month 2",
                  title: "Build Kaggle Portfolio",
                  actions: [
                    "Complete Kaggle tutorial (3 hours)",
                    "Enter a 'Getting Started' competition",
                    "Submit your first solution",
                    "See how others scored better, improve"
                  ],
                  outcome: "Expected: Complete 1-2 competitions",
                  why: "Learn while earning. Build portfolio momentum. Real context from annotation work."
                },
                {
                  month: "Month 3",
                  title: "Apply to Internships & Competitions",
                  actions: [
                    "Apply to summer internships (Google, Microsoft, others)",
                    "Apply to hackathons in your city",
                    "Enter Imagine Cup or other major competitions"
                  ],
                  outcome: "Strong applications with actual experience",
                  why: "You now have work experience + portfolio. Much stronger applications."
                }
              ].map((phase, i) => (
                <div key={i} className="bg-slate-900/50 border border-green-500/30 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-b border-green-500/30 p-4 sm:p-5">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="text-green-300 font-bold text-lg">{phase.month}</h3>
                      <span className="text-cyan-300 font-bold">{phase.title}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <div className="text-purple-400 font-bold text-xs uppercase mb-2">Actions</div>
                      <ul className="space-y-1">
                        {phase.actions.map((action, j) => (
                          <li key={j} className="text-gray-300 text-sm flex gap-2">
                            <span className="text-cyan-400 flex-shrink-0">→</span>{action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-slate-700">
                      <p className="text-green-400 text-xs uppercase font-bold mb-1">Outcome</p>
                      <p className="text-gray-300 text-sm">{phase.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Stand Out in Applications */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-purple-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ⭐ How to Stand Out in Internship Applications
              </span>
            </h2>
            <div className="mb-6">
              <h3 className="text-green-300 font-bold mb-4">Your Resume Should Say:</h3>
              <div className="bg-slate-800/60 border border-green-500/30 rounded p-4 space-y-2">
                <p className="text-gray-300 text-sm flex gap-2"><span className="text-green-400">✓</span> Labeled 50,000+ data points for AI model training (Scale AI)</p>
                <p className="text-gray-300 text-sm flex gap-2"><span className="text-green-400">✓</span> Achieved top 10% accuracy on Kaggle housing prediction competition</p>
                <p className="text-gray-300 text-sm flex gap-2"><span className="text-green-400">✓</span> Built [project] that [impact]</p>
              </div>
            </div>
            <div>
              <h3 className="text-pink-300 font-bold mb-4">NOT:</h3>
              <div className="bg-slate-800/60 border border-pink-500/30 rounded p-4 space-y-2">
                <p className="text-gray-300 text-sm flex gap-2"><span className="text-pink-400">✗</span> "Interested in AI"</p>
                <p className="text-gray-300 text-sm flex gap-2"><span className="text-pink-400">✗</span> "Know Python"</p>
                <p className="text-gray-300 text-sm flex gap-2"><span className="text-pink-400">✗</span> Generic fluff</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-slate-900/60 border border-purple-500/30 rounded">
              <p className="text-gray-300 text-sm mb-3"><span className="text-cyan-300 font-bold">Your Interview Story:</span></p>
              <p className="text-gray-300 text-sm italic">
                "I started by working as a data annotator at Scale AI. That taught me how real AI systems work. I got curious about modeling, so I joined Kaggle. My first competition was humbling—bottom 50%. But I read through top solutions, understood what I missed, and placed top 10% next time. That's when I realized I needed to understand statistics better..."
              </p>
              <p className="text-cyan-300 text-xs mt-3 font-bold">That's a story with growth. That's what gets the internship.</p>
            </div>
          </div>
        </section>

        {/* Section 6: India-Specific Opportunities */}
        <section className="mb-16">
          <div className="bg-slate-800/60 border border-pink-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                🇮🇳 India-Specific Opportunities
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  category: "Internship Platforms",
                  items: ["Internshala.com - India's largest platform (search 'AI internship')", "Unstop.com - Competitions and internships for India", "HackerEarth - Competitions and talent recruitment"],
                  icon: "💼"
                },
                {
                  category: "Indian Competitions",
                  items: ["Smart India Hackathon - Government-run, very prestigious", "TechGenius - India's leading student tech competition", "Coding Ninjas Competitions - Regular AI/ML competitions with prizes"],
                  icon: "🏆"
                },
                {
                  category: "Indian Companies Hiring Remote",
                  items: ["Flipkart, Amazon, Wipro - Formal internship programs", "Byju's, Unacademy - Ed-tech companies with student programs", "Startups via AngelList - Often pay better and more flexible"],
                  icon: "🚀"
                }
              ].map((section, i) => (
                <div key={i} className="bg-slate-900/50 border border-pink-500/30 rounded p-5">
                  <h3 className="text-pink-300 font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">{section.icon}</span>{section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-gray-300 text-sm flex gap-2">
                        <span className="text-pink-400 flex-shrink-0">→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Earnings Potential */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-green-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                💰 Realistic Earnings This Quarter
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { activity: "Data annotation work", earn: "$200-$600", note: "4 hrs/week, 3 months" },
                { activity: "Hackathon prize", earn: "$0-$50,000", note: "If you win" },
                { activity: "Kaggle competition prize", earn: "$0-$10,000", note: "If you place" },
                { activity: "Summer internship", earn: "$3,000-$8,000", note: "3-month paid internship" }
              ].map((earning, i) => (
                <div key={i} className="bg-slate-800/60 border border-green-500/30 rounded p-5">
                  <p className="text-gray-300 text-sm mb-2">{earning.activity}</p>
                  <div className="text-green-400 font-bold text-lg">{earning.earn}</div>
                  <p className="text-gray-400 text-xs">{earning.note}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-900/60 border border-green-500/30 rounded text-center">
              <p className="text-gray-300 text-sm">
                Even if you don't win competitions, you're building real income doing meaningful work. <span className="text-green-300 font-bold">Your resume becomes competitive for actual AI jobs and college admissions.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Red Flags to Avoid */}
        <section className="mb-16">
          <div className="bg-slate-900/40 border border-pink-500/40 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                🚩 Red Flags to Avoid
              </span>
            </h2>
            <div className="space-y-3">
              {[
                { flag: "Unpaid internships", why: "Don't take them. Your time has value." },
                { flag: "Scams", why: "If it sounds too good to be true, it is. Legitimate companies don't ask upfront payments." },
                { flag: "Fluff competitions", why: "Some exist just to sell courses. Stick with Kaggle, Google, Microsoft, established hackathons." },
                { flag: "Burnout", why: "You're also studying for boards or competitive exams. Pick 2-3 things, not 10." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/60 border border-pink-500/30 rounded p-4 flex gap-3">
                  <span className="text-2xl flex-shrink-0">⚠️</span>
                  <div>
                    <h4 className="text-pink-300 font-bold text-sm">{item.flag}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/40 rounded-lg p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ⚡ Your Action Plan This Week
            </h2>
            <div className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto space-y-3">
              <p><span className="text-cyan-300 font-bold">Step 1 (2 hours):</span> Research which company (Appen, Scale, Outlier) operates in your region. Create an account.</p>
              <p><span className="text-cyan-300 font-bold">Step 2 (1 hour):</span> Set up a Kaggle account. Complete one "Getting Started" tutorial.</p>
              <p><span className="text-cyan-300 font-bold">Step 3 (30 min):</span> Search for hackathons in your city happening in next 3 months. Add to calendar.</p>
              <p><span className="text-cyan-300 font-bold">Step 4 (Optional, 1 hour):</span> Look at summer internship deadlines. Mark them on calendar.</p>
            </div>
            <p className="text-purple-300 font-bold text-base">
              You don't need to wait for college to start building an AI career. Start this month.
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
                desc: "Turn your experiences into a portfolio that impresses colleges.",
                link: "/ai-for-teens/explore/infographic-ai-portfolio"
              },
              {
                title: "AI for College Essays",
                desc: "Use AI ethically in your applications without getting caught.",
                link: "/ai-for-teens/explore/infographic-college-apps"
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
            Most students think they can't get real AI experience until college. You know better. Help others start earning and learning now.
          </p>
          <ShareButton variant="teens" />
        </section>
      </div>
    </div>
  );
}
