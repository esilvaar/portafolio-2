export default function ExecutiveHero() {
  return (
    <section className="flex flex-col gap-10 w-full pt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="relative w-fit">
        <h1 className="text-7xl md:text-[9rem] lg:text-[12rem] font-serif font-black tracking-tighter leading-[0.8] uppercase text-black dark:text-white relative z-10">
          Eduardo<br />Silva
        </h1>
        {/* Adorno tipo garabato/sticker */}
        <div className="absolute -top-10 -right-10 md:-right-20 w-24 h-24 md:w-32 md:h-32 bg-lime-400 rounded-full flex items-center justify-center border-4 border-black dark:border-white z-0 rotate-12 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
          <span className="font-bold text-xl md:text-2xl text-center text-black leading-tight">FULL<br/>STACK</span>
        </div>
      </div>

      <p className="text-xl md:text-3xl font-medium max-w-3xl leading-snug border-l-8 border-black dark:border-white pl-6 my-8">
        Soy estudiante de 5to año de Ingeniería Civil Informática. <span className="bg-yellow-300 dark:bg-yellow-400 text-black px-1 font-bold">Especializado en desarrollo</span>, arquitectura de software y administración de sistemas escalables.
      </p>

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <a
          href="#contacto"
          className="px-8 py-4 bg-blue-600 text-white border-4 border-black dark:border-white text-xl font-bold hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0_#000] dark:hover:shadow-[8px_8px_0_#fff] transition-transform shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]"
        >
          TRABAJEMOS JUNTOS
        </a>
        <a
          href="https://github.com/esilvaar"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white text-xl font-bold hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0_#000] dark:hover:shadow-[8px_8px_0_#fff] hover:bg-lime-400 dark:hover:bg-lime-400 dark:hover:text-black transition-transform shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]"
        >
          GITHUB
        </a>
      </div>
    </section>
  );
}
