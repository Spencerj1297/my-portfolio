import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-custom": "linear-gradient(180deg, black , rgba(79, 248, 210, 0.20))",
      },
      boxShadow: {
        customShadow: "12px 12px 2px 1px rgba(233, 128, 116, .3)",
      },
      scale: {
        '102': '1.02',
      },
      colors: {
        customBlue: "#3c88d1",
        customGreen: "#2dbd87",
        customRed: "#d1495b",
        customPurple: "#8250df",
        customGrey: "#cfd6dc",
        aqua: "#4ff8d2",
        aquaDark: "#1e8e7c",
        aquaRed: "#fc4445",
        aquaTurquoise: "#3feee6",
        aquaDarkTurquoise: "#55bcc9",
        elegantEggShell: "#eae7dc",
        elegantTan: "#d8c3a5",
        elegantPink: "#e98074",
        cPlusBlue: "#00589D",
        pythonBlue: "#366B98",
        pythonYellow: "#F7CC42",
        cSharpPurple: "#7D62D7", 
        rubyRed: '#C60000',
        jsYellow: "#EFD81D",
        reactGrey: "#222222",
        reactBlue: "#61DAFB",
        nodeBlue: "#11112D",
        nodeGreen: "#68A764",
        awsBlue: "#262E3B",
        awsOrange: "#F8991B",
        tailWBlue: "#121B2D",
        tailWLightBlue: "#16BDCA",
        sqlBlue: "#005D85",
        cssBlue:"#214CE5"
      },
    },
  },
  plugins: [],
};
export default config;
