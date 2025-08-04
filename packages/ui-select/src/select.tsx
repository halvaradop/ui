import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { SelectProvider, useSelect } from "./context.js"

export type SelectProps = ComponentProps<"div"> & {
    name: string
    defaultValue?: string
    open?: boolean
    onValueChange?: (value: string) => void
    onOpenChange?: (value: boolean) => void
}

export const Select = ({
    className,
    children,
    name,
    defaultValue,
    ref,
    open,
    onValueChange,
    onOpenChange,
    ...props
}: SelectProps) => {
    const { id, open: isOpen } = useSelect()

    return (
        <SelectProvider
            name={name}
            defaultValue={defaultValue}
            open={open}
            onValueChange={onValueChange}
            onOpenChange={onOpenChange}
        >
            <div
                className={merge("text-on-surface relative", className)}
                ref={ref}
                id={id}
                aria-haspopup="listbox"
                aria-controls={`${id}-listbox`}
                aria-expanded={isOpen}
                aria-labelledby={`${id}-trigger`}
                {...props}
            >
                {children}
            </div>
        </SelectProvider>
    )
}

Select.displayName = "Select"
