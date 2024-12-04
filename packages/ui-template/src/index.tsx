import { ComponentProps } from "react"
import { merge, cva, type VariantProps, type ArgsFunction } from "@halvaradop/ui-core"

export type IndexProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"div">

export const indexVariants = cva("", {
    variants: {},
})

export const Index = () => {
    return <div></div>
}
