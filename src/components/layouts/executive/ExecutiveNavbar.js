import { navLinks } from "@/components/layouts/xp/data";

export default function ExecutiveNavbar() {
  return (
    <header className="w-full max-w-4xl px-6 py-10 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-tight">Eduardo Silva</h1>
      <nav className="hidden md:flex gap-8 items-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-800">
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
