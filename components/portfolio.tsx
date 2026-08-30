import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { projects } from "@/content/site";

export function Portfolio() {
  return (
    <Section id="portfolio" className="bg-surface">
      <SectionHeading
        eyebrow="Portfolio"
        title="Latest"
        accent="projects"
        description="A selection of web, mobile and data projects taken from concept to production."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 0.08} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-fg"
        >
          Browse the full work archive
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </p>
    </Section>
  );
}
