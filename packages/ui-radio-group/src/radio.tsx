import { Radio as RadioComponent, radioVariants, type RadioProps as RadioBaseProps } from "@halvaradop/ui-radio"
import { useRadioGroup } from "./context.js"

export const Radio = ({ className, size, color, value, ...props }: RadioBaseProps<typeof radioVariants>) => {
    const { name, selectedValue, onChange } = useRadioGroup()
    return (
        <RadioComponent
            className={radioVariants({ className, size, color })}
            name={name}
            value={value}
            onChange={onChange}
            checked={selectedValue === value}
            {...props}
        />
    )
}
