import { defineConfig } from "tsup"
import { tsupConfig } from "@halvaradop/tsup-config"

export default defineConfig((options) => {
    const env = options.env?.NODE_ENV
    return {
        ...tsupConfig,
        sourcemap: env !== "production",
        minify: env === "production",
        bundle: env === "production",
        ...options,
    }
})
