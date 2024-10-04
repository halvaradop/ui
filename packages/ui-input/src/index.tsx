import { forwardRef, ComponentProps } from "react"
import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"
import { merge } from "@halvaradop/ui-core"

export type InputProps<T extends ArgsFunction> = Omit<ComponentProps<"input">, "size"> & VariantProps<T>

export const inputVariants = cva("text-slate-600 border focus-within:outline-none ", {
	variants: {
		variant: {
			base: "caret-slate-600 border-gray-300",
			outline: "focus-within:ring-1 focus-within:border-slate-700 focus-within:ring-slate-700",
			required:
				"focus-within:ring-1 focus-within:border-slate-700 focus-within:ring-slate-700 usinvalid:text-rose-300 usinvalid:placeholder-rose-400  usinvalid:border-rose-400 usinvalid:focus-within:ring-rose-400 usvalid:text-green-400 usvalid:border-green-400 usvalid:focus-within:ring-green-400 input-empty:border-slate-700 input-empty:focus-within:ring-slate-700 input-empty:caret-slate-600",
		},
		size: {
			sm: "h-8 indent-2 text-sm rounded-md",
			base: "h-9 indent-3 rounded-lg",
			md: "h-10 indent-3 rounded-lg",
			lg: "h-11 indent-4 text-lg rounded-xl",
		},
		fullWidth: {
			true: "w-full",
			false: "w-fit",
		},
		fullRounded: {
			true: "rounded-full",
		},
	},
	defaultVariants: {
		variant: "base",
		size: "base",
		fullWidth: true,
		fullRounded: false,
	},
})

export const Input = forwardRef<HTMLInputElement, InputProps<typeof inputVariants>>(({ className, variant, size, fullWidth, fullRounded, type, ...props }, ref) => {
	return <input className={merge(inputVariants({ className, variant, size, fullWidth, fullRounded }))} type={type} ref={ref} {...props} />
})
