/**
 * XPBadge — Badge/tag estilo Windows XP.
 *
 * Props:
 *  color     — "blue" | "green" | "gray" (default: "blue")
 *  children  — Contenido del badge
 *  className — Clases adicionales
 */
export default function XPBadge({ children, color = "blue", className = "" }) {
  const colorMap = {
    blue: "bg-xp-hover text-xp-blue border-xp-blue",
    green: "bg-xp-panel text-xp-success border-xp-success",
    gray: "bg-xp-frame text-xp-text-secondary border-xp-border-light",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide border rounded-sm ${colorMap[color] || colorMap.blue} ${className}`}
    >
      {children}
    </span>
  );
}
