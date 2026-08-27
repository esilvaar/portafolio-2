"use client";

import { useState, useEffect } from "react";
import { useLayoutTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const { layoutTheme } = useLayoutTheme();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  }

  const isExecutive = layoutTheme === "executive";

  return (
    <button
      type="button"
      onClick={toggle}
      className={
        isExecutive
          ? "ml-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black border-4 border-black dark:border-white font-bold uppercase transition-none hover:bg-lime-400 dark:hover:bg-lime-400 hover:text-black dark:hover:text-black cursor-pointer shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] text-sm"
          : "xp-bevel-raised bg-xp-btn-face text-xp-text px-2 py-1 text-[13px] cursor-pointer select-none hover:bg-xp-btn-highlight focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-xp-text focus-visible:outline-offset-[-4px]"
      }
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      {isDark ? (isExecutive ? "CLARO" : "☀️") : (isExecutive ? "OSCURO" : "🌙")}
    </button>
  );
}
