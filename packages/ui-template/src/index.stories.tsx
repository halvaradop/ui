import type { Meta, StoryObj } from "@storybook/react"
import { Index } from "./index.jsx"

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
    decorators: [
        (Story) => (
            <div className="w-full h-full mx-auto flex items-center justify-center absolute inset-0">
                <div className="w-full">
                    <section className="story-container">
                        <Story />
                    </section>
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof Index>

type Story = StoryObj<typeof meta>

export const Variants: Story = {}

export default meta
