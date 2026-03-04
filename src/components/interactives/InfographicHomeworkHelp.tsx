"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicHomeworkHelp() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F0] to-[#F5E6FF] pb-12">
      {/* Breadcrumb */}
      <div className="bg-white/50 backdrop-blur-sm sticky top-0 z-40 border-b border-[#20C997]/20">
        <div className="max-w-4xl mx-auto px-4 py-3 text-sm text-[#2D1B69]">
          <Link href="/" className="hover:text-[#FF6B6B]">
            Home
          </Link>
          {" > "}
          <Link href="/ai-for-kids" className="hover:text-[#FF6B6B]">
            AI for Kids
          </Link>
          {" > "}
          <span className="font-semibold">Homework Help</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1B69] mb-4">
            📚 AI Homework Help
          </h1>
          <p className="text-lg text-[#2D1B69]/70 mb-6">
            How to use AI as a tutor, not a shortcut
          </p>
          <ShareButton variant="kids" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {/* The Problem Section */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl md:text-5xl">🤔</span>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-3">
                The Homework Challenge
              </h2>
              <p className="text-[#2D1B69]/80 mb-4">
                Homework today isn't just worksheets. It's complex problems, research projects, and open-ended thinking. As a parent, you want to help—but where's the line between helping and just giving answers?
              </p>
              <div className="bg-white rounded-2xl p-4 border-l-4 border-[#FF6B6B]">
                <p className="font-semibold text-[#2D1B69] mb-2">The Real Question:</p>
                <p className="text-[#2D1B69]/80">
                  Can AI be a tutor instead of a shortcut? YES—if you use it correctly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Good Uses */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#20C997]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">✅</span> Good Ways to Use AI
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Explaining Concepts */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "explain" ? null : "explain"
                )
              }
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">💡</span>
                <h3 className="font-bold text-[#2D1B69]">Explaining Concepts</h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80 mb-3">
                AI explains ideas in different ways until they click.
              </p>
              {expandedSection === "explain" && (
                <div className="bg-[#C3FAE8]/20 rounded-xl p-3 text-sm">
                  <p className="font-semibold text-[#2D1B69] mb-2">Example:</p>
                  <p className="text-[#2D1B69]/80 mb-3">
                    "My daughter doesn't understand fractions"
                  </p>
                  <p className="text-[#2D1B69]/80">
                    Ask ChatGPT: "Explain fractions like I'm 8 years old using pizza" ✨
                  </p>
                </div>
              )}
            </div>

            {/* Brainstorming */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "brainstorm" ? null : "brainstorm"
                )
              }
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">🧠</span>
                <h3 className="font-bold text-[#2D1B69]">Brainstorming</h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80 mb-3">
                Generate ideas and outlines for essays and projects.
              </p>
              {expandedSection === "brainstorm" && (
                <div className="bg-[#C3FAE8]/20 rounded-xl p-3 text-sm">
                  <p className="font-semibold text-[#2D1B69] mb-2">Example:</p>
                  <p className="text-[#2D1B69]/80 mb-3">
                    "I need to write about ocean animals but don't know where to start"
                  </p>
                  <p className="text-[#2D1B69]/80">
                    AI gives 3 ideas → Your child writes their own essay 📝
                  </p>
                </div>
              )}
            </div>

            {/* Checking Work */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all"
              onClick={() =>
                setExpandedSection(expandedSection === "check" ? null : "check")
              }
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">🔍</span>
                <h3 className="font-bold text-[#2D1B69]">Checking Work</h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80 mb-3">
                Verify answers and understand why something is wrong.
              </p>
              {expandedSection === "check" && (
                <div className="bg-[#C3FAE8]/20 rounded-xl p-3 text-sm">
                  <p className="font-semibold text-[#2D1B69] mb-2">Example:</p>
                  <p className="text-[#2D1B69]/80 mb-3">
                    Your child solves a math problem
                  </p>
                  <p className="text-[#2D1B69]/80">
                    Ask AI: "Is this answer correct?" If not → Try again! 💪
                  </p>
                </div>
              )}
            </div>

            {/* Practice Problems */}
            <div
              className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "practice" ? null : "practice"
                )
              }
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">🎯</span>
                <h3 className="font-bold text-[#2D1B69]">Practice Problems</h3>
              </div>
              <p className="text-sm text-[#2D1B69]/80 mb-3">
                Generate custom problems for topics your child struggles with.
              </p>
              {expandedSection === "practice" && (
                <div className="bg-[#C3FAE8]/20 rounded-xl p-3 text-sm">
                  <p className="font-semibold text-[#2D1B69] mb-2">Example:</p>
                  <p className="text-[#2D1B69]/80 mb-3">
                    "Make 5 word problems about adding fractions"
                  </p>
                  <p className="text-[#2D1B69]/80">
                    Get fresh practice without the same worksheet 📋
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bad Uses - The Red Line */}
        <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🛑</span> The Red Line: What NOT to Do
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">❌</span>
              <p className="text-[#2D1B69]">
                Writing essays or research papers <strong>for your child</strong>
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">❌</span>
              <p className="text-[#2D1B69]">
                Solving entire problem sets without explanation
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">❌</span>
              <p className="text-[#2D1B69]">
                Giving answers instead of explaining concepts
              </p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border-l-4 border-[#FF6B6B]">
              <span className="text-2xl">❌</span>
              <p className="text-[#2D1B69]">
                Doing the work your child should do to learn
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl p-5 border-2 border-[#FF6B6B]/30">
            <p className="text-[#2D1B69] font-semibold mb-2">💭 Why it matters:</p>
            <p className="text-[#2D1B69]/80">
              Homework isn't just about correct answers—it's about building knowledge and skills. If AI does the heavy lifting, your child misses the learning.
            </p>
          </div>
        </div>

        {/* Best Tools */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🛠️</span> Best AI Tools for Homework
          </h2>

          <div className="space-y-4">
            {/* Khan Academy */}
            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FFA94D]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">📊</span>
                <h3 className="font-bold text-[#2D1B69]">Khan Academy Khanmigo</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Best for:</p>
                  <p className="text-[#2D1B69]/80">
                    Math, science, history, reading
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Cost:</p>
                  <p className="text-[#2D1B69]/80">Free & Premium options</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Age range:</p>
                  <p className="text-[#2D1B69]/80">6 and up</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Key feature:</p>
                  <p className="text-[#2D1B69]/80">Guides without giving answers</p>
                </div>
              </div>
            </div>

            {/* ChatGPT */}
            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#20C997]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">💬</span>
                <h3 className="font-bold text-[#2D1B69]">ChatGPT</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Best for:</p>
                  <p className="text-[#2D1B69]/80">
                    Writing feedback, brainstorming, explaining
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Cost:</p>
                  <p className="text-[#2D1B69]/80">Free & Paid</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Age range:</p>
                  <p className="text-[#2D1B69]/80">8+ with parental oversight</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">⚠️ Important:</p>
                  <p className="text-[#2D1B69]/80">Monitor usage, set boundaries</p>
                </div>
              </div>
            </div>

            {/* Google Teachable Machine */}
            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#E8D5F5]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🤖</span>
                <h3 className="font-bold text-[#2D1B69]">Google Teachable Machine</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Best for:</p>
                  <p className="text-[#2D1B69]/80">Science projects, data models</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Cost:</p>
                  <p className="text-[#2D1B69]/80">Free</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Age range:</p>
                  <p className="text-[#2D1B69]/80">8+</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2D1B69] mb-1">Bonus:</p>
                  <p className="text-[#2D1B69]/80">Teaches AI process, not just answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parent's Role */}
        <div className="bg-gradient-to-br from-[#FFA94D]/10 to-[#FF6B6B]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FFA94D]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">👨‍👩‍👧</span> Your Role as the Homework Referee
          </h2>

          <div className="bg-white rounded-2xl p-6 mb-4">
            <p className="font-semibold text-[#2D1B69] mb-4 text-lg">
              Ask these key questions after homework:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">1️⃣</span>
                <p className="text-[#2D1B69]">
                  "What did AI help you understand?"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">2️⃣</span>
                <p className="text-[#2D1B69]">"What part did you have to figure out yourself?"</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">3️⃣</span>
                <p className="text-[#2D1B69]">
                  "Did AI do any actual homework, or just explain?"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">4️⃣</span>
                <p className="text-[#2D1B69]">
                  "What would you do without this AI tool?"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFA94D]/20 rounded-2xl p-4 border-l-4 border-[#FFA94D]">
            <p className="text-[#2D1B69] font-semibold mb-2">💡 Pro tip:</p>
            <p className="text-[#2D1B69]/80">
              These questions help both of you stay honest about whether they're <strong>learning</strong> or just getting help.
            </p>
          </div>
        </div>

        {/* 3 Rules */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#E8D5F5]/20 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">📋</span> 3 Essential Rules for AI Homework Help
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#FF6B6B]">
              <p className="text-4xl mb-3">⏰</p>
              <h3 className="font-bold text-[#2D1B69] mb-2">No AI on First Attempt</h3>
              <p className="text-sm text-[#2D1B69]/80">
                Let your child struggle for 15-20 minutes first. Struggle is where learning happens.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#FFA94D]">
              <p className="text-4xl mb-3">🔄</p>
              <h3 className="font-bold text-[#2D1B69] mb-2">AI Explains, Child Solves</h3>
              <p className="text-sm text-[#2D1B69]/80">
                AI explains → Your child solves → Child checks with AI. NOT: AI solves → Child copies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#20C997]">
              <p className="text-4xl mb-3">👨‍🏫</p>
              <h3 className="font-bold text-[#2D1B69] mb-2">Talk to the Teacher</h3>
              <p className="text-sm text-[#2D1B69]/80">
                Know your school's AI policy. Some teachers welcome it; others want independent work.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl p-5 border-2 border-[#20C997]/30">
            <p className="font-semibold text-[#2D1B69] text-center text-lg">
              ✨ The goal: Build your child's confidence and independence as a learner
            </p>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/40 to-[#C3FAE8]/40 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/40">
          <div className="flex items-start gap-4">
            <span className="text-5xl">🎓</span>
            <div>
              <h3 className="text-xl font-bold text-[#2D1B69] mb-3">
                Did You Know?
              </h3>
              <p className="text-[#2D1B69]/80 mb-3">
                Research shows kids using adaptive learning tools like Khan Academy's Khanmigo score 0.3-0.5 grade levels <strong>higher</strong> than traditional instruction.
              </p>
              <p className="text-[#2D1B69]/80 font-semibold">
                The secret? Personalized explanations that adapt to how your child learns.
              </p>
            </div>
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-gradient-to-br from-[#FFA94D]/10 to-[#FF6B6B]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🚀</span> Action Plan This Week
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">1</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Check your child's school policy on AI
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Ask the teacher directly if you're unsure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">2</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Try one AI tool together
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Spend 15 minutes exploring Khan Academy or ChatGPT on a topic your child finds tricky
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">3</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Set a homework rule together
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Decide together: "AI is for explaining, not answering." Write it down.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">4</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Check in after one week
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Is your child understanding better? Are they learning, not just getting answers?
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
              href="/ai-for-kids/best-ai-learning-apps"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                📱 Best AI Learning Apps for Kids 2026
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                Explore top-rated apps like Khan Academy, Duolingo, and more
              </p>
            </Link>
            <Link
              href="/ai-for-kids/parental-controls"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                🛡️ Parental Controls for AI Apps
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                Keep your child safe while they explore AI tools
              </p>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#20C997]">
            <p className="font-semibold text-[#2D1B69] mb-3">
              💬 Share this guide with other parents
            </p>
            <ShareButton variant="kids" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FFA94D] rounded-3xl p-8 text-center text-white">
          <p className="text-lg font-bold mb-2">Ready to use AI for learning?</p>
          <p className="text-base opacity-95 mb-4">
            Start with Khan Academy (free) or explore more apps in our guide.
          </p>
          <Link
            href="/ai-for-kids/best-ai-learning-apps"
            className="inline-block bg-white text-[#FF6B6B] font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
          >
            Explore AI Learning Apps →
          </Link>
        </div>
      </div>
    </div>
  );
}
