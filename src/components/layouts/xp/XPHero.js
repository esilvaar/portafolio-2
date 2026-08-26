import XPButton from "@/components/ui/XPButton";
import XPBadge from "@/components/ui/XPBadge";
import { GithubIcon, LinkedInIcon } from "./icons";

/**
 * HeroSection — Sección hero dentro de una ventana XP.
 *
 * Contiene:
 * - Intro text con h1 (heading principal de la página)
 * - CTAs como XPButtons
 * - Social links
 * - Tech stack badges
 * - Panel de perfil con foto (estilo panel sunken de XP)
 */
export default function HeroSection({ techStack }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* Left: Text content */}
        <div className="order-1">
          <XPBadge color="blue" className="mb-4">
            5to año de Ingeniería Civil Informática
          </XPBadge>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-xp-text mb-4 leading-tight">
            Soluciones tecnológicas desde
            <span className="block text-xp-blue">el código hasta la nube</span>
          </h1>

          <p className="text-xp-text-secondary mb-6 leading-relaxed max-w-2xl">
            Bienvenido a mi <strong>portafolio</strong> personal. Soy estudiante
            de <strong>Ingeniería Civil Informática</strong> con especial enfoque
            en desarrollo Full Stack (web y móvil) y arquitectura de software. Me
            apasiona la administración de sistemas y la programación de alta
            calidad, creando soluciones escalables y seguras desde que escribo la
            primera línea de <strong>código</strong> hasta su despliegue en la{" "}
            <strong>nube</strong>.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <XPButton variant="primary" href="#proyectos">
              Ver proyectos
            </XPButton>
            <XPButton href="#contacto">Contactar</XPButton>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Social links */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://github.com/esilvaar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="xp-bevel-raised bg-xp-btn-face text-xp-text p-1.5 inline-flex items-center justify-center hover:bg-xp-btn-highlight"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-silva-arellana-4679b133b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="xp-bevel-raised bg-xp-btn-face text-xp-text p-1.5 inline-flex items-center justify-center hover:bg-xp-btn-highlight"
              >
                <LinkedInIcon />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-5 w-px bg-xp-border-light" />

            {/* Tech stack badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              {techStack.map((tech) => (
                <XPBadge key={tech} color="gray">
                  {tech}
                </XPBadge>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Profile panel */}
        <div className="order-2 flex justify-center lg:justify-end">
          <div className="xp-bevel-sunken bg-xp-panel p-5 w-64 sm:w-72 text-center">
            {/* Profile badge */}
            <div className="relative mb-3">
              <span className="xp-bevel-raised bg-xp-frame px-2 py-0.5 text-[10px] font-bold uppercase text-xp-blue tracking-wide">
                Perfil
              </span>
            </div>

            {/* Profile photo */}
            <div className="relative inline-block mb-4">
              <img
                src="/Perfil.JPG"
                alt="Foto de perfil de Eduardo Silva"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover xp-bevel-sunken"
              />
              <span
                className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-xp-success border-2 border-xp-window animate-blink"
                title="Disponible"
              />
            </div>

            <h2 className="text-base font-bold text-xp-text font-heading mb-1">
              Est. Ing. Civil Informática
            </h2>
            <p className="text-[12px] text-xp-text-secondary leading-relaxed">
              Enfocado en la construcción de soluciones eficientes, integración
              de servicios y despliegue de aplicaciones escalables en entornos
              modernos.
            </p>
          </div>
        </div>
    </div>
  );
}
