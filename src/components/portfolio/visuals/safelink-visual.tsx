"use client";

import Image from "next/image";

// SAFELINK — bespoke visual embedding the actual hardware photo of the wearable.
// Editorial browser-frame mockup with caption strip.

export function SafelinkVisual() {
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
          <span className="hidden sm:inline">SAFELINK · Multimodal Wearable</span>
          <span className="sm:hidden">SAFELINK</span>
        </div>
        <div className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] hidden md:block">
          v1 · Prototype
        </div>
      </div>

      {/* hardware photo — preserves original aspect ratio (896x1196, portrait) */}
      <div
        className="relative w-full overflow-hidden rounded-md border border-[rgba(16,36,58,0.12)] bg-[#F5F1E8]"
        style={{ aspectRatio: "896 / 1196" }}
      >
        <Image
          src="/portfolio/safelink-hardware.png"
          alt="SAFELINK — multimodal smart wearable device hardware photo"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 760px"
          priority
        />
      </div>

      {/* caption strip */}
      <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-[rgba(16,36,58,0.12)]">
        <span className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium">
          YOLOv8 · Raspberry Pi 4 · ESP32 · GPS/GSM
        </span>
        <span className="font-serif italic text-[12px] text-[#C86B45]">
          95% accuracy · &lt;5s response
        </span>
      </div>
    </div>
  );
}
