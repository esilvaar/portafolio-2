import { GithubIcon, LinkedInIcon } from "./icons";

export default function HeroSection({ techStack }) {
  return (
    <section className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-2">
      <div className="pointer-events-none absolute -left-20 top-24 size-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative z-10 order-2 lg:order-1">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
          Disponible para práctica profesional
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Ingeniería de software para
          <span className="block text-blue-500">sistemas escalables</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Soy estudiante de Ingeniería Civil Informática enfocado en backend de alto rendimiento, arquitectura
          distribuida y desarrollo full stack con buenas prácticas de ingeniería.
        </p>

        <div className="mb-12 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-xl bg-zinc-200 px-8 py-4 text-sm font-bold text-zinc-900 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          >
            Contactar
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-xl bg-zinc-200 text-zinc-600 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-500 dark:bg-zinc-800 dark:text-zinc-300"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-xl bg-zinc-200 text-zinc-600 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-500 dark:bg-zinc-800 dark:text-zinc-300"
            >
              <LinkedInIcon />
            </a>
          </div>

          <div className="hidden h-8 w-px bg-zinc-300 dark:bg-zinc-700 sm:block" />

          <div className="flex flex-wrap items-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-zinc-200/70 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="relative w-64 rounded-2xl bg-zinc-900 p-8 shadow-2xl sm:w-80">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-blue-500/20 blur-2xl" />
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Perfil</span>
            <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-xs font-bold text-blue-300">
              4+ años
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-white">Est. Ing. Civil Informática</h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            Interés en sistemas distribuidos, observabilidad, optimización de APIs y desarrollo de productos con
            impacto real.
          </p>
        </div>
      </div>
    </section>
  );
}
