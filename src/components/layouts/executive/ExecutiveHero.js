export default function ExecutiveHero() {
  return (
    <section className="flex flex-col gap-8 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Disponible para práctica o proyectos
      </div>
      
      <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tighter leading-[1.1] text-balance">
        Soluciones tecnológicas desde el código hasta la nube.
      </h2>
      
      <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed text-balance">
        Soy estudiante de 5to año de Ingeniería Civil Informática. Especializado en desarrollo Full Stack, arquitectura de software y administración de sistemas escalables.
      </p>

      <div className="flex items-center gap-4 pt-4">
        <a 
          href="#contacto" 
          className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform"
        >
          Trabajemos juntos
        </a>
        <a 
          href="https://github.com/esilvaar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
