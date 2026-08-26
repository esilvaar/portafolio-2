/**
 * SkillsSection — Grid de skills dentro de una ventana XP.
 *
 * Cada skill se muestra como un item estilo "icono de archivo"
 * del Explorador de Windows, con icono y nombre.
 */
export default function SkillsSection({ skills }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="xp-bevel-raised bg-xp-btn-face flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-medium text-xp-text hover:bg-xp-btn-highlight transition-colors duration-75 cursor-default"
          >
            <skill.icon className="w-6 h-6 text-xp-blue shrink-0" />
            <span className="truncate">{skill.name}</span>
          </div>
        ))}
    </div>
  );
}
