import type { Meta, StoryObj } from "@storybook/react"
import { Radio } from "./index.js"

const meta: Meta = {
    title: "ui-radio",
    tags: ["autodocs"],
    component: Radio,
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
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof meta>

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">sm</span>
                <Radio size="sm" />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Radio size="base" />
            </div>
            <div>
                <span className="font-medium">md</span>
                <Radio size="md" />
            </div>
            <div>
                <span className="font-medium">lg</span>
                <Radio size="lg" />
            </div>
        </>
    ),
}

export const Colors: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">green</span>
                <Radio color="green" />
            </div>
            <div>
                <span className="font-medium">blue</span>
                <Radio color="blue" />
            </div>
            <div>
                <span className="font-medium">red</span>
                <Radio color="red" />
            </div>
            <div>
                <span className="font-medium">yellow</span>
                <Radio color="yellow" />
            </div>
            <div>
                <span className="font-medium">black</span>
                <Radio color="black" />
            </div>
        </>
    ),
}

export default meta
