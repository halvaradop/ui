import { defineConfig } from "tsup"
import { tsupConfig } from "@ui/tsup-config"

export default defineConfig((options) => {
    const env = options.env?.NODE_ENV
    return {
        ...tsupConfig,
        sourcemap: env !== "production",
        minify: env === "production",
        bundle: env === "production",
        banner: {},
        ...options,
    }
})
