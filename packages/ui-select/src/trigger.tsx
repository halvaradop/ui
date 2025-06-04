import { forwardRef } from "react"
import { ComponentProps, merge } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectTriggerProps = ComponentProps<"button">

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const { id, selectedValue, onTrigger, open } = useSelect()

        const capitalize = (value: string) => (value ? value.charAt(0).toUpperCase() + value.slice(1) : "")

        return (
            <button
                className={merge(
                    "w-full h-9 px-[calc(var(--size-base)*0.4)] flex items-center justify-between border border-border rounded-(--rounded) transition-colors bg-surface hover:cursor-pointer hover:border-primary hover:bg-ghost focus-visible:outline-solid focus-visible:outline",
                    className
                )}
                ref={ref}
                id={`${id}-trigger`}
                type="button"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={`${id}-listbox`}
                aria-labelledby={`${id}-label`}
                onClick={onTrigger}
                {...props}
            >
                {selectedValue ? capitalize(selectedValue) : children}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="text-on-surface fill-current"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                >
                    <path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z" />
                </svg>
            </button>
        )
    }
)

SelectTrigger.displayName = "SelectTrigger"
