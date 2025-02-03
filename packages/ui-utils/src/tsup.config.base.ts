import { Options } from "tsup"

/**
 * Base tsup configuration for all packages.
 */
export const tsupConfig: Options = {
    entry: ["src", "!src/*.stories.tsx", "!src/*.mdx"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    minify: true,
    external: ["vite", "tailwindcss"],
}
