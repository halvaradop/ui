import {
    type MouseEventHandler,
    type MouseEvent,
    createContext,
    use,
    useState,
    useId,
    useMemo,
    useCallback,
    useEffect,
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
    open?: boolean
    onValueChange?: (value: string) => void
    onOpenChange?: (value: boolean) => void
}

export const SelectProvider = ({
    name,
    defaultValue,
    children,
    open,
    onValueChange,
    onOpenChange,
}: SelectProviderProps) => {
    const selectId = useId()
    const [isOpen, setIsOpen] = useState(open ?? false)
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue ?? "")

    const handleTrigger = useCallback(() => {
        setIsOpen((prev) => !prev)
        onOpenChange?.(!isOpen)
    }, [isOpen, onOpenChange])

    const handleChange = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const value = event.currentTarget.dataset.value ?? ""
            handleTrigger()
            setSelectedValue(value)
            onValueChange?.(value)
        },
        [handleTrigger, onValueChange]
    )

    const context = useMemo(
        () => ({
            id: selectId,
            name,
            selectedValue,
            open: isOpen,
            onTrigger: handleTrigger,
            onChange: handleChange,
        }),
        [name, handleChange, handleTrigger, isOpen, selectId, selectedValue]
    )

    useEffect(() => {
        if (open === undefined) {
            return
        }
        setIsOpen(open)
    }, [open])

    return <SelectContext value={context}>{children}</SelectContext>
}

SelectContext.displayName = "SelectContext"
