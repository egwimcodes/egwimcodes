import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { SkillIcon } from "@/components/skill-icons";
import { skillGroups } from "@/content/site";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="What I"
        accent="know"
        description="The tools I reach for across frontend, backend, mobile and applied AI — shared with the services I offer, not duplicated."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.06} className="h-full">
            <article className="h-full rounded-2xl border border-line bg-elevated p-7 transition-all duration-300 hover:border-cyan/40 hover:shadow-[0_18px_50px_-28px_var(--color-cyan)]">
              <h3 className="font-display text-lg font-bold tracking-tight">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    <SkillIcon name={item} className="size-3.5 shrink-0 opacity-80" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
