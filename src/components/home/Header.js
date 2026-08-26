"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

/**
 * Header — Barra fija estilo Windows XP.
 *
 * Estructura:
 * - Title bar (gradiente azul con nombre + botones de ventana)
 * - Menu bar (fondo gris con links de navegación + ThemeToggle)
 * - Mobile: menú desplegable estilo menú contextual XP
 */
export default function Header({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-50 shrink-0">
      {/* Title Bar */}
      <div className="xp-titlebar-gradient flex items-center justify-between px-2 py-[3px] select-none">
        <a href="#" className="flex items-center gap-1.5 min-w-0 no-underline">
          <img
            src="/logo.png"
            alt="logo"
            className="h-5 w-auto shrink-0"
          />
          <span className="text-xp-text-title font-bold text-sm font-titlebar truncate [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">
            Portafolio — Eduardo Silva
          </span>
        </a>
        <div className="hidden md:flex items-center gap-[2px] shrink-0">
          <span className="xp-window-btn" aria-hidden="true">
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
              <path d="M1 5h6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="xp-window-btn" aria-hidden="true">
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
              <rect x="1" y="1" width="6" height="5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
          <span className="xp-window-btn xp-window-btn-close" aria-hidden="true">
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
              <path d="M1 1l6 5M7 1L1 6" stroke="white" strokeWidth="1.5" />
            </svg>
          </span>
        </div>
      </div>

      {/* Menu Bar */}
      <nav className="bg-xp-frame border-b border-xp-border-light flex items-center justify-between px-1 py-[2px]">
        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-[3px] text-[13px] text-xp-text hover:bg-xp-selection hover:text-white transition-colors duration-75 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-3 py-[3px] text-[13px] text-xp-text font-bold hover:bg-xp-selection hover:text-white transition-colors duration-75 no-underline"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="xp-bevel-raised bg-xp-btn-face p-1 md:hidden cursor-pointer"
        >
          <svg
            className="w-5 h-5 text-xp-text"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Theme toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Dropdown — XP context menu style */}
      {isMenuOpen && (
        <div className="bg-xp-window border border-xp-shadow shadow-lg md:hidden xp-bevel-raised">
          <div className="py-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-1.5 text-[13px] text-xp-text hover:bg-xp-selection hover:text-white transition-colors duration-75 no-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-1.5 text-[13px] text-xp-text font-bold hover:bg-xp-selection hover:text-white transition-colors duration-75 no-underline"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
