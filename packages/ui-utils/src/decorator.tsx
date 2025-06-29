import { useEffect, useState } from "react"
import type { Decorator } from "@storybook/react"

export const DecoratorWrapper: Decorator = (Story, { parameters }) => {
    const [isDark, setIsDark] = useState(false)

    const handleToggleTheme = () => {
        setIsDark((previous) => !previous)
        document.querySelector("html")?.classList.toggle("dark", !isDark)
    }

    useEffect(() => {
        setIsDark(document.querySelector("html")?.classList?.contains("dark") ?? false)
    }, [])

    if (parameters.skipDecorator) {
        return <Story />
    }

    return (
        <div
            className="w-full h-min min-h-dvh mx-auto flex items-center justify-center absolute inset-0 data-[dark='true']:bg-surface"
            data-dark={isDark}
        >
            <div className="w-full dark:text-on-surface">
                <button className="absolute top-[4%] left-[4%]" onClick={handleToggleTheme}>
                    Theme
                </button>
                <section className="story-container">
                    <Story />
                </section>
            </div>
        </div>
    )
}
