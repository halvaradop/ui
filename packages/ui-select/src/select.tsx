import { useId } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { SelectProvider } from "./context.js"

export type SelectProps = ComponentProps<"ul"> & {
    name: string
    defaultValue?: string
}

export const Select = ({ className, children, name, defaultValue, ref, ...props }: SelectProps) => {
    const selectId = useId()
    return (
        <SelectProvider name={name} defaultValue={defaultValue}>
            <ul
                id={selectId}
                className={merge("text-on-surface relative", className)}
                ref={ref}
                role="combobox"
                aria-haspopup="listbox"
                aria-controls={`${selectId}-listbox`}
                {...props}
            >
                {children}
            </ul>
        </SelectProvider>
    )
}

Select.displayName = "Select"
