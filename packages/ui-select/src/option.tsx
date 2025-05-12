import { forwardRef } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { useSelect } from "./context.js"

export type SelectItemProps = ComponentProps<"li", "value"> & {
    value?: string | number
}

export const SelectOption = forwardRef<HTMLLIElement, SelectItemProps>(
    ({ className, value, children, ...props }, ref) => {
        const { onChange } = useSelect()

        return (
            <li
                className={merge(
                    "w-full h-9 px-3 flex items-center text-secondary rounded-md hover:bg-primary-hover hover:cursor-pointer",
                    className
                )}
                ref={ref}
                role="option"
                data-value={value}
                onClick={onChange}
                tabIndex={-1}
                {...props}
            >
                {children}
            </li>
        )
    }
)

SelectOption.displayName = "SelectOption"
