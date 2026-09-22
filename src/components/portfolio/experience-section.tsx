"use client";

import { Reveal } from "./reveal";
import { EXPERIENCE, type ExperienceItem } from "@/lib/portfolio";

const statusBadge = (status: ExperienceItem["status"]) => {
  switch (status) {
    case "current":
      return { label: "Current", color: "gold" };
    case "project":
      return { label: "Project-Based", color: "gold" };
    case "research":
      return { label: "Research", color: "gold" };
    case "internship":
      return { label: "Internship", color: "terracotta" };
  }
};

interface Props {
  onSelectExperience?: (num: string) => void;
}

export function ExperienceSection({ onSelectExperience }: Props) {
  return (
    <section
      id="experience"
      className="dark-detail relative py-12 md:py-16 px-6 md:px-10 lg:px-12"
      style={{ background: "var(--color-navy-dark)", color: "var(--color-ivory)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Head */}
        <div className="grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr] gap-6 md:gap-12 items-end pb-7 border-b border-[rgba(245,241,232,0.18)] mb-8 md:mb-10">
          <Reveal>
            <div className="editorial-eyebrow light mb-5 md:mb-6">
              <span className="dot" style={{ background: "var(--color-gold)" }} />
              Chapter 03 · Experience
            </div>
            <h2
              className="font-serif text-[52px] sm:text-[64px] md:text-[80px] lg:text-[88px] leading-[0.88] tracking-[-0.04em] text-[#F5F1E8]"
              style={{ fontFamily: "var(--font-serif-playfair), Georgia, serif", fontWeight: 400 }}
            >
              Building
              <br />
              AI systems,
              <br />
              <em className="italic text-[#B99A5B]">hands-on</em>
              <span className="text-[#C86B45] italic">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-right">
              <div className="font-serif text-[64px] sm:text-[80px] md:text-[90px] lg:text-[100px] leading-none tracking-[-0.04em] text-[#F5F1E8]">
                <em className="italic text-[#C86B45]">06</em>
              </div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.55)] font-medium mt-3 leading-[1.6]">
                Months
                <br />
                <span className="text-[#F5F1E8] font-semibold">Building AI Systems</span>
                <br />
                2024 → Present
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-20">
          <span className="absolute left-6 md:left-6 top-3 bottom-3 w-[1px] bg-[rgba(245,241,232,0.18)]" />

          {EXPERIENCE.map((exp, i) => {
            const badge = statusBadge(exp.status);
            const Wrapper = onSelectExperience ? "button" : "div";
            const wrapperProps = onSelectExperience
              ? {
                  onClick: () => onSelectExperience!(exp.num),
                  className:
                    "group w-full text-left grid grid-cols-1 md:grid-cols-[0.2fr_0.6fr_0.2fr] gap-4 md:gap-8 py-7 md:py-8 border-b border-[rgba(245,241,232,0.18)] relative cursor-pointer hover:bg-[rgba(245,241,232,0.03)] transition-colors",
                }
              : {
                  className:
                    "grid grid-cols-1 md:grid-cols-[0.2fr_0.6fr_0.2fr] gap-4 md:gap-8 py-7 md:py-8 border-b border-[rgba(245,241,232,0.18)] relative",
                };
            return (
              <Reveal key={exp.num} delay={i * 0.08}>
                <Wrapper {...wrapperProps}>
                  {/* node dot */}
                  <span
                    className={`absolute -left-[18px] md:-left-[50px] top-[34px] w-[11px] h-[11px] rounded-full z-[2] border ${
                      exp.status === "current" || exp.status === "project"
                        ? "bg-[#C86B45] border-[#C86B45]"
                        : "bg-[#0C1A2C] border-[#F5F1E8]"
                    }`}
                    style={
                      exp.status === "current" || exp.status === "project"
                        ? { boxShadow: "0 0 0 5px rgba(200,107,69,0.18)" }
                        : undefined
                    }
                  />

                  {/* date */}
                  <div>
                    <div className="font-serif italic text-[28px] md:text-[36px] text-[#C86B45] leading-none mb-2.5">
                      {exp.num}
                    </div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.55)] font-medium leading-[1.5]">
                      <span className="text-[#F5F1E8] font-semibold">{exp.date}</span>
                      <br />
                      {exp.period}
                    </div>
                  </div>

                  {/* role + company (description + tags moved to detail view only) */}
                  <div>
                    <div className="font-serif text-[20px] md:text-[26px] text-[#F5F1E8] tracking-[-0.015em] leading-[1.3] mb-2 group-hover:text-[#B99A5B] transition-colors">
                      {exp.role.split(" ").slice(0, -1).join(" ")}{" "}
                      <em className="italic text-[#B99A5B]">
                        {exp.role.split(" ").slice(-1)[0]}
                      </em>
                    </div>
                    <div className="text-[12px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.55)] font-medium mb-3.5">
                      {exp.company}
                    </div>

                    {/* Click hint — full details on the dedicated detail page */}
                    {onSelectExperience && (
                      <div className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-[#C86B45] font-semibold group-hover:translate-x-1 transition-transform">
                        View Details
                        <span aria-hidden>→</span>
                      </div>
                    )}
                  </div>

                  {/* badge + city */}
                  <div className="text-right">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 border rounded-full mb-2.5 text-[10px] tracking-[0.22em] uppercase font-semibold ${
                        badge.color === "terracotta"
                          ? "border-[#C86B45] text-[#C86B45]"
                          : "border-[rgba(245,241,232,0.22)] text-[#F5F1E8]"
                      }`}
                    >
                      <span
                        className={`w-[5px] h-[5px] rounded-full ${
                          badge.color === "terracotta" ? "bg-[#C86B45]" : "bg-[#B99A5B]"
                        }`}
                      />
                      {badge.label}
                    </div>
                    <div className="font-serif italic text-[13px] text-[rgba(245,241,232,0.55)]">
                      {exp.city}
                    </div>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
