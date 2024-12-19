import { type ReactNode, Children, isValidElement, cloneElement, ComponentProps } from "react"

export const Slot = ({ children, ...props }: { children: React.ReactNode }) => {
    if (isValidElement(children)) {
        return cloneElement(children, { ...props, ...children.props })
    }
    if (Children.count(children) > 1) {
        Children.only(null)
    }
    return null
}

/**
 * @internal
 */
type SlotWithAsChild<
    Component extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
    Element extends HTMLElement,
> =
    | ({ asChild?: false } & ComponentProps<Component>)
    | { asChild: true; children: ReactNode; ref?: React.Ref<Element> | undefined }

export type SlotProps<
    Component extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
    Element extends HTMLElement = never,
> = SlotWithAsChild<Component, Element> & { className?: string }
