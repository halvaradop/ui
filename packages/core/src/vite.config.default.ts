import { resolve } from "path"
import { UserConfig } from "vite"
import dts from "vite-plugin-dts"

export const defaultConfig: UserConfig = {
	plugins: [
		dts({
			outDir: "dist",
			tsconfigPath: resolve("./tsconfig.json"),
		}),
	],
	build: {
		lib: {
			entry: resolve("src/index.ts"),
			formats: ["es", "cjs"],
			fileName: "index",
		},
		outDir: "dist",
		copyPublicDir: false,
		rollupOptions: {
			external: ["react", "react-dom", "tailwind-merge", "tailwindcss", "postcss", "rollup", "@vitejs/plugin-react-swc", "vite-plugin-dts", "path"],
		},
	},
}
