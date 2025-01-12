import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./index.jsx"

const meta: Meta = {
    title: "ui-button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Button",
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        variant: "base",
    },
}

export const Ghost: Story = {
    args: {
        variant: "ghost",
    },
}

export const Link: Story = {
    args: {
        variant: "link",
    },
}

export const Destructive: Story = {
    args: {
        variant: "destructive",
    },
}

export const Outline: Story = {
    args: {
        variant: "outline",
    },
}

export const Small: Story = {
    args: {
        size: "sm",
    },
}

export const Medium: Story = {
    args: {
        size: "md",
    },
}

export const Large: Story = {
    args: {
        size: "lg",
    },
}

export const AsAnchor: Story = {
    render: () => (
        <Button variant="link" asChild>
            <a href="">Link</a>
        </Button>
    ),
}

export default meta
