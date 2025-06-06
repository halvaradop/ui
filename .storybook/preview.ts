import type { Preview } from "@storybook/react"
import "../tailwind.css"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: "light",
            values: [
                {
                    name: "light",
                    value: "#ffffff",
                },
                {
                    name: "dark",
                    value: "#000",
                },
            ],
            grid: {
                cellSize: 20,
                opacity: 0.5,
                cellAmount: 5,
                offsetX: 16,
                offsetY: 16,
            },
        },
        docs: {
            toc: true,
        },
    },
}

export default preview
