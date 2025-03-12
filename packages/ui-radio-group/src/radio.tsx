import { Radio as RadioComponent, RadioProps, radioVariants } from "@halvaradop/ui-radio"
import { useRadioGroup } from "./context.js"
export * from "@halvaradop/ui-radio"

export const Radio = ({ value, ...props }: Omit<RadioProps<typeof radioVariants>, "onChange">) => {
    const { name, selectedValue, onChange } = useRadioGroup()
    return <RadioComponent name={name} value={value} onChange={onChange} checked={selectedValue === value} {...props} />
}
