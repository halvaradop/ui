import { ComponentProps, forwardRef } from "react"
import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"

export type FormProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"form">

export const formVariants = cva("mx-auto flex items-center flex-col relative", {
    variants: {
        variant: {
            base: "items-start",
            outline: "border border-gray-300 shadow",
            filled: "border border-gray-300 shadow-inner",
        },
        size: {
            sm: "small w-11/12 max-w-sm pt-6 pb-4 px-3 gap-y-3 rounded-md",
            base: "base w-11/12 max-w-md pt-10 pb-6 px-4 gap-y-4 rounded-xl",
            md: "md w-11/12 max-w-lg pt-12 pb-8 px-5 gap-y-5 rounded-xl",
            lg: "lg w-11/12 max-w-xl pt-14 pb-10 px-6 gap-y-6 rounded-2xl",
        },
    },
    defaultVariants: {
        variant: "base",
        size: "base",
    },
})

export const Form = forwardRef<HTMLFormElement, FormProps<typeof formVariants>>(({ className, variant, size, children, ...props }, ref) => {
    return (
        <form className={formVariants({ className, variant, size })} ref={ref} {...props}>
            {children}
        </form>
    )
})
