import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"

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
    decorators: [decorator],
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
