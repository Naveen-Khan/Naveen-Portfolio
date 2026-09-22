"use client";

// Generic editorial visual for projects without a bespoke UI mockup.
// Uses the SAME light card style as ClinData/Safelink/Radiomed/Revenue AI
// for visual consistency across all project detail pages.

interface GenericVisualProps {
  visualType: "cardio" | "rag" | "cv-suite";
}

interface PanelRow {
  label: string;
  value: string;
  hint?: string;
}

interface PanelSection {
  title: string;
  accent?: boolean;
  rows: PanelRow[];
}

export function GenericVisual({ visualType }: GenericVisualProps) {
  const config = getConfig(visualType);

  return (
    <div
      className="bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-lg p-4 md:p-[18px]"
      style={{ boxShadow: "0 30px 60px -40px rgba(16,36,58,0.25)" }}
    >
      {/* topbar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(16,36,58,0.12)] mb-4">
        <div className="flex items-center gap-3 text-[12px] font-semibold text-[#10243A]">
          <span className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[rgba(16,36,58,0.12)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(16,36,58,0.12)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(16,36,58,0.12)]" />
          </span>
          {config.title}
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] hidden md:block">
          {config.status}
        </div>
      </div>

      {/* central schematic */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {config.schematic.map((s, i) => (
          <div
            key={s.title}
            className={`relative rounded-md p-4 border ${
              s.accent
                ? "border-[#C86B45] bg-[rgba(200,107,69,0.06)]"
                : "border-[rgba(16,36,58,0.14)] bg-[#F5F1E8]"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#10243A] font-semibold">
                {s.title}
              </span>
              <span className="font-serif italic text-[12px] text-[#C86B45]">
                {["i", "ii", "iii"][i]}.
              </span>
            </div>
            <div className="space-y-1.5">
              {s.rows.map((r) => (
                <div
                  key={r.label}
                  className="flex justify-between items-baseline text-[11px] py-1 border-b border-dashed border-[rgba(16,36,58,0.06)] last:border-0"
                >
                  <span className="text-[rgba(16,36,58,0.6)]">{r.label}</span>
                  <span className="text-[#10243A] font-semibold text-[11px]">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
            {i < config.schematic.length - 1 && (
              <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#C86B45] text-[14px] z-[2]">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* motif strip */}
      <div className="bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] rounded-md p-3.5">
        <div className="flex justify-between items-baseline mb-2.5">
          <span className="text-[9px] tracking-[0.32em] uppercase text-[#10243A] font-semibold">
            {config.motifTitle}
          </span>
          <span className="font-serif italic text-[11px] text-[#C86B45]">live</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {config.motif.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-serif text-[18px] md:text-[22px] text-[#10243A] leading-none">
                {m.value}
              </div>
              <div className="text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getConfig(visualType: string): {
  title: string;
  status: string;
  schematic: PanelSection[];
  motifTitle: string;
  motif: Array<{ label: string; value: string }>;
} {
  switch (visualType) {
    case "cardio":
      return {
        title: "CardioRisk AI · Decision Support",
        status: "Live · v1.0",
        schematic: [
          {
            title: "Input · Patient Vitals",
            rows: [
              { label: "Variables", value: "13 clinical" },
              { label: "Records", value: "3,800+" },
              { label: "Modality", value: "Web app" },
            ],
          },
          {
            title: "Model · SVM",
            accent: true,
            rows: [
              { label: "Accuracy", value: "97.6%" },
              { label: "Baseline", value: "80.5% LR" },
              { label: "Output", value: "Risk score" },
            ],
          },
          {
            title: "Output · Clinician View",
            rows: [
              { label: "Reports", value: "PDF/CSV/Excel" },
              { label: "Real-time", value: "Stratification" },
              { label: "Deploy", value: "Vercel" },
            ],
          },
        ],
        motifTitle: "Model Performance",
        motif: [
          { label: "SVM Accuracy", value: "97.6%" },
          { label: "LR Baseline", value: "80.5%" },
          { label: "Patients", value: "3,800+" },
          { label: "Variables", value: "13" },
        ],
      };
    case "rag":
      return {
        title: "Enterprise RAG · Document Intelligence",
        status: "Production · v1.2",
        schematic: [
          {
            title: "Ingest · Documents",
            rows: [
              { label: "Sources", value: "100+ PDFs" },
              { label: "Strategy", value: "Structural" },
              { label: "Indexing", value: "Embeddings" },
            ],
          },
          {
            title: "Retrieve · Hybrid",
            accent: true,
            rows: [
              { label: "Vector", value: "Top-K" },
              { label: "Keyword", value: "BM25" },
              { label: "Re-rank", value: "Cohere" },
            ],
          },
          {
            title: "Generate · Grounded",
            rows: [
              { label: "LLM", value: "Context + Q" },
              { label: "Citations", value: "Inline" },
              { label: "Halluc. check", value: "Pass" },
            ],
          },
        ],
        motifTitle: "Retrieval Health",
        motif: [
          { label: "Documents", value: "100+" },
          { label: "Query Time ↓", value: "60%" },
          { label: "Citations", value: "100%" },
          { label: "Halluc. check", value: "Pass" },
        ],
      };
    case "cv-suite":
      return {
        title: "Computer Vision Model Suite",
        status: "Production · v2.1",
        schematic: [
          {
            title: "Data · Multi-Domain",
            rows: [
              { label: "Domains", value: "3 (medical, road, theft)" },
              { label: "Pipeline", value: "Roboflow" },
              { label: "Augmentation", value: "Domain-aware" },
            ],
          },
          {
            title: "Models · Trained",
            accent: true,
            rows: [
              { label: "Detector", value: "YOLOv8" },
              { label: "Classifier", value: "CNN" },
              { label: "Accuracy", value: "93%+" },
            ],
          },
          {
            title: "Output · Inference",
            rows: [
              { label: "Endpoint", value: "FastAPI" },
              { label: "Throughput", value: "Real-time" },
              { label: "Latency", value: "Low" },
            ],
          },
        ],
        motifTitle: "Per-Domain Performance",
        motif: [
          { label: "Images", value: "10K+" },
          { label: "Accuracy", value: "93%+" },
          { label: "Manual Time ↓", value: "40%" },
          { label: "Domains", value: "3" },
        ],
      };
    default:
      return getDefaultConfig();
  }
}

function getDefaultConfig() {
  return {
    title: "Project · Detail",
    status: "",
    schematic: [],
    motifTitle: "",
    motif: [],
  };
}
