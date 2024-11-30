import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"
import { merge, Slot, type SlotProps } from "@halvaradop/ui-core"

export type ButtonProps<T extends ArgsFunction> = SlotProps<"button"> & VariantProps<T>

export const buttonVariants = cva("flex items-center justify-center font-semibold border transition hover:border-transparent hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", {
    variants: {
        variant: {
            base: "text-white border-black bg-black focus-visible:ring-black",
            ghost: "text-black border-transparent bg-transparent hover:text-white hover:bg-black/90 focus-visible:text-white focus-visible:bg-black/90 focus-visible:ring-0 focus-visible:ring-offset-0 ",
            link: "text-black border-none hover:underline hover:underline-offset-4 hover:decoration-black focus-visible:underline focus-visible:underline-offset-4 focus:decoration-black focus-visible:ring-0 focus-visible:ring-offset-0",
            destructive: "text-white border-red-500 bg-red-500 focus-visible:ring-red-500",
            outline: "text-black border-black hover:border-black focus-visible:ring-black",
        },
        size: {
            sm: "h-9 px-3 text-sm rounded-md",
            base: "h-10 px-4 text-base rounded-md",
            md: "h-10 px-4 text-base rounded-md",
            lg: "h-11 px-4 text-lg rounded-lg",
        },
        fullWidth: {
            true: "w-full",
            false: "w-fit",
        },
        fullRounded: {
            true: "rounded-full",
            false: "rounded",
        },
    },
    defaultVariants: {
        variant: "base",
        size: "base",
        fullWidth: false,
        fullRounded: false,
    },
})

/**
 * The Button component is a versatile and customizable button element.
 * It supports various variants, sizes, and additional props to enhance its appearance and functionality.
 */
export const Button = ({ className, variant, size, fullWidth, fullRounded, asChild, children, ref, ...props }: ButtonProps<typeof buttonVariants>) => {
    const SlotComponent = asChild ? Slot : "button"
    return (
        <SlotComponent className={merge(buttonVariants({ className, variant, size, fullWidth, fullRounded }))} ref={ref} role="button" {...props}>
            {children}
        </SlotComponent>
    )
}

Button.displayName = "Button"
