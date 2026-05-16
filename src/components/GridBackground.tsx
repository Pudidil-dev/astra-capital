"use client";

/**
 * GridBackground
 * ------------------------------------------------------------------
 * Flat 2D editorial grid that sits behind all sections on the warm
 * cream canvas. Two grid layers (major + minor lines) tinted in
 * brown ink, with a radial mask fading the grid toward the edges
 * so it never competes with section cards.
 *
 * - Sits on z-0 (fixed). Main content uses relative z-10 in layout.
 * - pointer-events-none so it never steals interaction.
 */
export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Soft vignette: subtly darkens the corners of the canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_0%,rgba(74,48,40,0.06)_100%)]" />

      {/* Flat 2D grid */}
      <div className="grid-floor absolute inset-0" />

      {/* Top edge fade — keeps the navbar area pristine */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-canvas via-canvas/70 to-transparent" />
    </div>
  );
}
