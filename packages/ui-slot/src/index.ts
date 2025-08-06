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
 * import { type SlotProps, Slot } from "@halvaradop/ui-slot"
 *
 * const Item = ({ children, asChild, ...props }: SlotProps<"div">) => {
 *   const SlotComponent = asChild ? Slot : "li"
 *
 *   return (
 *     <SlotComponent className="text-red-500">
 *       {children}
 *     </SlotComponent>
 *   )
 * }
 *
 * const List = () => {
 *   return (
 *     <ul>
 *       <Item asChild>
 *         <a href="#">Home</a>
 *       </Item>
 *       <Item asChild>
 *         <a href="#">About</a>
 *       </Item>
 *     </ul>
 *   )
 * }
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
 * `SlotProps` describes the props for the `Slot` component, supporting the `asChild` pattern.
 * This allows you to pass props directly to child components or render a native element.
 *
 * @example
 * import type { SlotProps } from "@halvaradop/ui-slot"
 *
 * // Example usage for a button element:
 * export type ButtonProps = SlotProps<"button">
 */
export type SlotProps<Component extends HTMLTag> = SlotWithAsChild<Component> & {
    className?: string
}
