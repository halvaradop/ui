import type { Meta, StoryObj } from "@storybook/react"
import { Select, SelectList, SelectOption, SelectTrigger } from "./index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"

const meta: Meta = {
    title: "ui-select",
    tags: ["autodocs"],
    component: Select,
    args: {},
    argTypes: {},
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
    decorators: [decorator],
} satisfies Meta<typeof Select>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    render: () => (
        <Select className="min-w-56" name="food">
            <SelectTrigger>Select an item</SelectTrigger>
            <SelectList>
                <SelectOption value="pizza">Pizza</SelectOption>
                <SelectOption value="burger">Burger</SelectOption>
                <SelectOption value="sushi">Sushi</SelectOption>
                <SelectOption value="salad">Salad</SelectOption>
            </SelectList>
        </Select>
    ),
}

export default meta
