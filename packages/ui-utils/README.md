# @halvaradop/ui-utils

The `@halvaradop/ui-utils` package centralizes shared configurations and utilities used by the `@halvaradop/ui` library that are not included in the build process of the packages. While it may seem similar to `@halvaradop/ui-core`, the focus and approach of these two packages are different. `@halvaradop/ui-core` includes its data in the build, whereas `@halvaradop/ui-utils` does not.

> [!NOTE]
> This package is not published on npm because it only contains shared configurations useful for the packages within the library. However, it should be used in the majority of the packages due to its file configurations and more details.

## Usage

The `@halvaradop/ui-utils` package offers three main files that are mandatory for most of the library's packages: `tsupConfig`, `tsconfig`, and `decorator`.

### TypeScript Configuration

The `tsconfig` file contains the default configuration used by the packages. It is exported from the `/tsconfig.base.json` entry point of the `@halvaradop/ui-utils` package.

```json
{
  "extends": "@halvaradop/ui-utils/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
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

export default defineConfig(tsupConfig)
```

### Decorator for Storybook

The `decorator` is a custom decorator used by component stories to create custom styles for the story wrappers. This decorator includes logic and UI to switch between light and dark themes.

> [!WARNING]
> This file is not compiled directly due to errors such as unrecognized hooks like `useState` and `useEffect`. Therefore, it is not included in the package build. Instead, it is exported directly, and its types are declared in the `globals.d.ts` file using module augmentation. This approach will be used until a better solution is found.

```tsx
import { decorator } from "@halvaradop/ui-utils/decorator"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "ui-component",
  decorators: [decorator],
}
```

## Notes

The beta version is functional but may have minor changes or issues compared to the stable version. If you encounter any problems, please report them in an [Issue](https://github.com/halvaradop/ui/issues) with details.
