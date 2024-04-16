import { DB } from "./db";

export default async function seed() {
  console.log("seed");

  await DB.addPost({
    content: "This is a first post",
    description: "This is a first post",
    title: "First post",
  });

  await DB.addPost({
    description: "Waku readme",
    title: "Second post",
    content: `
  
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
  `,
  });
}
