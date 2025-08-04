# @ui/prettier-config

> Shared Prettier configuration for the [`@halvaradop/ui`](https://github.com/halvaradop/ui) monorepo

## Overview

This package provides a consistent Prettier setup for all projects in the `@ui` workspace.

## Installation

Install as a development dependency within your package:

```bash
pnpm add -D @ui/prettier-config
```

## Usage

### Basic Setup

Create a `prettier.config.js` file in your package root:

```js
import { config } from "@ui/prettier-config"

/** @type {import("prettier").Config} */
export default config
```

### Customization

You can extend the shared config with your own overrides:

```js
import { config } from "@ui/prettier-config"

export default {
  ...config,
  overrides: [
    // Add custom rules here
  ],
}
```

> **Note:** The property is `overrides`, not `overides`.

## Related Packages

- [`@ui/eslint-config`](../eslint-config/) — Shared ESLint configuration
- [`@ui/prettier-config`](../prettier-config/) — Shared Prettier configuration
- [`@ui/tailwind-config`](../tailwind-config) — Tailwind CSS and design tokens
- [`@ui/ts-config`](../ts-config) — TypeScript compiler settings
- [`@ui/tsup-config`](../tsup-config) — Build and bundling setup

## License

MIT — See the [LICENSE](../../LICENSE) file for details.
