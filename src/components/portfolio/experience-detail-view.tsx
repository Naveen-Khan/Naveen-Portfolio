"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Building2 } from "lucide-react";
import { Reveal } from "./reveal";
import { EXPERIENCE, type ExperienceItem } from "@/lib/portfolio";

interface Props {
  item: ExperienceItem;
  onClose: () => void;
  onSelect: (num: string) => void;
}

const statusBadge = (status: ExperienceItem["status"]) => {
  switch (status) {
    case "current":
      return { label: "Current", color: "gold" };
    case "project":
      return { label: "Project-Based Learning", color: "gold" };
    case "research":
      return { label: "Research", color: "gold" };
    case "internship":
      return { label: "Internship", color: "terracotta" };
  }
};

export function ExperienceDetailView({ item, onClose, onSelect }: Props) {
  // Find prev / next experience item
  const idx = EXPERIENCE.findIndex((e) => e.num === item.num);
  const prev = idx > 0 ? EXPERIENCE[idx - 1] : null;
  const next = idx < EXPERIENCE.length - 1 ? EXPERIENCE[idx + 1] : null;

  // Scroll to top on mount
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  const badge = statusBadge(item.status);
  const roleWords = item.role.split(" ");
  const lastWord = roleWords.slice(-1)[0];
  const restRole = roleWords.slice(0, -1).join(" ");

  return (
    <div
      className="min-h-screen dark-detail"
      style={{ background: "var(--color-navy-dark)", color: "var(--color-ivory)" }}
    >
      {/* Top breadcrumb + back */}
      <div className="pt-20 md:pt-24 px-6 md:px-10 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b border-[rgba(245,241,232,0.15)] mb-8 md:mb-10">
              <button
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.6)] font-medium hover:text-[#F5F1E8] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to experience
              </button>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.6)] font-medium">
                <span className="font-serif italic text-[14px] text-[#C86B45] mr-2">
                  {item.num}
                </span>
                Experience{" "}
                <span className="mx-2.5 text-[rgba(245,241,232,0.2)]">/</span>
                <span className="text-[#F5F1E8] font-semibold">{item.role}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Hero block — huge typography + description + tags */}
      <section className="px-6 md:px-10 lg:px-12 pb-10 md:pb-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-8 md:gap-12 items-start">
          {/* LEFT — title block */}
          <div>
            <Reveal>
              <div
                className="font-serif text-[90px] sm:text-[120px] md:text-[160px] leading-[0.82] tracking-[-0.04em] mb-3"
                style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif-playfair), Georgia, serif", fontWeight: 400 }}
              >
                {item.num}
                <span className="text-[#C86B45] italic">.</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="font-serif text-[40px] sm:text-[52px] md:text-[60px] leading-[0.94] tracking-[-0.025em] mb-5"
                style={{ color: "var(--color-ivory)", fontFamily: "var(--font-serif-playfair), Georgia, serif", fontWeight: 400 }}
              >
                {restRole}{" "}
                <em className="italic text-[#5DD899]">{lastWord}</em>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="text-[14px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-5">
                {item.company}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[15px] leading-[1.65] text-[rgba(245,241,232,0.72)] max-w-[420px] mb-7">
                {item.description}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2 mb-7">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[rgba(245,241,232,0.22)] rounded-full text-[10px] font-medium tracking-[0.16em] uppercase text-[rgba(245,241,232,0.8)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              {/* Meta rows */}
              <div className="space-y-3 pt-5 border-t border-[rgba(245,241,232,0.18)]">
                <div className="flex items-baseline gap-3 text-[12px]">
                  <Calendar className="w-3.5 h-3.5 text-[#5DD899] flex-shrink-0" />
                  <span className="text-[rgba(245,241,232,0.55)] text-[10px] tracking-[0.22em] uppercase font-medium">
                    Duration
                  </span>
                  <span className="text-[#F5F1E8] font-semibold ml-auto text-right">
                    {item.date} · {item.period}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 text-[12px]">
                  <Building2 className="w-3.5 h-3.5 text-[#5DD899] flex-shrink-0" />
                  <span className="text-[rgba(245,241,232,0.55)] text-[10px] tracking-[0.22em] uppercase font-medium">
                    Organization
                  </span>
                  <span className="text-[#F5F1E8] font-semibold ml-auto text-right">
                    {item.company}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 text-[12px]">
                  <MapPin className="w-3.5 h-3.5 text-[#5DD899] flex-shrink-0" />
                  <span className="text-[rgba(245,241,232,0.55)] text-[10px] tracking-[0.22em] uppercase font-medium">
                    Location
                  </span>
                  <span className="text-[#F5F1E8] font-semibold ml-auto text-right">
                    {item.city}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — experience details as a "highlights" panel */}
          <Reveal delay={0.15} y={40}>
            <motion.div
              initial={{ opacity: 0.6 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[rgba(245,241,232,0.04)] border border-[rgba(245,241,232,0.18)] rounded-lg p-6 md:p-7"
              style={{ boxShadow: "0 30px 60px -40px rgba(0,0,0,0.5)" }}
            >
              {/* status badge + count */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(245,241,232,0.18)] mb-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-full text-[10px] tracking-[0.18em] uppercase font-semibold ${
                      badge.color === "terracotta"
                        ? "border-[#C86B45] text-[#C86B45]"
                        : "border-[rgba(245,241,232,0.22)] text-[#F5F1E8]"
                    }`}
                  >
                    <span
                      className={`w-[5px] h-[5px] rounded-full ${
                        badge.color === "terracotta" ? "bg-[#C86B45]" : "bg-[#5DD899]"
                      }`}
                    />
                    {badge.label}
                  </span>
                </div>
                <span className="font-serif italic text-[12px] text-[#C86B45]">
                  i.
                </span>
              </div>

              {/* Highlights list */}
              {item.details && item.details.length > 0 && (
                <div>
                  <div className="text-[10px] tracking-[0.32em] uppercase text-[#F5F1E8] font-semibold mb-4">
                    Key Highlights
                  </div>
                  <ul className="space-y-3">
                    {item.details.map((d, di) => (
                      <li
                        key={di}
                        className="flex items-baseline gap-3 text-[13.5px] text-[rgba(245,241,232,0.78)] leading-[1.55] py-2 border-b border-dashed border-[rgba(245,241,232,0.1)] last:border-0"
                      >
                        <span className="font-serif italic text-[12px] text-[#C86B45] flex-shrink-0 w-5 mt-0.5">
                          {["i", "ii", "iii", "iv", "v", "vi"][di]}.
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags section */}
              <div className="mt-5 pt-5 border-t border-[rgba(245,241,232,0.18)]">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#F5F1E8] font-semibold mb-3">
                  Technologies &amp; Skills
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[rgba(245,241,232,0.18)] rounded text-[9px] font-medium tracking-[0.16em] uppercase text-[rgba(245,241,232,0.7)] bg-[rgba(245,241,232,0.03)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Prev / Next nav */}
      <section className="px-6 md:px-10 lg:px-12 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto border-t border-[rgba(245,241,232,0.18)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {prev && (
              <button
                onClick={() => onSelect(prev.num)}
                className="group text-left pt-5 pb-5 md:pr-8 md:border-r border-[rgba(245,241,232,0.18)] md:border-b-0 border-b border-[rgba(245,241,232,0.18)]"
              >
                <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-2 flex items-center gap-2">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  Previous Role
                </div>
                <div className="font-serif text-[20px] md:text-[24px] text-[#F5F1E8] leading-[1.15] tracking-[-0.015em] group-hover:text-[#C86B45] transition-colors">
                  <span className="font-serif italic text-[#C86B45] mr-2 text-[16px] align-baseline">
                    {prev.num}
                  </span>
                  {prev.role}
                </div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.55)] font-medium mt-2">
                  {prev.company}
                </div>
              </button>
            )}
            {next && (
              <button
                onClick={() => onSelect(next.num)}
                className="group text-right pt-5 pb-5 md:pl-8 md:border-b-0 border-b border-[rgba(245,241,232,0.18)]"
              >
                <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-2 flex items-center justify-end gap-2">
                  Next Role
                  <ArrowLeft className="w-3 h-3 rotate-180 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-serif text-[20px] md:text-[24px] text-[#F5F1E8] leading-[1.15] tracking-[-0.015em] group-hover:text-[#C86B45] transition-colors">
                  {next.role}
                  <span className="font-serif italic text-[#C86B45] ml-2 text-[16px] align-baseline">
                    {next.num}
                  </span>
                </div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.55)] font-medium mt-2">
                  {next.company}
                </div>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
