"use client";

import { useState } from "react";
import Link from "next/link";

type QuizType = "creative" | "detective" | "builder" | "weaver";
type QuizTypeOrNull = QuizType | null;

interface QuizState {
  currentQuestion: number;
  scores: {
    creative: number;
    detective: number;
    builder: number;
    weaver: number;
  };
  showResult: boolean;
}

const questions = [
  {
    question: "What's your favorite thing to do?",
    answers: [
      { text: "🎨 Draw and paint", type: "creative" as QuizType },
      { text: "🔍 Solve puzzles", type: "detective" as QuizType },
      { text: "🤖 Build and tinker", type: "builder" as QuizType },
      { text: "📖 Tell stories", type: "weaver" as QuizType },
    ],
  },
  {
    question: "If AI could do anything, what would you ask it to do?",
    answers: [
      { text: "🎨 Create amazing art", type: "creative" as QuizType },
      { text: "🔍 Find hidden patterns", type: "detective" as QuizType },
      { text: "🤖 Build cool robots", type: "builder" as QuizType },
      { text: "📖 Write incredible stories", type: "weaver" as QuizType },
    ],
  },
  {
    question: "What's your superpower?",
    answers: [
      { text: "🎨 Imagination", type: "creative" as QuizType },
      { text: "🔍 Curiosity", type: "detective" as QuizType },
      { text: "🤖 Problem-solving", type: "builder" as QuizType },
      { text: "📖 Communication", type: "weaver" as QuizType },
    ],
  },
  {
    question: "How do you like to learn?",
    answers: [
      { text: "🎨 By experimenting", type: "creative" as QuizType },
      { text: "🔍 By asking questions", type: "detective" as QuizType },
      { text: "🤖 By doing hands-on projects", type: "builder" as QuizType },
      { text: "📖 By reading and listening", type: "weaver" as QuizType },
    ],
  },
  {
    question: "What excites you most?",
    answers: [
      { text: "🎨 New ideas", type: "creative" as QuizType },
      { text: "🔍 Solving mysteries", type: "detective" as QuizType },
      { text: "🤖 Making things work", type: "builder" as QuizType },
      { text: "📖 Great conversations", type: "weaver" as QuizType },
    ],
  },
  {
    question: "If you were an AI, what would you be best at?",
    answers: [
      { text: "🎨 Designing beautiful things", type: "creative" as QuizType },
      { text: "🔍 Analyzing data", type: "detective" as QuizType },
      { text: "🤖 Following instructions perfectly", type: "builder" as QuizType },
      { text: "📖 Understanding people", type: "weaver" as QuizType },
    ],
  },
];

const results = {
  creative: {
    title: "Creative Inventor",
    emoji: "🎨",
    description:
      "You have a wild imagination and love coming up with new ideas!",
    skills:
      "You'd be great at: Designing games, creating art, inventing new things, and thinking outside the box.",
    color: "from-amber-400 to-orange-400",
  },
  detective: {
    title: "Data Detective",
    emoji: "🔍",
    description:
      "You love asking questions and finding hidden patterns and clues!",
    skills:
      "You'd be great at: Solving puzzles, analyzing information, finding facts, and noticing details.",
    color: "from-amber-500 to-amber-600",
  },
  builder: {
    title: "Robot Builder",
    emoji: "🤖",
    description:
      "You love making things work and solving problems step by step!",
    skills:
      "You'd be great at: Building robots, writing code, fixing broken things, and creating systems.",
    color: "from-orange-400 to-orange-500",
  },
  weaver: {
    title: "Story Weaver",
    emoji: "📖",
    description:
      "You love telling stories and understanding how people feel!",
    skills:
      "You'd be great at: Writing stories, chatting with people, making friends, and explaining ideas.",
    color: "from-amber-300 to-yellow-400",
  },
};

export default function AIExplorerQuiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    scores: { creative: 0, detective: 0, builder: 0, weaver: 0 },
    showResult: false,
  });

  const handleAnswer = (type: QuizType) => {
    const newScores = { ...quizState.scores };
    if (type) {
      newScores[type]++;
    }

    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        scores: newScores,
      });
    } else {
      setQuizState({
        ...quizState,
        scores: newScores,
        showResult: true,
      });
    }
  };

  const getResult = (): QuizType => {
    const { scores } = quizState;
    let max = Math.max(
      scores.creative,
      scores.detective,
      scores.builder,
      scores.weaver
    );

    if (scores.creative === max) return "creative";
    if (scores.detective === max) return "detective";
    if (scores.builder === max) return "builder";
    return "weaver";
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      scores: { creative: 0, detective: 0, builder: 0, weaver: 0 },
      showResult: false,
    });
  };

  const resultType = getResult();
  const resultData = results[resultType];
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 md:p-8">
      {/* Breadcrumb Navigation */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex items-center gap-2 text-sm text-amber-900">
          <Link href="/ai-for-kids" className="hover:underline">
            AI for Kids
          </Link>
          <span>/</span>
          <Link href="/ai-for-kids/explore" className="hover:underline">
            Explore
          </Link>
          <span>/</span>
          <span className="font-semibold">AI Explorer Quiz</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {!quizState.showResult ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-amber-700 mb-2">
                🌟 What Kind of AI Explorer Are You? 🌟
              </h1>
              <p className="text-amber-600">
                Answer 6 quick questions to find out!
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-amber-700">
                  Question {quizState.currentQuestion + 1}/6
                </span>
                <span className="text-sm text-amber-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-amber-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                {questions[quizState.currentQuestion].question}
              </h2>

              {/* Answer Buttons */}
              <div className="grid grid-cols-1 gap-3">
                {questions[quizState.currentQuestion].answers.map(
                  (answer, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(answer.type)}
                      className="p-4 text-left rounded-xl bg-amber-50 hover:bg-amber-200 border-2 border-amber-200 hover:border-amber-500 transition-all duration-200 text-amber-900 font-semibold hover:scale-105 transform"
                    >
                      {answer.text}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx < quizState.currentQuestion
                      ? "bg-amber-500"
                      : idx === quizState.currentQuestion
                        ? "bg-amber-600"
                        : "bg-amber-200"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            {/* Animated Result */}
            <div
              className={`inline-block text-8xl mb-6 animate-bounce`}
            >
              {resultData.emoji}
            </div>

            <h1 className="text-4xl font-bold text-amber-700 mb-4">
              {resultData.title}
            </h1>

            <p className="text-xl text-amber-700 mb-6">
              {resultData.description}
            </p>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 mb-8">
              <p className="text-lg text-amber-900">{resultData.skills}</p>
            </div>

            {/* Score Breakdown */}
            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-amber-800 mb-4">
                Your Scores:
              </h3>
              <div className="space-y-3">
                {Object.entries(quizState.scores).map(([type, score]) => (
                  <div key={type} className="flex items-center gap-3">
                    <span className="w-24 text-left font-semibold text-amber-800 capitalize">
                      {type}
                    </span>
                    <div className="flex-1 bg-amber-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-amber-600 h-full transition-all"
                        style={{ width: `${(score / 6) * 100}%` }}
                      />
                    </div>
                    <span className="w-8 text-right font-bold text-amber-700">
                      {score}/6
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Try Again
              </button>
              <button
                onClick={() => {
                  const text = `I'm a ${resultData.title}! 🎉 What kind of AI Explorer are you? Take the quiz: aithinktank.space`;
                  navigator.clipboard.writeText(text);
                  alert("Copied to clipboard! Share with friends 🌟");
                }}
                className="px-8 py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Share with Friends
              </button>
            </div>

            {/* Back Link */}
            <div className="mt-8">
              <Link
                href="/ai-for-kids/explore"
                className="text-amber-600 hover:text-amber-800 font-semibold"
              >
                ← Back to Explore
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
