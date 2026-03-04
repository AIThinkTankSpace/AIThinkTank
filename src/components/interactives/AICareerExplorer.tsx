"use client";

import { useState } from "react";
import Link from "next/link";

interface QuizState {
  currentQuestion: number;
  answers: string[];
  showResults: boolean;
  showAllCareers: boolean;
}

const questions = [
  {
    id: "interests",
    question: "What do you enjoy most?",
    options: [
      { text: "🎨 Creative work", value: "creative" },
      { text: "🧩 Problem solving", value: "problem" },
      { text: "❤️ Helping people", value: "helping" },
      { text: "🔨 Building things", value: "building" },
      { text: "📊 Analyzing data", value: "analysis" },
    ],
  },
  {
    id: "workstyle",
    question: "Your ideal work style?",
    options: [
      { text: "🎯 Solo deep work", value: "solo" },
      { text: "👥 Team collaboration", value: "team" },
      { text: "📈 Leading projects", value: "leadership" },
      { text: "🔬 Researching new ideas", value: "research" },
      { text: "🎓 Teaching others", value: "teaching" },
    ],
  },
  {
    id: "subject",
    question: "Which subject interests you most?",
    options: [
      { text: "🔢 Math/Science", value: "math" },
      { text: "🎨 Art/Design", value: "art" },
      { text: "📝 Language/Writing", value: "language" },
      { text: "💼 Business", value: "business" },
      { text: "🧠 Psychology/Philosophy", value: "psychology" },
    ],
  },
  {
    id: "aiexcites",
    question: "What excites you about AI?",
    options: [
      { text: "🎨 Making art", value: "art_ai" },
      { text: "🤖 Automating boring tasks", value: "automation" },
      { text: "🏥 Healthcare & wellness", value: "health" },
      { text: "🎮 Games & entertainment", value: "games" },
      { text: "🌍 Solving big problems", value: "impact" },
    ],
  },
  {
    id: "vision",
    question: "Where do you see yourself?",
    options: [
      { text: "🚀 Startup founder", value: "startup" },
      { text: "🏢 Big tech company", value: "bigtech" },
      { text: "🔬 Research lab", value: "research_org" },
      { text: "🤝 Government/NGO", value: "public" },
      { text: "💻 Freelance/Independent", value: "freelance" },
    ],
  },
];

interface Career {
  id: string;
  title: string;
  emoji: string;
  description: string;
  skills: string[];
  education: {
    stream: string;
    degree: string;
    institutes: string[];
  };
  salary: string;
  dayInLife: string;
  color: string;
}

const allCareers: Career[] = [
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    emoji: "🤖",
    description:
      "Design and build AI systems that learn from data. You'll work on algorithms, training models, and deploying AI in production.",
    skills: ["Python/C++", "Mathematics", "Deep Learning", "Problem-solving", "Statistics"],
    education: {
      stream: "Science (Math + CS) or Math Stream",
      degree: "B.Tech in CS/IT with AI specialization, or B.Tech in Data Science",
      institutes: ["IIT-Bombay", "IIT-Delhi", "IIT-Madras", "IIIT-Hyderabad", "NIT-K"],
    },
    salary: "₹12-25 LPA fresher; ₹40-80 LPA experienced",
    dayInLife:
      "Morning: Code review + team standup. Afternoon: Build ML pipelines, test models. Evening: Debug performance issues, optimize algorithms.",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    emoji: "📊",
    description:
      "Extract insights from data using statistics and ML. You'll ask questions, analyze patterns, and drive business decisions with data.",
    skills: ["Python/R", "Statistics", "SQL", "Data visualization", "Communication"],
    education: {
      stream: "Science or Math Stream",
      degree: "B.Tech CS/IT, or MSc in Data Science, or Analytics degree",
      institutes: ["IIT-Bombay", "IIIT-Delhi", "Ashoka University", "NMIMS", "UpGrad (Online)"],
    },
    salary: "₹10-20 LPA fresher; ₹35-60 LPA experienced",
    dayInLife:
      "Morning: Analyze business problems, query databases. Afternoon: Build dashboards, run statistical tests. Evening: Present findings to stakeholders.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    id: "ai-product",
    title: "AI Product Manager",
    emoji: "📱",
    description:
      "Define AI product strategy, roadmap, and features. Bridge business, engineering, and user needs in AI products.",
    skills: ["Strategic thinking", "Communication", "Technical understanding", "Data literacy", "User empathy"],
    education: {
      stream: "Any stream (Science/Commerce/Arts)",
      degree: "B.Tech CS, or any bachelor + MBA in Product Management",
      institutes: ["IIM-Ahmedabad", "IIM-Bangalore", "ISB-Hyderabad", "XLRI", "IIT + MBA"],
    },
    salary: "₹15-25 LPA fresher; ₹50-100+ LPA experienced",
    dayInLife:
      "Morning: Product strategy meeting. Afternoon: User research, competitive analysis. Evening: Define features, work with engineers.",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: "ai-ethics",
    title: "AI Ethics Researcher",
    emoji: "⚖️",
    description:
      "Study the societal impact of AI, bias, fairness, and accountability. Help shape responsible AI development.",
    skills: ["Critical thinking", "Research", "Policy knowledge", "Philosophy", "Communication"],
    education: {
      stream: "Any stream (Science/Commerce/Arts)",
      degree: "Bachelor in Philosophy/Political Science/CS + Research Master's",
      institutes: ["Delhi University", "JNU", "Ashoka", "IIT (Research programs)", "Overseas programs"],
    },
    salary: "₹12-22 LPA research; ₹20-40 LPA policy roles",
    dayInLife:
      "Morning: Literature review on AI bias. Afternoon: Interview stakeholders, analyze case studies. Evening: Write research papers.",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "nlp-specialist",
    title: "NLP Specialist",
    emoji: "💬",
    description:
      "Work on language AI: chatbots, translation, sentiment analysis. Make computers understand and generate human language.",
    skills: ["Python", "NLP libraries", "Transformers", "Linguistics basics", "Deep Learning"],
    education: {
      stream: "Science (Math + CS)",
      degree: "B.Tech CS/IT with NLP focus, or specialized Master's",
      institutes: ["IIT-Madras", "IIT-Bombay", "IIIT-Hyderabad", "Delhi University"],
    },
    salary: "₹14-24 LPA fresher; ₹40-70 LPA experienced",
    dayInLife:
      "Morning: Training transformer models. Afternoon: Work on language understanding, test chatbots. Evening: Fine-tune models, optimize accuracy.",
    color: "from-green-400 to-green-600",
  },
  {
    id: "cv-engineer",
    title: "Computer Vision Engineer",
    emoji: "👁️",
    description:
      "Build AI systems that see and understand images/videos. Work on detection, recognition, autonomous systems.",
    skills: ["Python/C++", "Deep Learning", "OpenCV", "Mathematics", "Physics"],
    education: {
      stream: "Science (Math + CS)",
      degree: "B.Tech CS/IT with CV focus, or Master's in Computer Vision",
      institutes: ["IIT-Delhi", "IIT-Bombay", "IIT-Madras", "IIIT-Hyderabad"],
    },
    salary: "₹14-26 LPA fresher; ₹45-80 LPA experienced",
    dayInLife:
      "Morning: Code review + team standup. Afternoon: Build vision models, test on datasets. Evening: Optimize accuracy, handle edge cases.",
    color: "from-pink-400 to-pink-600",
  },
  {
    id: "ai-artist",
    title: "AI Artist/Designer",
    emoji: "🎨",
    description:
      "Use generative AI to create art, design, music, and visual content. Combine creativity with AI tools.",
    skills: ["Design/Art", "Prompt engineering", "AI tools mastery", "Creativity", "Storytelling"],
    education: {
      stream: "Any stream (Commerce/Arts preferred)",
      degree: "BFA + AI tools certification, or Self-taught + portfolio",
      institutes: ["NID-Ahmedabad", "NIFT", "Pearl Academy", "Online (Skillshare/Coursera)"],
    },
    salary: "₹8-18 LPA company; ₹5-50 LPA freelance (highly variable)",
    dayInLife:
      "Morning: Brainstorm concepts. Afternoon: Generate designs with AI, iterate, refine. Evening: Edit, polish, present to clients.",
    color: "from-orange-400 to-orange-600",
  },
  {
    id: "robotics",
    title: "Robotics Engineer",
    emoji: "🦾",
    description:
      "Build robots powered by AI. Combine mechanical engineering, electronics, and AI for autonomous systems.",
    skills: ["Mechanical engineering", "Embedded systems", "Robotics frameworks", "Python/C++", "Control systems"],
    education: {
      stream: "Science (Math + Physics + CS)",
      degree: "B.Tech in Mechanical/Electrical with Robotics, or dedicated Robotics B.Tech",
      institutes: ["IIT-Delhi", "IIT-Bombay", "IIT-Kharagpur", "NIT-Trichy"],
    },
    salary: "₹14-24 LPA fresher; ₹40-70 LPA experienced",
    dayInLife:
      "Morning: Design robot components. Afternoon: Test hardware, debug firmware. Evening: Integrate AI, run field tests.",
    color: "from-red-400 to-red-600",
  },
  {
    id: "ai-healthcare",
    title: "AI Healthcare Specialist",
    emoji: "🏥",
    description:
      "Apply AI to healthcare: diagnosis, drug discovery, patient monitoring. Make healthcare smarter and more accessible in India.",
    skills: ["Medicine/Biology", "Python", "Medical AI", "Data privacy", "Healthcare domain knowledge"],
    education: {
      stream: "Science (Biology + Chemistry) or CS",
      degree: "MBBS + AI certification, or B.Tech CS + Healthcare AI Master's",
      institutes: ["AIIMS", "CMC-Vellore", "IIT-Delhi (Healthcare AI)", "BITS-Pilani"],
    },
    salary: "₹15-28 LPA fresher; ₹45-80 LPA experienced",
    dayInLife:
      "Morning: Analyze medical imaging AI. Afternoon: Validate models on patient data, ensure privacy. Evening: Collaborate with doctors.",
    color: "from-rose-400 to-rose-600",
  },
  {
    id: "ai-educator",
    title: "AI Educator",
    emoji: "🎓",
    description:
      "Teach AI, machine learning, and tech to the next generation. Create courses, run bootcamps, mentor students.",
    skills: ["Teaching", "Clear communication", "AI knowledge", "Curriculum design", "Empathy"],
    education: {
      stream: "Any stream (CS preferred)",
      degree: "Bachelor degree + Teaching experience, or Master's in CS/AI",
      institutes: ["Any good college + Online teaching experience", "Teach for India", "udemy/Coursera instructor"],
    },
    salary: "₹12-22 LPA institute; ₹15-50 LPA entrepreneur (courses/bootcamps)",
    dayInLife:
      "Morning: Plan curriculum. Afternoon: Teach classes/workshops. Evening: Create content, mentor students individually.",
    color: "from-amber-400 to-amber-600",
  },
  {
    id: "conversational-ai",
    title: "Conversational AI Developer",
    emoji: "💭",
    description:
      "Build chatbots, voice assistants, and conversational systems. Create natural human-AI interactions.",
    skills: ["NLP", "Python", "Dialog systems", "Intent recognition", "User experience"],
    education: {
      stream: "Science (Math + CS)",
      degree: "B.Tech CS/IT with NLP focus, or specialized Master's",
      institutes: ["IIT-Madras", "IIIT-Hyderabad", "IIT-Bombay", "Online programs"],
    },
    salary: "₹13-23 LPA fresher; ₹38-65 LPA experienced",
    dayInLife:
      "Morning: Design dialog flows. Afternoon: Train intent models, test conversations. Evening: Improve response quality.",
    color: "from-teal-400 to-teal-600",
  },
  {
    id: "ai-policy",
    title: "AI Policy Advisor",
    emoji: "📋",
    description:
      "Shape AI policy and governance. Work with governments, organizations to create responsible AI regulations.",
    skills: ["Policy thinking", "Communication", "AI understanding", "Law/governance", "Research"],
    education: {
      stream: "Any stream (Commerce/Political Science preferred)",
      degree: "Law degree + Policy Master's, or Political Science + AI courses",
      institutes: ["National Law University", "JNU", "NALSAR", "NITI Aayog (internships)"],
    },
    salary: "₹12-22 LPA government; ₹18-40 LPA think tanks",
    dayInLife:
      "Morning: Review policy papers, analyze regulations. Afternoon: Stakeholder meetings, research. Evening: Draft policy briefs.",
    color: "from-slate-400 to-slate-600",
  },
];

const careerMatching = {
  creative: [
    "ai-artist",
    "nlp-specialist",
    "ai-product",
    "conversational-ai",
    "robotics",
    "ai-educator",
  ],
  problem: [
    "ml-engineer",
    "robotics",
    "ai-ethics",
    "cv-engineer",
    "ai-healthcare",
    "data-scientist",
  ],
  helping: [
    "ai-educator",
    "ai-ethics",
    "ai-healthcare",
    "ai-policy",
    "conversational-ai",
    "ai-product",
  ],
  building: [
    "ml-engineer",
    "robotics",
    "conversational-ai",
    "cv-engineer",
    "data-scientist",
    "ai-product",
  ],
  analysis: [
    "data-scientist",
    "ml-engineer",
    "ai-ethics",
    "ai-policy",
    "ai-product",
    "nlp-specialist",
  ],
  solo: ["ml-engineer", "cv-engineer", "data-scientist", "ai-artist", "nlp-specialist", "ai-healthcare"],
  team: ["ai-product", "robotics", "conversational-ai", "ai-educator", "ai-ethics", "ai-policy"],
  leadership: ["ai-product", "ai-educator", "robotics", "ai-policy", "ai-ethics", "ai-healthcare"],
  research: [
    "ai-ethics",
    "ai-healthcare",
    "ml-engineer",
    "nlp-specialist",
    "cv-engineer",
    "ai-policy",
  ],
  teaching: ["ai-educator", "ai-product", "ai-ethics", "conversational-ai", "data-scientist", "ai-policy"],
  math: ["ml-engineer", "data-scientist", "cv-engineer", "nlp-specialist", "robotics", "ai-healthcare"],
  art: ["ai-artist", "ai-product", "conversational-ai", "ai-educator", "nlp-specialist", "ai-ethics"],
  language: ["nlp-specialist", "ai-educator", "conversational-ai", "ai-policy", "ai-ethics", "ai-product"],
  business: ["ai-product", "ai-policy", "ai-educator", "ai-ethics", "data-scientist", "ai-healthcare"],
  psychology: ["ai-ethics", "conversational-ai", "ai-product", "ai-educator", "ai-healthcare", "ai-policy"],
  art_ai: ["ai-artist", "cv-engineer", "conversational-ai", "nlp-specialist", "ai-product", "ai-educator"],
  automation: [
    "ml-engineer",
    "robotics",
    "data-scientist",
    "conversational-ai",
    "cv-engineer",
    "ai-healthcare",
  ],
  health: [
    "ai-healthcare",
    "ai-ethics",
    "data-scientist",
    "ai-product",
    "ml-engineer",
    "ai-policy",
  ],
  games: ["ai-artist", "ml-engineer", "cv-engineer", "conversational-ai", "robotics", "ai-product"],
  impact: [
    "ai-ethics",
    "ai-policy",
    "ai-healthcare",
    "robotics",
    "ai-educator",
    "data-scientist",
  ],
  startup: [
    "ai-product",
    "ml-engineer",
    "ai-artist",
    "conversational-ai",
    "data-scientist",
    "ai-educator",
  ],
  bigtech: [
    "ml-engineer",
    "cv-engineer",
    "nlp-specialist",
    "data-scientist",
    "ai-product",
    "robotics",
  ],
  research_org: [
    "ai-ethics",
    "ml-engineer",
    "ai-healthcare",
    "nlp-specialist",
    "cv-engineer",
    "ai-policy",
  ],
  public: [
    "ai-policy",
    "ai-ethics",
    "ai-healthcare",
    "ai-educator",
    "data-scientist",
    "ai-product",
  ],
  freelance: ["ai-artist", "ai-educator", "data-scientist", "nlp-specialist", "conversational-ai", "ai-product"],
};

export default function AICareerExplorer() {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    showResults: false,
    showAllCareers: false,
  });

  const handleAnswer = (value: string) => {
    const newAnswers = [...state.answers, value];

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
        showResults: true,
      });
    }
  };

  const getRecommendedCareers = (): string[] => {
    const careerScores: Record<string, number> = {};

    state.answers.forEach((answer) => {
      const matchingCareers = careerMatching[answer as keyof typeof careerMatching] || [];
      matchingCareers.forEach((careerId) => {
        careerScores[careerId] = (careerScores[careerId] || 0) + 1;
      });
    });

    return Object.entries(careerScores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .slice(0, 3)
      .map(([careerId]) => careerId);
  };

  const progress = ((state.currentQuestion + 1) / questions.length) * 100;
  const recommendedCareerIds = state.showResults ? getRecommendedCareers() : [];
  const recommendedCareers = recommendedCareerIds.map((id) => allCareers.find((c) => c.id === id)!).filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center gap-2 text-sm text-blue-900">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/ai-for-teens" className="hover:underline">
            AI for Teens
          </Link>
          <span>/</span>
          <span className="font-semibold">Career Explorer</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {!state.showResults ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-700 mb-2">AI Career Explorer</h1>
              <p className="text-blue-600 text-lg">Discover which AI career path matches your interests</p>
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

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                {questions[state.currentQuestion].question}
              </h2>

              {/* Answer Buttons */}
              <div className="grid grid-cols-1 gap-3">
                {questions[state.currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.value)}
                    className="p-4 text-left rounded-xl bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-500 transition-all duration-200 text-blue-900 font-medium hover:scale-102 transform"
                  >
                    {option.text}
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
        ) : !state.showAllCareers ? (
          /* Results Screen */
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h1 className="text-4xl font-bold text-blue-700 mb-2">Your Best-Fit AI Careers</h1>
              <p className="text-blue-600">Based on your interests and strengths, here are the top 3 matches</p>
            </div>

            {/* Recommended Careers */}
            <div className="grid grid-cols-1 gap-6">
              {recommendedCareers.map((career, idx) => (
                <div
                  key={career.id}
                  className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-blue-500 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{career.emoji}</div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-blue-600 mb-1">Top Match #{idx + 1}</div>
                      <h2 className="text-3xl font-bold text-blue-700">{career.title}</h2>
                    </div>
                  </div>

                  <p className="text-blue-800 mb-6">{career.description}</p>

                  {/* Key Skills */}
                  <div className="mb-6">
                    <h3 className="font-bold text-blue-700 mb-3">Key Skills Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education Path */}
                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <h3 className="font-bold text-blue-900 mb-3">India Education Path</h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li>
                        <strong>Stream:</strong> {career.education.stream}
                      </li>
                      <li>
                        <strong>Degree:</strong> {career.education.degree}
                      </li>
                      <li>
                        <strong>Top Institutes:</strong> {career.education.institutes.join(", ")}
                      </li>
                    </ul>
                  </div>

                  {/* Salary & Day in Life */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-indigo-900 mb-2">💰 Salary Range in India</h4>
                      <p className="text-indigo-800 text-sm">{career.salary}</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-indigo-900 mb-2">📅 A Day in This Role</h4>
                      <p className="text-indigo-800 text-sm">{career.dayInLife}</p>
                    </div>
                  </div>

                  <Link
                    href={`/ai-for-teens?search=${career.title}`}
                    className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
                  >
                    Learn More Articles
                  </Link>
                </div>
              ))}
            </div>

            {/* Explore All Careers */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <p className="text-blue-700 mb-4">Want to explore all 12 AI careers?</p>
              <button
                onClick={() => setState({ ...state, showAllCareers: true })}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Explore All 12 AI Careers
              </button>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={() =>
                    setState({
                      currentQuestion: 0,
                      answers: [],
                      showResults: false,
                      showAllCareers: false,
                    })
                  }
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => {
                    const careers = recommendedCareers.map((c) => c.title).join(", ");
                    navigator.clipboard.writeText(
                      `My top AI career matches are: ${careers}. Find yours: aithinktank.space`
                    );
                    alert("Copied to clipboard! Share with friends 🎯");
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Share Your Matches
                </button>
              </div>
              <Link href="/ai-for-teens" className="block text-blue-600 hover:text-blue-800 font-semibold">
                ← Back to AI for Teens
              </Link>
            </div>
          </div>
        ) : (
          /* All Careers View */
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h1 className="text-4xl font-bold text-blue-700 mb-2">All 12 AI Careers</h1>
              <p className="text-blue-600">Explore every pathway in the world of AI</p>
            </div>

            {/* All Careers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allCareers.map((career) => (
                <div
                  key={career.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-t-4 border-blue-500"
                >
                  <div className="text-4xl mb-3">{career.emoji}</div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{career.title}</h3>
                  <p className="text-blue-800 text-sm mb-4">{career.description}</p>

                  <div className="space-y-3 text-xs text-blue-700">
                    <div>
                      <strong>Skills:</strong> {career.skills.slice(0, 2).join(", ")}
                    </div>
                    <div>
                      <strong>Salary:</strong> {career.salary}
                    </div>
                    <div>
                      <strong>Stream:</strong> {career.education.stream}
                    </div>
                  </div>

                  <details className="mt-4">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold text-sm">
                      View Full Details ▾
                    </summary>
                    <div className="mt-3 pt-3 border-t border-blue-200">
                      <p className="text-xs text-blue-800 mb-2">{career.dayInLife}</p>
                      <div className="text-xs text-blue-700">
                        <strong>Institutes:</strong> {career.education.institutes.join(", ")}
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={() => setState({ ...state, showAllCareers: false })}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Back to Your Matches
                </button>
                <button
                  onClick={() =>
                    setState({
                      currentQuestion: 0,
                      answers: [],
                      showResults: false,
                      showAllCareers: false,
                    })
                  }
                  className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Retake Quiz
                </button>
              </div>
              <Link href="/ai-for-teens" className="block text-blue-600 hover:text-blue-800 font-semibold">
                ← Back to AI for Teens
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
