/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                surface: '#171717',
                primary: {
                    DEFAULT: '#39FF14', // Neon Green
                    dark: '#32E612',
                    light: '#61FF42'
                },
                secondary: '#27272a',
                text: {
                    DEFAULT: '#f4f4f5',
                    muted: '#a1a1aa'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
