"use client"
import { ComponentProps } from "react"
import { type ArgsFunction, type VariantProps, cva } from "@halvaradop/ui-core"

export type SubmitProps<T extends ArgsFunction> = Omit<ComponentProps<"input">, "type" | "size"> & VariantProps<T> & { pending?: string }

export const submitVariants = cva("font-medium border focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 disabled:hover:cursor-progress", {
    variants: {
        variant: {
            base: "text-white border-black bg-black ring-black disabled:bg-opacity-90",
            inverted: "text-black border-white bg-white ring-white ring-offset-black disabled:border-black disabled:bg-opacity-90",
        },
        size: {
            sm: "h-9 px-3 text-sm rounded",
            base: "h-10 px-4 text-base rounded-md",
            md: "h-10 px-5 text-base rounded-md",
            lg: "h-11 px-6 text-lg rounded-lg",
        },
        fullWidth: {
            true: "w-full",
            false: "w-fit",
        },
        fullRounded: {
            true: "rounded-full",
        },
    },
    defaultVariants: {
        variant: "base",
        size: "base",
        fullWidth: false,
        fullRounded: false,
    },
})

export const Submit = ({ className, variant, size, fullWidth, fullRounded, value = "Submit", pending = "Submitting...", disabled, ref, ...props }: SubmitProps<typeof submitVariants>) => {
    const message = disabled ? pending : value
    return <input className={submitVariants({ className, variant, size, fullWidth, fullRounded })} type="submit" value={message} disabled={disabled} aria-disabled={disabled} ref={ref} {...props} />
}
