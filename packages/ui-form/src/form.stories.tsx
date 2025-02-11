import type { Meta, StoryObj } from "@storybook/react"
import { Form } from "./index.js"
import { Input } from "../../ui-input/src/index.js"
import { Label } from "../../ui-label/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"

const meta: Meta = {
    title: "ui-form",
    tags: ["autodocs"],
    component: Form,
    parameters: {
        layout: "centered",
    },
    decorators: [decorator],
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
    render: () => <Template />,
}

export const Outline: Story = {
    render: () => <Template variant="outline" />,
}

export const Inner: Story = {
    render: () => <Template variant="inner" />,
}

export const Ghost: Story = {
    render: () => <Template variant="ghost" />,
}

export const Small: Story = {
    render: () => <Template size="sm" />,
}

export const Medium: Story = {
    render: () => <Template size="md" />,
}

export const Large: Story = {
    render: () => <Template size="lg" />,
}

export default meta
