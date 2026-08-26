"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Header from "./XPHeader";
import Footer from "./XPFooter";
import HeroSection from "./XPHero";
import ProjectsSection from "./XPProjects";
import SkillsSection from "./XPSkills";
import ExperienceSection from "./XPExperience";
import ContactSection from "./XPContact";
import XPWindow from "@/components/ui/XPWindow";
import { experience, navLinks, projects, skills, techStack } from "./data";

/**
 * Configuración de ventanas del escritorio.
 *
 * Orden: las primeras en la lista quedan al fondo del cascade.
 * La última (hero) queda al frente con z-index más alto.
 *
 * Cascade offset: ~35px en X e Y por ventana.
 */
const WINDOWS = [
  {
    id: "contacto",
    title: "Contacto",
    icon: "📧",
    titleAs: "h2",
    x: 15,
    y: 15,
    width: "min(85vw, 750px)",
  },
  {
    id: "experiencia",
    title: "Experiencia",
    icon: "💼",
    titleAs: "h2",
    x: 50,
    y: 50,
    width: "min(88vw, 850px)",
  },
  {
    id: "skills",
    title: "Skills Técnicos",
    icon: "⚙️",
    titleAs: "h2",
    statusText: `${skills.length} objeto(s)`,
    x: 85,
    y: 85,
    width: "min(88vw, 850px)",
  },
  {
    id: "proyectos",
    title: "Mis Proyectos",
    icon: "📁",
    titleAs: "h2",
    statusText: `${projects.length} objeto(s)`,
    x: 120,
    y: 120,
    width: "min(90vw, 920px)",
  },
  {
    id: "hero",
    title: "Mi Perfil — Eduardo Silva",
    icon: "👤",
    titleAs: "span",
    x: 155,
    y: 155,
    width: "min(92vw, 950px)",
  },
];

/** Contenido de cada ventana */
const CONTENT = {
  hero: () => <HeroSection techStack={techStack} />,
  proyectos: () => <ProjectsSection projects={projects} />,
  skills: () => <SkillsSection skills={skills} />,
  experiencia: () => <ExperienceSection experience={experience} />,
  contacto: () => <ContactSection />,
};

/**
 * HomePage — Escritorio de Windows XP.
 *
 * Gestiona el estado de todas las ventanas:
 * posición, z-index, minimizado, maximizado.
 *
 * Desktop: ventanas con posición absoluta, draggables, cascade.
 * Mobile: ventanas en flow vertical (stacked), sin drag.
 */
export default function XPLayout() {
  // --- Window states ---
  const [windowStates, setWindowStates] = useState(() => {
    const states = {};
    WINDOWS.forEach((w, i) => {
      states[w.id] = {
        minimized: false,
        maximized: false,
        zIndex: i + 1, // First in array = lowest z-index (back)
      };
    });
    return states;
  });

  const nextZRef = useRef(WINDOWS.length + 1);

  // --- Responsive ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // --- Window management ---
  const bringToFront = useCallback((id) => {
    nextZRef.current += 1;
    setWindowStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: nextZRef.current },
    }));
  }, []);

  const minimize = useCallback((id) => {
    setWindowStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], minimized: true, maximized: false },
    }));
  }, []);

  const maximize = useCallback(
    (id) => {
      nextZRef.current += 1;
      setWindowStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], maximized: true, zIndex: nextZRef.current },
      }));
    },
    []
  );

  const restore = useCallback(
    (id) => {
      nextZRef.current += 1;
      setWindowStates((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          minimized: false,
          maximized: false,
          zIndex: nextZRef.current,
        },
      }));
    },
    []
  );

  // --- Taskbar click (toggle minimize/restore/focus) ---
  const handleTaskbarClick = useCallback(
    (id) => {
      const state = windowStates[id];
      if (!state) return;

      if (state.minimized) {
        restore(id);
        return;
      }

      // If it's the active (topmost visible) window → minimize
      const visibleEntries = Object.entries(windowStates).filter(
        ([, s]) => !s.minimized
      );
      const topEntry = visibleEntries.sort(
        (a, b) => b[1].zIndex - a[1].zIndex
      )[0];

      if (topEntry && topEntry[0] === id) {
        minimize(id);
      } else {
        bringToFront(id);
      }
    },
    [windowStates, minimize, restore, bringToFront]
  );

  // --- Active window ID (for taskbar highlight) ---
  const activeWindowId = Object.entries(windowStates)
    .filter(([, s]) => !s.minimized)
    .sort((a, b) => b[1].zIndex - a[1].zIndex)[0]?.[0];

  // --- Render order: mobile shows hero first, desktop uses cascade order ---
  const renderOrder = isMobile ? [...WINDOWS].reverse() : WINDOWS;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-xp-desktop">
      <Header navLinks={navLinks} />

      <main
        className={`flex-1 ${isMobile ? "px-3 py-4 space-y-4 overflow-y-auto" : "relative overflow-hidden"}`}

      >
        {renderOrder.map((win) => {
          const state = windowStates[win.id];
          const Content = CONTENT[win.id];

          return (
            <XPWindow
              key={win.id}
              id={win.id}
              title={win.title}
              icon={win.icon}
              titleAs={win.titleAs}
              statusText={win.statusText}
              interactive={!isMobile}
              initialX={win.x}
              initialY={win.y}
              windowWidth={isMobile ? undefined : win.width}
              zIndex={state.zIndex}
              isMinimized={state.minimized}
              isMaximized={state.maximized}
              onMinimize={() => minimize(win.id)}
              onMaximize={() => maximize(win.id)}
              onRestore={() => restore(win.id)}
              onFocus={() => bringToFront(win.id)}
            >
              <Content />
            </XPWindow>
          );
        })}
      </main>

      <Footer
        windows={WINDOWS}
        windowStates={windowStates}
        activeWindowId={activeWindowId}
        onWindowClick={handleTaskbarClick}
      />
    </div>
  );
}
