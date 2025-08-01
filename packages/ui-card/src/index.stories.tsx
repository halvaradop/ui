import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./index.js"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"

const meta: Meta = {
    title: "ui-card",
    tags: ["autodocs"],
    component: Card,
    args: {
        size: "base",
    },
    argTypes: {
        size: {
            description: "Size of the card",
            control: "select",
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
    },
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "light",
            grid: true,
        },
        docs: {
            page: () => <DocsPage subtitle="Template component powered by React & TailwindCSS" />,
        },
    },
    decorators: [DecoratorWrapper],
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
}

export const Variants: Story = {}

export default meta
