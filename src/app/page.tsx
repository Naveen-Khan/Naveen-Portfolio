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
import { ContactSection } from "@/components/portfolio/contact-section";
import { ProjectDetailView } from "@/components/portfolio/project-detail-view";
import { ExperienceDetailView } from "@/components/portfolio/experience-detail-view";
import { PROJECT_DETAILS, EXPERIENCE } from "@/lib/portfolio";

export default function Home() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedExperienceNum, setSelectedExperienceNum] = useState<string | null>(null);

  // Sync with hash so back/forward browser buttons work
  // Supports both #project/{slug} and #experience/{num}
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const projMatch = hash.match(/^#project\/(.+)$/);
      const expMatch = hash.match(/^#experience\/(.+)$/);

      if (projMatch && PROJECT_DETAILS[projMatch[1]]) {
        setSelectedSlug(projMatch[1]);
        setSelectedExperienceNum(null);
      } else if (expMatch && EXPERIENCE.find((e) => e.num === expMatch[1])) {
        setSelectedExperienceNum(expMatch[1]);
        setSelectedSlug(null);
      } else {
        setSelectedSlug(null);
        setSelectedExperienceNum(null);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const openProject = (slug: string) => {
    window.location.hash = `project/${slug}`;
    setSelectedSlug(slug);
    setSelectedExperienceNum(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const closeProject = () => {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
    setSelectedSlug(null);
  };

  const openExperience = (num: string) => {
    window.location.hash = `experience/${num}`;
    setSelectedExperienceNum(num);
    setSelectedSlug(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const closeExperience = () => {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
    setSelectedExperienceNum(null);
  };

  // Project detail view takes priority
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

  // Experience detail view
  if (selectedExperienceNum) {
    const expItem = EXPERIENCE.find((e) => e.num === selectedExperienceNum);
    if (expItem) {
      return (
        <main className="min-h-screen bg-[#F5F1E8] text-[#10243A]">
          <ScrollProgress />
          <EditorialNav />
          <ExperienceDetailView
            key={expItem.num}
            item={expItem}
            onClose={closeExperience}
            onSelect={openExperience}
          />
        </main>
      );
    }
  }

  // Default: landing page
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#10243A]">
      <ScrollProgress />
      <EditorialNav />

      <HeroSection />
      <IntroductionSection />
      <SelectedWorkSection onSelectProject={openProject} />
      <ExperienceSection onSelectExperience={openExperience} />
      <AboutSection />
      <SkillsSection />
      <ResearchSection />
      <ContactSection />
    </main>
  );
}
