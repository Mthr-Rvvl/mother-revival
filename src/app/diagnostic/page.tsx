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
      <main className="min-h-screen bg-[#F4EFE7] flex flex-col">
        <header className="w-full py-6 border-b border-[#ECE5D8] text-center">
          <span className="font-serif italic font-light text-lg tracking-wide text-[#2E2820]">
            Mother <span className="not-italic font-normal ml-1">Revival</span>
          </span>
        </header>
        <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-20 pb-16">
          <p className="text-[11px] font-normal tracking-[0.28em] uppercase text-[#9C7A54] mb-8">
            The Identity Audit
          </p>
          <h1 className="font-serif font-light text-4xl md:text-[52px] leading-[1.12] tracking-tight text-[#2E2820] mb-10">
            You used to know who you were. Then you became a mother. And somewhere in between,{" "}
            <em className="font-light text-[#9C7A54]">you disappeared.</em>
          </h1>
          <div className="text-lg leading-relaxed space-y-5 max-w-lg mb-12 font-light">
            <p className="text-[#7A6F61]">
              You love your kids. That&apos;s not the question. But quietly — maybe only at night when everything finally goes still — you wonder where the woman went. The one who had opinions. Energy. A sense of what she wanted.
            </p>
            <p className="text-[#2E2820] font-normal">
              You&apos;re not depressed. You&apos;re not ungrateful. You&apos;re not failing.
            </p>
            <p className="text-[#7A6F61]">
              There is actually a name for what you&apos;re going through. And there&apos;s a map.
            </p>
            <p className="text-[#7A6F61]">
              This 10-question audit takes 3 minutes. By the end you&apos;ll know exactly where you are — and for the first time, what comes next.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 pt-6 border-t border-[#E3DACB] mb-12">
            {[
              { label: "10 questions", sub: "3 minutes" },
              { label: "Free", sub: "No strings attached" },
              { label: "Your result", sub: "With a clear next step" },
            ].map((m) => (
              <div key={m.label} className="text-sm text-[#9C9183] font-light">
                <strong className="block font-serif italic font-normal text-base text-[#2E2820] mb-0.5">{m.label}</strong>
                {m.sub}
              </div>
            ))}
          </div>
          <button
            onClick={() => setScreen("question")}
            className="bg-[#2E2820] text-[#F4EFE7] px-10 py-4 text-[13px] font-normal tracking-[0.18em] uppercase rounded-sm hover:bg-[#9C7A54] transition-all duration-300"
          >
            Show me where I am →
          </button>
        </div>
      </main>
    );
  }

  // CAPTURE SCREEN
  if (screen === "capture") {
    return (
      <main className="min-h-screen bg-[#F4EFE7] flex flex-col">
        <header className="w-full py-6 border-b border-[#ECE5D8] text-center">
          <span className="font-serif italic font-light text-lg tracking-wide text-[#2E2820]">
            Mother <span className="not-italic font-normal ml-1">Revival</span>
          </span>
        </header>
        <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-20 pb-16">
          <p className="text-[11px] font-normal tracking-[0.28em] uppercase text-[#9C7A54] mb-8">
            Analysis Complete
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.12] tracking-tight text-[#2E2820] mb-6">
            Your result is <em className="font-light text-[#9C7A54]">ready.</em>
          </h2>
          <p className="text-[#7A6F61] text-lg font-light mb-12 max-w-lg leading-relaxed">
            Enter your name and email to receive your full profile — your stage, the truth beneath it, and the exact next step built for where you are right now.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-sm">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-normal tracking-[0.2em] uppercase text-[#9C7A54]">First name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                className="px-4 py-3.5 border border-[#E3DACB] rounded-sm bg-[#FBF8F2] text-[#2E2820] text-base font-light focus:outline-none focus:border-[#9C7A54] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-normal tracking-[0.2em] uppercase text-[#9C7A54]">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="px-4 py-3.5 border border-[#E3DACB] rounded-sm bg-[#FBF8F2] text-[#2E2820] text-base font-light focus:outline-none focus:border-[#9C7A54] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 self-start bg-[#2E2820] text-[#F4EFE7] px-10 py-4 text-[13px] font-normal tracking-[0.18em] uppercase rounded-sm hover:bg-[#9C7A54] transition-all duration-300 disabled:opacity-50"
            >
              {submitting ? "One moment..." : "Reveal my result →"}
            </button>
            <p className="text-xs text-[#9C9183] font-light leading-relaxed max-w-xs">
              We send considered emails, infrequently. You can unsubscribe at any time. Your responses personalise your result — never shared.
            </p>
          </form>
        </div>
      </main>
    );
  }

  // QUESTION SCREEN
  return (
    <main className="min-h-screen bg-[#F4EFE7] flex flex-col">
      <header className="w-full py-6 border-b border-[#ECE5D8] text-center">
        <span className="font-serif italic font-light text-lg tracking-wide text-[#2E2820]">
          Mother <span className="not-italic font-normal ml-1">Revival</span>
        </span>
      </header>

      {/* Progress bar */}
      <div className="sticky top-0 z-10 bg-[#F4EFE7] px-6 pt-6 pb-1">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between text-[10px] font-normal tracking-[0.22em] uppercase text-[#9C9183] mb-3">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{question.block}</span>
          </div>
          <div className="h-px bg-[#E3DACB] overflow-hidden">
            <div
              className="h-full bg-[#9C7A54] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 pt-12 pb-16">
        <h2 className="font-serif font-light text-[26px] md:text-[32px] leading-[1.3] tracking-tight text-[#2E2820] mb-12">
          {question.question}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left px-6 py-5 border rounded-sm text-[15px] leading-relaxed font-light transition-all duration-300 ${
                selected === i
                  ? "bg-[#EFE7D9] border-[#9C7A54] text-[#2E2820]"
                  : "bg-[#FBF8F2] border-[#E3DACB] text-[#2E2820] hover:bg-[#F4EDE2] hover:border-[#C9BBA4]"
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={goBack}
            disabled={current === 0}
            className="text-[12px] tracking-[0.18em] uppercase text-[#9C9183] hover:text-[#2E2820] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            ← Previous
          </button>
        </div>
      </div>
    </main>
  );
}
