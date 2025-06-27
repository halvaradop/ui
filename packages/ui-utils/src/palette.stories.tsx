import type { Meta, StoryObj } from "@storybook/react"
import { DecoratorWrapper } from "./decorator.js"

const colors = [
    { name: "color-primary", value: "bg-primary" },
    { name: "color-on-primary", value: "bg-on-primary" },
    { name: "color-secondary", value: "bg-secondary" },
    { name: "color-on-secondary", value: "bg-on-secondary" },
    { name: "color-muted", value: "bg-muted" },
    { name: "color-border", value: "bg-border" },
    { name: "color-success", value: "bg-success" },
    { name: "color-danger", value: "bg-danger" },
    { name: "color-overlay", value: "bg-overlay" },
    { name: "color-surface", value: "bg-surface" },
    { name: "color-on-surface", value: "bg-on-surface" },
    { name: "color-ghost", value: "bg-ghost" },
    { name: "color-disabled", value: "bg-disabled" },
]

const meta: Meta = {
    title: "ui-palette",
    tags: ["autodocs"],
    component: () => (
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
            {colors.map(({ name, value }) => (
                <div className="inline-block" key={name}>
                    <span className={`size-20 block rounded-2xl ${value}`} />
                    <span>{name}</span>
                </div>
            ))}
        </div>
    ),
    decorators: [DecoratorWrapper],
}

type Story = StoryObj<typeof meta>

export const Base: Story = {}

export default meta
