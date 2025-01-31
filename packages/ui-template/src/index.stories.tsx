import { useEffect, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Index } from "./index.jsx"
import { Button } from "../../ui-button/src/index.js"

const meta: Meta = {
    title: "ui-index",
    tags: ["autodocs"],
    component: Index,
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
                setIsDark((previous) => !previousious)
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
} satisfies Meta<typeof Index>

type Story = StoryObj<typeof meta>

export const Variants: Story = {}

export default meta
