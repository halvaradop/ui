import { forwardRef, ComponentProps } from "react"
import type { ArgsFunction } from "@halvaradop/ts-utility-types"
import { cva, type VariantProps } from "class-variance-authority"
import { merge } from "@halvaradop/ui-core"

export type ButtonProps<T extends ArgsFunction> = Omit<ComponentProps<"button">, "size"> & VariantProps<T>

export const buttonVariants = cva("flex items-center justify-center font-semibold border transition hover:border-transparent hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", {
	variants: {
		variant: {
			base: "text-white border-black bg-black focus-visible:ring-black",
			ghost: "text-black border-transparent bg-transparent bg-blend-difference focus-visible:ring-0 focus-visible:ring-offset-0",
			link: "text-black underline underline-offset-4 decoration-black border-none focus-visible:ring-0 focus-visible:ring-offset-0",
			destructive: "text-white border-red-500 bg-red-500 focus-visible:ring-red-500",
			outline: "text-black border-black focus-visible:ring-black",
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
		<button className={merge(buttonVariants({ className, variant, size, fullWidth, fullRounded }))} ref={ref} role="button" {...props}>
			{children}
		</button>
	)
})
