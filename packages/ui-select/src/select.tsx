import { type ComponentProps, type PropsWithChildren, merge } from "@halvaradop/ui-core"
import { SelectProvider, useSelect } from "./context.js"
import { SelectList } from "./list.js"
import { SelectOption } from "./option.js"
import { SelectTrigger } from "./trigger.js"

export type SelectProps = PropsWithChildren<ComponentProps<"div", "defaultValue" | "onChange">> & {
    name: string
    defaultValue?: string
    defaultOpen?: boolean
    value?: string
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
    value,
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
            value={value}
            onValueChange={onValueChange}
            onOpenChange={onOpenChange}
        >
            <div
                className={merge("text-on-surface relative z-auto", className)}
                ref={ref}
                id={id}
                data-slot="select"
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

Select.List = SelectList
Select.Option = SelectOption
Select.Trigger = SelectTrigger

Select.displayName = "Select"
