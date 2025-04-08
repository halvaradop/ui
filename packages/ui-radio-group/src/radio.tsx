import { Radio as DefaultRadio, radioVariants, type RadioProps } from "@halvaradop/ui-radio"
import { useRadioGroup } from "./context.js"

const Radio = ({ name, value, ref, ...props }: Omit<RadioProps<typeof radioVariants>, "onChange">) => {
    const { name: defaultName, selectedValue, onChange } = useRadioGroup()

    return (
        <DefaultRadio
            ref={ref}
            name={name ?? defaultName}
            value={value}
            checked={selectedValue === value}
            onChange={onChange}
            {...props}
        />
    )
}

Radio.displayName = "Radio"

export { Radio, radioVariants, type RadioProps }
