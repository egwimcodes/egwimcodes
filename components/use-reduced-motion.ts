"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/** The server can't know the preference, so it assumes motion is allowed. */
function getServerSnapshot() {
  return false;
}

/**
 * Local replacement for motion's `useReducedMotion`, so a single hook doesn't
 * pull the animation library into the client bundle.
 */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Non-reactive read, for effects that only need the value once. */
export function prefersReducedMotion() {
  return window.matchMedia(QUERY).matches;
}
