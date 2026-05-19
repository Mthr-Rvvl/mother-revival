"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { stageResults, type Stage } from "@/lib/diagnostic-data";

function ResultContent() {
  const searchParams = useSearchParams();
  const stage = (searchParams.get("stage") as Stage) ?? "wilderness";
  const name = searchParams.get("name") ?? "";
  const yearsCarrying = searchParams.get("years") ?? "";
  const children = searchParams.get("children") ?? "";
  const futureSelf = searchParams.get("futureSelf") ?? "";

  const result = stageResults[stage] ?? stageResults["wilderness"];
  const namePrefix = name ? `${name}, ` : "";

  return (
    <main className="min-h-screen bg-[#F5EFE6]">

      {/* Header */}
      <header className="w-full py-5 border-b border-[#DDD4C5] text-center">
        <span className="font-serif italic font-light text-lg tracking-wide text-[#1F1814]">
          Mother <span className="not-italic font-normal ml-1">Revival</span>
        </span>
      </header>

      <div className="max-w-2xl mx-auto px-6 pt-12 pb-20 space-y-14">

        {/* Stage placement */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#6B6157] mb-4">
            Stage {result.stageNumber} of V · Your placement
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-tight text-[#1F1814]">
            {namePrefix}{result.headline[0]}<br />
            <em className="font-light text-[#8B4513]">{result.headline[1]}</em>
          </h1>
        </div>

        {/* Interior mirror */}
        <section>
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8B4513] mb-4">
            The interior mirror
          </p>
          <blockquote className="font-serif text-2xl leading-relaxed font-light tracking-tight text-[#1F1814] border-l-2 border-[#8B4513] pl-6">
            {result.mirror}
          </blockquote>
        </section>

        {/* What this actually is */}
        <section>
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8B4513] mb-4">
            What this actually is
          </p>
          <div className="text-[#1F1814] text-lg leading-relaxed space-y-4">
            {result.whatThisIs.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Neuroscience */}
        <section>
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8B4513] mb-4">
            The neuroscience beneath it
          </p>
          <div className="text-[#1F1814] text-lg leading-relaxed space-y-4">
            {result.neuroscience.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Shareable quote */}
        <div className="bg-[#FBF7EF] border border-[#DDD4C5] rounded-2xl px-8 py-10 text-center">
          <p className="font-serif italic text-2xl md:text-3xl font-light leading-relaxed text-[#1F1814]">
            &ldquo;{result.shareable}&rdquo;
          </p>
        </div>

        {/* What comes next */}
        <section>
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#8B4513] mb-4">
            What comes next
          </p>
          <div className="text-[#1F1814] text-lg leading-relaxed space-y-4">
            {result.progression.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* CTA card */}
        <div className="bg-[#1F1814] text-[#F5EFE6] rounded-2xl p-10">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#B07050] mb-4">
            Continue your reading
          </p>
          <h3 className="font-serif text-3xl leading-snug tracking-tight text-[#F5EFE6] mb-4">
            {result.ctaTitle}
          </h3>
          <p className="text-[rgba(245,239,230,0.78)] text-base leading-relaxed mb-8">
            {result.ctaBody}
          </p>
          <button className="bg-[#F5EFE6] text-[#1F1814] px-8 py-4 text-sm font-medium rounded hover:bg-white hover:text-[#8B4513] transition-all duration-200">
            {result.ctaButton} →
          </button>
        </div>

        {/* Context footer */}
        {(yearsCarrying || children || futureSelf) && (
          <div className="flex flex-wrap gap-8 pt-6 border-t border-[#DDD4C5] text-sm text-[#8A8175]">
            {children && (
              <div>
                <strong className="block font-serif font-normal text-base text-[#1F1814] mb-0.5">Children</strong>
                {children}
              </div>
            )}
            {yearsCarrying && (
              <div>
                <strong className="block font-serif font-normal text-base text-[#1F1814] mb-0.5">Years carrying the shift</strong>
                {yearsCarrying}
              </div>
            )}
            {futureSelf && (
              <div>
                <strong className="block font-serif font-normal text-base text-[#1F1814] mb-0.5">Future-self pull</strong>
                {futureSelf}
              </div>
            )}
          </div>
        )}

        {/* Clinical boundary */}
        <div className="border border-[#DDD4C5] rounded-lg p-6 bg-[#FBF7EF]">
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
