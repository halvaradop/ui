import { merge, type ArgsFunction } from "@halvaradop/ui-core"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"
import { cva, type VariantProps } from "class-variance-authority"

export type LabelProps<T extends ArgsFunction> = SlotProps<"label"> & VariantProps<T>

export const labelVariants = cva(
    "block font-medium text-on-surface text-left relative leading-none disabled:text-muted",
    {
        variants: {
            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },
            variant: {
                base: "",
                required:
                    "w-fit hidden text-danger absolute top-0 right-0 peer-user-invalid:block peer-placeholder-shown:hidden peer-user-invalid:peer-placeholder-shown:hidden",
            },
            size: {
                sm: "text-xs",
                base: "text-sm",
                md: "text-base",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            variant: "base",
            size: "base",
            fullWidth: true,
        },
    }
)

export const Label = ({
    className,
    variant,
    size,
    children,
    asChild,
    ref,
    ...props
}: LabelProps<typeof labelVariants>) => {
    const SlotComponent = asChild ? Slot : "label"
    return (
        <SlotComponent className={merge(labelVariants({ className, variant, size }))} ref={ref} {...props}>
            {children}
        </SlotComponent>
    )
}

Label.displayName = "Label"
