import XPButton from "@/components/ui/XPButton";

export default function ContactSection() {
  return (
    <div className="text-center py-4 md:py-8">
        <h3 className="text-lg font-bold text-xp-text font-heading mb-3">
          Trabajemos juntos
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-xp-text-secondary leading-relaxed">
          Disponible para práctica profesional desde Diciembre a Marzo,
          proyectos freelance y colaboración técnica en equipos de desarrollo.
        </p>
        <XPButton
          variant="primary"
          href="mailto:eduardo.silva1@cloud.uautonoma.cl?subject=Contacto%20desde%20portafolio&body=Hola%20Eduardo,%20me%20gustaría%20contactarte%20por%20..."
          className="text-[14px] px-6 py-2"
        >
          📧 Enviar correo
        </XPButton>
    </div>
  );
}
