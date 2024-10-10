import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "./index.js"
import { Input } from "../../ui-input/src/index.js"

const meta: Meta = {
    title: "ui-label",
    tags: ["autodocs"],
    component: Label,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Label>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        children: "Name",
    },
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
            <Input className="peer" variant="required" placeholder="John@doe.com" type="email" id="error-story" required />
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

export const Small: Story = {
    args: {
        size: "sm",
        children: "Name",
    },
}

export const Medium: Story = {
    args: {
        size: "md",
        children: "Name",
    },
}

export default meta
