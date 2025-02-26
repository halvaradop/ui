import { defineConfig } from "tsup"
import { tsupConfig } from "@halvaradop/ui-utils/tsup.config.base"

export default defineConfig((options) => ({
    ...tsupConfig,
    minify: !options.watch,
    splitting: !options.watch,
}))
