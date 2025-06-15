import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./data/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@aceternity/ui/**/*.{js,ts,jsx,tsx}",
        "./ui/**/*.tsx",
        "./components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "radial-gradient": 'radial-gradient(ellipse at center, transparent 20%, black'
            },
        },
    },
    plugins: [],
};

export default config;