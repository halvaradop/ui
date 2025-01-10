import { type ReactNode, type ComponentProps, Children, isValidElement, cloneElement } from "react"
import type { HTMLTag } from "./types.js"

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
