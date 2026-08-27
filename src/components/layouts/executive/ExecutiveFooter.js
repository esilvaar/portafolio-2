export default function ExecutiveFooter() {
  return (
    <footer className="w-full border-t-8 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black px-6 lg:px-12 py-16 flex flex-col md:flex-row justify-between items-center font-bold">
      <span className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-center md:text-left">© {new Date().getFullYear()} Eduardo Silva</span>
      <div className="flex gap-8 mt-8 md:mt-0">
        <a href="https://github.com/esilvaar" className="text-xl hover:text-lime-400 dark:hover:text-blue-600 hover:underline decoration-4 underline-offset-4 transition-colors">GITHUB</a>
        <a href="https://www.linkedin.com/in/eduardo-silva-arellana-4679b133b/" className="text-xl hover:text-lime-400 dark:hover:text-blue-600 hover:underline decoration-4 underline-offset-4 transition-colors">LINKEDIN</a>
      </div>
    </footer>
  );
}
