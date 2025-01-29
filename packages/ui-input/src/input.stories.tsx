import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./index.jsx"

const meta: Meta = {
    title: "ui-input",
    tags: ["autodocs"],
    component: Input,
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
                    <section className="story-container bg-green-">
                        <Story />
                    </section>
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">base</span>
                <Input variant="base" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">line</span>
                <Input variant="line" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">sensitive</span>
                <Input variant="sensitive" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">disabled</span>
                <Input variant="base" placeholder="John Doe." disabled />
            </div>
        </>
    ),
}

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">small</span>
                <Input size="sm" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Input size="base" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">medium</span>
                <Input size="md" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">large</span>
                <Input size="lg" placeholder="John Doe." />
            </div>
        </>
    ),
}

export default meta
