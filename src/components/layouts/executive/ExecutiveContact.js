export default function ExecutiveContact() {
  return (
    <section id="contacto" className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[2rem] p-10 md:p-16 flex flex-col items-center text-center gap-6 my-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Tienes un proyecto en mente?</h2>
      <p className="text-zinc-400 dark:text-zinc-500 max-w-xl text-lg">
        Actualmente estoy buscando oportunidades como practicante, colaborador o desarrollador freelance.
      </p>
      <a 
        href="mailto:eduardo.silva1@cloud.uautonoma.cl"
        className="mt-4 px-8 py-4 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white rounded-full font-bold hover:scale-105 transition-transform"
      >
        Enviar mensaje
      </a>
    </section>
  );
}
