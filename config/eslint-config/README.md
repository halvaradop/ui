# @ui/eslint-config

A comprehensive ESLint configuration package for the @ui library monorepo, built with modern ESLint flat config format.

## Features

- ✅ **Modern ESLint 9.x** with flat config format
- ✅ **TypeScript** support with typescript-eslint
- ✅ **React** and React Hooks support
- ✅ **JSX Accessibility** (a11y) rules
- ✅ **Prettier** integration for code formatting
- ✅ **Turbo** monorepo-specific rules
- ✅ **Monorepo-optimized** configurations
- ✅ **Environment-specific** overrides (tests, stories, config files)

## Installation

This package is designed to be used within the @ui monorepo workspace:

```bash
pnpm add -D @ui/eslint-config
```

## Usage

### Basic Usage

Create an `eslint.config.js` file in your package root:

```javascript
import eslintConfig from "@ui/eslint-config"

export default [
  ...eslintConfig,
  // Add your package-specific overrides here
]
```

### With Package-Specific Overrides

```javascript
import eslintConfig from "@ui/eslint-config"

export default [
  ...eslintConfig,
  {
    // Package-specific configurations
    files: ["src/**/*.{js,ts,tsx}"],
    rules: {
      // Your custom rules here
      "no-console": "warn",
    },
  },
]
```

## Monorepo Usage

### Root Level

For the monorepo root, extend the config with root-specific rules:

```javascript
import eslintConfig from "@ui/eslint-config"

export default [
  ...eslintConfig,
  {
    files: ["*.{js,ts}", "scripts/**/*.{js,ts}"],
    rules: {
      "no-console": "off",
      "turbo/no-undeclared-env-vars": "off",
    },
  },
]
```

## Configuration Details

The configuration includes comprehensive rules for:

- **TypeScript**: Modern TS features, consistent imports, type safety
- **React**: JSX best practices, hooks validation, accessibility
- **Code Quality**: Prettier integration, consistent coding patterns
- **Monorepo**: Turbo-specific optimizations and environment handling

## License

MIT
