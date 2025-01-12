import { forwardRef } from "react"
import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type InputProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"input", "size">

export const inputVariants = cva("text-slate-600 border focus-within:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 disabled:bg-gray-100", {
    variants: {
        variant: {
            base: "caret-slate-600 border-gray-300",
            outline: "focus-within:ring-1 focus-within:border-slate-700 focus-within:ring-slate-700",
            required:
                "focus-within:ring-1 focus-within:border-slate-700 focus-within:ring-slate-700 usinvalid:text-rose-300 usinvalid:placeholder-rose-400  usinvalid:border-rose-400 usinvalid:focus-within:ring-rose-400 usvalid:text-green-400 usvalid:border-green-400 usvalid:focus-within:ring-green-400 input-empty:usinvalid:border-inherit input-empty:usinvalid:placeholder-slate-300 input-empty:usinvalid:caret-slate-600 input-empty:usinvalid:focus-within:border-slate-700 input-empty:usinvalid:focus-within:ring-slate-700",
            disabled: "cursor-not-allowed bg-gray-100 text-gray-400 border-gray-300",
        },
        size: {
            sm: "h-8 indent-2 text-sm rounded-md",
            base: "h-9 indent-3 rounded-lg",
            md: "h-10 indent-3 rounded-lg",
            lg: "h-11 indent-4 text-lg rounded-xl",
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
        fullWidth: true,
        fullRounded: false,
    },
})

export const Input = forwardRef<HTMLInputElement, InputProps<typeof inputVariants>>(({ className, variant, size, fullWidth, fullRounded, type, ...props }, ref) => {
    return <input className={merge(inputVariants({ className, variant, size, fullWidth, fullRounded }))} type={type} ref={ref} {...props} />
})

Input.displayName = "Input"
