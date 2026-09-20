"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-28 pb-16 md:pb-20 px-6 md:px-10 lg:px-12 overflow-hidden"
    >
      {/* Vertical side label — pinned to left edge, vertically centered with hero content (lg+ only) */}
      <div
        className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 items-center pointer-events-none"
        aria-hidden
      >
        <span
          className="font-sans text-[10px] font-medium tracking-[0.32em] uppercase text-[rgba(16,36,58,0.55)]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap" }}
        >
          PORTFOLIO &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; KARACHI
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.95fr] gap-10 lg:gap-16 items-center pt-6 lg:pt-10">
        {/* LEFT */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="editorial-eyebrow mb-6 md:mb-9"
          >
            <span className="dot" />
            AI Engineer / Machine Learning / Generative AI
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="editorial-serif text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.96] tracking-[-0.025em] mb-7 md:mb-8"
            style={{ fontFamily: "var(--font-serif-playfair), Georgia, serif", fontWeight: 400 }}
          >
            <span className="block">Building</span>
            <span className="block">
              intelligent <em className="italic text-[#0F6654]">systems</em>
            </span>
            <span className="block">for real-world</span>
            <span className="block">
              problems
              <span className="text-[#C86B45] italic">.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-[15px] md:text-[16px] leading-[1.7] text-[rgba(16,36,58,0.8)] max-w-[480px] mb-8"
          >
            I design and build AI systems across{" "}
            <strong className="text-[#10243A] font-semibold">machine learning</strong>,{" "}
            <strong className="text-[#10243A] font-semibold">generative AI</strong>,{" "}
            <strong className="text-[#10243A] font-semibold">computer vision</strong> and{" "}
            <strong className="text-[#10243A] font-semibold">intelligent automation</strong>{" "}
            — turning complex data, documents and workflows into useful, well-engineered
            products.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap items-center gap-5 md:gap-7 mb-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                Based In
              </span>
              <span className="text-[13px] text-[#10243A] font-semibold tracking-[0.06em]">
                Karachi · Pakistan
              </span>
            </div>
            <div className="w-[1px] h-7 bg-[rgba(16,36,58,0.2)]" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                Experience
              </span>
              <span className="text-[13px] text-[#10243A] font-semibold tracking-[0.06em]">
                6 Months · AI Engineering
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="inline-flex items-center gap-2 px-[14px] py-2 border border-[#0F6654] rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase text-[#0F6654] bg-[rgba(15,102,84,0.05)]"
          >
            <span
              className="w-[6px] h-[6px] rounded-full bg-[#0F6654]"
              style={{ boxShadow: "0 0 0 3px rgba(15,102,84,0.18)" }}
            />
            Open to AI Engineering Opportunities
          </motion.div>
        </div>

        {/* RIGHT — portrait composition with solid filled gold→terracotta arch behind */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[480px] sm:h-[560px] md:h-[640px] lg:h-[720px]"
        >
          {/* ORGANIC ARCH SHAPE — solid filled gradient (gold→terracotta), sits behind portrait */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[440px] sm:w-[320px] sm:h-[540px] md:w-[380px] md:h-[600px] lg:w-[420px] lg:h-[660px]"
            style={{
              background: "linear-gradient(180deg, #B99A5B 0%, #C86B45 100%)",
              borderRadius: "220px 220px 24px 24px",
              opacity: 0.92,
            }}
          >
            {/* small decorative ring on top-left of arch (outside) */}
            <div
              className="absolute -top-7 -left-10 w-[110px] h-[110px] rounded-full border border-[rgba(16,36,58,0.2)]"
              aria-hidden
            />
          </div>

          {/* PORTRAIT FRAME — on top of arch, inset 60px from top, narrower than arch so arch peeks out on top + sides */}
          <div
            className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[220px] h-[380px] sm:w-[280px] sm:h-[460px] md:w-[340px] md:h-[520px] lg:w-[360px] lg:h-[580px] overflow-hidden bg-[#E6DECC]"
            style={{
              borderRadius: "180px 180px 16px 16px",
              boxShadow: "0 30px 60px -30px rgba(16,36,58,0.25)",
            }}
          >
            <Image
              src="/portfolio/portrait.png"
              alt="Naveen Khan — AI Engineer portrait"
              fill
              className="object-cover"
              style={{ filter: "contrast(1.02) saturate(0.92)" }}
              priority
              sizes="(max-width: 768px) 280px, 360px"
            />
          </div>

          {/* DOT CLUSTER — inside the arch, top-right area (next to portrait's right edge, but inside arch) */}
          <div
            className="absolute top-[90px] right-2 hidden md:grid z-[5]"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }}
            aria-hidden
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="w-[4px] h-[4px] rounded-full bg-[rgba(16,36,58,0.4)]"
              />
            ))}
          </div>

          {/* FLOATING CARD — TOP-LEFT (outside the arch on the left, near top) */}
          <div
            className="absolute top-[32px] left-[-8px] sm:left-[-24px] bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] px-[18px] py-[14px] rounded-[4px] z-[10]"
            style={{ boxShadow: "0 10px 30px -15px rgba(16,36,58,0.18)" }}
          >
            <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-1">
              AI Engineer
            </div>
            <div className="font-serif text-[18px] text-[#10243A] font-medium">
              Karachi / Pakistan
            </div>
          </div>

          {/* FLOATING CARD — BOTTOM-LEFT (dark navy, outside the arch on the left, near bottom) */}
          <div
            className="absolute bottom-[20px] left-[-12px] sm:left-[-50px] bg-[#10243A] text-[#F5F1E8] px-[18px] py-[14px] rounded-[4px] border border-[#10243A] z-[10]"
            style={{ boxShadow: "0 10px 30px -15px rgba(16,36,58,0.4)" }}
          >
            <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-1">
              Building
            </div>
            <div className="font-serif text-[18px] text-[#F5F1E8]">
              Intelligent Systems
            </div>
          </div>

          {/* FLOATING CARD — BOTTOM-RIGHT (outside the arch on the right, mid-bottom) */}
          <div
            className="absolute bottom-[50px] right-[-12px] sm:right-[-36px] bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] px-[18px] py-[14px] rounded-[4px] z-[10]"
            style={{ boxShadow: "0 10px 30px -15px rgba(16,36,58,0.18)" }}
          >
            <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-1">
              Experience
            </div>
            <div className="font-serif text-[18px] text-[#10243A]">06 Months</div>
          </div>

          {/* Vertical "art directed" italic label — right edge of right column */}
          <div
            className="absolute top-[280px] right-[-10px] hidden lg:block font-serif italic text-[14px] text-[rgba(16,36,58,0.6)]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", transformOrigin: "left center" }}
            aria-hidden
          >
            — art directed
          </div>

          {/* Corner signature */}
          <div className="absolute bottom-5 right-3 md:right-7 font-serif italic text-[14px] text-[rgba(16,36,58,0.6)]">
            — NK, &apos;26
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="mt-14 md:mt-20 max-w-[1400px] mx-auto flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
        <span>01 — Home</span>
        <div className="flex-1 h-[1px] mx-6 bg-[rgba(16,36,58,0.12)] relative">
          <div className="absolute left-0 top-0 h-[1px] w-[38%] bg-[#10243A]" />
          <div className="absolute left-[38%] top-[-3px] w-[7px] h-[7px] rounded-full bg-[#C86B45]" />
        </div>
        <span className="hidden sm:inline">Scroll ↓</span>
        <span className="sm:hidden">↓</span>
      </div>
    </section>
  );
}
