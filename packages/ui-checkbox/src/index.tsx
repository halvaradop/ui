import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { type VariantProps, cva } from "class-variance-authority"

export type CheckboxProps<T extends VoidFunction> = ComponentProps<"input", "type" | "size"> & VariantProps<T>

const internalVariants = cva("hidden absolute peer-checked:block", {
    variants: {
        size: {
            sm: "size-[calc(var(--size-sm)*0.5)]",
            base: "size-[calc(var(--size-base)*0.5)]",
            md: "size-[calc(var(--size-md)*0.5)]",
            lg: "size-[calc(var(--size-lg)*0.5)]",
        },
    },
    defaultVariants: {
        size: "base",
    },
})

export const checkboxVariants = cva(
    "appearance-none border border-solid border-border rounded-[calc(var(--rounded)*0.75)] focus-visible:outline-solid focus-visible:outline-border disabled:border-muted disabled:bg-muted",
    {
        variants: {
            size: {
                sm: "size-[calc(var(--size-sm)*0.5)] focus-visible:outline focus-visible:outline-offset-2",
                base: "size-[calc(var(--size-base)*0.5)] focus-visible:outline focus-visible:outline-offset-2",
                md: "size-[calc(var(--size-md)*0.5)] p-0.5 focus-visible:outline-3 focus-visible:outline-offset-3",
                lg: "size-[calc(var(--size-lg)*0.5)] p-0.5 focus-visible:outline-3 focus-visible:outline-offset-3",
            },
            color: {
                primary: "checked:border-primary checked:bg-primary checked:focus-visible:outline-primary",
                secondary: "checked:border-secondary checked:bg-secondary checked:focus-visible:outline-secondary",
                green: "checked:border-success checked:bg-success checked:focus-visible:outline-success",
                red: "checked:border-danger checked:bg-danger checked:focus-visible:outline-danger",
            },
            fullRounded: {
                true: "rounded-full",
            },
        },
        defaultVariants: {
            size: "base",
            color: "primary",
        },
    }
)

export const Checkbox = ({
    className,
    size,
    color,
    fullRounded,
    name,
    ref,
    checked,
    ...props
}: CheckboxProps<typeof checkboxVariants>) => {
    return (
        <label
            className="flex items-center justify-center relative cursor-pointer has-disabled:cursor-not-allowed"
            htmlFor={name}
        >
            <input
                className={merge(checkboxVariants({ className, size, color, fullRounded }), "peer")}
                ref={ref}
                type="checkbox"
                role="checkbox"
                name={name}
                checked={checked}
                aria-roledescription="checkbox"
                aria-checked={checked}
                {...props}
            />
            <svg
                className={internalVariants({ size })}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#fff"
                aria-hidden="true"
            >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
        </label>
    )
}

Checkbox.displayName = "Checkbox"
