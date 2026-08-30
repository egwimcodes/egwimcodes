import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SocialIcon } from "@/components/brand-icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { VisibilityBadge } from "@/components/visibility-badge";
import { BTN_GHOST, BTN_PRIMARY, CONTAINER } from "@/components/section";
import { SITE_URL, getProject, projects, site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.title} | ${site.name}`;
  const description = project.description;
  const image = project.image;

  return {
    title: project.title,
    description,
    alternates: { canonical: `${SITE_URL}/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/work/${project.slug}`,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: image,
          alt: `${project.title} screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitterHandle,
      creator: site.twitterHandle,
      title,
      description,
      images: [image],
    },
  };
}

export default async function WorkProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${SITE_URL}/work/${project.slug}`,
    image: `${SITE_URL}${project.image}`,
    // Only a year is known — use Jan 1 so dateCreated stays valid ISO-8601.
    dateCreated: `${project.year}-01-01`,
    author: {
      "@type": "Person",
      name: site.person,
      url: SITE_URL,
    },
    ...(project.liveUrl ? { sameAs: [project.liveUrl] } : {}),
    keywords: project.techStack.join(", "),
  };

  const hasGallery = project.gallery.length > 0;
  const repoUrl = project.repo.url;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
        <div className={`${CONTAINER} flex h-18 items-center justify-between gap-4`}>
          <Link href="/work" aria-label="egwimcodes — work archive">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/work" className={`${BTN_GHOST} hidden sm:inline-flex`}>
              <ArrowLeft className="size-4" aria-hidden />
              All projects
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-24 sm:pt-32">
        <div className={CONTAINER}>
          <Link
            href="/work"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-cyan sm:hidden"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All projects
          </Link>

          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
            <span className="h-px w-8 bg-cyan/60" aria-hidden />
            Case study · {project.year}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <VisibilityBadge visibility={project.visibility} />
            <VisibilityBadge
              visibility={project.repo.visibility}
              label={
                project.repo.visibility === "public" ? "Public repo" : "Private repo"
              }
            />
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.description}
          </p>

          <dl className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                Role
              </dt>
              <dd className="mt-1 font-medium">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                Year
              </dt>
              <dd className="mt-1 font-medium">{project.year}</dd>
            </div>
            {project.results ? (
              <div className="min-w-[12rem] flex-1">
                <dt className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                  Results
                </dt>
                <dd className="mt-1 font-medium">{project.results}</dd>
              </div>
            ) : null}
          </dl>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-elevated">
            <Image
              src={project.image}
              alt={`${project.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 72rem, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted whitespace-pre-line">
                {project.body}
              </p>

              {hasGallery ? (
                <section className="mt-12" aria-labelledby="gallery-heading">
                  <h2
                    id="gallery-heading"
                    className="font-display text-2xl font-bold"
                  >
                    Gallery
                  </h2>
                  <ul
                    className={`mt-6 grid gap-5 ${
                      project.gallery.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {project.gallery.map((item) => (
                      <li key={item.src + (item.caption ?? "")}>
                        <figure>
                          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-elevated">
                            <Image
                              src={item.src}
                              alt={item.alt ?? `${project.title} gallery image`}
                              fill
                              sizes={
                                project.gallery.length > 1
                                  ? "(min-width: 640px) 50vw, 100vw"
                                  : "(min-width: 1024px) 42rem, 100vw"
                              }
                              className="object-cover"
                            />
                          </div>
                          {item.caption ? (
                            <figcaption className="mt-3 text-sm leading-relaxed text-muted">
                              {item.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-line bg-elevated p-6">
                <h3 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Tech stack
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-elevated p-6">
                <h3 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  Visibility
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted">Project</dt>
                    <dd>
                      <VisibilityBadge visibility={project.visibility} />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted">Repository</dt>
                    <dd>
                      <VisibilityBadge visibility={project.repo.visibility} />
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={BTN_PRIMARY}
                  >
                    Visit live project
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                ) : null}
                {repoUrl ? (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={BTN_GHOST}
                  >
                    <SocialIcon name="github" className="size-4" />
                    View repository
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                ) : null}
                <Link href="/#contact" className={BTN_GHOST}>
                  Start a project
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
    </>
  );
}
