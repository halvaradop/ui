import { useEffect, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "./index.js"
import { Label } from "../../ui-label/src/index.js"
import { Radio } from "../../ui-radio/src/index.js"
import { Button } from "../../ui-button/src/index.js"

const meta: Meta = {
    title: "ui-radio-group",
    tags: ["autodocs"],
    component: RadioGroup,
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => {
            const [isDark, setIsDark] = useState<boolean>(false)

            const handleToggleTheme = () => {
                setIsDark((previous) => !previous)
                document.querySelector("html")?.classList.toggle("dark", !isDark)
            }

            useEffect(() => {
                setIsDark(document.querySelector("html")?.classList?.contains("dark") ?? false)
            }, [])
            return (
                <div className="w-full h-full mx-auto flex items-center justify-center absolute inset-0 data-[dark='true']:bg-black" data-dark={isDark}>
                    <div className="w-full dark:text-white">
                        <Button className="absolute top-[4%] left-[4%]" onClick={handleToggleTheme}>
                            Theme
                        </Button>
                        <section className="story-container justify-center">
                            <Story />
                        </section>
                    </div>
                </div>
            )
        },
    ],
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
            <RadioGroup variant="row" name="food-2">
                <Label className="flex items-center gap-x-2">
                    <Radio value="pizza" />
                    Pizza
                </Label>
                <Label className="flex items-center gap-x-2">
                    <Radio value="hamburger" />
                    Hamburger
                </Label>
            </RadioGroup>
        )
    },
}

export const DefaultChecked: Story = {
    render: () => {
        return (
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
        )
    },
}

export default meta
