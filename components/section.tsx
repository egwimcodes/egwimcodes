import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export const CONTAINER = "mx-auto w-full max-w-6xl px-5 sm:px-8";

/** Shared button styling so CTAs stay consistent across sections. */
export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-graphite transition-all duration-300 hover:shadow-[0_0_32px_-4px_var(--color-cyan)] hover:brightness-110";

export const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-fg transition-all duration-300 hover:border-cyan/60 hover:text-cyan";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className={CONTAINER}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <Reveal
      className={`mb-14 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-cyan uppercase ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-cyan/60" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
        {title}
        {accent ? <span className="brand-text-gradient"> {accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
