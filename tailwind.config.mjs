/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
    "./node_modules/@preline/overlay/index.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono Variable", "monospace"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
  darkMode: "class",
};
