/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
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
            },
        },
    },
    plugins: [],
};
