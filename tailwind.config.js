/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        screens: {
            smallMobile: "280px",
            mobile: "320px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
        },
        extend: {
            animation: {
                glow: "glow 2.5s ease-in infinite;",
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-slow': 'bounce 3s infinite',
                'pulse-slow': 'pulse 4s infinite',
            },
            keyframes: {
                glow: {
                    "0%": {
                        backgroundColor: "#174140",
                        boxShadow: "0 0 15px 0 #174140",
                    },
                    "10%": {
                        backgroundColor: "#174140",
                        boxShadow: "0 0 13px 0 #1d5150",
                    },
                    "20%": {
                        backgroundColor: "#1d5150",
                        boxShadow: "0 0 11px 0 #1d5150",
                    },
                    "30%": {
                        backgroundColor: "#1d5150",
                        boxShadow: "0 0 9px 0 #226160",
                    },
                    "40%": {
                        backgroundColor: "#226160",
                        boxShadow: "0 0 7px 0 #226160",
                    },
                    "50%": {
                        backgroundColor: "#226160",
                        boxShadow: "0 0 5px 0 #287270",
                    },
                    "60%": {
                        backgroundColor: "#287270",
                        boxShadow: "0 0 7px 0 #2e8280",
                    },
                    "70%": {
                        backgroundColor: "#2e8280",
                        boxShadow: "0 0 9px 0 #2e8280",
                    },
                    "80%": {
                        backgroundColor: "#2e82800",
                        boxShadow: "0 0 11px 0 #349290",
                    },
                    "90%": {
                        backgroundColor: "#349290",
                        boxShadow: "0 0 13px 0 #3aa3a0",
                    },
                    "100%": {
                        backgroundColor: "#3aa3a0",
                        boxShadow: "0 0 15px 0px #4daca9",
                    },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                secondary: {
                    50: '#fdf4ff',
                    100: '#fae8ff',
                    200: '#f5d0fe',
                    300: '#f0abfc',
                    400: '#e879f9',
                    500: '#d946ef',
                    600: '#c026d3',
                    700: '#a21caf',
                    800: '#86198f',
                    900: '#701a75',
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                mono: ['Fira Code', 'ui-monospace', 'monospace'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            transitionDuration: {
                '2000': '2000ms',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
