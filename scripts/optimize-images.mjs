/**
 * Converts the photographic assets to WebP at sensible dimensions.
 *
 * The originals are 1640-1920px screenshots weighing up to 1.24MB each, which
 * render in cards no wider than ~420px. next/image would re-encode them on every
 * cold request; shipping right-sized sources makes that work trivial instead.
 *
 * Run with `npm run images:optimize`.
 */
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PROJECTS_DIR = "public/projects";

/** Card renders at ~420px CSS wide; 1400 keeps headroom for 3x screens. */
const PROJECT_WIDTH = 1400;
const QUALITY = 80;

/** Standalone images that aren't in the projects folder. */
const SINGLES = [
  // Keeps its PNG sibling, which the Person JSON-LD still points at.
  { from: "public/Wisdom-Egwim.png", to: "public/Wisdom-Egwim.webp", width: 900, keepSource: true },
  { from: "public/Wisdom-Egwim-Portfolio.png", to: "public/Wisdom-Egwim-Portfolio.webp", width: 1000 },
];

const kb = (bytes) => Math.round(bytes / 1024);

async function convert(from, to, width, keepSource = false) {
  const before = (await stat(from)).size;

  await sharp(from)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(to);

  const after = (await stat(to)).size;
  if (!keepSource) await unlink(from);

  const saved = Math.round((1 - after / before) * 100);
  console.log(
    `  ${path.basename(from)} → ${path.basename(to)}  ${kb(before)}KB → ${kb(after)}KB  (-${saved}%)`,
  );

  return { before, after };
}

console.log("Optimising images...");

let totalBefore = 0;
let totalAfter = 0;

const projects = (await readdir(PROJECTS_DIR)).filter((file) => file.endsWith(".png"));
for (const file of projects.sort()) {
  const from = path.join(PROJECTS_DIR, file);
  const to = from.replace(/\.png$/, ".webp");
  const { before, after } = await convert(from, to, PROJECT_WIDTH);
  totalBefore += before;
  totalAfter += after;
}

for (const single of SINGLES) {
  const { before, after } = await convert(single.from, single.to, single.width, single.keepSource);
  totalBefore += before;
  totalAfter += after;
}

console.log(
  `\nTotal: ${kb(totalBefore)}KB → ${kb(totalAfter)}KB  (-${Math.round(
    (1 - totalAfter / totalBefore) * 100,
  )}%)`,
);
