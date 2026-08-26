export default function ExecutiveFooter() {
  return (
    <footer className="w-full max-w-4xl px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 font-medium">
      <span>© {new Date().getFullYear()} Eduardo Silva.</span>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="https://github.com/esilvaar" className="hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/eduardo-silva-arellana-4679b133b/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
}
