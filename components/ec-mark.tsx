import { EC_PATHS, EC_VIEWBOX } from "@/components/ec-paths";

/**
 * The monogram's gradients are declared once for the whole document and
 * referenced by every <EcMark>. Keeping them here avoids duplicate element ids
 * when the mark is rendered more than once, and keeps each instance to four
 * <path> elements.
 *
 * Rendered from app/layout.tsx. Sized to zero rather than display:none, which
 * some browsers treat as "no paint server available".
 */
export function BrandGradients() {
  return (
    <svg
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <linearGradient id="ec-grad-cyan" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#19DDF4" />
          <stop offset="0.55" stopColor="#09BDEB" />
          <stop offset="1" stopColor="#1672F2" />
        </linearGradient>
        <linearGradient id="ec-grad-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.45" stopColor="#E6E8EC" />
          <stop offset="1" stopColor="#AEB5C0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * The EC monogram, inlined so the fills can follow the theme. The cyan C uses
 * the brand gradient on both themes; the second C is silver on dark and flat
 * graphite on light (see `--ec-second-c` in globals.css).
 */
export function EcMark({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox={EC_VIEWBOX}
      className={className}
      role={label ? "img" : undefined}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {label ? <title>{label}</title> : null}
      {EC_PATHS.map(({ id, d, tone }) => (
        <path key={id} d={d} className={tone === "cyan" ? "ec-c1" : "ec-c2"} />
      ))}
    </svg>
  );
}
