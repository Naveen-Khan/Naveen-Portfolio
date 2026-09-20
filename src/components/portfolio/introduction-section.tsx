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
    <section id="intro" className="relative py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto relative">
        {/* chapter rail */}
        <div className="hidden lg:flex absolute left-0 top-[110px] w-6 flex-col items-center gap-6">
          <span className="font-serif italic text-[28px] text-[#C86B45] leading-none">01</span>
          <span className="w-[1px] flex-1 bg-[rgba(16,36,58,0.2)] min-h-[80px]" />
          <span className="editorial-vertical">Introduction</span>
        </div>

        {/* ghost text */}
        <div
          className="hidden md:block absolute right-2 top-[160px] font-serif italic text-[#10243A] leading-[0.85] tracking-[-0.04em] pointer-events-none select-none"
          style={{ fontSize: "clamp(160px, 18vw, 220px)", opacity: 0.04 }}
          aria-hidden
        >
          a i
        </div>

        {/* header */}
        <Reveal className="flex justify-between items-end pb-7 border-b border-[rgba(16,36,58,0.12)] mb-12 md:mb-20">
          <span className="editorial-section-title">— Chapter 01 / Introduction</span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium hidden sm:inline">
            A note on what I do · 02 / 12
          </span>
        </Reveal>

        {/* oversized editorial statement */}
        <Reveal delay={0.1}>
          <h2 className="editorial-serif text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.04] tracking-[-0.022em] max-w-[1240px] mb-10 md:mb-16">
            I work at the intersection of <em>AI</em>,{" "}
            <span
              style={{
                background: "linear-gradient(180deg, transparent 65%, rgba(200,107,69,0.18) 65%)",
                padding: "0 4px",
              }}
            >
              software engineering
            </span>
            , and real-world <em>problem solving</em>
            <span className="text-[#C86B45] italic">.</span>
          </h2>
        </Reveal>

        {/* two-col body */}
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-8 md:gap-20">
          <Reveal>
            <div className="editorial-meta-label pt-0 border-t border-[rgba(16,36,58,0.12)]">
              <div className="flex justify-between pt-3">
                <span>Field of Practice</span>
                <span className="font-serif italic text-[14px] text-[#C86B45] normal-case tracking-normal">
                  i.
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-[15px] md:text-[16px] leading-[1.7] text-[rgba(16,36,58,0.8)]">
              <p>
                I&apos;m{" "}
                <strong className="text-[#10243A] font-semibold">Naveen Khan</strong>, an
                AI engineer based in Karachi, Pakistan. My work spans{" "}
                <strong className="text-[#10243A] font-semibold">machine learning</strong>,{" "}
                <strong className="text-[#10243A] font-semibold">generative AI</strong>,{" "}
                <strong className="text-[#10243A] font-semibold">
                  retrieval-augmented systems
                </strong>
                , <strong className="text-[#10243A] font-semibold">computer vision</strong>{" "}
                and the <em className="font-serif italic text-[#0F6654]">full-stack productisation</em>{" "}
                of intelligent features — from research prototype to production backend.
              </p>
              <p>
                I build <strong className="text-[#10243A] font-semibold">RAG assistants</strong>{" "}
                that read through enterprise documents,{" "}
                <strong className="text-[#10243A] font-semibold">clinical data tools</strong>{" "}
                that surface cohort insight from messy EHR tables,{" "}
                <strong className="text-[#10243A] font-semibold">vision pipelines</strong> for
                medical imagery and wearables, and{" "}
                <strong className="text-[#10243A] font-semibold">AI agents</strong> wired into
                real workflows through FastAPI, n8n and webhooks. I care about the
                engineering underneath as much as the model on top.
              </p>
            </div>
          </Reveal>
        </div>

        {/* domains row */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-y-4 mt-12 pt-9 border-t border-[rgba(16,36,58,0.12)]">
            {DOMAINS.map((d, i) => (
              <div key={d.label} className="flex items-baseline">
                <div className="flex items-baseline gap-[10px] mr-3">
                  <span className="font-serif italic text-[12px] text-[#C86B45]">{d.roman}</span>
                  <span className="text-[13px] text-[#10243A] font-medium tracking-[0.04em]">
                    {d.label}
                  </span>
                </div>
                {i < DOMAINS.length - 1 && (
                  <span className="w-[1px] h-3 bg-[rgba(16,36,58,0.2)] mx-3 sm:mx-4 self-center" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
