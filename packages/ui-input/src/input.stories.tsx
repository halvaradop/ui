import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./index.jsx"

const meta: Meta = {
	title: "ui-input",
	component: Input,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const Small: Story = {
	args: {
		size: "sm",
	},
}

export const Medium: Story = {
	args: {
		size: "md",
	},
}

export const Large: Story = {
	args: {
		size: "lg",
	},
}

export const FullWidth: Story = {
	args: {
		fullWidth: true,
	},
}

export default meta
