import { DB } from "./db";

export default async function seed() {
  console.log("seed");

  await DB.addPost({
    title: "Vite ⚡️",
    description: "Vite readme",
    content: vite,
  });

  await DB.addPost({
    title: "Next 🔺",
    description: "Next readme",
    content: next,
  });

  await DB.addPost({
    description: "Waku readme",
    title: "Waku ⛩️",
    content: waku,
  });

  await DB.addPost({
    title: "Astro 🚀",
    description: "Astro readme",
    content: astro,
  });
}

const waku = `
# Waku

⛩️ The minimal React framework

visit [waku.gg](https://waku.gg) or \`npm create waku@latest\`

[![Build Status](https://img.shields.io/github/actions/workflow/status/dai-shi/waku/ci.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/pmndrs/jotai/actions?query=workflow%3ALint)
[![Version](https://img.shields.io/npm/v/waku?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/waku)
[![Downloads](https://img.shields.io/npm/dt/waku.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/waku)
[![Discord Shield](https://img.shields.io/discord/627656437971288081?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/MrQdmzd)

<br>

## Introduction

**Waku** _(wah-ku)_ or **わく** means “framework” in Japanese. As the minimal React framework, it’s designed to accelerate the work of developers at startups and agencies building small to medium-sized React projects. These include marketing websites, light ecommerce, and web applications.

We recommend other frameworks for heavy ecommerce or enterprise applications. Waku is a lightweight alternative bringing a fast developer experience to the modern React server components era. Yes, let’s make React development fast again!

> Waku is in rapid development and some features are currently missing. Please try it on non-production projects and report any issues you may encounter. Expect that there will be some breaking changes on the road towards a stable v1 release. Contributors are welcome.

## Getting started

Start a new Waku project with the \`create\` command for your preferred package manager. It will scaffold a new project with our default [Waku starter](https://github.com/dai-shi/waku/tree/main/examples/01_template).

\`\`\`
npm create waku@latest
\`\`\`

**Node.js version requirement:** \`^20.8.0\` or \`^18.17.0\`

## Rendering
`;

const next = `
This is a [Next.js](https://nextjs.org/) project bootstrapped with [\`create-next-app\`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying \`app/page.tsx\`. The page auto-updates as you edit the file.

This project uses [\`next/font\`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

`;

const vite = `
<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://pr.new/vitejs/vite"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# Vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "quick", pronounced [\` /
  vit /
  \`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vitejs.dev).

## Packages

| Package                                         | Version (click for changelogs)                                                                                                    |
| ----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [vite](packages/vite)                           | [![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)](packages/vite/CHANGELOG.md)                                    |
| [@vitejs/plugin-legacy](packages/plugin-legacy) | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md) |
| [create-vite](packages/create-vite)             | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |

## Contribution

See [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE).

## Sponsors

<p align="center">
  <a target="_blank" href="https://github.com/sponsors/yyx990803">
    <img alt="sponsors" src="https://sponsors.vuejs.org/vite.svg">
  </a>
</p>
`;

const astro = `

# Astro Starter Kit: Basics

\`\`\`sh
npm create astro@latest -- --template basics
\`\`\`

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

\`\`\`text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
\`\`\`

Astro looks for \`.astro\` or \`.md\` files in the \`src/pages/\` directory. Each page is exposed as a route based on its file name.

There's nothing special about \`src/components/\`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the \`public/\` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| \`npm install\`             | Installs dependencies                            |
| \`npm run dev\`             | Starts local dev server at \`localhost:4321\`      |
| \`npm run build\`           | Build your production site to \`./dist/\`          |
| \`npm run preview\`         | Preview your build locally, before deploying     |
| \`npm run astro ...\`       | Run CLI commands like \`astro add\`, \`astro check\` |
| \`npm run astro -- --help\` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

`;
