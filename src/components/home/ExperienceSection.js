export default function ExperienceSection({ experience }) {
  return (
    <section
      id="experiencia"
      className="border-y border-zinc-200 bg-zinc-100/50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">Experiencia</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
          {experience.map((item) => (
            <article
              key={item.role}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#101622]"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{item.role}</h3>
                <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-bold text-blue-400">{item.period}</span>
              </div>
              <p className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-300">{item.place}</p>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
