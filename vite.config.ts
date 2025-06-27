import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { tailwindcss } from "@halvaradop/tailwind-config/tailwind-vite"

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {},
})
