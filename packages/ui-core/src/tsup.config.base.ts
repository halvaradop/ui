import { Options } from "tsup"

/**
 * Base tsup configuration for all packages.
 */
export const tsupConfig: Options = {
    entry: ["src", "!src/**/*.stories.tsx"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    minify: true,
    treeshake: true,
    external: ["vite", "tailwindcss", "react", "react-dom"],
}
