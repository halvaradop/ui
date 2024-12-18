import { ComponentProps } from "react"
import { merge, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type CheckboxProps<T extends ArgsFunction> = VariantProps<T> & Omit<ComponentProps<"input">, "type" | "size">

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

export const checkboxVariants = cva("appearance-none border border-gray-400 focus-within:outline-none  focus-within:ring-gray-400", {
    variants: {
        size: {
            sm: "size-3 rounded-[1px] focus-within:ring-1 focus-within:ring-offset-1",
            base: "size-4 rounded-sm focus-within:ring-1 focus-within:ring-offset-1",
            md: "size-5 p-0.5 rounded-[4px] focus-within:ring-2 focus-within:ring-offset-2",
            lg: "size-6 p-0.5 rounded-[5px] focus-within:ring-2 focus-within:ring-offset-2",
        },
        color: {
            green: "checked:border-green-500 checked:bg-green-500 checked:focus-within:ring-green-500",
            blue: "checked:border-blue-500 checked:bg-blue-500 checked:focus-within:ring-blue-500",
            red: "checked:border-red-500 checked:bg-red-500 checked:focus-within:ring-red-500",
            yellow: "checked:border-yellow-500 checked:bg-yellow-500 checked:focus-within:ring-yellow-500",
            black: "checked:border-black checked:bg-black checked:focus-within:ring-black",
        },
        fullRounded: {
            true: "rounded-full",
        },
    },
    defaultVariants: {
        size: "base",
        color: "green",
    },
})

export const Checkbox = ({ className, size, color, name, ref }: CheckboxProps<typeof checkboxVariants>) => {
    return (
        <label className="flex items-center justify-center relative" htmlFor={name}>
            <input className={merge(checkboxVariants({ className, size, color }), "peer")} type="checkbox" name={name} ref={ref} />
            <svg className={internalVariants({ size })} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fff">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
        </label>
    )
}

Checkbox.displayName = "Checkbox"
