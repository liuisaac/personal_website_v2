/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                "white": "0px 0px 10px rgba(255,255,255,0.6)",
            },
            colors: {
                midnight: "#141414",
                charcoal: "#201F23",
                slate: "#B3B3B3",
                smoke: "#B3B3B3",
                tomato: "#FF4D4D",
                nightshade: "172147",
                white: "#FFFFFF",
            },
            fontFamily: {
                sans: "var(--font-poppins), sans-serif",
                mono: "var(--font-inconsolata), monospace",
            },
        },
    },
    plugins: [],
};
