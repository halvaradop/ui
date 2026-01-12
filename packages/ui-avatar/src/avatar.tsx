import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"

export type AvatarProps<T extends VoidFunction> = VariantProps<T> & SlotProps<"figure"> & {}

export const avatarVariants = cva("text-on-surface", {
    variants: {
        variant: {
            rounded: "rounded-full",
            square: "rounded-[calc(var(---rounded-sm)*0.5)]",
        },
        size: {
            sm: "size-sm",
            base: "size-base",
            md: "size-md",
            lg: "size-lg",
        }
    },
})

export const Avatar = ({ className, variant, children, asChild, ...props }: AvatarProps<typeof avatarVariants>) => {
    const SlotComponent = asChild ? Slot : "figure"

    return <SlotComponent className={merge(avatarVariants({ variant, className }))} {...props}></SlotComponent>
}
