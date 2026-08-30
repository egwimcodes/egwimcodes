export const SITE_URL = "https://egwimcodes.dev";

export const site = {
  name: "egwimcodes",
  person: "Wisdom Egwim",
  tagline: ["SOFTWARE", "APPS", "AI", "PRODUCTS"],
  title: "Wisdom Egwim | egwimcodes",
  headline:
    "Full-Stack Web & Mobile Developer | Frontend & Backend | Scalable, Secure & High-Performance Apps",
  description:
    "In Wisdom Egwim's portfolio, you'll find a strong emphasis on creating high-performance web and mobile applications. Discover how my technical proficiency and problem-solving approach drive the success of each project. Explore the portfolio of Wisdom Egwim, featuring cutting-edge web & app development projects and innovative solutions.",
  cv: "/Wisdom-Egwim-Software-Developer-CV.pdf",
  twitterHandle: "@egwimcodes",
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

export type SocialName =
  | "github"
  | "facebook"
  | "twitter"
  | "instagram"
  | "linkedin";

export const socials: { name: SocialName; label: string; href: string }[] = [
  { name: "github", label: "GitHub", href: "https://github.com/egwimcodes" },
  { name: "facebook", label: "Facebook", href: "https://www.facebook.com/egwimcodes" },
  { name: "twitter", label: "X (Twitter)", href: "https://twitter.com/egwimcodes" },
  { name: "instagram", label: "Instagram", href: "https://www.instagram.com/egwimcodes" },
  { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/egwimcodes" },
];

export const hero = {
  greeting: "Hello, I’m",
  name: "Wisdom Egwim",
  roles: [
    "Full-Stack Web & Mobile Developer",
    "Mobile Developer",
    "Flutter Developer",
    "React Native Developer",
    "Node Developer",
    "Python Developer",
  ],
  blurb:
    "With a proven track record of excellence in both web and mobile development, I consistently deliver high-quality solutions that meet client needs and exceed expectations.",
  portrait: { src: "/Wisdom-Egwim.webp", width: 600, height: 731 },
} as const;

export const about = {
  role: "Full Stack Developer",
  portrait: { src: "/Wisdom-Egwim-Portfolio.webp", width: 500, height: 500 },
  paragraphs: [
    "Wisdom Egwim is a highly skilled, ambitious Software Developer with a robust background in Web 3, Flutter, React Native, ReactJS, Next.js, Tailwind CSS, Framer Motion, Radix UI, shadcn/ui, Python, Django, JavaScript, FastAPI, Dart and Bootstrap.",
    "My expertise goes beyond traditional development, offering a deep understanding of machine learning and robotics, allowing me to craft innovative and efficient solutions for a wide range of projects.",
    "With over 5 years of experience in software development, I have consistently demonstrated my expertise through the successful conception and execution of innovative projects. My commitment to excellence is reflected in the quality of my work, where I blend efficient coding practices with a forward-thinking approach. I continuously explore the intersection of software development and emerging technologies, ensuring that every project I undertake is both cutting-edge and impactful.",
    "My commitment to following the latest tech trends showcases my readiness for long-lasting success as a developer.",
  ],
  stats: [
    { value: "5+", label: "Years building" },
    { value: "30+", label: "Shipped projects" },
    { value: "3", label: "Core disciplines" },
  ],
} as const;

/** Canonical skill catalog — Skills section and Services cards both read from here. */
export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "ReactJS",
      "Next.js",
      "Web 3",
      "Vue.js",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "shadcn/ui",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Python", "Django", "Node.js", "Express.js", "FastAPI", "Firebase"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["Flutter", "React Native", "Dart"],
  },
  {
    id: "aiMl",
    label: "AI & ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "ROS (Robot Operating System)",
      "OpenCV",
      "Arduino",
    ],
  },
] as const;

export type SkillGroupId = (typeof skillGroups)[number]["id"];
export type SkillName = (typeof skillGroups)[number]["items"][number];

const skillIndex = new Map<string, SkillGroupId>(
  skillGroups.flatMap((group) =>
    group.items.map((item) => [item, group.id] as [string, SkillGroupId]),
  ),
);

/** Resolves named skills against the catalog so Services never drifts from Skills. */
export function skills(...names: SkillName[]): string[] {
  return names.map((name) => {
    if (!skillIndex.has(name)) {
      throw new Error(`Unknown skill "${name}" — add it to skillGroups first.`);
    }
    return name;
  });
}

export type ServiceIcon = "globe" | "smartphone" | "cpu";

export type Service = {
  icon: ServiceIcon;
  title: string;
  description: string;
  tech: { frontend: string[]; backend: string[] };
};

export const services: Service[] = [
  {
    icon: "globe",
    title: "Web Development",
    description:
      "Experience exceptional web development services that go beyond the ordinary. I specialize in creating responsive, innovative designs that enhance your online presence and help you stand out in today's digital landscape.",
    tech: {
      frontend: skills(
        "ReactJS",
        "Next.js",
        "Web 3",
        "Vue.js",
        "Tailwind CSS",
        "Framer Motion",
        "Radix UI",
        "shadcn/ui",
      ),
      backend: skills("Python", "Django", "Node.js", "Express.js"),
    },
  },
  {
    icon: "smartphone",
    title: "App Development",
    description:
      "Embark on a journey of innovation with my app development services. I specialize in creating sleek, user-friendly interfaces combined with advanced functionalities, bringing your app ideas to life. My commitment to excellence ensures the development of intuitive, high-performing applications that elevate your digital presence.",
    tech: {
      frontend: skills("Flutter", "React Native", "Dart"),
      backend: skills("Python", "Node.js", "Firebase", "Express.js"),
    },
  },
  {
    icon: "cpu",
    title: "ML & Robotics Enthusiast",
    description:
      "I explore machine learning and robotics with the same energy I bring to shipping products — integrating models, sensors and software into practical prototypes that move ideas off the whiteboard.",
    tech: {
      frontend: skills("Flutter", "React Native"),
      backend: skills(
        "Python",
        "TensorFlow",
        "PyTorch",
        "ROS (Robot Operating System)",
        "OpenCV",
        "Arduino",
      ),
    },
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  dates: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Developer",
    company: "IntellaNex Technologies",
    dates: "2025 — Present",
    description:
      "Full-stack product work for IntellaNex — software, AI, IoT and Home OS. Shipped the company platform at intellanex.com and ElectionOS, the campaign command center for real-time polling-unit capture, verification and field ops.",
  },
  {
    role: "Frontend Developer",
    company: "Anthena",
    dates: "2025 — Present",
    description:
      "Frontend for Anthena’s AI business-ops and workforce platform (Lagos) — Next.js, Tailwind, Framer Motion, Radix and shadcn. Shipped marketing and in-app UI for planning, talent matching and delivery workflows at useanthena.com.",
  },
  {
    role: "Mobile Developer",
    company: "OJP TECH LTD",
    dates: "2025",
    description:
      "React Native product UI for BuyOne and Buyone Logistics — Nigerian marketplace, VTU utilities, wallet and South-East delivery, plus dispatcher jobs, live map tracking and payouts. Both apps live on Google Play.",
  },
  {
    role: "Full-stack Developer",
    company: "CoreTruth",
    dates: "2024",
    description:
      "PHP/Laravel publishing stack for CoreTruth — regional and national news focused on Anambra and the South-East. Structured editorial workflows for politics, society and development coverage at coretruth.net.",
  },
  {
    role: "Full Stack Developer",
    company: "Nijasun",
    dates: "2021",
    description:
      "Full-stack product work at Nijasun — shipped web surfaces including the WordPress publishing site at nijasun.com.",
  },
];

export type Visibility = "public" | "private";

export type ProjectGalleryImage = {
  src: string;
  alt?: string;
  caption?: string;
};

export type ProjectRepo = {
  visibility: Visibility;
  /** Only set when a real, reachable repository URL exists. */
  url?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  body: string;
  image: string;
  gallery: ProjectGalleryImage[];
  techStack: string[];
  role: string;
  year: string;
  /** Whether the product / engagement itself is public-facing. */
  visibility: Visibility;
  repo: ProjectRepo;
  /** Optional outcome / impact line. */
  results?: string;
  /** Live external project URL, when one still exists. */
  liveUrl?: string;
  /**
   * When true, the project is sorted ahead of non-featured work on the home
   * portfolio and /work archive. Multiple featured entries are allowed.
   */
  featured?: boolean;
};

/** Home + archive order: featured projects first, then the rest (stable). */
export function projectsByFeatured(list: Project[] = projects): Project[] {
  return [...list].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
}

export const projects: Project[] = [
  {
    slug: "electionos",
    title: "ElectionOS",
    description:
      "Mission-critical campaign command platform by IntellaNex — real-time polling-unit capture, verification and ops for NDC.",
    body: "ElectionOS is IntellaNex’s campaign command platform for the Nigeria Democratic Congress — built for authorized campaign teams to capture, organize and verify polling-unit data from the field across all 176,846 units nationwide. It is an internal parallel monitoring layer; it does not replace INEC or official electoral processes. The product spans real-time result capture (Form EC8A photo ingest with OCR confidence and human review), AI-verified hierarchical aggregation from polling unit through ward, LGA and state, live spatial mapping with incident triage, and campaign and volunteer operations with role-based access and offline-first field capture. As full stack developer for IntellaNex, I shipped the command-center and marketing experience in Next.js: Tailwind CSS for a dark, high-signal ops UI, Framer Motion for purposeful status and motion, and polished surfaces from the public launch through the live Command Center — verified sheets, agent coverage, incident queues and national rollups in one glass cockpit.",
    image: "/projects/portfolio17.webp",
    gallery: [
      {
        src: "/projects/portfolio17.webp",
        alt: "ElectionOS landing hero securing the people's mandate",
        caption: "Public product surface — 176,846 polling units, AES-256 and INEC-aligned forms.",
      },
      {
        src: "/projects/portfolio17a.webp",
        alt: "ElectionOS Command Center dashboard with live map and election countdown",
        caption: "Live federal election watch — verified votes, agents, incidents and tactical map.",
      },
      {
        src: "/projects/portfolio17b.webp",
        alt: "ElectionOS platform capabilities including OCR capture and incident response",
        caption: "Result capture, aggregation, spatial map, incidents, roles and offline-first PWA.",
      },
      {
        src: "/projects/portfolio17c.webp",
        alt: "ElectionOS AI-assisted command view with verified sheets and live incidents",
        caption: "One glass cockpit — verified sheets, turnout and incident triage under 800ms.",
      },
      {
        src: "/projects/portfolio17d.webp",
        alt: "ElectionOS secure uplink loading screen",
        caption: "Command systems online — secure, multi-tenant live ops.",
      },
    ],
    techStack: [
      "Next.js",
      "ReactJS",
      "Tailwind CSS",
      "Framer Motion",
    ],
    role: "Full Stack Developer",
    year: "2026",
    visibility: "public",
    repo: { visibility: "private" },
    results:
      "Live campaign command platform at electionos.intellanex.com — field capture across 176,846 polling units.",
    liveUrl: "https://electionos.intellanex.com",
    featured: true,
  },
  {
    slug: "buyone",
    title: "BuyOne",
    description:
      "Nigerian all-in-one app — marketplace shopping, airtime and data recharge, bills, wallet and delivery.",
    body: "BuyOne is an all-in-one mobile platform for Nigeria under the line Everything You Need, In ONE PLACE — buy, sell, recharge and get it delivered from a single app. The product combines a multi-vendor marketplace (electronics, fashion, groceries and gadgets with ratings, discounts, favourites and cart), VTU utilities (airtime, data plans across HOT / Daily / Weekly / Monthly tiers, and bill payments including Starlink), a user wallet with Add Money and transaction history, South East dispatch delivery with order confirmation and tracking, and in-app buyer–vendor chat. As mobile developer, I shipped the product UI: featured product grids, recharge and purchase flows, wallet dashboard and delivery confirmation for a clean, mobile-first experience.",
    image: "/projects/portfolio15.webp",
    gallery: [
      {
        src: "/projects/portfolio15.webp",
        alt: "BuyOne all-in-one app feature overview",
        caption: "Buy, sell, recharge and delivery — everything in one place.",
      },
      {
        src: "/projects/portfolio15a.webp",
        alt: "BuyOne marketplace featured products",
        caption: "Shop electronics, fashion and gadgets from trusted sellers.",
      },
      {
        src: "/projects/portfolio15b.webp",
        alt: "BuyOne buy and sell product grid",
        caption: "Featured products with ratings, discounts and cart actions.",
      },
      {
        src: "/projects/portfolio15c.webp",
        alt: "BuyOne data plans and bill recharge",
        caption: "Airtime, data bundles and bills without leaving home.",
      },
      {
        src: "/projects/portfolio15d.webp",
        alt: "BuyOne wallet, marketplace and utilities",
        caption: "Wallet balance, product search and recharge utilities together.",
      },
      {
        src: "/projects/portfolio15e.webp",
        alt: "BuyOne Google Play Store listing",
        caption: "Live on Google Play — buy, sell, recharge and delivery in one app.",
      },
    ],
    techStack: ["React Native", "TypeScript"],
    role: "Mobile Developer",
    year: "2025",
    visibility: "public",
    repo: { visibility: "private" },
    results:
      "Public-facing Nigerian marketplace and utilities app — buy, sell, recharge and delivery in one product.",
  },
  {
    slug: "buyone-logistics",
    title: "Buyone Logistics",
    description:
      "Nigerian logistics management app — accept jobs, live map tracking, wallet payouts and dispatcher assignment.",
    body: "Buyone Logistics is an advanced logistics management platform for onboarding local and international logistics companies into one competitive, transparent ecosystem — under lines like Turn Your Time Into Money, Accept Jobs. Deliver Efficiently., Track Your Route With Live Map and Instant Payment. Drivers and dispatchers manage order details (pickup and delivery across Port Harcourt and beyond), assign dispatchers, follow routes on a live map with vendor and receiver contacts, and confirm arrival at destination. A wallet with Add Money and Withdraw sits alongside Today's Earnings, incoming orders and bank payouts (e.g. Access Bank transfers) so completed deliveries turn into steady money. As mobile developer, I shipped the product UI: job acceptance and order flows, live tracking, wallet dashboard and transaction success screens for a clean, mobile-first dispatcher experience. Live on Google Play under OJP TECH LTD.",
    image: "/projects/portfolio16.webp",
    gallery: [
      {
        src: "/projects/portfolio16.webp",
        alt: "Buyone Logistics feature overview",
        caption: "Accept jobs, live map tracking, wallet and payouts in one app.",
      },
      {
        src: "/projects/portfolio16a.webp",
        alt: "Buyone Logistics Google Play Store listing",
        caption: "Live on Google Play — logistics management for drivers and dispatchers.",
      },
    ],
    techStack: ["React Native", "TypeScript"],
    role: "Mobile Developer",
    year: "2025",
    visibility: "public",
    repo: { visibility: "private" },
    results:
      "Public-facing Nigerian logistics app on Google Play — jobs, live tracking and instant payouts.",
  },
  {
    slug: "anthena",
    title: "Anthena",
    description:
      "AI-powered business operations and workforce platform for growing companies and startups.",
    body: "Anthena is an AI-powered business operations and workforce platform based in Lagos, Nigeria — an all-in-one operating layer for growing companies and startups. The product brings together smart work planning (AI roadmaps from project descriptions), talent sourcing and matching without freelance bidding wars, delivery coordination pipelines, and operational workflows with escrow. As frontend developer, I shipped the product UI in Next.js: Tailwind CSS for a coherent design system, Framer Motion for purposeful motion, and accessible Radix / shadcn-style primitives for polished marketing and in-app surfaces. The platform offers a free tier alongside Pro upgrades, with early-access waitlist and referral credits for teams getting started.",
    image: "/projects/portfolio13.webp",
    gallery: [
      {
        src: "/projects/portfolio13.webp",
        alt: "Anthena AI operations platform",
        caption: "AI-powered operating layer for hiring, planning and delivery.",
      },
      {
        src: "/projects/portfolio13a.webp",
        alt: "Anthena product interface",
        caption: "Talent matching and collaboration workspace.",
      },
      {
        src: "/projects/portfolio13b.webp",
        alt: "Anthena marketing and product UI",
        caption: "Motion-led marketing and product surfaces.",
      },
      {
        src: "/projects/portfolio13c.webp",
        alt: "Anthena platform screens",
        caption: "From project brief to matched talent and delivery.",
      },
    ],
    techStack: [
      "Next.js",
      "ReactJS",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "shadcn/ui",
    ],
    role: "Frontend Developer",
    year: "2025",
    visibility: "public",
    repo: { visibility: "private" },
    results:
      "Live AI operations platform at useanthena.com — early-access waitlist and Pro upgrades.",
    liveUrl: "https://useanthena.com",
  },
  {
    slug: "intellanex",
    title: "IntellaNex",
    description:
      "Company platform for IntellaNex Technologies — software, AI, IoT, robotics and smart-home systems.",
    body: "IntellaNex Technologies builds end-to-end technology ecosystems — software, AI-powered platforms, enterprise systems, mobile applications, IoT, robotics and intelligent automation for modern homes and businesses. The public site presents their full stack: custom software and cloud platforms, hardware and embedded engineering, connected IoT and robotics, and Home OS smart-home control unifying lighting, climate, security and energy from one app. Specialized platforms such as ElectionOS sit alongside the broader product line. As full stack developer, I contributed to the company platform in Next.js: Tailwind CSS for a coherent design system, Framer Motion for purposeful motion, and polished marketing surfaces that carry their software-meets-hardware story from landing through solutions.",
    image: "/projects/portfolio14.webp",
    gallery: [
      {
        src: "/projects/portfolio14.webp",
        alt: "IntellaNex Technologies company platform",
        caption: "Software, AI, IoT and robotics under one engineering partner.",
      },
      {
        src: "/projects/portfolio14a.webp",
        alt: "IntellaNex solutions and product surfaces",
        caption: "From code to circuit — end-to-end technology ecosystems.",
      },
      {
        src: "/projects/portfolio14b.webp",
        alt: "IntellaNex Home OS and automation",
        caption: "Unified smart-home control for lighting, climate, security and energy.",
      },
      {
        src: "/projects/portfolio14c.webp",
        alt: "IntellaNex platform and engineering process",
        caption: "Discover, architect, prototype, build and deploy.",
      },
      {
        src: "/projects/portfolio14d.webp",
        alt: "IntellaNex featured work and company UI",
        caption: "Selected systems across software, hardware, IoT and automation.",
      },
    ],
    techStack: [
      "Next.js",
      "ReactJS",
      "Tailwind CSS",
      "Framer Motion",
    ],
    role: "Full Stack Developer",
    year: "2025",
    visibility: "public",
    repo: { visibility: "private" },
    results:
      "Live company platform at intellanex.com — software, AI, IoT, robotics and Home OS.",
    liveUrl: "https://intellanex.com",
  },
  {
    slug: "dyingearth",
    title: "Dyingearth",
    description: "Soil monitoring Django app giving insight into soil health.",
    body: "Dyingearth is a soil-monitoring web application built with Django. It surfaces health insights so farmers and researchers can make better decisions from field data — dashboards, readings and a clean path from raw input to actionable signal.",
    image: "/projects/portfolio1.webp",
    gallery: [
      {
        src: "/projects/portfolio1.webp",
        alt: "Dyingearth soil-health dashboard",
        caption: "Field readings surfaced as a soil-health dashboard.",
      },
    ],
    techStack: ["Python", "Django"],
    role: "Full-stack Developer",
    year: "2024",
    visibility: "public",
    repo: {
      visibility: "public",
      url: "https://github.com/egwimcodes/Dyingearthcodes",
    },
    results: "Live soil-health monitoring tool deployed for ongoing field use.",
    liveUrl: "https://dyingearthcodes.onrender.com",
  },
  {
    slug: "goodcoin",
    title: "GoodCoin",
    description: "Telegram bot and tapping game built for a crypto community.",
    body: "GoodCoin is a Telegram mini-app and tapping game designed for a crypto community — engagement loops, bot flows and a lightweight game client that keeps players inside Telegram without a separate install.",
    image: "/projects/portfolio8.webp",
    gallery: [
      {
        src: "/projects/portfolio8.webp",
        alt: "GoodCoin Telegram tapping game UI",
        caption: "In-Telegram tapping game and community engagement loop.",
      },
    ],
    techStack: ["JavaScript", "Node.js", "Telegram"],
    role: "Full-stack Developer",
    year: "2024",
    visibility: "public",
    repo: {
      visibility: "public",
      url: "https://github.com/egwimcodes/mini-good",
    },
    liveUrl: "https://t.me/theonlygoodcoin_bot/games?startapp=594387e8",
  },
  {
    slug: "coretruth",
    title: "CoreTruth",
    description:
      "Nigerian online news platform covering regional and national stories across politics, society and development.",
    body: "CoreTruth is a live online media platform focused on Nigeria — with particular depth on Anambra State and the South-East. The site publishes political, social and developmental reporting: local governance, regional policy, civic events, chambers of commerce, youth affairs and leadership bodies such as NYCN Anambra. Built with PHP and Laravel, it delivers a structured publishing stack for editors to ship timely regional and national coverage to readers on the web (and alongside the brand’s presence on Facebook and Instagram).",
    image: "/projects/portfolio12.webp",
    gallery: [
      {
        src: "/projects/portfolio12.webp",
        alt: "CoreTruth online news platform",
        caption: "Regional and national news publishing for Nigeria’s South-East.",
      },
    ],
    techStack: ["PHP", "Laravel"],
    role: "Full-stack Developer",
    year: "2024",
    visibility: "public",
    repo: { visibility: "private" },
    results:
      "Live news platform at coretruth.net serving regional and national readership.",
    liveUrl: "https://coretruth.net",
  },
  {
    slug: "cashpoint",
    title: "CashPoint",
    description:
      "Flutter fintech app — an innovative wallet for making secure transactions.",
    body: "CashPoint is a Flutter fintech wallet focused on secure peer transactions. The work covered product UI, auth and transfer flows with an emphasis on clarity and trust for everyday money movement.",
    image: "/projects/portfolio4.webp",
    gallery: [
      {
        src: "/projects/portfolio4.webp",
        alt: "CashPoint fintech wallet screens",
        caption: "Wallet UI for secure peer transfers.",
      },
      
    ],
    techStack: ["Flutter", "Dart", "Firebase"],
    role: "Mobile Developer",
    year: "2023",
    visibility: "private",
    repo: { visibility: "private" },
    results: "Private fintech prototype with secure transaction flows.",
  },
  {
    slug: "micdavmrei",
    title: "Micdavmrei",
    description: "Youth empowerment site — empowering young people.",
    body: "Micdavmrei is a youth-empowerment website built to present programmes and opportunities with a clear, accessible information architecture for young people and organisers alike.",
    image: "/projects/portfolio10.webp",
    gallery: [],
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Web Developer",
    year: "2023",
    visibility: "public",
    repo: { visibility: "private" },
    liveUrl: "https://micdavmrei.com/index1.html",
  },
  {
    slug: "gpt4-landing",
    title: "GPT 4",
    description: "React GPT-4 landing site with a bold, fully responsive design.",
    body: "A marketing landing experience for a GPT-4 concept — bold visual hierarchy, responsive layout and a React front end tuned for conversion-oriented storytelling.",
    image: "/projects/portfolio3.webp",
    gallery: [
      {
        src: "/projects/portfolio3.webp",
        alt: "GPT-4 marketing landing page",
        caption: "Bold, conversion-oriented GPT-4 landing layout.",
      },
    ],
    techStack: ["ReactJS", "JavaScript", "CSS"],
    role: "Frontend Developer",
    year: "2023",
    visibility: "public",
    repo: {
      visibility: "public",
      url: "https://github.com/egwimcodes/GPT4",
    },
    liveUrl: "https://gpt4landing.netlify.app",
  },
  {
    slug: "scrap-enxor",
    title: "Scrap Enxor",
    description: "Python website scraper for extracting structured data from the web.",
    body: "Scrap Enxor is a Python scraping tool for pulling structured data from websites — resilient selectors, exportable output and a workflow aimed at research and automation tasks.",
    image: "/projects/portfolio9.webp",
    gallery: [],
    techStack: ["Python"],
    role: "Backend Developer",
    year: "2022",
    visibility: "private",
    repo: {
      visibility: "public",
      url: "https://github.com/egwimcodes/ScrapEnxor",
    },
    results: "Internal scraping utility for structured data extraction.",
  },
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    description:
      "Plain HTML, CSS and JS professional portfolio site, fully responsive.",
    body: "An earlier personal portfolio built with plain HTML, CSS and JavaScript — fully responsive, performance-minded and a foundation for later product and brand work.",
    image: "/projects/portfolio5.webp",
    gallery: [
      {
        src: "/projects/portfolio5.webp",
        alt: "Earlier personal portfolio site",
        caption: "Responsive HTML/CSS/JS portfolio layout.",
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer",
    year: "2022",
    visibility: "public",
    repo: {
      visibility: "public",
      url: "https://github.com/egwimcodes/snowwisdom.com",
    },
    liveUrl: "https://snowwisdom.netlify.app",
  },
  {
    slug: "wordpress-blog",
    title: "WordPress Blog",
    description:
      "WordPress blog demonstrating high-level web development and quality delivery.",
    body: "A WordPress content site delivered end to end — theme setup, content structure and production hosting for a polished publishing experience.",
    image: "/projects/portfolio11.webp",
    gallery: [],
    techStack: ["WordPress", "PHP", "CSS"],
    role: "Web Developer",
    year: "2021",
    visibility: "public",
    repo: { visibility: "private" },
    liveUrl: "https://nijasun.com/",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const contact = {
  heading: "Contact",
  blurb:
    "Have a project in mind, or just want to talk shop? Send a message and I'll get back to you.",
} as const;
