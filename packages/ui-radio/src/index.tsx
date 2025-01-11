import { ComponentProps } from "react"
import { merge, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type RadioProps<T extends ArgsFunction> = VariantProps<T> & Omit<ComponentProps<"input">, "type" | "size">

export const radioVariants = cva("peer appearance-none rounded-full", {
    variants: {
        size: {
            sm: "border size-3",
            base: "border size-4",
            md: "border-2 size-5",
            lg: "border-2 size-6",
        },
        color: {
            green: "border-green-500",
            blue: "border-blue-500",
            red: "border-red-500",
            yellow: "border-yellow-500",
            black: "border-black",
        },
    },
    defaultVariants: {
        size: "base",
        color: "black",
    },
})

const internalVariants = cva("block absolute rounded-full", {
    variants: {
        size: {
            sm: "size-1",
            base: "size-2",
            md: "size-[10px]",
            lg: "size-3",
        },
        color: {
            green: "peer-checked:bg-green-500",
            blue: "peer-checked:bg-blue-500",
            red: "peer-checked:bg-red-500",
            yellow: "peer-checked:bg-yellow-500",
            black: "peer-checked:bg-black",
        },
    },
    defaultVariants: {
        size: "base",
        color: "black",
    },
})

export const Radio = ({ className, size, color, name, ...props }: RadioProps<typeof radioVariants & typeof internalVariants>) => {
    return (
        <label className="flex items-center justify-center relative" htmlFor={name}>
            <input className={merge(radioVariants({ className, size, color }))} type="radio" name={name} {...props} />
            <span className={internalVariants({ size, color })} />
        </label>
    )
}
