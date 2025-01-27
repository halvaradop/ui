import type { Meta, StoryObj } from "@storybook/react"
import { Submit } from "./index.js"

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
        (Story) => (
            <div className="w-full h-full mx-auto flex items-center justify-center absolute inset-0">
                <div className="w-full">
                    <section className="story-container">
                        <Story />
                    </section>
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof Submit>

type Story = StoryObj<typeof meta>

const Template = ({ className, ...props }: Parameters<typeof Submit>[0]) => {
    const action = async () => await new Promise((resolve) => setTimeout(resolve, 2000))

    return (
        <form className={className} action={action}>
            <Submit {...props} />
        </form>
    )
}

export const Base: Story = {
    render: () => <Template />,
}

export const Inverted: Story = {
    render: () => <Template className="p-10 bg-black" variant="inverted" />,
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
