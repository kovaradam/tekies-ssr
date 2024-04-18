import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,jsx,js}",
    "../shared/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
