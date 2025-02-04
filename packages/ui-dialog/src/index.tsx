import { forwardRef } from "react"
import { merge, type ComponentProps, type WithChildrenProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type DialogProps<T extends ArgsFunction> = VariantProps<T> & WithChildrenProps<ComponentProps<"dialog">>

export const innerDialogVariants = cva("flex items-center justify-center", {
    variants: {
        variant: {
            base: "flex-col shadow bg-modal",
            inner: "flex-col shadow-inner bg-modal",
            fixed: "flex-col fixed top-1/2 -translate-y-1/2 bg-modal",
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

export const Modal = forwardRef<HTMLDialogElement, DialogProps<typeof innerDialogVariants>>(
    ({ className, children, ...props }, ref) => {
        return (
            <dialog
                className={merge(
                    "w-full min-h-screen max-w-none max-h-none items-center justify-center relative inset-0 bg-transparent backdrop:bg-dialog open:flex",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </dialog>
        )
    }
)

Modal.displayName = "Dialog"
