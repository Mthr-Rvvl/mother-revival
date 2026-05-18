"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { stageResults, type Stage } from "@/lib/diagnostic-data";

const stageColors: Record<Stage, string> = {
  unravelling: "bg-[#8B6F6F]",
  wilderness: "bg-[#6B7B8D]",
  searching: "bg-[#7B8B6F]",
  rebuilding: "bg-[#8B7B6F]",
  arrival: "bg-[#6F7B8B]",
};

function ResultContent() {
  const searchParams = useSearchParams();
  const stage = (searchParams.get("stage") as Stage) ?? "wilderness";
  const result = stageResults[stage] ?? stageResults["wilderness"];

  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    // Email capture — will connect to a real provider later
    await new Promise((r) => setTimeout(r, 800));
    setUnlocked(true);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">

      {/* Stage header — always visible */}
      <div className={`${stageColors[stage]} text-white px-6 py-16 text-center`}>
        <p className="text-xs tracking-[0.3em] uppercase opacity-70 mb-4">Your Result</p>
        <h1 className="text-3xl md:text-5xl font-light leading-tight mb-4">{result.title}</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">{result.subtitle}</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">

        {!unlocked ? (
          /* EMAIL GATE */
          <div className="space-y-10">

            {/* Teaser — just enough to confirm accuracy */}
            <div className="space-y-4 text-[#1C1917] text-lg leading-relaxed">
              <p>{result.description.split(".").slice(0, 2).join(".")}.</p>
              <p className="text-[#78716C] italic">
                There is more to this result — a precise explanation of what is happening in your identity, what staying here costs, and what the path through looks like.
              </p>
            </div>

            {/* Divider with blur hint */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF8F5] z-10 h-16" />
              <div className="blur-sm opacity-40 pointer-events-none select-none space-y-3 text-[#1C1917] text-base leading-relaxed">
                <p>{result.validation.slice(0, 120)}...</p>
                <p>{result.whatItCosts.slice(0, 80)}...</p>
              </div>
            </div>

            {/* Email capture */}
            <div className="border-t border-[#E5E0D8] pt-10">
              <h2 className="text-2xl text-[#1C1917] mb-3">Receive your full result.</h2>
              <p className="text-[#78716C] leading-relaxed mb-8">
                Enter your email and we&apos;ll send you the complete breakdown — what is happening, why, what it costs to stay here, and what comes next.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="your@email.com"
                  className="flex-1 border border-[#E5E0D8] px-4 py-3 text-[#1C1917] bg-white placeholder-[#B8B0A8] focus:outline-none focus:border-[#1C1917] transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1C1917] text-[#FAF8F5] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#78716C] transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Unlock my result"}
                </button>
              </form>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              <p className="text-xs text-[#78716C] mt-3">No spam. No performance. Just the information that belongs to this stage.</p>
            </div>

          </div>

        ) : (

          /* FULL RESULT — revealed after email */
          <div className="space-y-16">

            <section>
              <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">What this means</p>
              <p className="text-[#1C1917] text-lg leading-relaxed">{result.description}</p>
            </section>

            <section className="border-l-2 border-[#1C1917] pl-6">
              <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">Why this is happening</p>
              <p className="text-[#1C1917] text-lg leading-relaxed">{result.validation}</p>
            </section>

            <section className="bg-[#F5F0E8] px-8 py-8">
              <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">What staying here costs</p>
              <p className="text-[#1C1917] text-lg leading-relaxed">{result.whatItCosts}</p>
            </section>

            <section>
              <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">What comes next</p>
              <p className="text-[#1C1917] text-lg leading-relaxed">{result.whatsNext}</p>
            </section>

            <section className="border-t border-[#E5E0D8] pt-10 text-center">
              <p className="text-[#78716C] text-sm mb-2">Your full result has been sent to</p>
              <p className="text-[#1C1917] font-medium mb-8">{email}</p>
              <p className="text-[#78716C] leading-relaxed max-w-md mx-auto">
                If it doesn&apos;t arrive within a few minutes, check your spam — it won&apos;t look like a marketing email.
              </p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#E5E0D8]">
              <Link
                href="/diagnostic"
                className="text-sm text-[#78716C] hover:text-[#1C1917] tracking-widest uppercase transition-colors"
              >
                ← Retake the diagnostic
              </Link>
              <Link
                href="/"
                className="text-sm text-[#78716C] hover:text-[#1C1917] tracking-widest uppercase transition-colors sm:ml-auto"
              >
                Return home →
              </Link>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <p className="text-[#78716C] tracking-widest uppercase text-sm">Loading your result...</p>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
