import type { ArgTypes, Meta, StoryObj } from "@storybook/react"
import { Radio } from "./index.js"
import { Label } from "../../ui-label/src/index.js"
import { RadioGroup } from "../../ui-radio-group/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

const size: ArgTypes["size"] = {
    control: "select",
    options: ["sm", "base", "md", "lg"],
    description: "Size of the radio",
    table: {
        type: {
            summary: "sm | base | md | lg",
        },
        defaultValue: {
            summary: "base",
        },
    },
}

const color: ArgTypes["color"] = {
    control: "select",
    options: ["green", "blue", "red", "yellow", "primary"],
    description: "Color of the radio",
    table: {
        type: {
            summary: "green | blue | red | yellow | primary",
        },
        defaultValue: {
            summary: "primary",
        },
    },
}

const meta: Meta = {
    title: "ui-radio",
    tags: ["autodocs"],
    component: Radio,
    parameters: {
        layout: "centered",
        backgrounds: {
            grid: true,
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle>Dialog component powered by React & TailwindCSS</Subtitle>
                    <Canvas />
                    <Controls />
                </>
            ),
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        size: "base",
        color: "primary",
    },
    argTypes: {
        size,
        color,
    },
    parameters: {
        skipDecorator: true,
    },
    render: ({ size, color }) => (
        <RadioGroup>
            <Label className="flex items-center gap-x-2">
                <Radio size={size} color={color} />
            </Label>
            <Label className="flex items-center gap-x-2">
                <Radio size={size} color={color} />
            </Label>
            <Label className="flex items-center gap-x-2">
                <Radio size={size} color={color} />
            </Label>
            <Label className="flex items-center gap-x-2">
                <Radio size={size} color={color} />
            </Label>
        </RadioGroup>
    ),
}

export const Sizes: Story = {
    args: {
        color: "primary",
    },
    argTypes: {
        color,
    },
    render: ({ color }) => (
        <RadioGroup>
            <Label className="flex items-center gap-x-2">
                sm
                <Radio size="sm" color={color} />
            </Label>
            <Label className="flex items-center gap-x-2">
                base
                <Radio size="base" color={color} />
            </Label>
            <Label className="flex items-center gap-x-2">
                md
                <Radio size="md" color={color} />
            </Label>
            <Label className="flex items-center gap-x-2">
                lg
                <Radio size="lg" color={color} />
            </Label>
        </RadioGroup>
    ),
}

export const Colors: Story = {
    args: {
        size: "base",
    },
    argTypes: {
        size,
    },
    render: ({ size }) => (
        <RadioGroup>
            <Label className="flex items-center gap-x-2">
                green
                <Radio color="green" size={size} />
            </Label>
            <Label className="flex items-center gap-x-2">
                blue
                <Radio color="blue" size={size} />
            </Label>
            <Label className="flex items-center gap-x-2">
                red
                <Radio color="red" size={size} />
            </Label>
            <Label className="flex items-center gap-x-2">
                yellow
                <Radio color="yellow" size={size} />
            </Label>
            <Label className="flex items-center gap-x-2">
                primary
                <Radio color="primary" size={size} />
            </Label>
        </RadioGroup>
    ),
}

export default meta
