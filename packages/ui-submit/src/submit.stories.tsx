"use client"
import { FormEvent, useEffect, useState, useTransition } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Submit } from "./index.js"
import { Button } from "../../ui-button/src/index.js"

const meta: Meta = {
    title: "ui-submit",
    tags: ["autodocs"],
    component: Submit,
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
                        <section className="story-container justify-center">
                            <Story />
                        </section>
                    </div>
                </div>
            )
        },
    ],
} satisfies Meta<typeof Submit>

type Story = StoryObj<typeof meta>

/**
 * Note: The `useTransition` hook doesn't support async callbacks directly. As a result,
 * the pending state will only be visible momentarily.
 * To observe the pending state for a longer duration, consider using React 19 (available in the beta branch)
 * or frameworks like Next.js that support Server-Side Rendering.
 */
const Template = ({ className, ...props }: Parameters<typeof Submit>[0]) => {
    const [isPending, startTransition] = useTransition()

    const wait = async () => await new Promise<string>((resolve) => setTimeout(resolve, 2000))

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        startTransition(() => {
            wait()
        })
    }

    return (
        <form className={className} onSubmit={handleSubmit}>
            <Submit disabled={isPending} aria-disabled={isPending} {...props} />
        </form>
    )
}

export const Variants: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">base</span>
                <Template />
            </div>
            <div>
                <span className="font-medium">seconday</span>
                <Template variant="secondary" />
            </div>
            <div>
                <span className="font-medium">inverted</span>
                <Template variant="inverted" />
            </div>
        </>
    ),
}

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">sm</span>
                <Template size="sm" />
            </div>
            <div>
                <span className="font-medium">base</span>
                <Template size="base" />
            </div>
            <div>
                <span className="font-medium">md</span>
                <Template size="md" />
            </div>
            <div>
                <span className="font-medium">lg</span>
                <Template size="lg" />
            </div>
        </>
    ),
}

export default meta
