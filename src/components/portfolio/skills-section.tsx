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
            i <= level ? "bg-[#0F6654]" : "bg-[rgba(16,36,58,0.2)]"
          }`}
        />
      ))}
    </span>
  );
}

function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const letter = String.fromCharCode(97 + index); // a, b, c...
  return (
    <li className="flex items-baseline gap-3 py-1.5 border-b border-dashed border-[rgba(16,36,58,0.06)]">
      <span className="font-serif italic text-[11px] text-[#C86B45] flex-shrink-0 w-4">
        {letter}.
      </span>
      <span className="text-[13.5px] text-[#10243A] font-medium">{skill.name}</span>
      <span className="ml-auto">
        <LevelDots level={skill.level} />
      </span>
    </li>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Head */}
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_0.3fr] gap-6 md:gap-12 items-end pb-7 border-b border-[rgba(16,36,58,0.12)] mb-12 md:mb-14">
          <Reveal>
            <div className="editorial-eyebrow mb-5 md:mb-6">
              <span className="dot" />
              Chapter 05 · Capabilities
            </div>
            <h2 className="editorial-serif text-[64px] sm:text-[80px] md:text-[100px] lg:text-[110px] leading-[0.88] tracking-[-0.04em]">
              Skills &amp;
              <br />
              Capabilities<em>.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-right text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.6]">
              <div>
                <span className="font-serif italic text-[14px] text-[#C86B45] mr-1.5">
                  i
                </span>
                Six Domains
              </div>
              <div>
                <span className="text-[#10243A] font-semibold">32</span> Skills
              </div>
              <div>
                Across <span className="text-[#10243A] font-semibold">AI Engineering</span>
              </div>
              <div className="mt-3.5">09 / 12</div>
            </div>
          </Reveal>
        </div>

        {/* Cluster grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(16,36,58,0.12)] border border-[rgba(16,36,58,0.12)] rounded-md overflow-hidden">
          {SKILL_CLUSTERS.map((cluster, ci) => (
            <Reveal key={cluster.title} delay={ci * 0.06}>
              <div
                className={`p-7 md:p-8 relative min-h-[270px] ${
                  cluster.featured ? "bg-[#EFE9DC]" : "bg-[#F5F1E8]"
                }`}
              >
                {cluster.featured && (
                  <span
                    className="absolute top-7 right-7 font-serif italic text-[80px] text-[rgba(15,102,84,0.08)] leading-none"
                    aria-hidden
                  >
                    i.
                  </span>
                )}

                <div className="flex items-baseline justify-between pb-3.5 border-b border-[rgba(16,36,58,0.12)] mb-4.5">
                  <span
                    className={`font-serif text-[22px] md:text-[24px] leading-none tracking-[-0.01em] ${
                      cluster.featured ? "text-[#0F6654]" : "text-[#10243A]"
                    }`}
                  >
                    {cluster.italicPart ? (
                      <>
                        <em className="italic text-[#0F6654]">{cluster.title}</em>{" "}
                        {cluster.italicPart}
                      </>
                    ) : (
                      <em className="italic text-[#0F6654]">{cluster.title}</em>
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
          <div className="mt-10 flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-[rgba(16,36,58,0.12)]">
            <div className="flex flex-wrap items-center gap-5 text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
              <span className="flex items-center gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#0F6654]" />
                Working Knowledge
              </span>
              <span className="flex items-center gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[rgba(16,36,58,0.2)]" />
                Foundational
              </span>
              <span className="opacity-50">·</span>
              <span>No progress bars. Just an honest map.</span>
            </div>
            <div className="font-serif italic text-[14px] text-[rgba(16,36,58,0.6)]">
              — capability, not theatre.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
