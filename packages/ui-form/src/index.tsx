import { forwardRef } from "react"
import { merge, type PropsWithChildren, type ComponentProps } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type FormProps<T extends VoidFunction> = VariantProps<T> & PropsWithChildren<ComponentProps<"form">>

export const formVariants = cva(
    "w-full mx-auto flex items-center flex-col text-on-surface relative rounded-(--rounded) bg-surface",
    {
        variants: {
            size: {
                sm: "max-w-sm p-[calc(var(--size-sm)*0.75)] gap-[calc(var(--size-sm)*0.5)]",
                base: "max-w-md p-[calc(var(--size-base)*0.75)] gap-[calc(var(--size-base)*0.5)]",
                md: "max-w-lg p-[calc(var(--size-md)*0.75)] gap-[calc(var(--size-md)*0.5)]",
                lg: "max-w-xl p-[calc(var(--size-lg)*0.75)] gap-[calc(var(--size-lg)*0.5)]",
            },
            variant: {
                base: "items-start",
                outline: "border border-border shadow",
                inner: "border border-border shadow-inner",
                ghost: "bg-transparent",
            },
        },
        defaultVariants: {
            variant: "base",
            size: "base",
        },
    }
)

export const Form = forwardRef<HTMLFormElement, FormProps<typeof formVariants>>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (
            <form className={merge(formVariants({ className, variant, size }))} ref={ref} {...props}>
                {children}
            </form>
        )
    }
)

Form.displayName = "Form"
