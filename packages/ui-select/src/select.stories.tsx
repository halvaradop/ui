import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { within, expect } from "@storybook/test"
import { Select, SelectList, SelectOption, SelectTrigger } from "./index.js"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"
import { Button } from "@/ui/ui-button/src/index.js"

const meta: Meta<typeof Select> = {
    title: "ui-select",
    component: Select,
    tags: ["autodocs"],
    args: {},
    argTypes: {
        name: {
            control: { type: "text" },
            description: "Name attribute for the select element.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" },
            },
        },
        defaultValue: {
            control: {
                type: "text",
            },
            description: "The initial selected value.",
            table: {
                type: {
                    summary: "string",
                },
                defaultValue: {
                    summary: "",
                },
            },
        },
        open: {
            control: {
                type: "boolean",
            },
            description: "Controls the open state of the select dropdown.",
            table: {
                type: {
                    summary: "boolean",
                },
                defaultValue: {
                    summary: "false",
                },
            },
        },
        onOpenChange: {
            description: "Callback fired when the open state changes.",
            table: {
                type: {
                    summary: "(open: boolean) => void",
                },
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        onValueChange: {
            description: "Callback fired when the selected value changes.",
            table: {
                type: {
                    summary: "(value: string) => void",
                },
                defaultValue: {
                    summary: "undefined",
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
}

type Story = StoryObj<typeof meta>

export const Base: Story = {
    render: (args) => (
        <Select className="min-w-56 mx-auto" name="food" {...args}>
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
    },
}

export const OpenAttribute: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false)
        const [value, setValue] = useState("")

        return (
            <div className="w-full">
                <Button onClick={() => setIsOpen((previous) => !previous)}>{isOpen ? "Close" : "Open"}</Button>
                <Select
                    className="min-w-56 max-w-fit mt-10 mx-auto"
                    name="food"
                    value={value}
                    open={isOpen}
                    onValueChange={setValue}
                    onOpenChange={setIsOpen}
                    {...args}
                >
                    <SelectTrigger>Select an item</SelectTrigger>
                    <SelectList>
                        <SelectOption value="pizza">Pizza</SelectOption>
                        <SelectOption value="burger">Burger</SelectOption>
                        <SelectOption value="sushi">Sushi</SelectOption>
                        <SelectOption value="salad">Salad</SelectOption>
                    </SelectList>
                </Select>
                <span className="mt-4 block">Selected Value: {value}</span>
            </div>
        )
    },
}

export const DefaultValue: Story = {
    render: (args) => {
        const [value, setValue] = useState("")
        const [isOpen, setIsOpen] = useState(false)

        const handleChange = () => {
            setValue("burger")
            setIsOpen(false)
        }

        return (
            <div className="w-full">
                <Button onClick={handleChange}>Shortcut for select burger</Button>
                <Select
                    className="min-w-56 max-w-fit mt-10 mx-auto"
                    name="food"
                    open={isOpen}
                    value={value}
                    onValueChange={setValue}
                    onOpenChange={setIsOpen}
                    {...args}
                >
                    <SelectTrigger>Select an item</SelectTrigger>
                    <SelectList>
                        <SelectOption value="pizza">Pizza</SelectOption>
                        <SelectOption value="burger">Burger</SelectOption>
                        <SelectOption value="sushi">Sushi</SelectOption>
                        <SelectOption value="salad">Salad</SelectOption>
                    </SelectList>
                </Select>
                <span className="mt-4 block">Selected Value: {value}</span>
            </div>
        )
    },
}

export const DotNotation: Story = {
    render: (args) => (
        <Select className="min-w-56 max-w-fit mt-10 mx-auto" name="food" {...args}>
            <Select.Trigger>Select an item</Select.Trigger>
            <Select.List>
                <Select.Option value="pizza">Pizza</Select.Option>
                <Select.Option value="burger">Burger</Select.Option>
                <Select.Option value="sushi">Sushi</Select.Option>
                <Select.Option value="salad">Salad</Select.Option>
            </Select.List>
        </Select>
    ),
}

export default meta
