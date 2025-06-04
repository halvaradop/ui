import { forwardRef } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export const SelectList = forwardRef<HTMLDivElement, ComponentProps<"div">>(
    ({ children, className, ...props }, ref) => {
        const { id, open } = useSelect()

        return (
            <div
                className={merge(
                    "w-full p-1 border border-border rounded-(--rounded) absolute top-10 right-0 bg-surface",
                    className,
                    open ? "block" : "hidden"
                )}
                ref={ref}
                id={`${id}-listbox`}
                role="listbox"
                aria-labelledby={`${id}-list`}
                {...props}
            >
                {children}
            </div>
        )
    }
)

SelectList.displayName = "SelectList"
