import type { Meta, StoryObj, ArgTypes } from "@storybook/react"
import { userEvent, within } from "@storybook/test"
import { type ButtonProps, Button, buttonVariants } from "./index.jsx"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"

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
        disabled: {
            control: "boolean",
            description: "Disable the button",
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
            page: () => <DocsPage subtitle="Button Component powered by React & TailwindCSS" />,
        },
    },
    decorators: [DecoratorWrapper],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>
type StoryArgs = ButtonProps<typeof buttonVariants> & { disabled?: boolean }

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
    render: ({ children, size, fullRounded, disabled }: StoryArgs) => {
        const variants = [
            "base",
            "secondary",
            "ghost",
            "link",
            "destructive",
            "outline",
            "plain",
        ] as StoryArgs["variant"][]
        return (
            <>
                {variants.map((variant) => (
                    <div key={variant}>
                        <span className="block font-medium capitalize">{variant}</span>
                        <Button variant={variant} size={size} fullRounded={fullRounded} disabled={disabled}>
                            {children}
                        </Button>
                    </div>
                ))}
            </>
        )
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const buttons = await canvas.findAllByRole("button")
        for (const button of buttons.slice(1)) {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            button.focus()
            await userEvent.tab()
        }
    },
}

export const Sizes: Story = {
    args: {
        variant: "base",
    },
    argTypes: {
        variant,
    },
    render: ({ children, variant, fullRounded, disabled }: StoryArgs) => {
        const sizes = ["sm", "base", "md", "lg"] as StoryArgs["size"][]
        return (
            <>
                {sizes.map((size) => (
                    <div key={size}>
                        <span className="font-medium capitalize">{size}</span>
                        <Button size={size} variant={variant} fullRounded={fullRounded} disabled={disabled}>
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
            <a href="/">Link</a>
        </Button>
    ),
}

export default meta
