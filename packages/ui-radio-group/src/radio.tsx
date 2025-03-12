import { Radio as RadioComponent, radioVariants } from "@halvaradop/ui-radio"
import { useRadioGroup } from "./context.js"

export const Radio = ({ value, ...props }: any) => {
    const { name, selectedValue, onChange } = useRadioGroup()
    return <RadioComponent name={name} value={value} onChange={onChange} checked={selectedValue === value} {...props} />
}
