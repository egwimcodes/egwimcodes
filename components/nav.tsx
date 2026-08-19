"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { CONTAINER } from "@/components/section";
import { navLinks, type SectionId } from "@/content/site";

export function Nav() {
  const [active, setActive] = useState<SectionId>("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const visible = useRef(new Set<string>());
  const list = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // The root margin collapses the viewport to a band across its middle, so a
    // section counts as active only while it crosses that band.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.current.add(entry.target.id);
          else visible.current.delete(entry.target.id);
        }

        const current = navLinks.find(({ id }) => visible.current.has(id));
        if (current) setActive(current.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock background scrolling while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Track the active link's box so one pill can slide between them in CSS.
  useEffect(() => {
    const measure = () => {
      const target = list.current?.querySelector<HTMLElement>(`[data-nav="${active}"]`);
      if (target) setPill({ left: target.offsetLeft, width: target.offsetWidth });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className={`${CONTAINER} flex h-18 items-center justify-between gap-4`}>
        <a href="#home" aria-label="egwimcodes — back to top" onClick={close}>
          <Logo />
        </a>

        {/* lg: seven labels + pill need more than 768px; tablet keeps the sheet. */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul ref={list} className="relative flex items-center gap-1">
            {pill ? (
              <span
                aria-hidden
                className="ec-nav-pill"
                style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
              />
            ) : null}
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  data-nav={id}
                  aria-current={active === id ? "true" : undefined}
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === id ? "text-cyan" : "text-muted hover:text-fg"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-cyan/60 hover:text-cyan lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Kept mounted, with `visibility` hiding it from tab order when closed,
          so it can animate in both directions without an animation library. */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        data-open={open}
        className="ec-sheet absolute inset-x-0 top-full border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <ul className={`${CONTAINER} flex flex-col py-3`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={close}
                aria-current={active === id ? "true" : undefined}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  active === id
                    ? "bg-cyan/10 text-cyan"
                    : "text-muted hover:bg-surface hover:text-fg"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
