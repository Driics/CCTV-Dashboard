import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const colors = require('tailwindcss/colors')

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            current: 'currentColor',
            "primary": "#FFF",
            "background": {
                DEFAULT: "#1a1a1a",
                100: "#0a0a0a"
            },
            "gray": {
                900: "hsla(0, 0%, 63%, 1);",
                950: "#030712",
                100: "#1E1F29",
                "alpha": {
                    400: "hsla(0, 0%, 100%, .14);"
                }
            },
            "green": {
                500: "#22c55e"
            },
            "white": "#fff",
            muted: {
                DEFAULT: "hsla(0, 0%, 100%, .14);",
                foreground: "hsl(var(--muted-foreground))",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                "card": "0 0 0 1px hsla(0, 0%, 100%, .145), 0 4px 6px rgba(0, 0, 0, .04);"
            }
        },
    },
    plugins: [],
};
export default config;
