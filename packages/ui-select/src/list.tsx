import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectListProps = ComponentProps<"div">

export const SelectList = ({ children, className, ref, ...props }: SelectListProps) => {
    const { id, open } = useSelect()

    return (
        <div
            className={merge(
                "w-full p-1 border border-border rounded-(--rounded) absolute top-10 right-0 z-50 bg-surface",
                className,
                open ? "block" : "hidden"
            )}
            ref={ref}
            id={`${id}-listbox`}
            role="tablist"
            aria-labelledby={`${id}-list`}
            {...props}
        >
            {children}
        </div>
    )
}

SelectList.displayName = "SelectList"
