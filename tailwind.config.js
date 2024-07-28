/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				textLight: "#ffffff",
				textDark: "#1a1a1a",
				bgDark: "#1a1a1a",
				darkHover: "#313131",
				textAccent: "#ff3131",
				bgAccent: "#ff3131",
			},
		},
	},
	plugins: [],
};
