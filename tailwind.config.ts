import type { Config } from "tailwindcss"
import utilities from "@halvaradop/tailwindcss-utilities"

const config: Config = {
	content: ["./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./packages/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	future: {
		hoverOnlyWhenSupported: true
	},	
	theme: {
		extend: {
			screens: {
				base: "900px",
			},
		},
	},
	plugins: [utilities],
}
export default config
