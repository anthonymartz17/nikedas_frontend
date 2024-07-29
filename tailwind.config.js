/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				light: "#ffffff",
				dark: "#1a1a1a",
				hover: "#313131",
				accent: "#ff3131",
			},
		},
	},
	plugins: [],
};
