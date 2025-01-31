import type { Meta, StoryObj } from "@storybook/react"
import { Form } from "./index.js"
import { Input } from "../../ui-input/src/index.js"
import { Label } from "../../ui-label/src/index.js"

const meta: Meta = {
    title: "ui-form",
    tags: ["autodocs"],
    component: Form,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Form>

type Story = StoryObj<typeof meta>

const Template = ({ ...props }: Omit<Parameters<typeof Form>[0], "children">) => (
    <Form {...props}>
        <Label>
            Username
            <Input />
        </Label>
        <Label>
            Password
            <Input />
        </Label>
    </Form>
)

export const Base: Story = {
    render: Template,
}

export const Outline: Story = {
    render: () => <Template variant="outline" />,
}

export const Filled: Story = {
    render: () => <Template variant="filled" />,
}

export const Ghost: Story = {
    render: () => <Template variant="ghost" />,
}

export const Small: Story = {
    render: () => <Template variant="outline" size="sm" />,
}

export const Medium: Story = {
    render: () => <Template variant="outline" size="md" />,
}

export const Large: Story = {
    render: () => <Template variant="outline" size="lg" />,
}

export default meta
