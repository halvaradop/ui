import { useState, type MouseEvent } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type ToggleProps<T extends VoidFunction> = VariantProps<T> &
    ComponentProps<"button", "children"> & {
        checked?: boolean
    }

export const toggleVariants = cva(
    "inline-grid items-center justify-center relative border border-solid rounded-full transition-colors ease-in-out hover:cursor-pointer focus-visible:outline-3 focus-visible:outline-solid focus-visible:outline-offset-3 disabled:border-disabled disabled:bg-disabled disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                base: "border-border bg-surface aria-checked:border-success aria-checked:bg-success focus-visible:outline-border",
            },
            size: {
                sm: "h-(--size-sm) w-[calc(var(--size-sm)*2)] text-sm",
                base: "h-(--size-base) w-[calc(var(--size-base)*2)] text-base",
                md: "h-(--size-md) w-[calc(var(--size-md)*2)] text-md",
                lg: "h-(--size-lg) w-[calc(var(--size-lg)*2)] text-lg",
            },
        },
        defaultVariants: {
            variant: "base",
            size: "base",
        },
    }
)

const internalVariants = cva(
    "block rounded-full transition-transform duration-250 ease-in-out -translate-x-1/2 shadow-sm bg-white",
    {
        variants: {
            size: {
                sm: "size-[calc(var(--size-sm)*0.8)]",
                base: "size-[calc(var(--size-base)*0.8)]",
                md: "size-[calc(var(--size-md)*0.8)]",
                lg: "size-[calc(var(--size-lg)*0.8)]",
            },
            checked: {
                true: "translate-x-1/2",
                false: "-translate-x-1/2",
            },
        },
        defaultVariants: {
            size: "base",
        },
    }
)

export const Toggle = ({
    className,
    variant,
    size,
    ref,
    checked,
    disabled,
    onClick,
    ...props
}: ToggleProps<typeof toggleVariants>) => {
    const [isActive, setIsActive] = useState(checked ?? false)

    const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
        onClick?.(event)
        setIsActive((previous) => !previous)
    }

    return (
        <button
            className={merge(toggleVariants({ className, variant, size }))}
            ref={ref}
            role="switch"
            aria-checked={isActive}
            aria-pressed={isActive}
            aria-disabled={disabled}
            data-checked={isActive}
            disabled={disabled}
            onClick={handleToggle}
            {...props}
        >
            <span className={merge(internalVariants({ size, checked: isActive }))} />
        </button>
    )
}

Toggle.displayName = "Toggle"
