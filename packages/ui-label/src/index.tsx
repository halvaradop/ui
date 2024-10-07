import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"
import { merge, Slot, SlotProps, SlotWithAsChild } from "@halvaradop/ui-core"

export type LabelProps<T extends ArgsFunction> = SlotProps<"label"> & VariantProps<T>

export const labelVariants = cva("font-medium relative leading-none", {
	variants: {
		variant: {
			base: "text-slate-700",
			error: "hidden text-rose-400 absolute top-0 peer-usvalid:block peer-usvalid-empty:hidden",
			flex: "flex flex-col items-start",
		},
		size: {
			sm: "text-sm",
			base: "text-base",
			md: "text-lg",
		},
	},
	defaultVariants: {
		variant: "base",
		size: "base",
	},
})

export const Label = ({ className, variant, size, children, asChild, ...props }: LabelProps<typeof labelVariants>) => {
	const SlotComponent = asChild ? Slot : "label"
	return (
		<SlotComponent className={merge(labelVariants({ className, variant, size }))} {...props}>
			{children}
		</SlotComponent>
	)
}
