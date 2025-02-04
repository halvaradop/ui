import { Input } from "./index.jsx"
import type { Meta, StoryObj } from "@storybook/react"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

const meta: Meta = {
    title: "ui-input",
    tags: ["autodocs"],
    component: Input,
    args: {
        placeholder: "John Doe.",
        size: "base",
        variant: "base",
        fullRounded: false,
    },
    argTypes: {
        variant: {
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
        },
        size: {
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
        },
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
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
}

export const Variants: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">base</span>
                <Input variant="base" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">line</span>
                <Input variant="line" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">sensitive</span>
                <Input variant="sensitive" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">disabled</span>
                <Input variant="base" placeholder="John Doe." disabled />
            </div>
        </>
    ),
}

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">small</span>
                <Input size="sm" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Input size="base" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">medium</span>
                <Input size="md" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">large</span>
                <Input size="lg" placeholder="John Doe." />
            </div>
        </>
    ),
}

export default meta
