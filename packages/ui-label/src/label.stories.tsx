import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "./index.js"
import { Input } from "../../ui-input/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"

const meta: Meta = {
    title: "ui-label",
    tags: ["autodocs"],
    component: Label,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "light",
            grid: true,
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Label>

type Story = StoryObj<typeof meta>

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-x-5">
            <Label size="sm">Small</Label>
            <Label size="base">Base</Label>
            <Label size="md">Medium</Label>
        </div>
    ),
}

export const Flex: Story = {
    render: () => (
        <Label className="gap-y-5" variant="flex">
            <Label>Name</Label>
            <Label>Lastname</Label>
        </Label>
    ),
}

export const Error: Story = {
    render: () => (
        <Label>
            <Label htmlFor="error-story">Name</Label>
            <Input
                className="peer"
                variant="sensitive"
                placeholder="John@doe.com"
                type="email"
                id="error-story"
                required
            />
            <Label className="right-0" variant="error" size="sm" asChild>
                <span>Invalid email address</span>
            </Label>
        </Label>
    ),
}

export const WithAsChild: Story = {
    render: () => (
        <Label asChild>
            <span>Name</span>
        </Label>
    ),
}

export default meta
