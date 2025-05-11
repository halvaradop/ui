import {
    type ReactNode,
    type ComponentProps,
    Children,
    isValidElement,
    cloneElement,
    HtmlHTMLAttributes,
    ReactElement,
} from "react"
import type { HTMLTag } from "@halvaradop/ui-core"

/**
 * Slot is a component that allows you to pass props to its children.
 * It is useful for creating components that need to pass props to their children.
 *
 * @param {ComponentProps<Element>} props - The props to pass to the children.
 * @example
 * ```tsx
 * <Slot className="text-red-500">
 *   <span>Hello</span>
 * </Slot>
 * ```
 */
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
type SlotWithAsChild<Component extends HTMLTag, Element extends HTMLElement> =
    | ({ asChild?: false } & ComponentProps<Component>)
    | { asChild: true; children: ReactNode; ref?: React.Ref<Element> | undefined }

export type SlotProps<Component extends HTMLTag, Element extends HTMLElement = never> = SlotWithAsChild<
    Component,
    Element
> & { className?: string }
