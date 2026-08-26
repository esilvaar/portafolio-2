/**
 * XPButton — Botón estilo Windows XP con efecto 3D raised.
 *
 * Si recibe `href`, renderiza como <a>. De lo contrario, <button>.
 * Esto corrige el problema de HTML inválido (<button> wrapping <a>).
 *
 * Props:
 *  variant   — "default" | "primary"
 *  href      — URL destino (renderiza como <a>)
 *  target    — Target del link
 *  rel       — Rel del link
 *  children  — Contenido del botón
 *  className — Clases adicionales
 *  ...rest   — Props adicionales (onClick, type, aria-label, etc.)
 */
export default function XPButton({
  children,
  href,
  variant = "default",
  target,
  rel,
  className = "",
  ...props
}) {
  const base =
    "xp-bevel-raised inline-flex items-center justify-center px-4 py-1.5 text-[13px] cursor-pointer select-none transition-[filter] duration-75 focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-xp-text focus-visible:outline-offset-[-4px]";

  const variants = {
    default: "bg-xp-btn-face text-xp-text hover:bg-xp-btn-highlight",
    primary:
      "bg-xp-blue text-white font-bold hover:brightness-[1.1] [text-shadow:1px_1px_1px_rgba(0,0,0,0.3)]",
  };

  const classes = `${base} ${variants[variant] || variants.default} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
