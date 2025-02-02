import { useEffect, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./index.js"
import { Button } from "../../ui-button/src/index.js"

const meta: Meta = {
    title: "ui-checkbox",
    tags: ["autodocs"],
    component: Checkbox,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "light",
            grid: true,
        },
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
                        <section className="story-container">
                            <Story />
                        </section>
                    </div>
                </div>
            )
        },
    ],
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof meta>

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">sm</span>
                <Checkbox size="sm" />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Checkbox size="base" />
            </div>
            <div>
                <span className="font-medium">mg</span>
                <Checkbox size="md" />
            </div>
            <div>
                <span className="font-medium">lg</span>
                <Checkbox size="lg" />
            </div>
        </>
    ),
}

export const Colors: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">Green</span>
                <Checkbox color="green" />
            </div>
            <div>
                <span className="font-medium">Blue</span>
                <Checkbox color="blue" />
            </div>
            <div>
                <span className="font-medium">Red</span>
                <Checkbox color="red" />
            </div>
            <div>
                <span className="font-medium">Yellow</span>
                <Checkbox color="yellow" />
            </div>
            <div>
                <span className="font-medium">primary</span>
                <Checkbox color="primary" />
            </div>
        </>
    ),
}

export default meta
