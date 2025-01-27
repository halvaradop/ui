import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./index.jsx"

const meta: Meta = {
    title: "ui-button",
    tags: ["autodocs"],
    component: Button,
    args: {
        children: "Button",
    },
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
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">Base</span>
                <Button variant="base">Click me!</Button>
            </div>
            <div>
                <span className="font-medium">Ghost</span>
                <Button variant="ghost">Click me!</Button>
            </div>
            <div>
                <span className="font-medium">Link</span>
                <Button variant="link">Click me!</Button>
            </div>
            <div>
                <span className="font-medium">Destructive</span>
                <Button variant="destructive">Click me!</Button>
            </div>
            <div>
                <span className="font-medium">Outline</span>
                <Button variant="outline">Click me!</Button>
            </div>
        </>
    ),
}

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">sm</span>
                <Button size="sm">Click me!</Button>
            </div>
            <div>
                <span className="font-medium">base</span>
                <Button size="base">Click me!</Button>
            </div>
            <div>
                <span className="font-medium">md</span>
                <Button size="md">Click me!</Button>
            </div>
            <div>
                <span className="font-medium">lg</span>
                <Button size="lg">Click me!</Button>
            </div>
        </>
    ),
}

export const AsAnchor: Story = {
    render: () => (
        <Button variant="link" asChild>
            <a href="">Link</a>
        </Button>
    ),
}

export default meta
