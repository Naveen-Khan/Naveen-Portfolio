"use client";

import { Reveal } from "./reveal";
import { PROJECTS } from "@/lib/portfolio";

interface Props {
  onSelectProject: (slug: string) => void;
}

export function SelectedWorkSection({ onSelectProject }: Props) {
  return (
    <section id="work" className="relative py-12 md:py-16 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Title block */}
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_0.3fr] gap-6 md:gap-12 items-end mb-8 md:mb-10 pb-7 border-b border-[rgba(16,36,58,0.12)]">
          <Reveal>
            <div className="editorial-eyebrow mb-5 md:mb-7">
              <span className="dot" />
              Chapter 02 · Selected Work
            </div>
            <h2 className="editorial-serif text-[64px] sm:text-[88px] md:text-[110px] lg:text-[132px] leading-[0.88] tracking-[-0.04em]">
              Selected
              <br />
              Work<em>.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-right text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.6]">
              <div>
                <span className="font-serif italic text-[14px] text-[#C86B45] mr-1.5">
                  i
                </span>
                Eight Projects
              </div>
              <div>
                Across <span className="text-[#10243A] font-semibold">Healthcare</span>,
              </div>
              <div>
                <span className="text-[#10243A] font-semibold">Customer AI</span>, Research
              </div>
              <div className="mt-3.5">03 — 12</div>
            </div>
          </Reveal>
        </div>

        {/* Project rows — click opens detail view */}
        <div className="mt-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.04}>
              <button
                onClick={() => onSelectProject(p.slug)}
                className="group w-full text-left grid grid-cols-[40px_1fr_80px] sm:grid-cols-[60px_1fr_1.1fr_220px_80px] gap-3 sm:gap-6 items-baseline py-5 md:py-6 border-t border-[rgba(16,36,58,0.12)] relative transition-[padding] duration-300 hover:pl-3 cursor-pointer"
              >
                {/* hover dot */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#C86B45] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="font-serif italic text-[20px] md:text-[22px] text-[#C86B45]">
                  {p.num}
                </div>

                <div className="font-serif text-[22px] md:text-[30px] text-[#10243A] leading-[1.1] tracking-[-0.01em] group-hover:text-[#C86B45] transition-colors">
                  {p.name}
                  <span className="block font-sans text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] mt-1.5 font-medium group-hover:text-[#10243A] transition-colors">
                    {p.category}
                  </span>
                </div>

                {/* hidden on mobile */}
                <div className="hidden lg:block text-[14px] text-[rgba(16,36,58,0.8)] leading-[1.5]">
                  {p.description}
                </div>

                <div className="hidden lg:flex flex-wrap items-center gap-1.5">
                  {p.tags.map((t, ti) => (
                    <span key={t} className="flex items-center">
                      <span className="font-sans text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                        {t}
                      </span>
                      {ti < p.tags.length - 1 && (
                        <span className="w-[4px] h-[4px] rounded-full bg-[rgba(16,36,58,0.2)] mx-2.5" />
                      )}
                    </span>
                  ))}
                </div>

                <div className="text-right font-sans text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium group-hover:text-[#C86B45] group-hover:translate-x-2 transition-all">
                  View →
                </div>
              </button>
            </Reveal>
          ))}
          <div className="border-b border-[rgba(16,36,58,0.12)]" />
        </div>

        {/* Helper text */}
        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-12 flex items-center justify-center gap-2 text-[10px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.5)] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C86B45]" />
            Click any project to open its detail page
          </div>
        </Reveal>
      </div>
    </section>
  );
}
