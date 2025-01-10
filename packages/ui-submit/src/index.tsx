import { forwardRef } from "react"
import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, VariantProps } from "class-variance-authority"

interface InternalSubmitProps {
    pending?: string
}

export type SubmitProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"input", "type" | "size"> & InternalSubmitProps

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

export const Submit = forwardRef<HTMLInputElement, SubmitProps<typeof submitVariants>>(({ className, variant, size, fullWidth, fullRounded, value = "Submit", pending = "Submitting...", disabled, ...props }, ref) => {
    const message = disabled ? pending : value
    return <input className={merge(submitVariants({ className, variant, size, fullWidth, fullRounded }))} type="submit" value={message} disabled={disabled} aria-disabled={disabled} ref={ref} {...props} />
})

Submit.displayName = "Input"
