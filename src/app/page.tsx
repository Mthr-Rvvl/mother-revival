import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF8F5]">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-5xl mx-auto w-full">
        <span className="text-sm tracking-[0.2em] uppercase text-[#78716C]">Mother Revival</span>
        <Link
          href="/diagnostic"
          className="text-sm tracking-widest uppercase border border-[#1C1917] px-5 py-2 hover:bg-[#1C1917] hover:text-[#FAF8F5] transition-colors"
        >
          Take the Diagnostic
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-8">
          Matrescence · Identity Reconstruction
        </p>
        <h1 className="text-4xl md:text-6xl leading-tight text-[#1C1917] mb-8">
          You are not broken.<br />You are between.
        </h1>
        <p className="text-lg md:text-xl text-[#78716C] leading-relaxed max-w-xl mb-12">
          The exhaustion sleep doesn&apos;t fix has a name. The distance from yourself has a structure. And there is a way through.
        </p>
        <Link
          href="/diagnostic"
          className="bg-[#1C1917] text-[#FAF8F5] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#78716C] transition-colors"
        >
          Find where you are →
        </Link>
      </section>

      {/* What is Matrescence */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-6">What is Matrescence</p>
          <h2 className="text-3xl md:text-4xl text-[#1C1917] leading-snug mb-8">
            Motherhood restructures your identity.<br />No one told you that.
          </h2>
          <div className="space-y-6 text-[#78716C] text-lg leading-relaxed">
            <p>
              Matrescence is the developmental process of becoming a mother — a neurological, hormonal, and psychological restructuring as significant as adolescence. Your brain physically changes. Your sense of self reorganises. The person you were before motherhood doesn&apos;t disappear. She is in transition.
            </p>
            <p>
              But no one gave you language for it. So you interpreted the disconnection as failure. The grief as ingratitude. The reaching-for-something-more as selfishness.
            </p>
            <p className="text-[#1C1917] font-medium">
              You are not failing. You are performing a self that no longer fits.
            </p>
          </div>
        </div>
      </section>

      {/* The Five Stages */}
      <section className="px-6 py-20 max-w-5xl mx-auto w-full">
        <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-6">The Framework</p>
        <h2 className="text-3xl md:text-4xl text-[#1C1917] mb-12">There are five stages. You are in one of them.</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { num: "01", name: "The Unravelling", desc: "Identity disruption. Mirror estrangement. Acute confusion." },
            { num: "02", name: "The Wilderness", desc: "Outwardly functioning. Inwardly grieving. Midnight searching." },
            { num: "03", name: "The Searching", desc: "Pain turning to curiosity. A new appetite for structure." },
            { num: "04", name: "The Rebuilding", desc: "Active reconstruction. Values clarifying. New patterns forming." },
            { num: "05", name: "The Arrival", desc: "Integrated identity. Self-authorship. Embodied direction." },
          ].map((stage) => (
            <div key={stage.num} className="border-t border-[#E5E0D8] pt-6">
              <p className="text-xs text-[#78716C] mb-2 tracking-widest">{stage.num}</p>
              <p className="text-[#1C1917] font-medium mb-3">{stage.name}</p>
              <p className="text-sm text-[#78716C] leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[#1C1917] text-[#FAF8F5] px-6 py-20 text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl md:text-3xl leading-relaxed">
          &ldquo;Loving your children and mourning yourself are not in conflict. Both are true.&rdquo;
        </blockquote>
      </section>

      {/* For whom */}
      <section className="px-6 py-20 max-w-3xl mx-auto w-full">
        <p className="text-xs tracking-[0.3em] uppercase text-[#78716C] mb-6">Who this is for</p>
        <h2 className="text-3xl text-[#1C1917] mb-10">If you recognise yourself in any of these, you are in the right place.</h2>
        <ul className="space-y-5 text-[#78716C] text-lg leading-relaxed">
          {[
            "You function well. But something inside is quietly not right.",
            "You love your children. And you miss yourself. Both are true.",
            "You don't know who you are anymore — outside of being a mother.",
            "You feel like your ambition, your identity, or your direction went somewhere you can't find.",
            "Matrescence doesn't resolve on its own. It waits.",
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-[#A0522D] mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F0E8] px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1C1917] mb-6">
            Find out exactly where you are.
          </h2>
          <p className="text-[#78716C] text-lg mb-10 leading-relaxed">
            The Mother Revival Diagnostic locates you precisely within the transition. Not a quiz. An identity positioning system.
          </p>
          <Link
            href="/diagnostic"
            className="bg-[#1C1917] text-[#FAF8F5] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#78716C] transition-colors inline-block"
          >
            Take the Diagnostic →
          </Link>
          <p className="text-sm text-[#78716C] mt-4">Free. Takes 8 minutes.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-[#E5E0D8] text-center">
        <p className="text-xs text-[#78716C] tracking-widest uppercase">Mother Revival · Matrescence-Based Identity Reconstruction</p>
      </footer>

    </main>
  );
}
