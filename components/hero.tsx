"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { Typewriter } from "@/components/typewriter";
import { BTN_GHOST, BTN_PRIMARY, CONTAINER } from "@/components/section";
import { hero, site } from "@/content/site";

/**
 * Type scale recovered from the original stylesheet, which set `html` to 62.5%
 * (1rem = 10px), 55% under 1200px and 50% under 450px:
 *
 *   .home-content h3 { font-size: 3.2rem; font-weight: 700 }  // greeting + role
 *   .home-content h3:nth-of-type(2) { margin-bottom: 2rem }   // role
 *   .home-content h1 { font-size: 5.6rem; font-weight: 700; line-height: 1.3 }
 *   @media (max-width: 768px) { h3 { 2.6rem } h1 { 5rem } }
 */
const HEADING_3 = "text-[1.3rem] font-bold sm:text-[1.43rem] md:text-[1.76rem] xl:text-[2rem]";
const HEADING_1 =
  "text-[2.5rem] font-bold leading-[1.3] sm:text-[2.75rem] md:text-[3.08rem] xl:text-[3.5rem]";

function AnimatedBackdrop() {
  const reduceMotion = useReducedMotion();

  const blobs = [
    {
      className: "-top-32 left-[8%] size-[34rem] bg-cyan/25",
      animate: { x: [0, 70, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.12, 0.94, 1] },
      duration: 24,
    },
    {
      className: "top-24 right-[4%] size-[30rem] bg-tech-blue/25",
      animate: { x: [0, -60, 35, 0], y: [0, 45, -25, 0], scale: [1, 0.92, 1.1, 1] },
      duration: 29,
    },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[130px] ${blob.className}`}
          animate={reduceMotion ? undefined : blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <AnimatedBackdrop />

      <div className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div>
          {/* A lead-in to the name rather than a heading in its own right, so it
              stays out of the document outline while keeping the original's size. */}
          <p className={HEADING_3}>{hero.greeting}</p>
          <h1 className={HEADING_1}>{hero.name}</h1>
          <Typewriter
            words={hero.roles}
            className={`${HEADING_3} mb-4 md:mb-5`}
          />

          <p className="max-w-xl text-base leading-relaxed text-muted">{hero.blurb}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className={BTN_PRIMARY}>
              See my work
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={site.cv}
              download
              target="_blank"
              rel="noreferrer"
              className={BTN_GHOST}
            >
              <Download className="size-4" aria-hidden />
              Download CV
            </a>
          </div>

          <SocialLinks className="mt-9" />
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-8 -z-10 rounded-full bg-cyan/20 blur-3xl"
          />
          <Image
            src={hero.portrait.src}
            alt={`${site.person}, full-stack web and mobile developer`}
            width={hero.portrait.width}
            height={hero.portrait.height}
            priority
            sizes="(min-width: 1024px) 40vw, 80vw"
            className="mx-auto h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
