import { Options } from "tsup"

export const tsupConfig: Options = {
	entry: ["src"],
	format: ["esm", "cjs"],
	dts: true,
	clean: true,
	splitting: false,
	minify: true,
	external: ["vite", "react", "react-dom", "tailwindcss"],
}
