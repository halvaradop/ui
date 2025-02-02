"use client"
import { useEffect, useRef } from "react"
import { merge, type ComponentProps, type WithChildrenProps, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type RadioGroupProps<T extends ArgsFunction> = VariantProps<T> & WithChildrenProps<ComponentProps<"fieldset">>

export const radioGroupVariants = cva("flex", {
    variants: {
        variant: {
            row: "flex-row gap-x-5",
            column: "flex-col gap-y-1",
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
    defaultValue,
    children,
    ref,
    ...props
}: RadioGroupProps<typeof radioGroupVariants>) => {
    // @ts-ignore
    const reference = useRef<HTMLFieldSetElement>(ref?.current)

    useEffect(() => {
        if (!reference.current) return
        const radioButtons = reference.current.querySelectorAll("input[type=radio]")
        radioButtons.forEach((radio) => {
            if (radio.getAttribute("value") === defaultValue) {
                radio.setAttribute("checked", "checked")
            }
            radio.setAttribute("name", name ?? "default-radio-group")
        })
    }, [])

    return (
        <fieldset
            className={merge(radioGroupVariants({ className, variant }))}
            defaultValue={defaultValue}
            ref={reference}
            {...props}
        >
            {children}
        </fieldset>
    )
}
