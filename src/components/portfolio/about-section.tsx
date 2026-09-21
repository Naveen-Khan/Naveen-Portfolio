"use client";

import { Reveal } from "./reveal";
import Image from "next/image";
import { PROFILE } from "@/lib/portfolio";

const PHILOSOPHY = [
  {
    num: "i.",
    title: "Engineering first.",
    titleItalic: "Engineering",
    body: "A model is a small part of an AI product. I care about evaluation, latency, retrieval, schema, error budgets and the engineering underneath the demo.",
  },
  {
    num: "ii.",
    title: "Problem before model.",
    titleItalic: "Problem",
    body: "I start from the workflow being solved, the data actually available, and the user that has to live with the result. The model choice falls out of that, not the other way around.",
  },
  {
    num: "iii.",
    title: "Quiet, honest AI.",
    titleItalic: "honest",
    body: "No exaggerated claims, no glowing brains. I prefer a small well-tested system that a clinician or customer can trust over a flashy one nobody can depend on.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-12 md:py-16 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Head */}
        <div className="grid grid-cols-1 md:grid-cols-[0.18fr_0.82fr] gap-6 md:gap-12 items-end pb-7 border-b border-[rgba(16,36,58,0.12)] mb-8 md:mb-10">
          <div className="hidden md:block">
            <div className="editorial-vertical">
              <span className="font-serif italic text-[14px] text-[#C86B45] mr-2.5 normal-case tracking-normal">
                04
              </span>
              About · Naveen Khan
            </div>
          </div>
          <div className="flex justify-between items-end">
            <span className="editorial-meta-label">
              A short, honest note from the engineer.
            </span>
            <span className="font-serif italic text-[16px] text-[#C86B45]">08 / 12</span>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] gap-8 md:gap-12 items-start mb-8 md:mb-10">
          {/* LEFT */}
          <div>
            <Reveal>
              <h2 className="editorial-serif text-[40px] sm:text-[52px] md:text-[60px] lg:text-[64px] leading-[1.04] tracking-[-0.022em] mb-10">
                <span className="font-serif italic text-[60px] sm:text-[70px] md:text-[80px] text-[#C86B45] leading-none align-top">
                  &ldquo;
                </span>
                I build AI
                <br />
                systems, but I
                <br />
                care about what
                <br />
                they <em>actually</em>
                <br />
                <span className="text-[#C86B45] italic">solve.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-[15px] leading-[1.7] text-[rgba(16,36,58,0.8)] max-w-[620px]">
                <p>
                  I&apos;m{" "}
                  <strong className="text-[#10243A] font-semibold">Naveen Khan</strong>, an
                  AI engineer based in Karachi. I trained as a{" "}
                  <strong className="text-[#10243A] font-semibold">
                    Computer Systems Engineer
                  </strong>{" "}
                  at <strong className="text-[#10243A] font-semibold">Mehran UET</strong>{" "}
                  (2021–2025), and I&apos;ve spent the last six months in full-time AI
                  engineering — shipping <em className="font-serif italic text-[#0F6654]">real</em>{" "}
                  RAG assistants, clinical-data tools, and customer-facing agents that need to
                  actually work, not just demo well.
                </p>
                <p>
                  My practice sits between{" "}
                  <strong className="text-[#10243A] font-semibold">research</strong> and{" "}
                  <strong className="text-[#10243A] font-semibold">product</strong>. I like the
                  moment when a model becomes a feature, when a notebook becomes a service,
                  when messy real-world data turns into something a clinician, a customer, or a
                  researcher can actually use. That bridge is where I work best.
                </p>
                <p>
                  Outside of shipping production work, I keep one foot in{" "}
                  <em className="font-serif italic text-[#0F6654]">research</em> — most visibly
                  on SAFELINK, a multimodal wearable for personal safety. I read papers
                  carefully, prototype fast, and prefer a clean minimal system over an
                  impressive one.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 pt-5 flex items-center gap-3.5 border-t border-[rgba(16,36,58,0.12)] max-w-[460px]">
                <span className="font-serif italic text-[28px] md:text-[32px] text-[#10243A] leading-none">
                  Naveen.
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.5]">
                  {PROFILE.name}
                  <br />
                  AI Engineer · Karachi
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="relative pt-0">
            <Reveal y={40}>
              <div
                className="relative w-full overflow-hidden bg-[#E6DECC] rounded-md"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src="/portfolio/portrait.png"
                  alt="Naveen Khan — portrait"
                  fill
                  className="object-cover"
                  style={{ filter: "contrast(1.02) saturate(0.92)" }}
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
                <div className="absolute bottom-3.5 left-3.5 bg-[#F5F1E8] px-3.5 py-2 rounded-[3px]"
                  style={{ boxShadow: "0 6px 14px -8px rgba(0,0,0,0.2)" }}
                >
                  <div className="text-[8px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                    Portrait
                  </div>
                  <div className="font-serif italic text-[14px] text-[#10243A]">
                    Naveen, &apos;26
                  </div>
                </div>
              </div>
            </Reveal>

            {/* side card */}
            <Reveal delay={0.2} y={30}>
              <div className="absolute -right-2 sm:right-[-36px] top-9 bg-[#10243A] text-[#F5F1E8] p-4 md:p-[18px] rounded-[4px] w-[180px]"
                style={{ boxShadow: "0 20px 40px -25px rgba(16,36,58,0.4)" }}
              >
                <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-2">
                  Snapshot
                </div>
                <div className="font-serif text-[18px] text-[#F5F1E8] leading-[1.2] tracking-[-0.01em]">
                  Based in
                  <br />
                  <em className="italic text-[#B99A5B]">Pakistan</em>
                </div>
                <hr className="border-0 border-t border-[rgba(245,241,232,0.18)] my-3" />
                <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium">
                  Education
                </div>
                <div className="text-[10px] text-[rgba(245,241,232,0.75)] leading-[1.8] mt-1">
                  B.E. Computer Systems
                  <br />
                  Mehran UET · 2021–25
                </div>
                <hr className="border-0 border-t border-[rgba(245,241,232,0.18)] my-3" />
                <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium">
                  Currently
                </div>
                <div className="text-[10px] text-[rgba(245,241,232,0.75)] leading-[1.8] mt-1">
                  Full-Stack AI Engineer
                  <br />
                  Sofstica Solutions
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Philosophy strip */}
        <div className="border-t border-b border-[rgba(16,36,58,0.12)] py-8 grid grid-cols-1 md:grid-cols-3 gap-0">
          {PHILOSOPHY.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <div
                className={`px-0 md:px-8 ${
                  i > 0 ? "md:border-l border-[rgba(16,36,58,0.12)] md:pl-8 pt-7 md:pt-0 border-t md:border-t-0 border-[rgba(16,36,58,0.12)]" : ""
                }`}
              >
                <div className="font-serif italic text-[18px] text-[#C86B45] mb-2.5">
                  {p.num}
                </div>
                <div className="font-serif text-[22px] text-[#10243A] leading-[1.2] tracking-[-0.01em] mb-2.5">
                  <em className="italic text-[#0F6654]">{p.titleItalic}</em>
                  {p.title.replace(p.titleItalic, "")}
                </div>
                <p className="text-[13px] text-[rgba(16,36,58,0.8)] leading-[1.6]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
