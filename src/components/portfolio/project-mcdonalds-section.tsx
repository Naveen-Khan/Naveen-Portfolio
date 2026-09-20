"use client";

import { Reveal } from "./reveal";
import { motion } from "framer-motion";

export function ProjectMcDonaldsSection() {
  return (
    <section
      id="project-mcdonalds"
      className="relative py-16 md:py-24 px-6 md:px-10 lg:px-12 bg-[#0C1A2C] text-[#F5F1E8]"
    >
      {/* ghost number */}
      <div
        className="hidden md:block absolute right-10 top-[60px] font-serif text-[#F5F1E8] leading-[0.82] tracking-[-0.04em] pointer-events-none select-none"
        style={{ fontSize: "clamp(280px, 26vw, 380px)", opacity: 0.05 }}
        aria-hidden
      >
        02
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_0.5fr] gap-10 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="relative z-[2]">
            <Reveal>
              <div className="editorial-eyebrow light mb-6 md:mb-7">
                <span className="dot" style={{ background: "#B99A5B" }} />
                Project 02 · Customer AI
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-serif text-[48px] sm:text-[64px] md:text-[72px] lg:text-[86px] leading-[0.96] tracking-[-0.025em] text-[#F5F1E8] mb-7 md:mb-9">
                Customer
                <br />
                support,
                <br />
                <em className="italic text-[#B99A5B]">reimagined</em>
                <span className="text-[#C86B45] italic">.</span>
              </h3>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-[15px] leading-[1.7] text-[rgba(245,241,232,0.72)] max-w-[480px] mb-7 md:mb-9">
                An{" "}
                <strong className="text-[#F5F1E8] font-semibold">
                  AI customer-support and order-management
                </strong>{" "}
                agent for a retail F&amp;B operator — answering natural-language order
                queries, modifying live orders, handling refunds, and routing edge cases to
                the right human queue.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 mb-7 md:mb-8">
                {[
                  "LLM Orchestration",
                  "AI Agents",
                  "FastAPI",
                  "Order Mgmt",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 border border-[rgba(245,241,232,0.25)] rounded-full text-[10px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.8)] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-[rgba(245,241,232,0.18)]">
                <div>
                  <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-2">
                    Type
                  </div>
                  <div className="font-serif text-[20px] md:text-[22px] text-[#F5F1E8] tracking-[-0.01em]">
                    Customer{" "}
                    <em className="italic text-[#B99A5B]">AI</em>
                  </div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-2">
                    Stack
                  </div>
                  <div className="font-serif text-[20px] md:text-[22px] text-[#F5F1E8] tracking-[-0.01em]">
                    FastAPI · LLM
                  </div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-2">
                    Scope
                  </div>
                  <div className="font-serif text-[20px] md:text-[22px] text-[#F5F1E8] tracking-[-0.01em]">
                    Production
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 mt-6 md:mt-7 text-[11px] tracking-[0.22em] uppercase text-[#C86B45] font-semibold pb-2 border-b border-[#C86B45]"
              >
                View Project <span>→</span>
              </a>
            </Reveal>
          </div>

          {/* RIGHT — chat mockup */}
          <Reveal delay={0.2} y={40}>
            <motion.div
              initial={{ opacity: 0.6, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#F5F1E8] text-[#10243A] rounded-[14px] overflow-hidden relative z-[2]"
              style={{ boxShadow: "0 40px 80px -30px rgba(0,0,0,0.5)" }}
            >
              {/* head */}
              <div className="bg-[#10243A] text-[#F5F1E8] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-[12px] font-bold tracking-[0.08em]">
                  <span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#C86B45] text-[#F5F1E8] font-serif italic text-[14px]">
                    M
                  </span>
                  <span>McD AI · Support</span>
                </div>
                <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.7)] hidden sm:block">
                  <span
                    className="inline-block w-[6px] h-[6px] rounded-full mr-1.5"
                    style={{ background: "#5DD899" }}
                  />
                  Online · 09:42
                </div>
                <div className="text-[rgba(245,241,232,0.6)] text-[14px] sm:hidden">···</div>
              </div>

              {/* body */}
              <div className="px-5 pt-5 pb-2 bg-[#F5F1E8]">
                {/* user msg */}
                <div className="flex flex-col items-end mb-3.5">
                  <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-1.5">
                    You · 09:41
                  </span>
                  <div className="bg-[#10243A] text-[#F5F1E8] px-4 py-3 rounded-[16px] rounded-br-[4px] text-[13px] leading-[1.5] max-w-[75%]">
                    Hi, I&apos;d like to add a McFlurry to my order #MK-22841 and change the
                    fries to large.
                  </div>
                </div>

                {/* bot msg */}
                <div className="flex flex-col mb-3.5">
                  <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-1.5">
                    McD AI · 09:42
                  </span>
                  <div className="bg-[#EFE9DC] text-[#10243A] border border-[rgba(16,36,58,0.12)] px-4 py-3 rounded-[16px] rounded-bl-[4px] text-[13px] leading-[1.5] max-w-[80%]">
                    Got it — I&apos;ve pulled up order{" "}
                    <strong className="font-semibold">#MK-22841</strong>. Here&apos;s the
                    proposed update:
                    <div className="mt-2.5 bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] rounded-lg p-2.5">
                      <div className="flex justify-between text-[10px] tracking-[0.18em] uppercase font-semibold mb-2">
                        <span className="text-[rgba(16,36,58,0.6)]">Order Update</span>
                        <span className="text-[#0F6654]">+ PKR 540</span>
                      </div>
                      <ul className="text-[12px]">
                        {[
                          { l: "Fries · Medium → Large", r: "+ 180" },
                          { l: "Add McFlurry Oreo", r: "+ 360" },
                          { l: "Delivery ETA", r: "~22 min" },
                        ].map((row, i) => (
                          <li
                            key={row.l}
                            className={`flex justify-between py-1 ${
                              i < 2 ? "border-b border-dashed border-[rgba(16,36,58,0.06)]" : ""
                            }`}
                          >
                            <span>{row.l}</span>
                            <span className="text-[rgba(16,36,58,0.6)] text-[10px]">
                              {row.r}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2 mt-2.5">
                      <button className="bg-[#C86B45] text-[#F5F1E8] border border-[#C86B45] rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold">
                        Confirm
                      </button>
                      <button className="bg-transparent text-[#10243A] border border-[rgba(16,36,58,0.2)] rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold">
                        Edit
                      </button>
                      <button className="bg-transparent text-[#10243A] border border-[rgba(16,36,58,0.2)] rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* input */}
              <div className="px-5 py-3.5 bg-[#F5F1E8] flex items-center gap-3 border-t border-[rgba(16,36,58,0.12)]">
                <div className="flex-1 px-3.5 py-2.5 border border-[rgba(16,36,58,0.2)] rounded-full text-[12px] text-[rgba(16,36,58,0.6)]">
                  Ask about your order…
                </div>
                <div className="w-9 h-9 rounded-full bg-[#10243A] text-[#F5F1E8] flex items-center justify-center text-[14px]">
                  ↑
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* scroll indicator (dark variant) */}
        <div className="mt-12 md:mt-16 flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.55)] font-medium">
          <span>05 — Project 02 · McDonald&apos;s AI</span>
          <div className="flex-1 h-[1px] mx-6 bg-[rgba(245,241,232,0.15)]" />
          <span>Continue ↓</span>
        </div>
      </div>
    </section>
  );
}
