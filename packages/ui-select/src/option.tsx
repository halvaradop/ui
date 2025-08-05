import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectOptionProps = ComponentProps<"button", "value"> & {
    value?: string | number
    disabled?: boolean
}

export const SelectOption = ({ className, value, children, ref, ...props }: SelectOptionProps) => {
    const { id, onValueChange } = useSelect()

    return (
        <button
            className={merge(
                "w-full h-(--size-base) px-[calc(var(--size-base)*0.4)] flex items-center transition-colors rounded-(--rounded) hover:cursor-pointer hover:bg-ghost aria-selected:text-on-primary aria-selected:bg-primary disabled:text-on-surface disabled:bg-disabled disabled:cursor-not-allowed",
                className
            )}
            ref={ref}
            id={`${id}-option-${value}`}
            data-value={value}
            tabIndex={0}
            aria-labelledby={`${id}-option-${value}`}
            onClick={onValueChange}
            {...props}
        >
            {children}
        </button>
    )
}

SelectOption.displayName = "SelectOption"
