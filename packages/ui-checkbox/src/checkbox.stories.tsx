import type { ArgTypes, Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { type CheckboxProps, Checkbox, checkboxVariants } from "./index.js"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"

const size: ArgTypes["size"] = {
    control: "select",
    options: ["sm", "base", "md", "lg"],
    description: "Size of the checkbox",
    table: {
        type: {
            summary: "sm | base | md | lg",
        },
        defaultValue: {
            summary: "base",
        },
    },
}

const color: ArgTypes["color"] = {
    control: "select",
    options: ["primary", "secondary", "green", "blue", "red", "yellow"],
    description: "Color of the checkbox",
    table: {
        type: {
            summary: "primary | secondary | green | blue | red | yellow",
        },
        defaultValue: {
            summary: "primary",
        },
    },
}

const meta: Meta = {
    title: "ui-checkbox",
    tags: ["autodocs"],
    component: Checkbox,
    args: {
        fullRounded: false,
    },
    argTypes: {
        fullRounded: {
            control: "boolean",
            description: "Make the checkbox full rounded",
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
            description: "Disable the checkbox",
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
            page: () => <DocsPage subtitle="Checkbox component powered by React & TailwindCSS" />,
        },
    },
    decorators: [DecoratorWrapper],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const checkboxs = await canvas.findAllByRole("checkbox")
        for (const checkbox of checkboxs) {
            await new Promise((resolve) => setTimeout(resolve, 750))
            checkbox.focus()
            await expect(checkbox).toHaveFocus()
            await userEvent.click(checkbox)
            await expect(checkbox).toBeChecked()
            await new Promise((resolve) => setTimeout(resolve, 750))
            await userEvent.click(checkbox)
            await expect(checkbox).not.toBeChecked()
        }
    },
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof meta>
type StoryArgs = CheckboxProps<typeof checkboxVariants>

export const Base: Story = {
    args: {
        size: "base",
        color: "green",
    },
    argTypes: {
        size,
        color,
    },
    parameters: {
        skipDecorator: true,
    },
}

export const Sizes: Story = {
    args: {
        color: "green",
    },
    argTypes: {
        color,
    },
    render: (args: StoryArgs) => (
        <>
            <div>
                <span className="font-medium">sm</span>
                <Checkbox size="sm" {...args} />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Checkbox size="base" {...args} />
            </div>
            <div>
                <span className="font-medium">mg</span>
                <Checkbox size="md" {...args} />
            </div>
            <div>
                <span className="font-medium">lg</span>
                <Checkbox size="lg" {...args} />
            </div>
        </>
    ),
}

export const Colors: Story = {
    args: {
        size: "base",
    },
    argTypes: {
        size,
    },
    render: (args: StoryArgs) => (
        <>
            <div>
                <span className="font-medium">Primary</span>
                <Checkbox color="primary" {...args} />
            </div>
            <div>
                <span className="font-medium">Secondary</span>
                <Checkbox color="secondary" {...args} />
            </div>
            <div>
                <span className="font-medium">Green</span>
                <Checkbox color="green" {...args} />
            </div>
            <div>
                <span className="font-medium">Red</span>
                <Checkbox color="red" {...args} />
            </div>
        </>
    ),
}

export default meta
