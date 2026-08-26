import ExecutiveNavbar from "./ExecutiveNavbar";
import ExecutiveHero from "./ExecutiveHero";
import ExecutiveProjects from "./ExecutiveProjects";
import ExecutiveExperience from "./ExecutiveExperience";
import ExecutiveContact from "./ExecutiveContact";
import ExecutiveFooter from "./ExecutiveFooter";

export default function ExecutiveLayout() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans dark:bg-[#0a0a0a] dark:text-zinc-100 flex flex-col items-center selection:bg-zinc-200 dark:selection:bg-zinc-800">
      
      <ExecutiveNavbar />

      <main className="flex-1 w-full max-w-4xl px-6 py-16 md:py-24 flex flex-col gap-32">
        <ExecutiveHero />
        <ExecutiveProjects />
        <ExecutiveExperience />
        <ExecutiveContact />
      </main>

      <ExecutiveFooter />
    </div>
  );
}
