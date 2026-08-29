"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/components/use-reduced-motion";

/** Matches the original site's typed.js `typeSpeed: 40`. */
const TYPE_MS = 40;
const DELETE_MS = 25;
const HOLD_MS = 1800;
const NEXT_MS = 400;
/** Brief beat after paint, then type — not a full hold on a finished first line. */
const START_MS = 280;

type TypewriterProps = {
  words: readonly string[];
  className?: string;
};

/**
 * Character-by-character typewriter with a blinking caret.
 *
 * The longest string is rendered invisibly in the same grid cell as the live
 * text, so the line reserves its final width and height up front and nothing
 * below it shifts as the text grows, shrinks or rewraps.
 *
 * Starts empty (caret only) so typing begins as soon as the page paints,
 * instead of sitting on a finished first role for the full hold duration.
 */
export function Typewriter({ words, className = "" }: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const word = words[index];
    const atStart = length === 0;
    const atEnd = length === word.length;

    let delay = TYPE_MS;
    if (!started) delay = START_MS;
    else if (!deleting && atEnd) delay = HOLD_MS;
    else if (deleting && atStart) delay = NEXT_MS;
    else if (deleting) delay = DELETE_MS;

    const timer = setTimeout(() => {
      if (!started) {
        setStarted(true);
        setLength(1);
        return;
      }
      if (!deleting && !atEnd) setLength(length + 1);
      else if (!deleting) setDeleting(true);
      else if (!atStart) setLength(length - 1);
      else {
        setDeleting(false);
        setIndex((current) => (current + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, index, length, reduceMotion, started, words]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  const visible = reduceMotion ? words[0] : words[index].slice(0, length);

  return (
    <p className={className}>
      {/* Screen readers get the whole list once rather than a stream of characters. */}
      <span className="sr-only">{words.join(", ")}</span>

      {/* The gradient must sit on this reserved-width wrapper, not on the live
          text: a text-clipped gradient is sized to its own box, so on an element
          that grows a character at a time every glyph would shift hue per keystroke. */}
      <span aria-hidden className="brand-text-gradient grid">
        <span className="col-start-1 row-start-1 invisible">{longest}</span>
        <span className="col-start-1 row-start-1">
          {visible}
          {reduceMotion ? null : (
            <span className="ec-caret text-cyan font-normal">|</span>
          )}
        </span>
      </span>
    </p>
  );
}
