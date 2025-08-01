import { merge } from "@halvaradop/ui-core"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"
import { cva, type VariantProps } from "class-variance-authority"

export type CardProps<T extends VoidFunction> = VariantProps<T> & SlotProps<"div">

export const cardVariants = cva("text-on-surface border border-solid border-border rounded-(--rounded) shadow-ghost", {
    variants: {
        variant: {
            base: "bg-surface",
            outline: "bg-transparent",
        },
        size: {
            sm: "p-[calc(var(--size-sm)*0.75)] shadow-sm",
            base: "p-[calc(var(--size-base)*0.75)] shadow-md",
            md: "p-[calc(var(--size-md)*0.75)] shadow-md",
            lg: "p-[calc(var(--size-lg)*0.75)] shadow-lg",
        },
    },
    defaultVariants: {
        variant: "base",
        size: "base",
    },
})

export const Card = ({
    className,
    variant,
    size,
    children,
    ref,
    asChild,
    ...props
}: CardProps<typeof cardVariants>) => {
    const SlotComponent = asChild ? Slot : "div"
    return (
        <SlotComponent className={merge(cardVariants({ variant, size }), className)} ref={ref} {...props}>
            {children}
        </SlotComponent>
    )
}
