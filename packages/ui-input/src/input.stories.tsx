import type { ArgTypes, Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { type InputProps, Input, inputVariants } from "./index.jsx"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"

const size: ArgTypes["size"] = {
    control: "select",
    options: ["sm", "base", "md", "lg"],
    description: "Size of the input",
    table: {
        type: {
            summary: "sm | base | md | lg",
        },
        defaultValue: {
            summary: "base",
        },
    },
}

const variant: ArgTypes["variant"] = {
    control: "select",
    options: ["base", "line", "sensitive"],
    description: "Variant of the input",
    table: {
        type: {
            summary: "base | line | sensitive",
        },
        defaultValue: {
            summary: "base",
        },
    },
}

const meta: Meta = {
    title: "ui-input",
    tags: ["autodocs"],
    component: Input,
    args: {
        fullRounded: false,
        placeholder: "John Doe.",
        disabled: false,
    },
    argTypes: {
        placeholder: {
            control: "text",
            description: "Placeholder of the input",
        },
        fullRounded: {
            control: "boolean",
            description: "Rounded input",
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
            description: "Disabled input",
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
            page: () => <DocsPage subtitle="Input component powered by React & TailwindCSS" />,
        },
    },
    decorators: [DecoratorWrapper],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const inputs = canvas.getAllByRole("textbox")
        for (const input of inputs) {
            await userEvent.type(input, "John Doe", { delay: 102 })
            await expect(input).toHaveValue("John Doe")
        }
    },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>
type StoryArgs = InputProps<typeof inputVariants>

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
    render: ({ size, placeholder, disabled, fullRounded }: StoryArgs) => {
        const variants = ["base", "line", "sensitive"] as StoryArgs["variant"][]

        return (
            <>
                {variants.map((variant) => (
                    <div key={variant}>
                        <span className="font-medium">{variant}</span>
                        <Input
                            type={variant === "sensitive" ? "email" : "text"}
                            variant={variant}
                            size={size}
                            disabled={disabled}
                            placeholder={placeholder}
                            fullRounded={fullRounded}
                        />
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
    render: ({ variant, placeholder, disabled, fullRounded }: StoryArgs) => {
        const sizes = ["sm", "base", "md", "lg"] as StoryArgs["size"][]

        return (
            <>
                {sizes.map((size) => (
                    <div key={size}>
                        <span className="font-medium">{size}</span>
                        <Input
                            size={size}
                            variant={variant}
                            disabled={disabled}
                            placeholder={placeholder}
                            fullRounded={fullRounded}
                        />
                    </div>
                ))}
            </>
        )
    },
}

export default meta
