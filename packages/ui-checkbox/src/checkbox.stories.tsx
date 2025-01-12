import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./index.js"

const meta: Meta = {
    title: "ui-checkbox",
    tags: ["autodocs"],
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof meta>

export const Small: Story = {
    args: {
        size: "sm",
    },
}

export const Base: Story = {}

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

export const Green: Story = {
    args: {
        color: "green",
    },
}

export const Blue: Story = {
    args: {
        color: "blue",
    },
}

export const Red: Story = {
    args: {
        color: "red",
    },
}

export const Yellow: Story = {
    args: {
        color: "yellow",
    },
}

export const Black: Story = {
    args: {
        color: "black",
    },
}

export default meta
