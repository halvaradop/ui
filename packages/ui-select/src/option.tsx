import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectItemProps = ComponentProps<"li", "value"> & {
    value?: string | number
    disabled?: boolean
}

export const SelectOption = ({ className, value, children, ref, ...props }: SelectItemProps) => {
    const { selectedValue, onChange } = useSelect()

    return (
        <li
            className={merge(
                "w-full h-9 px-[calc(var(--size-base)*0.4)] flex items-center transition-colors rounded-(--rounded) hover:cursor-pointer hover:bg-ghost aria-selected:text-on-primary aria-selected:bg-primary disabled:text-on-surface disabled:bg-disabled disabled:cursor-not-allowed",
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

SelectOption.displayName = "SelectOption"
