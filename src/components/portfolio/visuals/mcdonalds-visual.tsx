"use client";

// McDonald's AI Support — chat mockup used in the project detail view.

export function McdonaldsVisual() {
  return (
    <div
      className="bg-[#F5F1E8] text-[#10243A] rounded-[14px] overflow-hidden"
      style={{ boxShadow: "0 40px 80px -30px rgba(0,0,0,0.45)" }}
    >
      {/* head */}
      <div className="bg-[#10243A] text-[#F5F1E8] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-[12px] font-bold tracking-[0.08em]">
          <span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#C86B45] text-[#F5F1E8] font-serif italic text-[14px]">
            M
          </span>
          <span>McD AI · Support</span>
        </div>
        <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(245,241,232,0.7)] hidden sm:block">
          <span
            className="inline-block w-[6px] h-[6px] rounded-full mr-1.5"
            style={{ background: "#5DD899" }}
          />
          Online · 09:42
        </div>
        <div className="text-[rgba(245,241,232,0.6)] text-[14px] sm:hidden">···</div>
      </div>

      {/* body */}
      <div className="px-5 pt-5 pb-2 bg-[#F5F1E8]">
        <div className="flex flex-col items-end mb-3.5">
          <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-1.5">
            You · 09:41
          </span>
          <div className="bg-[#10243A] text-[#F5F1E8] px-4 py-3 rounded-[16px] rounded-br-[4px] text-[13px] leading-[1.5] max-w-[75%]">
            Hi, I&apos;d like to add a McFlurry to my order #MK-22841 and change the
            fries to large.
          </div>
        </div>

        <div className="flex flex-col mb-3.5">
          <span className="text-[9px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.6)] font-medium mb-1.5">
            McD AI · 09:42
          </span>
          <div className="bg-[#EFE9DC] text-[#10243A] border border-[rgba(16,36,58,0.12)] px-4 py-3 rounded-[16px] rounded-bl-[4px] text-[13px] leading-[1.5] max-w-[80%]">
            Got it — I&apos;ve pulled up order{" "}
            <strong className="font-semibold">#MK-22841</strong>. Here&apos;s the
            proposed update:
            <div className="mt-2.5 bg-[#F5F1E8] border border-[rgba(16,36,58,0.12)] rounded-lg p-2.5">
              <div className="flex justify-between text-[10px] tracking-[0.18em] uppercase font-semibold mb-2">
                <span className="text-[rgba(16,36,58,0.6)]">Order Update</span>
                <span className="text-[#0F6654]">+ PKR 540</span>
              </div>
              <ul className="text-[12px]">
                {[
                  { l: "Fries · Medium → Large", r: "+ 180" },
                  { l: "Add McFlurry Oreo", r: "+ 360" },
                  { l: "Delivery ETA", r: "~22 min" },
                ].map((row, i) => (
                  <li
                    key={row.l}
                    className={`flex justify-between py-1 ${
                      i < 2 ? "border-b border-dashed border-[rgba(16,36,58,0.06)]" : ""
                    }`}
                  >
                    <span>{row.l}</span>
                    <span className="text-[rgba(16,36,58,0.6)] text-[10px]">{row.r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 mt-2.5">
              <button className="bg-[#C86B45] text-[#F5F1E8] border border-[#C86B45] rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold">
                Confirm
              </button>
              <button className="bg-transparent text-[#10243A] border border-[rgba(16,36,58,0.2)] rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold">
                Edit
              </button>
              <button className="bg-transparent text-[#10243A] border border-[rgba(16,36,58,0.2)] rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* input */}
      <div className="px-5 py-3.5 bg-[#F5F1E8] flex items-center gap-3 border-t border-[rgba(16,36,58,0.12)]">
        <div className="flex-1 px-3.5 py-2.5 border border-[rgba(16,36,58,0.2)] rounded-full text-[12px] text-[rgba(16,36,58,0.6)]">
          Ask about your order…
        </div>
        <div className="w-9 h-9 rounded-full bg-[#10243A] text-[#F5F1E8] flex items-center justify-center text-[14px]">
          ↑
        </div>
      </div>
    </div>
  );
}
