import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "primary-background": "var(--primary-background)",
        "secondary-background": "var(--secondary-background)",
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "third-text-color": "var(--third-text-color)",
        "fourth-text-color": "var(--fourth-text-color)",
        "hover-primary-text-color": "var(--hover-primary-text-color)",
        " --hover-primary-text-color-contrast": "var(--hover-primary-text-color-contrast)",
        "border-color": "var(--border-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
