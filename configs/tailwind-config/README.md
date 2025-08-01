# @ui/tailwind-config

> Shared TailwindCSS configuration and global styles for the [`@halvaradop/ui`](https://github.com/halvaradop/ui) monorepo

This package provides a comprehensive TailwindCSS v4+ configuration with custom design tokens, dark mode support, and component-optimized styles. It includes a global CSS file with theme variables and responsive design tokens optimized for UI component libraries.

## Features

- **TailwindCSS v4+**: Latest Tailwind features and performance
- **Design System**: Consistent color palette and sizing tokens
- **Dark Mode**: Automatic dark mode support with CSS custom properties
- **Component Optimized**: Tailored for UI component development
- **Responsive Design**: Mobile-first breakpoint system
- **Performance**: Optimized for component library usage
- **Type Safety**: Full TypeScript support for theme tokens

## Installation

```bash
pnpm add -D @ui/tailwind-config
```

## Usage

### Import Global Styles

Import the global CSS file in your app's entry point or layout:

```ts
// In your main.tsx, app.tsx, or layout component
import "@ui/tailwind-config"
```

## Design Tokens

### Color Palette

The configuration includes a comprehensive color system using OKLCH color space for better perceptual uniformity:

```css
--color-surface: oklch(98% 0 0);
--color-on-surface: oklch(20% 0.02 260);
--color-primary: oklch(30% 0 270);
--color-on-primary: oklch(95% 0 0);
--color-secondary: oklch(60% 0 270);
--color-on-secondary: oklch(10% 0 0);
--color-success: oklch(75% 0.18 140);
--color-danger: oklch(65% 0.2 25);
--color-muted: oklch(65% 0.01 260);
--color-border: oklch(70% 0.02 260);
```

## Related Packages

- [`@ui/eslint-config`](../eslint-config/) — Shared ESLint configuration
- [`@ui/prettier-config`](../prettier-config/) — Shared Prettier configuration
- [`@ui/ts-config`](../ts-config) — TypeScript compiler settings
- [`@ui/tsup-config`](../tsup-config) — Build and bundling setup

## License

MIT - See the [LICENSE](../../LICENSE) file for details.
