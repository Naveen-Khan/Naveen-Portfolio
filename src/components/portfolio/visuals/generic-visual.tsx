"use client";

// Generic editorial visual for projects without a bespoke UI mockup.
// Renders an editorial "schematic" panel with project-specific motif data.

interface GenericVisualProps {
  visualType: "cardio" | "rag" | "medical" | "cv-suite" | "sales";
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
      className="bg-[rgba(245,241,232,0.04)] border border-[rgba(245,241,232,0.18)] rounded-lg p-5 md:p-7"
      style={{ boxShadow: "0 30px 60px -40px rgba(0,0,0,0.5)" }}
    >
      {/* topbar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(245,241,232,0.18)] mb-5">
        <div className="flex items-center gap-3 text-[12px] font-semibold text-[#F5F1E8]">
          <span className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[rgba(245,241,232,0.25)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(245,241,232,0.25)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(245,241,232,0.25)]" />
          </span>
          {config.title}
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.55)] hidden md:block">
          {config.status}
        </div>
      </div>

      {/* central schematic */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        {config.schematic.map((s, i) => (
          <div
            key={s.title}
            className={`relative rounded-md p-4 border ${
              s.accent
                ? "border-[#C86B45] bg-[rgba(200,107,69,0.08)]"
                : "border-[rgba(245,241,232,0.15)] bg-[rgba(245,241,232,0.03)]"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#F5F1E8] font-semibold">
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
                  className="flex justify-between items-baseline text-[11px] py-1 border-b border-dashed border-[rgba(245,241,232,0.08)] last:border-0"
                >
                  <span className="text-[rgba(245,241,232,0.6)]">{r.label}</span>
                  <span className="text-[#F5F1E8] font-semibold text-[11px]">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
            {i < config.schematic.length - 1 && (
              <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#C86B45] text-[14px] z-[2]">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* motif strip */}
      <div className="bg-[rgba(245,241,232,0.05)] border border-[rgba(245,241,232,0.15)] rounded-md p-3.5">
        <div className="flex justify-between items-baseline mb-2.5">
          <span className="text-[9px] tracking-[0.32em] uppercase text-[#F5F1E8] font-semibold">
            {config.motifTitle}
          </span>
          <span className="font-serif italic text-[11px] text-[#C86B45]">live</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {config.motif.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-serif text-[18px] md:text-[22px] text-[#F5F1E8] leading-none">
                {m.value}
              </div>
              <div className="text-[9px] tracking-[0.18em] uppercase text-[rgba(245,241,232,0.55)] font-medium mt-1">
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
        title: "CardioRisk · Decision Support",
        status: "Prototype · v0.9",
        schematic: [
          {
            title: "Input · Patient Vitals",
            rows: [
              { label: "Age", value: "57" },
              { label: "BP", value: "146/92" },
              { label: "Cholesterol", value: "5.8" },
              { label: "Smoker", value: "No" },
            ],
          },
          {
            title: "Model · Risk Score",
            accent: true,
            rows: [
              { label: "10-yr CV Risk", value: "18.4%" },
              { label: "Risk Band", value: "High" },
              { label: "Confidence", value: "0.87" },
            ],
          },
          {
            title: "Output · Clinician View",
            rows: [
              { label: "Top Factor", value: "BP" },
              { label: "Action", value: "Lifestyle + Med" },
              { label: "Re-eval", value: "6 mo" },
            ],
          },
        ],
        motifTitle: "Per-Feature Contribution",
        motif: [
          { label: "Systolic BP", value: "0.32" },
          { label: "Age", value: "0.24" },
          { label: "Cholesterol", value: "0.18" },
          { label: "Family Hx", value: "0.11" },
        ],
      };
    case "rag":
      return {
        title: "RAG Assistant · Document Intelligence",
        status: "Production · v1.2",
        schematic: [
          {
            title: "Ingest · Documents",
            rows: [
              { label: "Sources", value: "240 docs" },
              { label: "Chunks", value: "12,400" },
              { label: "Strategy", value: "Structural" },
            ],
          },
          {
            title: "Retrieve · Hybrid",
            accent: true,
            rows: [
              { label: "Vector", value: "Top-K = 8" },
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
          { label: "Precision@5", value: "0.91" },
          { label: "Recall@10", value: "0.86" },
          { label: "Latency", value: "1.4s" },
          { label: "Citations", value: "100%" },
        ],
      };
    case "medical":
      return {
        title: "Medical Image AI · Classifier",
        status: "Research · v0.7",
        schematic: [
          {
            title: "Input · Image Volume",
            rows: [
              { label: "Modality", value: "X-ray" },
              { label: "Resolution", value: "512×512" },
              { label: "Augmentation", value: "Clinical-aware" },
            ],
          },
          {
            title: "Model · CNN",
            accent: true,
            rows: [
              { label: "Backbone", value: "Transfer" },
              { label: "Classes", value: "4" },
              { label: "Loss", value: "Focal" },
            ],
          },
          {
            title: "Output · Clinician View",
            rows: [
              { label: "Top Class", value: "Pneumonia" },
              { label: "Confidence", value: "0.93" },
              { label: "Grad-CAM", value: "Yes" },
            ],
          },
        ],
        motifTitle: "Evaluation · Held-out Test Set",
        motif: [
          { label: "Accuracy", value: "0.89" },
          { label: "F1", value: "0.87" },
          { label: "AUC", value: "0.92" },
          { label: "Sensitivity", value: "0.91" },
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
              { label: "Domains", value: "Industrial + Retail + Safety" },
              { label: "Pipeline", value: "Roboflow" },
              { label: "Augmentation", value: "Domain-specific" },
            ],
          },
          {
            title: "Models · Trained",
            accent: true,
            rows: [
              { label: "Detector", value: "YOLO v8" },
              { label: "Classifier", value: "Transfer" },
              { label: "Tracker", value: "ByteTrack" },
            ],
          },
          {
            title: "Inference · REST API",
            rows: [
              { label: "Endpoint", value: "Unified" },
              { label: "Throughput", value: "30 fps" },
              { label: "Latency", value: "33ms" },
            ],
          },
        ],
        motifTitle: "Per-Model Performance",
        motif: [
          { label: "Detector mAP", value: "0.84" },
          { label: "Classifier Acc", value: "0.91" },
          { label: "Tracker MOTA", value: "0.78" },
          { label: "Inference", value: "30 fps" },
        ],
      };
    case "sales":
      return {
        title: "Sales Prediction · Forecasting",
        status: "Production · v1.0",
        schematic: [
          {
            title: "Input · Historical Sales",
            rows: [
              { label: "History", value: "3 yrs daily" },
              { label: "Features", value: "20+" },
              { label: "External", value: "Calendar + Promo" },
            ],
          },
          {
            title: "Model · Regressor",
            accent: true,
            rows: [
              { label: "Algorithm", value: "Gradient Boost" },
              { label: "Tuning", value: "Bayesian" },
              { label: "CV", value: "Time-series" },
            ],
          },
          {
            title: "Output · Forecast",
            rows: [
              { label: "Horizon", value: "30 / 90 days" },
              { label: "Granularity", value: "Per-SKU" },
              { label: "Aggregate", value: "Auto roll-up" },
            ],
          },
        ],
        motifTitle: "Backtest · Held-out Period",
        motif: [
          { label: "MAPE", value: "7.4%" },
          { label: "RMSE", value: "12.3" },
          { label: "R²", value: "0.91" },
          { label: "Bias", value: "+0.8%" },
        ],
      };
    default:
      return {
        title: "Project · Detail",
        status: "",
        schematic: [],
        motifTitle: "",
        motif: [],
      };
  }
}
