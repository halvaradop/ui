import { useEffect, useState } from "react"
import { Button } from "@halvaradop/ui-button"
import type { Meta } from "@storybook/react"

export const decorator: Pick<Meta, "decorators">["decorators"] = (Story) => {
    const [isDark, setIsDark] = useState(false)

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
}
