# Config Packages

> Shared configuration packages for consistent tooling across the @ui monorepo

## Overview

This directory contains shared configuration packages that ensure consistency and maintainability across the entire monorepo. Each package is independently versioned and provides standardized tooling configuration.

## Available Packages

- [`@ui/eslint-config`](./eslint-config/README.md): Modern ESLint 9.x configuration with React 19, TypeScript, and accessibility support.
- [`@ui/prettier-config`](./prettier-config/README.md): Opinionated Prettier configuration for consistent code formatting across all projects.
- [`@ui/tailwind-config`](./tailwind-config/README.md): Design system foundation with TailwindCSS v4 theme tokens and global styles.
- [`@ui/ts-config`](./ts-config/README.md): TypeScript compiler configurations for different project types and environments.
- [`@ui/tsup-config`](./tsup-config/README.md): Unified build configuration for fast, consistent package bundling.

## Related Documentation

- [**Architecture Overview**](../docs/ARCHITECTURE.md) - Complete monorepo structure
- [**Contributing Guide**](../docs/CONTRIBUTING.md) - Development workflow
