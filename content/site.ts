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
    "Wisdom Egwim is a highly skilled, ambitious Software Developer with a robust background in Web 3, Flutter, React Native, ReactJS, Next.js, Python, Django, JavaScript, FastAPI, Dart, Tailwind CSS and Bootstrap.",
    "My expertise goes beyond traditional development, offering a deep understanding of machine learning and robotics, allowing me to craft innovative and efficient solutions for a wide range of projects.",
    "With over 5 years of experience in software development, I have consistently demonstrated my expertise through the successful conception and execution of innovative projects. My commitment to excellence is reflected in the quality of my work, where I blend efficient coding practices with a forward-thinking approach. I continuously explore the intersection of software development and emerging technologies, ensuring that every project I undertake is both cutting-edge and impactful.",
    "My commitment to following the latest tech trends showcases my readiness for long-lasting success as a developer.",
  ],
  stats: [
    { value: "5+", label: "Years building" },
    { value: "10+", label: "Shipped projects" },
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
      frontend: skills("ReactJS", "Next.js", "Web 3", "Vue.js", "Tailwind CSS"),
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

// TODO: replace with real work history
export type ExperienceEntry = {
  role: string;
  company: string;
  dates: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Developer",
    company: "Independent / Client work",
    dates: "2021 — Present",
    description:
      "Placeholder — shipping web and mobile products end to end for clients across fintech, content and community platforms.",
  },
  {
    role: "Mobile Developer",
    company: "Contract engagements",
    dates: "2020 — 2023",
    description:
      "Placeholder — Flutter and React Native apps from prototype through store-ready releases, including fintech wallet flows.",
  },
  {
    role: "Software Developer",
    company: "Early projects & open collaboration",
    dates: "2019 — 2021",
    description:
      "Placeholder — Django, scraping and landing-page work that established the foundation for later product delivery.",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  body: string;
  image: string;
  gallery: string[];
  techStack: string[];
  role: string;
  year: string;
  /** Optional outcome / impact line. */
  results?: string;
  /** Live external URL, when one still exists. */
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "dyingearth",
    title: "Dyingearth",
    description: "Soil monitoring Django app giving insight into soil health.",
    body: "Dyingearth is a soil-monitoring web application built with Django. It surfaces health insights so farmers and researchers can make better decisions from field data — dashboards, readings and a clean path from raw input to actionable signal.",
    image: "/projects/portfolio1.webp",
    gallery: ["/projects/portfolio1.webp"],
    techStack: ["Python", "Django"],
    role: "Full-stack Developer",
    year: "2024",
    results: "Live soil-health monitoring tool deployed for ongoing field use.",
    href: "https://dyingearthcodes.onrender.com",
  },
  {
    slug: "goodcoin",
    title: "GoodCoin",
    description: "Telegram bot and tapping game built for a crypto community.",
    body: "GoodCoin is a Telegram mini-app and tapping game designed for a crypto community — engagement loops, bot flows and a lightweight game client that keeps players inside Telegram without a separate install.",
    image: "/projects/portfolio8.webp",
    gallery: ["/projects/portfolio8.webp"],
    techStack: ["JavaScript", "Node.js", "Telegram"],
    role: "Full-stack Developer",
    year: "2024",
    href: "https://t.me/theonlygoodcoin_bot/games?startapp=594387e8",
  },
  {
    slug: "cashpoint",
    title: "CashPoint",
    description:
      "Flutter fintech app — an innovative wallet for making secure transactions.",
    body: "CashPoint is a Flutter fintech wallet focused on secure peer transactions. The work covered product UI, auth and transfer flows with an emphasis on clarity and trust for everyday money movement.",
    image: "/projects/portfolio4.webp",
    gallery: ["/projects/portfolio4.webp"],
    techStack: ["Flutter", "Dart", "Firebase"],
    role: "Mobile Developer",
    year: "2023",
    results: "Private fintech prototype with secure transaction flows.",
  },
  {
    slug: "micdavmrei",
    title: "Micdavmrei",
    description: "Youth empowerment site — empowering young people.",
    body: "Micdavmrei is a youth-empowerment website built to present programmes and opportunities with a clear, accessible information architecture for young people and organisers alike.",
    image: "/projects/portfolio10.webp",
    gallery: ["/projects/portfolio10.webp"],
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Web Developer",
    year: "2023",
    href: "https://micdavmrei.com/index1.html",
  },
  {
    slug: "gpt4-landing",
    title: "GPT 4",
    description: "React GPT-4 landing site with a bold, fully responsive design.",
    body: "A marketing landing experience for a GPT-4 concept — bold visual hierarchy, responsive layout and a React front end tuned for conversion-oriented storytelling.",
    image: "/projects/portfolio3.webp",
    gallery: ["/projects/portfolio3.webp"],
    techStack: ["ReactJS", "JavaScript", "CSS"],
    role: "Frontend Developer",
    year: "2023",
    href: "https://gpt4landing.netlify.app",
  },
  {
    slug: "scrap-enxor",
    title: "Scrap Enxor",
    description: "Python website scraper for extracting structured data from the web.",
    body: "Scrap Enxor is a Python scraping tool for pulling structured data from websites — resilient selectors, exportable output and a workflow aimed at research and automation tasks.",
    image: "/projects/portfolio9.webp",
    gallery: ["/projects/portfolio9.webp"],
    techStack: ["Python"],
    role: "Backend Developer",
    year: "2022",
    results: "Internal scraping utility for structured data extraction.",
  },
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    description:
      "Plain HTML, CSS and JS professional portfolio site, fully responsive.",
    body: "An earlier personal portfolio built with plain HTML, CSS and JavaScript — fully responsive, performance-minded and a foundation for later product and brand work.",
    image: "/projects/portfolio5.webp",
    gallery: ["/projects/portfolio5.webp"],
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer",
    year: "2022",
    href: "https://snowwisdom.netlify.app",
  },
  {
    slug: "wordpress-blog",
    title: "WordPress Blog",
    description:
      "WordPress blog demonstrating high-level web development and quality delivery.",
    body: "A WordPress content site delivered end to end — theme setup, content structure and production hosting for a polished publishing experience.",
    image: "/projects/portfolio11.webp",
    gallery: ["/projects/portfolio11.webp"],
    techStack: ["WordPress", "PHP", "CSS"],
    role: "Web Developer",
    year: "2021",
    href: "https://nijasun.com/",
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
