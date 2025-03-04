/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [],
    theme: {
        extend: {
            colors: {
                charcoal: "#201F23",
                midnight: "#141414",
                nightshade: "172147",
                slate: "#B3B3B3",
                smoke: "#B3B3B3",
                tomato: "#FF4D4D",
                white: "#FFFFFF",
            },
            dropShadow: {
                "white": "0px 0px 10px rgba(255,255,255,0.6)",
            },
            fontFamily: {
                mono: "var(--font-inconsolata), monospace",
                sans: "var(--font-poppins), sans-serif",
            },
        },
    },
};
