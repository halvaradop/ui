import type { ArgTypes, Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import { Submit } from "./index.js"
import { DecoratorWrapper } from "@halvaradop/ui-utils/decorator"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"

const size: ArgTypes["size"] = {
    control: "select",
    options: ["sm", "base", "md", "lg"],
    description: "The size of the button",
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
    options: ["base", "secondary"],
    description: "The variant of the button",
    table: {
        type: {
            summary: "base | secondary",
        },
        defaultValue: {
            summary: "base",
        },
    },
}

const meta: Meta = {
    title: "ui-submit",
    tags: ["autodocs"],
    component: Submit,
    args: {
        disabled: false,
        value: "Submit",
        pending: "Submitting...",
    },
    argTypes: {
        value: {
            description: "The text to display on the button",
        },
        pending: {
            description: "The text to display on the button when it's in a pending state",
        },
        disabled: {
            description: "Whether the button is disabled",
            table: {
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
            page: () => <DocsPage subtitle="Submit component powered by React & TailwindCSS" />,
        },
    },
    decorators: [DecoratorWrapper],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const buttons = canvas.getAllByRole("button")
        for (const button of buttons.slice(1)) {
            await expect(button).toBeInTheDocument()
            button.setAttribute("disabled", "true")
            await expect(button).toBeDisabled()
            await new Promise((resolve) => setTimeout(resolve, 500))
            button.removeAttribute("disabled")
            await expect(button).not.toBeDisabled()
        }
    },
} satisfies Meta<typeof Submit>

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
    render: ({ size, disabled, pending, value }) => {
        const variants = ["base", "secondary"]
        return (
            <>
                {variants.map((variant) => (
                    <div key={variant}>
                        <span className="font-medium block">{variant}</span>
                        <Submit
                            variant={variant as any}
                            size={size}
                            value={value}
                            pending={pending}
                            disabled={disabled}
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
    render: ({ value, pending, disabled, variant }) => {
        const sizes = ["sm", "base", "md", "lg"]
        return (
            <>
                {sizes.map((size) => (
                    <div key={size}>
                        <span className="font-medium block">{size}</span>
                        <Submit
                            size={size as any}
                            variant={variant}
                            value={value}
                            pending={pending}
                            disabled={disabled}
                        />
                    </div>
                ))}
            </>
        )
    },
}

export default meta
