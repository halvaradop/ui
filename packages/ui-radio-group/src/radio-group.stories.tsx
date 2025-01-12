import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "./index.js"
import { Label } from "../../ui-label/src/index.js"
import { Radio } from "../../ui-radio/src/index.js"

const meta: Meta = {
    title: "ui-radio-group",
    tags: ["autodocs"],
    component: RadioGroup,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof RadioGroup>

type Story = StoryObj<typeof meta>

export const Column: Story = {
    render: () => {
        return (
            <RadioGroup name="food">
                <Label className="flex items-center gap-x-2">
                    <Radio value="pizza" name="food" />
                    Pizza
                </Label>
                <Label className="flex items-center gap-x-2">
                    <Radio value="hamburger" name="food" />
                    Hamburger
                </Label>
            </RadioGroup>
        )
    },
}

export const Row: Story = {
    render: () => {
        return (
            <RadioGroup variant="row" name="food">
                <Label className="flex items-center gap-x-2">
                    <Radio value="pizza" name="food" />
                    Pizza
                </Label>
                <Label className="flex items-center gap-x-2">
                    <Radio value="hamburger" name="food" />
                    Hamburger
                </Label>
            </RadioGroup>
        )
    },
}

export const DefaultChecked: Story = {
    render: () => {
        return (
            <RadioGroup name="food" defaultValue="pizza">
                <Label className="flex items-center gap-x-2">
                    <Radio value="pizza" name="food" />
                    Pizza
                </Label>
                <Label className="flex items-center gap-x-2">
                    <Radio value="hamburger" name="food" />
                    Hamburger
                </Label>
            </RadioGroup>
        )
    },
}

export default meta
