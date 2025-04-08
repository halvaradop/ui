import { ComponentProps, merge } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectTriggerProps = ComponentProps<"button">

export const SelectTrigger = ({ className, children, ref, ...props }: SelectTriggerProps) => {
    const { id, selectedValue, onTrigger, open } = useSelect()

    const capitalize = (value: string) => (value ? value.charAt(0).toUpperCase() + value.slice(1) : "")

    return (
        <button
            className={merge(
                "w-full h-9 px-3 flex items-center justify-between text-secondary border border-primary rounded-md bg-primary hover:cursor-pointer",
                className
            )}
            id={`${id}-trigger`}
            ref={ref}
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={`${id}-listbox`}
            aria-labelledby={`${id}-label`}
            type="button"
            onClick={onTrigger}
            {...props}
        >
            {selectedValue ? capitalize(selectedValue) : children}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="text-secondary fill-current"
                aria-hidden="true"
                focusable="false"
                role="img"
            >
                <path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z" />
            </svg>
        </button>
    )
}

SelectTrigger.displayName = "SelectTrigger"
