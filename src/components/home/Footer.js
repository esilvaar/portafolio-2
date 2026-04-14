export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 px-6 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800">
      © {year} Estudiante de Ingeniería Civil Informática -Eduardo Egidio Silva Arellana.
    </footer>
  );
}
