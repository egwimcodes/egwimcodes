"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      aria-label="Toggle dark mode"
      className={`inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-cyan/60 hover:text-cyan ${className}`}
    >
      {/* Swapped with the `dark` class rather than the resolved theme, so the
          server and client markup always agree. */}
      <Moon className="size-[18px] dark:hidden" aria-hidden />
      <Sun className="hidden size-[18px] dark:block" aria-hidden />
    </button>
  );
}
