import { forwardRef } from "react"
import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type RadioProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"input", "type" | "size">

export const radioVariants = cva("peer relative z-10 appearance-none rounded-full focus:outline-none", {
    variants: {
        size: {
            sm: "border size-3",
            base: "border size-4",
            md: "border-2 size-5",
            lg: "border-2 size-6",
        },
        color: {
            green: "border-green",
            blue: "border-blue",
            red: "border-red",
            yellow: "border-yellow",
            primary: "border-primary",
        },
    },
    defaultVariants: {
        size: "base",
        color: "primary",
    },
})

const internalVariants = cva("block absolute z-0 rounded-full", {
    variants: {
        size: {
            sm: "size-1",
            base: "size-2",
            md: "size-[10px]",
            lg: "size-3",
        },
        color: {
            green: "peer-checked:bg-green",
            blue: "peer-checked:bg-blue",
            red: "peer-checked:bg-red",
            yellow: "peer-checked:bg-yellow",
            primary: "peer-checked:bg-primary",
        },
    },
    defaultVariants: {
        size: "base",
        color: "primary",
    },
})

export const Radio = forwardRef<HTMLInputElement, RadioProps<typeof radioVariants & typeof internalVariants>>(
    ({ className, size, color, name, value, ...props }, ref) => {
        return (
            <label
                className="w-min inline-flex items-center justify-center relative hover:cursor-pointer"
                htmlFor={name}
            >
                <input
                    className={merge(radioVariants({ className, size, color }))}
                    type="radio"
                    name={name}
                    value={value}
                    ref={ref}
                    {...props}
                />
                <span className={internalVariants({ size, color })} />
            </label>
        )
    }
)

Radio.displayName = "Radio"
