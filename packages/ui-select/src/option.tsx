import { merge } from "@halvaradop/ui-core"
import { type SlotProps, Slot } from "@halvaradop/ui-slot"
import { useSelect } from "./context.js"

export type SelectOptionProps = Omit<SlotProps<"button">, "value"> & {
    value: string
    disabled?: boolean
}

export const SelectOption = ({ className, value, children, ref, disabled, asChild, ...props }: SelectOptionProps) => {
    const { id, onValueChange } = useSelect()
    const SlotComponent = asChild ? Slot : "button"

    return (
        <SlotComponent
            className={merge(
                "w-full h-(--size-base) px-[calc(var(--size-base)*0.4)] flex items-center transition-colors rounded-(--rounded) hover:cursor-pointer hover:bg-ghost aria-selected:text-on-primary aria-selected:bg-primary disabled:text-on-surface disabled:bg-disabled disabled:cursor-not-allowed",
                className
            )}
            ref={ref}
            id={`${id}-option-${value}`}
            disabled={disabled}
            data-value={value}
            data-slot="select-option"
            tabIndex={0}
            aria-labelledby={`${id}-option-${value}`}
            onClick={() => onValueChange(value)}
            {...props}
        >
            {children}
        </SlotComponent>
    )
}

SelectOption.displayName = "SelectOption"
