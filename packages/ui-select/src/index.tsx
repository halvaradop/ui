import { Select as SelectRoot, type SelectProps } from "./select.js"
import { SelectList } from "./list.js"
import { SelectOption } from "./option.js"
import { SelectTrigger } from "./trigger.js"

interface SelectComponent extends React.FC<SelectProps> {
    List: typeof SelectList
    Option: typeof SelectOption
    Trigger: typeof SelectTrigger
}

const Select = SelectRoot as SelectComponent

Select.List = SelectList
Select.Option = SelectOption
Select.Trigger = SelectTrigger

export * from "./context.js"
export * from "./select.js"
export * from "./trigger.js"
export * from "./list.js"
export * from "./option.js"
