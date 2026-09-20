"use client";

import { Reveal } from "./reveal";

const ARCH_LAYERS = [
  {
    num: "01",
    label: "Sensing",
    sub: "On-body",
    nodes: [
      { nm: "Camera", ds: "Wearable POV", primary: false },
      { nm: "IMU", ds: "Motion / Fall", primary: false },
      { nm: "Mic", ds: "Audio context", primary: false },
      { nm: "GPS", ds: "Geo-fence", primary: false },
    ],
  },
  {
    num: "02",
    label: "Edge Inference",
    sub: "On-device",
    nodes: [
      { nm: "YOLO Detector", ds: "Person / threat context", primary: true },
      { nm: "Anomaly Model", ds: "IMU + Audio fusion", primary: true },
      { nm: "Geo-fence Logic", ds: "Safe-zone check", primary: true },
    ],
  },
  {
    num: "03",
    label: "Decision",
    sub: "Threat Fusion",
    nodes: [
      { nm: "Threat Score", ds: "CV + IMU + Geo fusion", primary: false, accent: true },
      { nm: "SOS Trigger", ds: "Threshold / manual", primary: false, accent: true },
      { nm: "Privacy Filter", ds: "On-device only", primary: false },
    ],
  },
  {
    num: "04",
    label: "Relay",
    sub: "Cloud / IoT",
    nodes: [
      { nm: "Trusted Contacts", ds: "Push + SMS", primary: false },
      { nm: "Live Location", ds: "Streaming", primary: false },
      { nm: "Audio Stream", ds: "Optional · opt-in", primary: false },
    ],
  },
];

const OTHER_RS = [
  {
    roman: "i.",
    title: "RAG Retrieval Bench",
    titleItalic: "RAG",
    tags: ["Vector Embeddings", "Semantic Search", "Evaluation"],
  },
  {
    roman: "ii.",
    title: "Text-to-SQL on Clinical Schema",
    titleItalic: "Clinical",
    tags: ["LLM", "SQL", "Healthcare"],
  },
  {
    roman: "iii.",
    title: "YOLO Data Augmentation Study",
    titleItalic: "Augmentation",
    tags: ["Computer Vision", "Augmentation", "Roboflow"],
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="relative py-16 md:py-24 px-6 md:px-10 lg:px-12 bg-[#F5F1E8]">
      <div className="max-w-[1400px] mx-auto">
        {/* Head */}
        <div className="grid grid-cols-1 md:grid-cols-[0.6fr_0.4fr] gap-6 md:gap-20 items-end pb-7 border-b border-[rgba(16,36,58,0.12)] mb-12 md:mb-14">
          <Reveal>
            <div className="editorial-eyebrow mb-5 md:mb-6">
              <span className="dot" />
              Chapter 06 · Lab &amp; Bench
            </div>
            <h2 className="editorial-serif text-[60px] sm:text-[72px] md:text-[84px] lg:text-[96px] leading-[0.9] tracking-[-0.04em]">
              Research{" "}
              <span className="text-[#C86B45] italic font-normal">&amp;</span>
              <br />
              <em>Experimentation</em>
              <span className="text-[#C86B45] italic">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-right text-[11px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.6]">
              <div>
                <span className="font-serif italic text-[14px] text-[#C86B45] mr-1.5">
                  i
                </span>
                Featured Study
              </div>
              <div>SAFELINK · Multimodal</div>
              <div>Wearable Safety Device</div>
              <div className="mt-3.5">10 / 12</div>
            </div>
          </Reveal>
        </div>

        {/* Featured research */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-10 md:gap-16 items-start mb-10 md:mb-12">
          {/* Left */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C86B45] rounded-full text-[10px] tracking-[0.22em] uppercase text-[#C86B45] font-semibold mb-5">
                <span className="w-[5px] h-[5px] rounded-full bg-[#C86B45]" />
                Featured Research
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-normal leading-[1] tracking-[-0.025em] text-[#10243A] mb-4">
                SAFELINK:
                <br />
                A Multimodal
                <br />
                <em className="italic text-[#0F6654]">Smart Wearable</em>
                <br />
                for Personal Safety.
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[14px] leading-[1.6] text-[rgba(16,36,58,0.8)] mb-6 max-w-[380px]">
                A 12-month research project exploring how{" "}
                <strong className="text-[#10243A] font-semibold">computer vision</strong>,
                on-device inference and IoT sensors can be fused into a discreet wearable
                that detects threat contexts in real time and routes live location + audio
                to trusted contacts through an SOS escalation path.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {["AI", "Computer Vision", "Edge Computing", "IoT", "Personal Safety"].map(
                  (t) => (
                    <span key={t} className="editorial-tech-chip">
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium leading-[1.8] pt-4 border-t border-[rgba(16,36,58,0.12)]">
                <strong className="text-[#10243A] font-semibold">Duration</strong>{" "}
                &nbsp;11/2024 → 11/2025 (12 months)
                <br />
                <strong className="text-[#10243A] font-semibold">Output</strong>{" "}
                &nbsp;Working prototype · SAFELINK v1
                <br />
                <strong className="text-[#10243A] font-semibold">Venue</strong>{" "}
                &nbsp;Mehran UET · Undergraduate Research
              </div>
            </Reveal>
          </div>

          {/* Architecture diagram */}
          <Reveal delay={0.15} y={40}>
            <div className="bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-md p-6 md:p-7">
              <div className="flex justify-between items-baseline pb-4 border-b border-[rgba(16,36,58,0.12)] mb-5">
                <span className="text-[10px] tracking-[0.32em] uppercase text-[#10243A] font-semibold">
                  System Architecture · SAFELINK v1
                </span>
                <span className="font-serif italic text-[12px] text-[#C86B45]">i.</span>
              </div>

              <div className="flex flex-col gap-4">
                {ARCH_LAYERS.map((layer, li) => (
                  <div key={layer.num}>
                    <div className="flex items-stretch gap-3 md:gap-4">
                      {/* label */}
                      <div className="flex flex-col justify-center pr-3 md:pr-4 border-r border-[rgba(16,36,58,0.12)] w-[88px] md:w-[110px] flex-shrink-0">
                        <span className="font-serif italic text-[14px] text-[#C86B45]">
                          {layer.num}
                        </span>
                        <span className="text-[10px] tracking-[0.22em] uppercase text-[#10243A] font-semibold mt-1">
                          {layer.label}
                        </span>
                        <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] mt-0.5">
                          {layer.sub}
                        </span>
                      </div>

                      {/* nodes */}
                      <div className="flex gap-2 md:gap-3 flex-1 flex-wrap">
                        {layer.nodes.map((n) => (
                          <div
                            key={n.nm}
                            className={`flex-1 min-w-[80px] rounded-md px-2.5 py-2 text-center border ${
                              n.primary
                                ? "border-[#0F6654] bg-[rgba(15,102,84,0.05)]"
                                : n.accent
                                ? "border-[#C86B45] bg-[rgba(200,107,69,0.06)]"
                                : "border-[rgba(16,36,58,0.12)] bg-[#F5F1E8]"
                            }`}
                          >
                            <div className="text-[11px] font-semibold text-[#10243A] tracking-[0.06em] mb-1">
                              {n.nm}
                            </div>
                            <div className="text-[9px] text-[rgba(16,36,58,0.6)] leading-[1.4]">
                              {n.ds}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* arrow */}
                    {li < ARCH_LAYERS.length - 1 && (
                      <div className="text-center text-[rgba(16,36,58,0.4)] text-[14px] my-0.5">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* output */}
              <div className="mt-5 pt-4 border-t border-[rgba(16,36,58,0.12)] flex justify-between items-center">
                <span className="text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                  Outcome
                </span>
                <span className="font-serif italic text-[16px] text-[#C86B45]">→ → →</span>
                <span className="text-[11px] tracking-[0.22em] uppercase text-[#0F6654] font-bold">
                  Discreet · Reliable · Privacy-first
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Other research */}
        <Reveal>
          <div className="border-t border-[rgba(16,36,58,0.12)] pt-9">
            <div className="flex justify-between items-baseline mb-5">
              <span className="text-[11px] tracking-[0.32em] uppercase text-[#10243A] font-semibold">
                Other Experiments &amp; Side Projects
              </span>
              <span className="font-serif italic text-[14px] text-[#C86B45]">ii.</span>
            </div>

            {OTHER_RS.map((r) => (
              <div
                key={r.roman}
                className="grid grid-cols-[40px_1fr_180px_60px] sm:grid-cols-[60px_1fr_220px_80px] gap-3 sm:gap-6 items-baseline py-4 md:py-4.5 border-t border-[rgba(16,36,58,0.12)]"
              >
                <span className="font-serif italic text-[18px] text-[#C86B45]">{r.roman}</span>
                <span className="font-serif text-[18px] sm:text-[22px] text-[#10243A] tracking-[-0.01em]">
                  <em className="italic text-[#0F6654]">{r.titleItalic}</em>
                  {r.title.replace(r.titleItalic, "")}
                </span>
                <div className="hidden sm:flex flex-wrap gap-1.5 items-center">
                  {r.tags.map((t, ti) => (
                    <span key={t} className="flex items-center">
                      <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                        {t}
                      </span>
                      {ti < r.tags.length - 1 && (
                        <span className="w-1 h-1 rounded-full bg-[rgba(16,36,58,0.2)] mx-2.5" />
                      )}
                    </span>
                  ))}
                </div>
                <span className="text-right text-[10px] tracking-[0.22em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
                  Notebook →
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
