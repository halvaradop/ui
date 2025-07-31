# @ui/tsup-config

> Shared TSup build configuration for the @halvaradop/ui library monorepo

This package provides a standardized TSup configuration for building TypeScript packages in the @halvaradop/ui monorepo. It includes optimized settings for React components, libraries, and modern JavaScript development.

## Features

- **Dual Format**: ESM and CommonJS output
- **TypeScript Support**: Declaration files (.d.ts) generation
- **React Optimized**: "use client" directive for React Server Components
- **External Dependencies**: Proper externalization of React and peer deps
- **Clean Builds**: Automatic cleanup of output directories

## Installation

```bash
pnpm add -D @ui/tsup-config
```

## Usage

### Basic Usage

Create a `tsup.config.ts` file in your package:

```ts
import { defineConfig } from "tsup"
import { tsupConfig } from "@ui/tsup-config"

export default defineConfig(tsupConfig)
```

### With Custom Options

```ts
import { defineConfig } from "tsup"
import { tsupConfig } from "@ui/tsup-config"

export default defineConfig({
  ...tsupConfig,
  // Override specific options
  entry: ["src/index.ts", "src/cli.ts"],
  external: [...tsupConfig.external, "custom-peer-dep"],
})
```

## Related Packages

- [`@ui/ts-config`](../ts-config) - TypeScript compiler options
- [`@ui/tsup-config`](../tsup-config) - Build and bundling configuration
- [`@ui/tailwind-config`](../tailwind-config) - Styling and design tokens

## License

MIT - See the [LICENSE](../../LICENSE) file for details.
