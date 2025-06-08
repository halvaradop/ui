import { FormEvent } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { Form } from "./index.js"
import { Input } from "@/ui/ui-input/src/index.js"
import { Label } from "@/ui/ui-label/src/index.js"
import { Submit } from "@/ui/ui-submit/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"

const meta: Meta = {
    title: "ui-form",
    tags: ["autodocs"],
    component: Form,
    args: {
        variant: "base",
        size: "base",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["base", "outline", "inner", "ghost"],
            description: "Variant of the form",
            table: {
                type: {
                    summary: "base | outline | inner | ghost",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        size: {
            control: "select",
            options: ["sm", "base", "md", "lg"],
            description: "Size of the form",
            table: {
                type: {
                    summary: "sm | base | md | lg",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
    },
    parameters: {
        layout: "centered",
        docs: {
            page: () => <DocsPage subtitle="Form component powered by React & TailwindCSS" />,
        },
    },
    decorators: [decorator],
} satisfies Meta<typeof Form>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    render: ({ size, variant }) => {
        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
        }

        return (
            <Form size={size} variant={variant} onSubmit={handleSubmit}>
                <Label htmlFor="username">
                    Username
                    <Input name="username" id="username" placeholder="johndoe" />
                </Label>
                <Label htmlFor="password">
                    Password
                    <Input name="password" id="password" type="password" placeholder="******" />
                </Label>
                <Submit className="mt-2" fullWidth value="Login" />
            </Form>
        )
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const username = canvas.getByPlaceholderText("johndoe")
        await userEvent.type(username, "halvaradop", { delay: 102 })
        await expect(username).toHaveValue("halvaradop")

        const password = canvas.getByPlaceholderText("******")
        await userEvent.type(password, "halvaradop", { delay: 102 })
        await expect(password).toHaveValue("halvaradop")

        await userEvent.click(canvas.getByText("Login"))

        await userEvent.clear(username)
        await userEvent.clear(password)
        await expect(username).toHaveValue("")
        await expect(password).toHaveValue("")
    },
}

export default meta
