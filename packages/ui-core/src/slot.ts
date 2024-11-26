import { type ReactNode, Children, isValidElement, cloneElement, ComponentProps } from "react"

export const Slot = ({ children, ...props }: { children: React.ReactNode }) => {
    if (isValidElement(children)) {
        const chilProps = children.props ?? {}
        return cloneElement(children, { ...props, ...chilProps })
    }
    if (Children.count(children) > 1) {
        Children.only(null)
    }
    return null
}

export type SlotWithAsChild<
    Component extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = ({ asChild?: false } & ComponentProps<Component>) | { asChild: true; children: ReactNode }

export type SlotProps<Component extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<unknown>> =
    SlotWithAsChild<Component> & { className?: string }
