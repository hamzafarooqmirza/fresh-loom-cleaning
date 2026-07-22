import { writeFileSync } from "fs";

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function svg({ w, h, from, to, label, sub, dark = false }) {
  const textColor = dark ? "#0f172a" : "#ffffff";
  const subColor = dark ? "#334155" : "rgba(255,255,255,0.85)";
  const id = Math.random().toString(36).slice(2, 8);
  label = escapeXml(label);
  sub = sub ? escapeXml(sub) : sub;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <pattern id="p${id}" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="28" height="28" fill="transparent"/>
      <line x1="0" y1="0" x2="0" y2="28" stroke="rgba(255,255,255,0.08)" stroke-width="14"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${id})"/>
  <rect width="${w}" height="${h}" fill="url(#p${id})"/>
  <g fill="${textColor}" font-family="Arial, Helvetica, sans-serif" text-anchor="middle">
    <text x="${w / 2}" y="${h / 2 - (sub ? 12 : 0)}" font-size="${Math.max(16, Math.min(w, h) * 0.09)}" font-weight="700">${label}</text>
    ${sub ? `<text x="${w / 2}" y="${h / 2 + 26}" font-size="${Math.max(12, Math.min(w, h) * 0.045)}" fill="${subColor}">${sub}</text>` : ""}
  </g>
</svg>`;
}

const NAVY_FROM = "#13287e";
const NAVY_TO = "#1e40af";
const TEAL_FROM = "#0f766e";
const TEAL_TO = "#14b8a6";

const files = [
  { path: "public/images/logo.svg", opts: { w: 320, h: 86, from: NAVY_FROM, to: NAVY_TO, label: "FRESH LOOM", sub: "CARPET & UPHOLSTERY CLEANING" } },
  { path: "public/images/logo-mark.svg", opts: { w: 80, h: 80, from: NAVY_FROM, to: NAVY_TO, label: "FL" } },
  { path: "public/images/hero-cleaner.svg", opts: { w: 414, h: 602, from: TEAL_FROM, to: TEAL_TO, label: "Cleaning", sub: "Expert" } },
  { path: "public/images/hero-tools.svg", opts: { w: 284, h: 300, from: NAVY_FROM, to: "#3b82f6", label: "Tools", sub: "Cleaning Kit" } },
  { path: "public/images/services/carpet-cleaning.svg", opts: { w: 800, h: 534, from: NAVY_FROM, to: "#2563eb", label: "Carpet Cleaning" } },
  { path: "public/images/services/upholstery-cleaning.svg", opts: { w: 800, h: 534, from: TEAL_FROM, to: "#0ea5a4", label: "Upholstery Cleaning" } },
  { path: "public/images/services/rug-cleaning.svg", opts: { w: 800, h: 534, from: "#7c3aed", to: "#a855f7", label: "Rug Cleaning" } },
  { path: "public/images/services/sofa-cleaning.svg", opts: { w: 800, h: 534, from: NAVY_FROM, to: "#1e40af", label: "Sofa Cleaning" } },
  { path: "public/images/services/stain-removal.svg", opts: { w: 800, h: 548, from: "#b45309", to: "#f59e0b", label: "Stain Removal" } },
  { path: "public/images/services/odour-removal.svg", opts: { w: 800, h: 532, from: "#0f766e", to: "#22c55e", label: "Odour Removal" } },
  { path: "public/images/gallery/sofa-before.svg", opts: { w: 704, h: 384, from: "#64748b", to: "#94a3b8", label: "Before", dark: false } },
  { path: "public/images/gallery/sofa-after.svg", opts: { w: 704, h: 384, from: TEAL_FROM, to: "#14b8a6", label: "After" } },
  { path: "public/images/gallery/carpet-before.svg", opts: { w: 704, h: 384, from: "#64748b", to: "#94a3b8", label: "Before" } },
  { path: "public/images/gallery/carpet-after.svg", opts: { w: 704, h: 384, from: NAVY_FROM, to: "#2563eb", label: "After" } },
];

for (const f of files) {
  writeFileSync(f.path, svg(f.opts));
  console.log("wrote", f.path);
}
