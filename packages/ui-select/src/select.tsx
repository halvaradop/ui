import { forwardRef } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { SelectProvider, useSelect } from "./context.js"

export type SelectProps = ComponentProps<"ul"> & {
    name: string
    defaultValue?: string
}

export const Select = forwardRef<HTMLUListElement, SelectProps>(
    ({ className, children, name, defaultValue, ...props }, ref) => {
        const { id, open } = useSelect()

        return (
            <SelectProvider name={name} defaultValue={defaultValue}>
                <ul
                    className={merge("text-on-surface relative", className)}
                    ref={ref}
                    id={id}
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-controls={`${id}-listbox`}
                    aria-expanded={open}
                    aria-labelledby={`${id}-trigger`}
                    {...props}
                >
                    {children}
                </ul>
            </SelectProvider>
        )
    }
)

Select.displayName = "Select"
