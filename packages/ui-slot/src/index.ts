import {
    type Ref,
    type ComponentProps,
    type PropsWithChildren as WithChildren,
    Children,
    isValidElement,
    cloneElement,
} from "react"
import type { HTMLTag, PropsWithChildren } from "@halvaradop/ui-core"

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
export const Slot = ({ children, ...props }: WithChildren) => {
    if (isValidElement(children)) {
        const childrenProps = children.props ?? {}
        return cloneElement(children, { ...props, ...childrenProps })
    }
    if (Children.count(children) > 1) {
        Children.only(null)
    }
    return null
}

/**
 * @internal
 */
type SlotWithAsChild<Component extends HTMLTag, Element extends HTMLElement = never> =
    | ({ asChild?: false } & ComponentProps<Component>)
    | PropsWithChildren<{ asChild: true; ref?: Ref<Element> }>

/**
 * SlotProps is a type that represents the props of a Slot component. This type is
 * used to define the props of a Slot component that can be used with the `asChild`
 */
export type SlotProps<Component extends HTMLTag> = SlotWithAsChild<Component> & { className?: string }
