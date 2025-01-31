import { merge, Slot, type SlotProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type LabelProps<T extends ArgsFunction> = SlotProps<"label"> & VariantProps<T>

export const labelVariants = cva("font-medium text-left relative leading-none", {
    variants: {
        fullWidth: {
            true: "w-full",
            false: "w-fit",
        },
        variant: {
            base: "text-primary",
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

export const Label = ({ className, variant, size, children, asChild, ref, ...props }: LabelProps<typeof labelVariants>) => {
    const SlotComponent = asChild ? Slot : "label"
    return (
        <SlotComponent className={merge(labelVariants({ className, variant, size }))} ref={ref} {...props}>
            {children}
        </SlotComponent>
    )
}

Label.displayName = "Label"
