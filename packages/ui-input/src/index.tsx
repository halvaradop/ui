import { forwardRef } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type InputProps<T extends VoidFunction> = VariantProps<T> & ComponentProps<"input", "size">

export const inputVariants = cva(
    "text-on-surface border border-solid border-border rounded-(--rounded) bg-surface placeholder:text-muted outline-0 focus-visible:outline-solid disabled:cursor-not-allowed disabled:text-on-secondary disabled:border-disabled disabled:bg-disabled",
    {
        variants: {
            size: {
                sm: "h-8 indent-[calc(var(--size-sm)*0.4)]",
                base: "h-9 indent-[calc(var(--size-base)*0.4)]",
                md: "h-10 indent-[calc(var(--size-md)*0.4)]",
                lg: "h-11 indent-[calc(var(--size-lg)*0.4)]",
            },
            variant: {
                base: "caret-on-surface focus:outline focus:outline-border",
                line: "border-0 border-b rounded-none bg-transparent",
                sensitive:
                    "user-invalid:text-danger user-invalid:border-danger focus:border-border focus:outline focus:outline-border focus:user-invalid:text-danger focus:user-invalid:border-danger focus:user-invalid:outline-danger invalid:placeholder-shown:border-border",
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
                ref={ref}
                type={type}
                role="textbox"
                {...props}
            />
        )
    }
)

Input.displayName = "Input"
