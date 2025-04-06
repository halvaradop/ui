import { forwardRef } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export const SelectList = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
    ({ children, className, ...props }, ref) => {
        const { id, open } = useSelect()

        return (
            <ul
                ref={ref}
                className={merge(
                    "w-full p-1 border border-primary rounded-md absolute top-10 right-0 bg-primary",
                    className,
                    open ? "block" : "hidden"
                )}
                role="listbox"
                aria-labelledby={`${id}-trigger`}
                {...props}
            >
                {children}
            </ul>
        )
    }
)

SelectList.displayName = "SelectList"
