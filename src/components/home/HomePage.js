import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import { experience, navLinks, projects, skills, techStack } from "./data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-[#101622] dark:text-zinc-100">
      <Header navLinks={navLinks} />

      <main className="relative overflow-hidden pt-20">
        <HeroSection techStack={techStack} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
