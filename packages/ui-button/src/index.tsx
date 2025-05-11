import { forwardRef } from "react"
import { merge, type ArgsFunction } from "@halvaradop/ui-core"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"
import { cva, type VariantProps } from "class-variance-authority"

export type ButtonProps<T extends ArgsFunction> = SlotProps<"button"> & VariantProps<T>

export const buttonVariants = cva(
    "flex items-center justify-center font-semibold border border-solid transition-colors hover:bg-opacity-90 focus-visible:[outline-style:solid] focus-visible:outline-2 focus-visible:outline-offset-2",
    {
        variants: {
            variant: {
                base: "text-base border-primary bg-primary hover:border-primary-hover hover:bg-primary-hover focus-visible:outline-primary-hover",
                secondary:
                    "text-inverse border-secondary bg-secondary hover:border-secondary-hover hover:bg-secondary-hover focus-visible:outline-secondary",
                ghost: "text-inverse border-transparent bg-transparent hover:bg-ghost focus-visible:outline-ghost dark:hover:text-color-100",
                link: "text-inverse border-none hover:underline hover:underline-offset-8 hover:decoration-primary focus-visible:underline focus-visible:underline-offset-8 focus-visible:outline-none",
                destructive:
                    "text-base border-red bg-red hover:border-red-hover hover:bg-red-hover focus-visible:outline-red",
                outline:
                    "text-inverse border-ghost hover:bg-ghost focus-visible:outline-ghost dark:hover:text-color-100",
                plain: "text-inverse border-transparent focus-visible:outline-primary",
            },
            size: {
                sm: "h-9 px-3 text-sm rounded-md",
                base: "h-10 px-4 text-base rounded-md",
                md: "h-11 px-4 text-base rounded-md",
                lg: "h-12 px-4 text-lg rounded-lg",
            },
            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },
            fullRounded: {
                true: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "base",
            size: "base",
            fullWidth: false,
            fullRounded: false,
        },
    }
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps<typeof buttonVariants>>(
    ({ className, variant, size, fullWidth, fullRounded, asChild, children, ...props }, ref) => {
        const SlotComponent = asChild ? Slot : "button"
        return (
            <SlotComponent
                className={merge(buttonVariants({ className, variant, size, fullWidth, fullRounded }))}
                ref={ref}
                role="button"
                {...props}
            >
                {children}
            </SlotComponent>
        )
    }
)

Button.displayName = "Button"
