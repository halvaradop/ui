import type { Options } from "tsup"
/**
 * Base tsup configuration for all packages.
 */
export const tsupConfig: Options = {
    entry: ["src", "!src/decorator.tsx", "!src/docs-page.tsx", "!src/*.stories.tsx"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    external: ["vite", "tailwindcss", "react", "react-dom"],
    banner: {
        js: `"use client"`,
    },
}
