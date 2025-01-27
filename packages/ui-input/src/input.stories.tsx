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
                    <section className="story-container">
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
                <Input variant="base" />
            </div>
            <div>
                <span className="font-medium">outline</span>
                <Input variant="outline" />
            </div>
            <div>
                <span className="font-medium">disabled</span>
                <Input variant="disabled" />
            </div>
            <div>
                <span className="font-medium">required</span>
                <Input variant="required" />
            </div>
        </>
    ),
}

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">small</span>
                <Input size="sm" />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Input size="base" />
            </div>
            <div>
                <span className="font-medium">medium</span>
                <Input size="md" />
            </div>
            <div>
                <span className="font-medium">large</span>
                <Input size="lg" />
            </div>
        </>
    ),
}

export const FullWidth: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">FullWidth</span>
                <Input fullWidth placeholder="FullWidth input" />
            </div>
            <div>
                <span className="font-medium">FullRounded</span>
                <Input fullWidth={false} placeholder="FullRounded input" />
            </div>
        </>
    ),
}

export default meta
