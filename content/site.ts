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
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
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
  portrait: { src: "/Wisdom-Egwim.png", width: 600, height: 731 },
} as const;

export const about = {
  role: "Full Stack Developer",
  portrait: { src: "/Wisdom-Egwim-Portfolio.png", width: 500, height: 500 },
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
      frontend: ["ReactJS", "Next.js", "Web 3", "Vue.js", "Tailwind CSS"],
      backend: ["Python", "Django", "Node.js", "Express.js"],
    },
  },
  {
    icon: "smartphone",
    title: "App Development",
    description:
      "Embark on a journey of innovation with my app development services. I specialize in creating sleek, user-friendly interfaces combined with advanced functionalities, bringing your app ideas to life. My commitment to excellence ensures the development of intuitive, high-performing applications that elevate your digital presence.",
    tech: {
      frontend: ["Flutter", "React Native", "Dart"],
      backend: ["Python", "Node.js", "Firebase", "Express.js"],
    },
  },
  {
    icon: "cpu",
    title: "ML & Robotics Enthusiast",
    description:
      "Discover the world of ML & Robotics with our passionate enthusiasts. Unleash innovation as we seamlessly integrate machine learning and robotics. Join us in shaping the future of technology.",
    tech: {
      frontend: ["Flutter", "React Native"],
      backend: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "ROS (Robot Operating System)",
        "OpenCV",
        "Arduino",
      ],
    },
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  /** Omitted when there is no live URL to link to. */
  href?: string;
  /** Shown in place of the link when `href` is absent. */
  linkNote?: string;
};

export const projects: Project[] = [
  {
    title: "Dyingearth",
    description: "Soil monitoring Django app giving insight into soil health.",
    image: "/projects/portfolio1.png",
    href: "https://dyingearthcodes.onrender.com",
  },
  {
    title: "Squidbonk",
    description:
      "SQUIBONK is an innovative crypto project revolutionizing the ecosystem with its unique features.",
    image: "/projects/portfolio7.png",
    // No live URL: the original link pointed at the Dyingearth site, and the
    // squibonk.com domain has since been taken over by an unrelated site.
    linkNote: "Site no longer available",
  },
  {
    title: "GoodCoin",
    description: "Telegram bot and tapping game built for a crypto community.",
    image: "/projects/portfolio8.png",
    href: "https://t.me/theonlygoodcoin_bot/games?startapp=594387e8",
  },
  {
    title: "CashPoint",
    description:
      "Flutter fintech app — an innovative wallet for making secure transactions.",
    image: "/projects/portfolio4.png",
  },
  {
    title: "React Portfolio",
    description: "React portfolio site with cool animations and a responsive design.",
    image: "/projects/portfolio2.png",
    href: "https://egwimcodes.netlify.app",
  },
  {
    title: "Micdavmrei",
    description: "Youth empowerment site — empowering young people.",
    image: "/projects/portfolio10.png",
    href: "https://micdavmrei.com/index1.html",
  },
  {
    title: "GPT 4",
    description: "React GPT-4 landing site with a bold, fully responsive design.",
    image: "/projects/portfolio3.png",
    href: "https://gpt4landing.netlify.app",
  },
  {
    title: "Scrap Enxor",
    description: "Python website scraper for extracting structured data from the web.",
    image: "/projects/portfolio9.png",
  },
  {
    title: "Portfolio Site",
    description:
      "Plain HTML, CSS and JS professional portfolio site, fully responsive.",
    image: "/projects/portfolio5.png",
    href: "https://snowwisdom.netlify.app",
  },
  {
    title: "WordPress Blog",
    description:
      "WordPress blog demonstrating high-level web development and quality delivery.",
    image: "/projects/portfolio11.png",
    href: "https://nijasun.com/",
  },
];

export const contact = {
  heading: "Contact",
  blurb:
    "Have a project in mind, or just want to talk shop? Send a message and I'll get back to you.",
} as const;
