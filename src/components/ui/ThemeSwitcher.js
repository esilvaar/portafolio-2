"use client";

import { useLayoutTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { layoutTheme, changeLayout, isLoaded } = useLayoutTheme();

  if (!isLoaded) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2">
      <button
        onClick={() => changeLayout("executive")}
        className={`px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-all ${
          layoutTheme === "executive"
            ? "bg-black text-white dark:bg-white dark:text-black scale-105"
            : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700"
        }`}
      >
        Executive Theme
      </button>
      <button
        onClick={() => changeLayout("xp")}
        className={`px-4 py-2 rounded-full text-sm font-bold font-sans shadow-lg transition-all border-b-2 border-r-2 ${
          layoutTheme === "xp"
            ? "bg-[#0F8BEF] text-white border-blue-900 scale-105"
            : "bg-xp-btn-face text-black border-gray-400 hover:bg-xp-btn-highlight"
        }`}
      >
        Windows XP
      </button>
    </div>
  );
}
