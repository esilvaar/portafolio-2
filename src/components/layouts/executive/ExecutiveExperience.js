import { experience, skills } from "@/components/layouts/xp/data";

export default function ExecutiveExperience() {
  return (
    <section id="experiencia" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="flex flex-col gap-8">
        <h3 className="text-2xl font-bold tracking-tight">Experiencia</h3>
        <div className="flex flex-col">
          {experience.map((e, i) => (
            <div key={e.role} className={`flex flex-col py-6 ${i !== experience.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-800' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h4 className="font-bold text-lg">{e.role}</h4>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit">{e.period}</span>
              </div>
              <span className="text-zinc-900 dark:text-zinc-100 font-medium mb-3">{e.place}</span>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="skills" className="flex flex-col gap-8">
        <h3 className="text-2xl font-bold tracking-tight">Stack Tecnológico</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:scale-105 transition-transform cursor-default shadow-sm">
              <skill.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              <span className="font-medium text-sm text-zinc-800 dark:text-zinc-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
