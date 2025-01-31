import { useEffect, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Form } from "./index.js"
import { Input } from "../../ui-input/src/index.js"
import { Label } from "../../ui-label/src/index.js"
import { Button } from "../../ui-button/src/index.js"

const meta: Meta = {
    title: "ui-form",
    tags: ["autodocs"],
    component: Form,
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
} satisfies Meta<typeof Form>

type Story = StoryObj<typeof meta>

const Template = ({ ...props }: Omit<Parameters<typeof Form>[0], "children">) => (
    <Form {...props}>
        <Label>
            Username
            <Input />
        </Label>
        <Label>
            Password
            <Input />
        </Label>
    </Form>
)

export const Base: Story = {
    render: () => <Template />,
}

export const Outline: Story = {
    render: () => <Template variant="outline" />,
}

export const Inner: Story = {
    render: () => <Template variant="inner" />,
}

export const Ghost: Story = {
    render: () => <Template variant="ghost" />,
}

export const Small: Story = {
    render: () => <Template size="sm" />,
}

export const Medium: Story = {
    render: () => <Template size="md" />,
}

export const Large: Story = {
    render: () => <Template size="lg" />,
}

export default meta
