import type { Meta, StoryObj } from "@storybook/react"
import { within, expect, userEvent } from "@storybook/test"
import { Toggle } from "./index.js"
import { DecoratorWrapper } from "@halvaradop/ui-utils/decorator"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"

const meta: Meta = {
    title: "ui-toggle",
    tags: ["autodocs"],
    component: Toggle,
    args: {
        color: "primary",
        size: "base",
        disabled: false,
        checked: false,
    },
    argTypes: {
        color: {
            control: "select",
            options: ["green", "primary", "secondary", "red"],
            description: "Variant of the toggle button",
            table: {
                type: {
                    summary: "base",
                },
                defaultValue: {
                    summary: "green | primary | secondary | red",
                },
            },
        },
        size: {
            control: "select",
            options: ["sm", "base", "md", "lg"],
            description: "Size of the toggle button",
            table: {
                type: {
                    summary: "sm | base | md | lg",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        disabled: {
            control: "boolean",
            description: "Disables the toggle button",
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {
                    summary: "false",
                },
            },
        },
        checked: {
            control: "boolean",
            description: "Controls the checked state of the toggle button",
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
            page: () => <DocsPage subtitle="Template component powered by React & TailwindCSS" />,
        },
    },
    decorators: [DecoratorWrapper],
} satisfies Meta<typeof Toggle>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const Sizes: Story = {
    render: ({ color, disabled, checked }) => (
        <>
            <Toggle color={color} size="sm" disabled={disabled} checked={checked} />
            <Toggle color={color} size="base" disabled={disabled} checked={checked} />
            <Toggle color={color} size="md" disabled={disabled} checked={checked} />
            <Toggle color={color} size="lg" disabled={disabled} checked={checked} />
        </>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const toggles = await canvas.findAllByRole("switch")
        for (const toggle of toggles) {
            await new Promise((resolve) => setTimeout(resolve, 750))
            await userEvent.click(toggle)
            expect(toggle).toHaveAttribute("aria-checked", "true")
            expect(toggle).toHaveAttribute("data-checked", "true")
        }
        for (const toggle of toggles) {
            await new Promise((resolve) => setTimeout(resolve, 750))
            await userEvent.click(toggle)
            expect(toggle).toHaveAttribute("aria-checked", "false")
            expect(toggle).toHaveAttribute("data-checked", "false")
        }
    },
}

export default meta
