import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        augusta: ["var(--font-augusta)"],
        "gemfont-one": ["var(--font-gemfont-one)"],
        "greek-freak": ["var(--font-greek-freak)"],
        "greek-regular": ["var(--font-greek-regular)"],
        xtra: ["var(--font-xtra)"],
      },
      backgroundImage: {
        welcome: "url('/images/welcome.png')",
        fantasy: "url('/images/btn-armor.png')",
        curtain: "linear-gradient(30deg, rgba(0, 0, 0, 0.00) 0%,#000 100%)",
      },
      maxWidth: {
        "screen-xs": "480px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
