import { forwardRef } from "react"
import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type InputProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"input", "size">

export const inputVariants = cva(
    "text-inverse border bg-input-background focus-visible:outline-none disabled:cursor-not-allowed disabled:text-disabled disabled:border-disabled disabled:bg-disabled",
    {
        variants: {
            size: {
                sm: "h-8 indent-2 text-sm rounded-md",
                base: "h-9 indent-3 rounded-lg",
                md: "h-10 indent-3 rounded-lg",
                lg: "h-11 indent-4 text-lg rounded-xl",
            },
            variant: {
                base: "caret-primary border-base focus-visible:ring-1 focus-visible:border-base focus-visible:ring-border",
                line: "border-0 border-b border-base rounded-none",
                sensitive:
                    "focus-visible:ring-1 focus-visible:border-base focus-visible:ring-border user-invalid:text-red-hover user-invalid:placeholder-red-hover user-invalid:border-red-hover user-invalid:focus-within:ring-red-hover user-valid:text-green-hover user-valid:border-green-hover user-valid:focus-within:ring-green-hover input-empty:user-invalid:border-inherit input-empty:user-invalid:placeholder-border-md input-empty:user-invalid:caret-border-md input-empty:user-invalid:focus-within:border-md input-empty:user-invalid:focus-within:ring-border-md",
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
    }
)

export const Input = forwardRef<HTMLInputElement, InputProps<typeof inputVariants>>(
    ({ className, variant, size, fullWidth, fullRounded, type, ...props }, ref) => {
        return (
            <input
                className={merge(inputVariants({ className, variant, size, fullWidth, fullRounded }))}
                type={type}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = "Input"
