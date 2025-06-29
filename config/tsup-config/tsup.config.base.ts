import type { Options } from "tsup"
/**
 * Base tsup configuration for all packages.
 */
export const tsupConfig: Options = {
    entry: ["src", "!src/decorator.tsx", "!src/docs-page.tsx", "!src/*.stories.tsx"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    //sourcemap: env !== "production",
    //minify: env === "production",
    //bundle: env === "production",
    external: ["vite", "tailwindcss", "react", "react-dom"],
    banner: {
        js: `"use client"`,
    },
}
