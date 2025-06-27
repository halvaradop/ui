import { useState, useCallback } from "react"
import { type ComponentProps, type PropsWithChildren, merge } from "@halvaradop/ui-core"
import { type VariantProps, cva } from "class-variance-authority"
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

export const RadioGroup = ({
    className,
    variant,
    name,
    value,
    defaultValue,
    children,
    ref,
    onChange,
    ...props
}: RadioGroupProps<typeof radioGroupVariants>) => {
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
                role="radiogroup"
                {...props}
            >
                {children}
            </fieldset>
        </RadioGroupContext.Provider>
    )
}

RadioGroup.displayName = "RadioGroup"
