"use client";

import { useLayoutTheme } from "@/context/ThemeContext";
import { useEffect } from "react";

export default function ThemeSwitcher() {
  const { layoutTheme, changeLayout, isLoaded, isThemeMenuOpen, closeThemeMenu } = useLayoutTheme();

  // Prevenir el scroll del fondo cuando el menú está abierto
  useEffect(() => {
    if (isThemeMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isThemeMenuOpen]);

  if (!isLoaded || !isThemeMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black text-white flex flex-col items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
      <button 
        onClick={closeThemeMenu}
        className="absolute top-8 right-8 text-white hover:text-red-500 font-bold text-2xl uppercase tracking-widest transition-colors cursor-pointer"
      >
        CERRAR [X]
      </button>

      <h2 className="text-4xl md:text-7xl font-serif font-black uppercase mb-16 md:mb-24 text-center tracking-tighter">
        SELECCIONA<br />UN TEMA
      </h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-5xl justify-center">
        {/* Botón Ejecutivo */}
        <button
          onClick={() => changeLayout("executive")}
          className={`flex-1 flex flex-col items-center justify-center gap-6 p-12 border-4 transition-transform hover:-translate-y-2 hover:translate-x-2 cursor-pointer ${
            layoutTheme === "executive" 
              ? "bg-white text-black border-white shadow-[16px_16px_0_#fff]" 
              : "bg-black text-white border-white hover:bg-white hover:text-black hover:shadow-[16px_16px_0_#fff]"
          }`}
        >
          <span className="text-4xl md:text-6xl font-serif font-black uppercase">EJECUTIVO</span>
          <span className="font-sans font-bold uppercase tracking-widest text-sm bg-lime-400 text-black px-6 py-2 border-2 border-black">ESTILO BRUTALISTA</span>
        </button>

        {/* Botón XP */}
        <button
          onClick={() => changeLayout("xp")}
          className={`flex-1 flex flex-col items-center justify-center gap-6 p-12 border-4 transition-transform hover:-translate-y-2 hover:translate-x-2 cursor-pointer ${
            layoutTheme === "xp" 
              ? "bg-[#ECE9D8] text-black border-[#ECE9D8] shadow-[16px_16px_0_#0A246A]" 
              : "bg-black text-white border-[#ECE9D8] hover:bg-[#ECE9D8] hover:text-black hover:shadow-[16px_16px_0_#0A246A]"
          }`}
        >
          <span className="text-4xl md:text-6xl font-serif font-black uppercase">RETRO XP</span>
          <span className="font-sans font-bold uppercase tracking-widest text-sm bg-blue-600 text-white px-6 py-2 border-2 border-black">ESTILO Y2K / NOSTALGIA</span>
        </button>
      </div>
    </div>
  );
}
