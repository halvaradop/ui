import { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
    title: "ui-palette",
    tags: ["autodocs"],
    component: () => (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
            <span className="size-20 block rounded-md bg-primary" />
            <span className="size-20 block rounded-md bg-primary-hover" />

            <span className="size-20 block rounded-md bg-secondary" />
            <span className="size-20 block rounded-md bg-secondary-hover" />

            <span className="size-20 block rounded-md bg-red" />
            <span className="size-20 block rounded-md bg-red-hover" />

            <span className="size-20 block rounded-md bg-blue" />
            <span className="size-20 block rounded-md bg-blue-hover" />

            <span className="size-20 block rounded-md bg-green" />
            <span className="size-20 block rounded-md bg-green-hover" />

            <span className="size-20 block rounded-md bg-yellow" />
            <span className="size-20 block rounded-md bg-yellow-hover" />

            <span className="size-20 block rounded-md bg-ghost" />

            <span className="size-20 block rounded-md bg-input-border" />
            <span className="size-20 block rounded-md bg-input-background" />

            <span className="size-20 block rounded-md bg-disabled" />

            <span className="size-20 block rounded-md bg-modal" />
            <span className="size-20 block rounded-md bg-dialog" />
        </div>
    ),
    decorators: [],
}

type Story = StoryObj<typeof meta>

export const Base: Story = {}

export default meta
