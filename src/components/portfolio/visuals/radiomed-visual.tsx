"use client";

import Image from "next/image";

// Radiomed — bespoke visual embedding the actual project screenshot
// in an editorial browser-frame mockup.

export function RadiomedVisual() {
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
          <span className="hidden sm:inline">Radiomed · Diagnosis Assistant</span>
          <span className="sm:hidden">Radiomed</span>
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] hidden md:block">
          Live · Clinical
        </div>
      </div>

      {/* screenshot — taller on mobile for better readability */}
      <div
        className="relative w-full overflow-hidden rounded-md border border-[rgba(16,36,58,0.12)] bg-[#F5F1E8] "
        style={{ aspectRatio: "1333 / 603" }}
      >
        <Image
          src="/portfolio/radiomed.png"
          alt="Radiomed — Automated Medical Image Diagnosis Assistant dashboard"
          fill
          className="object-contain object-top bg-[#F5F1E8]"
          sizes="(max-width: 768px) 100vw, 760px"
          priority
        />
      </div>

      {/* caption strip */}
      <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-[rgba(16,36,58,0.12)]">
        <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
          Brain MRI · Chest X-Ray · Lung CT
        </span>
        <span className="font-serif italic text-[12px] text-[#C86B45]">
          Smarter Diagnosis. Better Care.
        </span>
      </div>
    </div>
  );
}
