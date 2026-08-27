"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [layoutTheme, setLayoutTheme] = useState("executive");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const savedLayout = localStorage.getItem("layoutTheme");
    if (savedLayout && (savedLayout === "xp" || savedLayout === "executive")) {
      setLayoutTheme(savedLayout);
    }
    setIsLoaded(true);
  }, []);

  const changeLayout = (newTheme) => {
    setLayoutTheme(newTheme);
    localStorage.setItem("layoutTheme", newTheme);
    setIsThemeMenuOpen(false); // Cierra el menú automáticamente
  };

  const toggleThemeMenu = () => setIsThemeMenuOpen((prev) => !prev);
  const closeThemeMenu = () => setIsThemeMenuOpen(false);

  return (
    <ThemeContext.Provider value={{ layoutTheme, changeLayout, isLoaded, isThemeMenuOpen, toggleThemeMenu, closeThemeMenu }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useLayoutTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useLayoutTheme must be used within a ThemeProvider");
  }
  return context;
}
