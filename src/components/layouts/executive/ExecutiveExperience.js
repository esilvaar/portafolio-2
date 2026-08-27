import { experience, skills } from "@/components/layouts/xp/data";

export default function ExecutiveExperience() {
  return (
    <section id="experiencia" className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
      <div className="flex flex-col gap-10">
        <h3 className="text-5xl font-serif font-black uppercase bg-black dark:bg-white text-white dark:text-black px-4 py-2 w-fit transform -rotate-2">
          Experiencia
        </h3>
        <div className="flex flex-col gap-8">
          {experience.map((e, i) => (
            <div key={e.role} className="flex flex-col p-6 bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff] relative mt-4">
              <div className="absolute -top-5 -right-2 md:-right-6 bg-yellow-300 dark:bg-yellow-400 text-black border-4 border-black dark:border-white px-3 py-1 font-bold text-sm shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] transform rotate-3">
                {e.period}
              </div>
              <h4 className="font-bold text-2xl uppercase mb-1 mt-2">{e.role}</h4>
              <span className="font-bold text-lg mb-4 bg-lime-300 text-black w-fit px-2 border-2 border-black dark:border-white">{e.place}</span>
              <p className="text-base font-medium leading-relaxed">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="skills" className="flex flex-col gap-10">
        <h3 className="text-5xl font-serif font-black uppercase border-b-8 border-black dark:border-white pb-2 w-fit">
          Stack
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-black border-4 border-black dark:border-white hover:bg-blue-600 hover:text-white transition-none shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] cursor-default">
              <skill.icon className="w-6 h-6" />
              <span className="font-bold text-lg uppercase tracking-tight">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
