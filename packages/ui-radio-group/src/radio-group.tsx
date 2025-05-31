import { forwardRef, useState, useCallback } from "react"
import { merge, type ComponentProps, type PropsWithChildren } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"
import { RadioGroupContext } from "./context.js"

export type RadioGroupProps<T extends VoidFunction> = VariantProps<T> &
    PropsWithChildren<ComponentProps<"fieldset", "defaultValue" | "onChange">> & {
        value?: string
        defaultValue?: string
        onChange?: (value: string) => void
    }

export const radioGroupVariants = cva("flex", {
    variants: {
        variant: {
            row: "flex-row gap-x-[calc(var(--size-sm)*0.27)]",
            column: "flex-col gap-y-[calc(var(--size-sm)*0.27)]",
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
