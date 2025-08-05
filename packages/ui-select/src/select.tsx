import type { FunctionComponent } from "react"
import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { SelectProvider, useSelect } from "./context.js"
import { SelectList } from "./list.js"
import { SelectOption } from "./option.js"
import { SelectTrigger } from "./trigger.js"

export type SelectProps = ComponentProps<"div"> & {
    name: string
    defaultValue?: string
    open?: boolean
    onValueChange?: (value: string) => void
    onOpenChange?: (value: boolean) => void
}

interface SelectComponent extends FunctionComponent<SelectProps> {
    List: typeof SelectList
    Option: typeof SelectOption
    Trigger: typeof SelectTrigger
}

const SelectRoot = ({
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

const Select = SelectRoot as SelectComponent

Select.List = SelectList
Select.Option = SelectOption
Select.Trigger = SelectTrigger

Select.displayName = "Select"

export { Select }
