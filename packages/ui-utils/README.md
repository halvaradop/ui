# @halvaradop/ui-utils

The `@halvaradop/ui-utils` package provides shared utilities and configurations used by the `@halvaradop/ui` library. These utilities are designed for development and documentation purposes and are not included in the final build bundles of individual packages.

> [!WARNING]
> This package is not published to npm as it contains internal configurations and utilities specific to the library's development workflow. It should be used by most packages within the library for consistent styling, documentation, and development tooling.

## Overview

The `@halvaradop/ui-utils` package provides essential configurations and components that are commonly required across the library's packages. These include:

- **Decorator**: A custom Storybook decorator for applying styles and theme switching
- **DocsPage Component**: A component for enhancing Storybook documentation with Doc Blocks
- **Palette Stories**: Color palette documentation and theme utilities

## Usage

### Decorator for Storybook

The `decorator` is a custom Storybook decorator that applies consistent styling to story wrappers and provides theme switching functionality between light and dark modes. This decorator is exported from the `/decorator` entry point and can be imported using `@halvaradop/ui-utils/decorator`.

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { DecoratorWrapper } from "@ui/ui-utils/src/decorator.js"

const meta: Meta = {
  title: "ui-component",
  decorators: [DecoratorWrapper],
}
```

### DocsPage Component

The `DocsPage` component enhances Storybook documentation by providing a standardized layout using Doc Blocks. It includes essential documentation elements such as Title, Subtitle, Canvas, and Controls. This component is exported from the `/docs-page` entry point and can be imported using `@halvaradop/ui-utils/docs-page`.

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

This package is in active development and may undergo changes between versions. If you encounter any issues or have suggestions for improvements, please report them via [GitHub Issues](https://github.com/halvaradop/ui/issues).
