import { GithubIcon, LinkedInIcon } from "./icons";

/**
 * Footer — Taskbar estilo Windows XP.
 *
 * Estructura:
 * - Botón "Inicio" (verde, con logo)
 * - Botones de sección (como botones de tarea en la taskbar)
 * - System tray (social links + año/reloj)
 */
export default function Footer({ navLinks }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-50 shrink-0 xp-taskbar-gradient border-t-2 border-t-[#6CB1FF] dark:border-t-[#3A5A8E]">
      <div className="flex items-center h-[34px] px-1 gap-1">
        {/* Start Button */}
        <a
          href="#"
          className="xp-start-btn flex items-center gap-1.5 px-3 h-[28px] text-[13px] no-underline shrink-0"
        >
          <img src="/logo.png" alt="" className="h-4 w-auto" aria-hidden="true" />
          <span>inicio</span>
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-[#1A3F9E] mx-1 shrink-0" />

        {/* Task buttons — section navigation */}
        <div className="flex items-center gap-0.5 overflow-x-auto min-w-0">
          {navLinks?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="xp-bevel-raised bg-xp-btn-face text-xp-text px-2.5 py-0.5 text-[11px] whitespace-nowrap hover:bg-xp-btn-highlight transition-colors duration-75 no-underline shrink-0"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* System Tray */}
        <div className="ml-auto flex items-center gap-1.5 xp-bevel-sunken bg-[#0F8BEF]/20 px-2 py-0.5 shrink-0">
          <a
            href="https://github.com/esilvaar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/80 hover:text-white transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-silva-arellana-4679b133b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/80 hover:text-white transition-colors"
          >
            <LinkedInIcon />
          </a>
          <span className="text-[11px] text-white/90 ml-1 font-mono">
            © {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
