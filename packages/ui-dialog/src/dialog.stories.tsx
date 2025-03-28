import { useRef } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Dialog, modalVariants } from "./index.js"
import { Button } from "@halvaradop/ui-button"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"
import type { VariantProps } from "class-variance-authority"

type ModalProps = VariantProps<typeof modalVariants>

const meta: Meta = {
    title: "ui-dialog",
    tags: ["autodocs"],
    component: Dialog as any,
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
    decorators: [decorator],
} satisfies Meta<ModalProps>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    parameters: {
        skipDecorator: true,
    },
    render: ({ size, variant }) => {
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
                        <Button className="mt-4" onClick={() => handleToggleModal(false)}>
                            Close
                        </Button>
                    </div>
                </Dialog>
            </>
        )
    },
}

export default meta
