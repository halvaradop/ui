import { defineConfig } from "tsup"
import { tsupConfig } from "./src/tsup.config.base.js"

export default defineConfig((options) => {
    console.log("options: ", options)
    return { ...tsupConfig, ...options }
})
