import { forwardRef } from "react"
import { merge, type ComponentProps } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

export type IndexProps<T extends VoidFunction> = VariantProps<T> & ComponentProps<"div">

export const indexVariants = cva("", {
    variants: {},
})

export const Index = forwardRef(() => {
    return <div></div>
})
