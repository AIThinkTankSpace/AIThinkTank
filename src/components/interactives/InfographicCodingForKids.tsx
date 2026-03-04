"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export default function InfographicCodingForKids() {
  const [expandedAge, setExpandedAge] = useState<string | null>(null);

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
          <span className="font-semibold">Coding for Kids</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1B69] mb-4">
            💻 AI + Coding for Kids
          </h1>
          <p className="text-lg text-[#2D1B69]/70 mb-6">
            From zero to creating programs with AI as your patient tutor
          </p>
          <ShareButton variant="kids" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {/* Why AI for Coding */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#20C997]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/30">
          <div className="flex items-start gap-4">
            <span className="text-5xl">🎯</span>
            <div>
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-3">
                Why AI is Perfect for Learning to Code
              </h2>
              <p className="text-[#2D1B69]/80 mb-4">
                Coding has a unique challenge: kids hit errors constantly. They need patient explanations FAST—which is exactly what AI excels at.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👨‍💼</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">
                      Traditional Class: 1 teacher, 20 students
                    </p>
                    <p className="text-sm text-[#2D1B69]/70">
                      Kids wait for help, get frustrated
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="font-semibold text-[#2D1B69]">
                      AI Tutor: Infinite patience, customized explanations
                    </p>
                    <p className="text-sm text-[#2D1B69]/70">
                      Available 24/7, adapts to learning style
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Learning Path */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">📚</span> The AI Coding Learning Path
          </h2>

          <div className="space-y-4">
            {/* Stage 1 */}
            <div
              className="bg-white rounded-3xl p-6 border-l-4 border-[#FFA94D] cursor-pointer hover:shadow-lg transition-all"
              onClick={() =>
                setExpandedAge(expandedAge === "stage1" ? null : "stage1")
              }
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">1️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D1B69]">
                      Stage 1: Visual/Block-Based Coding
                    </h3>
                    <p className="text-sm text-[#2D1B69]/70">Ages 7-11</p>
                  </div>
                </div>
                <span className="text-2xl">
                  {expandedAge === "stage1" ? "▼" : "▶"}
                </span>
              </div>

              {expandedAge === "stage1" && (
                <div className="space-y-4 bg-[#FFA94D]/10 rounded-2xl p-4">
                  <div>
                    <p className="font-semibold text-[#2D1B69] mb-2">
                      Why start here?
                    </p>
                    <p className="text-[#2D1B69]/80">
                      Kids see coding as building blocks before handling text. Visual thinking comes first.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border-l-4 border-[#FFA94D]">
                    <p className="font-bold text-[#2D1B69] mb-3">Best Tool: Scratch</p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold text-[#2D1B69]">
                          🎨 What it is:
                        </span>
                        <span className="text-[#2D1B69]/80 ml-2">
                          Free, block-based platform from MIT
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold text-[#2D1B69]">
                          💻 How it works:
                        </span>
                        <span className="text-[#2D1B69]/80 ml-2">
                          Drag blocks to create programs (no text)
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold text-[#2D1B69]">
                          🤖 AI helps:
                        </span>
                        <span className="text-[#2D1B69]/80 ml-2">
                          Ask ChatGPT specific Scratch block questions
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FFA94D]/20 rounded-xl p-4">
                    <p className="font-semibold text-[#2D1B69] mb-3">
                      📝 Example: Your child is stuck
                    </p>
                    <div className="space-y-2 text-sm text-[#2D1B69]/80">
                      <p>
                        <span className="font-bold">Kid:</span> "My game doesn't work"
                      </p>
                      <p>
                        <span className="font-bold">You:</span> "What should happen when you click the green flag?"
                      </p>
                      <p>
                        <span className="font-bold">Kid:</span> "The character should move right"
                      </p>
                      <p>
                        <span className="font-bold">You:</span> "Ask ChatGPT: 'How do I make a sprite move to the right when I press the right arrow key in Scratch?' Then try what it says"
                      </p>
                      <p className="text-[#2D1B69] font-semibold mt-2">
                        ✨ This teaches debugging, not just following tutorials
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stage 2 */}
            <div
              className="bg-white rounded-3xl p-6 border-l-4 border-[#20C997] cursor-pointer hover:shadow-lg transition-all"
              onClick={() =>
                setExpandedAge(expandedAge === "stage2" ? null : "stage2")
              }
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">2️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D1B69]">
                      Stage 2: Learning Real Code (Text-Based)
                    </h3>
                    <p className="text-sm text-[#2D1B69]/70">Ages 10-14</p>
                  </div>
                </div>
                <span className="text-2xl">
                  {expandedAge === "stage2" ? "▼" : "▶"}
                </span>
              </div>

              {expandedAge === "stage2" && (
                <div className="space-y-4 bg-[#20C997]/10 rounded-2xl p-4">
                  <div>
                    <p className="font-semibold text-[#2D1B69] mb-2">
                      Best Language: Python
                    </p>
                    <p className="text-[#2D1B69]/80 text-sm">
                      Readable syntax (like English), used in AI/data science, tons of AI help available
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border-l-4 border-[#20C997] space-y-3">
                    <div>
                      <p className="font-bold text-[#2D1B69] mb-2">
                        🛠️ Best Tools
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-[#2D1B69]/80">
                          <span className="font-semibold">ChatGPT + Python:</span> Free tier perfect for learning. Ask questions, get examples.
                        </p>
                        <p className="text-[#2D1B69]/80">
                          <span className="font-semibold">Replit:</span> Free online coding environment. No installation needed.
                        </p>
                        <p className="text-[#2D1B69]/80">
                          <span className="font-semibold">GitHub Copilot:</span> AI autocompletes code. Free for students 13+.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border-t-4 border-[#20C997]">
                    <p className="font-bold text-[#2D1B69] mb-2">
                      💬 How AI helps at this stage
                    </p>
                    <div className="space-y-1 text-sm text-[#2D1B69]/80">
                      <p>
                        <span className="text-[#20C997]">→</span> Syntax questions: "How do I write an 'if' statement in Python?"
                      </p>
                      <p>
                        <span className="text-[#20C997]">→</span> Debugging: "I got this error: `KeyError: 'name'`. What does it mean?"
                      </p>
                      <p>
                        <span className="text-[#20C997]">→</span> Logic help: "How do I loop through a list and print only even numbers?"
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stage 3 */}
            <div
              className="bg-white rounded-3xl p-6 border-l-4 border-[#FF6B6B] cursor-pointer hover:shadow-lg transition-all"
              onClick={() =>
                setExpandedAge(expandedAge === "stage3" ? null : "stage3")
              }
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">3️⃣</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D1B69]">
                      Stage 3: Building Real Projects
                    </h3>
                    <p className="text-sm text-[#2D1B69]/70">Ages 12+</p>
                  </div>
                </div>
                <span className="text-2xl">
                  {expandedAge === "stage3" ? "▼" : "▶"}
                </span>
              </div>

              {expandedAge === "stage3" && (
                <div className="space-y-4 bg-[#FF6B6B]/10 rounded-2xl p-4">
                  <p className="text-[#2D1B69]/80 text-sm mb-3">
                    Once kids can write basic code, they want to build something real. This is where they get genuinely excited.
                  </p>

                  <div className="bg-white rounded-xl p-4 border-l-4 border-[#FF6B6B]">
                    <p className="font-bold text-[#2D1B69] mb-2">
                      🎮 Project Ideas
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p className="text-[#2D1B69]/80">
                        <span className="text-[#FF6B6B]">→</span> Simple games (rock-paper-scissors)
                      </p>
                      <p className="text-[#2D1B69]/80">
                        <span className="text-[#FF6B6B]">→</span> Hangman or tic-tac-toe
                      </p>
                      <p className="text-[#2D1B69]/80">
                        <span className="text-[#FF6B6B]">→</span> Password generator
                      </p>
                      <p className="text-[#2D1B69]/80">
                        <span className="text-[#FF6B6B]">→</span> To-do list app
                      </p>
                      <p className="text-[#2D1B69]/80">
                        <span className="text-[#FF6B6B]">→</span> Weather checker
                      </p>
                      <p className="text-[#2D1B69]/80">
                        <span className="text-[#FF6B6B]">→</span> Folder organizer
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FF6B6B]/20 rounded-xl p-4">
                    <p className="font-bold text-[#2D1B69] mb-3">
                      📝 Example: Number Guessing Game
                    </p>
                    <div className="space-y-2 text-sm text-[#2D1B69]/80">
                      <p>
                        <span className="font-semibold text-[#2D1B69]">1.</span> Kid asks ChatGPT: "Walk me through making a guessing game in Python"
                      </p>
                      <p>
                        <span className="font-semibold text-[#2D1B69]">2.</span> ChatGPT outlines: import random → pick number → loop for guessing → check answer → give hints
                      </p>
                      <p>
                        <span className="font-semibold text-[#2D1B69]">3.</span> Kid codes each part (asking ChatGPT for syntax help)
                      </p>
                      <p>
                        <span className="font-semibold text-[#2D1B69]">4.</span> Test and debug together
                      </p>
                      <p className="text-[#2D1B69] font-semibold">
                        ✨ Result: Their code, real learning
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Good vs Bad AI Use */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#20C997]/10 rounded-3xl p-6 border-2 border-[#20C997]/30">
            <h3 className="text-xl font-bold text-[#2D1B69] mb-4 flex items-center gap-2">
              <span className="text-3xl">✅</span> Good Uses of AI
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-3 text-sm">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  💡 Explain a concept
                </p>
                <p className="text-[#2D1B69]/70">
                  "What does a for loop do?"
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  🔍 Show how something works
                </p>
                <p className="text-[#2D1B69]/70">
                  "How do I create a list in Python?"
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  🐛 Help debug
                </p>
                <p className="text-[#2D1B69]/70">
                  "Why is my code throwing an error?"
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  ✨ Suggest improvements
                </p>
                <p className="text-[#2D1B69]/70">
                  "How could I make this cleaner?"
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  📖 Teach syntax
                </p>
                <p className="text-[#2D1B69]/70">
                  "Show me an example of a function"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 rounded-3xl p-6 border-2 border-[#FF6B6B]/30">
            <h3 className="text-xl font-bold text-[#2D1B69] mb-4 flex items-center gap-2">
              <span className="text-3xl">❌</span> Bad Uses of AI
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-3 text-sm border-l-2 border-[#FF6B6B]">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  Don't ask: "Write me a program"
                </p>
                <p className="text-[#2D1B69]/70">
                  They need to write it themselves
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm border-l-2 border-[#FF6B6B]">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  Don't copy code blindly
                </p>
                <p className="text-[#2D1B69]/70">
                  They must understand each line
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm border-l-2 border-[#FF6B6B]">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  Don't skip thinking
                </p>
                <p className="text-[#2D1B69]/70">
                  AI is a tool, not a replacement
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm border-l-2 border-[#FF6B6B]">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  Don't have AI write homework
                </p>
                <p className="text-[#2D1B69]/70">
                  The learning IS the point
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm border-l-2 border-[#FF6B6B]">
                <p className="font-semibold text-[#2D1B69] mb-1">
                  Don't submit AI code as their own
                </p>
                <p className="text-[#2D1B69]/70">
                  Honesty is important
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Keeping it Honest */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🤝</span> Keeping It Honest: Test Understanding
          </h2>

          <div className="bg-white rounded-2xl p-6 space-y-4">
            <p className="text-[#2D1B69]/80">
              The key question to ask your child:
            </p>
            <div className="bg-[#E8D5F5]/20 rounded-xl p-4 border-l-4 border-[#E8D5F5]">
              <p className="font-bold text-[#2D1B69] mb-2">
                "Can you explain what that line of code does?"
              </p>
              <p className="text-[#2D1B69]/80 text-sm">
                If they can't, they don't understand it yet. Have them ask ChatGPT to explain more simply.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-[#20C997]/10 rounded-xl p-4">
                <p className="font-bold text-[#2D1B69] mb-2">✅ Real Learning:</p>
                <p className="text-[#2D1B69]/80">
                  Kid writes code → Gets help from AI → Understands how it works → Can explain it
                </p>
              </div>
              <div className="bg-[#FF6B6B]/10 rounded-xl p-4">
                <p className="font-bold text-[#2D1B69] mb-2">❌ Not Learning:</p>
                <p className="text-[#2D1B69]/80">
                  AI writes code → Kid copies → Can't explain → No learning happened
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Learn Coding */}
        <div className="bg-gradient-to-br from-[#C3FAE8]/20 to-[#E8D5F5]/10 rounded-3xl p-6 md:p-8 border-2 border-[#20C997]/20">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span> Why Should Kids Learn to Code?
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 bg-white rounded-2xl p-5">
              <span className="text-3xl">🔨</span>
              <div>
                <p className="font-bold text-[#2D1B69] mb-1">
                  Coding is building things
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  You create something from nothing—just your brain and code
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-5">
              <span className="text-3xl">🌍</span>
              <div>
                <p className="font-bold text-[#2D1B69] mb-1">
                  Every app, game, and website is code
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  Understanding this makes you understand the modern world
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-5">
              <span className="text-3xl">🧠</span>
              <div>
                <p className="font-bold text-[#2D1B69] mb-1">
                  It teaches problem-solving
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  Break big problems into small steps, test, debug, improve
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-5">
              <span className="text-3xl">💼</span>
              <div>
                <p className="font-bold text-[#2D1B69] mb-1">
                  Coding skills are in massive demand
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  They pay well and offer great careers
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-5">
              <span className="text-3xl">⚡</span>
              <div>
                <p className="font-bold text-[#2D1B69] mb-1">
                  It teaches persistence
                </p>
                <p className="text-[#2D1B69]/80 text-sm">
                  Errors are normal. Keep trying. That's how you learn.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#E8D5F5]/20 rounded-2xl p-5 border-l-4 border-[#E8D5F5]">
            <p className="font-bold text-[#2D1B69] mb-2">
              🚀 Don't frame it as "you need this for college"
            </p>
            <p className="text-[#2D1B69]/80">
              Frame it as: "This is a superpower. You can make things that don't exist yet."
            </p>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-gradient-to-br from-[#FFA94D]/10 to-[#FF6B6B]/10 rounded-3xl p-6 md:p-8 border-2 border-[#FF6B6B]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">🚀</span> Quick Start This Week
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">1</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Visit Scratch.mit.edu
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Sign up for free account for your child
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">2</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Do a tutorial together (10 minutes)
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Scratch has built-in tutorials—no AI needed yet
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">3</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Let them create (15 minutes free exploration)
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Celebrate even tiny moving sprites
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
              <span className="font-bold text-[#FF6B6B] text-lg">4</span>
              <div>
                <p className="font-semibold text-[#2D1B69]">
                  Next week: introduce ChatGPT if they want more
                </p>
                <p className="text-sm text-[#2D1B69]/70">
                  Ask ChatGPT together how to help with their next idea
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Questions */}
        <div className="bg-gradient-to-br from-[#E8D5F5]/30 to-[#FFA94D]/10 rounded-3xl p-6 md:p-8 border-2 border-[#E8D5F5]/30">
          <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-3">
            <span className="text-4xl">❓</span> Common Parent Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5">
              <p className="font-bold text-[#2D1B69] mb-2">
                "Do they need to be good at math?"
              </p>
              <p className="text-[#2D1B69]/80 text-sm">
                Not especially. Logic matters more than math. Early coding (ages 7-12) barely uses math. Later (machine learning, graphics) uses more, but kids learn as needed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5">
              <p className="font-bold text-[#2D1B69] mb-2">
                "Will AI just do the coding for them?"
              </p>
              <p className="text-[#2D1B69]/80 text-sm">
                Only if you let it. Treat AI like a tutor, not a homework robot. The code must be theirs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5">
              <p className="font-bold text-[#2D1B69] mb-2">
                "How long until they can code real programs?"
              </p>
              <div className="space-y-1 text-sm text-[#2D1B69]/80">
                <p>
                  <span className="font-semibold">Age 8:</span> Block-based programs, simple logic
                </p>
                <p>
                  <span className="font-semibold">Age 11:</span> Text-based code, simple utilities
                </p>
                <p>
                  <span className="font-semibold">Age 13:</span> Real games, tools, actual projects
                </p>
                <p>
                  <span className="font-semibold">Age 15+:</span> Complex applications, algorithms
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5">
              <p className="font-bold text-[#2D1B69] mb-2">
                "What if they get discouraged?"
              </p>
              <p className="text-[#2D1B69]/80 text-sm">
                Coding involves lots of errors. That's normal. Help them see errors as information, not failure. "The error message is the computer telling you what's wrong. Let's ask ChatGPT what it means."
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
                GitHub Copilot (an AI that autocompletes code) is available <strong>free for students ages 13+</strong> through the GitHub Education Pack.
              </p>
              <p className="text-[#2D1B69]/80 font-semibold">
                If your teen is serious about coding, this is a game-changer. It teaches them to recognize patterns and write cleaner code.
              </p>
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
                Using AI as a tutor, not a shortcut
              </p>
            </Link>
            <Link
              href="/ai-for-kids/learning-apps"
              className="block bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:border-[#20C997] border-2 border-transparent"
            >
              <p className="font-semibold text-[#2D1B69] mb-2">
                📱 Best AI Learning Apps for Kids 2026
              </p>
              <p className="text-sm text-[#2D1B69]/70">
                Personalized learning with Khan Academy and more
              </p>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border-t-4 border-[#20C997]">
            <p className="font-semibold text-[#2D1B69] mb-3">
              💬 Share this guide with parents interested in tech
            </p>
            <ShareButton variant="kids" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FFA94D] rounded-3xl p-8 text-center text-white">
          <p className="text-lg font-bold mb-2">
            Ready to unlock your child's coding superpower?
          </p>
          <p className="text-base opacity-95 mb-4">
            Start with Scratch today. It's free and it's perfect.
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
