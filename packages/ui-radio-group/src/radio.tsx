import { forwardRef } from "react"
import { merge, type ComponentProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"
import { useRadioGroup } from "./context.js"

interface InternalRadioProps {
    value: string
}

export type RadioProps<T extends ArgsFunction> = VariantProps<T> &
    VariantProps<typeof internalVariants> &
    ComponentProps<"input", "type" | "size" | "color" | "value" | "onChange"> &
    InternalRadioProps

export const radioVariants = cva(
    "peer relative z-10 border-border appearance-none rounded-full focus:outline-none hover:cursor-pointer disabled:cursor-not-allowed",
    {
        variants: {
            size: {
                sm: "size-[calc(var(--size-sm)*0.5)] border",
                base: "size-[calc(var(--size-base)*0.5)] border",
                md: "size-[calc(var(--size-md)*0.5)] border-2",
                lg: "size-[calc(var(--size-lg)*0.5)] border-2",
            },
        },
        defaultVariants: {
            size: "base",
        },
    }
)

const internalVariants = cva("size-3/5 block absolute z-0 rounded-full bg-surface", {
    variants: {
        color: {
            primary: "peer-checked:bg-primary",
            green: "peer-checked:bg-success",
            red: "peer-checked:bg-danger",
        },
    },
    defaultVariants: {
        color: "primary",
    },
})

export const Radio = forwardRef<HTMLInputElement, RadioProps<typeof radioVariants>>(
    ({ className, size, color, name, value, ...props }, ref) => {
        const { name: defaultName, selectedValue, onChange } = useRadioGroup()

        return (
            <label className="w-min inline-flex items-center justify-center relative z-20" htmlFor={name}>
                <input
                    className={merge(radioVariants({ className, size }))}
                    type="radio"
                    name={name ?? defaultName}
                    value={value}
                    checked={selectedValue === value}
                    onChange={() => onChange?.(value)}
                    ref={ref}
                    {...props}
                />
                <span className={internalVariants({ color })} />
            </label>
        )
    }
)

Radio.displayName = "Radio"
