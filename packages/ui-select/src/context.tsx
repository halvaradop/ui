import { createContext, useContext, useState, useId, type MouseEventHandler, type MouseEvent } from "react"

export interface SelectContextType {
    id: string
    open: boolean
    onTrigger: () => void
    name: string
    selectedValue: string
    onChange: MouseEventHandler<HTMLButtonElement>
}

export const SelectContext = createContext<SelectContextType>({
    id: "select-id",
    open: false,
    name: "default",
    selectedValue: "",
    onTrigger: () => {},
    onChange: () => {},
})

export const useSelect = () => {
    const context = useContext(SelectContext)
    if (!context) {
        throw new Error("useSelect must be used within a Select")
    }
    return context
}

interface SelectProviderProps {
    children: React.ReactNode
    name: string
    defaultValue?: string
}

export const SelectProvider = ({ name, defaultValue, children }: SelectProviderProps) => {
    const selectId = useId()
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue ?? "")

    const handleTrigger = () => {
        setOpen((prev) => !prev)
    }

    const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.dataset.value ?? ""
        handleTrigger()
        setSelectedValue(value)
    }

    return (
        <SelectContext.Provider
            value={{ id: selectId, name, selectedValue, open, onTrigger: handleTrigger, onChange: handleChange }}
        >
            {children}
        </SelectContext.Provider>
    )
}

SelectContext.displayName = "SelectContext"
