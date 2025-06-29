# @halvaradop/ui-utils

The `@halvaradop/ui-utils` package centralizes shared configurations and utilities used by the `@halvaradop/ui` library that are not included in the build process of the packages. While it may seem similar to `@halvaradop/ui-core`, the focus and approach of these two packages are different. `@halvaradop/ui-core` includes its data in the build, whereas `@halvaradop/ui-utils` does not.

> [!WARNING]
> This package is not published on npm because it only contains shared configurations useful for the packages within the library. However, it should be used in the majority of the packages due to its file configurations and more details.

## Usage

The `@halvaradop/ui-utils` package provides essential configurations and components that are commonly required across the library's packages. These include:

- `tsupConfig`: A configuration object for building packages using the `tsup` dependency.
- `tsconfig`: A TypeScript configuration file that sets default compiler options.
- `decorator`: A custom Storybook decorator for applying styles and theme switching.
- `DocsPage` component: A component for enhancing Storybook documentation with Doc Blocks.

### TypeScript Configuration

The `tsconfig` file contains the default configuration used by the packages. It is exported from the `/tsconfig.base.json` entry point of the `@halvaradop/ui-utils` package.

```json
{
  "extends": "@ui/ts-config/tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### Tsup Configuration

The `tsupConfig` object contains the basic configuration for building a package using the `tsup` dependency. It is exported from the index entry point or the `/tsup.config.base` dedicated export. The following code shows how components use this configuration in their `tsup.config.ts` file:

```ts
import { defineConfig } from "tsup"
import { tsupConfig } from "@halvaradop/ui-utils/tsup.config.base"

export default defineConfig((options) => ({
  ...tsupConfig,
  minify: !options.watch,
  splitting: !options.watch,
}))
```

### Decorator for Storybook

The `decorator` is a custom decorator used by component stories to apply custom styles to story wrappers. It includes logic and UI to switch between light and dark themes. This decorator is exported from the `/decorator` entry point of the module, which can be imported using `@halvaradop/ui-utils/decorator`.

```tsx
import { DecoratorWrapper } from "@ui/ui-utils/src/decorator.js"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "ui-component",
  decorators: [DecoratorWrapper],
}
```

### Docs Page Component

The `DocsPage` component abstracts the default documentation of Base Story using Doc Blocks documentation in Storybook. It includes Doc Blocks such as Title, Subtitle, Canvas, and Controls. This component is exported from the `/docs-page` entry point of the module, which can be imported using `@halvaradop/ui-utils/docs-page`.

```tsx
import { DocsPage } from "@ui/ui-utils/src/docs-page.js"

const meta: Meta = {
  title: "ui-component",
  parameters: {
    layout: "centered",
    docs: {
      page: () => <DocsPage subtitle="Button Component powered by React & TailwindCSS" />,
    },
  },
}
```

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
