import { createContext, useContext } from "react"

export interface RadioGroupContextType {
    name?: string
    selectedValue?: string
    onChange?: (value: string) => void
}

export const RadioGroupContext = createContext<RadioGroupContextType>({
    name: "default",
    selectedValue: "",
})

export const useRadioGroup = () => {
    const context = useContext(RadioGroupContext)
    if (!context) {
        throw new Error("useRadioGroup must be used within a RadioGroup")
    }
    return context
}

RadioGroupContext.displayName = "RadioGroupContext"
