import type { Config } from "tailwindcss"
import { join, dirname } from "path"

// prettier-ignore
const config: Config = {
	content: {
		relative: false,
		files: [
			"./ui/**/*.{js,ts,jsx,tsx,mdx}", 
			"./app/**/*.{js,ts,jsx,tsx,mdx}", 
			"./packages/**/*.{js,ts,jsx,tsx,mdx}",
			"./node_modules/**/*.{js,ts,jsx,tsx,mdx}",
			"./node_modules/@halvaradop/**/*.{js,ts,jsx,tsx,mdx}",
		]
	},
	darkMode: "class",
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			screens: {
				base: "900px",
			},
		},
	},
	plugins: [],
}

export default config
