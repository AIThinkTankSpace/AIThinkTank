"use client";

import { useState } from "react";
import Link from "next/link";

type LabeledImage = {
  id: number;
  emoji: string;
  label: string;
  isCorrect: boolean;
};

interface StepState {
  currentStep: number;
  step1Labels: Record<number, string | null>;
  step4Feedback: boolean | null;
  accuracy: number;
}

const steps = [
  {
    title: "Collecting Examples",
    emoji: "📚",
    description: "AI needs lots of examples to learn from, just like you!",
    funFact:
      "An AI might need thousands of cat and dog photos to learn the difference!",
  },
  {
    title: "Finding Patterns",
    emoji: "🔍",
    description: "AI looks for patterns in the examples it collects.",
    funFact: "Cats usually have pointy ears and whiskers - that's a pattern!",
  },
  {
    title: "Making a Guess",
    emoji: "🤔",
    description: "Once it finds patterns, AI can make a guess about new things.",
    funFact:
      "When you show AI a new image, it uses the patterns it found to predict!",
  },
  {
    title: "Checking the Answer",
    emoji: "✓",
    description: "AI checks if its guess was right and learns from mistakes.",
    funFact: "Getting things wrong is actually how AI gets smarter!",
  },
  {
    title: "Getting Better!",
    emoji: "⭐",
    description: "The more it practices, the better AI becomes!",
    funFact:
      "This process is called machine learning - learning by making mistakes!",
  },
];

const trainingImages: LabeledImage[] = [
  { id: 1, emoji: "🐱", label: "cat", isCorrect: true },
  { id: 2, emoji: "🐶", label: "dog", isCorrect: true },
  { id: 3, emoji: "🐱", label: "cat", isCorrect: true },
];

const patterns = [
  {
    pattern: "Pointy Ears",
    examples: ["🐱", "🐱"],
    guess: "usually cat",
  },
  {
    pattern: "Wet Nose",
    examples: ["🐶", "🐶"],
    guess: "usually dog",
  },
  {
    pattern: "Whiskers",
    examples: ["🐱"],
    guess: "usually cat",
  },
];

export default function HowAILearns() {
  const [stepState, setStepState] = useState<StepState>({
    currentStep: 0,
    step1Labels: {},
    step4Feedback: null,
    accuracy: 50,
  });

  const [showFunFact, setShowFunFact] = useState(false);

  const handleStep1Label = (id: number, label: string) => {
    const newLabels = { ...stepState.step1Labels };
    newLabels[id] = newLabels[id] === label ? null : label;
    setStepState({ ...stepState, step1Labels: newLabels });
  };

  const handleStep4Feedback = (correct: boolean) => {
    const newAccuracy = correct
      ? Math.min(stepState.accuracy + 8, 90)
      : Math.max(stepState.accuracy - 5, 40);
    setStepState({
      ...stepState,
      step4Feedback: correct,
      accuracy: newAccuracy,
    });
  };

  const goToStep = (stepIndex: number) => {
    setStepState({ ...stepState, currentStep: stepIndex });
    setShowFunFact(false);
  };

  const nextStep = () => {
    if (stepState.currentStep < steps.length - 1) {
      goToStep(stepState.currentStep + 1);
    }
  };

  const prevStep = () => {
    if (stepState.currentStep > 0) {
      goToStep(stepState.currentStep - 1);
    }
  };

  const currentStepData = steps[stepState.currentStep];

  const renderStepContent = () => {
    switch (stepState.currentStep) {
      case 0:
        // Collecting Examples
        return (
          <div className="space-y-6">
            <p className="text-lg text-amber-800">
              Here are some training examples. Try labeling them as 🐱 (cat) or
              🐶 (dog)!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trainingImages.map((img) => (
                <div
                  key={img.id}
                  className="bg-amber-100 rounded-xl p-6 text-center"
                >
                  <div className="text-6xl mb-4">{img.emoji}</div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleStep1Label(img.id, "cat")}
                      className={`block w-full py-2 px-4 rounded-lg font-bold transition-all ${
                        stepState.step1Labels[img.id] === "cat"
                          ? "bg-amber-600 text-white"
                          : "bg-white text-amber-800 border-2 border-amber-300 hover:bg-amber-50"
                      }`}
                    >
                      🐱 Cat
                    </button>
                    <button
                      onClick={() => handleStep1Label(img.id, "dog")}
                      className={`block w-full py-2 px-4 rounded-lg font-bold transition-all ${
                        stepState.step1Labels[img.id] === "dog"
                          ? "bg-amber-600 text-white"
                          : "bg-white text-amber-800 border-2 border-amber-300 hover:bg-amber-50"
                      }`}
                    >
                      🐶 Dog
                    </button>
                  </div>
                  {stepState.step1Labels[img.id] && (
                    <p className="mt-3 text-sm font-semibold text-amber-700">
                      You labeled it: {stepState.step1Labels[img.id]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 1:
        // Finding Patterns
        return (
          <div className="space-y-6">
            <p className="text-lg text-amber-800">
              AI found these patterns in the examples:
            </p>
            <div className="space-y-4">
              {patterns.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 border-2 border-amber-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-amber-700">
                      {p.pattern}
                    </span>
                    <span className="text-sm font-semibold text-orange-700 bg-orange-200 px-3 py-1 rounded-full">
                      {p.guess}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {p.examples.map((e, i) => (
                      <span key={i} className="text-4xl">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
              <p className="text-blue-900">
                💡 The AI learned that certain features help it tell cats and
                dogs apart!
              </p>
            </div>
          </div>
        );

      case 2:
        // Making a Guess
        return (
          <div className="space-y-6">
            <p className="text-lg text-amber-800">
              Now AI sees a NEW image and tries to guess what it is:
            </p>
            <div className="bg-amber-100 rounded-xl p-8 text-center mb-4">
              <div className="text-8xl mb-4 animate-pulse">🐱</div>
              <p className="text-amber-800 font-semibold">
                What is this? Let AI think...
              </p>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-yellow-800 mb-2">
                AI is thinking... 🤔
              </p>
              <p className="text-yellow-700">
                "I see pointy ears and whiskers... That looks like a 🐱!"
              </p>
              <p className="text-sm text-yellow-600 mt-3">
                (AI confidence: 85%)
              </p>
            </div>
          </div>
        );

      case 3:
        // Checking the Answer
        return (
          <div className="space-y-6">
            <p className="text-lg text-amber-800">
              Was AI's guess correct? Let's check!
            </p>
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8 text-center mb-4">
              <div className="text-8xl mb-4">🐱</div>
              <p className="text-2xl font-bold text-amber-800 mb-4">It's a CAT!</p>
            </div>

            {stepState.step4Feedback === null ? (
              <div className="space-y-3">
                <p className="text-center font-bold text-amber-800">
                  Did AI get it right?
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => handleStep4Feedback(true)}
                    className="px-8 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 text-lg"
                  >
                    👍 Yes, Correct!
                  </button>
                  <button
                    onClick={() => handleStep4Feedback(false)}
                    className="px-8 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 text-lg"
                  >
                    👎 No, Wrong!
                  </button>
                </div>
              </div>
            ) : stepState.step4Feedback ? (
              <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 text-center">
                <p className="text-2xl mb-2">🎉</p>
                <p className="text-lg font-bold text-green-800">Correct!</p>
                <p className="text-green-700 mt-2">
                  AI learned that this pattern means cat. It will get better
                  with more practice!
                </p>
              </div>
            ) : (
              <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6 text-center">
                <p className="text-2xl mb-2">💪</p>
                <p className="text-lg font-bold text-orange-800">
                  Learning from mistakes!
                </p>
                <p className="text-orange-700 mt-2">
                  Even though AI got this one wrong, it's learning! Making
                  mistakes helps AI get smarter.
                </p>
              </div>
            )}
          </div>
        );

      case 4:
        // Getting Better
        return (
          <div className="space-y-6">
            <p className="text-lg text-amber-800">
              Look how much better AI gets with more practice!
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-amber-800">Starting:</span>
                  <span className="text-2xl font-bold text-amber-700">50%</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-amber-600 h-full"
                    style={{ width: "50%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-amber-800">After feedback:</span>
                  <span className="text-2xl font-bold text-orange-600">
                    {stepState.accuracy}%
                  </span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-600 to-orange-500 h-full transition-all duration-500"
                    style={{ width: `${stepState.accuracy}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-amber-800">
                    After lots of practice:
                  </span>
                  <span className="text-2xl font-bold text-green-600">90%</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-green-500 h-full"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
              <p className="text-lg font-bold text-purple-900 mb-2">
                This is Machine Learning! 🧠
              </p>
              <p className="text-purple-800">
                AI learns by practicing thousands of times, checking answers,
                and improving. Just like when you practice the piano or play
                video games - the more you do it, the better you get!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 md:p-8">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center gap-2 text-sm text-amber-900">
          <Link href="/ai-for-kids" className="hover:underline">
            AI for Kids
          </Link>
          <span>/</span>
          <Link href="/ai-for-kids/explore" className="hover:underline">
            Explore
          </Link>
          <span>/</span>
          <span className="font-semibold">How AI Learns</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-700 mb-2">
              📚 How AI Learns 📚
            </h1>
            <p className="text-amber-600">
              Follow these 5 steps to understand machine learning!
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToStep(idx)}
                className={`w-10 h-10 rounded-full font-bold transition-all ${
                  idx === stepState.currentStep
                    ? "bg-amber-600 text-white scale-110"
                    : idx < stepState.currentStep
                      ? "bg-green-500 text-white"
                      : "bg-amber-200 text-amber-700 hover:bg-amber-300"
                } flex items-center justify-center`}
              >
                {idx < stepState.currentStep ? "✓" : idx + 1}
              </button>
            ))}
          </div>

          {/* Step Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-3">{currentStepData.emoji}</div>
            <h2 className="text-3xl font-bold text-amber-800 mb-2">
              Step {stepState.currentStep + 1}: {currentStepData.title}
            </h2>
            <p className="text-lg text-amber-700">{currentStepData.description}</p>
          </div>

          {/* Fun Fact Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowFunFact(!showFunFact)}
              className="text-amber-600 hover:text-amber-800 font-semibold underline"
            >
              {showFunFact ? "Hide Fun Fact ▲" : "Show Fun Fact ▼"}
            </button>
            {showFunFact && (
              <div className="mt-4 bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4">
                <p className="text-yellow-800">
                  💡 {currentStepData.funFact}
                </p>
              </div>
            )}
          </div>

          {/* Step Content */}
          <div className="mb-8 min-h-96">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={prevStep}
              disabled={stepState.currentStep === 0}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                stepState.currentStep === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-amber-500 text-white hover:bg-amber-600 hover:scale-105"
              }`}
            >
              ← Back
            </button>

            <div className="text-center">
              <p className="text-sm text-amber-700 font-semibold">
                Step {stepState.currentStep + 1} of {steps.length}
              </p>
            </div>

            <button
              onClick={nextStep}
              disabled={stepState.currentStep === steps.length - 1}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                stepState.currentStep === steps.length - 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105"
              }`}
            >
              Next →
            </button>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              href="/ai-for-kids/explore"
              className="text-amber-600 hover:text-amber-800 font-semibold"
            >
              ← Back to Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
