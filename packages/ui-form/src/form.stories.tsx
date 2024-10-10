import type { Meta, StoryObj } from "@storybook/react"
import { Form } from "./index.js"
import { Input } from "../../ui-input/src/index.js"

const meta: Meta = {
	title: "ui-form",
	tags: ["autodocs"],
	component: Form,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Form>

type Story = StoryObj<typeof meta>

export const Base: Story = {
	render: () => (
		<Form>
			<Input />
			<Input />
		</Form>
	),
}

export const Outline: Story = {
	args: {
		variant: "outline",
	},
	render: ({ variant }) => (
		<Form variant={variant}>
			<Input />
			<Input />
		</Form>
	),
}

export const Filled: Story = {
	args: {
		variant: "filled",
	},
	render: ({ variant }) => (
		<Form variant={variant}>
			<Input />
			<Input />
		</Form>
	),
}

export const Small: Story = {
	args: {
		size: "sm",
		variant: "outline",
	},
	render: ({ variant, size }) => (
		<Form variant={variant} size={size}>
			<Input />
			<Input />
		</Form>
	),
}

export const Medium: Story = {
	args: {
		size: "md",
		variant: "outline",
	},
	render: ({ variant, size }) => (
		<Form variant={variant} size={size}>
			<Input />
			<Input />
		</Form>
	),
}

export const Large: Story = {
	args: {
		size: "lg",
		variant: "outline",
	},
	render: ({ variant, size }) => (
		<Form variant={variant} size={size}>
			<Input />
			<Input />
		</Form>
	),
}

export default meta
