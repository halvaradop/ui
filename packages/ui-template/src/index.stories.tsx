import type { Meta, StoryObj } from "@storybook/react"
import { Index } from "./index.jsx"
import { decorator } from "@halvaradop/ui-utils/decorator"

const meta: Meta = {
    title: "ui-index",
    tags: ["autodocs"],
    component: Index,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "light",
            grid: true,
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Index>

type Story = StoryObj<typeof meta>

export const Variants: Story = {}

export default meta
