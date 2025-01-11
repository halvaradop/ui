import type { Meta, StoryObj } from "@storybook/react"
import { Radio } from "./index.js"

const meta: Meta = {
    title: "ui-radio",
    tags: ["autodocs"],
    component: Radio,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const Small: Story = {
    render: () => <Radio size="sm" />,
}

export const Medium: Story = {
    render: () => <Radio size="md" />,
}

export const Large: Story = {
    render: () => <Radio size="lg" />,
}

export const Green: Story = {
    render: () => <Radio color="green" />,
}

export const Blue: Story = {
    render: () => <Radio color="blue" />,
}

export const Red: Story = {
    render: () => <Radio color="red" />,
}

export const Yellow: Story = {
    render: () => <Radio color="yellow" />,
}

export default meta
