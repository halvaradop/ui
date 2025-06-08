import { merge } from "@halvaradop/ui-core"
import { Slot, type SlotProps } from "@halvaradop/ui-slot"
import { cva, type VariantProps } from "class-variance-authority"

export type ButtonProps<T extends (...args: any) => void> = SlotProps<"button"> & VariantProps<T>

export const buttonVariants = cva(
    "inline-flex items-center justify-center font-semibold border border-solid rounded-(--rounded) transition-colors focus-visible:outline-solid focus-visible:outline-3 focus-visible:outline-offset-3 hover:cursor-pointer disabled:text-on-surface disabled:border-disabled disabled:bg-disabled disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                base: "text-on-primary border-primary bg-primary hover:border-primary/(--opacity-cursor) hover:bg-primary/(--opacity-cursor) focus-visible:outline-primary/(--opacity-cursor)",
                secondary:
                    "text-on-secondary border-secondary bg-secondary hover:border-secondary/(--opacity-cursor) hover:bg-secondary/(--opacity-cursor) focus-visible:outline-secondary",
                ghost: "text-on-surface border-transparent bg-transparent hover:bg-ghost focus-visible:outline-ghost",
                link: "text-on-surface border-none hover:underline hover:underline-offset-8 hover:decoration-primary focus-visible:underline focus-visible:underline-offset-8 focus-visible:outline-none",
                destructive:
                    "text-white border-danger bg-danger hover:border-danger/(--opacity-cursor) hover:bg-danger/(--opacity-cursor) focus-visible:outline-danger",
                outline: "text-on-surface border-ghost hover:bg-ghost focus-visible:outline-ghost",
                plain: "text-on-surface border-transparent focus-visible:outline-primary",
            },
            size: {
                sm: "h-(--size-sm) px-[calc(var(--size-sm)*0.5)] text-sm",
                base: "h-(--size-base) px-[calc(var(--size-base)*0.5)] text-base",
                md: "h-(--size-md) px-[calc(var(--size-md)*0.5)] text-md",
                lg: "h-(--size-lg) px-[calc(var(--size-lg)*0.5)] text-lg",
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

export const Button = ({
    className,
    variant,
    size,
    fullWidth,
    fullRounded,
    asChild,
    children,
    ref,
    ...props
}: ButtonProps<typeof buttonVariants>) => {
    const SlotComponent = asChild ? Slot : "button"
    const isButton = !asChild

    return (
        <SlotComponent
            className={merge(buttonVariants({ className, variant, size, fullWidth, fullRounded }))}
            ref={ref}
            role={isButton ? "button" : undefined}
            type={isButton ? "button" : undefined}
            tabIndex={isButton ? 0 : undefined}
            {...props}
        >
            {children}
        </SlotComponent>
    )
}

Button.displayName = "Button"
