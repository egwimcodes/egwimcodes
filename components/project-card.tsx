import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VisibilityBadge } from "@/components/visibility-badge";
import type { Project } from "@/content/site";

/** Shared project tile for home portfolio and /work archive. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_18px_50px_-24px_var(--color-cyan)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute top-3 right-3 z-10">
          <VisibilityBadge visibility={project.visibility} overlay />
        </div>
      </div>

      <div className="relative flex flex-col gap-2 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <span className="text-xs font-medium tracking-wide text-muted uppercase">
            {project.year}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <Link
          href={`/work/${project.slug}`}
          className="mt-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-cyan"
        >
          {/* Stretches over the whole card so the entire tile is clickable. */}
          <span className="absolute inset-0" aria-hidden />
          View case study
          <ArrowUpRight className="size-4" aria-hidden />
          <span className="sr-only">{` — ${project.title}`}</span>
        </Link>
      </div>
    </article>
  );
}
