import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./index.js"

const meta: Meta = {
    title: "ui-checkbox",
    tags: ["autodocs"],
    component: Checkbox,
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
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof meta>

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">sm</span>
                <Checkbox size="sm" />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Checkbox size="base" />
            </div>
            <div>
                <span className="font-medium">mg</span>
                <Checkbox size="md" />
            </div>
            <div>
                <span className="font-medium">lg</span>
                <Checkbox size="lg" />
            </div>
        </>
    ),
}

export const Colors: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">Green</span>
                <Checkbox color="green" />
            </div>
            <div>
                <span className="font-medium">Blue</span>
                <Checkbox color="blue" />
            </div>
            <div>
                <span className="font-medium">Red</span>
                <Checkbox color="red" />
            </div>
            <div>
                <span className="font-medium">Yellow</span>
                <Checkbox color="yellow" />
            </div>
            <div>
                <span className="font-medium">Black</span>
                <Checkbox color="black" />
            </div>
        </>
    ),
}

export default meta
