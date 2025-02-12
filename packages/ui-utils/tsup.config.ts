import { defineConfig } from "tsup"
import { tsupConfig } from "./src/tsup.config.base"

export default defineConfig((options) => ({
    ...tsupConfig,
    minify: !options.watch,
    splitting: !options.watch,
}))
