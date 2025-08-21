import { createContext, useCallback, useContext, useId, useMemo, useState, useEffect } from "react"
import type { RadioGroupProps, radioGroupVariants } from "./radio-group.js"

export interface RadioGroupContextType
    extends Required<Pick<RadioGroupProps<typeof radioGroupVariants>, "name" | "value">> {
    id: string
    onValueChange: (value: string) => void
}

export const RadioGroupContext = createContext<RadioGroupContextType>({
    id: "radio-group-id",
    name: "default",
    value: "",
    onValueChange: () => undefined,
})

export const useRadioGroup = () => {
    const context = useContext(RadioGroupContext)
    if (!context) {
        throw new Error("useRadioGroup must be used within a RadioGroup")
    }
    return context
}

export const RadioGroupProvider = ({
    children,
    name,
    value,
    defaultValue,
    onValueChange,
}: RadioGroupProps<typeof radioGroupVariants>) => {
    const radioGroupId = useId()
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue ?? value ?? "")

    const handleValueChange = useCallback(
        (value: string) => {
            onValueChange?.(value)
            setSelectedValue(value)
        },
        [onValueChange, setSelectedValue]
    )

    const context = useMemo<RadioGroupContextType>(
        () => ({
            id: radioGroupId,
            name,
            value: selectedValue,
            onValueChange: handleValueChange,
        }),
        [radioGroupId, name, selectedValue, handleValueChange]
    )

    useEffect(() => {
        if (!value) {
            return
        }
        setSelectedValue(value)
    }, [value])

    return <RadioGroupContext value={context}>{children}</RadioGroupContext>
}

RadioGroupContext.displayName = "RadioGroupContext"
RadioGroupProvider.displayName = "RadioGroupProvider"
