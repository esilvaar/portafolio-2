import { GithubIcon, LinkedInIcon } from "./icons";

/**
 * Footer — Taskbar estilo Windows XP.
 */
export default function Footer({ windows = [], windowStates = {}, activeWindowId, onWindowClick }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-50 shrink-0 xp-taskbar-gradient border-t-2 border-t-[#6CB1FF] dark:border-t-[#3A5A8E]">
      <div className="flex items-center h-[34px] px-1 gap-1">
        {/* Start Button */}
        <button
          className="xp-start-btn flex items-center gap-1.5 px-3 h-[28px] text-[13px] no-underline shrink-0 cursor-pointer"
          onClick={() => onWindowClick('hero')}
        >
          <img src="/logo.png" alt="" className="h-4 w-auto" aria-hidden="true" />
          <span>inicio</span>
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-[#1A3F9E] mx-1 shrink-0" />

        {/* Task buttons — Represent the windows */}
        <div className="flex items-center gap-1 overflow-x-auto min-w-0 pr-2">
          {windows.map((win) => {
            const state = windowStates[win.id];
            if (!state) return null;
            
            // Highlight as active if it's the focused window and it's not minimized
            const isActive = activeWindowId === win.id && !state.minimized;
            
            return (
              <button
                key={win.id}
                onClick={() => onWindowClick(win.id)}
                className={`flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold whitespace-nowrap border transition-colors duration-75 shrink-0 max-w-[150px] overflow-hidden truncate cursor-pointer ${
                  isActive 
                    ? 'bg-xp-selection text-white border-transparent shadow-inner' 
                    : 'bg-xp-btn-face text-xp-text xp-bevel-raised hover:bg-xp-btn-highlight'
                }`}
                title={win.title}
              >
                <span className="shrink-0">{win.icon}</span>
                <span className="truncate">{win.title}</span>
              </button>
            );
          })}
        </div>

        {/* System Tray */}
        <div className="ml-auto flex items-center gap-1.5 xp-bevel-sunken bg-[#0F8BEF]/20 px-2 py-0.5 shrink-0">
          <a
            href="https://github.com/esilvaar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/80 hover:text-white transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-silva-arellana-4679b133b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/80 hover:text-white transition-colors"
          >
            <LinkedInIcon />
          </a>
          <span className="text-[11px] text-white/90 ml-1 font-mono">
            © {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
