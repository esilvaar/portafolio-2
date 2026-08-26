import XPBadge from "@/components/ui/XPBadge";

/**
 * ExperienceSection — Lista de experiencia dentro de una ventana XP.
 *
 * Cada experiencia se muestra como un panel con borde sunken,
 * similar a los paneles de propiedades de Windows XP.
 */
export default function ExperienceSection({ experience }) {
  return (
    <div className="space-y-3 max-w-4xl mx-auto">
        {experience.map((item) => (
          <article
            key={item.role}
            className="xp-bevel-sunken bg-xp-panel p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-[14px] font-bold text-xp-text font-heading">
                {item.role}
              </h3>
              <XPBadge color="blue">{item.period}</XPBadge>
            </div>
            <p className="text-[12px] font-semibold text-xp-text-secondary mb-1.5">
              {item.place}
            </p>
            <p className="text-[12px] leading-relaxed text-xp-text-secondary">
              {item.detail}
            </p>
          </article>
        ))}
    </div>
  );
}
