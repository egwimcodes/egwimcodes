# egwimcodes.dev

Personal portfolio — Next.js (App Router) + Tailwind CSS v4 + Motion, on the egwimcodes brand.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the EmailJS values
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build (`output: "standalone"`) |
| `npm run start` | Serve the build |
| `npm run lint` | ESLint |
| `npm run brand:assets` | Regenerate the icons, OG image and monogram paths from the SVG master |

## Structure

```
app/            layout, page, globals.css, robots.ts, sitemap.ts, icon.*, apple-icon.png
components/     Nav, Hero, About, Services, Portfolio, Contact, Footer, Logo, Reveal…
content/site.ts all copy: services, projects, socials, bio
public/brand/   the SVG masters and the Open Graph image
scripts/        brand asset pipeline + the Sora TTFs it outlines text with
brand-src/      superseded raster comps, kept only as provenance
```

## Brand assets

`public/brand/egwimcodes-EC-primary.svg` is the single source of truth for the EC
monogram. `npm run brand:assets` reads it and regenerates everything derived from
it — `app/icon.svg`, `app/icon.png`, `app/apple-icon.png`, the 1200x630
`public/brand/og.png`, and `components/ec-paths.ts`, which is the path data the
inlined `<EcMark>` renders. Rerun it after any change to the master; don't edit
the outputs by hand.

The mark is inlined rather than served as an image so its fills can follow the
theme: the cyan C keeps the brand gradient on both themes, while the second C
switches between the silver gradient and flat graphite via `--ec-second-c`. The
wordmark is live Sora text, so there is no raster lockup to keep in sync.

The OG card needs the wordmark as outlines because librsvg — which sharp renders
SVG through — ignores embedded `@font-face` and falls back to a system font, so
the pipeline converts it with `opentype.js` using the TTFs in `scripts/fonts/`.

## Deployment

`docker build` produces a standalone Node image serving on port 3000; the VPS
workflow maps it to `127.0.0.1:3001`. The `NEXT_PUBLIC_EMAILJS_*` values are
inlined at build time and must be passed as `--build-arg`.

---

<h1 align="center">Hi 👋, I'm Wisdom Egwim</h1>

<p align="center"> <a href="https://egwimcodes" target="blank"><img src="https://img.freepik.com/fotos-premium/retrato-de-programador-de-sucesso-desenvolvedor-de-jogos-ou-codificador-em-usa-laptop-de-computador-para-trabalhar-design-de-jogos-hacker-boy-generative-ai-cyber-gamer_117038-7602.jpg" alt="egwimcodes" /></a> </p>

<hr>
<h3 align="center">A highly skilled and ambitious Software Developer from Nigeria</h3>
<hr>

<img align="right" alt="Coding" width="400" src="https://egwimcodes.dev/assets/Wisdom%20Egwim-BWp9nYME.png" alt="egwimcodes">
<p align="right"> <a href="https://twitter.com/egwimcodes" target="blank"><img src="https://img.shields.io/twitter/follow/egwimcodes?logo=twitter&style=for-the-badge" alt="egwimcodes" /></a> </p>

- 🔭 I’m currently working on **Private Flutter and Python Projects**

- 🌱 I’m currently learning **Flutter Advernce Flutter**

- 👯 I’m looking to collaborate on **Software Projects**

- 🤝 I’m looking for help with **Jobs**

- 👨‍💻 All of my projects are available at [https://egwimcodes.dev](https://egwimcodes.dev)

- 📝 I regularly write articles on [https://snowbloggers.com](https://snowbloggers.com)

- 💬 Ask me about **Python, Django, React, Next, Flutter.....**

- 📫 How to reach me **egwimcodes@gmail.com**

- 📄 Know about my experiences [https://egwimcodes.dev/](https://egwimcodes.dev/)

- ⚡ Fun fact **Creative Thinking**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://codepen.io/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://dev.to/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://twitter.com/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://linkedin.com/in/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://codesandbox.com/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codesandbox.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://fb.com/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://instagram.com/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://www.behance.net/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/behance.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://auth.geeksforgeeks.org/user/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt="egwimcodes" height="30" width="40" /></a>
<a href="https://discord.gg/egwimcodes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="egwimcodes" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://developer.android.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/> </a> <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40"/> </a> <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://www.blender.org/" target="_blank" rel="noreferrer"> <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://dart.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40"/> </a> <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://flutter.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redis.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="40" height="40"/> </a> <a href="https://www.sketch.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg" alt="sketch" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=egwimcodes&show_icons=true&locale=en&layout=compact" alt="egwimcodes" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=egwimcodes&show_icons=true&locale=en" alt="egwimcodes" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=egwimcodes&" alt="egwimcodes" /></p>

