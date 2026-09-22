"use client";

import Image from "next/image";

// AI Automation n8n — visual showing all n8n workflow screenshots as cards in a grid.
// Each card is a consistent editorial browser-frame mockup containing one workflow image.

const WORKFLOWS = [
  {
    src: "/portfolio/workflow-mcdonalds.jpg",
    title: "AI Customer Support Agent",
    desc: "Chat trigger · AI Agent (Google Gemini) · Memory · Webhook response",
    tag: "Customer AI",
  },
  {
    src: "/portfolio/workflow-rag.jpg",
    title: "RAG-Based Chatbot",
    desc: "Google Drive · Text Splitter · Embeddings · Pinecone · AI Agent",
    tag: "Document AI",
  },
  {
    src: "/portfolio/workflow-lead-gen.png",
    title: "Lead Generation Pipeline",
    desc: "Schedule · Get Data · AI Email Writer · JS · Send Emails · Log",
    tag: "Email Outreach",
  },
  {
    src: "/portfolio/workflow-email-automation.jpg",
    title: "Email Automation Router",
    desc: "Google Sheets · If/Switch · Gmail Send · Conditional routing",
    tag: "Automation",
  },
];

export function N8nWorkflowsVisual() {
  return (
    <div className="space-y-4">
      {/* Section label */}
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(16,36,58,0.12)]">
        <span className="text-[10px] tracking-[0.32em] uppercase text-[#10243A] font-semibold">
          n8n Workflow Collection · {WORKFLOWS.length} pipelines
        </span>
        <span className="font-serif italic text-[12px] text-[#C86B45]">live</span>
      </div>

      {/* Grid of workflow cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WORKFLOWS.map((w, i) => (
          <div
            key={i}
            className="bg-[#EFE9DC] border border-[rgba(16,36,58,0.12)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* card topbar */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-[rgba(16,36,58,0.12)]">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#10243A]">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgba(16,36,58,0.12)]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgba(16,36,58,0.12)]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgba(16,36,58,0.12)]" />
                </span>
                <span className="hidden sm:inline">{w.title}</span>
                <span className="sm:hidden">WF {i + 1}</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[8px] tracking-[0.16em] uppercase font-semibold bg-[rgba(200,107,69,0.1)] text-[#C86B45]">
                {w.tag}
              </span>
            </div>

            {/* workflow image */}
            <div
              className="relative w-full overflow-hidden bg-[#F5F1E8]"
              style={{ aspectRatio: "16 / 9" }}
            >
              <Image
                src={w.src}
                alt={`${w.title} — ${w.desc}`}
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 380px"
                priority={i < 2}
              />
            </div>

            {/* card caption */}
            <div className="px-3 py-2.5 border-t border-[rgba(16,36,58,0.12)]">
              <div className="text-[10px] font-semibold text-[#10243A] tracking-[0.06em] mb-0.5">
                {w.title}
              </div>
              <div className="text-[9px] text-[rgba(16,36,58,0.6)] leading-[1.4]">
                {w.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
