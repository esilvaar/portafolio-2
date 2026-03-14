export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">Skills Técnicos</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-zinc-200 bg-white px-5 py-4 text-sm font-medium dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
