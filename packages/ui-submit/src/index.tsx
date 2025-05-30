import { forwardRef } from "react"
import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, VariantProps } from "class-variance-authority"

interface InternalSubmitProps {
    pending?: string
}

export type SubmitProps<T extends ArgsFunction> = VariantProps<T> &
    ComponentProps<"input", "type" | "size"> &
    InternalSubmitProps

export const submitVariants = cva(
    "inline-flex items-center justify-center font-semibold border border-solid rounded-(--rounded) transition-colors focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3 hover:cursor-pointer disabled:text-on-surface disabled:border-disabled disabled:bg-disabled disabled:hover:cursor-progress",
    {
        variants: {
            variant: {
                base: "text-on-primary border-primary bg-primary focus-visible:outline-primary",
                secondary: "text-on-secondary border-secondary bg-secondary focus-visible:outline-secondary",
            },
            size: {
                sm: "h-(--size-sm) px-[calc(var(--size-sm)*0.5)] text-sm",
                base: "h-(--size-base) px-[calc(var(--size-base)*0.5)] text-base",
                md: "h-(--size-md) px-[calc(var(--size-md)*0.5)] text-md",
                lg: "h-(--size-lg) px-[calc(var(--size-lg)*0.5)] text-lg",
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
    }
)

export const Submit = forwardRef<HTMLInputElement, SubmitProps<typeof submitVariants>>(
    (
        {
            className,
            variant,
            size,
            fullWidth,
            fullRounded,
            value = "Submit",
            pending = "Submitting...",
            disabled,
            ...props
        },
        ref
    ) => {
        const message = disabled ? pending : value
        return (
            <input
                className={merge(submitVariants({ className, variant, size, fullWidth, fullRounded }))}
                type="submit"
                value={message}
                disabled={disabled}
                aria-disabled={disabled}
                ref={ref}
                {...props}
            />
        )
    }
)

Submit.displayName = "Input"
