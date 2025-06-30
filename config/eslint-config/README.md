# @ui/eslint-config

> Shared ESLint configuration for the @halvaradop/ui library monorepo

## 📋 Overview

A comprehensive ESLint configuration optimized for React 19, TypeScript, and modern JavaScript development. Designed specifically for component libraries and monorepo environments with accessibility, Prettier integration, and Turbo support.

## 🚀 Features

- ✅ **Modern ESLint 9.x** with flat config format
- ✅ **React 19 Support**: Modern React patterns and JSX runtime
- ✅ **TypeScript** support with typescript-eslint
- ✅ **JSX Accessibility** (a11y) rules for inclusive components
- ✅ **Turbo Integration**: Environment variable validation for monorepos
- ✅ **Prettier Compatible**: No conflicts with Prettier formatting
- ✅ **Multiple Environments**: Specific rules for Node.js, tests, and Storybook

## 📦 Installation

This package is designed for use within the @ui monorepo workspace:

```bash
pnpm add -D @ui/eslint-config
```

## 🛠️ Usage

### Basic Configuration

Create an `eslint.config.js` file in your package root:

```js
import { config } from "@ui/eslint-config"

export default config
```

### Custom Overrides

Extend the configuration with package-specific rules:

```javascript
import { config } from "@ui/eslint-config"

export default [
  ...config,
  {
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]
```

### Package Scripts

Add these recommended scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --cache --cache-location .cache/.eslintcache",
    "lint:fix": "eslint . --fix --cache --cache-location .cache/.eslintcache"
  }
}
```

## ⚙️ Configuration Details

### File Patterns

The configuration automatically applies different rules based on file patterns:

| Pattern                     | Purpose          | Rules Applied           |
| --------------------------- | ---------------- | ----------------------- |
| `**/*.{ts,tsx,js,jsx}`      | React Components | React, TypeScript, a11y |
| `**/*.config.{js,ts}`       | Config Files     | Node.js environment     |
| `**/*.{test,spec}.{ts,tsx}` | Test Files       | Testing environment     |
| `**/*.stories.{ts,tsx}`     | Storybook        | Story-specific rules    |

### Environment-Specific Rules

- **React Components**: JSX best practices, hooks validation, accessibility
- **TypeScript**: Modern TS features, consistent imports, type safety
- **Config Files**: Node.js globals, CommonJS support
- **Tests**: Testing framework globals and patterns
- **Storybook**: Story format and CSF compliance

## 🔧 Troubleshooting

### TypeScript Project Service Errors

If you encounter "not found by project service" errors:

```json
// tsconfig.json
{
  "include": ["src/**/*", "*.config.{js,ts}", "**/*.stories.{ts,tsx}"]
}
```

### Prettier Integration

This config works seamlessly with Prettier. Run them separately:

```bash
# Format first, then lint
pnpm format
pnpm lint:fix
```

### Performance Optimization

For large monorepos, use caching:

```bash
# Enable caching for faster subsequent runs
eslint . --cache --cache-location .cache/.eslintcache
```

## 🔗 Related Packages

- [`@ui/ts-config`](../ts-config) - TypeScript compiler options
- [`@ui/tsup-config`](../tsup-config) - Build and bundling configuration
- [`@ui/tailwind-config`](../tailwind-config) - Styling and design tokens

## 📄 License

MIT - See the [LICENSE](../../LICENSE) file for details.
