import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xl": "1800px",
            },
        },
        extend: {
            colors: {
                fill: {
                    box: "#1a1a1a", // rgb(26, 26, 26)
                    dark: "#2d2d2d", // rgb(40, 40, 40)
                    light: "#eff1f6bf", // rbg(239, 241, 246, 0.16)
                },
            },
            keyframes: {
                "accordion-down": {
                    "0%": { height: "0" },
                    "100%": { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        // require("@tailwindcss/line-clamp")
    ],
} satisfies Config;
