import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        branca: "var(--branca)",
        preta: "var(--preta)",
        vermelha: "var(--vermelha)"
      },
      fontSize: {

      },
      fontFamily: {
        rob: "var(--roboto)"
      },
      
    },
  },
  plugins: [],
};
export default config;
