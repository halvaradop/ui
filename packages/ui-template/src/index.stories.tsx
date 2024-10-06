import type { Meta, StoryObj } from "@storybook/react"
import { Index } from "./index.jsx"

const meta: Meta = {
	title: "ui-index",
	tags: ["autodocs"],
	component: Index,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Index>

type Story = StoryObj<typeof meta>

export const Base: Story = {}

export default meta
