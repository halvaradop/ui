# @ui/ts-config

> Shared TypeScript configurations for the [`@halvaradop/ui`](https://github.com/halvaradop/ui) monorepo

This package provides standardized TypeScript configurations optimized for React component development, Node.js environments, and monorepo structures. It includes multiple configuration presets for different use cases.

## Features

- **Multiple Presets**: Base, React, Node.js, and library-specific configs
- **Strict Type Checking**: Modern TypeScript with strict mode enabled
- **React Optimized**: JSX and TSX support with React 19 compatibility
- **Monorepo Ready**: Path mapping and workspace support
- **Build Optimized**: Separate configs for development and production
- **Modern ES Features**: Latest ECMAScript target support

## Installation

```bash
pnpm add -D @ui/ts-config
```

## Usage

### Base Configuration

Most common usage for React components:

```json
{
  "extends": "@ui/ts-config/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Related Packages

- [`@ui/eslint-config`](../eslint-config/) — Shared ESLint configuration
- [`@ui/prettier-config`](../prettier-config/) — Shared Prettier configuration
- [`@ui/tailwind-config`](../tailwind-config) — Tailwind CSS and design tokens
- [`@ui/tsup-config`](../tsup-config) — Build and bundling setup

## License

MIT - See the [LICENSE](../../LICENSE) file for details.
