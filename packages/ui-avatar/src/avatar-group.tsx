import { merge, type PropsWithChildren } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"

export type AvatarGroupProps<T extends VoidFunction> = VariantProps<T> & PropsWithChildren<SlotProps<"figure">> & {}

export const avatarGroupVariants = cva("text-on-surface", {
    variants: {
        variant: {
            rounded: "rounded-full",
            square: "rounded-[calc(var(---rounded-sm)*0.5)]",
        },
        size: {
            sm: "size-sm space-x-sm",
            base: "size-base space-x-base",
            md: "size-md space-x-md",
            lg: "size-lg space-x-lg",
        },
    },
})

export const AvatarGroup = ({ className, variant, size, children, asChild, ...props }: AvatarGroupProps<typeof avatarGroupVariants>) => {
    const SlotComponent = asChild ? Slot : "figure"

    return <SlotComponent className={merge(avatarGroupVariants({ variant, size, className }))} {...props}>{children}</SlotComponent>
}
