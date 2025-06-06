import type { ArgTypes, Meta, StoryObj } from "@storybook/react"
import { Label } from "./index.js"
import { Input } from "@/ui/ui-input/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"

const size: ArgTypes["size"] = {
    control: "select",
    options: ["sm", "base", "md"],
    description: "Size of the label",
    table: {
        type: {
            summary: "sm | base | md",
        },
        defaultValue: {
            summary: "base",
        },
    },
}

const variant: ArgTypes["variant"] = {
    control: "select",
    options: ["default", "required"],
    description: "Variant of the label",
    table: {
        type: {
            summary: "base | required",
        },
        defaultValue: {
            summary: "base",
        },
    },
}

const meta: Meta = {
    title: "ui-label",
    tags: ["autodocs"],
    component: Label,
    args: {
        children: "Username",
    },
    argTypes: {
        children: {
            control: "text",
            description: "Label text",
        },
    },
    parameters: {
        layout: "centered",
        backgrounds: {
            grid: true,
        },
        docs: {
            page: () => <DocsPage subtitle="Label component powered by React & TailwindCSS" />,
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Label>

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

export const Sizes: Story = {
    args: {
        variant: "base",
    },
    argTypes: {
        variant,
    },
    render: ({ children, variant }) => (
        <div className="w-full flex items-center gap-x-5">
            <Label size="sm" variant={variant}>
                {children}
            </Label>
            <Label size="base" variant={variant}>
                {children}
            </Label>
            <Label size="md" variant={variant}>
                {children}
            </Label>
        </div>
    ),
}

export const Error: Story = {
    render: () => (
        <div className="relative">
            <Label htmlFor="error-story">Name</Label>
            <Input
                className="peer"
                variant="sensitive"
                placeholder="John@doe.com"
                type="email"
                id="error-story"
                required
            />
            <Label className="right-0" variant="required" size="sm" asChild>
                <span>Invalid email address</span>
            </Label>
        </div>
    ),
}

export default meta
