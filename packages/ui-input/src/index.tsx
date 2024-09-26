import { forwardRef, ComponentProps } from "react"
import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"

export type InputProps<T extends ArgsFunction> = Omit<ComponentProps<"input">, "size"> & VariantProps<T>

export const inputVariants = cva("border focus-within:outline-none focus-within:ring-1", {
	variants: {
		variant: {
			base: "focus-within:border-black focus-within:ring-black",
		},
		size: {
			sm: "h-8 indent-2 text-sm rounded-sm",
			base: "h-9 indent-3 rounded-md",
			md: "h-10 indent-3 rounded-md",
			lg: "h-11 indent-4 text-lg rounded-lg",
		},
		fullWidth: {
			true: "w-full",
			false: "w-fit",
		},
		fullRounded: {
			true: "rounded-full",
			false: "",
		},
	},
	defaultVariants: {
		variant: "base",
		size: "base",
		fullWidth: true,
		fullRounded: false,
	},
})

export const Input = forwardRef<HTMLInputElement, InputProps<typeof inputVariants>>(({ className, variant, size, fullWidth, fullRounded, type }, ref) => {
	return <input className={inputVariants({ className, variant, size, fullWidth, fullRounded })} type={type} ref={ref} />
})
