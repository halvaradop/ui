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
        backgrounds: {
            default: "light",
            grid: true,
        },
    },
    decorators: [
        (Story) => (
            <div className="w-full h-full mx-auto flex items-center justify-center absolute inset-0">
                <div className="w-full">
                    <section className="story-container">
                        <Story />
                    </section>
                </div>
            </div>
        ),
    ],
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

export const Variants: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">inner</span>
                <DialogStory variant="inner" />
            </div>
            <div>
                <span className="font-medium">fixed</span>
                <DialogStory variant="fixed" />
            </div>
        </>
    ),
}

export const Sizes: Story = {
    render: () => (
        <>
            <div>
                <span className="font-medium">sm</span>
                <DialogStory size="sm" />
            </div>
            <div>
                <span className="font-medium">md</span>
                <DialogStory size="md" />
            </div>
            <div>
                <span className="font-medium">lg</span>
                <DialogStory size="lg" />
            </div>
        </>
    ),
}

export default meta
