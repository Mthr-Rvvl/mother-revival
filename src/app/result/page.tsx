"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { stageResults, type Stage } from "@/lib/diagnostic-data";

function ResultContent() {
  const searchParams = useSearchParams();
  const stage = (searchParams.get("stage") as Stage) ?? "wilderness";
  const result = stageResults[stage] ?? stageResults["wilderness"];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Email capture — will connect to a real provider later
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  const stageColors: Record<Stage, string> = {
    unravelling: "bg-[#8B6F6F]",
    wilderness: "bg-[#6B7B8D]",
    searching: "bg-[#7B8B6F]",
    rebuilding: "bg-[#8B7B6F]",
    arrival: "bg-[#6F7B8B]",
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5]">

      {/* Stage header */}
      <div className={`${stageColors[stage]} text-white px-6 py-16 text-center`}>
        <p className="text-xs tracking-[0.3em] uppercase opacity-70 mb-4">Your Result</p>
        <h1 className="text-3xl md:text-5xl font-light leading-tight mb-4">{result.title}</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">{result.subtitle}</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">

        {/* Description */}
        <section>
          <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">What this means</p>
          <p className="text-[#1C1917] text-lg leading-relaxed">{result.description}</p>
        </section>

        {/* Validation */}
        <section className="border-l-2 border-[#1C1917] pl-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">Why this is happening</p>
          <p className="text-[#1C1917] text-lg leading-relaxed">{result.validation}</p>
        </section>

        {/* What it costs */}
        <section className="bg-[#F5F0E8] px-8 py-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">What staying here costs</p>
          <p className="text-[#1C1917] text-lg leading-relaxed">{result.whatItCosts}</p>
        </section>

        {/* What's next */}
        <section>
          <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-4">What comes next</p>
          <p className="text-[#1C1917] text-lg leading-relaxed">{result.whatsNext}</p>
        </section>

        {/* Email capture */}
        <section className="border-t border-[#E5E0D8] pt-12">
          {!submitted ? (
            <>
              <h2 className="text-2xl text-[#1C1917] mb-3">Receive your full stage report.</h2>
              <p className="text-[#78716C] leading-relaxed mb-8">
                A deeper breakdown of {result.title} — including the specific identity variables at work, what progression looks like, and what support is built for exactly this stage. Sent directly to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 border border-[#E5E0D8] px-4 py-3 text-[#1C1917] bg-white placeholder-[#B8B0A8] focus:outline-none focus:border-[#1C1917] transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1C1917] text-[#FAF8F5] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#78716C] transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send my report"}
                </button>
              </form>
              <p className="text-xs text-[#78716C] mt-3">No spam. No performance. Just the information that belongs to this stage.</p>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-2xl text-[#1C1917] mb-3">Your report is on its way.</p>
              <p className="text-[#78716C] leading-relaxed">Check your inbox. And if it doesn&apos;t arrive within a few minutes, check your spam — it won&apos;t look like a marketing email.</p>
            </div>
          )}
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#E5E0D8]">
          <Link
            href="/diagnostic"
            className="text-sm text-[#78716C] hover:text-[#1C1917] tracking-widest uppercase transition-colors text-center sm:text-left"
          >
            ← Retake the diagnostic
          </Link>
          <Link
            href="/"
            className="text-sm text-[#78716C] hover:text-[#1C1917] tracking-widest uppercase transition-colors text-center sm:text-left sm:ml-auto"
          >
            Return home →
          </Link>
        </div>

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
