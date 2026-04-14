"use client";

import { useState } from "react";

export default function Header({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-500/20 bg-[#101622]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-3 ">
          <span className="grid size-10 place-items-center rounded-lg bg-blue-600 text-lg font-bold text-white">ES</span>
          <span className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-blue-400">
            Eduardo Egidio Silva Arellana
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/30 transition hover:bg-blue-500"
          >
            Hablemos
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="grid size-10 place-items-center rounded-md text-white md:hidden"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#101622] px-6 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
