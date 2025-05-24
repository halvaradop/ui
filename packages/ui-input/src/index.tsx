import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type InputProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"input", "size">

export const inputVariants = cva(
    "text-on-surface border border-solid border-border bg-surface placeholder:text-muted outline-0 focus-visible:outline-solid disabled:cursor-not-allowed disabled:text-on-secondary disabled:border-disabled disabled:bg-disabled",
    {
        variants: {
            size: {
                sm: "h-8 indent-2 text-sm rounded-xs",
                base: "h-9 indent-3 rounded-sm",
                md: "h-10 indent-3 rounded-sm",
                lg: "h-11 indent-4 text-lg rounded-lg",
            },
            variant: {
                base: "caret-on-surface focus:outline focus:outline-border",
                line: "border-0 border-b rounded-none",
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

export const Input = ({
    className,
    variant,
    size,
    fullWidth,
    fullRounded,
    type,
    ref,
    ...props
}: InputProps<typeof inputVariants>) => {
    return (
        <input
            className={merge(inputVariants({ className, variant, size, fullWidth, fullRounded }))}
            type={type}
            ref={ref}
            {...props}
        />
    )
}

Input.displayName = "Input"
