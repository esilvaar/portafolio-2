export default function ContactSection() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-7xl px-6 py-24 text-center">
      <h2 className="mb-4 text-3xl font-bold">Trabajemos juntos</h2>
      <p className="mx-auto mb-8 max-w-2xl text-zinc-600 dark:text-zinc-300">
        Disponible para práctica profesional desde Diciembre a Marzo, proyectos freelance y colaboración técnica en equipos de
        desarrollo.
      </p>
      <a
        href="mailto:eduardo.silva1@cloud.uautonoma.cl?subject=Contacto%20desde%20portafolio&body=Hola%20Eduardo,%20me%20gustaría%20contactarte%20por%20..."
        className="inline-flex rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
      >
        Enviar correo
      </a>
    </section>
  );
}
