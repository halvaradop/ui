import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type InputProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"input", "size">

export const inputVariants = cva(
    "text-primary border bg-input-background focus-visible:outline-none disabled:cursor-not-allowed disabled:text-disabled disabled:border-disabled disabled:bg-disabled",
    {
        variants: {
            size: {
                sm: "h-8 indent-2 text-sm rounded-md",
                base: "h-9 indent-3 rounded-lg",
                md: "h-10 indent-3 rounded-lg",
                lg: "h-11 indent-4 text-lg rounded-xl",
            },
            variant: {
                base: "caret-primary border-input focus-visible:ring-1 focus-visible:border-input focus-visible:ring-input",
                line: "border-0 border-b border-input rounded-none",
                sensitive:
                    "focus-visible:ring-1 focus-visible:border-primary focus-visible:ring-primary usinvalid:text-rose-300 usinvalid:placeholder-rose-400  usinvalid:border-rose-400 usinvalid:focus-within:ring-rose-400 usvalid:text-green-400 usvalid:border-green-400 usvalid:focus-within:ring-green-400 input-empty:usinvalid:border-inherit input-empty:usinvalid:placeholder-slate-300 input-empty:usinvalid:caret-slate-600 input-empty:usinvalid:focus-within:border-slate-700 input-empty:usinvalid:focus-within:ring-slate-700",
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
