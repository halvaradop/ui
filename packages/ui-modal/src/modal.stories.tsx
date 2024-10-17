import { useRef } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Modal, innerDialogVariants } from "./index.js"
import { Button } from "../../ui-button/src/index.js"

const meta: Meta = {
    title: "ui-modal",
    tags: ["autodocs"],
    component: Modal,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Modal>

type Story = StoryObj<typeof meta>

export const Base: Story = {
    render: () => {
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
                <Modal ref={modalRef}>
                    <div className={innerDialogVariants({})}>
                        <div>Modal content</div>
                        <Button onClick={() => handleToggleModal(false)}>Close</Button>
                    </div>
                </Modal>
            </>
        )
    },
}

export const Small: Story = {
    render: () => {
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
                <Modal ref={modalRef}>
                    <div className={innerDialogVariants({ size: "sm" })}>
                        <div>Modal content</div>
                        <Button onClick={() => handleToggleModal(false)}>Close</Button>
                    </div>
                </Modal>
            </>
        )
    },
}

export const Medium: Story = {
    render: () => {
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
                <Modal ref={modalRef}>
                    <div className={innerDialogVariants({ size: "md" })}>
                        <div>Modal content</div>
                        <Button onClick={() => handleToggleModal(false)}>Close</Button>
                    </div>
                </Modal>
            </>
        )
    },
}

export const Large: Story = {
    render: () => {
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
                <Modal ref={modalRef}>
                    <div className={innerDialogVariants({ size: "lg" })}>
                        <div>Modal content</div>
                        <Button onClick={() => handleToggleModal(false)}>Close</Button>
                    </div>
                </Modal>
            </>
        )
    },
}

export const Inner: Story = {
    render: () => {
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
                <Modal ref={modalRef}>
                    <div className={innerDialogVariants({ variant: "inner" })}>
                        <div>Modal content</div>
                        <Button onClick={() => handleToggleModal(false)}>Close</Button>
                    </div>
                </Modal>
            </>
        )
    },
}

export const Fixed: Story = {
    render: () => {
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
                <Modal ref={modalRef}>
                    <div className={innerDialogVariants({ variant: "fixed" })}>
                        <div>Modal content</div>
                        <Button onClick={() => handleToggleModal(false)}>Close</Button>
                    </div>
                </Modal>
            </>
        )
    },
}

export default meta
