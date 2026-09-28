"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/portfolio";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#C86B45] origin-left z-[60]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}

export function EditorialNav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Handle nav click — if on a detail page, close it first then scroll to section
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const hash = window.location.hash;
    // If currently on a detail page, clear it first
    if (hash.startsWith("#project/") || hash.startsWith("#experience/")) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
      window.dispatchEvent(new Event("hashchange"));
      // Wait for landing page to render, then scroll
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      // Already on landing page — just scroll
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // Close mobile menu if open
  };

  // detect active section — default to null when home is in view
  // (no nav item highlighted on the hero section)
  useEffect(() => {
    const sections = ["home", ...NAV_ITEMS.map((i) => i.href.replace("#", ""))];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // When home is in view, no nav item should be active
            if (e.target.id === "home") {
              setActive("");
            } else {
              setActive(e.target.id);
            }
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F1E8]/85 backdrop-blur-md border-b border-[rgba(16,36,58,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-12 h-[64px]">
        {/* brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[#10243A] font-bold text-[14px] tracking-[0.18em] uppercase"
        >
          <Image
            src="/portfolio/logo.png"
            alt="Naveen Khan logo"
            width={36}
            height={36}
            className="h-[32px] w-auto object-contain"
            priority
          />
          <span className="hidden sm:inline">Naveen&nbsp;Khan</span>
        </a>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-[12px] font-medium tracking-[0.16em] uppercase pb-1 transition-colors ${
                active === item.href.slice(1)
                  ? "text-[#10243A]"
                  : "text-[rgba(16,36,58,0.6)] hover:text-[#10243A]"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 bottom-0 h-[1px] bg-[#C86B45] transition-all duration-300 ${
                  active === item.href.slice(1) ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* right: Download CV + Let's Talk + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Download CV button — desktop */}
          <a
            href="/Ai_Engineer_NaveenResume.pdf"
            download="Ai_Engineer_NaveenResume.pdf"
            className="hidden md:inline-flex items-center gap-2 px-4 py-[9px] rounded-full bg-[#10243A] text-[#F5F1E8] text-[11px] font-semibold tracking-[0.16em] uppercase hover:bg-[#0F6654] transition-colors whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download CV
          </a>

          {/* Let's Talk — desktop */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:inline-flex items-center gap-2 px-4 py-[9px] rounded-full border border-[#10243A] text-[11px] font-semibold tracking-[0.16em] uppercase text-[#10243A] hover:bg-[#10243A] hover:text-[#F5F1E8] transition-colors whitespace-nowrap"
          >
            Let&apos;s Talk <span aria-hidden>→</span>
          </a>

          {/* mobile sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-[#10243A] hover:bg-[#10243A]/5"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[360px] bg-[#F5F1E8] border-l border-[rgba(16,36,58,0.12)] p-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(16,36,58,0.12)]">
                <a href="#home" className="flex items-center gap-2.5 text-[#10243A] font-bold text-[14px] tracking-[0.18em] uppercase">
                  <Image
                    src="/portfolio/logo.png"
                    alt="Naveen Khan logo"
                    width={32}
                    height={32}
                    className="h-[28px] w-auto object-contain"
                  />
                  <span>Menu</span>
                </a>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#10243A]"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col gap-1 px-6 py-6">
                  {NAV_ITEMS.map((item, i) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="group flex items-baseline justify-between py-3 border-b border-[rgba(16,36,58,0.08)]"
                      >
                        <span className="font-serif text-[28px] text-[#10243A] leading-none">
                          {item.label}
                        </span>
                        <span className="font-serif italic text-[12px] text-[#C86B45]">
                          0{i + 1}
                        </span>
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto px-6 py-6 border-t border-[rgba(16,36,58,0.12)] space-y-3">
                  {/* Download CV — mobile */}
                  <SheetClose asChild>
                    <a
                      href="/Ai_Engineer_NaveenResume.pdf"
                      download="Ai_Engineer_NaveenResume.pdf"
                      className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#10243A] text-[#F5F1E8] text-[11px] font-semibold tracking-[0.22em] uppercase"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      Download CV
                    </a>
                  </SheetClose>
                  {/* Let's Talk — mobile */}
                  <SheetClose asChild>
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, "#contact")}
                      className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#10243A] text-[#10243A] text-[11px] font-semibold tracking-[0.22em] uppercase"
                    >
                      Let&apos;s Talk <span aria-hidden>→</span>
                    </a>
                  </SheetClose>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[rgba(16,36,58,0.55)] text-center">
                    Karachi · Pakistan
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
