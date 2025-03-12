import { Options } from "tsup"

/**
 * Base tsup configuration for all packages.
 */
export const tsupConfig: Options = {
    entry: ["src", "!src/decorator.tsx", "!src/docs-page.tsx", "!src/*.stories.tsx"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    minify: true,
    external: ["vite", "tailwindcss"],
    sourcemap: process.env.NODE_ENV !== "production",
}
