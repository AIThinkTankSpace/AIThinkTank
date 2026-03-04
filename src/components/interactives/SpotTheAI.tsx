"use client";

import { useState } from "react";
import Link from "next/link";

interface GameItem {
  id: number;
  emoji: string;
  name: string;
  usesAI: boolean;
  explanation: string;
}

interface GameState {
  selectedItems: Set<number>;
  answered: boolean;
  score: number;
  currentRound: number;
}

const gameItems: GameItem[] = [
  {
    id: 1,
    emoji: "📺",
    name: "Netflix",
    usesAI: true,
    explanation:
      "Netflix uses AI to recommend movies and shows you might like based on what you've watched!",
  },
  {
    id: 2,
    emoji: "🚴",
    name: "Bicycle",
    usesAI: false,
    explanation:
      "A bicycle is just two wheels and pedals - it doesn't need AI to work!",
  },
  {
    id: 3,
    emoji: "🔊",
    name: "Alexa/Siri",
    usesAI: true,
    explanation:
      "Smart speakers use AI to understand your voice and answer your questions!",
  },
  {
    id: 4,
    emoji: "🪥",
    name: "Toothbrush",
    usesAI: false,
    explanation:
      "Regular toothbrushes help keep your teeth clean without any AI. Even electric ones are pretty simple!",
  },
  {
    id: 5,
    emoji: "🗺️",
    name: "Google Maps",
    usesAI: true,
    explanation:
      "Google Maps uses AI to figure out the fastest route, avoid traffic, and tell you where to go!",
  },
  {
    id: 6,
    emoji: "✏️",
    name: "Pencil",
    usesAI: false,
    explanation:
      "A pencil is just wood and graphite - great for writing, but no AI needed!",
  },
  {
    id: 7,
    emoji: "🎬",
    name: "YouTube Recommendations",
    usesAI: true,
    explanation:
      "YouTube uses AI to suggest videos you might want to watch based on what you've liked before!",
  },
  {
    id: 8,
    emoji: "❄️",
    name: "Refrigerator",
    usesAI: false,
    explanation:
      "Regular refrigerators keep food cold without AI. Smart fridges might have some AI features, but most don't!",
  },
  {
    id: 9,
    emoji: "✔️",
    name: "Spell Check",
    usesAI: true,
    explanation:
      "Spell check uses AI to spot typos and suggest corrections as you type!",
  },
  {
    id: 10,
    emoji: "☂️",
    name: "Umbrella",
    usesAI: false,
    explanation: "An umbrella keeps you dry - simple as that! No AI needed.",
  },
  {
    id: 11,
    emoji: "🤳",
    name: "Face Filters (Snapchat)",
    usesAI: true,
    explanation:
      "Face filters use AI to recognize your face and add fun effects like dog ears or sparkles!",
  },
  {
    id: 12,
    emoji: "🪢",
    name: "Jump Rope",
    usesAI: false,
    explanation:
      "A jump rope is just rope - it's a great toy, but it doesn't use AI!",
  },
];

export default function SpotTheAI() {
  const [gameState, setGameState] = useState<GameState>({
    selectedItems: new Set(),
    answered: false,
    score: 0,
    currentRound: 0,
  });

  const handleItemClick = (id: number) => {
    if (gameState.answered) return;

    const newSelected = new Set(gameState.selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setGameState({ ...gameState, selectedItems: newSelected });
  };

  const checkAnswers = () => {
    let correctCount = 0;
    gameState.selectedItems.forEach((id) => {
      const item = gameItems.find((i) => i.id === id);
      if (item?.usesAI) {
        correctCount++;
      }
    });

    // Also count items that use AI but weren't selected (false negatives don't count as wrong in this version)
    const aiItems = gameItems.filter((i) => i.usesAI).length;
    const correctlySelected = Array.from(gameState.selectedItems).filter(
      (id) => gameItems.find((i) => i.id === id)?.usesAI
    ).length;

    setGameState({
      ...gameState,
      answered: true,
      score: correctlySelected,
    });
  };

  const playAgain = () => {
    setGameState({
      selectedItems: new Set(),
      answered: false,
      score: 0,
      currentRound: gameState.currentRound + 1,
    });
  };

  const getStarRating = () => {
    if (gameState.score === 6) return "⭐⭐⭐";
    if (gameState.score >= 5) return "⭐⭐";
    if (gameState.score >= 4) return "⭐";
    return "Keep trying!";
  };

  const aiItemsCount = gameItems.filter((i) => i.usesAI).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 md:p-8">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="flex items-center gap-2 text-sm text-amber-900">
          <Link href="/ai-for-kids" className="hover:underline">
            AI for Kids
          </Link>
          <span>/</span>
          <Link href="/ai-for-kids/explore" className="hover:underline">
            Explore
          </Link>
          <span>/</span>
          <span className="font-semibold">Spot the AI</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-amber-700 mb-3">
              🎯 Spot the AI! 🎯
            </h1>
            <p className="text-lg text-amber-700 mb-6">
              Can you find which things use AI? Tap the items you think use AI,
              then check your answers!
            </p>

            {!gameState.answered && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <div className="bg-amber-100 rounded-lg px-4 py-2">
                  <p className="text-sm text-amber-900">
                    <span className="font-bold">Challenge:</span> Find all{" "}
                    {aiItemsCount} items that use AI
                  </p>
                </div>
                {gameState.selectedItems.size > 0 && (
                  <div className="bg-orange-100 rounded-lg px-4 py-2">
                    <p className="text-sm text-orange-900">
                      <span className="font-bold">Selected:</span>{" "}
                      {gameState.selectedItems.size}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {gameItems.map((item) => {
            const isSelected = gameState.selectedItems.has(item.id);
            const isCorrect =
              gameState.answered && isSelected && item.usesAI;
            const isWrong = gameState.answered && isSelected && !item.usesAI;
            const isMissed =
              gameState.answered && !isSelected && item.usesAI;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                disabled={gameState.answered}
                className={`p-6 rounded-2xl transition-all transform text-center ${
                  isCorrect
                    ? "bg-green-400 text-white scale-110 shadow-lg border-4 border-green-600"
                    : isWrong
                      ? "bg-red-400 text-white scale-95 border-4 border-red-600 opacity-75"
                      : isMissed
                        ? "bg-amber-200 border-4 border-amber-600 opacity-50"
                        : isSelected
                          ? "bg-amber-600 text-white scale-105 shadow-lg border-4 border-amber-700"
                          : "bg-white border-4 border-amber-200 hover:border-amber-400 hover:shadow-lg"
                }  ${gameState.answered ? "cursor-default" : "cursor-pointer"}
                `}
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <p className="font-bold text-sm sm:text-base">{item.name}</p>

                {gameState.answered && (
                  <div className="mt-2 text-xs font-bold">
                    {isCorrect && "✓ Uses AI!"}
                    {isWrong && "✗ No AI"}
                    {isMissed && "! You missed this"}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons or Results */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {!gameState.answered ? (
            <div className="text-center">
              <button
                onClick={checkAnswers}
                disabled={gameState.selectedItems.size === 0}
                className={`px-8 py-4 font-bold text-lg rounded-xl transition-all transform ${
                  gameState.selectedItems.size === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:scale-105"
                }`}
              >
                Check Answers
              </button>
              <p className="text-sm text-amber-700 mt-4">
                You've selected {gameState.selectedItems.size}/{aiItemsCount}{" "}
                items
              </p>
            </div>
          ) : (
            <div className="text-center">
              {/* Results */}
              <div className="mb-8">
                <p className="text-5xl mb-4">🎉</p>
                <h2 className="text-3xl font-bold text-amber-800 mb-2">
                  You found {gameState.score}/{aiItemsCount} items!
                </h2>
                <p className="text-2xl text-orange-600 font-bold mb-6">
                  {getStarRating()}
                </p>

                {gameState.score === aiItemsCount && (
                  <div className="bg-green-100 border-2 border-green-400 rounded-xl p-4 mb-6">
                    <p className="text-lg text-green-800 font-bold">
                      🌟 Perfect Score! You're an AI Expert! 🌟
                    </p>
                  </div>
                )}
              </div>

              {/* Explanations */}
              <div className="bg-amber-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="text-xl font-bold text-amber-800 mb-4">
                  Did You Know? 🤓
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {gameItems
                    .filter((item) => gameState.selectedItems.has(item.id))
                    .map((item) => (
                      <div
                        key={item.id}
                        className={`p-3 rounded-lg ${
                          item.usesAI
                            ? "bg-green-100 border-l-4 border-green-500"
                            : "bg-red-100 border-l-4 border-red-500"
                        }`}
                      >
                        <p className="font-bold text-amber-900">
                          {item.emoji} {item.name}
                        </p>
                        <p className="text-sm text-amber-800 mt-1">
                          {item.explanation}
                        </p>
                      </div>
                    ))}

                  {gameItems
                    .filter((item) => item.usesAI && !gameState.selectedItems.has(item.id))
                    .map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-lg bg-yellow-100 border-l-4 border-yellow-600"
                      >
                        <p className="font-bold text-amber-900">
                          {item.emoji} {item.name} (You missed this one!)
                        </p>
                        <p className="text-sm text-amber-800 mt-1">
                          {item.explanation}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Play Again Button */}
              <button
                onClick={playAgain}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Play Again
              </button>
            </div>
          )}
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
  );
}
