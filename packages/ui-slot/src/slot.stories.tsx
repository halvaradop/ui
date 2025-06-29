import type { Meta, StoryObj } from "@storybook/react"
import { type SlotProps, Slot } from "./index.js"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"

const meta: Meta = {
    title: "ui-slot",
    tags: ["autodocs"],
    component: Slot,
    args: {
        children: "div",
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
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        asChild: {
            control: "boolean",
            description: "Make the slot a child of the component",
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
            page: () => <DocsPage subtitle="Slot component" />,
        },
    },
    decorators: [DecoratorWrapper],
} satisfies Meta<SlotProps<"div">>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    render: ({ children, asChild }) => {
        const Component = asChild ? Slot : "div"
        return <Component>{children}</Component>
    },
}

export default meta
