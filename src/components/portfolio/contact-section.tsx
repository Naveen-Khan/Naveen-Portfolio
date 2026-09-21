"use client";

import { Reveal } from "./reveal";
import { PROFILE } from "@/lib/portfolio";

const CHANNELS = [
  {
    label: "Email · Primary",
    val: "naveenkhan0059@gmail.com",
    valHref: `mailto:${PROFILE.email}`,
    valEm: null,
    meta: "Best for projects & research",
  },
  {
    label: "GitHub",
    val: "github.com/Naveen-Khan",
    valHref: PROFILE.githubHref,
    valEm: "Naveen-Khan",
    meta: "Code · Notebooks · Open source",
  },
  {
    label: "Location",
    val: "Karachi · Pakistan",
    valHref: null,
    valEm: "Pakistan",
    meta: "Asia / Karachi · UTC+05",
  },
  {
    label: "Availability",
    val: "Open to AI Engineering",
    valHref: null,
    valEm: "AI Engineering",
    meta: "Full-time · Remote-friendly",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-12 md:py-16 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Top */}
        <Reveal>
          <div className="flex justify-between items-baseline pb-5 border-b border-[rgba(16,36,58,0.12)] mb-12 md:mb-16">
            <span className="text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
              <span className="font-serif italic text-[14px] text-[#C86B45] mr-2">
                12
              </span>
              Contact · Final Page
            </span>
            <span className="text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
              12 / 12
            </span>
          </div>
        </Reveal>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_0.38fr] gap-10 md:gap-12 items-start mb-12 md:mb-16">
          {/* LEFT */}
          <div>
            <Reveal>
              <div className="editorial-eyebrow mb-7 md:mb-9">
                <span className="dot" />
                Last chapter · Open inbox
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="editorial-serif text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.9] tracking-[-0.04em] mb-7 md:mb-9">
                Let&apos;s build
                <br />
                something
                <br />
                <em>intelligent</em>
                <span className="text-[#C86B45] italic">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[16px] md:text-[17px] leading-[1.6] text-[rgba(16,36,58,0.8)] max-w-[540px] mb-10 md:mb-11">
                Have an{" "}
                <strong className="text-[#10243A] font-semibold">AI product</strong>,{" "}
                <em className="font-serif italic text-[#0F6654]">research idea</em>, or{" "}
                <strong className="text-[#10243A] font-semibold">
                  engineering challenge
                </strong>
                ? I&apos;m based in Karachi, open to AI engineering opportunities, and reply
                to every genuine email. Tell me what you&apos;re trying to solve.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-3.5 bg-[#10243A] text-[#F5F1E8] px-6 md:px-7 py-4 md:py-4.5 rounded-full text-[13px] tracking-[0.22em] uppercase font-bold hover:bg-[#0F6654] transition-colors"
              >
                Let&apos;s Talk
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#C86B45] text-[#F5F1E8] text-[14px]">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          {/* RIGHT — channels card */}
          <Reveal delay={0.2} y={30}>
            <div className="bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-md p-7 md:p-8 relative overflow-hidden">
              <span
                className="absolute -right-2 -top-10 font-serif italic text-[220px] text-[rgba(16,36,58,0.04)] leading-[0.85] pointer-events-none select-none"
                aria-hidden
              >
                @
              </span>

              <div className="flex justify-between items-center mb-6 pb-3 border-b border-[rgba(16,36,58,0.12)]">
                <span className="text-[10px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.6)] font-semibold">
                  Channels
                </span>
                <span className="font-serif italic text-[13px] text-[#C86B45]">i.</span>
              </div>

              <div className="flex flex-col">
                {CHANNELS.map((c, i) => (
                  <div
                    key={c.label}
                    className={`flex flex-col gap-1 py-3.5 ${
                      i < CHANNELS.length - 1
                        ? "border-b border-dashed border-[rgba(16,36,58,0.12)]"
                        : ""
                    }`}
                  >
                    <span className="text-[9px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                      {c.label}
                    </span>
                    {c.valHref ? (
                      <a
                        href={c.valHref}
                        className="font-serif text-[18px] text-[#10243A] tracking-[-0.005em] leading-[1.2] border-b border-[#C86B45] inline-block self-start pb-0.5 hover:text-[#C86B45] transition-colors break-all"
                      >
                        {c.val.split(c.valEm || "_____").map((part, idx) => (
                          <span key={idx}>
                            {part}
                            {idx === 0 && c.valEm && (
                              <em className="italic text-[#0F6654]">{c.valEm}</em>
                            )}
                          </span>
                        ))}
                      </a>
                    ) : (
                      <span className="font-serif text-[18px] text-[#10243A] tracking-[-0.005em] leading-[1.2]">
                        {c.val.split(c.valEm || "_____").map((part, idx) => (
                          <span key={idx}>
                            {part}
                            {idx === 0 && c.valEm && (
                              <em className="italic text-[#0F6654]">{c.valEm}</em>
                            )}
                          </span>
                        ))}
                      </span>
                    )}
                    <span className="text-[10px] text-[rgba(16,36,58,0.6)] tracking-[0.18em] uppercase mt-1">
                      {c.meta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Foot */}
        <Reveal>
          <div className="flex flex-wrap justify-between items-center gap-4 pt-9 border-t border-[rgba(16,36,58,0.12)]">
            <div className="font-serif italic text-[16px] md:text-[18px] text-[rgba(16,36,58,0.6)]">
              — End of <span className="text-[#C86B45]">portfolio</span>. Thanks for reading.
            </div>
            <div className="flex gap-6 items-center text-[10px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
              <span>© 2026</span>
              <span className="font-serif italic text-[14px] text-[#10243A] tracking-normal normal-case">
                Naveen Khan
              </span>
              <span className="hidden sm:inline">· AI Engineer</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
