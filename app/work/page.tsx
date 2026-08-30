import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { ProjectCard } from "@/components/project-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { BTN_GHOST, CONTAINER } from "@/components/section";
import { SITE_URL, projects, site } from "@/content/site";

const workTitle = `Work | ${site.name}`;
const workDescription = `Case studies and selected projects by ${site.person} — web, mobile and data work.`;

export const metadata: Metadata = {
  title: "Work",
  description: workDescription,
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/work`,
    siteName: site.name,
    title: workTitle,
    description: `Case studies and selected projects by ${site.person}.`,
    images: [
      {
        url: "/brand/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — work archive`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
    creator: site.twitterHandle,
    title: workTitle,
    description: `Case studies and selected projects by ${site.person}.`,
    images: ["/brand/og.png"],
  },
};

export default function WorkIndexPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
        <div className={`${CONTAINER} flex h-18 items-center justify-between gap-4`}>
          <Link href="/" aria-label="egwimcodes — home">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/#portfolio" className={`${BTN_GHOST} hidden sm:inline-flex`}>
              <ArrowLeft className="size-4" aria-hidden />
              Home portfolio
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-24 sm:pt-32">
        <div className={CONTAINER}>
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
            <span className="h-px w-8 bg-cyan/60" aria-hidden />
            Archive
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Work
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Selected case studies. Each entry links to a short write-up — role, stack and outcome.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
