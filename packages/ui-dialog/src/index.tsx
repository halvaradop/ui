import type { ComponentProps } from "react"
import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"
import { merge } from "@halvaradop/ui-core"

export type DialogProps<T extends ArgsFunction> = ComponentProps<"dialog"> & VariantProps<T>

export const innerDialogVariants = cva("flex items-center justify-center", {
    variants: {
        variant: {
            base: "flex-col shadow bg-white",
            inner: "flex-col shadow-inner bg-white",
            fixed: "flex-col fixed top-1/2 -translate-y-1/2 bg-white",
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

const classNameDialog = "w-full min-h-screen max-w-none max-h-none items-center justify-center relative inset-0 bg-transparent backdrop:bg-slate-500/50 open:flex"

export const Modal = ({ className, children, ref, ...props }: DialogProps<typeof innerDialogVariants>) => {
    return (
        <dialog className={merge(classNameDialog, className)} ref={ref} {...props}>
            {children}
        </dialog>
    )
}
