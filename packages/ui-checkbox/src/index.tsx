import { forwardRef } from "react"
import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type CheckboxProps<T extends ArgsFunction> = ComponentProps<"input", "type" | "size"> & VariantProps<T>

const internalVariants = cva("hidden absolute peer-checked:block", {
    variants: {
        size: {
            sm: "size-3",
            base: "size-4",
            md: "size-5",
            lg: "size-6",
        },
    },
    defaultVariants: {
        size: "base",
    },
})

export const checkboxVariants = cva(
    "appearance-none border border-solid border-border focus-visible:[outline-style:solid] focus-visible:outline-border disabled:border-muted disabled:bg-muted",
    {
        variants: {
            size: {
                sm: "size-3 rounded-[1px] focus-visible:outline focus-visible:outline-offset-2",
                base: "size-4 rounded-sm focus-visible:outline focus-visible:outline-offset-2",
                md: "size-5 p-0.5 rounded-[4px] focus-visible:outline-3 focus-visible:outline-offset-3",
                lg: "size-6 p-0.5 rounded-[5px] focus-visible:outline-3 focus-visible:outline-offset-3",
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

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps<typeof checkboxVariants>>(
    ({ className, size, color, fullRounded, name, ...props }, ref) => {
        return (
            <label
                className="flex items-center justify-center relative cursor-pointer has-disabled:cursor-not-allowed"
                htmlFor={name}
            >
                <input
                    className={merge(checkboxVariants({ className, size, color, fullRounded }), "peer")}
                    type="checkbox"
                    name={name}
                    ref={ref}
                    {...props}
                />
                <svg
                    className={internalVariants({ size })}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#fff"
                >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
            </label>
        )
    }
)

Checkbox.displayName = "Checkbox"
