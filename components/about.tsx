import Image from "next/image";
import { Download } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BTN_PRIMARY, Section, SectionHeading } from "@/components/section";
import { about, site } from "@/content/site";

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <SectionHeading eyebrow="About" title="About" accent="me" />

      <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-10 -z-10 rounded-full bg-cyan/20 blur-3xl" />
          <Image
            src={about.portrait.src}
            alt={`Portrait of ${site.person}`}
            width={about.portrait.width}
            height={about.portrait.height}
            sizes="(min-width: 1024px) 32vw, 80vw"
            className="h-auto w-full"
          />
        </Reveal>

        <div>
          <Reveal>
            <h3 className="text-2xl font-bold sm:text-3xl">{about.role}</h3>
          </Reveal>

          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.05 * (index + 1)}>
              <p className="mt-4 text-base leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.12}>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line bg-elevated p-4"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-xl font-extrabold text-cyan">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs tracking-wide text-muted uppercase">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.16}>
            <a
              href={site.cv}
              download
              target="_blank"
              rel="noreferrer"
              className={`${BTN_PRIMARY} mt-10`}
            >
              <Download className="size-4" aria-hidden />
              Download CV
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
