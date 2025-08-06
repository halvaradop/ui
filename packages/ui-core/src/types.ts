import type { PropsWithChildren as WithChildren, JSXElementConstructor, JSX } from "react"

/**
 * `HTMLTag` is a type representing any valid HTML tag name (e.g., "div", "button") or a custom React component constructor.
 * Useful for components that accept a dynamic tag or custom component as their root element.
 *
 * @example
 * import type { HTMLTag } from "@halvaradop/ui-core"
 *
 * // Standard HTML tag
 * const tag: HTMLTag = "section"
 *
 * // Custom React component
 * const tag: HTMLTag = MyCustomComponent
 */
export type HTMLTag = keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>

/**
 * `PropsWithChildren` is a utility type that ensures the provided props type always includes a required `children` prop.
 * Unlike React's `PropsWithChildren`, this enforces `children` as required, not optional.
 *
 * @example
 * import type { PropsWithChildren } from "@halvaradop/ui-core"
 *
 * interface MyComponentProps {
 *   title: string
 *   description: string
 * }
 *
 * type MyComponentWithChildrenProps = PropsWithChildren<MyComponentProps>
 *
 * const MyComponent = ({ title, description, children }: MyComponentWithChildrenProps) => {
 *   // `children` is now required in MyComponentWithChildrenProps
 *   return null
 * }
 */
export type PropsWithChildren<Props extends object> = Omit<Props, "children"> & Required<WithChildren>

/**
 * `HTMLTagAttributes` is a utility type that provides the valid props for a given HTML tag or custom React component.
 * - For standard HTML tags, it returns the corresponding JSX attributes.
 * - For custom components, it returns the component's props type.
 *
 * @example
 * import type { HTMLTagAttributes } from "@halvaradop/ui-core"
 *
 * // All valid button attributes
 * type ButtonAttrs = HTMLTagAttributes<"button">
 *
 * // All valid props for a custom component
 * type CustomComponentAttrs = HTMLTagAttributes<MyComponent>
 */
export type HTMLTagAttributes<Tag extends HTMLTag> = Tag extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[Tag]
    : JSXElementConstructor<Tag>

/**
 * `ComponentProps` is a utility type that returns the props for a given HTML tag or custom React component,
 * with the option to omit specific attributes.
 * This is useful for building component APIs that closely mirror native HTML elements or custom components,
 * while excluding certain props for safety or clarity.
 *
 * @example
 * import type { ComponentProps } from "@halvaradop/ui-core"
 *
 * // All props for a <div>, except `className` and `style`
 * type DivProps = ComponentProps<"div", "className" | "style">
 *
 * // All props for a custom component, omitting `onClick`
 * type CustomProps = ComponentProps<MyComponent, "onClick">
 */
export type ComponentProps<Tag extends HTMLTag, Keys extends keyof HTMLTagAttributes<Tag> = never> = Omit<
    HTMLTagAttributes<Tag>,
    Keys
>
