import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./index.js"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"

const meta: Meta = {
    title: "ui-textarea",
    tags: ["autodocs"],
    component: Textarea,
    argTypes: {
        variant: {
            control: "select",
            description: "The variant of the textarea",
            options: ["base"],
            table: {
                type: {
                    summary: "base",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        size: {
            control: "select",
            description: "The size of the textarea",
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
        resize: {
            control: "select",
            description: "Resize behavior of the textarea",
            options: ["content", "vertical", "horizontal", "both"],
            table: {
                type: {
                    summary: "content | vertical | horizontal | both",
                },
                defaultValue: {
                    summary: "both",
                },
            },
        },
        fullWidth: {
            control: "boolean",
            description: "Make the textarea full width",
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {
                    summary: "false",
                },
            },
        },
        fullRounded: {
            control: "boolean",
            description: "Make the textarea fully rounded",
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
            description: "Disable the textarea",
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
                <DocsPage subtitle="Accessible and customizable textarea component powered by React & TailwindCSS" />
            ),
        },
    },
    decorators: [DecoratorWrapper],
} satisfies Meta<typeof Textarea>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    args: {
        placeholder: "Enter your message...",
    },
    argTypes: {
        placeholder: {
            control: "text",
            description: "Placeholder text for the textarea",
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {
                    summary: "Enter your message...",
                },
            },
        },
    },
}

export const Variants: Story = {
    render: () => (
        <div className="space-y-4 w-80">
            <div>
                <div className="block text-sm font-medium mb-2">Base Variant</div>
                <Textarea variant="base" placeholder="Base textarea..." />
            </div>
        </div>
    ),
}

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4 w-80">
            <div>
                <div className="block text-sm font-medium mb-2">Small</div>
                <Textarea size="sm" placeholder="Small textarea..." />
            </div>
            <div>
                <div className="block text-sm font-medium mb-2">Base</div>
                <Textarea size="base" placeholder="Base textarea..." />
            </div>
            <div>
                <div className="block text-sm font-medium mb-2">Medium</div>
                <Textarea size="md" placeholder="Medium textarea..." />
            </div>
            <div>
                <div className="block text-sm font-medium mb-2">Large</div>
                <Textarea size="lg" placeholder="Large textarea..." />
            </div>
        </div>
    ),
}

export const ResizeOptions: Story = {
    render: () => (
        <div className="space-y-4 w-80">
            <div>
                <div className="block text-sm font-medium mb-2">Resize Content</div>
                <Textarea resize="content" placeholder="Cannot be resized..." />
            </div>
            <div>
                <div className="block text-sm font-medium mb-2">Vertical Resize</div>
                <Textarea resize="vertical" placeholder="Resize vertically only..." />
            </div>
            <div>
                <div className="block text-sm font-medium mb-2">Horizontal Resize</div>
                <Textarea resize="horizontal" placeholder="Resize horizontally only..." />
            </div>
            <div>
                <div className="block text-sm font-medium mb-2">Both Directions</div>
                <Textarea resize="both" placeholder="Resize in both directions..." />
            </div>
        </div>
    ),
}

export const States: Story = {
    render: () => (
        <div className="space-y-4 w-80">
            <div>
                <div className="block text-sm font-medium mb-2">Normal</div>
                <Textarea placeholder="Normal state..." />
            </div>
            <div>
                <div className="block text-sm font-medium mb-2">Disabled</div>
                <Textarea disabled placeholder="Disabled state..." />
            </div>
            <div>
                <div className="block text-sm font-medium mb-2">With Value</div>
                <Textarea defaultValue="This textarea has some content in it that spans multiple lines to demonstrate how it looks with actual text content." />
            </div>
        </div>
    ),
}

export default meta
