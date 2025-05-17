import { forwardRef } from "react"
import { merge, type ComponentProps, type WithChildrenProps } from "@halvaradop/ui-core"
import { cva } from "class-variance-authority"

export type DialogProps = WithChildrenProps<ComponentProps<"dialog">>

export const modalVariants = cva("flex items-center justify-center text-on-surface bg-surface", {
    variants: {
        variant: {
            base: "flex-col shadow",
            inner: "flex-col shadow-inner",
            fixed: "flex-col fixed inset-0 z-50",
        },
        size: {
            sm: "pt-6 p-4 rounded",
            base: "pt-8 p-6 rounded",
            md: "pt-10 p-8 rounded-md",
            lg: "pt-12 p-10 rounded-lg",
        },
    },
    defaultVariants: {
        variant: "base",
        size: "base",
    },
})

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ className, children, ...props }, ref) => {
    return (
        <dialog
            className={merge(
                "w-full min-h-screen max-w-none max-h-none items-center justify-center relative inset-0 bg-transparent backdrop:bg-overlay open:flex",
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </dialog>
    )
})

Dialog.displayName = "Dialog"
