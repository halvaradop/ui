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
    "appearance-none border border-gray-400 focus-visible:[outline-style:solid] focus-visible:outline-gray-400",
    {
        variants: {
            size: {
                sm: "size-3 rounded-[1px] focus-visible:outline focus-visible:outline-offset-1",
                base: "size-4 rounded-sm focus-visible:outline focus-visible:outline-offset-1",
                md: "size-5 p-0.5 rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-2",
                lg: "size-6 p-0.5 rounded-[5px] focus-visible:outline-2 focus-visible:outline-offset-2",
            },
            color: {
                green: "checked:border-green checked:bg-green checked:focus-visible:outline-green",
                blue: "checked:border-blue checked:bg-blue checked:focus-visible:outline-blue",
                red: "checked:border-red checked:bg-red checked:focus-visible:outline-red",
                yellow: "checked:border-yellow checked:bg-yellow checked:focus-visible:outline-yellow",
                primary: "checked:border-primary checked:bg-primary checked:focus-visible:outline-primary",
            },
            fullRounded: {
                true: "rounded-full",
            },
        },
        defaultVariants: {
            size: "base",
            color: "green",
        },
    }
)

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps<typeof checkboxVariants>>(
    ({ className, size, color, fullRounded, name, ...props }, ref) => {
        return (
            <label className="flex items-center justify-center relative" htmlFor={name}>
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
