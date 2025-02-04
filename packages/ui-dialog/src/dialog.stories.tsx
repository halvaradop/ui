import { useRef } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Modal, innerDialogVariants } from "./index.js"
import { Button } from "../../ui-button/src/index.js"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

/**
 * TODO: Implement Documentation
 */
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
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle>Dialog component powered by React & TailwindCSS</Subtitle>
                    <Canvas />
                    <Controls />
                </>
            ),
        },
    },
    decorators: [decorator],
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
    parameters: {
        skipDectorator: true,
    },
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
