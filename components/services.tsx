import { ArrowRight, Cpu, Globe, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { services, type ServiceIcon } from "@/content/site";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  cpu: Cpu,
};

function TechGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.18em] text-muted uppercase">
        {label}
      </p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="What I"
        accent="build"
        description="From marketing sites to cross-platform apps and applied machine learning — shipped end to end."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = ICONS[service.icon];

          return (
            <Reveal key={service.title} delay={index * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-elevated p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_18px_50px_-24px_var(--color-cyan)]">
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan ring-1 ring-cyan/20 transition-colors duration-300 group-hover:bg-cyan/15">
                  <Icon className="size-6" aria-hidden />
                </span>

                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <div className="mt-6 space-y-4">
                  <TechGroup label="Frontend" items={service.tech.frontend} />
                  <TechGroup label="Backend" items={service.tech.backend} />
                </div>

                <a
                  href="#portfolio"
                  className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-cyan transition-transform duration-300 hover:gap-3"
                >
                  Show projects
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
