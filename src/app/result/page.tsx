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

  return (
    <main className="min-h-screen bg-[#F4EFE7]">

      <header className="w-full py-6 border-b border-[#ECE5D8] text-center">
        <span className="font-serif italic font-light text-lg tracking-wide text-[#2E2820]">
          Mother <span className="not-italic font-normal ml-1">Revival</span>
        </span>
      </header>

      <div className="max-w-2xl mx-auto px-6 pt-14 pb-20 space-y-14">

        {/* Archetype heading */}
        <div>
          <p className="text-[11px] font-normal tracking-[0.28em] uppercase text-[#9C7A54] mb-5">
            Your Matrescence Profile · Stage {result.stageNumber} of IV
          </p>
          <h1 className="font-serif font-light text-5xl md:text-6xl leading-[1.08] tracking-tight text-[#2E2820]">
            {name ? `${name}, you` : "You"} are in<br />
            <em className="font-light text-[#9C7A54]">{result.title}.</em>
          </h1>
        </div>

        {/* Landscape */}
        <section>
          <p className="text-[11px] font-normal tracking-[0.22em] uppercase text-[#9C7A54] mb-5">
            The Current Landscape
          </p>
          <p className="text-[#2E2820] text-lg font-light leading-relaxed">{result.landscape}</p>
        </section>

        {/* Truth — hidden for Stage I to reduce cognitive load */}
        {result.truth && stage !== "unravelling" && (
          <section className="border-l border-[#9C7A54] pl-7">
            <p className="text-[11px] font-normal tracking-[0.22em] uppercase text-[#9C7A54] mb-5">
              The Truth
            </p>
            <p className="font-serif italic font-light text-[22px] leading-[1.5] text-[#2E2820]">{result.truth}</p>
          </section>
        )}

        {/* Next step */}
        <section className="bg-[#FBF8F2] border border-[#ECE5D8] rounded-sm px-8 py-9">
          <p className="text-[11px] font-normal tracking-[0.22em] uppercase text-[#9C7A54] mb-5">
            Your Clean Next Step
          </p>
          <p className="text-[#2E2820] text-lg font-light leading-relaxed">{result.nextStep}</p>
        </section>

        {/* Resource — Stage IV gets dual offer, others get single */}
        {result.secondaryResource ? (
          <section>
            <p className="text-[11px] font-normal tracking-[0.22em] uppercase text-[#9C7A54] mb-6">
              The Choice for You
            </p>
            <div className="space-y-5">
              <div className="bg-[#2E2820] text-[#F4EFE7] rounded-sm p-9">
                <p className="text-[10px] font-normal tracking-[0.24em] uppercase text-[#C9A87C] mb-4">
                  Option One · Independent Execution
                </p>
                <h3 className="font-serif font-light text-2xl leading-snug text-[#F4EFE7] mb-2">
                  {result.resourceName}
                </h3>
                <p className="font-serif italic text-[#C9A87C] mb-5">{result.resourcePrice}</p>
                <p className="text-[rgba(244,239,231,0.75)] text-[15px] font-light leading-relaxed mb-7">
                  {result.resource}
                </p>
                <button className="bg-[#F4EFE7] text-[#2E2820] px-7 py-3.5 text-[12px] font-normal tracking-[0.18em] uppercase rounded-sm hover:bg-white transition-all duration-300">
                  Choose the Framework →
                </button>
              </div>
              <div className="bg-[#2E2820] text-[#F4EFE7] rounded-sm p-9 border border-[#9C7A54]">
                <p className="text-[10px] font-normal tracking-[0.24em] uppercase text-[#C9A87C] mb-4">
                  Option Two · Full Integration · Recommended
                </p>
                <h3 className="font-serif font-light text-2xl leading-snug text-[#F4EFE7] mb-2">
                  {result.secondaryResourceName}
                </h3>
                <p className="font-serif italic text-[#C9A87C] mb-5">{result.secondaryResourcePrice}</p>
                <p className="text-[rgba(244,239,231,0.75)] text-[15px] font-light leading-relaxed mb-7">
                  {result.secondaryResource}
                </p>
                <button className="bg-[#9C7A54] text-[#F4EFE7] px-7 py-3.5 text-[12px] font-normal tracking-[0.18em] uppercase rounded-sm hover:bg-[#84653F] transition-all duration-300">
                  Choose the Full Arc →
                </button>
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-[#2E2820] text-[#F4EFE7] rounded-sm p-10">
            <p className="text-[10px] font-normal tracking-[0.24em] uppercase text-[#C9A87C] mb-5">
              The Resource for You
            </p>
            <h3 className="font-serif font-light text-3xl leading-snug tracking-tight text-[#F4EFE7] mb-2">
              {result.resourceName}
            </h3>
            <p className="font-serif italic text-[#C9A87C] text-lg mb-6">{result.resourcePrice}</p>
            <p className="text-[rgba(244,239,231,0.75)] text-base font-light leading-relaxed mb-8">
              {result.resource}
            </p>
            <button className="bg-[#F4EFE7] text-[#2E2820] px-8 py-4 text-[12px] font-normal tracking-[0.18em] uppercase rounded-sm hover:bg-white transition-all duration-300">
              Access This Tool →
            </button>
          </section>
        )}

        {/* Clinical boundary */}
        <div className="border-t border-[#E3DACB] pt-7">
          <p className="text-[10px] font-normal tracking-[0.2em] uppercase text-[#9C9183] mb-3">
            Psychoeducational Notice
          </p>
          <p className="text-[13px] text-[#9C9183] font-light leading-relaxed">
            Mother Revival provides frameworks and educational tools for the normal developmental transition of motherhood. This tool is explicitly non-diagnostic and is not a substitute for clinical psychological treatment, psychiatric assessment, or medical care. If you are experiencing persistent low mood, thoughts of harming yourself or others, or anything that feels beyond what is described here, please reach out to a licensed mental health professional or crisis service.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-2">
          <Link
            href="/diagnostic"
            className="text-[12px] text-[#9C9183] hover:text-[#2E2820] tracking-[0.18em] uppercase transition-colors"
          >
            ← Retake the audit
          </Link>
          <Link
            href="/"
            className="text-[12px] text-[#9C9183] hover:text-[#2E2820] tracking-[0.18em] uppercase transition-colors"
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
      <div className="min-h-screen bg-[#F4EFE7] flex items-center justify-center">
        <p className="text-[#9C9183] tracking-[0.22em] uppercase text-sm font-light">Preparing your result...</p>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
