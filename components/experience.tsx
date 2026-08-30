import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface">
      <SectionHeading
        eyebrow="Experience"
        title="Where I’ve"
        accent="built"
        description="A short timeline of roles and product engagements — from company platforms and AI ops to mobile marketplace apps and regional media."
      />

      <ol className="relative mx-auto max-w-3xl space-y-0">
        {/* Vertical rail — matches the cyan accent already used across the site. */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[0.7rem] w-px bg-line sm:left-1/2 sm:-translate-x-px"
        />

        {experience.map((entry, index) => {
          const left = index % 2 === 0;

          return (
            <li key={`${entry.company}-${entry.dates}`} className="relative">
              <Reveal delay={index * 0.08}>
                <div className="grid gap-6 pb-12 sm:grid-cols-2 sm:gap-10">
                  <span
                    aria-hidden
                    className="absolute top-2 left-[0.45rem] size-3 rounded-full border-2 border-cyan bg-bg sm:left-1/2 sm:-translate-x-1/2"
                  />

                  <article
                    className={`ml-8 rounded-2xl border border-line bg-elevated p-6 sm:ml-0 ${
                      left
                        ? "sm:mr-6 sm:text-right"
                        : "sm:col-start-2 sm:ml-6"
                    }`}
                  >
                    <p className="text-xs font-semibold tracking-[0.18em] text-cyan uppercase">
                      {entry.dates}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {entry.company}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {entry.description}
                    </p>
                  </article>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
