import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { BrandGradients } from "@/components/ec-mark";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL, site } from "@/content/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.person, url: SITE_URL }],
  creator: site.person,
  publisher: site.person,
  keywords: [
    "Wisdom Egwim",
    "egwimcodes",
    "full-stack developer",
    "web development",
    "mobile development",
    "React",
    "Next.js",
    "Flutter",
    "React Native",
    "Python",
    "Django",
    "machine learning",
    "robotics",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    title: site.headline,
    description: site.description,
    locale: "en_US",
    images: [
      {
        url: "/brand/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline.join(" · ")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
    creator: site.twitterHandle,
    title: site.headline,
    description: site.description,
    images: ["/brand/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1A",
  colorScheme: "dark light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.person,
  alternateName: site.name,
  url: SITE_URL,
  image: `${SITE_URL}/Wisdom-Egwim.png`,
  sameAs: [
    "https://twitter.com/egwimcodes",
    "https://www.linkedin.com/in/egwimcodes",
    "https://github.com/egwimcodes",
    "https://www.facebook.com/egwimcodes",
    "https://www.instagram.com/egwimcodes",
  ],
  jobTitle:
    "Software Developer | Web Developer | Mobile Developer | ML & Robotics Enthusiast",
  worksFor: {
    "@type": "Organization",
    name: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${manrope.variable}`}>
      <body>
        <BrandGradients />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          // Serialised from a literal above, so there is no untrusted input here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
