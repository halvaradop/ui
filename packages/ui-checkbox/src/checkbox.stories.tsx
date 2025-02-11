import type { ArgTypes, Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"

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
    options: ["green", "blue", "red", "yellow", "primary"],
    description: "Color of the checkbox",
    table: {
        type: {
            summary: "green | blue | red | yellow | primary",
        },
        defaultValue: {
            summary: "green",
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
    decorators: [decorator],
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof meta>

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
    render: (args) => (
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
    render: (args) => (
        <>
            <div>
                <span className="font-medium">Green</span>
                <Checkbox color="green" {...args} />
            </div>
            <div>
                <span className="font-medium">Blue</span>
                <Checkbox color="blue" {...args} />
            </div>
            <div>
                <span className="font-medium">Red</span>
                <Checkbox color="red" {...args} />
            </div>
            <div>
                <span className="font-medium">Yellow</span>
                <Checkbox color="yellow" {...args} />
            </div>
            <div>
                <span className="font-medium">primary</span>
                <Checkbox color="primary" {...args} />
            </div>
        </>
    ),
}

export default meta
