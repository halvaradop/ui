import { forwardRef } from "react"
import { merge, type WithChildrenProps, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type FormProps<T extends ArgsFunction> = VariantProps<T> & WithChildrenProps<ComponentProps<"form">>

export const formVariants = cva("w-full mx-auto flex items-center flex-col text-on-surface relative rounded-(--rounded) bg-surface", {
    variants: {
        size: {
            sm: "max-w-sm p-4 gap-y-3",
            base: "max-w-md p-6 gap-y-4",
            md: "max-w-lg p-6 gap-y-5",
            lg: "max-w-xl p-8 gap-y-6",
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
})

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
