import ExecutiveNavbar from "./ExecutiveNavbar";
import ExecutiveHero from "./ExecutiveHero";
import ExecutiveProjects from "./ExecutiveProjects";
import ExecutiveExperience from "./ExecutiveExperience";
import ExecutiveContact from "./ExecutiveContact";
import ExecutiveFooter from "./ExecutiveFooter";

export default function ExecutiveLayout() {
  return (
    <div
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-lime-400 selection:text-black bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]"
    >
      <ExecutiveNavbar />

      <div className="overflow-x-hidden w-full">
        <main className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-32 border-x-8 border-black dark:border-white bg-white dark:bg-black shadow-[16px_0_0_#000,-16px_0_0_#000] dark:shadow-[16px_0_0_#fff,-16px_0_0_#fff] lg:shadow-none min-h-screen">
          <ExecutiveHero />
          <hr className="border-t-8 border-black dark:border-white w-full" />
          <ExecutiveProjects />
          <hr className="border-t-8 border-black dark:border-white w-full" />
          <ExecutiveExperience />
          <hr className="border-t-8 border-black dark:border-white w-full" />
          <ExecutiveContact />
        </main>
      </div>

      <ExecutiveFooter />
    </div>
  );
}
