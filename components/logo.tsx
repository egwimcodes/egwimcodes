import { EcMark } from "@/components/ec-mark";
import { site } from "@/content/site";

/** The wordmark is live Sora text, not an image, so it stays sharp and selectable. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold tracking-tight ${className}`}>
      egwim<span className="text-cyan">codes</span>
    </span>
  );
}

/** `SOFTWARE · APPS · AI · PRODUCTS` — the tagline half of the brand lockup. */
export function Tagline({ className = "" }: { className?: string }) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-[0.7rem] font-semibold tracking-[0.24em] text-muted uppercase ${className}`}
    >
      {site.tagline.map((word, index) => (
        <span key={word} className="flex items-center gap-2">
          {index > 0 ? (
            <span className="text-cyan" aria-hidden>
              ·
            </span>
          ) : null}
          {word}
        </span>
      ))}
    </p>
  );
}

/** Horizontal lockup for the nav bar. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <EcMark className="h-8 w-auto shrink-0" />
      <Wordmark className="text-lg" />
    </span>
  );
}

/** The full stacked lockup — mark, wordmark and tagline. */
export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <EcMark className="h-12 w-auto" label="egwimcodes" />
      <Wordmark className="mt-4 block text-2xl" />
      <Tagline className="mt-2" />
    </div>
  );
}
