import type { Meta, StoryObj, ArgTypes } from "@storybook/react"
import { Button } from "./index.jsx"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

const variant: ArgTypes["variant"] = {
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
}

const size: ArgTypes["size"] = {
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
}

const meta: Meta = {
    title: "ui-button",
    tags: ["autodocs"],
    component: Button,
    args: {
        children: "Click me!",
        fullRounded: false,
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
        variant: "base",
    },
    argTypes: {
        size,
        variant,
    },
    parameters: {
        skipDecorator: true,
    },
}

export const Variants: Story = {
    args: {
        size: "base",
    },
    argTypes: {
        size,
    },
    render: ({ children, size, fullRounded }) => {
        const variants = ["base", "secondary", "ghost", "link", "destructive", "outline", "plain"]
        return (
            <>
                {variants.map((variant) => (
                    <div key={variant}>
                        <span className="font-medium capitalize">{variant}</span>
                        <Button variant={variant as any} size={size} fullRounded={fullRounded}>
                            {children}
                        </Button>
                    </div>
                ))}
            </>
        )
    },
}

export const Sizes: Story = {
    args: {
        variant: "base",
    },
    argTypes: {
        variant,
    },
    render: ({ children, variant, fullRounded }) => {
        const sizes = ["sm", "base", "md", "lg"]
        return (
            <>
                {sizes.map((size) => (
                    <div key={size}>
                        <span className="font-medium capitalize">{size}</span>
                        <Button size={size as any} variant={variant} fullRounded={fullRounded}>
                            {children}
                        </Button>
                    </div>
                ))}
            </>
        )
    },
}

export const AsAnchor: Story = {
    argTypes: {
        size,
    },
    render: (args) => (
        <Button variant="link" asChild {...args}>
            <a href="">Link</a>
        </Button>
    ),
}

export default meta
