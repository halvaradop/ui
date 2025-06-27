import { type MouseEventHandler, type MouseEvent, createContext, use, useState, useId } from "react"

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
} as SelectContextType)

export const useSelect = () => {
    const context = use(SelectContext)
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
        <SelectContext
            value={{ id: selectId, name, selectedValue, open, onTrigger: handleTrigger, onChange: handleChange }}
        >
            {children}
        </SelectContext>
    )
}

SelectContext.displayName = "SelectContext"
