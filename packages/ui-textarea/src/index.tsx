import { type ComponentProps, merge } from "@halvaradop/ui-core"
import { type VariantProps, cva } from "class-variance-authority"

export type TextareaProps<T extends VoidFunction> = ComponentProps<"textarea"> & VariantProps<T>

export const textareaVariants = cva(
    "w-full text-on-surface border border-solid border-border rounded-(--rounded) bg-surface placeholder:text-muted outline-0 focus-visible:outline-solid disabled:cursor-not-allowed disabled:text-on-secondary disabled:border-disabled disabled:bg-disabled transition-colors resize-none disabled:resize-none",
    {
        variants: {
            variant: {
                base: "caret-on-surface focus-visible:outline focus-visible:outline-border",
            },
            size: {
                sm: "p-[calc(var(--size-sm)*0.3)] text-sm min-h-[calc(var(--size-sm)*2)]",
                base: "p-[calc(var(--size-base)*0.3)] text-base min-h-[calc(var(--size-base)*2.5)]",
                md: "p-[calc(var(--size-md)*0.3)] text-md min-h-[calc(var(--size-md)*3)]",
                lg: "p-[calc(var(--size-lg)*0.3)] text-lg min-h-[calc(var(--size-lg)*3.5)]",
            },
            resize: {
                content: "field-sizing-content",
                both: "resize field-sizing-content",
                horizontal: "resize-x field-sizing-content",
                vertical: "resize-y field-sizing-content",
            },
            fullWidth: {
                true: "w-full",
                false: "w-fit min-w-[200px]",
            },
            fullRounded: {
                true: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "base",
            size: "base",
            resize: "vertical",
            fullWidth: true,
            fullRounded: false,
        },
    }
)

export const Textarea = ({
    className,
    variant,
    size,
    resize,
    fullWidth,
    fullRounded,
    ref,
    ...props
}: TextareaProps<typeof textareaVariants>) => {
    return (
        <textarea
            className={merge(textareaVariants({ className, variant, size, resize, fullWidth, fullRounded }))}
            ref={ref}
            {...props}
        />
    )
}

Textarea.displayName = "Textarea"
