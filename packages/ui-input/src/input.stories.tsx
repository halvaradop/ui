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

export const Base: Story = {
	args: {
		placeholder: "Base input",
	},
}

export const Small: Story = {
	args: {
		size: "sm",
		placeholder: "Small input",
	},
}

export const Medium: Story = {
	args: {
		size: "md",
		placeholder: "Medium input",
	},
}

export const Large: Story = {
	args: {
		size: "lg",
		placeholder: "Large input",
	},
}

export const FullWidth: Story = {
	args: {
		fullWidth: true,
		placeholder: "FullWidth input",
	},
}

export const FullRounded: Story = {
	args: {
		fullRounded: true,
		placeholder: "FullRounded input",
	},
}

export const Outline: Story = {
	args: {
		size: "sm",
		variant: "outline",
		placeholder: "Outline input",
	},
}

export const Required: Story = {
	args: {
		size: "base",
		variant: "required",
		placeholder: "Required input",
		type: "email",
		required: true,
	},
}

export default meta
