import { createContext, useContext, ChangeEventHandler } from "react"

export interface RadioGroupContext {
    name?: string
    selectedValue?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const RadioGroupContext = createContext<RadioGroupContext>({
    name: "default",
    selectedValue: "",
    onChange: () => {},
})

export const useRadioGroup = () => {
    const context = useContext(RadioGroupContext)
    if (!context) {
        throw new Error("useRadioGroup must be used within a RadioGroup")
    }
    return context
}

RadioGroupContext.displayName = "RadioGroupContext"
