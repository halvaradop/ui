<<<<<<< HEAD
import { JSX } from "react"

=======
/**
 * These types are used by users of the library ? otherwise move them to @halvaradop/ui-utils package
 */
>>>>>>> 5aafa8d (feat(packages): add `ui-utils` package (#107))
export type HTMLTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>

export type WithChildrenProps<Props extends object> = Omit<Props, "children"> & { children: React.ReactNode }

/**
 * @unstable
 */
export type HTMLTagAttributes<Tag extends HTMLTag> = Tag extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[Tag]
    : React.JSXElementConstructor<Tag>

export type ComponentProps<Tag extends HTMLTag, ExcludedAttributes extends keyof HTMLTagAttributes<Tag> = never> = Omit<
    HTMLTagAttributes<Tag>,
    ExcludedAttributes
>

export type ArgsFunction = (...args: any) => void
