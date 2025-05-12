import type { StorybookConfig } from "@storybook/react-vite"
import { join, dirname } from "path"
import * as path from "path"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string): string => {
    return dirname(require.resolve(join(value, "package.json")))
}

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../packages/**/*.mdx",
        "!../node_modules/**",
    ],
    addons: [
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@chromatic-com/storybook"),
        getAbsolutePath("@storybook/addon-interactions"),
    ],
    framework: {
        name: getAbsolutePath("@storybook/react-vite"),
        options: {},
    },
    viteFinal: async (config) => {
        config.resolve = {
            alias: {
                "@": path.resolve(__dirname, "../packages"),
            },
        }
        return config
    },
}

export default config
