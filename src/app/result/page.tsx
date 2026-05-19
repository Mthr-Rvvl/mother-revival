"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { stageResults, type Stage } from "@/lib/diagnostic-data";

function ResultContent() {
  const searchParams = useSearchParams();
  const stage = (searchParams.get("stage") as Stage) ?? "wilderness";
  const name = searchParams.get("name") ?? "";
  const result = stageResults[stage] ?? stageResults["wilderness"];
  const namePrefix = name ? `${name}, ` : "";

  return (
    <main className="min-h-screen bg-[#F5EFE6]">

      <header className="w-full py-5 border-b border-[#DDD4C5] text-center">
        <span className="font-serif italic font-light text-lg tracking-wide text-[#1F1814]">
          Mother <span className="not-italic font-normal ml-1">Revival</span>
        </span>
      </header>

      <div className="max-w-2xl mx-auto px-6 pt-12 pb-20 space-y-12">

        {/* Archetype heading */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#6B6157] mb-4">
            Stage {result.stageNumber} of IV · Your Profile
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-tight text-[#1F1814]">
            {namePrefix}your profile is<br />
            <em className="font-light text-[#8B4513]">{result.title}.</em>
          </h1>
        </div>

        {/* Landscape */}
        <section>
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8B4513] mb-4">
            The Current Landscape
          </p>
          <p className="text-[#1F1814] text-lg leading-relaxed">{result.landscape}</p>
        </section>

        {/* Truth — hidden for Stage I to reduce cognitive load */}
        {result.truth && stage !== "unravelling" && (
          <section className="border-l-2 border-[#8B4513] pl-6">
            <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8B4513] mb-4">
              The Truth
            </p>
            <p className="text-[#1F1814] text-lg leading-relaxed">{result.truth}</p>
          </section>
        )}

        {/* Next step */}
        <section className="bg-[#FBF7EF] border border-[#DDD4C5] rounded-xl px-8 py-8">
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8B4513] mb-4">
            Your Clean Next Step
          </p>
          <p className="text-[#1F1814] text-lg leading-relaxed">{result.nextStep}</p>
        </section>

        {/* Resource — Stage IV gets dual offer, others get single */}
        {result.secondaryResource ? (
          <section>
            <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8B4513] mb-6">
              The Choice for You
            </p>
            <div className="space-y-4">
              {/* Primary option */}
              <div className="bg-[#1F1814] text-[#F5EFE6] rounded-xl p-8">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#B07050] mb-3">
                  Option 1 · Independent Execution
                </p>
                <h3 className="font-serif text-2xl leading-snug text-[#F5EFE6] mb-2">
                  {result.resourceName}
                </h3>
                <p className="text-[#B07050] font-medium mb-4">{result.resourcePrice}</p>
                <p className="text-[rgba(245,239,230,0.78)] text-base leading-relaxed mb-6">
                  {result.resource}
                </p>
                <button className="bg-[#F5EFE6] text-[#1F1814] px-6 py-3 text-sm font-medium rounded hover:bg-white hover:text-[#8B4513] transition-all duration-200">
                  Get the Rebuilding Framework →
                </button>
              </div>
              {/* Secondary option */}
              <div className="bg-[#1F1814] text-[#F5EFE6] rounded-xl p-8 border-2 border-[#8B4513]">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#B07050] mb-3">
                  Option 2 · Full Integration · Recommended
                </p>
                <h3 className="font-serif text-2xl leading-snug text-[#F5EFE6] mb-2">
                  {result.secondaryResourceName}
                </h3>
                <p className="text-[#B07050] font-medium mb-4">{result.secondaryResourcePrice}</p>
                <p className="text-[rgba(245,239,230,0.78)] text-base leading-relaxed mb-6">
                  {result.secondaryResource}
                </p>
                <button className="bg-[#8B4513] text-[#F5EFE6] px-6 py-3 text-sm font-medium rounded hover:bg-[#B07050] transition-all duration-200">
                  Get the Full Arc Bundle →
                </button>
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-[#1F1814] text-[#F5EFE6] rounded-xl p-10">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#B07050] mb-4">
              The Resource for You
            </p>
            <h3 className="font-serif text-3xl leading-snug tracking-tight text-[#F5EFE6] mb-2">
              {result.resourceName}
            </h3>
            <p className="text-[#B07050] font-medium text-lg mb-5">{result.resourcePrice}</p>
            <p className="text-[rgba(245,239,230,0.78)] text-base leading-relaxed mb-8">
              {result.resource}
            </p>
            <button className="bg-[#F5EFE6] text-[#1F1814] px-8 py-4 text-sm font-medium rounded hover:bg-white hover:text-[#8B4513] transition-all duration-200">
              Get {result.resourceName} →
            </button>
          </section>
        )}

        {/* Clinical boundary */}
        <div className="border border-[#DDD4C5] rounded-lg p-6">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#6B6157] mb-3">
            Important · Please read
          </p>
          <p className="text-sm text-[#6B6157] leading-relaxed">
            The Mother Revival framework is an educational and developmental methodology. It is not a substitute for professional mental health support. If you are experiencing persistent low mood, inability to function, thoughts of harming yourself or others, or any experience that feels beyond what is described here, please reach out to a licensed mental health professional or crisis service.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4 border-t border-[#DDD4C5]">
          <Link
            href="/diagnostic"
            className="text-sm text-[#6B6157] hover:text-[#1F1814] tracking-widest uppercase transition-colors"
          >
            ← Retake the audit
          </Link>
          <Link
            href="/"
            className="text-sm text-[#6B6157] hover:text-[#1F1814] tracking-widest uppercase transition-colors"
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
      <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center">
        <p className="text-[#6B6157] tracking-widest uppercase text-sm">Loading your result...</p>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
