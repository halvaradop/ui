import { Input } from "./index.jsx"
import type { ArgTypes, Meta, StoryObj } from "@storybook/react"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

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
} satisfies Meta<typeof Input>

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
    render: ({ size, placeholder, disabled, fullRounded }) => {
        const variants = ["base", "line", "sensitive"]

        return (
            <>
                {variants.map((variant) => (
                    <div key={variant}>
                        <span className="font-medium">{variant}</span>
                        <Input
                            variant={variant as any}
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
    render: ({ variant, placeholder, disabled, fullRounded }) => {
        const sizes = ["sm", "base", "md", "lg"]

        return (
            <>
                {sizes.map((size) => (
                    <div key={size}>
                        <span className="font-medium">{size}</span>
                        <Input
                            size={size as any}
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
