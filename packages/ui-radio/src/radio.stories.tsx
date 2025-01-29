import type { Meta, StoryObj } from "@storybook/react"
import { Radio } from "./index.js"
import { Label } from "../../ui-label/src/index.js"

const meta: Meta = {
    title: "ui-radio",
    tags: ["autodocs"],
    component: Radio,
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
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof meta>

export const Sizes: Story = {
    render: () => (
        <>
            <Label className="flex items-center gap-x-2">
                sm
                <Radio size="sm" />
            </Label>
            <Label className="flex items-center gap-x-2">
                base
                <Radio size="base" />
            </Label>
            <Label className="flex items-center gap-x-2">
                md
                <Radio size="md" />
            </Label>
            <Label className="flex items-center gap-x-2">
                lg
                <Radio size="lg" />
            </Label>
        </>
    ),
}

export const Colors: Story = {
    render: () => (
        <>
            <Label className="flex items-center gap-x-2">
                green
                <Radio color="green" />
            </Label>
            <Label className="flex items-center gap-x-2">
                blue
                <Radio color="blue" />
            </Label>
            <Label className="flex items-center gap-x-2">
                red
                <Radio color="red" />
            </Label>
            <Label className="flex items-center gap-x-2">
                yellow
                <Radio color="yellow" />
            </Label>
            <Label className="flex items-center gap-x-2">
                black
                <Radio color="black" />
            </Label>
        </>
    ),
}

export default meta
