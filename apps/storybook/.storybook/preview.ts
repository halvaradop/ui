import type { Preview } from "@storybook/react"
import "@halvaradop/tailwind-config"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
