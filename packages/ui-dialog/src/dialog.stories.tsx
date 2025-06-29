import { useRef } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { within, expect } from "@storybook/test"
import { Dialog, modalVariants } from "./index.js"
import { Button } from "@/ui/ui-button/src/index.js"
import { DecoratorWrapper } from "@/ui/ui-utils/src/decorator.js"
import { DocsPage } from "@/ui/ui-utils/src/docs-page.js"
import type { VariantProps } from "class-variance-authority"

const meta: Meta = {
    title: "ui-dialog",
    tags: ["autodocs"],
    component: Dialog,
    args: {
        size: "base",
        variant: "base",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "base", "md", "lg"],
            description: "Size of the dialog",
            table: {
                type: {
                    summary: "sm | base | md | lg",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
        variant: {
            control: "select",
            options: ["base", "inner", "fixed"],
            description: "Variant of the dialog",
            table: {
                type: {
                    summary: "base | inner | fixed",
                },
                defaultValue: {
                    summary: "base",
                },
            },
        },
    },
    parameters: {
        layout: "centered",
        backgrounds: {
            grid: true,
        },
        docs: {
            page: () => <DocsPage subtitle="Dialog component powered by React & TailwindCSS" />,
        },
    },
    decorators: [DecoratorWrapper],
} satisfies Meta<StoryArgs>

type Story = StoryObj<typeof meta>
type StoryArgs = VariantProps<typeof modalVariants>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    render: ({ size, variant }: StoryArgs) => {
        const modalRef = useRef<HTMLDialogElement>(null)

        const handleToggleModal = (isOpen: boolean): void => {
            if (isOpen) {
                modalRef.current?.showModal()
            } else {
                modalRef.current?.close()
            }
        }

        return (
            <>
                <Button onClick={() => handleToggleModal(true)}>Open</Button>
                <Dialog ref={modalRef}>
                    <div className={modalVariants({ size, variant })}>
                        <div className="text-center">
                            <h1 className="font-medium">Modal Content</h1>
                            <span className="block">size: {size}</span>
                            <span className="block">variant: {variant}</span>
                        </div>
                        {Array.from({ length: 30 }, (_, i) => (
                            <p key={i} className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.
                            </p>
                        ))}
                        <Button className="mt-4" onClick={() => handleToggleModal(false)}>
                            Close
                        </Button>
                    </div>
                </Dialog>
            </>
        )
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const openButton = canvas.getByRole("button", { name: /open/i })
        openButton.click()

        const modal = canvas.getByRole("dialog")
        await expect(modal.hasAttribute("open")).toBeTruthy()

        await expect(canvas.getByText(/Modal Content/i)).toBeInTheDocument()
        await expect(canvas.getByText(/size:/i)).toHaveTextContent(/size: (sm|base|md|lg)/i)
        await expect(canvas.getByText(/variant:/i)).toHaveTextContent(/variant: (base|inner|fixed)/i)

        await expect(document.activeElement === modal || modal.contains(document.activeElement)).toBeTruthy()

        await new Promise((resolve) => setTimeout(resolve, 500))

        const closeButton = canvas.getByRole("button", { name: /close/i })
        closeButton.click()

        await expect(modal.hasAttribute("open")).toBeFalsy()
    },
}

export default meta
