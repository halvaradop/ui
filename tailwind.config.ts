import type { Config } from "tailwindcss"
import utilities from "@halvaradop/tailwindcss-utilities"

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
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
