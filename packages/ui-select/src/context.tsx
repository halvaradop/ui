import {
    type MouseEventHandler,
    type MouseEvent,
    createContext,
    use,
    useState,
    useId,
    useMemo,
    useCallback,
} from "react"

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

    const handleTrigger = useCallback(() => {
        setOpen((prev) => !prev)
    }, [])

    const handleChange = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const value = event.currentTarget.dataset.value ?? ""
            handleTrigger()
            setSelectedValue(value)
        },
        [handleTrigger]
    )

    const context = useMemo(
        () => ({
            id: selectId,
            name,
            selectedValue,
            open,
            onTrigger: handleTrigger,
            onChange: handleChange,
        }),
        [name, handleChange, handleTrigger, open, selectId, selectedValue]
    )

    return <SelectContext value={context}>{children}</SelectContext>
}

SelectContext.displayName = "SelectContext"
