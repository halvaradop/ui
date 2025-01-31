import { useEffect, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./index.jsx"
import { Button } from "../../ui-button/src/index.js"

const meta: Meta = {
    title: "ui-input",
    tags: ["autodocs"],
    component: Input,
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
                <div
                    className="w-full h-full mx-auto flex items-center justify-center absolute inset-0 data-[dark='true']:bg-black"
                    data-dark={isDark}
                >
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
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">base</span>
                <Input variant="base" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">line</span>
                <Input variant="line" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">sensitive</span>
                <Input variant="sensitive" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">disabled</span>
                <Input variant="base" placeholder="John Doe." disabled />
            </div>
        </>
    ),
}

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">small</span>
                <Input size="sm" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Input size="base" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">medium</span>
                <Input size="md" placeholder="John Doe." />
            </div>
            <div>
                <span className="font-medium">large</span>
                <Input size="lg" placeholder="John Doe." />
            </div>
        </>
    ),
}

export default meta
