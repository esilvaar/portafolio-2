"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/**
 * XPWindow — Ventana interactiva estilo Windows XP.
 *
 * Soporta:
 * - Drag & drop por el title bar (desktop)
 * - Minimizar (oculta la ventana, aparece en taskbar)
 * - Maximizar (llena el viewport)
 * - Z-index (click para traer al frente)
 * - Double-click en title bar: toggle maximizar
 * - Close actúa como minimizar (no se pierde contenido)
 *
 * Modo mobile (interactive=false): flow normal, sin drag,
 * pero los botones minimize siguen funcionales.
 */
export default function XPWindow({
  title,
  icon,
  children,
  className = "",
  statusText,
  id,
  titleAs: TitleTag = "h2",
  // --- Interactive props ---
  interactive = false,
  initialX = 0,
  initialY = 0,
  windowWidth,
  zIndex = 1,
  isMinimized = false,
  isMaximized = false,
  onMinimize,
  onMaximize,
  onRestore,
  onFocus,
}) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const dragOrigin = useRef({ mx: 0, my: 0, px: 0, py: 0 });
  const windowRef = useRef(null);

  /* ========================
     DRAG LOGIC
     ======================== */
  const handleDragStart = useCallback(
    (e) => {
      if (!interactive || isMaximized) return;
      e.preventDefault();
      const cx = e.touches?.[0]?.clientX ?? e.clientX;
      const cy = e.touches?.[0]?.clientY ?? e.clientY;
      dragOrigin.current = { mx: cx, my: cy, px: pos.x, py: pos.y };
      setDragging(true);
      onFocus?.();
    },
    [interactive, isMaximized, pos, onFocus]
  );

  useEffect(() => {
    if (!dragging) return;

    const onMove = (e) => {
      const cx = e.touches?.[0]?.clientX ?? e.clientX;
      const cy = e.touches?.[0]?.clientY ?? e.clientY;
      
      let newX = dragOrigin.current.px + cx - dragOrigin.current.mx;
      let newY = dragOrigin.current.py + cy - dragOrigin.current.my;
      
      newX = Math.max(0, newX);
      newY = Math.max(0, newY);
      
      if (windowRef.current && windowRef.current.parentElement) {
        const parent = windowRef.current.parentElement;
        const win = windowRef.current;
        const maxX = parent.clientWidth - win.clientWidth;
        // Limit the Y-axis so it hits the footer like a wall
        const maxY = parent.clientHeight - win.clientHeight;
        
        // Only bound right/bottom if the window is smaller than the parent
        // otherwise it would jump to negative numbers
        if (maxX > 0) newX = Math.min(newX, maxX);
        if (maxY > 0) newY = Math.min(newY, maxY);
      }
      
      setPos({ x: newX, y: newY });
    };

    const onEnd = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [dragging]);

  /* ========================
     BUTTON HANDLERS
     ======================== */
  const stop = (e) => e.stopPropagation();

  const handleMinimize = (e) => {
    stop(e);
    onMinimize?.();
  };

  const handleMaxRestore = (e) => {
    stop(e);
    isMaximized ? onRestore?.() : onMaximize?.();
  };

  const handleDoubleClick = () => {
    if (!interactive) return;
    isMaximized ? onRestore?.() : onMaximize?.();
  };

  /* ========================
     RENDER
     ======================== */

  // Hidden when minimized
  if (isMinimized) return null;

  // Positioning styles
  const positionStyle = interactive
    ? isMaximized
      ? {
          position: "fixed",
          inset: 0,
          top: 56,
          bottom: 34,
          zIndex: 9999,
          width: "100%",
          height: "auto",
        }
      : {
          position: "absolute",
          left: pos.x,
          top: pos.y,
          zIndex,
          width: windowWidth || "min(90vw, 900px)",
        }
    : {};

  return (
    <section
      id={id}
      ref={windowRef}
      className={`xp-window-frame bg-xp-frame animate-window-open ${isMaximized ? "!rounded-none" : ""} ${className}`}
      style={positionStyle}
      onMouseDown={() => interactive && !isMaximized && onFocus?.()}
    >
      {/* ===== TITLE BAR ===== */}
      <div
        className={`xp-titlebar-gradient flex items-center justify-between px-2 py-[3px] select-none ${interactive && !isMaximized ? "cursor-grab" : ""} ${dragging ? "!cursor-grabbing" : ""}`}
        onMouseDown={interactive ? handleDragStart : undefined}
        onTouchStart={interactive ? handleDragStart : undefined}
        onDoubleClick={handleDoubleClick}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          {icon && (
            <span className="text-sm shrink-0" aria-hidden="true">
              {icon}
            </span>
          )}
          <TitleTag className="text-xp-text-title font-bold text-sm font-titlebar truncate m-0 [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">
            {title}
          </TitleTag>
        </div>

        <div className="flex items-center gap-[2px] shrink-0 ml-2">
          {/* Minimize */}
          <button
            type="button"
            className="xp-window-btn"
            aria-label="Minimizar"
            onMouseDown={stop}
            onClick={handleMinimize}
          >
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
              <path d="M1 5h6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          {/* Maximize / Restore */}
          <button
            type="button"
            className="xp-window-btn"
            aria-label={isMaximized ? "Restaurar" : "Maximizar"}
            onMouseDown={stop}
            onClick={handleMaxRestore}
          >
            {isMaximized ? (
              <svg width="9" height="8" viewBox="0 0 9 8" fill="none">
                <rect x="2.5" y="0.5" width="5" height="4" stroke="currentColor" strokeWidth="1" />
                <rect x="0.5" y="2.5" width="5" height="4" stroke="currentColor" strokeWidth="1" fill="var(--xp-btn-face)" />
              </svg>
            ) : (
              <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                <rect x="1" y="1" width="6" height="5" stroke="currentColor" strokeWidth="1" />
              </svg>
            )}
          </button>

          {/* Close (acts as minimize) */}
          <button
            type="button"
            className="xp-window-btn xp-window-btn-close"
            aria-label="Cerrar"
            onMouseDown={stop}
            onClick={handleMinimize}
          >
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
              <path d="M1 1l6 5M7 1L1 6" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* ===== CONTENT AREA ===== */}
      <div
        className={`bg-xp-window xp-bevel-sunken m-[3px] p-3 md:p-4 ${interactive ? "overflow-y-auto" : ""}`}
        style={
          interactive
            ? isMaximized
              ? { maxHeight: "calc(100vh - 56px - 34px - 50px)" }
              : { maxHeight: "calc(100vh - 140px)" }
            : undefined
        }
      >
        {children}
      </div>

      {/* ===== STATUS BAR ===== */}
      {statusText && (
        <div className="flex items-center gap-2 px-[3px] pb-[3px]">
          <div className="xp-bevel-sunken bg-xp-frame flex-1 px-2 py-0.5 text-[11px] text-xp-text-secondary">
            {statusText}
          </div>
        </div>
      )}
    </section>
  );
}
