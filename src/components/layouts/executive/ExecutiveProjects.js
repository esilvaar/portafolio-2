import { projects } from "@/components/layouts/xp/data";

export default function ExecutiveProjects() {
  return (
    <section id="proyectos" className="flex flex-col gap-12 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-5xl md:text-6xl font-serif font-black uppercase relative z-10 inline-block">
          Proyectos <span className="text-red-500">Destacados</span>
          <div className="absolute -bottom-2 left-0 w-full h-6 bg-lime-400 -z-10 transform -rotate-2"></div>
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, index) => (
          <a 
            href={p.web || p.github} 
            target="_blank" 
            rel="noopener noreferrer"
            key={p.title} 
            className={`group flex flex-col gap-6 p-8 bg-white dark:bg-black border-4 border-black dark:border-white hover:-translate-y-2 hover:translate-x-2 transition-transform shadow-[12px_12px_0_#000] dark:shadow-[12px_12px_0_#fff] hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-wrap gap-3 mb-2">
                {p.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm font-bold bg-black dark:bg-white text-white dark:text-black uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-12 h-12 bg-lime-400 border-4 border-black dark:border-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif font-black text-3xl md:text-5xl mb-4 group-hover:underline decoration-4 underline-offset-4">{p.title}</h4>
              <p className="text-black dark:text-white font-medium text-lg leading-relaxed max-w-2xl">{p.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
