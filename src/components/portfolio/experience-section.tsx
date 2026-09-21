"use client";

import { Reveal } from "./reveal";
import { EXPERIENCE, type ExperienceItem } from "@/lib/portfolio";

const statusBadge = (status: ExperienceItem["status"]) => {
  switch (status) {
    case "current":
      return { label: "Current", color: "forest" };
    case "research":
      return { label: "Research", color: "forest" };
    case "internship":
      return { label: "Internship", color: "terracotta" };
  }
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-12 md:py-16 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Head */}
        <div className="grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr] gap-6 md:gap-12 items-end pb-7 border-b border-[rgba(16,36,58,0.12)] mb-8 md:mb-10">
          <Reveal>
            <div className="editorial-eyebrow mb-5 md:mb-6">
              <span className="dot" />
              Chapter 03 · Experience
            </div>
            <h2 className="editorial-serif text-[64px] sm:text-[80px] md:text-[96px] lg:text-[108px] leading-[0.88] tracking-[-0.04em]">
              Building
              <br />
              AI systems,
              <br />
              <em>hands-on</em>
              <span className="text-[#C86B45] italic">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-right">
              <div className="font-serif text-[80px] sm:text-[100px] md:text-[110px] lg:text-[120px] leading-none tracking-[-0.04em] text-[#10243A]">
                <em className="italic text-[#C86B45]">06</em>
              </div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.6)] font-medium mt-3 leading-[1.6]">
                Months
                <br />
                <span className="text-[#10243A] font-semibold">Building AI Systems</span>
                <br />
                2024 → Present
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-20">
          <span className="absolute left-6 md:left-6 top-3 bottom-3 w-[1px] bg-[rgba(16,36,58,0.12)]" />

          {EXPERIENCE.map((exp, i) => {
            const badge = statusBadge(exp.status);
            return (
              <Reveal key={exp.num} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[0.2fr_0.6fr_0.2fr] gap-4 md:gap-8 py-7 md:py-8 border-b border-[rgba(16,36,58,0.12)] relative">
                  {/* node dot */}
                  <span
                    className={`absolute -left-[18px] md:-left-[50px] top-[34px] w-[11px] h-[11px] rounded-full z-[2] border ${
                      exp.status === "current"
                        ? "bg-[#C86B45] border-[#C86B45]"
                        : "bg-[#F5F1E8] border-[#10243A]"
                    }`}
                    style={
                      exp.status === "current"
                        ? { boxShadow: "0 0 0 5px rgba(200,107,69,0.18)" }
                        : undefined
                    }
                  />

                  {/* date */}
                  <div>
                    <div className="font-serif italic text-[28px] md:text-[36px] text-[#C86B45] leading-none mb-2.5">
                      {exp.num}
                    </div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.5]">
                      <span className="text-[#10243A] font-semibold">{exp.date}</span>
                      <br />
                      {exp.period}
                    </div>
                  </div>

                  {/* role + company + desc */}
                  <div>
                    <div className="font-serif text-[24px] md:text-[32px] text-[#10243A] tracking-[-0.015em] leading-[1.1] mb-1.5">
                      {exp.role.replace(exp.role.split(" ").slice(-1)[0], "")}
                      <em className="italic text-[#0F6654]">
                        {" "}
                        {exp.role.split(" ").slice(-1)[0]}
                      </em>
                    </div>
                    <div className="text-[12px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-3.5">
                      {exp.company}
                    </div>
                    <p className="text-[13.5px] text-[rgba(16,36,58,0.8)] leading-[1.65] max-w-[580px]">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {exp.tags.map((t) => (
                        <span key={t} className="editorial-tech-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* badge + city */}
                  <div className="text-right">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 border rounded-full mb-2.5 text-[10px] tracking-[0.22em] uppercase font-semibold ${
                        badge.color === "terracotta"
                          ? "border-[#C86B45] text-[#C86B45]"
                          : "border-[rgba(16,36,58,0.2)] text-[#10243A]"
                      }`}
                    >
                      <span
                        className={`w-[5px] h-[5px] rounded-full ${
                          badge.color === "terracotta" ? "bg-[#C86B45]" : "bg-[#0F6654]"
                        }`}
                      />
                      {badge.label}
                    </div>
                    <div className="font-serif italic text-[13px] text-[rgba(16,36,58,0.6)]">
                      {exp.city}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
