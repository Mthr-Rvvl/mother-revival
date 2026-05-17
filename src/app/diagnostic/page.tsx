"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, calculateStage, type Stage } from "@/lib/diagnostic-data";

export default function DiagnosticPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Stage[]>([]);
  const [selected, setSelected] = useState<Stage | null>(null);

  const question = questions[current];
  const progress = ((current) / questions.length) * 100;
  const isLast = current === questions.length - 1;

  function handleSelect(stage: Stage) {
    setSelected(stage);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];

    if (isLast) {
      const stage = calculateStage(newAnswers);
      router.push(`/result?stage=${stage}`);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] flex flex-col">

      {/* Header */}
      <div className="px-8 py-6 border-b border-[#E5E0D8]">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-xs tracking-[0.2em] uppercase text-[#78716C]">Mother Revival · Diagnostic</span>
          <span className="text-xs text-[#78716C]">{current + 1} of {questions.length}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 bg-[#E5E0D8]">
        <div
          className="h-full bg-[#1C1917] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center px-6 py-16 max-w-2xl mx-auto w-full">
        <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-6">
          Question {current + 1}
        </p>
        <h2 className="text-2xl md:text-3xl text-[#1C1917] leading-snug mb-3">
          {question.question}
        </h2>
        {question.subtext && (
          <p className="text-[#78716C] text-sm mb-10">{question.subtext}</p>
        )}
        {!question.subtext && <div className="mb-10" />}

        <div className="space-y-4">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelect(option.stage)}
              className={`w-full text-left px-6 py-5 border transition-all duration-200 ${
                selected === option.stage
                  ? "border-[#1C1917] bg-[#1C1917] text-[#FAF8F5]"
                  : "border-[#E5E0D8] bg-white text-[#1C1917] hover:border-[#78716C]"
              }`}
            >
              <span className="text-base leading-relaxed">{option.text}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          {current > 0 ? (
            <button
              onClick={() => {
                setCurrent(current - 1);
                setAnswers(answers.slice(0, -1));
                setSelected(answers[current - 1] ?? null);
              }}
              className="text-sm text-[#78716C] hover:text-[#1C1917] transition-colors tracking-widest uppercase"
            >
              ← Back
            </button>
          ) : (
            <span />
          )}

          <button
            onClick={handleNext}
            disabled={!selected}
            className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-200 ${
              selected
                ? "bg-[#1C1917] text-[#FAF8F5] hover:bg-[#78716C] cursor-pointer"
                : "bg-[#E5E0D8] text-[#78716C] cursor-not-allowed"
            }`}
          >
            {isLast ? "See my result →" : "Next →"}
          </button>
        </div>
      </div>
    </main>
  );
}
