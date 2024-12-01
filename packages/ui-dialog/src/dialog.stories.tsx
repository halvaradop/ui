import { useRef } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Modal, innerDialogVariants } from "./index.js"
import { Button } from "../../ui-button/src/index.js"

const meta: Meta = {
    title: "ui-dialog",
    tags: ["autodocs"],
    component: Modal,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Modal>

type Story = StoryObj<typeof meta>

interface DialogStoryProps {
    size?: "sm" | "md" | "lg"
    variant?: "inner" | "fixed"
}

const DialogStory = ({ size, variant }: DialogStoryProps) => {
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
                <div className={innerDialogVariants({ size, variant })}>
                    <div>Modal content</div>
                    <Button className="mt-4" onClick={() => handleToggleModal(false)}>
                        Close
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export const Base: Story = {
    render: () => <DialogStory />,
}

export const Small: Story = {
    render: () => <DialogStory size="sm" />,
}

export const Medium: Story = {
    render: () => <DialogStory size="md" />,
}

export const Large: Story = {
    render: () => <DialogStory size="lg" />,
}

export const Inner: Story = {
    render: () => <DialogStory variant="inner" />,
}

export const Fixed: Story = {
    render: () => <DialogStory variant="fixed" />,
}

export default meta
