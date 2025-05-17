import { forwardRef } from "react"
import { merge, type ArgsFunction } from "@halvaradop/ui-core"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"
import { cva, type VariantProps } from "class-variance-authority"

export type ButtonProps<T extends ArgsFunction> = SlotProps<"button"> & VariantProps<T>

export const buttonVariants = cva(
    "flex items-center justify-center font-semibold border border-solid transition-colors focus-visible:[outline-style:solid] focus-visible:outline-3 focus-visible:outline-offset-3 hover:cursor-pointer",
    {
        variants: {
            variant: {
                base: "text-on-primary border-primary bg-primary hover:border-primary/(--opacity-cursor) hover:bg-primary/(--opacity-cursor) focus-visible:outline-primary/(--opacity-cursor)",
                secondary:
                    "text-on-secondary border-secondary bg-secondary hover:border-secondary/(--opacity-cursor) hover:bg-secondary/(--opacity-cursor) focus-visible:outline-secondary",
                ghost: "text-on-secondary border-transparent bg-transparent hover:bg-ghost focus-visible:outline-ghost",
                link: "text-on-secondary border-none hover:underline hover:underline-offset-8 hover:decoration-primary focus-visible:underline focus-visible:underline-offset-8 focus-visible:outline-none",
                destructive:
                    "text-on-primary border-danger bg-danger hover:border-danger/(--opacity-cursor) hover:bg-danger/(--opacity-cursor) focus-visible:outline-danger",
                outline: "text-on-secondary border-ghost hover:bg-ghost focus-visible:outline-ghost",
                plain: "text-on-secondary border-transparent focus-visible:outline-primary",
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
