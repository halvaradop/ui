import { type ComponentProps, type PropsWithChildren, merge } from "@halvaradop/ui-core"
import { cva } from "class-variance-authority"

export type DialogProps = PropsWithChildren<ComponentProps<"dialog">>

export const modalVariants = cva(
    "w-full mx-auto my-4 p-6 flex items-center justify-center flex-col text-on-surface border border-solid border-border rounded-(--rounded) overflow-hidden bg-surface",
    {
        variants: {
            variant: {
                base: "",
                inner: "border-muted",
                fixed: "max-h-[calc(100vh-2rem)] fixed inset-4 z-50 overflow-y-auto overscroll-contain [scrollbar-gutter:stable]",
            },
            size: {
                sm: "max-w-sm",
                base: "max-w-md",
                md: "max-w-lg",
                lg: "max-w-xl",
            },
        },
        defaultVariants: {
            variant: "base",
            size: "base",
        },
    }
)

export const Dialog = ({ className, children, ref, ...props }: DialogProps) => {
    return (
        <dialog
            className={merge(
                "w-full min-h-screen max-w-none max-h-none items-center justify-center relative inset-0 bg-transparent backdrop:bg-overlay open:flex",
                className
            )}
            ref={ref}
            tabIndex={-1}
            aria-modal="true"
            {...props}
        >
            {children}
        </dialog>
    )
}

Dialog.displayName = "Dialog"
