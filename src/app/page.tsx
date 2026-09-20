"use client";

import { useState, useEffect } from "react";
import { EditorialNav, ScrollProgress } from "@/components/portfolio/editorial-nav";
import { HeroSection } from "@/components/portfolio/hero-section";
import { IntroductionSection } from "@/components/portfolio/introduction-section";
import { SelectedWorkSection } from "@/components/portfolio/selected-work-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ResearchSection } from "@/components/portfolio/research-section";
import { ResumeSection } from "@/components/portfolio/resume-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ProjectDetailView } from "@/components/portfolio/project-detail-view";
import { PROJECT_DETAILS } from "@/lib/portfolio";

export default function Home() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  // Sync with hash so back/forward browser buttons work
  // (e.g. #project/clindata-explorer)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#project\/(.+)$/);
      if (match && PROJECT_DETAILS[match[1]]) {
        setSelectedSlug(match[1]);
      } else {
        setSelectedSlug(null);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const openProject = (slug: string) => {
    window.location.hash = `project/${slug}`;
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const closeProject = () => {
    // Remove hash without leaving a # in URL
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
    setSelectedSlug(null);
  };

  // If a project is selected, render ONLY the detail view (no landing sections)
  if (selectedSlug && PROJECT_DETAILS[selectedSlug]) {
    const detail = PROJECT_DETAILS[selectedSlug];
    return (
      <main className="min-h-screen bg-[#F5F1E8] text-[#10243A]">
        <ScrollProgress />
        <EditorialNav />
        <ProjectDetailView
          key={detail.slug}
          detail={detail}
          onClose={closeProject}
          onSelect={openProject}
        />
      </main>
    );
  }

  // Default: landing page (no inline project detail sections)
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#10243A]">
      <ScrollProgress />
      <EditorialNav />

      <HeroSection />
      <IntroductionSection />
      <SelectedWorkSection onSelectProject={openProject} />
      <ExperienceSection />
      <AboutSection />
      <SkillsSection />
      <ResearchSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
