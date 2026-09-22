"use client";

import Image from "next/image";

// Reusable editorial browser-frame mockup that embeds an AI workflow screenshot.
// Used to display actual workflow diagrams from the user's n8n/Make/Zapier exports
// inside the consistent editorial browser-frame styling.

interface WorkflowImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function WorkflowImage({ src, alt, caption }: WorkflowImageProps) {
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
          <span>AI Workflow</span>
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] hidden md:flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F6654]" />
          Live · Automation
        </div>
      </div>

      {/* workflow image — preserve original aspect ratio, no distortion */}
      <div
        className="relative w-full overflow-hidden rounded-md border border-[rgba(16,36,58,0.12)] bg-[#F5F1E8]"
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-top bg-[#F5F1E8]"
          sizes="(max-width: 768px) 100vw, 760px"
          priority
        />
      </div>

      {/* caption strip */}
      {caption && (
        <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-[rgba(16,36,58,0.12)]">
          <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
            {caption}
          </span>
          <span className="font-serif italic text-[12px] text-[#C86B45]">
            n8n · automation pipeline
          </span>
        </div>
      )}
    </div>
  );
}
