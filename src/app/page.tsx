import { EditorialNav, ScrollProgress } from "@/components/portfolio/editorial-nav";
import { HeroSection } from "@/components/portfolio/hero-section";
import { IntroductionSection } from "@/components/portfolio/introduction-section";
import { SelectedWorkSection } from "@/components/portfolio/selected-work-section";
import { ProjectClinDataSection } from "@/components/portfolio/project-clindata-section";
import { ProjectMcDonaldsSection } from "@/components/portfolio/project-mcdonalds-section";
import { ProjectSafelinkSection } from "@/components/portfolio/project-safelink-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ResearchSection } from "@/components/portfolio/research-section";
import { ResumeSection } from "@/components/portfolio/resume-section";
import { ContactSection } from "@/components/portfolio/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#10243A]">
      <ScrollProgress />
      <EditorialNav />

      <HeroSection />
      <IntroductionSection />
      <SelectedWorkSection />
      <ProjectClinDataSection />
      <ProjectMcDonaldsSection />
      <ProjectSafelinkSection />
      <ExperienceSection />
      <AboutSection />
      <SkillsSection />
      <ResearchSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
