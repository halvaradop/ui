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
    "font-medium border focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3 hover:cursor-pointer disabled:hover:cursor-progress",
    {
        variants: {
            variant: {
                base: "text-on-primary border-primary bg-primary focus-visible:outline-primary disabled:bg-primary/(--opacity-cursor)",
                secondary:
                    "text-on-secondary border-secondary bg-secondary focus-visible:outline-secondary disabled:bg-secondary/(--opacity-cursor)",
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
