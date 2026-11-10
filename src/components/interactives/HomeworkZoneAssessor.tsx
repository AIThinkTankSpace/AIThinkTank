"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/**
 * AI Homework Zone Assessor + Honest-Use Disclosure Helper
 *
 * Teen describes an assignment and how they want to use AI.
 * Tool returns Green / Yellow / Red verdict with reasoning,
 * plus a copy-paste disclosure note they can attach to their submission.
 *
 * Static decision-tree logic — no backend, no AI API, zero cost per use.
 */

type AssignmentType =
  | "essay"
  | "math"
  | "research"
  | "project"
  | "exam-prep"
  | "other";

type UseIntent =
  | "explain"
  | "brainstorm"
  | "outline"
  | "check"
  | "grammar"
  | "write-all"
  | "other";

type Understanding = "fully" | "mostly" | "not-really";

type TeacherPolicy =
  | "allowed-disclosed"
  | "prohibited"
  | "unclear"
  | "allowed-free";

type Zone = "green" | "yellow" | "red";

interface Answers {
  assignment: AssignmentType | null;
  intent: UseIntent | null;
  understanding: Understanding | null;
  policy: TeacherPolicy | null;
  context: string;
}

interface Verdict {
  zone: Zone;
  title: string;
  summary: string;
  guidance: string[];
  disclosure: string | null;
}

const ASSIGNMENT_LABELS: Record<AssignmentType, string> = {
  essay: "Essay or written assignment",
  math: "Math / problem set",
  research: "Research project",
  project: "Presentation or group project",
  "exam-prep": "Studying for a test or exam",
  other: "Something else",
};

const INTENT_LABELS: Record<UseIntent, string> = {
  explain: "Explain a concept I don't understand",
  brainstorm: "Help me brainstorm ideas (I'll write)",
  outline: "Outline the structure for me",
  check: "Check my work after I've tried",
  grammar: "Fix my grammar or translate my writing",
  "write-all": "Write the whole thing for me",
  other: "Something else",
};

const UNDERSTANDING_LABELS: Record<Understanding, string> = {
  fully: "Yes — I can explain every part if my teacher asks",
  mostly: "Mostly — but there are parts I couldn't defend",
  "not-really": "Not really — AI did most of the thinking",
};

const POLICY_LABELS: Record<TeacherPolicy, string> = {
  "allowed-disclosed": "Allowed, with disclosure",
  prohibited: "Prohibited — no AI allowed",
  unclear: "Not discussed / unclear",
  "allowed-free": "Allowed, no restrictions",
};

function classify(a: Answers): Verdict {
  // RED triggers (most severe wins)
  if (a.intent === "write-all") {
    return {
      zone: "red",
      title: "This crosses the line.",
      summary:
        "Having AI write the whole assignment is academic dishonesty at nearly every school — even if the teacher's policy is unclear. The work needs to be yours.",
      guidance: [
        "Start over with AI as a tutor, not an author. Ask it to explain the topic, not produce the answer.",
        "Write the first draft yourself, in your own words, from your understanding.",
        "Then — if allowed — ask AI to point out weak spots. You still do every rewrite yourself.",
        "If you're out of time: ask your teacher for an extension. Honesty now beats a cheating penalty later.",
      ],
      disclosure: null,
    };
  }

  if (a.understanding === "not-really") {
    return {
      zone: "red",
      title: "You can't submit what you don't understand.",
      summary:
        "Even if the AI help was technically allowed, submitting work you can't defend verbally is risky — teachers are increasingly asking students to explain their work in person.",
      guidance: [
        "Go back through the AI's output line by line. For each piece, either understand it or remove it.",
        "Rewrite the parts you don't understand in your own words after learning them.",
        "Practice explaining your work out loud before you submit it.",
        "If you still can't explain it, don't submit it — talk to your teacher instead.",
      ],
      disclosure: null,
    };
  }

  if (
    a.policy === "prohibited" &&
    a.intent !== "explain" &&
    a.intent !== "check"
  ) {
    return {
      zone: "red",
      title: "Your teacher said no — that's the policy.",
      summary:
        "When AI is explicitly prohibited, even light assistance (outlining, grammar, brainstorming) violates the rule. Using it anyway is a direct choice to break policy.",
      guidance: [
        "Don't use AI on this assignment. Period.",
        "You CAN still use AI to study the TOPIC separately — for explanation, concept understanding, practice problems — as long as none of its output ends up in your submission.",
        "If you need help beyond explanations, ask your teacher directly. That's what teachers want.",
      ],
      disclosure: null,
    };
  }

  // GREEN zone
  if (
    (a.intent === "explain" ||
      a.intent === "brainstorm" ||
      a.intent === "check") &&
    (a.understanding === "fully" || a.understanding === "mostly") &&
    a.policy !== "prohibited"
  ) {
    return {
      zone: "green",
      title: "You're using AI the right way.",
      summary:
        "Using AI to explain concepts, brainstorm your own ideas, or check your completed work is exactly how it should be used — as a tutor, not a worker. Your thinking stays yours.",
      guidance: [
        "Keep a quick note of what you asked AI and what you did with the output. One line in your own notes is enough.",
        "If your teacher's policy says 'disclose AI use', attach the disclosure note below with your submission.",
        "Double-check any factual claims against your textbook or class notes — AI can be confidently wrong.",
      ],
      disclosure: buildDisclosure(a),
    };
  }

  // YELLOW zone (everything else that isn't RED)
  return {
    zone: "yellow",
    title: "Proceed carefully — and be transparent.",
    summary:
      "What you're doing isn't cheating, but it's in the gray area where teachers want to see transparency. A disclosure note protects you and shows integrity.",
    guidance: [
      "Do the thinking yourself first. Only use AI after you've attempted the work.",
      "If AI suggests structure or wording, rewrite it in your own voice — don't paste.",
      "Attach the disclosure note below. Being open removes the suspicion before it starts.",
      a.policy === "unclear"
        ? "Ask your teacher before submitting: 'Is it OK that I used AI to [specific action]?' Takes 30 seconds, saves a grade."
        : "Save a copy of your drafting process (early notes, outlines) in case your work is later questioned.",
    ],
    disclosure: buildDisclosure(a),
  };
}

function buildDisclosure(a: Answers): string {
  const actionMap: Record<UseIntent, string> = {
    explain:
      "help me understand the underlying concepts before I started writing",
    brainstorm: "help me brainstorm initial ideas, which I then developed and wrote in my own words",
    outline: "suggest a structural outline, which I rewrote and expanded in my own words",
    check:
      "check my completed work for errors — I wrote the original myself, then used the feedback to revise",
    grammar:
      "help me fix grammar and clarity in my own writing (not generate new content)",
    "write-all": "", // not reached in GREEN/YELLOW
    other: "assist me on part of this assignment",
  };

  const action = a.intent ? actionMap[a.intent] : "assist me on part of this assignment";

  const assignmentName = a.assignment
    ? ASSIGNMENT_LABELS[a.assignment].toLowerCase()
    : "this assignment";

  return `On this ${assignmentName}, I used an AI tool (e.g. ChatGPT, Claude, Gemini) to ${action}. The ideas, writing, and reasoning you see here are my own after that assistance. I verified any factual claims against my class notes and textbook sources.`;
}

export default function HomeworkZoneAssessor() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    assignment: null,
    intent: null,
    understanding: null,
    policy: null,
    context: "",
  });
  const [copied, setCopied] = useState(false);

  const verdict = useMemo(() => {
    if (
      answers.assignment &&
      answers.intent &&
      answers.understanding &&
      answers.policy
    ) {
      return classify(answers);
    }
    return null;
  }, [answers]);

  const canAdvance = (s: number): boolean => {
    if (s === 1) return answers.assignment !== null;
    if (s === 2) return answers.intent !== null;
    if (s === 3) return answers.understanding !== null;
    if (s === 4) return answers.policy !== null;
    return false;
  };

  const trackEvent = (name: string, params: Record<string, string> = {}) => {
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", name, {
        tool: "homework_zone_assessor",
        ...params,
      });
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({
      assignment: null,
      intent: null,
      understanding: null,
      policy: null,
      context: "",
    });
    setCopied(false);
  };

  const copyDisclosure = async () => {
    if (!verdict?.disclosure) return;
    try {
      await navigator.clipboard.writeText(verdict.disclosure);
      setCopied(true);
      trackEvent("disclosure_copied", { zone: verdict.zone });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable — user can still select manually
    }
  };

  // Intro / landing step
  if (step === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-4">
            AI for Teens · Free tool
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            AI Homework Zone Assessor
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Thinking about using AI on an assignment? Describe your situation in 4 quick questions. We'll tell you whether you're in the green, yellow, or red zone — and give you a disclosure note you can attach to your submission.
          </p>
        </div>

        <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-6 mb-8">
          <h2 className="text-sm font-semibold text-indigo-800 uppercase tracking-wide mb-3">
            How it works
          </h2>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>Answer 4 quick questions about your assignment and how you want to use AI.</li>
            <li>Get a classification — Green (safe), Yellow (proceed with transparency), or Red (crosses the line).</li>
            <li>Copy the disclosure note we generate and attach it with your submission.</li>
          </ol>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setStep(1);
              trackEvent("assessor_started");
            }}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition"
          >
            Start the assessment →
          </button>
          <p className="mt-4 text-xs text-gray-500">
            No signup. No account. Takes about 60 seconds.
          </p>
        </div>
      </div>
    );
  }

  // Result step
  if (step === 5 && verdict) {
    const zoneStyles: Record<Zone, { bg: string; border: string; text: string; badge: string; label: string }> = {
      green: {
        bg: "bg-emerald-50",
        border: "border-emerald-300",
        text: "text-emerald-900",
        badge: "bg-emerald-600 text-white",
        label: "GREEN ZONE",
      },
      yellow: {
        bg: "bg-amber-50",
        border: "border-amber-300",
        text: "text-amber-900",
        badge: "bg-amber-500 text-white",
        label: "YELLOW ZONE",
      },
      red: {
        bg: "bg-rose-50",
        border: "border-rose-300",
        text: "text-rose-900",
        badge: "bg-rose-600 text-white",
        label: "RED ZONE",
      },
    };
    const s = zoneStyles[verdict.zone];

    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <div className={`rounded-xl border-2 ${s.border} ${s.bg} p-6 sm:p-8 mb-6`}>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider ${s.badge} mb-4`}>
            {s.label}
          </span>
          <h2 className={`text-2xl sm:text-3xl font-bold ${s.text} mb-3`}>
            {verdict.title}
          </h2>
          <p className={`text-base leading-relaxed ${s.text} opacity-90`}>
            {verdict.summary}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            What to do next
          </h3>
          <ul className="space-y-3">
            {verdict.guidance.map((g, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {verdict.disclosure && (
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 mb-6">
            <h3 className="text-sm font-semibold text-indigo-800 uppercase tracking-wide mb-2">
              Your disclosure note
            </h3>
            <p className="text-xs text-indigo-700 mb-4">
              Copy this and attach it with your submission. It's a short, honest statement that shows integrity.
            </p>
            <div className="rounded-lg bg-white border border-indigo-200 p-4 mb-4 text-sm text-gray-800 leading-relaxed">
              {verdict.disclosure}
            </div>
            <button
              type="button"
              onClick={copyDisclosure}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition"
            >
              {copied ? "✓ Copied to clipboard" : "Copy disclosure note"}
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            type="button"
            onClick={restart}
            className="flex-1 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            Run another assessment
          </button>
          <Link
            href="/ai-for-teens"
            className="flex-1 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-gray-900 hover:bg-gray-800 text-white transition"
          >
            Explore more for teens
          </Link>
        </div>

        <p className="mt-8 text-xs text-center text-gray-500">
          This tool gives general guidance based on common policies. For your specific school, follow your teacher's rules first.
        </p>
      </div>
    );
  }

  // Question steps 1–4
  interface QuestionConfig<T extends string> {
    title: string;
    helper?: string;
    options: readonly T[];
    labels: Record<T, string>;
    value: T | null;
    onSelect: (v: T) => void;
  }

  const questions: Array<QuestionConfig<string>> = [
    {
      title: "What kind of assignment is it?",
      helper: "Pick the closest match.",
      options: Object.keys(ASSIGNMENT_LABELS),
      labels: ASSIGNMENT_LABELS as unknown as Record<string, string>,
      value: answers.assignment,
      onSelect: (v) => setAnswers({ ...answers, assignment: v as AssignmentType }),
    },
    {
      title: "How do you want AI to help?",
      helper: "Pick what best describes your plan.",
      options: Object.keys(INTENT_LABELS),
      labels: INTENT_LABELS as unknown as Record<string, string>,
      value: answers.intent,
      onSelect: (v) => setAnswers({ ...answers, intent: v as UseIntent }),
    },
    {
      title: "Will you be able to explain the final submission yourself?",
      helper: "Teachers are increasingly asking students to defend their work verbally.",
      options: Object.keys(UNDERSTANDING_LABELS),
      labels: UNDERSTANDING_LABELS as unknown as Record<string, string>,
      value: answers.understanding,
      onSelect: (v) => setAnswers({ ...answers, understanding: v as Understanding }),
    },
    {
      title: "What's your teacher's policy on AI for this assignment?",
      helper: "If you're not sure, pick the closest.",
      options: Object.keys(POLICY_LABELS),
      labels: POLICY_LABELS as unknown as Record<string, string>,
      value: answers.policy,
      onSelect: (v) => setAnswers({ ...answers, policy: v as TeacherPolicy }),
    },
  ];

  const q = questions[step - 1];
  const progressPct = (step / 5) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Question {step} of 4
          </span>
          <button
            type="button"
            onClick={restart}
            className="text-xs text-gray-500 hover:text-gray-700 underline"
          >
            Start over
          </button>
        </div>
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        {q.title}
      </h2>
      {q.helper && (
        <p className="text-sm text-gray-500 mb-6">{q.helper}</p>
      )}

      <div className="space-y-3 mb-8">
        {q.options.map((opt) => {
          const selected = q.value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => q.onSelect(opt)}
              className={`w-full text-left px-5 py-4 rounded-lg border-2 transition ${
                selected
                  ? "border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold"
                  : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/30"
              }`}
            >
              <span className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded-full border-2 ${
                    selected
                      ? "border-indigo-600 bg-indigo-600"
                      : "border-gray-300 bg-white"
                  } flex items-center justify-center`}
                >
                  {selected && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </span>
                <span>{q.labels[opt]}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="flex-1 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            ← Back
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            if (!canAdvance(step)) return;
            const next = step + 1;
            setStep(next);
            if (next === 5) {
              trackEvent("assessor_completed", {
                zone: verdict?.zone ?? "unknown",
              });
            }
          }}
          disabled={!canAdvance(step)}
          className={`flex-1 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-lg transition ${
            canAdvance(step)
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {step === 4 ? "See my verdict →" : "Next →"}
        </button>
      </div>
    </div>
  );
}
