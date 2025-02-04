import type { Meta, StoryObj } from "@storybook/react"
import { Radio } from "./index.js"
import { Label } from "../../ui-label/src/index.js"
import { RadioGroup } from "../../ui-radio-group/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

const meta: Meta = {
    title: "ui-radio",
    tags: ["autodocs"],
    component: Radio,
    args: {
        size: "base",
        color: "primary",
    },
    argTypes: {
        size: {
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
        },
        color: {
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
        },
    },
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "light",
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
    parameters: {
        skipDecorator: true,
    },
    render: (args) => (
        <RadioGroup>
            <Label className="flex items-center gap-x-2">
                <Radio {...args} />
            </Label>
            <Label className="flex items-center gap-x-2">
                <Radio {...args} />
            </Label>
            <Label className="flex items-center gap-x-2">
                <Radio {...args} />
            </Label>
            <Label className="flex items-center gap-x-2">
                <Radio {...args} />
            </Label>
        </RadioGroup>
    ),
}

export const Sizes: Story = {
    render: () => (
        <RadioGroup>
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
        </RadioGroup>
    ),
}

export const Colors: Story = {
    render: () => (
        <RadioGroup>
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
                primary
                <Radio color="primary" />
            </Label>
        </RadioGroup>
    ),
}

export default meta
