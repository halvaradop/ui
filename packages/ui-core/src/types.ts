import type { PropsWithChildren as WithChildren } from "react"

/**
 * HTMLTag
 * Represents any valid HTML tag name (e.g., "div", "button", etc.) or a custom React component constructor.
 * Useful for components that accept a dynamic tag or custom component as their root element.
 *
 * @example
 * import { HTMLTag } from "@halvaradop/ui-core"
 * // or a custom React component
 * const tag: HTMLTag = "section"
 */
export type HTMLTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>

/**
 * PropsWithChildren
 * Ensures the given props type always includes a required `children` prop.
 * Similar to React.PropsWithChildren, but enforces that `children` is required, not optional.
 *
 * @example
 * ```ts
 * import { PropsWithChildren } from "@halvaradop/ui-core"
 *
 * interface MyComponentProps {
 *   title: string
 *   description: string
 * }
 *
 * type MyComponentWithChildrenProps = PropsWithChildren<MyComponentProps>
 *
 * const MyComponent = ({ title, description, children }: MyComponentWithChildrenProps) => {
 *  // Now `children` is required in MyPropsWithChildren
 *  return null
 * }
 * ```
 */
export type PropsWithChildren<Props extends object> = Omit<Props, "children"> & Required<WithChildren>

/**
 * HTMLTagAttributes
 * Returns the valid attributes for a given HTML tag or custom component.
 * For standard HTML tags, returns the corresponding JSX attributes.
 * For custom components, returns the constructor type.
 *
 * @example
 * // All valid button attributes
 * type ButtonAttrs = HTMLTagAttributes<"button">
 */
export type HTMLTagAttributes<Tag extends HTMLTag> = Tag extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[Tag]
    : React.JSXElementConstructor<Tag>

/**
 * ComponentProps
 * Returns the props for a given HTML tag, with the option to exclude specific attributes.
 * Useful for creating component APIs that closely match native HTML elements but omit certain props.
 *
 * @example
 * // All div props except className and style
 * type DivProps = ComponentProps<"div", "className" | "style">
 */
export type ComponentProps<Tag extends HTMLTag, ExcludedAttributes extends keyof HTMLTagAttributes<Tag> = never> = Omit<
    HTMLTagAttributes<Tag>,
    ExcludedAttributes
>
