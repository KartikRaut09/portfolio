import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { NeuralBackground } from "@/components/ui/neural-background";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { GithubIntegration } from "@/components/ui/github-stats";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  getProfileData,
  getExperienceData,
  getSkillsData,
  getAllProjects,
  getAchievementsData,
} from "@/lib/content";

export default function Home() {
  const profile = getProfileData();
  const experience = getExperienceData();
  const skills = getSkillsData();
  const projects = getAllProjects();
  const achievements = getAchievementsData();

  return (
    <div className="min-h-screen bg-[#111] text-foreground relative overflow-x-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
      <Sidebar />
      
      <main className="relative z-10 md:pl-16 lg:pl-64 pb-20 md:pb-0">
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <GithubIntegration />
        <AchievementsSection achievements={achievements} />
        <ContactSection profile={profile} />
      </main>

      <MobileNav />
    </div>
  );
}
