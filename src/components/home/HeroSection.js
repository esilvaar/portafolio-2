import { GithubIcon, LinkedInIcon } from "./icons";

export default function HeroSection({ techStack }) {
  return (
    <section className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-2">
      <div className="pointer-events-none absolute -left-20 top-24 size-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative z-10 order-1 lg:order-1">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
          5to año de Ingeniería Civil Informática
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Soluciones tecnológicas desde
          <span className="block text-blue-500">el código hasta la nube</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Soy estudiante de Ingeniería Civil Informática con especial enfoque en desarrollo Full Stack (web y móvil) y 
          arquitectura de software. Me apasiona la administración de sistemas y actualmente estoy expandiendo mis conocimientos
           en infraestructura Cloud.
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
              href="https://github.com/esilvaar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-xl bg-zinc-200 text-zinc-600 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-500 dark:bg-zinc-800 dark:text-zinc-300"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-silva-arellana-4679b133b/"
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

      <div className="relative order-2 flex justify-center lg:order-2 lg:justify-end">
        <div className="relative w-72 sm:w-96 rounded-3xl bg-gradient-to-br from-zinc-900 via-blue-950 to-blue-700 p-10 shadow-2xl border border-blue-500/30">
          <div className="absolute -inset-5 -z-10 rounded-3xl bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-zinc-900/10 blur-2xl animate-pulse" />
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="relative">
              <span className=" absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-zinc-900 px-3 py-0.5 rounded-full border border-blue-500/20 shadow">Perfil</span>
              <div className="mt-4 relative size-36 sm:size-44 rounded-full bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-300 p-1 shadow-lg">
                <img src="/Perfil.JPG" alt="Perfil" className="rounded-full w-full h-full object-cover border-4 border-zinc-900 shadow-xl transition-transform duration-300 hover:scale-105" />
                <span className="absolute bottom-2 right-2 block size-4 rounded-full bg-green-400 border-2 border-zinc-900 shadow-lg animate-pulse" title="Disponible" />
              </div>
            </div>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white text-center">
            Est. Ing. Civil Informática
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300 text-center">
            Enfocado en la construcción de soluciones eficientes, integración de servicios y despliegue de aplicaciones
            escalables en entornos modernos.
          </p>
        </div>
      </div>
    </section>
  );
}
