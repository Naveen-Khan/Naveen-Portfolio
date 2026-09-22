"use client";

import Image from "next/image";

// CardioRisk AI — bespoke visual embedding the actual CardioPredict web app screenshot
// in the consistent editorial browser-frame mockup.

export function CardioriskVisual() {
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
          <span className="hidden sm:inline">CardioPredict · Clinical Decision Support</span>
          <span className="sm:hidden">CardioPredict</span>
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] hidden md:block">
          Live · Vercel
        </div>
      </div>

      {/* screenshot — preserve original aspect ratio */}
      <div
        className="relative w-full overflow-hidden rounded-md border border-[rgba(16,36,58,0.12)] bg-[#F5F1E8] min-h-[280px] md:min-h-0"
        style={{ aspectRatio: "1145 / 473" }}
      >
        <Image
          src="/portfolio/cardiorisk.png"
          alt="CardioPredict — Clinical Decision Support web application UI"
          fill
          className="object-contain object-top bg-[#F5F1E8]"
          sizes="(max-width: 768px) 100vw, 760px"
          priority
        />
      </div>

      {/* caption strip */}
      <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-[rgba(16,36,58,0.12)]">
        <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
          SVM · 13 clinical variables · 3,800+ patients
        </span>
        <span className="font-serif italic text-[12px] text-[#C86B45]">
          97.6% accuracy
        </span>
      </div>
    </div>
  );
}
