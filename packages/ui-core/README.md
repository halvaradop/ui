# @halvaradop/ui-core

The `@halvaradop/ui-core` package centralizes shared configurations, types, and utilities for the `@halvaradop/ui` library, ensuring consistent functionality across all its packages.

## Installation

This core package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-core
yarn add @halvaradop/ui-core
pnpm add @halvaradop/ui-core
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-core@beta
yarn add @halvaradop/ui-core@beta
pnpm add @halvaradop/ui-core@beta
```

## Usage

The core package offers four main resources: the `Slot` component, `tsupConfig` configuration, `merge` function, and various types.

### Slot

The `Slot` component allows changing the default HTML tag of a parent element to the tag name of its children. This is useful for components like `Button` and `Label` that can be updated with other tags. Additionally, it provides the `SlotProps` type to infer attributes based on the HTML tag name.

```ts
import { type SlotProps, Slot } from "@halvaradop/ui-core"

interface CardProps extends SlotProps<"article"> {
    // extra props
}

export const Card = ({ className, children, asChild }: CardProps) => {
    const SlotComponent = asChild ? "article" : Slot
    return <SlotComponent>{children}</SlotComponent>
}
```

### TsupConfig

The `tsupConfig` object contains the basic configuration for building a package using the `tsup` dependency. It is exported from the index entry point or the `/tsup.config.base` dedicated export. The following code shows how components use this configuration in their `tsup.config.ts` file:

```ts
import { defineConfig } from "tsup"
import { tsupConfig } from "@halvaradop/ui-utils/tsup.config.base"

export default defineConfig(tsupConfig)
```

### Types

The core package exports several types used throughout the components:

- `HTMLTag`: Contains HTML tags.
- `WithChildrenProps`: Adds the `children` prop as a mandatory prop.
- `HTMLTagAttributes`: Returns the attributes of the HTML tag.
- `ComponentProps`: Similar to `HTMLTagAttributes` but allows excluding specified attributes.
- `ArgsFunction`: Used by the `VariantProps` type imported from `cva`.

These types are imported from the index entry point and the `/types` export.

### Utils

Currently, the only utility is the `merge` function, which merges the classes passed to components with the current classes provided in the components.

## Notes

The beta version is functional but may have minor changes or issues compared to the stable version. If you encounter any problems, please report them in an [Issue](https://github.com/halvaradop/ui/issues) with details.
