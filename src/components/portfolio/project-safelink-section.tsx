"use client";

import { Reveal } from "./reveal";

const FLOW_STAGES = [
  { num: "1", label: "Sensors", sub: "6-channel" },
  { num: "2", label: "Edge CV", sub: "YOLO" },
  { num: "3", label: "Anomaly", sub: "ML" },
  { num: "4", label: "SOS Relay", sub: "IoT" },
];

const CV_TAGS_T = [
  { label: "YOLO Detection", value: "22 fps" },
  { label: "Anomaly", value: "on" },
];
const CV_TAGS_R = [
  { label: "Geo-fence", value: "active" },
  { label: "SOS", value: "armed" },
];

export function ProjectSafelinkSection() {
  return (
    <section
      id="project-safelink"
      className="relative py-16 md:py-24 px-6 md:px-10 lg:px-12 bg-[#F5F1E8]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top breadcrumb */}
        <Reveal>
          <div className="flex flex-wrap justify-between items-center pb-5 border-b border-[rgba(16,36,58,0.12)] mb-10 md:mb-14">
            <div className="text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
              <span className="font-serif italic text-[14px] text-[#C86B45] mr-2">06</span>
              Work <span className="mx-2.5 text-[rgba(16,36,58,0.2)]">/</span>
              <span className="text-[#10243A] font-semibold">SAFELINK</span>
            </div>
            <div className="editorial-meta-label">Hardware + Computer Vision · 06 / 12</div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] gap-10 md:gap-20 items-start">
          {/* LEFT — visual */}
          <Reveal y={40}>
            <div className="relative bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-lg p-8 md:p-10 min-h-[440px] sm:min-h-[540px] overflow-hidden flex items-center justify-center">
              {/* corner tags */}
              <div className="absolute top-4 left-4 text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                Wearable
                <span className="block font-serif italic text-[12px] text-[#C86B45] mt-1 tracking-normal normal-case">
                  SAFELINK v1
                </span>
              </div>
              <div className="absolute top-4 right-4 text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium text-right">
                On-Device
                <span className="block font-serif italic text-[12px] text-[#C86B45] mt-1 tracking-normal normal-case">
                  Edge AI
                </span>
              </div>
              <div className="absolute bottom-4 left-4 text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                Sensors
                <span className="block font-serif italic text-[12px] text-[#C86B45] mt-1 tracking-normal normal-case">
                  6 ch.
                </span>
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium text-right">
                Battery
                <span className="block font-serif italic text-[12px] text-[#C86B45] mt-1 tracking-normal normal-case">
                  36 h
                </span>
              </div>

              {/* Wearable device */}
              <div
                className="relative w-[200px] h-[260px] md:w-[220px] md:h-[280px] rounded-[26px] flex flex-col items-center p-[18px]"
                style={{
                  background:
                    "linear-gradient(160deg, #1f3140 0%, #10243A 50%, #0A1628 100%)",
                  boxShadow:
                    "inset 0 2px 0 rgba(245,241,232,0.08), inset 0 -3px 10px rgba(0,0,0,0.4), 0 30px 60px -20px rgba(16,36,58,0.45)",
                }}
              >
                {/* straps */}
                <div
                  className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-[80px] h-[30px] bg-[#10243A] border border-[rgba(245,241,232,0.06)] rounded-t-[4px]"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 w-[80px] h-[30px] bg-[#10243A] border border-[rgba(245,241,232,0.06)] rounded-b-[4px]"
                  aria-hidden
                />

                {/* screen */}
                <div className="w-full aspect-square mt-2 rounded-[18px] border border-[rgba(245,241,232,0.06)] overflow-hidden flex flex-col p-3"
                  style={{
                    background: "linear-gradient(180deg, #0A1A2E 0%, #0F2438 100%)",
                  }}
                >
                  <div className="flex justify-between items-center text-[8px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.55)]">
                    <span>09:42</span>
                    <span className="inline-flex items-center gap-1">
                      <span
                        className="inline-block w-3 h-1.5 border border-[rgba(245,241,232,0.55)] rounded-[1px] relative"
                        aria-hidden
                      >
                        <span className="absolute left-[1px] top-[1px] w-[7px] h-[3px] bg-[#5DD899]" />
                      </span>
                      87
                    </span>
                  </div>

                  {/* CV area */}
                  <div
                    className="flex-1 mt-2 rounded-[8px] relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(200,107,69,0.18) 0%, rgba(15,102,84,0.18) 100%)",
                    }}
                  >
                    <div className="absolute top-[22%] left-[28%] w-[50%] h-[55%] border border-[#C86B45] rounded-[2px]">
                      <span className="absolute -left-1 -top-1 w-1.5 h-1.5 border-t border-l border-[#C86B45]" />
                      <span className="absolute -right-1 -bottom-1 w-1.5 h-1.5 border-b border-r border-[#C86B45]" />
                    </div>
                    <div className="absolute top-[20%] left-[30%] text-[6px] text-[#C86B45] tracking-[0.18em] font-bold bg-black/40 px-1 py-px rounded-sm">
                      PERSON · 0.96
                    </div>
                    <div className="absolute bottom-[12%] right-3 text-[6px] text-[#5DD899] tracking-[0.18em] font-bold">
                      SAFE
                    </div>
                  </div>

                  {/* stat row */}
                  <div className="mt-2 flex justify-between items-center text-[7px] text-[rgba(245,241,232,0.65)] tracking-[0.12em]">
                    <span className="inline-flex items-center gap-1">
                      <span className="text-[#C86B45] text-[8px]">●</span> 72 BPM
                    </span>
                    <span>SAFE</span>
                  </div>
                </div>
              </div>

              {/* CV tags floating */}
              <div className="absolute top-[70px] left-4 md:left-[60px] flex flex-col gap-1.5">
                {CV_TAGS_T.map((t) => (
                  <div
                    key={t.label}
                    className="bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] px-2 py-1 rounded text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium"
                  >
                    {t.label} <span className="text-[#C86B45] font-bold ml-1.5">{t.value}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-[200px] right-4 md:right-[60px] flex flex-col items-end gap-1.5">
                {CV_TAGS_R.map((t) => (
                  <div
                    key={t.label}
                    className="bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] px-2 py-1 rounded text-[9px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium"
                  >
                    {t.label} <span className="text-[#C86B45] font-bold ml-1.5">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <div className="pt-2">
            <Reveal>
              <div className="font-serif italic text-[22px] text-[#C86B45] mb-3">
                06 — Project
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="editorial-serif text-[56px] sm:text-[72px] md:text-[86px] leading-[0.96] tracking-[-0.025em] mb-7">
                SAFE
                <br />
                <em>LINK</em>
                <span className="text-[#C86B45] italic">.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[14px] leading-[1.65] text-[rgba(16,36,58,0.8)] mb-7 max-w-[460px]">
                A{" "}
                <strong className="text-[#10243A] font-semibold">multimodal smart wearable</strong>{" "}
                for personal safety — fusing{" "}
                <strong className="text-[#10243A] font-semibold">computer vision</strong>,
                on-device inference and IoT sensors to detect threat contexts in real time,
                with an SOS escalation path that routes live location and audio to trusted
                contacts.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-1.5 mb-7">
                {["AI", "Computer Vision", "Edge Computing", "IoT", "Personal Safety"].map(
                  (t) => (
                    <span key={t} className="editorial-tech-chip">
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>

            {/* mini flow */}
            <Reveal delay={0.2}>
              <div className="bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-lg p-5 md:p-[22px] mt-1">
                <div className="flex justify-between items-baseline pb-4 border-b border-[rgba(16,36,58,0.12)] mb-5">
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#10243A] font-semibold">
                    Edge Pipeline
                  </span>
                  <span className="font-serif italic text-[12px] text-[#C86B45]">i.</span>
                </div>
                <div className="grid grid-cols-4 gap-0">
                  {FLOW_STAGES.map((s, i) => (
                    <div
                      key={s.label}
                      className={`relative text-center px-1 py-2 ${
                        i < FLOW_STAGES.length - 1
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
                      {i < FLOW_STAGES.length - 1 && (
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
        </div>

        {/* Foot */}
        <Reveal>
          <div className="flex justify-between items-end mt-10 md:mt-12 pt-5 border-t border-[rgba(16,36,58,0.12)]">
            <a href="#work" className="editorial-cta">
              View Project <span>→</span>
            </a>
            <div className="font-serif italic text-[14px] text-[rgba(16,36,58,0.6)] hidden sm:block">
              — built as research prototype, 11/2024 → 11/2025
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
