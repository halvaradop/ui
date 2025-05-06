import { Radio as DefaultRadio, radioVariants, type RadioProps } from "@halvaradop/ui-radio"
import { useRadioGroup } from "./context.js"

const Radio = ({
    className,
    name,
    value,
    ref,
    ...props
}: Omit<RadioProps<typeof radioVariants>, "value" | "onChange"> & { value: string }) => {
    const { name: defaultName, selectedValue, onChange } = useRadioGroup()

    return (
        <DefaultRadio
            className={className}
            ref={ref}
            name={name ?? defaultName}
            value={value}
            checked={selectedValue === value}
            onChange={() => onChange?.(value)}
            {...props}
        />
    )
}

Radio.displayName = "Radio"

export { Radio, radioVariants, type RadioProps }
