import { forwardRef } from "react"
import { merge, Slot, type SlotProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type LabelProps<T extends ArgsFunction> = SlotProps<"label"> & VariantProps<T>

export const labelVariants = cva("font-medium relative leading-none", {
    variants: {
        variant: {
            base: "text-slate-700",
            error: "hidden text-rose-400 absolute top-0 peer-usinvalid:block peer-usinvalid-empty:hidden",
            flex: "flex flex-col items-start",
        },
        size: {
            sm: "text-sm",
            base: "text-base",
            md: "text-lg",
        },
    },
    defaultVariants: {
        variant: "base",
        size: "base",
    },
})

export const Label = forwardRef<HTMLLabelElement, LabelProps<typeof labelVariants>>(({ className, variant, size, children, asChild, ...props }, ref) => {
    const SlotComponent = asChild ? Slot : "label"
    return (
        <SlotComponent className={merge(labelVariants({ className, variant, size }))} ref={ref} {...props}>
            {children}
        </SlotComponent>
    )
})

Label.displayName = "Label"
