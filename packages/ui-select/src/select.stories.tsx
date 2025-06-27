import type { Meta, StoryObj } from "@storybook/react"
import { within, expect } from "@storybook/test"
import { Select, SelectList, SelectOption, SelectTrigger } from "./index.js"
import { DecoratorWrapper } from "@halvaradop/ui-utils/decorator"
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
    decorators: [DecoratorWrapper],
} satisfies Meta<typeof Select>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    render: () => (
        <Select className="min-w-56 mx-auto" name="food">
            <SelectTrigger>Select an item</SelectTrigger>
            <SelectList>
                <SelectOption value="pizza">Pizza</SelectOption>
                <SelectOption value="burger">Burger</SelectOption>
                <SelectOption value="sushi">Sushi</SelectOption>
                <SelectOption value="salad">Salad</SelectOption>
            </SelectList>
        </Select>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const select = await canvas.findByText("Select an item")
        await expect(select).toBeInTheDocument()

        select.focus()
        select.click()

        const sushi = await canvas.findByText("Sushi")
        const burger = await canvas.findByText("Burger")
        await expect(sushi).toBeInTheDocument()
        await expect(burger).toBeInTheDocument()
        await expect(await canvas.findByText("Pizza")).toBeInTheDocument()
        await expect(await canvas.findByText("Salad")).toBeInTheDocument()
        sushi.click()

        await expect(sushi).toBeInTheDocument()
        await expect(canvas.queryByText("Select an item")).not.toBeInTheDocument()

        burger.click()
        await expect(burger).toBeInTheDocument()
        await expect(burger).toHaveAttribute("aria-selected", "true")
        await expect(sushi).not.toHaveAttribute("aria-selected", "true")
    },
}

export default meta
