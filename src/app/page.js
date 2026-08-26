"use client";

import { useLayoutTheme } from "@/context/ThemeContext";
import XPLayout from "@/components/layouts/xp/XPLayout";
import ExecutiveLayout from "@/components/layouts/executive/ExecutiveLayout";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

export default function Home() {
  const { layoutTheme, isLoaded } = useLayoutTheme();

  if (!isLoaded) return null; // Wait for theme to load to prevent hydration mismatch

  return (
    <>
      {layoutTheme === "executive" ? <ExecutiveLayout /> : <XPLayout />}
      <ThemeSwitcher />
    </>
  );
}
