import { type ComponentProps, type PropsWithChildren, merge } from "@halvaradop/ui-core"
import { type VariantProps, cva } from "class-variance-authority"
import { RadioGroupProvider, useRadioGroup } from "./context.js"

export type RadioGroupProps<T extends VoidFunction> = VariantProps<T> &
    PropsWithChildren<ComponentProps<"fieldset", "defaultValue" | "onChange">> & {
        name: string
        value?: string
        defaultValue?: string
        onValueChange?: (value: string) => void
    }

export const radioGroupVariants = cva("flex", {
    variants: {
        variant: {
            row: "flex-row gap-x-[calc(var(--size-sm)*0.27)]",
            column: "flex-col gap-y-[calc(var(--size-sm)*0.27)]",
        },
    },
    defaultVariants: {
        variant: "column",
    },
})

export const RadioGroup = ({
    className,
    variant,
    name,
    value,
    defaultValue,
    children,
    ref,
    onValueChange,
    ...props
}: RadioGroupProps<typeof radioGroupVariants>) => {
    const { id } = useRadioGroup()

    return (
        <RadioGroupProvider name={name} value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
            <fieldset
                className={merge(radioGroupVariants({ className, variant }))}
                ref={ref}
                id={id}
                name={name}
                data-name={name}
                data-slot="radio-group"
                {...props}
            >
                {children}
            </fieldset>
        </RadioGroupProvider>
    )
}

RadioGroup.displayName = "RadioGroup"
