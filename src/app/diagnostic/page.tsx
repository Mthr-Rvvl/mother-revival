"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, calculateStage } from "@/lib/diagnostic-data";

type Screen = "welcome" | "question" | "capture";

export default function DiagnosticPage() {
  const router = useRouter();
  const [screen, setScreen] = useState<Screen>("welcome");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const question = questions[current];
  const progress = (current / questions.length) * 100;

  function handleSelect(index: number) {
    setSelected(index);
    const newAnswers = [...answers];
    newAnswers[current] = index;

    setTimeout(() => {
      if (current < questions.length - 1) {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(newAnswers[current + 1] ?? null);
      } else {
        setAnswers(newAnswers);
        setScreen("capture");
      }
    }, 420);
  }

  function goBack() {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(answers[current - 1] ?? null);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const stage = calculateStage(answers);
    router.push(`/result?stage=${stage}&name=${encodeURIComponent(firstName)}`);
  }

  // WELCOME SCREEN
  if (screen === "welcome") {
    return (
      <main className="min-h-screen bg-[#F5EFE6] flex flex-col">
        <header className="w-full py-5 border-b border-[#DDD4C5] text-center">
          <span className="font-serif italic font-light text-lg tracking-wide text-[#1F1814]">
            Mother <span className="not-italic font-normal ml-1">Revival</span>
          </span>
        </header>
        <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-20 pb-16">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#6B6157] mb-6">
            The Matrescence Identity Audit
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-tight text-[#1F1814] mb-6">
            Find out exactly<br />
            <em className="font-light text-[#8B4513]">where you are.</em>
          </h1>
          <p className="text-xl leading-relaxed text-[#1F1814] mb-6">
            You are not broken. You are between.
          </p>
          <div className="text-[#6B6157] text-base space-y-4 max-w-lg mb-10">
            <p>
              Matrescence is a known developmental transition — neurological, psychological, identity-deep. Most women move through it without language, without structure, and without permission to grieve what was while building what comes next.
            </p>
            <p>
              This audit will reflect what you already know but have not yet had the words for. By the end, you will know exactly where you are in the transition — and what comes next.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 pt-5 border-t border-[#DDD4C5] mb-10">
            {[
              { label: "10 questions", sub: "Designed to locate, not diagnose" },
              { label: "3 minutes", sub: "Honest answers serve you best" },
              { label: "Personalised result", sub: "With a clear strategic next step" },
            ].map((m) => (
              <div key={m.label} className="text-sm text-[#8A8175]">
                <strong className="block font-serif font-normal text-base text-[#1F1814] mb-0.5">{m.label}</strong>
                {m.sub}
              </div>
            ))}
          </div>
          <button
            onClick={() => setScreen("question")}
            className="bg-[#1F1814] text-[#F5EFE6] px-8 py-4 text-sm font-medium rounded hover:bg-[#8B4513] transition-all duration-200"
          >
            Begin the audit →
          </button>
        </div>
      </main>
    );
  }

  // CAPTURE SCREEN
  if (screen === "capture") {
    return (
      <main className="min-h-screen bg-[#F5EFE6] flex flex-col">
        <header className="w-full py-5 border-b border-[#DDD4C5] text-center">
          <span className="font-serif italic font-light text-lg tracking-wide text-[#1F1814]">
            Mother <span className="not-italic font-normal ml-1">Revival</span>
          </span>
        </header>
        <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-20 pb-16">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#1F1814] mb-6">
            Your result is <em className="font-light text-[#8B4513]">ready.</em>
          </h2>
          <p className="text-[#6B6157] text-lg mb-10 max-w-lg leading-relaxed">
            Enter your name and email to receive your full profile — your stage, the truth beneath it, your strategic next step, and the exact resource built for where you are right now.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-sm">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-[0.12em] uppercase text-[#6B6157]">First name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                className="px-4 py-3 border border-[#DDD4C5] rounded bg-[#FBF7EF] text-[#1F1814] text-base focus:outline-none focus:border-[#1F1814] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-[0.12em] uppercase text-[#6B6157]">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="px-4 py-3 border border-[#DDD4C5] rounded bg-[#FBF7EF] text-[#1F1814] text-base focus:outline-none focus:border-[#1F1814] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 self-start bg-[#1F1814] text-[#F5EFE6] px-8 py-4 text-sm font-medium rounded hover:bg-[#8B4513] transition-all duration-200 disabled:opacity-50"
            >
              {submitting ? "Loading..." : "Reveal my result →"}
            </button>
            <p className="text-xs text-[#8A8175] leading-relaxed max-w-xs">
              We send considered emails, infrequently. You can unsubscribe at any time. Your responses personalise your result — never shared.
            </p>
          </form>
        </div>
      </main>
    );
  }

  // QUESTION SCREEN
  return (
    <main className="min-h-screen bg-[#F5EFE6] flex flex-col">
      <header className="w-full py-5 border-b border-[#DDD4C5] text-center">
        <span className="font-serif italic font-light text-lg tracking-wide text-[#1F1814]">
          Mother <span className="not-italic font-normal ml-1">Revival</span>
        </span>
      </header>

      {/* Progress bar */}
      <div className="sticky top-0 z-10 bg-[#F5EFE6] px-6 pt-5 pb-1">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between text-[11px] font-medium tracking-[0.14em] uppercase text-[#8A8175] mb-3">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{question.block}</span>
          </div>
          <div className="h-0.5 bg-[#DDD4C5] overflow-hidden">
            <div
              className="h-full bg-[#1F1814] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-10 pb-16">
        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8A8175] mb-5">
          {question.block}
        </p>
        <h2 className="font-serif text-2xl md:text-[28px] leading-snug tracking-tight text-[#1F1814] mb-10">
          {question.question}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left px-5 py-4 border rounded-lg text-base leading-relaxed font-sans transition-all duration-200 ${
                selected === i
                  ? "bg-[#F2E6DA] border-[#8B4513] text-[#1F1814]"
                  : "bg-[#FBF7EF] border-[#DDD4C5] text-[#1F1814] hover:bg-[#F0E8DA] hover:border-[#8A8175] hover:translate-x-0.5"
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={goBack}
            disabled={current === 0}
            className="text-sm text-[#6B6157] hover:text-[#1F1814] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            ← Previous
          </button>
        </div>
      </div>
    </main>
  );
}
