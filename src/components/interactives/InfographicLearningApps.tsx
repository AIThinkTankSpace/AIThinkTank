"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicLearningApps() {
  const [activeTab, setActiveTab] = useState<"all" | "free" | "paid">("all");

  const apps = [
    {
      name: "Khan Academy + Khanmigo",
      icon: "📊",
      subjects: "All subjects (K-12)",
      cost: "free",
      aiDifference:
        "Explains concepts without giving direct answers using proven teaching methods",
      parentFeatures: [
        "Progress dashboard",
        "Screen time reports",
        "Parental controls",
      ],
      ageRange: "5-18",
      verdict: "Best overall for academic subjects",
    },
    {
      name: "Duolingo & Duolingo Max",
      icon: "🗣️",
      subjects: "Language learning (38+ languages)",
      cost: "free",
      aiDifference:
        "Gamified lessons with Max tier adding AI conversations and pronunciation feedback",
      parentFeatures: [
        "Streak & lesson tracking",
        "Daily goal setting",
        "Progress by skill",
      ],
      ageRange: "5-18",
      verdict: "Best for language learning & engagement",
    },
    {
      name: "IXL Learning",
      icon: "✏️",
      subjects: "Math, English, Science (K-12)",
      cost: "paid",
      aiDifference:
        "AI recommends skills to focus on next based on real gaps, not random practice",
      parentFeatures: [
        "Detailed skill diagnostics",
        "Personalized learning paths",
        "Real-time progress reports",
      ],
      ageRange: "K-12",
      verdict: "Best for skill-building and test prep",
    },
    {
      name: "CodaKid",
      icon: "💻",
      subjects: "Coding (Python, JavaScript)",
      cost: "paid",
      aiDifference:
        "AI tutors help debug code and answer questions during project-based learning",
      parentFeatures: [
        "Project tracking",
        "Age-appropriate difficulty",
        "Code project reports",
      ],
      ageRange: "7-16",
      verdict: "Best for young coders with interactive support",
    },
    {
      name: "Squirrel AI",
      icon: "🐿️",
      subjects: "Math & Chinese (K-12)",
      cost: "paid",
      aiDifference:
        "Deep personalization—knows exactly which fraction concepts your child understands",
      parentFeatures: [
        "Detailed diagnostics",
        "Daily personalized practice",
        "Progress tracking",
      ],
      ageRange: "K-12",
      verdict: "Best for comprehensive math skill-building",
    },
    {
      name: "Bright & Co.",
      icon: "⭐",
      subjects: "Reading, Math, Social-Emotional (Ages 4-8)",
      cost: "free",
      aiDifference:
        "Real-time adaptation—breaks down concepts if struggling, moves up if bored",
      parentFeatures: [
        "Parent dashboard",
        "Co-activity recommendations",
        "Reading level tracking",
      ],
      ageRange: "4-8",
      verdict: "Best for early learners & foundations",
    },
  ];

  const filteredApps = apps.filter((app) => {
    if (activeTab === "all") return true;
    return app.cost === activeTab;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F0] to-[#F5E6FF] pb-12">
      {/* Breadcrumb */}
      <div className="bg-white/50 backdrop-blur-sm sticky top-0 z-40 border-b border-[#20C997]/20">
        <div className="max-w-5xl mx-auto px-4 py-3 text-sm text-[#2D1B69]">
          <Link href="/" className="hover:text-[#FF6B6B]">
            Home
          </Link>
          {" > "}
          <Link href="/ai-for-kids" className="hover:text-[#FF6B6B]">
            AI for Kids
          </Link>
          {" > "}
          <span className="font-semibold">Learning Apps</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1B69] mb-4">
            📱 Best AI Learning Apps for Kids
          </h1>
          <p className="text-lg text-[#2D1B69]/70 mb-6">
            Personalized learning that adapts to your child
          </p>
          <ShareButton variant="kids" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {/* The Promise */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#20C997]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <div className="flex items-start gap-4">
            <span className="text-5xl">🎯</span>
            <div>
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-3">
                What Makes AI Learning Apps Different
              </h2>
              <p className="text-[#2D1B69]/80 mb-4">
                Traditional apps deliver the same content to every student. AI learning apps adapt to <strong>your</strong> child.
              </p>
              <div className="bg-white rounded-2xl p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xl">✨</span>
                  <p className="text-[#2D1B69]/80">What your child understands</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">🎯</span>
                  <p className="text-[#2D1B69]/80">Where they struggle</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">🧠</span>
                  <p className="text-[#2D1B69]/80">What teaching style works best</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">⚡</span>
                  <p className="text-[#2D1B69]/80">When they're about to give up</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">🔄</span>
                  <p className="text-[#2D1B69]/80">What to teach next to keep engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 text-center">
            📈 The Research Shows
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#FF6B6B]">
              <p className="text-4xl font-bold text-[#FF6B6B] mb-2">0.3-0.5</p>
              <p className="font-semibold text-[#2D1B69] mb-2">Grade Levels Higher</p>
              <p className="text-sm text-[#2D1B69]/70">
                Kids using adaptive learning score higher than traditional instruction
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#FFA94D]">
              <p className="text-4xl font-bold text-[#FFA94D] mb-2">100%</p>
              <p className="font-semibold text-[#2D1B69] mb-2">Personalized</p>
              <p className="text-sm text-[#2D1B69]/70">
                Each app adapts uniquely to your individual child
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#20C997]">
              <p className="text-4xl font-bold text-[#20C997] mb-2">4+ Weeks</p>
              <p className="font-semibold text-[#2D1B69] mb-2">To See Results</p>
              <p className="text-sm text-[#2D1B69]/70">
                Consistent use starts showing real improvements
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 justify-center flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === "all"
                ? "bg-[#FF6B6B] text-white shadow-lg"
                : "bg-white text-[#2D1B69] border-2 border-[#FF6B6B]/30 hover:border-[#FF6B6B]"
            }`}
          >
            All Apps
          </button>
          <button
            onClick={() => setActiveTab("free")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === "free"
                ? "bg-[#20C997] text-white shadow-lg"
                : "bg-white text-[#2D1B69] border-2 border-[#20C997]/30 hover:border-[#20C997]"
            }`}
          >
            Free Apps
          </button>
          <button
            onClick={() => setActiveTab("paid")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === "paid"
                ? "bg-[#FFA94D] text-white shadow-lg"
                : "bg-white text-[#2D1B69] border-2 border-[#FFA94D]/30 hover:border-[#FFA94D]"
            }`}
          >
            Paid Apps
          </button>
        </div>

        {/* Apps Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredApps.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border-2 border-[#20C997]/20 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{app.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2D1B69]">{app.name}</h3>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <span className="inline-block bg-[#C3FAE8]/40 text-[#2D1B69] text-xs font-semibold px-3 py-1 rounded-full">
                      {app.subjects}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* AI Difference */}
                <div className="bg-[#E8D5F5]/20 rounded-2xl p-4 border-l-4 border-[#E8D5F5]">
                  <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                    The AI Difference:
                  </p>
                  <p className="text-[#2D1B69]/80 text-sm">{app.aiDifference}</p>
                </div>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FFA94D]/10 rounded-xl p-3">
                    <p className="text-xs text-[#2D1B69]/60 font-semibold">
                      Cost
                    </p>
                    <p className="text-sm font-bold text-[#2D1B69]">
                      {app.cost === "free" ? "🎉 Free" : "💳 Paid"}
                    </p>
                  </div>
                  <div className="bg-[#20C997]/10 rounded-xl p-3">
                    <p className="text-xs text-[#2D1B69]/60 font-semibold">
                      Ages
                    </p>
                    <p className="text-sm font-bold text-[#2D1B69]">
                      {app.ageRange}
                    </p>
                  </div>
                </div>

                {/* Parent Features */}
                <div>
                  <p className="font-semibold text-[#2D1B69] text-sm mb-2">
                    👨‍👩‍👧 Parent Dashboard:
                  </p>
                  <ul className="space-y-1">
                    {app.parentFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#2D1B69]/80 flex items-center gap-2"
                      >
                        <span className="text-[#20C997]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verdict */}
                <div className="bg-[#20C997]/20 rounded-2xl p-3 border-l-4 border-[#20C997]">
                  <p className="text-sm font-semibold text-[#2D1B69]">
                    ⭐ {app.verdict}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decision Guide */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🤔</span> Which App is Right for Your Child?
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF6B6B]">
              <p className="font-bold text-[#2D1B69] mb-3">
                🎓 What's your child's biggest need?
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">All subjects</p>
                    <p className="text-[#2D1B69]/70">Khan Academy</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Languages</p>
                    <p className="text-[#2D1B69]/70">Duolingo</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Coding</p>
                    <p className="text-[#2D1B69]/70">CodaKid</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Test prep</p>
                    <p className="text-[#2D1B69]/70">IXL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FFA94D]">
              <p className="font-bold text-[#2D1B69] mb-3">
                🧠 What's their learning style?
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Games & fun first</p>
                    <p className="text-[#2D1B69]/70">Duolingo, Bright & Co.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Serious learner</p>
                    <p className="text-[#2D1B69]/70">Khan Academy, IXL</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Project-based</p>
                    <p className="text-[#2D1B69]/70">CodaKid</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Young learner</p>
                    <p className="text-[#2D1B69]/70">Bright & Co.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#20C997]">
              <p className="font-bold text-[#2D1B69] mb-3">
                💰 What's your budget?
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Tight budget</p>
                    <p className="text-[#2D1B69]/70">Khan Academy, Duolingo</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>→</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">Willing to invest</p>
                    <p className="text-[#2D1B69]/70">IXL, CodaKid, Squirrel AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Get Results */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#E8D5F5]/20 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🚀</span> How to Actually Get Results
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-[#FF6B6B]">Week 1</span>
                <div className="flex-1">
                  <h3 className="font-bold text-[#2D1B69] mb-2">
                    Set Up & Assess
                  </h3>
                  <ul className="text-sm text-[#2D1B69]/80 space-y-1">
                    <li>✓ Create account and take diagnostic test</li>
                    <li>✓ Review results together with your child</li>
                    <li>✓ Understand what the app knows about their abilities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-[#FFA94D]">Week 2-3</span>
                <div className="flex-1">
                  <h3 className="font-bold text-[#2D1B69] mb-2">
                    Build the Habit
                  </h3>
                  <ul className="text-sm text-[#2D1B69]/80 space-y-1">
                    <li>✓ Set a specific daily time (right after school works)</li>
                    <li>✓ Start with 15-20 minutes</li>
                    <li>✓ Do it together the first few times</li>
                    <li>✓ Celebrate small wins</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-[#20C997]">Week 4+</span>
                <div className="flex-1">
                  <h3 className="font-bold text-[#2D1B69] mb-2">
                    Monitor & Adjust
                  </h3>
                  <ul className="text-sm text-[#2D1B69]/80 space-y-1">
                    <li>✓ Check weekly: "What are you learning?"</li>
                    <li>
                      ✓ Look at real learning, not just time spent
                    </li>
                    <li>✓ Adjust difficulty if bored or frustrated</li>
                    <li>✓ If they hate it after 3 weeks, try another app</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-[#E8D5F5]">Monthly</span>
                <div className="flex-1">
                  <h3 className="font-bold text-[#2D1B69] mb-2">
                    Review Progress
                  </h3>
                  <ul className="text-sm text-[#2D1B69]/80 space-y-1">
                    <li>✓ Check skill reports together</li>
                    <li>✓ Compare to last month's progress</li>
                    <li>✓ Celebrate improvements</li>
                    <li>✓ Adjust goals based on what's working</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Red Flags */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🚨</span> Red Flags: When an App Isn't Working
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69]">
                Your child is getting <strong>less motivated</strong> (bored or too hard)
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69]">
                <strong>No visible progress</strong> after 4-6 weeks of regular use
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69]">
                They're using the app but <strong>not actually learning</strong> (rote clicking)
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69]">
                Excessive screen time beyond what's healthy
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">⚠️</span>
              <p className="text-[#2D1B69]">
                They want to use the app <strong>obsessively</strong> (sign of unhealthy engagement)
              </p>
            </div>
          </div>
        </div>

        {/* Smart Combinations */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#C3FAE8]/20 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span> Smart App Combinations
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#20C997]">
              <p className="font-bold text-[#2D1B69] mb-3">
                📚 For Comprehensive Learning
              </p>
              <p className="text-[#2D1B69]/80 mb-3">
                Khan Academy (core academics) + Duolingo (language) + CodaKid (coding)
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                💡 Suggested: 30 min Khan, 10 min Duolingo, 1x per week CodaKid
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#FF6B6B]">
              <p className="font-bold text-[#2D1B69] mb-3">
                🆘 For Struggling Learners
              </p>
              <p className="text-[#2D1B69]/80 mb-3">
                IXL (identify gaps) + Khan Academy (explain) + practice worksheets (reinforce)
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                💡 This combo catches problems before they snowball
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border-t-4 border-[#FFA94D]">
              <p className="font-bold text-[#2D1B69] mb-3">
                ✨ For Well-Rounded Learners
              </p>
              <p className="text-[#2D1B69]/80 mb-3">
                Duolingo (fun engagement) + light Khan (for gaps) + CodaKid (if interested)
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                💡 Keeps learning engaging while addressing needs
              </p>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/40 to-[#C3FAE8]/40 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/40">
          <div className="flex items-start gap-4">
            <span className="text-5xl">💡</span>
            <div>
              <h3 className="text-xl font-bold text-[#2D1B69] mb-3">
                Did You Know?
              </h3>
              <p className="text-[#2D1B69]/80 mb-3">
                Duolingo is so engaging that kids often do <strong>MORE than recommended</strong> screen time voluntarily. The app literally gamifies learning so well that you might need to set limits!
              </p>
              <p className="text-[#2D1B69]/80 font-semibold">
                The key: monitor engagement and set screen time boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Action Steps */}
        <div className="bg-gradient-to-br from-[#FFA94D]/10 to-[#FF6B6B]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">📋</span> Start This Week
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">1</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Pick one app that matches your child's needs
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Use the decision guide above to choose
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">2</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Download and create an account
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Set up parental controls if available
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">3</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Try it together for 15 minutes
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  See how your child responds
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">4</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Track progress for a month
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Then adjust based on what works
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gradient-to-br from-[#20C997]/10 to-[#E8D5F5]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/20">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">
            🔗 Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Link
              href="/ai-for-kids/homework-help"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                📚 AI Homework Help for Elementary Students
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                Learn how to use AI as a tutor, not a shortcut
              </p>
            </Link>
            <Link
              href="/ai-for-kids/coding-for-kids"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                💻 How Kids Can Use AI to Learn Coding
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                AI tutors for programming at every level
              </p>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#20C997]">
            <p className="font-semibold text-[#2D1B69] mb-3">
              💬 Share your favorite app with other parents
            </p>
            <ShareButton variant="kids" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FFA94D] rounded-3xl p-8 text-center text-white">
          <p className="text-lg font-bold mb-2">Ready to transform your child's learning?</p>
          <p className="text-base opacity-95 mb-4">
            Start with a free app and watch adaptation in action.
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
