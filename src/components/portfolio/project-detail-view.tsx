"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { ClinDataVisual } from "./visuals/clindata-visual";
import { McdonaldsVisual } from "./visuals/mcdonalds-visual";
import { SafelinkVisual } from "./visuals/safelink-visual";
import { GenericVisual } from "./visuals/generic-visual";
import { PROJECTS, type ProjectDetail } from "@/lib/portfolio";

interface Props {
  detail: ProjectDetail;
  onClose: () => void;
  onSelect: (slug: string) => void;
}

export function ProjectDetailView({ detail, onClose, onSelect }: Props) {
  // Find prev / next project in PROJECTS list
  const idx = PROJECTS.findIndex((p) => p.slug === detail.slug);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  // Scroll to top on mount
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Top breadcrumb + back */}
      <div className="pt-24 md:pt-28 px-6 md:px-10 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex flex-wrap justify-between items-center gap-4 pb-5 border-b border-[rgba(16,36,58,0.12)] mb-10 md:mb-12">
              <button
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium hover:text-[#10243A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to all work
              </button>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                <span className="font-serif italic text-[14px] text-[#C86B45] mr-2">
                  {detail.num}
                </span>
                Work{" "}
                <span className="mx-2.5 text-[rgba(16,36,58,0.2)]">/</span>
                <span className="text-[#10243A] font-semibold">{detail.name}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Hero block — huge typography + description + tags */}
      <section className="px-6 md:px-10 lg:px-12 pb-12 md:pb-14">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-10 md:gap-12 items-start">
          {/* LEFT */}
          <div>
            <Reveal>
              <div className="font-serif text-[140px] sm:text-[180px] md:text-[220px] leading-[0.82] tracking-[-0.04em] text-[#10243A] mb-4">
                {detail.num}
                <span className="text-[#C86B45] italic">.</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="font-serif text-[44px] sm:text-[56px] md:text-[64px] leading-[0.94] tracking-[-0.025em] text-[#10243A] mb-7"
                style={{ fontFamily: "var(--font-serif-playfair), Georgia, serif", fontWeight: 400 }}
              >
                {detail.heroTitleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line === detail.heroItalicPart ? (
                      <em className="italic text-[#0F6654]">{line}</em>
                    ) : (
                      line
                    )}
                    {i === detail.heroTitleLines.length - 1 && (
                      <span className="text-[#C86B45] italic">.</span>
                    )}
                  </span>
                ))}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[15px] leading-[1.65] text-[rgba(16,36,58,0.8)] max-w-[420px] mb-7">
                {detail.longDescription}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 mb-7">
                {detail.tags.map((t) => (
                  <span key={t} className="editorial-tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-5 border-t border-[rgba(16,36,58,0.12)]">
                <div>
                  <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.55)] font-medium mb-2">
                    Scope
                  </div>
                  <div className="font-serif text-[16px] md:text-[18px] text-[#10243A] tracking-[-0.005em] leading-[1.2]">
                    {detail.scope}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.55)] font-medium mb-2">
                    Stack
                  </div>
                  <div className="font-serif text-[16px] md:text-[18px] text-[#10243A] tracking-[-0.005em] leading-[1.2]">
                    {detail.stack}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.55)] font-medium mb-2">
                    Year
                  </div>
                  <div className="font-serif text-[16px] md:text-[18px] text-[#10243A] tracking-[-0.005em] leading-[1.2]">
                    {detail.year}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — visual */}
          <Reveal delay={0.15} y={40}>
            <motion.div
              initial={{ opacity: 0.6 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {detail.visualType === "clindata" && <ClinDataVisual />}
              {detail.visualType === "mcdonalds" && <McdonaldsVisual />}
              {detail.visualType === "safelink" && <SafelinkVisual />}
              {(detail.visualType === "cardio" ||
                detail.visualType === "rag" ||
                detail.visualType === "medical" ||
                detail.visualType === "cv-suite" ||
                detail.visualType === "sales") && (
                <GenericVisual visualType={detail.visualType} />
              )}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Stats row (if present) */}
      {detail.stats && detail.stats.length > 0 && (
        <section className="px-6 md:px-10 lg:px-12 pb-12 md:pb-14">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[rgba(16,36,58,0.12)] py-8">
                {detail.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`px-4 md:px-8 ${
                      i > 0 ? "lg:border-l border-[rgba(16,36,58,0.12)]" : ""
                    } ${i === 1 || i === 3 ? "border-l border-[rgba(16,36,58,0.12)]" : ""}`}
                  >
                    <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-3.5 flex items-center gap-2">
                      <span className="font-serif italic text-[11px] text-[#C86B45] tracking-normal">
                        {s.roman}
                      </span>
                      {s.label}
                    </div>
                    <div className="font-serif text-[44px] md:text-[56px] leading-none tracking-[-0.025em] text-[#10243A]">
                      {s.italic ? <em className="italic text-[#0F6654]">{s.value.replace(/[a-zA-Z]+/, "")}</em> : s.value}
                      {s.italic && s.value.match(/[a-zA-Z]+/g)?.[0] && (
                        <span>{s.value.match(/[a-zA-Z]+/g)?.[0]}</span>
                      )}
                    </div>
                    <div className="text-[11px] text-[rgba(16,36,58,0.6)] mt-2.5">
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Flow stages (SAFELINK only) */}
      {detail.flowStages && detail.flowStages.length > 0 && (
        <section className="px-6 md:px-10 lg:px-12 pb-12 md:pb-14">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-lg p-6 md:p-7">
                <div className="flex justify-between items-baseline pb-4 border-b border-[rgba(16,36,58,0.12)] mb-5">
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#10243A] font-semibold">
                    Edge Pipeline
                  </span>
                  <span className="font-serif italic text-[12px] text-[#C86B45]">i.</span>
                </div>
                <div className="grid grid-cols-4 gap-0">
                  {detail.flowStages.map((s, i) => (
                    <div
                      key={s.label}
                      className={`relative text-center px-1 py-2 ${
                        i < detail.flowStages!.length - 1
                          ? "border-r border-dashed border-[rgba(16,36,58,0.12)]"
                          : ""
                      }`}
                    >
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F5F1E8] border border-[#10243A] text-[#10243A] font-serif italic text-[12px] mb-2">
                        {s.num}
                      </div>
                      <div className="text-[10px] font-semibold text-[#10243A] tracking-[0.06em] mb-0.5">
                        {s.label}
                      </div>
                      <div className="text-[8px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)]">
                        {s.sub}
                      </div>
                      {i < detail.flowStages!.length - 1 && (
                        <span className="absolute right-[-5px] top-[14px] text-[#C86B45] text-[10px]">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Meta rows (SAFELINK only) */}
      {detail.metaRows && detail.metaRows.length > 0 && (
        <section className="px-6 md:px-10 lg:px-12 pb-12 md:pb-14">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.8] pt-5 border-t border-[rgba(16,36,58,0.12)]">
                {detail.metaRows.map((r) => (
                  <div key={r.label}>
                    <span className="text-[#10243A] font-semibold">{r.label}</span>{" "}
                    &nbsp;{r.value}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Prev / Next nav */}
      <section className="px-6 md:px-10 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto border-t border-[rgba(16,36,58,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {prev && (
              <button
                onClick={() => onSelect(prev.slug)}
                className="group text-left pt-6 pb-6 md:pr-8 md:border-r border-[rgba(16,36,58,0.12)] md:border-b-0 border-b border-[rgba(16,36,58,0.12)]"
              >
                <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.55)] font-medium mb-2 flex items-center gap-2">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  Previous Project
                </div>
                <div className="font-serif text-[26px] md:text-[32px] text-[#10243A] leading-[1.1] tracking-[-0.015em] group-hover:text-[#C86B45] transition-colors">
                  <span className="font-serif italic text-[#C86B45] mr-2 text-[18px] align-baseline">
                    {prev.num}
                  </span>
                  {prev.name}
                </div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mt-2">
                  {prev.category}
                </div>
              </button>
            )}
            {next && (
              <button
                onClick={() => onSelect(next.slug)}
                className="group text-right pt-6 pb-6 md:pl-8 md:border-b-0 border-b border-[rgba(16,36,58,0.12)]"
              >
                <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.55)] font-medium mb-2 flex items-center justify-end gap-2">
                  Next Project
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-serif text-[26px] md:text-[32px] text-[#10243A] leading-[1.1] tracking-[-0.015em] group-hover:text-[#C86B45] transition-colors">
                  {next.name}
                  <span className="font-serif italic text-[#C86B45] ml-2 text-[18px] align-baseline">
                    {next.num}
                  </span>
                </div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mt-2">
                  {next.category}
                </div>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
