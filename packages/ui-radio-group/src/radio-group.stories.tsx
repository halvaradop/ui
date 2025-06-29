import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { RadioGroup, Radio, radioGroupVariants } from "./index.js"
import { Label } from "@/ui/ui-label/src/index.js"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"
import type { VariantProps } from "class-variance-authority"

const meta: Meta = {
    title: "ui-radio-group",
    tags: ["autodocs"],
    component: RadioGroup,
    args: {
        variant: "column",
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["column", "row"],
            description: "Flex direction of the radio group",
            table: {
                type: {
                    summary: "column | row",
                },
                defaultValue: {
                    summary: "column",
                },
            },
        },
        color: {
            control: "select",
            options: ["primary", "green", "red"],
            description: "Color of the radio group",
            table: {
                type: {
                    summary: "primary | green | red",
                },
            },
        },
    },
    parameters: {
        layout: "centered",
        docs: {
            page: () => <DocsPage subtitle="RadioGroup component powered by React & TailwindCSS" />,
        },
    },
    decorators: [DecoratorWrapper],
} satisfies Meta<typeof RadioGroup>

type Story = StoryObj<typeof meta>
type StoryArgs = VariantProps<typeof radioGroupVariants> & {
    color?: "primary" | "green" | "red"
}

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    render: ({ variant, color }: StoryArgs) => {
        const [food, setFood] = useState<string>("")
        return (
            <RadioGroup value={food} name="food" variant={variant} onChange={(value) => setFood(value)}>
                <Label className="flex items-center gap-x-2">
                    <Radio value="pizza" name="food" color={color} />
                    Pizza
                </Label>
                <Label className="flex items-center gap-x-2">
                    <Radio value="hamburger" name="food" color={color} />
                    Hamburger
                </Label>
            </RadioGroup>
        )
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const radioGroup = canvas.getByRole("group")
        const radio1 = within(radioGroup).getByLabelText("Pizza")
        const radio2 = within(radioGroup).getByLabelText("Hamburger")

        await userEvent.click(radio1)
        await expect(radio1).toBeChecked()
        await expect(radio2).not.toBeChecked()

        await userEvent.click(radio2)
        await expect(radio2).toBeChecked()
        await expect(radio1).not.toBeChecked()
    },
}

export const DefaultChecked: Story = {
    render: ({ variant }: StoryArgs) => (
        <RadioGroup name="food-3" defaultValue="pizza" variant={variant}>
            <Label className="flex items-center gap-x-2">
                <Radio value="pizza" name="food-3" />
                Pizza
            </Label>
            <Label className="flex items-center gap-x-2">
                <Radio value="hamburger" name="food-3" />
                Hamburger
            </Label>
        </RadioGroup>
    ),
}

export default meta
