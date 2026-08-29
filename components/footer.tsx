import { ArrowUp } from "lucide-react";
import { LogoLockup } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { CONTAINER } from "@/components/section";
import { navLinks, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className={`${CONTAINER} py-16`}>
        <div className="grid gap-12 md:grid-cols-[auto_1fr_auto] md:items-start">
          <LogoLockup className="max-w-xs" />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-muted transition-colors hover:text-cyan"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks className="md:justify-end" />
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <p className="text-center text-sm text-muted sm:text-left">
            © {year} {site.person}. All rights reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/60 hover:text-cyan hover:shadow-[0_0_24px_-6px_var(--color-cyan)]"
          >
            <ArrowUp className="size-5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
