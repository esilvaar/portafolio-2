"use client";

import { navLinks } from "@/components/layouts/xp/data";
import { useLayoutTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function ExecutiveNavbar() {
  const { toggleThemeMenu } = useLayoutTheme();

  return (
    <header className="w-full px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6 border-b-8 border-black dark:border-white bg-white dark:bg-black sticky top-0 z-50">
      <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tighter uppercase hover:bg-lime-400 hover:text-black dark:hover:text-black transition-none px-2 cursor-default">
        Eduardo<br/>Silva.
      </h1>
      <nav className="flex flex-wrap gap-4 items-center justify-center">
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="text-lg font-bold text-black dark:text-white border-4 border-transparent hover:border-black dark:hover:border-white hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#fff] hover:bg-lime-400 dark:hover:bg-lime-400 dark:hover:text-black px-4 py-2 transition-none uppercase"
          >
            {link.label}
          </a>
        ))}
        <div className="flex items-center">
          <button 
            onClick={toggleThemeMenu}
            className="ml-2 md:ml-4 text-lg font-bold text-white dark:text-black bg-black dark:bg-white border-4 border-black dark:border-white hover:bg-lime-400 dark:hover:bg-lime-400 hover:text-black dark:hover:text-black hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#fff] px-6 py-2 transition-none uppercase cursor-pointer"
          >
            Temas
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
