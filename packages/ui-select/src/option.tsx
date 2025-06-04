import { forwardRef } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectItemProps = ComponentProps<"li", "value"> & {
    value?: string | number
    disabled?: boolean
}

export const SelectOption = forwardRef<HTMLLIElement, SelectItemProps>(
    ({ className, value, children, ...props }, ref) => {
        const { id, selectedValue, onChange } = useSelect()
        const isSelected = selectedValue === value

        return (
            <li
                className={merge(
                    "w-full h-9 px-[calc(var(--size-base)*0.4)] flex items-center transition-colors rounded-(--rounded) hover:cursor-pointer hover:bg-ghost aria-selected:text-on-primary aria-selected:bg-primary disabled:text-on-surface disabled:bg-disabled disabled:cursor-not-allowed",
                    className
                )}
                ref={ref}
                id={`${id}-option-${value}`}
                role="option"
                data-value={value}
                tabIndex={isSelected ? 0 : -1}
                aria-selected={isSelected}
                onClick={onChange}
                {...props}
            >
                {children}
            </li>
        )
    }
)

SelectOption.displayName = "SelectOption"
