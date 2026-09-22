"use client";

// OutreachAI — bespoke visual showing n8n-style email automation workflow.
// SAME light card style as ClinData/Safelink/Radiomed/Revenue AI visuals
// for visual consistency across all project detail pages.

const FLOW_NODES = [
  {
    nm: "Google Sheets",
    ds: "Company data source",
    icon: "S",
    color: "forest",
  },
  {
    nm: "OpenRouter LLM",
    ds: "Personalized email draft",
    icon: "L",
    color: "terracotta",
    accent: true,
  },
  {
    nm: "Gmail API",
    ds: "Send email automatically",
    icon: "G",
    color: "forest",
  },
  {
    nm: "Sheet Log",
    ds: "Email content + status",
    icon: "L",
    color: "forest",
  },
];

const SAMPLE_EMAILS = [
  { to: "ceo@acme.io", subject: "Scaling Acme's ML pipeline", status: "sent" },
  { to: "founder@nimbus.ai", subject: "RAG for Nimbus support docs", status: "sent" },
  { to: "growth@helix.co", subject: "Cutting Helix's churn by 18%", status: "queued" },
  { to: "cto@orbit.dev", subject: "Orbit's CV pipeline audit", status: "sent" },
];

export function OutreachVisual() {
  return (
    <div
      className="bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-lg p-4 md:p-[18px]"
      style={{ boxShadow: "0 30px 60px -40px rgba(16,36,58,0.25)" }}
    >
      {/* topbar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(16,36,58,0.12)] mb-3.5">
        <div className="flex items-center gap-3 text-[12px] font-semibold text-[#10243A]">
          <span className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[rgba(16,36,58,0.12)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(16,36,58,0.12)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(16,36,58,0.12)]" />
          </span>
          <span className="hidden sm:inline">Lead Gen Agent · n8n Workflow</span>
          <span className="sm:hidden">Lead Gen</span>
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] hidden md:flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F6654]" />
          Live · Automated
        </div>
      </div>

      {/* Workflow pipeline */}
      <div className="bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] rounded-md p-4 mb-4">
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-[9px] tracking-[0.32em] uppercase text-[#10243A] font-semibold">
            Automation Pipeline
          </span>
          <span className="font-serif italic text-[11px] text-[#C86B45]">n8n · v1</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {FLOW_NODES.map((n, i) => (
            <div
              key={n.nm}
              className={`relative rounded-md p-2.5 border text-center ${
                n.accent
                  ? "border-[#C86B45] bg-[rgba(200,107,69,0.06)]"
                  : "border-[rgba(16,36,58,0.14)] bg-[#F5F1E8]"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-serif italic text-[12px] mb-1.5 ${
                  n.color === "terracotta"
                    ? "bg-[#C86B45] text-[#F5F1E8]"
                    : "bg-[rgba(15,102,84,0.15)] text-[#0F6654] border border-[#0F6654]"
                }`}
              >
                {n.icon}
              </div>
              <div className="text-[10px] font-semibold text-[#10243A] tracking-[0.06em] mb-0.5">
                {n.nm}
              </div>
              <div className="text-[9px] text-[rgba(16,36,58,0.6)] leading-[1.3]">
                {n.ds}
              </div>
              {i < FLOW_NODES.length - 1 && (
                <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#C86B45] text-[12px] z-[2]">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Live email queue */}
      <div className="bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] rounded-md p-4">
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-[9px] tracking-[0.32em] uppercase text-[#10243A] font-semibold">
            Today&apos;s Outreach · 52 emails
          </span>
          <span className="font-serif italic text-[11px] text-[#B99A5B]">
            $0.02 / email
          </span>
        </div>
        <div className="space-y-1.5">
          {SAMPLE_EMAILS.map((e, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-[11px] py-1.5 border-b border-dashed border-[rgba(16,36,58,0.08)] last:border-0"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-serif italic text-[11px] text-[#C86B45] flex-shrink-0 w-4">
                  {["i", "ii", "iii", "iv"][i]}.
                </span>
                <span className="text-[rgba(16,36,58,0.7)] truncate">{e.to}</span>
              </div>
              <span className="text-[#10243A] truncate ml-2 hidden sm:inline">
                {e.subject}
              </span>
              <span
                className={`px-1.5 py-0.5 rounded text-[9px] tracking-[0.18em] uppercase font-semibold flex-shrink-0 ml-2 ${
                  e.status === "sent"
                    ? "bg-[rgba(15,102,84,0.15)] text-[#0F6654]"
                    : "bg-[rgba(200,107,69,0.15)] text-[#C86B45]"
                }`}
              >
                {e.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
