"use client";

import { Reveal } from "./reveal";
import { SKILL_CLUSTERS, type Skill } from "@/lib/portfolio";

function LevelDots({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`w-[5px] h-[5px] rounded-full mx-0.5 ${
            i <= level ? "bg-[#B99A5B]" : "bg-[rgba(245,241,232,0.2)]"
          }`}
        />
      ))}
    </span>
  );
}

function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const letter = String.fromCharCode(97 + index); // a, b, c...
  return (
    <li className="flex items-baseline gap-3 py-1.5 border-b border-dashed border-[rgba(245,241,232,0.08)] overflow-hidden">
      <span className="font-serif italic text-[11px] text-[#C86B45] flex-shrink-0 w-4">
        {letter}.
      </span>
      <span className="text-[13.5px] text-[#F5F1E8] font-medium break-words min-w-0">
        {skill.name}
      </span>
      <span className="ml-auto">
        <LevelDots level={skill.level} />
      </span>
    </li>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="dark-detail relative py-12 md:py-16 px-6 md:px-10 lg:px-12"
      style={{ background: "var(--color-navy-dark)", color: "var(--color-ivory)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Head */}
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_0.3fr] gap-6 md:gap-12 items-end pb-7 border-b border-[rgba(245,241,232,0.18)] mb-8 md:mb-10">
          <Reveal>
            <div className="editorial-eyebrow light mb-5 md:mb-6">
              <span className="dot" style={{ background: "var(--color-gold)" }} />
              Chapter 05 · Capabilities
            </div>
            <h2
              className="font-serif text-[52px] sm:text-[64px] md:text-[76px] lg:text-[84px] leading-[0.88] tracking-[-0.04em] text-[#F5F1E8]"
              style={{ fontFamily: "var(--font-serif-playfair), Georgia, serif", fontWeight: 400 }}
            >
              Skills &amp;
              <br />
              Capabilities<em className="italic text-[#B99A5B]">.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-right text-[11px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.55)] font-medium leading-[1.6]">
              <div>
                <span className="font-serif italic text-[14px] text-[#C86B45] mr-1.5">
                  i
                </span>
                Six Domains
              </div>
              <div>
                <span className="text-[#F5F1E8] font-semibold">26</span> Skills
              </div>
              <div>
                Across <span className="text-[#F5F1E8] font-semibold">AI Engineering</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Cluster grid — 2 rows × 3 cols, each card with its own subtle border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SKILL_CLUSTERS.map((cluster, ci) => (
            <Reveal key={cluster.title} delay={ci * 0.06}>
              <div
                className={`p-6 md:p-7 relative rounded-md border min-h-[260px] overflow-hidden min-w-0 ${
                  cluster.featured
                    ? "border-[#B99A5B] bg-[rgba(185,154,91,0.08)]"
                    : "border-[rgba(245,241,232,0.15)] bg-[rgba(245,241,232,0.03)]"
                }`}
              >
                <div className="flex items-baseline justify-between pb-3.5 border-b border-[rgba(245,241,232,0.15)] mb-4">
                  <span
                    className="font-serif text-[20px] md:text-[22px] leading-none tracking-[-0.01em] text-[#F5F1E8]"
                  >
                    {cluster.italicPart ? (
                      <>
                        <em className="italic text-[#B99A5B]">{cluster.title}</em>{" "}
                        {cluster.italicPart}
                      </>
                    ) : (
                      <em className="italic text-[#B99A5B]">{cluster.title}</em>
                    )}
                  </span>
                  <span className="font-serif italic text-[14px] text-[#C86B45]">
                    {cluster.romanNum}
                  </span>
                </div>

                <ul>
                  {cluster.skills.map((skill, i) => (
                    <SkillRow key={skill.name} skill={skill} index={i} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Legend */}
        <Reveal>
          <div className="mt-10 flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-[rgba(245,241,232,0.18)]">
            <div className="flex flex-wrap items-center gap-5 text-[10px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.55)] font-medium">
              <span className="flex items-center gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#B99A5B]" />
                Working Knowledge
              </span>
              <span className="flex items-center gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[rgba(245,241,232,0.2)]" />
                Foundational
              </span>
              <span className="opacity-50">·</span>
              <span>No progress bars. Just an honest map.</span>
            </div>
            <div className="font-serif italic text-[14px] text-[rgba(245,241,232,0.55)]">
              — capability, not theatre.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
