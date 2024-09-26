import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
	title: "ui-index",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<null>

type Story = StoryObj<typeof meta>

export const Index: Story = {}

export default meta
