import { forwardRef } from "react"
import { merge } from "@halvaradop/ui-core"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"
import { cva, type VariantProps } from "class-variance-authority"

export type LabelProps<T extends VoidFunction> = SlotProps<"label"> & VariantProps<T>

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

export const Label = forwardRef<HTMLLabelElement, LabelProps<typeof labelVariants>>(
    ({ className, variant, size, fullWidth, children, asChild, ...props }, ref) => {
        const SlotComponent = asChild ? Slot : "label"
        return (
            <SlotComponent
                className={merge(labelVariants({ className, variant, size, fullWidth }))}
                ref={ref}
                {...props}
            >
                {children}
            </SlotComponent>
        )
    }
)

Label.displayName = "Label"
