import { forwardRef, ButtonHTMLAttributes } from "react"
import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"

export type ButtonProps<T extends ArgsFunction> = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> & VariantProps<T>

export const buttonVariants = cva("flex items-center justify-center border focus-visible:outline-none", {
	variants: {
		variant: {
			base: "text-white border-black focus-visible:ring-1 focus:ring-black bg-red-400",
			ghost: "text-black border-transparent bg-transparent",
			link: "text-black border-none bg-transparent",
		},
		size: {
			sm: "h-9 px-3 text-sm rounded-md",
			base: "h-10 px-4 text-base rounded-md",
			md: "h-10 px-4 text-base rounded-md",
			lg: "h-11 px-4 text-lg rounded-lg",
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
		variant: "base",
		size: "base",
		fullWidth: false,
		fullRounded: false,
	},
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps<typeof buttonVariants>>(({ className, variant, size, fullWidth, fullRounded, children, ...props }, ref) => {
	return (
		<button className={buttonVariants({ className, variant, size, fullWidth, fullRounded })} ref={ref} {...props}>
			{children}
		</button>
	)
})
