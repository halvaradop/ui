import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./index.jsx"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

const meta: Meta = {
    title: "ui-button",
    tags: ["autodocs"],
    component: Button,
    args: {
        children: "Button",
        variant: "base",
    },
    argTypes: {
        children: {
            description: "The content of the Component",
            control: {
                type: "text",
            },
            table: {
                type: {
                    summary: "ReactNode | String",
                },
            },
        },
        variant: {
            control: "select",
            description: "The variant of the button",
            options: ["base", "secondary", "ghost", "link", "destructive", "outline", "plain"],
            table: {
                type: {
                    summary: "base | secondary | ghost | link | destructive | outline | plain",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        size: {
            control: "select",
            description: "Size of the button",
            options: ["sm", "base", "md", "lg"],
            table: {
                type: {
                    summary: "sm | base | md | lg",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        fullRounded: {
            control: "boolean",
            description: "Make the button full rounded",
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {
                    summary: "false",
                },
            },
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
                    <Subtitle>Button Component powered by React & TailwindCSS</Subtitle>
                    <Canvas />
                    <Controls />
                </>
            ),
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        size: "base",
    },
    parameters: {
        skipDecorator: true,
    },
}

export const Variants: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">Base</span>
                <Button variant="base">Click me!</Button>
            </div>
            <div>
                <span className="font-medium">Secondary</span>
                <Button variant="secondary">Click me!</Button>
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
            <div>
                <span className="font-medium">Plain</span>
                <Button variant="plain">Click me!</Button>
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
