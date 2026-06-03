// src/utils/cardColors.ts
// Utility for dynamic card background and text colors.

export const tagColorMap: Record<string, string> = {
  "UX Writing": "#C4BAED",
  "Product Design": "#FFD97D",
  "Frontend": "#A8DCC8",
  "UX": "#F7A3C0",
  "Estrategia": "#FF8C61",
  "Investigación": "#C4BAED",
  "WordPress": "#FFD97D",
  "Diseño": "#A8DCC8",
  "IA Aplicada": "#F7A3C0",
  "Accesibilidad": "#FFD97D",
  "Educación Digital": "#A8DCC8",
  "Blog": "#F7A3C0",
};

const colorPalette = ["#C4BAED", "#FFD97D", "#A8DCC8", "#F7A3C0", "#FF8C61"];

/** Simple deterministic hash from a slug */
function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0; // keep as 32‑bit int
  }
  return Math.abs(hash);
}

/**
 * Returns a background color for a card.
 * - First look for a matching tag in tagColorMap.
 * - If none, deterministically pick from colorPalette based on slug hash.
 * - Ensure we don't repeat the previous color consecutively.
 */
export function getCardColor(tags: string[], slug: string, prevColor?: string): string {
  for (const tag of tags) {
    const mapped = tagColorMap[tag];
    if (mapped) return mapped;
  }
  const idx = hashSlug(slug) % colorPalette.length;
  let color = colorPalette[idx];
  if (prevColor && color.toLowerCase() === prevColor.toLowerCase()) {
    color = colorPalette[(idx + 1) % colorPalette.length];
  }
  return color;
}

/** Returns a suitable text color for the given background. */
export function getTextColor(bg: string): string {
  const light = ["#C4BAED", "#FFD97D", "#A8DCC8"].includes(bg.toUpperCase());
  return light ? "#1A0F2E" : "#F5F0E8";
}
