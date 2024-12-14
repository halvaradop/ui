import { ComponentProps } from "react"
import { merge, type ArgsFunction } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type IndexProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"div">

export const indexVariants = cva("", {
    variants: {},
})

export const Index = () => {
    return <div></div>
}
