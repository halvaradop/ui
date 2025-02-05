import type { Meta, StoryObj } from "@storybook/react"
import { Form } from "./index.js"
import { Input } from "../../ui-input/src/index.js"
import { Label } from "../../ui-label/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

const meta: Meta = {
    title: "ui-form",
    tags: ["autodocs"],
    component: Form,
    args: {
        variant: "base",
        size: "base",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["base", "outline", "inner", "ghost"],
            description: "Variant of the form",
            table: {
                type: {
                    summary: "base | outline | inner | ghost",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        size: {
            control: "select",
            options: ["sm", "base", "md", "lg", "full"],
            description: "Size of the form",
            table: {
                type: {
                    summary: "sm | base | md | lg | full",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
    },
    parameters: {
        layout: "centered",
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle>Form component powered by React & TailwindCSS</Subtitle>
                    <Canvas />
                    <Controls />
                </>
            ),
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Form>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    render: ({ size, variant }) => (
        <Form size={size} variant={variant}>
            <Label>
                Username
                <Input />
            </Label>
            <Label>
                Password
                <Input />
            </Label>
        </Form>
    ),
}

export default meta
