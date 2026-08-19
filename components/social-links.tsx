import { SocialIcon } from "@/components/brand-icons";
import { socials } from "@/content/site";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/60 hover:text-cyan hover:shadow-[0_0_24px_-6px_var(--color-cyan)]"
          >
            <SocialIcon name={social.name} className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
