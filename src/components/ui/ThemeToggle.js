"use client";

import { useState, useEffect } from "react";

/**
 * ThemeToggle — Botón XP para alternar entre light/dark mode.
 *
 * Lee la preferencia inicial de localStorage o del sistema.
 * Persiste la elección en localStorage.
 * Aplica/remueve la clase .dark en <html>.
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="xp-bevel-raised bg-xp-btn-face text-xp-text px-2 py-1 text-[13px] cursor-pointer select-none hover:bg-xp-btn-highlight focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-xp-text focus-visible:outline-offset-[-4px]"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
