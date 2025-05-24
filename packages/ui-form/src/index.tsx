import { merge, type WithChildrenProps, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type FormProps<T extends ArgsFunction> = VariantProps<T> & WithChildrenProps<ComponentProps<"form">>

export const formVariants = cva("mx-auto flex items-center flex-col text-on-surface relative bg-surface", {
    variants: {
        size: {
            sm: "w-11/12 max-w-xs pt-6 pb-4 px-3 gap-y-3 rounded-md",
            base: "w-11/12 max-w-sm pt-10 pb-6 px-4 gap-y-4 rounded-xl",
            md: "w-11/12 max-w-md pt-12 pb-8 px-5 gap-y-5 rounded-xl",
            lg: "w-11/12 max-w-lg pt-14 pb-10 px-6 gap-y-6 rounded-2xl",
            full: "w-fit",
        },
        variant: {
            base: "items-start",
            outline: "border border-border shadow",
            inner: "border border-border shadow-inner",
            ghost: "p-0",
        },
    },
    defaultVariants: {
        variant: "base",
        size: "base",
    },
})

export const Form = ({ className, variant, size, children, ref, ...props }: FormProps<typeof formVariants>) => {
    return (
        <form className={merge(formVariants({ className, variant, size }))} ref={ref} {...props}>
            {children}
        </form>
    )
}

Form.displayName = "Form"
