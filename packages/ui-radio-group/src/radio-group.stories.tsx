import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "./index.js"
import { Label } from "../../ui-label/src/index.js"
import { Radio } from "../../ui-radio/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"

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
    },
    parameters: {
        layout: "centered",
        docs: {
            page: () => <DocsPage subtitle="RadioGroup component powered by React & TailwindCSS" />,
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof RadioGroup>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    render: ({ variant }) => (
        <RadioGroup name="food" variant={variant}>
            <Label className="flex items-center gap-x-2">
                <Radio value="pizza" name="food" />
                Pizza
            </Label>
            <Label className="flex items-center gap-x-2">
                <Radio value="hamburger" name="food" />
                Hamburger
            </Label>
        </RadioGroup>
    ),
}

export const DefaultChecked: Story = {
    render: () => (
        <RadioGroup name="food-3" defaultValue="pizza">
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
