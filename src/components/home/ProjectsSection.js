export default function ProjectsSection({ projects }) {
  return (
    <section
      id="proyectos"
      className="border-y border-zinc-200 bg-zinc-100/50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-500/40 dark:border-zinc-800 dark:bg-[#101622]"
            >
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-400 hover:bg-blue-500/20">
                  <a href={project.web} target="_blank" rel="noopener noreferrer">
                    Visitar
                  </a>
                </button>
                {project.github && (
                  <button className="rounded bg-green-500/10 px-4 py-2 text-sm font-bold text-green-400 hover:bg-green-500/20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="boton-estilo"
                    >
                      Ver en GitHub
                    </a>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
