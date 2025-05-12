import { forwardRef } from "react"
import { merge, type ArgsFunction } from "@halvaradop/ui-core"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"
import { cva, type VariantProps } from "class-variance-authority"

export type LabelProps<T extends ArgsFunction> = SlotProps<"label"> & VariantProps<T>

export const labelVariants = cva("font-medium text-left relative leading-none", {
    variants: {
        fullWidth: {
            true: "w-full",
            false: "w-fit",
        },
        variant: {
            base: "text-base",
            error: "w-fit hidden text-red absolute top-0 right-0 peer-usinvalid:block peer-usinvalid-empty:hidden",
            flex: "flex flex-col items-start",
        },
        size: {
            sm: "text-xs",
            base: "text-sm",
            md: "text-base",
        },
    },
    defaultVariants: {
        variant: "base",
        size: "base",
        fullWidth: true,
    },
})

export const Label = forwardRef<HTMLLabelElement, LabelProps<typeof labelVariants>>(
    ({ className, variant, size, children, asChild, ...props }, ref) => {
        const SlotComponent = asChild ? Slot : "label"
        return (
            <SlotComponent className={merge(labelVariants({ className, variant, size }))} ref={ref} {...props}>
                {children}
            </SlotComponent>
        )
    }
)

Label.displayName = "Label"
