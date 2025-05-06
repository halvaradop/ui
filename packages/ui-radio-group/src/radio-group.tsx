"use client"
import { forwardRef, useState, useCallback } from "react"
import { merge, type ComponentProps, type WithChildrenProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"
import { RadioGroupContext } from "./context.js"

export type RadioGroupProps<T extends ArgsFunction> = VariantProps<T> &
    WithChildrenProps<ComponentProps<"fieldset", "defaultValue" | "onChange">> & {
        value?: string
        defaultValue?: string
        onChange?: (value: string) => void
    }

export const radioGroupVariants = cva("flex", {
    variants: {
        variant: {
            row: "flex-row gap-x-5",
            column: "flex-col gap-y-1",
        },
    },
    defaultVariants: {
        variant: "column",
    },
})

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps<typeof radioGroupVariants>>(
    ({ className, variant, name, value, defaultValue, children, onChange, ...props }, ref) => {
        const [selectedValue, setSelectedValue] = useState(defaultValue ?? value)

        const handleChange = useCallback(
            (value: string) => {
                setSelectedValue(value)
                onChange?.(value)
            },
            [onChange]
        )

        return (
            <RadioGroupContext.Provider value={{ name, selectedValue, onChange: handleChange }}>
                <fieldset
                    className={merge(radioGroupVariants({ className, variant }))}
                    ref={ref}
                    name={name}
                    data-value={selectedValue}
                    data-name={name}
                    {...props}
                >
                    {children}
                </fieldset>
            </RadioGroupContext.Provider>
        )
    }
)

RadioGroup.displayName = "RadioGroup"
