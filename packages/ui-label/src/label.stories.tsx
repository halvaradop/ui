import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "./index.js"
import { Input } from "../../ui-input/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

const meta: Meta = {
    title: "ui-label",
    tags: ["autodocs"],
    component: Label,
    args: {
        variant: "base",
        size: "base",
        children: "Username",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["base", "error", "flex"],
            description: "Variant of the label",
            table: {
                type: {
                    summary: "base | error | flex",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        size: {
            control: "select",
            options: ["sm", "base", "md"],
            description: "Size of the label",
            table: {
                type: {
                    summary: "sm | base | md",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        children: {
            control: "text",
            description: "Label text",
        },
    },
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "light",
            grid: true,
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle>Dialog component powered by React & TailwindCSS</Subtitle>
                    <Canvas />
                    <Controls />
                </>
            ),
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Label>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
}

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-x-5">
            <Label size="sm">Small</Label>
            <Label size="base">Base</Label>
            <Label size="md">Medium</Label>
        </div>
    ),
}

export const Flex: Story = {
    render: () => (
        <Label className="gap-y-5" variant="flex">
            <Label>Name</Label>
            <Label>Lastname</Label>
        </Label>
    ),
}

export const Error: Story = {
    render: () => (
        <Label>
            <Label htmlFor="error-story">Name</Label>
            <Input
                className="peer"
                variant="sensitive"
                placeholder="John@doe.com"
                type="email"
                id="error-story"
                required
            />
            <Label className="right-0" variant="error" size="sm" asChild>
                <span>Invalid email address</span>
            </Label>
        </Label>
    ),
}

export const WithAsChild: Story = {
    render: () => (
        <Label asChild>
            <span>Name</span>
        </Label>
    ),
}

export default meta
