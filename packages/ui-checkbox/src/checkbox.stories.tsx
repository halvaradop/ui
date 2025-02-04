import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

const meta: Meta = {
    title: "ui-checkbox",
    tags: ["autodocs"],
    component: Checkbox,
    args: {
        size: "base",
        color: "green",
    },
    argTypes: {
        size: {
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
        },
        color: {
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
        },
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
            default: "light",
            grid: true,
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle>Checkbox component powered by React & TailwindCSS</Subtitle>
                    <Canvas />
                    <Controls />
                </>
            ),
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
}

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">sm</span>
                <Checkbox size="sm" />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Checkbox size="base" />
            </div>
            <div>
                <span className="font-medium">mg</span>
                <Checkbox size="md" />
            </div>
            <div>
                <span className="font-medium">lg</span>
                <Checkbox size="lg" />
            </div>
        </>
    ),
}

export const Colors: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">Green</span>
                <Checkbox color="green" />
            </div>
            <div>
                <span className="font-medium">Blue</span>
                <Checkbox color="blue" />
            </div>
            <div>
                <span className="font-medium">Red</span>
                <Checkbox color="red" />
            </div>
            <div>
                <span className="font-medium">Yellow</span>
                <Checkbox color="yellow" />
            </div>
            <div>
                <span className="font-medium">primary</span>
                <Checkbox color="primary" />
            </div>
        </>
    ),
}

export default meta
