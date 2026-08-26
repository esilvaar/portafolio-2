import { projects } from "@/components/layouts/xp/data";

export default function ExecutiveProjects() {
  return (
    <section id="proyectos" className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold tracking-tight">Proyectos Destacados</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, index) => (
          <a 
            href={p.web || p.github} 
            target="_blank" 
            rel="noopener noreferrer"
            key={p.title} 
            className={`group flex flex-col gap-5 p-6 md:p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl md:text-2xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{p.title}</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">{p.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
