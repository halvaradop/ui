import { forwardRef } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectItemProps = ComponentProps<"li", "value"> & {
    value?: string | number
}

export const SelectOption = forwardRef<HTMLLIElement, SelectItemProps>(
    ({ className, value, children, ...props }, ref) => {
        const { selectedValue, onChange } = useSelect()

        return (
            <li
                className={merge(
                    "w-full h-9 px-3 flex items-center transition-colors rounded-md hover:cursor-pointer hover:bg-ghost aria-selected:text-on-primary aria-selected:bg-primary",
                    className
                )}
                ref={ref}
                role="option"
                data-value={value}
                onClick={onChange}
                aria-selected={selectedValue === value}
                tabIndex={-1}
                {...props}
            >
                {children}
            </li>
        )
    }
)

SelectOption.displayName = "SelectOption"
