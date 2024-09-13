import { forwardRef, ButtonHTMLAttributes } from "react"
import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"

export type ButtonProps<T extends ArgsFunction> = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> & VariantProps<T>

export const buttonVariants = cva("flex items-center justify-center border focus-visible:outline-none", {
	variants: {
		variant: {
			base: "",
			shadow: "",
			ghost: "",
			link: "",
		},
		size: {
			sm: "h-9 px-3 text-sm rounded-md",
			md: "h-10 px-4 text-base rounded-md",
			lg: "h-10 px-5 text-lg rounded-md",
			xl: "h-11 px-4 text-lg rounded-lg",
		},
		fullWidth: {
			true: "w-full",
			false: "w-fit",
		},
		fullRounded: {
			true: "rounded-full",
			false: "rounded",
		},
	},
	defaultVariants: {
		size: "md",
		fullWidth: false,
		fullRounded: false,
	},
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps<typeof buttonVariants>>(({ className, size, fullWidth, fullRounded, children }, ref) => {
	return (
		<button className={buttonVariants({ className, size, fullWidth, fullRounded })} ref={ref}>
			{children}
		</button>
	)
})
