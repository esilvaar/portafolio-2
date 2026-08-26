import XPButton from "@/components/ui/XPButton";
import XPBadge from "@/components/ui/XPBadge";

/**
 * ProjectsSection — Grid de proyectos dentro de una ventana XP.
 *
 * Cada proyecto se muestra como un panel con borde sunken.
 * Fix: reemplaza <button><a> por XPButton con href (HTML válido).
 */
export default function ProjectsSection({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="xp-bevel-sunken bg-xp-panel p-4 transition-shadow duration-200 hover:shadow-md"
          >
            <h3 className="text-[14px] font-bold text-xp-text mb-2 font-heading">
              {project.title}
            </h3>
            <p className="text-[12px] leading-relaxed text-xp-text-secondary mb-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tags.map((tag) => (
                <XPBadge key={tag} color="blue">
                  {tag}
                </XPBadge>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2">
              <XPButton
                variant="primary"
                href={project.web}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] px-3 py-1"
              >
                Visitar
              </XPButton>
              {project.github && (
                <XPButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] px-3 py-1"
                >
                  Ver en GitHub
                </XPButton>
              )}
            </div>
          </article>
        ))}
    </div>
  );
}
