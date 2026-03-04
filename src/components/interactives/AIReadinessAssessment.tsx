"use client";

import { useState } from "react";

type DimensionKey =
  | "dataInfrastructure"
  | "talentSkills"
  | "leadershipBuyIn"
  | "processMaturity"
  | "technologyStack"
  | "cultureChange";

interface Question {
  id: string;
  dimension: DimensionKey;
  text: string;
}

interface Results {
  overall: number;
  dimensions: {
    [key in DimensionKey]: number;
  };
}

const questions: Question[] = [
  {
    id: "data1",
    dimension: "dataInfrastructure",
    text: "Our data is well-organized and easily accessible across departments",
  },
  {
    id: "data2",
    dimension: "dataInfrastructure",
    text: "We have invested in modern data infrastructure and storage solutions",
  },
  {
    id: "talent1",
    dimension: "talentSkills",
    text: "We have team members with data science or machine learning skills",
  },
  {
    id: "talent2",
    dimension: "talentSkills",
    text: "We provide regular training and upskilling programs for our teams",
  },
  {
    id: "leadership1",
    dimension: "leadershipBuyIn",
    text: "Our leadership team has a clear vision for AI adoption",
  },
  {
    id: "leadership2",
    dimension: "leadershipBuyIn",
    text: "AI and digital transformation are prioritized in our strategy",
  },
  {
    id: "process1",
    dimension: "processMaturity",
    text: "Our business processes are well-documented and standardized",
  },
  {
    id: "process2",
    dimension: "processMaturity",
    text: "We have a clear process for evaluating and implementing new technologies",
  },
  {
    id: "technology1",
    dimension: "technologyStack",
    text: "Our current technology infrastructure is modern and scalable",
  },
  {
    id: "technology2",
    dimension: "technologyStack",
    text: "We have cybersecurity measures in place to protect AI systems",
  },
  {
    id: "culture1",
    dimension: "cultureChange",
    text: "Our organization embraces change and innovation",
  },
  {
    id: "culture2",
    dimension: "cultureChange",
    text: "We have support from employees for digital transformation initiatives",
  },
];

const dimensionLabels: { [key in DimensionKey]: string } = {
  dataInfrastructure: "Data Infrastructure",
  talentSkills: "Talent & Skills",
  leadershipBuyIn: "Leadership Buy-in",
  processMaturity: "Process Maturity",
  technologyStack: "Technology Stack",
  cultureChange: "Culture & Change Management",
};

const recommendations: { [key in DimensionKey]: string } = {
  dataInfrastructure:
    "Invest in data governance frameworks and modern data warehousing solutions to enable AI initiatives.",
  talentSkills:
    "Develop a talent strategy that includes hiring, training, and retention of AI-skilled professionals.",
  leadershipBuyIn:
    "Create an AI governance structure with clear ownership and align AI strategy with business goals.",
  processMaturity:
    "Document and standardize key business processes before implementing AI solutions.",
  technologyStack:
    "Upgrade infrastructure to support machine learning operations and ensure cloud readiness.",
  cultureChange:
    "Foster a data-driven culture through change management programs and employee engagement.",
};

const readinessLevels = [
  { min: 0, max: 25, label: "Starting Out", color: "bg-red-100 border-red-300" },
  {
    min: 26,
    max: 50,
    label: "Building Foundation",
    color: "bg-orange-100 border-orange-300",
  },
  {
    min: 51,
    max: 75,
    label: "Accelerating",
    color: "bg-blue-100 border-blue-300",
  },
  { min: 76, max: 100, label: "AI-Forward", color: "bg-green-100 border-green-300" },
];

export default function AIReadinessAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const questionId = questions[currentQuestion].id;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: score,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = (): Results => {
    const results: Results = {
      overall: 0,
      dimensions: {
        dataInfrastructure: 0,
        talentSkills: 0,
        leadershipBuyIn: 0,
        processMaturity: 0,
        technologyStack: 0,
        cultureChange: 0,
      },
    };

    const dimensionCounts: { [key in DimensionKey]: number } = {
      dataInfrastructure: 0,
      talentSkills: 0,
      leadershipBuyIn: 0,
      processMaturity: 0,
      technologyStack: 0,
      cultureChange: 0,
    };

    questions.forEach((q) => {
      const score = answers[q.id] || 0;
      results.dimensions[q.dimension] += score;
      dimensionCounts[q.dimension]++;
    });

    // Calculate averages for each dimension and convert to 0-100 scale
    Object.keys(results.dimensions).forEach((key) => {
      const dimKey = key as DimensionKey;
      results.dimensions[dimKey] =
        (results.dimensions[dimKey] / (dimensionCounts[dimKey] * 5)) * 100;
    });

    // Calculate overall score
    const sum = Object.values(results.dimensions).reduce((a, b) => a + b, 0);
    results.overall = Math.round(sum / 6);

    return results;
  };

  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);

  if (showResults) {
    const results = calculateResults();
    const readinessLevel = readinessLevels.find(
      (level) => results.overall >= level.min && results.overall <= level.max
    );

    // Get top 3 strengths and improvements
    const dimensionScores = Object.entries(results.dimensions)
      .map(([key, score]) => ({
        key: key as DimensionKey,
        label: dimensionLabels[key as DimensionKey],
        score: Math.round(score),
      }))
      .sort((a, b) => b.score - a.score);

    const strengths = dimensionScores.slice(0, 3);
    const improvements = dimensionScores.slice(-3).reverse();

    return (
      <div className="min-h-screen bg-slate-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-600">
            <span>Home</span> <span className="mx-2">/</span>
            <span>AI for Corporates</span> <span className="mx-2">/</span>
            <span>AI Readiness Assessment</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Your AI Readiness Results
            </h1>
            <p className="text-lg text-slate-600">
              Executive summary of your organization's AI adoption readiness
            </p>
          </div>

          {/* Overall Score */}
          <div className={`${readinessLevel?.color} border-2 rounded-lg p-8 mb-12`}>
            <div className="text-center">
              <div className="text-6xl font-bold text-slate-900 mb-4">
                {results.overall}
              </div>

              {/* Circular Progress */}
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-slate-300"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeDasharray={`${(results.overall / 100) * 283} 283`}
                      className="text-slate-700 transition-all duration-500"
                      style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900">
                        {results.overall}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {readinessLevel?.label}
              </h2>
              <p className="text-slate-700 max-w-2xl mx-auto">
                {readinessLevel?.label === "Starting Out" &&
                  "Your organization is beginning its AI journey. Focus on foundational elements like data infrastructure and leadership alignment."}
                {readinessLevel?.label === "Building Foundation" &&
                  "You have solid foundations in place. Continue strengthening processes and building talent capabilities."}
                {readinessLevel?.label === "Accelerating" &&
                  "Your organization is well-positioned for AI adoption. Focus on scaling initiatives and driving organizational change."}
                {readinessLevel?.label === "AI-Forward" &&
                  "Excellent preparation for AI adoption. Focus on innovation, measurement, and continuous improvement."}
              </p>
            </div>
          </div>

          {/* Dimension Scores */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Dimension Scores
            </h2>
            <div className="space-y-6">
              {dimensionScores.map((dim) => (
                <div key={dim.key}>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-900">
                      {dim.label}
                    </label>
                    <span className="text-sm font-bold text-slate-700">
                      {dim.score}/100
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-slate-700 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${dim.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths and Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Top 3 Strengths</h3>
              <ul className="space-y-3">
                {strengths.map((s) => (
                  <li key={s.key} className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900">{s.label}</p>
                      <p className="text-sm text-slate-600">{s.score}/100</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Areas for Improvement
              </h3>
              <ul className="space-y-3">
                {improvements.map((i) => (
                  <li key={i.key} className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">→</span>
                    <div>
                      <p className="font-semibold text-slate-900">{i.label}</p>
                      <p className="text-sm text-slate-600">{i.score}/100</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prioritized Actions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              3 Prioritized Action Items
            </h3>
            <div className="space-y-6">
              {improvements.slice(0, 3).map((improvement, idx) => (
                <div key={improvement.key} className="pb-6 last:pb-0 last:border-b-0 border-b border-blue-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-700 text-white text-sm font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Strengthen {improvement.label}
                      </h4>
                      <p className="text-slate-700 mb-3">
                        {recommendations[improvement.key]}
                      </p>
                      <a
                        href="#"
                        className="text-sm text-slate-700 font-semibold underline hover:text-slate-900"
                      >
                        Explore relevant corporate articles →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers({});
              }}
              className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4 text-sm text-slate-600">
          <span>Home</span> <span className="mx-2">/</span>
          <span>AI for Corporates</span> <span className="mx-2">/</span>
          <span>AI Readiness Assessment</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Is Your Organization AI-Ready?
          </h1>
          <p className="text-lg text-slate-600">
            Evaluate your AI readiness across 6 key dimensions. This professional assessment
            takes 5-10 minutes and provides personalized insights.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-900">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-slate-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-slate-700 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full mb-4">
              {dimensionLabels[questions[currentQuestion].dimension]}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {questions[currentQuestion].text}
          </h2>

          {/* Likert Scale */}
          <div className="space-y-3">
            {[
              { value: 1, label: "Strongly Disagree" },
              { value: 2, label: "Disagree" },
              { value: 3, label: "Neutral" },
              { value: 4, label: "Agree" },
              { value: 5, label: "Strongly Agree" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left px-6 py-4 rounded-lg border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all active:bg-slate-100"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-900">{option.label}</span>
                  <span className="text-slate-500">{option.value}/5</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-6 py-2 text-slate-700 font-semibold hover:bg-slate-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
            disabled={currentQuestion === questions.length - 1}
            className="px-6 py-2 text-slate-700 font-semibold hover:bg-slate-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
