"use client";

import { Reveal } from "./reveal";
import { motion } from "framer-motion";

const STATS = [
  { roman: "i", label: "Patient Records", value: "912,284", desc: "EHR records queried" },
  { roman: "ii", label: "Clinical Tables", value: "10", desc: "Normalised schema" },
  { roman: "iii", label: "Data Quality Rules", value: "12", desc: "Live-evaluated" },
  { roman: "iv", label: "Query Latency", value: "1.8s", desc: "Avg · NL → result set", italic: true },
];

const COHORT_ROWS = [
  { id: "PKR-048291", age: 57, dx: "T2DM", hba1c: "8.4", last: "2024-09-12", q: "R-02", flagged: true },
  { id: "PKR-048317", age: 52, dx: "T2DM", hba1c: "7.2", last: "2024-08-30", q: "OK" },
  { id: "PKR-048402", age: 63, dx: "T2DM + HTN", hba1c: "9.1", last: "2024-09-04", q: "R-02", flagged: true },
  { id: "PKR-048519", age: 44, dx: "T2DM", hba1c: "7.0", last: "2024-07-22", q: "OK" },
  { id: "PKR-048588", age: 49, dx: "T2DM", hba1c: "7.5", last: "2024-09-18", q: "OK" },
  { id: "PKR-048612", age: 61, dx: "T2DM", hba1c: "—", last: "2024-06-14", q: "R-01", flagged: true },
  { id: "PKR-048704", age: 58, dx: "T2DM", hba1c: "7.3", last: "2024-08-11", q: "OK" },
];

export function ProjectClinDataSection() {
  return (
    <section
      id="project-clindata"
      className="relative py-16 md:py-24 px-6 md:px-10 lg:px-12 bg-[#F5F1E8]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top */}
        <Reveal>
          <div className="flex flex-wrap justify-between items-center pb-5 border-b border-[rgba(16,36,58,0.12)] mb-10 md:mb-12">
            <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
              <span className="font-serif italic text-[14px] text-[#C86B45] mr-2">01</span>
              Work <span className="mx-2.5 text-[rgba(16,36,58,0.2)]">/</span>
              <span className="text-[#10243A] font-semibold">ClinData Explorer</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
              <span className="text-[#10243A] font-semibold">01 ClinData</span>
              <span>02 McDonald&apos;s</span>
              <span>03 CardioRisk</span>
              <span>04 RAG</span>
              <span>05 Med AI</span>
              <span>06 SAFELINK</span>
              <span className="w-[220px] h-[1px] bg-[rgba(16,36,58,0.12)] relative">
                <span className="absolute left-0 top-0 h-[1px] w-[12.5%] bg-[#C86B45]" />
              </span>
            </div>
          </div>
        </Reveal>

        {/* Project layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-10 md:gap-12 items-start mb-12 md:mb-14">
          {/* LEFT */}
          <div>
            <Reveal>
              <div className="font-serif text-[140px] sm:text-[180px] md:text-[220px] leading-[0.82] tracking-[-0.04em] text-[#10243A] mb-4">
                01<span className="text-[#C86B45] italic">.</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="editorial-serif text-[44px] sm:text-[56px] md:text-[64px] leading-[0.94] tracking-[-0.025em] mb-7">
                ClinData
                <br />
                <em>Explorer</em>
                <span className="text-[#C86B45] italic">.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[15px] leading-[1.65] text-[rgba(16,36,58,0.8)] max-w-[420px] mb-7">
                An AI-powered clinical cohort and data-quality explorer designed for
                hospital research desks — turning 900K+ patient records into queryable
                insight with natural-language SQL, on-the-fly cohort filtering, and live
                data-quality rule evaluation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 mb-7">
                {["AI for Healthcare", "Text-to-SQL", "Data Quality", "Full-Stack AI"].map(
                  (t) => (
                    <span key={t} className="editorial-tech-chip">
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <a href="#work" className="editorial-cta">
                View Project <span>→</span>
              </a>
            </Reveal>
          </div>

          {/* RIGHT — clinical UI mockup */}
          <Reveal delay={0.15} y={40}>
            <motion.div
              initial={{ opacity: 0.6 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-lg p-4 md:p-[18px]"
              style={{ boxShadow: "0 30px 60px -40px rgba(16,36,58,0.25)" }}
            >
              {/* topbar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(16,36,58,0.12)] mb-3.5">
                <div className="flex items-center gap-3 text-[12px] font-semibold text-[#10243A]">
                  <span className="flex gap-1.5">
                    {["", "", ""].map((_, i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-[rgba(16,36,58,0.12)]"
                      />
                    ))}
                  </span>
                  <span className="hidden sm:inline">ClinData Explorer · v1.4</span>
                  <span className="sm:hidden">ClinData</span>
                </div>
                <div className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] hidden md:block">
                  Live · EHR
                </div>
              </div>

              {/* data area */}
              <div className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-3.5">
                {/* sidebar */}
                <div className="bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] rounded p-3.5">
                  <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-3">
                    Clinical Tables
                  </div>
                  <ul className="space-y-0.5">
                    {[
                      { name: "Patients", active: true },
                      { name: "Encounters" },
                      { name: "Lab Results" },
                      { name: "Diagnoses" },
                      { name: "Medications" },
                      { name: "Vitals" },
                      { name: "Procedures" },
                    ].map((t) => (
                      <li
                        key={t.name}
                        className={`flex items-center gap-2 text-[11px] px-2 py-1.5 rounded ${
                          t.active
                            ? "bg-[#10243A] text-[#F5F1E8]"
                            : "text-[#10243A]"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-sm flex-shrink-0 ${
                            t.active ? "bg-[#C86B45]" : "bg-[#0F6654]"
                          }`}
                        />
                        {t.name}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] mt-4 mb-2">
                    Quality Rules
                  </div>
                  <div className="text-[11px] text-[rgba(16,36,58,0.8)] leading-[1.5] py-2 border-t border-dashed border-[rgba(16,36,58,0.12)]">
                    <span className="block text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-semibold mb-1">
                      R-01 · Missing DOB
                    </span>
                    412 records flagged
                  </div>
                  <div className="text-[11px] text-[rgba(16,36,58,0.8)] leading-[1.5] py-2 border-t border-dashed border-[rgba(16,36,58,0.12)]">
                    <span className="block text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-semibold mb-1">
                      R-02 · Out-of-range HbA1c
                    </span>
                    88 records flagged
                  </div>
                </div>

                {/* main panel */}
                <div className="bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] rounded p-3.5">
                  {/* prompt */}
                  <div className="font-serif text-[14px] text-[#10243A] italic bg-[#E6DECC] p-2.5 md:p-3.5 rounded mb-3.5 border-l-2 border-[#C86B45]">
                    <span className="block font-sans not-italic text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-semibold mb-1.5">
                      Natural Language Query
                    </span>
                    &ldquo;show me diabetic patients aged 40–65 with HbA1c above 7 in
                    2024&rdquo;
                  </div>

                  {/* table head */}
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[11px] font-semibold text-[#10243A]">
                      Cohort Results — 8,402 patients
                    </span>
                    <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)]">
                      12 Rules ·{" "}
                      <span className="inline-block px-1.5 py-0.5 ml-1 bg-[rgba(200,107,69,0.15)] text-[#C86B45] rounded tracking-[0.12em]">
                        3 Active Flags
                      </span>
                    </span>
                  </div>

                  {/* table */}
                  <div className="overflow-x-auto no-scrollbar -mx-1">
                    <table className="w-full text-[10.5px] border-collapse">
                      <thead>
                        <tr>
                          {["Patient ID", "Age", "Diagnosis", "HbA1c", "Last Visit", "Quality"].map(
                            (h) => (
                              <th
                                key={h}
                                className="text-left px-1.5 py-2 border-b border-[rgba(16,36,58,0.12)] text-[9px] font-semibold uppercase tracking-[0.12em] text-[rgba(16,36,58,0.6)] whitespace-nowrap"
                              >
                                {h}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {COHORT_ROWS.map((r) => (
                          <tr
                            key={r.id}
                            className={r.flagged ? "bg-[rgba(200,107,69,0.05)]" : ""}
                          >
                            <td className="px-1.5 py-2 border-b border-[rgba(16,36,58,0.06)] text-[#10243A] whitespace-nowrap">
                              {r.id}
                            </td>
                            <td className="px-1.5 py-2 border-b border-[rgba(16,36,58,0.06)] text-[#10243A]">
                              {r.age}
                            </td>
                            <td className="px-1.5 py-2 border-b border-[rgba(16,36,58,0.06)] text-[#10243A] whitespace-nowrap">
                              {r.dx}
                            </td>
                            <td
                              className={`px-1.5 py-2 border-b border-[rgba(16,36,58,0.06)] font-semibold ${
                                r.flagged ? "text-[#C86B45]" : "text-[#10243A]"
                              }`}
                            >
                              {r.hba1c}
                            </td>
                            <td className="px-1.5 py-2 border-b border-[rgba(16,36,58,0.06)] text-[#10243A] whitespace-nowrap">
                              {r.last}
                            </td>
                            <td
                              className={`px-1.5 py-2 border-b border-[rgba(16,36,58,0.06)] font-semibold ${
                                r.q === "OK" ? "text-[#0F6654]" : "text-[#C86B45]"
                              }`}
                            >
                              {r.q}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[rgba(16,36,58,0.12)] -mx-0 md:-mx-0 px-0 py-8 md:py-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className={`px-4 md:px-8 ${
                  i > 0 ? "lg:border-l border-[rgba(16,36,58,0.12)]" : ""
                } ${i === 1 || i === 3 ? "border-l lg:border-l border-[rgba(16,36,58,0.12)]" : ""}`}
              >
                <div className="text-[9px] tracking-[0.32em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-3.5 flex items-center gap-2">
                  <span className="font-serif italic text-[11px] text-[#C86B45] tracking-normal">
                    {s.roman}
                  </span>
                  {s.label}
                </div>
                <div
                  className={`font-serif text-[44px] md:text-[56px] leading-none tracking-[-0.025em] ${
                    s.italic ? "text-[#10243A]" : "text-[#10243A]"
                  }`}
                >
                  {s.italic ? <em className="italic text-[#0F6654]">1.8</em> : s.value}
                  {s.italic && <span>s</span>}
                </div>
                <div className="text-[11px] text-[rgba(16,36,58,0.6)] mt-2.5">
                  {s.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Foot */}
        <div className="flex justify-between items-center mt-8 md:mt-10">
          <div className="flex gap-6 text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
            <span>← Previous</span>
            <span className="text-[#10243A] font-semibold hidden sm:inline">
              01 / 08 — ClinData Explorer
            </span>
            <span>Next →</span>
          </div>
          <div className="editorial-meta-label">04 / 12</div>
        </div>
      </div>
    </section>
  );
}
