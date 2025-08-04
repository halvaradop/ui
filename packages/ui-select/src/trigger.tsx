import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectTriggerProps = ComponentProps<"button">

export const SelectTrigger = ({ className, children, ref, ...props }: SelectTriggerProps) => {
    const { id, selectedValue, onTrigger, open } = useSelect()

    const capitalize = (value: string) => (value ? value.charAt(0).toUpperCase() + value.slice(1) : "")

    return (
        <button
            className={merge(
                "w-full h-(--size-base) px-[calc(var(--size-base)*0.4)] flex items-center justify-between border border-border rounded-(--rounded) transition-colors bg-surface hover:cursor-pointer hover:border-primary hover:bg-ghost focus-visible:outline-solid focus-visible:outline",
                className
            )}
            ref={ref}
            id={`${id}-trigger`}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={`${id}-listbox`}
            aria-labelledby={`${id}-trigger`}
            onClick={onTrigger}
            {...props}
        >
            {selectedValue ? capitalize(selectedValue) : children}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className={merge("text-on-surface fill-current transition ease-in-out duration-200", {
                    "rotate-180": open,
                })}
                aria-hidden="true"
                focusable="false"
            >
                <path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z" />
            </svg>
        </button>
    )
}

SelectTrigger.displayName = "SelectTrigger"
