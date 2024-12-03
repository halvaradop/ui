import { ComponentProps } from "react"
import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { merge, cva, type VariantProps } from "@halvaradop/ui-core"

export type IndexProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"div">

export const indexVariants = cva("", {
    variants: {},
})

export const Index = () => {
    return <div></div>
}
