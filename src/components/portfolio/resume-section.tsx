"use client";

import { Reveal } from "./reveal";
import { PROFILE } from "@/lib/portfolio";

const EDUCATION = {
  date: "2021 — 2025",
  period: "4 years",
  name: "B.E. Computer Systems Engineering",
  place: "Mehran University of Engineering & Technology",
  desc: "Undergraduate engineering degree spanning computer architecture, embedded systems, software engineering, machine learning foundations, and computational systems design.",
};

const EXPERIENCE_ROWS = [
  {
    date: "08 / 2026 →",
    period: "Present",
    name: "Full-Stack AI Engineer",
    place: "Sofstica Solutions · Karachi",
    desc: "Production AI features across RAG, AI agents, and document intelligence.",
  },
  {
    date: "01 — 04 / 2026",
    period: "4 months",
    name: "AI Engineer Intern",
    place: "ITSolera Pvt. Ltd. · Karachi",
    desc: "LLM-powered client features, retrieval pipelines, AI agent deployment.",
  },
  {
    date: "07 — 08 / 2025",
    period: "2 months",
    name: "AI Engineer Intern",
    place: "Civil Aviation Authority of Pakistan",
    desc: "Internal data-driven tooling and prototype ML features for aviation operations.",
  },
  {
    date: "11 / 2024 — 11 / 2025",
    period: "12 months",
    name: "AI Researcher · SAFELINK",
    place: "Multimodal Wearable for Personal Safety",
    desc: "Research lead on a CV + edge + IoT wearable for personal safety.",
  },
];

const PROJECT_ROWS = [
  { num: "01", cat: "Healthcare AI", name: "ClinData Explorer", desc: "AI-powered clinical cohort & data-quality explorer · Text-to-SQL · 912K records." },
  { num: "02", cat: "Customer AI", name: "McDonald's AI Agent", desc: "AI customer-support and order-management workflow · LLM · FastAPI." },
  { num: "04", cat: "Document AI", name: "Enterprise RAG Assistant", desc: "Retrieval-augmented generation system for enterprise document intelligence." },
  { num: "05", cat: "Clinical AI", name: "Radiomed", desc: "Automated medical image diagnosis assistant · CNN · 99.8% top accuracy." },
  { num: "06", cat: "Wearable · CV", name: "SAFELINK", desc: "Multimodal smart wearable for personal safety · CV + Edge + IoT." },
  { num: "08", cat: "Forecasting", name: "Revenue AI", desc: "Sales prediction dashboard · polynomial regression · budget sliders." },
];

const ACHIEVEMENTS = [
  "Designed & shipped production RAG assistant at Sofstica.",
  "Led 12-month SAFELINK research project to working prototype.",
  "Completed 3 AI internships across industry & government.",
  "B.E. Computer Systems Engineering, Mehran UET (2021–2025).",
];

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-12 md:py-16 px-6 md:px-10 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Head */}
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_0.3fr] gap-6 md:gap-12 items-end pb-7 border-b border-[rgba(16,36,58,0.12)] mb-8 md:mb-10">
          <Reveal>
            <div className="editorial-eyebrow mb-5 md:mb-6">
              <span className="dot" />
              Chapter 07 · Resume
            </div>
            <h2 className="editorial-serif text-[56px] sm:text-[72px] md:text-[88px] lg:text-[96px] leading-[0.88] tracking-[-0.04em]">
              Résumé<em>.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-right text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.6]">
              <div>
                <span className="font-serif italic text-[14px] text-[#C86B45] mr-1.5">
                  i
                </span>
                One-Page CV
              </div>
              <div>Education · Experience</div>
              <div>Projects · Research</div>
              <div className="mt-3.5">11 / 12</div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.32fr_0.68fr] gap-8 md:gap-12">
          {/* LEFT */}
          <div className="relative">
            <Reveal>
              <a
                href={`mailto:${PROFILE.email}?subject=Requesting Naveen Khan's Resume PDF`}
                className="block bg-[#10243A] text-[#F5F1E8] rounded-md p-7 md:p-8 relative overflow-hidden hover:scale-[1.01] transition-transform"
              >
                <span
                  className="absolute right-3 -top-4 font-serif italic text-[180px] text-[rgba(245,241,232,0.05)] leading-[0.85] pointer-events-none"
                  aria-hidden
                >
                  ↧
                </span>
                <div className="text-[10px] tracking-[0.32em] uppercase text-[rgba(245,241,232,0.6)] font-medium mb-3">
                  PDF · ATS-friendly
                </div>
                <div className="font-serif text-[32px] md:text-[36px] leading-none tracking-[-0.02em] mb-2">
                  Download
                  <br />
                  <em className="italic text-[#B99A5B]">Résumé</em>
                </div>
                <div className="inline-flex items-center gap-2.5 mt-2 text-[12px] tracking-[0.22em] uppercase text-[#C86B45] font-semibold">
                  Get PDF <span>→</span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.6)] font-semibold mb-3 pb-2 border-b border-[rgba(16,36,58,0.12)]">
                  Profile
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-dashed border-[rgba(16,36,58,0.06)] text-[12px] text-[rgba(16,36,58,0.8)]">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                    Name
                  </span>
                  <span className="text-[#10243A] font-semibold">Naveen Khan</span>
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-dashed border-[rgba(16,36,58,0.06)] text-[12px] text-[rgba(16,36,58,0.8)]">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                    Role
                  </span>
                  <span className="text-[#10243A] font-semibold">AI Engineer</span>
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-dashed border-[rgba(16,36,58,0.06)] text-[12px] text-[rgba(16,36,58,0.8)]">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                    Location
                  </span>
                  <span className="text-[#10243A] font-semibold">Karachi, PK</span>
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-dashed border-[rgba(16,36,58,0.06)] text-[11px] text-[rgba(16,36,58,0.8)]">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                    Email
                  </span>
                  <span className="text-[#10243A] font-semibold text-right">naveenkhan0059<br />@gmail.com</span>
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-dashed border-[rgba(16,36,58,0.06)] text-[12px] text-[rgba(16,36,58,0.8)]">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                    GitHub
                  </span>
                  <span className="text-[#10243A] font-semibold text-[11px]">/Naveen-Khan</span>
                </div>
                <div className="flex justify-between items-baseline py-2 text-[12px] text-[rgba(16,36,58,0.8)]">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                    Experience
                  </span>
                  <span className="text-[#10243A] font-semibold">
                    <em className="font-serif italic text-[#C86B45]">06</em> months
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div>
            {/* Education */}
            <Reveal>
              <div className="mb-9">
                <div className="flex items-baseline justify-between pb-2.5 border-b border-[rgba(16,36,58,0.12)] mb-4">
                  <span className="font-serif text-[22px] md:text-[26px] text-[#10243A] tracking-[-0.01em]">
                    <em className="italic text-[#0F6654]">Education</em>
                  </span>
                  <span className="font-serif italic text-[13px] text-[#C86B45]">i.</span>
                </div>
                <div className="grid grid-cols-[0.22fr_0.78fr] gap-5 py-3.5 border-b border-dashed border-[rgba(16,36,58,0.06)]">
                  <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.5]">
                    <span className="text-[#10243A] font-semibold">{EDUCATION.date}</span>
                    <br />
                    {EDUCATION.period}
                  </div>
                  <div>
                    <div className="font-serif text-[17px] md:text-[18px] text-[#10243A] font-medium tracking-[-0.01em] leading-[1.2] mb-1">
                      B.E. Computer Systems{" "}
                      <em className="italic text-[#0F6654]">Engineering</em>
                    </div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-1.5">
                      {EDUCATION.place}
                    </div>
                    <div className="text-[12.5px] text-[rgba(16,36,58,0.8)] leading-[1.55]">
                      {EDUCATION.desc}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Experience */}
            <Reveal delay={0.1}>
              <div className="mb-9">
                <div className="flex items-baseline justify-between pb-2.5 border-b border-[rgba(16,36,58,0.12)] mb-4">
                  <span className="font-serif text-[22px] md:text-[26px] text-[#10243A] tracking-[-0.01em]">
                    <em className="italic text-[#0F6654]">Experience</em>
                  </span>
                  <span className="font-serif italic text-[13px] text-[#C86B45]">ii.</span>
                </div>
                {EXPERIENCE_ROWS.map((r) => (
                  <div
                    key={r.place}
                    className="grid grid-cols-[0.22fr_0.78fr] gap-5 py-3.5 border-b border-dashed border-[rgba(16,36,58,0.06)]"
                  >
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.5]">
                      <span className="text-[#10243A] font-semibold">{r.date}</span>
                      <br />
                      {r.period}
                    </div>
                    <div>
                      <div className="font-serif text-[17px] md:text-[18px] text-[#10243A] font-medium tracking-[-0.01em] leading-[1.2] mb-1">
                        <em className="italic text-[#0F6654]">{r.name.split(" ").slice(-1)[0]}</em>
                        <span> {r.name.replace(r.name.split(" ").slice(-1)[0], "")}</span>
                      </div>
                      <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-1.5">
                        {r.place}
                      </div>
                      <div className="text-[12.5px] text-[rgba(16,36,58,0.8)] leading-[1.55]">
                        {r.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Projects */}
            <Reveal delay={0.15}>
              <div className="mb-9">
                <div className="flex items-baseline justify-between pb-2.5 border-b border-[rgba(16,36,58,0.12)] mb-4">
                  <span className="font-serif text-[22px] md:text-[26px] text-[#10243A] tracking-[-0.01em]">
                    Selected <em className="italic text-[#0F6654]">Projects</em>
                  </span>
                  <span className="font-serif italic text-[13px] text-[#C86B45]">iii.</span>
                </div>
                {PROJECT_ROWS.map((p) => (
                  <div
                    key={p.num}
                    className="grid grid-cols-[0.22fr_0.78fr] gap-5 py-3.5 border-b border-dashed border-[rgba(16,36,58,0.06)]"
                  >
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.5]">
                      <span className="text-[#10243A] font-semibold">{p.num}</span>
                      <br />
                      {p.cat}
                    </div>
                    <div>
                      <div className="font-serif text-[17px] md:text-[18px] text-[#10243A] font-medium tracking-[-0.01em] leading-[1.2] mb-1">
                        {p.name}
                      </div>
                      <div className="text-[12.5px] text-[rgba(16,36,58,0.8)] leading-[1.55]">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Achievements */}
            <Reveal delay={0.2}>
              <div>
                <div className="flex items-baseline justify-between pb-2.5 border-b border-[rgba(16,36,58,0.12)] mb-4">
                  <span className="font-serif text-[22px] md:text-[26px] text-[#10243A] tracking-[-0.01em]">
                    <em className="italic text-[#0F6654]">Achievements</em>
                  </span>
                  <span className="font-serif italic text-[13px] text-[#C86B45]">iv.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {ACHIEVEMENTS.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-baseline gap-3 text-[13px] text-[rgba(16,36,58,0.8)] py-2.5 border-b border-dashed border-[rgba(16,36,58,0.06)]"
                    >
                      <span className="font-serif italic text-[13px] text-[#C86B45] flex-shrink-0 w-6">
                        {["i", "ii", "iii", "iv"][i]}.
                      </span>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
