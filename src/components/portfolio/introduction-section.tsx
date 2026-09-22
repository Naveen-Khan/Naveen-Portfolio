"use client";

import { Reveal } from "./reveal";

const DOMAINS = [
  { roman: "i", label: "Machine Learning" },
  { roman: "ii", label: "Generative AI" },
  { roman: "iii", label: "RAG Systems" },
  { roman: "iv", label: "Computer Vision" },
  { roman: "v", label: "AI Automation" },
  { roman: "vi", label: "Backend Systems" },
  { roman: "vii", label: "Full-Stack AI Products" },
];

export function IntroductionSection() {
  return (
    <section
      id="intro"
      className="dark-detail relative py-12 md:py-16 px-6 md:px-10 lg:px-12"
      style={{ background: "var(--color-navy-dark)", color: "var(--color-ivory)" }}
    >
      <div className="max-w-[1400px] mx-auto relative">
        {/* header */}
        <Reveal className="flex justify-between items-end pb-7 border-b border-[rgba(245,241,232,0.18)] mb-8 md:mb-10">
          <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)]">
            — Chapter 01 / Introduction
          </span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.55)] font-medium hidden sm:inline">
            A note on what I do
          </span>
        </Reveal>

        {/* oversized editorial statement — clean, single statement */}
        <Reveal delay={0.1}>
          <h2
            className="font-serif text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.04] tracking-[-0.022em] max-w-[1240px] mb-10 md:mb-16 text-[#F5F1E8]"
            style={{ fontFamily: "var(--font-serif-playfair), Georgia, serif", fontWeight: 400 }}
          >
            I work at the intersection of AI, software engineering, and
            real-world problem solving
            <span className="text-[#C86B45] italic">.</span>
          </h2>
        </Reveal>

        {/* domains row */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-y-4 mt-12 pt-9 border-t border-[rgba(245,241,232,0.18)]">
            {DOMAINS.map((d, i) => (
              <div key={d.label} className="flex items-baseline">
                <div className="flex items-baseline gap-[10px] mr-3">
                  <span className="font-serif italic text-[12px] text-[#C86B45]">{d.roman}</span>
                  <span className="text-[13px] text-[#F5F1E8] font-medium tracking-[0.04em]">
                    {d.label}
                  </span>
                </div>
                {i < DOMAINS.length - 1 && (
                  <span className="w-[1px] h-3 bg-[rgba(245,241,232,0.25)] mx-3 sm:mx-4 self-center" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
