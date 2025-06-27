import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectItemProps = ComponentProps<"button", "value"> & {
    value?: string | number
    disabled?: boolean
}

export const SelectOption = ({ className, value, children, ref, ...props }: SelectItemProps) => {
    const { id, selectedValue, onChange } = useSelect()
    const isSelected = selectedValue === value

    return (
        <button
            className={merge(
                "w-full h-9 px-[calc(var(--size-base)*0.4)] flex items-center transition-colors rounded-(--rounded) hover:cursor-pointer hover:bg-ghost aria-selected:text-on-primary aria-selected:bg-primary disabled:text-on-surface disabled:bg-disabled disabled:cursor-not-allowed",
                className
            )}
            ref={ref}
            id={`${id}-option-${value}`}
            role="option"
            data-value={value}
            tabIndex={0}
            aria-selected={isSelected}
            aria-labelledby={`${id}-option-${value}`}
            onClick={onChange}
            {...props}
        >
            {children}
        </button>
    )
}

SelectOption.displayName = "SelectOption"
