import { createContext, use, useState, useId, useMemo, useCallback, useEffect } from "react"
import type { PropsWithChildren } from "@halvaradop/ui-core"
import type { SelectProps } from "./select.js"

export interface SelectContextType extends Required<Pick<SelectProps, "name" | "open" | "value">> {
    id: string
    onOpenChange: () => void
    onValueChange: (value: string) => void
}

export const SelectContext = createContext<SelectContextType>({
    id: "select-id",
    name: "default",
    open: false,
    onOpenChange: () => undefined,
    value: "",
    onValueChange: () => undefined,
})

export const useSelect = () => {
    const context = use(SelectContext)
    if (!context) {
        throw new Error("useSelect must be used within a Select")
    }
    return context
}

export const SelectProvider = ({
    children,
    name,
    defaultValue,
    defaultOpen,
    value,
    open,
    onValueChange,
    onOpenChange,
}: PropsWithChildren<SelectProps>) => {
    const selectId = useId()
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen ?? open ?? false)
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue ?? value ?? "")

    const handleOpenChange = useCallback(() => {
        setIsOpen((prev) => !prev)
        onOpenChange?.(!isOpen)
    }, [isOpen, onOpenChange])

    const handleValueChange = useCallback(
        (value: string) => {
            handleOpenChange()
            setSelectedValue(value)
            onValueChange?.(value)
        },
        [handleOpenChange, onValueChange]
    )

    const context = useMemo<SelectContextType>(
        () => ({
            id: selectId,
            name,
            open: isOpen,
            onOpenChange: handleOpenChange,
            value: selectedValue,
            onValueChange: handleValueChange,
        }),
        [selectId, name, isOpen, selectedValue, handleValueChange, handleOpenChange]
    )

    useEffect(() => {
        if (open === undefined) {
            return
        }
        setIsOpen(open)
    }, [open])

    useEffect(() => {
        if (!value) {
            return
        }
        setSelectedValue(value)
    }, [value])

    return <SelectContext value={context}>{children}</SelectContext>
}

SelectContext.displayName = "SelectContext"
