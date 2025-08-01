import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type CardProps<T extends VoidFunction> = VariantProps<T> & ComponentProps<"div">

export const cardVariants = cva("border border-solid border-border rounded-(--rounded) shadow-ghost", {
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

export const Card = ({ className, size, children, ref }: CardProps<typeof cardVariants>) => {
    return (
        <div className={merge(cardVariants({ size }), className)} ref={ref}>
            {children}
        </div>
    )
}
