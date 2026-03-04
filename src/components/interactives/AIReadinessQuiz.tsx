"use client";

import { useState } from "react";
import Link from "next/link";

interface QuizState {
  currentQuestion: number;
  answers: number[];
  showResult: boolean;
}

const dimensions = [
  { id: "knowledge", label: "AI Knowledge", color: "from-blue-400 to-blue-600" },
  { id: "tools", label: "Tool Usage", color: "from-indigo-400 to-indigo-600" },
  { id: "thinking", label: "Critical Thinking", color: "from-blue-500 to-cyan-500" },
  { id: "ethics", label: "Ethics Awareness", color: "from-indigo-500 to-blue-500" },
  { id: "career", label: "Career Readiness", color: "from-blue-600 to-indigo-600" },
];

const questions = [
  {
    dimension: "knowledge",
    question: "When you hear 'machine learning,' what do you think?",
    options: [
      { text: "Not sure what that means", score: 1 },
      { text: "Something about computers learning from data", score: 2 },
      { text: "An algorithm that improves with training data", score: 3 },
      { text: "A subset of AI using statistical models and neural networks", score: 4 },
    ],
  },
  {
    dimension: "tools",
    question: "When you need to research a topic, you...",
    options: [
      { text: "Use a regular search engine", score: 1 },
      { text: "Try ChatGPT or Claude to explain it first", score: 2 },
      { text: "Use AI for research + fact-check with other sources", score: 3 },
      { text: "Build custom prompts, use multiple AI tools, and verify everything", score: 4 },
    ],
  },
  {
    dimension: "thinking",
    question: "If an AI gives you conflicting advice, you...",
    options: [
      { text: "Just pick whichever sounds better", score: 1 },
      { text: "Trust the first one and move on", score: 2 },
      { text: "Ask follow-up questions to understand the differences", score: 3 },
      { text: "Compare reasoning, check sources, and evaluate assumptions", score: 4 },
    ],
  },
  {
    dimension: "ethics",
    question: "What concerns you about AI?",
    options: [
      { text: "I haven't thought much about it", score: 1 },
      { text: "It might take jobs, but probably fine", score: 2 },
      { text: "Bias, privacy, and job displacement are real issues", score: 3 },
      { text: "Deep understanding of bias, accountability, environmental impact, and governance", score: 4 },
    ],
  },
  {
    dimension: "career",
    question: "Where do you see AI fitting into your future?",
    options: [
      { text: "No idea yet", score: 1 },
      { text: "Maybe as a tool in my job", score: 2 },
      { text: "Considering AI-related skills for my career", score: 3 },
      { text: "Actively building AI expertise for a specific career path", score: 4 },
    ],
  },
  {
    dimension: "knowledge",
    question: "What is a 'prompt' in AI context?",
    options: [
      { text: "Something from a movie script", score: 1 },
      { text: "Instructions you give to an AI", score: 2 },
      { text: "Carefully crafted input designed to get better AI outputs", score: 3 },
      { text: "Fine-tuned instructions using specific techniques like role-setting and context", score: 4 },
    ],
  },
  {
    dimension: "tools",
    question: "Have you used AI tools for schoolwork?",
    options: [
      { text: "No, haven't tried yet", score: 1 },
      { text: "Yes, but just for simple tasks like brainstorming", score: 2 },
      { text: "Yes, for writing, research, and problem-solving with verification", score: 3 },
      { text: "Yes, regularly and strategically across multiple tools", score: 4 },
    ],
  },
  {
    dimension: "thinking",
    question: "When an AI makes a mistake, you...",
    options: [
      { text: "Assume AI is always right", score: 1 },
      { text: "Get frustrated and stop using it", score: 2 },
      { text: "Recognize it's a tool with limitations and try again", score: 3 },
      { text: "Analyze why it failed and adjust your approach accordingly", score: 4 },
    ],
  },
  {
    dimension: "ethics",
    question: "If you found an AI trained on stolen data, you would...",
    options: [
      { text: "Keep using it anyway", score: 1 },
      { text: "Feel uncomfortable but not sure what to do", score: 2 },
      { text: "Stop using it and tell others about the issue", score: 3 },
      { text: "Report it, understand legal implications, and advocate for change", score: 4 },
    ],
  },
  {
    dimension: "career",
    question: "Which AI career path interests you most?",
    options: [
      { text: "I haven't explored any", score: 1 },
      { text: "Something vague like 'tech' or 'AI'", score: 2 },
      { text: "Specific role like ML Engineer or Data Scientist", score: 3 },
      { text: "Clear path with specific skills, education plan, and goals", score: 4 },
    ],
  },
];

const recommendations = {
  knowledge: [
    { title: "AI Fundamentals for Teens", url: "/ai-for-teens/ai-basics-explained" },
    { title: "Machine Learning Demystified", url: "/ai-for-teens/how-machine-learning-works" },
  ],
  tools: [
    { title: "Best AI Tools for Students 2024", url: "/ai-for-teens/top-ai-tools" },
    { title: "Prompt Engineering Playground", url: "/ai-for-teens/explore/prompt-playground" },
  ],
  thinking: [
    { title: "Critical Thinking with AI", url: "/ai-for-teens/critical-thinking" },
    { title: "How to Verify AI Information", url: "/ai-for-teens/fact-checking" },
  ],
  ethics: [
    { title: "AI Ethics for Teens", url: "/ai-for-teens/ai-ethics" },
    { title: "Bias in AI: What You Need to Know", url: "/ai-for-teens/ai-bias" },
  ],
  career: [
    { title: "AI Career Paths", url: "/ai-for-teens/career-paths" },
    { title: "AI Career Explorer", url: "/ai-for-teens/explore/career-explorer" },
  ],
};

function RadarChart({ scores }: { scores: Record<string, number> }) {
  const maxScore = 40;
  const size = 300;
  const center = size / 2;
  const radius = 80;

  const points = dimensions.map((dim, idx) => {
    const angle = (idx / dimensions.length) * Math.PI * 2 - Math.PI / 2;
    const value = scores[dim.id] || 0;
    const distance = (value / maxScore) * radius;
    const x = center + distance * Math.cos(angle);
    const y = center + distance * Math.sin(angle);
    return { x, y, angle, label: dim.label };
  });

  const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      {/* Grid circles */}
      {[1, 2, 3, 4].map((i) => {
        const r = (i / 4) * radius;
        return <circle key={`grid-${i}`} cx={center} cy={center} r={r} fill="none" stroke="#dbeafe" strokeWidth="1" />;
      })}

      {/* Grid lines */}
      {points.map((p, i) => (
        <line key={`grid-line-${i}`} x1={center} y1={center} x2={p.x} y2={p.y} stroke="#dbeafe" strokeWidth="1" />
      ))}

      {/* Data polygon */}
      <path d={pathData} fill="#3b82f6" fillOpacity="0.3" stroke="#1e40af" strokeWidth="2" />

      {/* Points */}
      {points.map((p, i) => (
        <circle key={`point-${i}`} cx={p.x} cy={p.y} r="6" fill="#1e40af" stroke="#ffffff" strokeWidth="2" />
      ))}

      {/* Labels */}
      {points.map((p, i) => {
        const labelDistance = radius + 35;
        const labelX = center + labelDistance * Math.cos(p.angle);
        const labelY = center + labelDistance * Math.sin(p.angle);
        return (
          <text
            key={`label-${i}`}
            x={labelX}
            y={labelY}
            textAnchor="middle"
            dy="0.3em"
            className="text-xs font-semibold fill-blue-900"
          >
            {p.label}
          </text>
        );
      })}
    </svg>
  );
}

export default function AIReadinessQuiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    answers: Array(questions.length).fill(0),
    showResult: false,
  });

  const handleAnswer = (score: number) => {
    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestion] = score;

    if (state.currentQuestion < questions.length - 1) {
      setState({
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answers: newAnswers,
      });
    } else {
      setState({
        ...state,
        answers: newAnswers,
        showResult: true,
      });
    }
  };

  const calculateScores = (): Record<string, number> => {
    const scores = Object.fromEntries(dimensions.map((d) => [d.id, 0]));
    questions.forEach((q, idx) => {
      scores[q.dimension] += state.answers[idx];
    });
    return scores;
  };

  const scores = calculateScores();
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const getRating = () => {
    if (totalScore <= 20) return { level: "Beginner Explorer", emoji: "🚀" };
    if (totalScore <= 30) return { level: "Rising Coder", emoji: "💻" };
    if (totalScore <= 35) return { level: "AI Apprentice", emoji: "🤖" };
    return { level: "Future Innovator", emoji: "⚡" };
  };

  const getWeakestDimensions = (): string[] => {
    return dimensions.sort((a, b) => (scores[a.id] || 0) - (scores[b.id] || 0)).slice(0, 2).map((d) => d.id);
  };

  const progress = ((state.currentQuestion + 1) / questions.length) * 100;
  const rating = getRating();
  const weakest = getWeakestDimensions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center gap-2 text-sm text-blue-900">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/ai-for-teens" className="hover:underline">
            AI for Teens
          </Link>
          <span>/</span>
          <span className="font-semibold">AI Readiness Quiz</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {!state.showResult ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-700 mb-2">How AI-Ready Are You?</h1>
              <p className="text-blue-600 text-lg">Assess your AI skills across 5 dimensions</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-blue-700">
                  Question {state.currentQuestion + 1}/{questions.length}
                </span>
                <span className="text-sm text-blue-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Dimension Tag */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {dimensions.find((d) => d.id === questions[state.currentQuestion].dimension)?.label}
              </span>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                {questions[state.currentQuestion].question}
              </h2>

              {/* Answer Buttons */}
              <div className="grid grid-cols-1 gap-3">
                {questions[state.currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="p-4 text-left rounded-xl bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-500 transition-all duration-200 text-blue-900 font-medium hover:scale-102 transform"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx < state.currentQuestion
                      ? "bg-blue-500"
                      : idx === state.currentQuestion
                        ? "bg-blue-600"
                        : "bg-blue-200"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="space-y-8">
            {/* Rating Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-6xl mb-4">{rating.emoji}</div>
              <h1 className="text-4xl font-bold text-blue-700 mb-2">{rating.level}</h1>
              <p className="text-blue-600 text-lg mb-4">
                Score: <span className="font-bold text-blue-800">{totalScore}/40</span>
              </p>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <p className="text-blue-900">
                  You're making great progress on your AI journey! Continue learning and practicing with the
                  recommendations below.
                </p>
              </div>
            </div>

            {/* Radar Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Your AI Skills Radar</h2>
              <RadarChart scores={scores} />
            </div>

            {/* Score Breakdown */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Dimension Scores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dimensions.map((dim) => (
                  <div key={dim.id} className="bg-blue-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-blue-900">{dim.label}</span>
                      <span className="font-bold text-blue-700">{scores[dim.id]}/8</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${dim.color} h-full transition-all`}
                        style={{ width: `${(scores[dim.id] / 8) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personalized Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Personalized Learning Path</h2>
              <p className="text-blue-700 mb-6">
                Based on your scores, here are recommended resources to strengthen your weakest areas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {weakest.map((dimId) => {
                  const dim = dimensions.find((d) => d.id === dimId);
                  const recs = recommendations[dimId as keyof typeof recommendations] || [];
                  return (
                    <div key={dimId} className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                      <h3 className="font-bold text-blue-900 mb-4">Improve {dim?.label}</h3>
                      <div className="space-y-3">
                        {recs.map((rec, idx) => (
                          <Link
                            key={idx}
                            href={rec.url}
                            className="block p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-blue-700 font-medium hover:text-blue-900"
                          >
                            📚 {rec.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    setState({
                      currentQuestion: 0,
                      answers: Array(questions.length).fill(0),
                      showResult: false,
                    })
                  }
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `I'm a ${rating.level}! I scored ${totalScore}/40 on the AI Readiness Quiz. Test your AI skills: aithinktank.space`
                    );
                    alert("Copied to clipboard! Share with friends 🎯");
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Share Result
                </button>
              </div>
              <Link href="/ai-for-teens" className="block mt-6 text-blue-600 hover:text-blue-800 font-semibold">
                ← Back to AI for Teens
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
