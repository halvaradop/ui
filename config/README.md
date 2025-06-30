# Config Packages

> Shared configuration packages for consistent tooling across the @ui monorepo

## 📋 Overview

This directory contains shared configuration packages that ensure consistency and maintainability across the entire monorepo. Each package is independently versioned and provides standardized tooling configuration.

## 📦 Available Packages

### [`@ui/eslint-config`](./eslint-config/README.md)

Modern ESLint 9.x configuration with React 19, TypeScript, and accessibility support.

- ✅ **Flat config format** for modern ESLint
- ✅ **React 19 support** with latest JSX runtime
- ✅ **TypeScript integration** with typescript-eslint
- ✅ **Accessibility rules** for inclusive components

### [`@ui/tailwind-config`](./tailwind-config/README.md)

Design system foundation with TailwindCSS v4 theme tokens and global styles.

### [`@ui/ts-config`](./ts-config/README.md)

TypeScript compiler configurations for different project types and environments.

- ✅ **Strict type checking** with modern TypeScript features
- ✅ **Path mapping support** for monorepo imports

### [`@ui/tsup-config`](./tsup-config/README.md)

Unified build configuration for fast, consistent package bundling.

- ✅ **Dual output** (ESM and CommonJS)
- ✅ **TypeScript declarations** generation
- ✅ **Tree-shaking optimization** for smaller bundles
- ✅ **React external** for component libraries

## Related Documentation

- [**Architecture Overview**](../docs/ARCHITECTURE.md) - Complete monorepo structure
- [**Contributing Guide**](../docs/CONTRIBUTING.md) - Development workflow
