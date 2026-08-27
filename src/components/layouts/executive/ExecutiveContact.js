export default function ExecutiveContact() {
  return (
    <section id="contacto" className="w-full bg-red-500 text-black dark:text-white border-4 border-black dark:border-white shadow-[16px_16px_0_#000] dark:shadow-[16px_16px_0_#fff] p-8 md:p-20 flex flex-col items-center text-center gap-8 my-12 relative overflow-hidden">
      {/* Patrón de fondo estilo ruido o rayas cruzadas */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)' }}></div>

      <h2 className="text-4xl md:text-7xl font-serif font-black tracking-tighter uppercase relative z-10 leading-none">
        ¿Tienes un <br/><span className="bg-white dark:bg-black text-black dark:text-white px-4 border-4 border-black dark:border-white inline-block mt-4 transform rotate-2">Proyecto</span> en mente?
      </h2>
      
      <p className="font-bold max-w-2xl text-xl md:text-2xl relative z-10 bg-black dark:bg-white text-white dark:text-black p-4 border-4 border-white dark:border-black transform -rotate-1 mt-4">
        Actualmente estoy buscando oportunidades como practicante, colaborador o desarrollador freelance.
      </p>
      
      <a 
        href="mailto:eduardo.silva1@cloud.uautonoma.cl"
        className="mt-8 px-10 py-5 bg-lime-400 text-black border-4 border-black dark:border-white text-xl md:text-2xl font-black uppercase hover:-translate-y-2 hover:translate-x-2 transition-transform shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff] hover:shadow-[0px_0px_0_#000] dark:hover:shadow-[0px_0px_0_#fff] relative z-10"
      >
        ENVIAR MENSAJE
      </a>
    </section>
  );
}
