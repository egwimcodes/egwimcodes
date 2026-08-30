import type { Visibility } from "@/content/site";

const STYLES: Record<Visibility, string> = {
  public: "border-cyan/45 bg-cyan/10 text-cyan",
  private: "border-line bg-surface text-muted",
};

/** Stronger contrast for badges stacked on photos. */
const OVERLAY_STYLES: Record<Visibility, string> = {
  public: "border-cyan/50 bg-graphite/75 text-cyan backdrop-blur-md",
  private: "border-white/25 bg-graphite/75 text-silver backdrop-blur-md",
};

/** Compact Public / Private chip used on case studies and portfolio cards. */
export function VisibilityBadge({
  visibility,
  label,
  overlay = false,
}: {
  visibility: Visibility;
  /** Overrides the default Public/Private label (e.g. "Public repo"). */
  label?: string;
  /** Use photo-friendly contrast (card image corner overlays). */
  overlay?: boolean;
}) {
  const text =
    label ?? (visibility === "public" ? "Public" : "Private");

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] uppercase ${
        overlay ? OVERLAY_STYLES[visibility] : STYLES[visibility]
      }`}
    >
      {text}
    </span>
  );
}
