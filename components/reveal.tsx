"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { prefersReducedMotion } from "@/components/use-reduced-motion";

/**
 * How far below the fold still counts as "about to be seen".
 * A negative observer margin delayed reveals until the block was already
 * 80px on screen, which made every section under the hero feel like a load wait.
 */
const LEAD_PX = 160;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance travelled on the way in, in pixels. */
  y?: number;
};

/**
 * Shared scroll-reveal wrapper, replacing the old `data-aos` attributes.
 *
 * The server renders children visible, so the page is readable before any
 * JavaScript arrives. The hidden state is applied on mount and only to elements
 * still below the fold, where the switch cannot be seen.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    // Already on screen, or about to be: leave it visible. Hiding near-fold
    // content made About/Services look like they were still loading.
    if (element.getBoundingClientRect().top < window.innerHeight + LEAD_PX) {
      return;
    }

    element.dataset.reveal = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "shown";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: `0px 0px ${LEAD_PX}px 0px`, threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        {
          "--reveal-y": `${y}px`,
          "--reveal-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
