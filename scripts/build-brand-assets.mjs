/**
 * Generates every derived brand asset from the designer's vector masters.
 *
 * Source of truth: public/brand/egwimcodes-EC-primary.svg
 *
 * Outputs
 *   components/ec-paths.ts   path data for the inline <EcMark> component
 *   app/icon.svg             favicon (modern browsers)
 *   app/icon.png             favicon fallback, 512
 *   app/apple-icon.png       iOS touch icon, 180 (iOS will not take SVG)
 *   public/brand/og.png      1200x630 social card
 *   public/brand/manifest.json  report of what was generated
 *
 * The wordmark on the OG card is converted from the vendored Sora TTFs into
 * outlines with opentype.js: librsvg (which sharp renders SVG through) ignores
 * embedded @font-face and silently falls back to a monospace system font, so
 * text has to reach it as paths.
 *
 * Run with: npm run brand:assets
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BRAND = path.join(ROOT, "public", "brand");
const APP = path.join(ROOT, "app");
const FONTS = path.join(ROOT, "scripts", "fonts");

const MASTER = path.join(BRAND, "egwimcodes-EC-primary.svg");

const GRAPHITE = "#0a0f1a";
const CYAN = "#00d1ff";
const SILVER = "#e5e7eb";

/** Gradients lifted from the master so the generated assets stay in sync. */
const GRADIENTS = `
  <linearGradient id="cyanBlue" x1="0" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#19DDF4"/>
    <stop offset="0.55" stop-color="#09BDEB"/>
    <stop offset="1" stop-color="#1672F2"/>
  </linearGradient>
  <linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#FFFFFF"/>
    <stop offset="0.45" stop-color="#E6E8EC"/>
    <stop offset="1" stop-color="#AEB5C0"/>
  </linearGradient>`;

/** `EC-left` and `EC-inner` take the cyan gradient; the two right paths are the second C. */
const CYAN_PATHS = new Set(["EC-left", "EC-inner"]);

async function readMasterPaths() {
  const svg = await readFile(MASTER, "utf8");
  const paths = [...svg.matchAll(/<path\s+id="([^"]+)"\s+d="([^"]+)"/g)].map(
    ([, id, d]) => ({ id, d }),
  );

  if (paths.length !== 4) {
    throw new Error(`expected 4 paths in the master, found ${paths.length}`);
  }
  return paths;
}

/**
 * The master is drawn on a 1024 square canvas but the artwork only occupies a
 * ~737x464 region of it. Everything downstream uses the tight box so the mark
 * fills the space it is given instead of carrying invisible padding.
 */
function boundingBox(paths) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const { d } of paths) {
    for (const [, x, y] of d.matchAll(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g)) {
      const px = Number(x);
      const py = Number(y);
      if (px < minX) minX = px;
      if (px > maxX) maxX = px;
      if (py < minY) minY = py;
      if (py > maxY) maxY = py;
    }
  }

  const round = (n) => Math.round(n * 100) / 100;
  return {
    x: round(minX),
    y: round(minY),
    width: round(maxX - minX),
    height: round(maxY - minY),
  };
}

const fills = (paths, secondC) =>
  paths
    .map(
      ({ id, d }) =>
        `<path d="${d}" fill="${CYAN_PATHS.has(id) ? "url(#cyanBlue)" : secondC}"/>`,
    )
    .join("\n    ");

/** Standalone monogram, cropped to the artwork. */
function monogramSvg(paths, box, { width, secondC }) {
  const height = Math.round((width * box.height) / box.width);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${box.x} ${box.y} ${box.width} ${box.height}" fill="none">
  <defs>${GRADIENTS}</defs>
  <g>
    ${fills(paths, secondC)}
  </g>
</svg>`;
}

/**
 * The icon keeps a graphite rounded tile behind the monogram: the bare mark has
 * a light second C that would vanish against a light browser tab.
 */
function iconSvg(paths, box, size) {
  // Fit the artwork to 68% of the tile width and centre it optically.
  const scale = (1024 * 0.68) / box.width;
  const tx = (1024 - box.width * scale) / 2 - box.x * scale;
  const ty = (1024 - box.height * scale) / 2 - box.y * scale;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1024 1024" fill="none">
  <defs>${GRADIENTS}</defs>
  <rect width="1024" height="1024" rx="224" fill="${GRAPHITE}"/>
  <g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(5)})">
    ${fills(paths, "url(#silver)")}
  </g>
</svg>`;
}

/** Lays out a string as outlines, returning path data plus its measured width. */
function textOutline(font, text, size, { tracking = 0 } = {}) {
  const glyphs = [];
  let x = 0;

  for (const char of text) {
    const advance = font.getAdvanceWidth(char, size);
    if (char.trim() !== "") {
      glyphs.push({ char, d: font.getPath(char, x, 0, size).toPathData(2) });
    }
    x += advance + tracking;
  }

  return { glyphs, width: x - tracking };
}

async function buildOg(paths, box) {
  const WIDTH = 1200;
  const HEIGHT = 630;

  const soraBold = opentype.parse(toArrayBuffer(await readFile(path.join(FONTS, "Sora-ExtraBold.ttf"))));
  const soraSemi = opentype.parse(toArrayBuffer(await readFile(path.join(FONTS, "Sora-SemiBold.ttf"))));

  // Wordmark: "egwim" in silver, "codes" in Electric Cyan.
  const WORD_SIZE = 92;
  const egwimWidth = soraBold.getAdvanceWidth("egwim", WORD_SIZE);
  const codesWidth = soraBold.getAdvanceWidth("codes", WORD_SIZE);
  const wordWidth = egwimWidth + codesWidth;
  const wordX = (WIDTH - wordWidth) / 2;
  const wordBaseline = 460;

  const egwimPath = soraBold.getPath("egwim", wordX, wordBaseline, WORD_SIZE).toPathData(2);
  const codesPath = soraBold
    .getPath("codes", wordX + egwimWidth, wordBaseline, WORD_SIZE)
    .toPathData(2);

  // Tagline: wide-tracked caps with cyan separators.
  const TAG_SIZE = 22;
  const TAG_TRACKING = 7;
  const tagline = "SOFTWARE · APPS · AI · PRODUCTS";
  const { glyphs, width: tagWidth } = textOutline(soraSemi, tagline, TAG_SIZE, {
    tracking: TAG_TRACKING,
  });
  const tagX = (WIDTH - tagWidth) / 2;
  const tagBaseline = 526;

  const taglinePaths = glyphs
    .map(
      ({ char, d }) =>
        `<path d="${d}" fill="${char === "·" ? CYAN : SILVER}" fill-opacity="${
          char === "·" ? 1 : 0.72
        }" transform="translate(${tagX} ${tagBaseline})"/>`,
    )
    .join("\n    ");

  const MARK_W = 330;
  const MARK_H = Math.round((MARK_W * box.height) / box.width);
  const markSvg = monogramSvg(paths, box, { width: MARK_W, secondC: "url(#silver)" });
  const markPng = await sharp(Buffer.from(markSvg)).resize(MARK_W, MARK_H).png().toBuffer();

  const backdrop = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="40%" r="58%">
      <stop offset="0" stop-color="#00d1ff" stop-opacity="0.30"/>
      <stop offset="0.55" stop-color="#0b31ff" stop-opacity="0.13"/>
      <stop offset="1" stop-color="#0b31ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${GRAPHITE}"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
</svg>`);

  const lettering = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
    <path d="${egwimPath}" fill="#ffffff"/>
    <path d="${codesPath}" fill="${CYAN}"/>
    ${taglinePaths}
</svg>`);

  await sharp(backdrop)
    .composite([
      { input: markPng, left: Math.round((WIDTH - MARK_W) / 2), top: 122 },
      { input: lettering },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(BRAND, "og.png"));

  return { width: WIDTH, height: HEIGHT };
}

const toArrayBuffer = (buf) =>
  buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);

async function main() {
  await mkdir(BRAND, { recursive: true });
  await mkdir(APP, { recursive: true });

  const paths = await readMasterPaths();
  const box = boundingBox(paths);

  // Single source of truth: the component imports these rather than duplicating
  // the path data by hand.
  const pathsModule = `// GENERATED by scripts/build-brand-assets.mjs — do not edit.
// Source: public/brand/egwimcodes-EC-primary.svg

export type EcPathId = ${paths.map(({ id }) => JSON.stringify(id)).join(" | ")};

/** Cropped to the artwork, so the mark fills whatever box it is given. */
export const EC_VIEWBOX = "${box.x} ${box.y} ${box.width} ${box.height}";

export const EC_PATHS: { id: EcPathId; d: string; tone: "cyan" | "second" }[] = [
${paths
  .map(
    ({ id, d }) =>
      `  { id: ${JSON.stringify(id)}, d: ${JSON.stringify(d)}, tone: ${JSON.stringify(
        CYAN_PATHS.has(id) ? "cyan" : "second",
      )} },`,
  )
  .join("\n")}
];
`;
  await writeFile(path.join(ROOT, "components", "ec-paths.ts"), pathsModule);

  // Favicons: SVG for browsers that take it, PNG for the rest, PNG for iOS.
  await writeFile(path.join(APP, "icon.svg"), `${iconSvg(paths, box, 512)}\n`);

  const iconSource = Buffer.from(iconSvg(paths, box, 1024));
  await sharp(iconSource).resize(512, 512).png({ compressionLevel: 9 }).toFile(path.join(APP, "icon.png"));
  await sharp(iconSource).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(APP, "apple-icon.png"));

  const og = await buildOg(paths, box);

  const manifest = {
    generatedFrom: "public/brand/egwimcodes-EC-primary.svg",
    artworkBox: box,
    outputs: {
      "app/icon.svg": { width: 512, height: 512, format: "svg" },
      "app/icon.png": { width: 512, height: 512, format: "png" },
      "app/apple-icon.png": { width: 180, height: 180, format: "png" },
      "public/brand/og.png": { ...og, format: "png" },
      "components/ec-paths.ts": { paths: paths.length },
    },
  };

  await writeFile(
    path.join(BRAND, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  for (const [name, meta] of Object.entries(manifest.outputs)) {
    console.log(`${name}  ${meta.width ? `${meta.width}x${meta.height}` : `${meta.paths} paths`}`);
  }
}

await main();
