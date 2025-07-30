import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { SelectProvider, useSelect } from "./context.js"

export type SelectProps = ComponentProps<"div"> & {
    name: string
    defaultValue?: string
}

export const Select = ({ className, children, name, defaultValue, ref, ...props }: SelectProps) => {
    const { id, open } = useSelect()

    return (
        <SelectProvider name={name} defaultValue={defaultValue}>
            <div
                className={merge("text-on-surface relative", className)}
                ref={ref}
                id={id}
                aria-haspopup="listbox"
                aria-controls={`${id}-listbox`}
                aria-expanded={open}
                aria-labelledby={`${id}-trigger`}
                {...props}
            >
                {children}
            </div>
        </SelectProvider>
    )
}

Select.displayName = "Select"
