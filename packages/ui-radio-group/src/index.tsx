"use client"
import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { merge, type ComponentProps, type WithChildrenProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"
import { RadioGroupContext } from "./context.js"

export type RadioGroupProps<T extends ArgsFunction> = VariantProps<T> &
    WithChildrenProps<ComponentProps<"fieldset", "defaultValue" | "onChange">> & {
        defaultValue?: string
        onChange?: ChangeEventHandler<HTMLInputElement>
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

export const RadioGroup = ({
    className,
    variant,
    name,
    defaultValue,
    children,
    ref,
    onChange,
    ...props
}: RadioGroupProps<typeof radioGroupVariants>) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
        setSelectedValue(event.target.value)
    }

    return (
        <RadioGroupContext.Provider value={{ name, selectedValue, onChange: handleChange }}>
            <fieldset
                className={merge(radioGroupVariants({ className, variant }))}
                ref={ref}
                name={name}
                defaultValue={defaultValue}
                data-value={selectedValue}
                data-name={name}
                {...props}
            >
                {children}
            </fieldset>
        </RadioGroupContext.Provider>
    )
}

RadioGroup.displayName = "RadioGroup"
