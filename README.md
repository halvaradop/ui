# @halvaradop/ui

A modern, accessible, and customizable React UI component library, organized as a monorepo and styled with TailwindCSS v4. This library provides pre-styled, reusable components to help you build user interfaces faster and more consistently.

## Version Compatibility

Supports both `React 18` and `React 19`. Use the table below to select the correct library version for your React version:

| React version | Library version        |
| ------------- | ---------------------- |
| React 18      | Latest stable (^x.y.z) |
| React 19      | Beta (^x.y.z-beta.n)   |

## Installation

Find available components in the [packages directory](https://github.com/halvaradop/ui/tree/master/packages). Install the desired package with the `@halvaradop` prefix using your preferred package manager:

### For React 18 (Stable)

```bash
npm install @halvaradop/ui-button
yarn add @halvaradop/ui-button
pnpm add @halvaradop/ui-button
```

### For React 19 (Beta)

```bash
npm install @halvaradop/ui-button@legacy
yarn add @halvaradop/ui-button@legacy
pnpm add @halvaradop/ui-button@legacy
```

## Usage

Import components and use them in your application:

```tsx
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return <Button variant="outline">Click Me</Button>
}
```

## Components

- [Button](https://github.com/halvaradop/ui/tree/master/packages/ui-button)
- [Checkbox](https://github.com/halvaradop/ui/tree/master/packages/ui-checkbox)
- [Core](https://github.com/halvaradop/ui/tree/master/packages/ui-core)
- [Dialog](https://github.com/halvaradop/ui/tree/master/packages/ui-dialog)
- [Form](https://github.com/halvaradop/ui/tree/master/packages/ui-form)
- [Input](https://github.com/halvaradop/ui/tree/master/packages/ui-input)
- [Label](https://github.com/halvaradop/ui/tree/master/packages/ui-label)
- [RadioGroup](https://github.com/halvaradop/ui/tree/master/packages/ui-radio-group)
- [Select](https://github.com/halvaradop/ui/tree/master/packages/ui-select)
- [Slot](https://github.com/halvaradop/ui/tree/master/packages/ui-slot)
- [Submit](https://github.com/halvaradop/ui/tree/master/packages/ui-submit)

### Versioning and Releasing

Each package maintains its own [CHANGELOG.md](https://github.com/halvaradop/ui/tree/master/packages) to track changes, bug fixes, and releases. For detailed changelogs, refer to the specific package directory. Additionally, a general [CHANGELOG.md](https://github.com/halvaradop/ui/blob/master/CHANGELOG.md) provides an overview of the main changes in the current major version of the library.

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --breakpoint-base: 900px;

  --rounded: 0.375rem;
  --opacity-cursor: 80%;

  --color-muted: oklch(65% 0.01 260);
  --color-border: oklch(70% 0.02 260);
  --color-overlay: oklch(30% 0.02 260 / 0.3);

  --color-success: oklch(75% 0.18 140);
  --color-danger: oklch(65% 0.2 25);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);

  --color-primary: oklch(30% 0 270);
  --color-on-primary: oklch(95% 0 0);

  --color-secondary: oklch(60% 0 270);
  --color-on-secondary: oklch(10% 0 0);

  --color-ghost: oklch(94% 0.01 260);

  --color-disabled: oklch(92% 0 0);
  --color-on-disabled: oklch(60% 0.01 260);

  --size-sm: 1.75rem;
  --size-base: 2.25rem;
  --size-md: 2.75rem;
  --size-lg: 3.25rem;
}
```

### Dark Theme Support

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --color-muted: oklch(70% 0.01 260);
  --color-border: oklch(35% 0.01 260);
  --color-overlay: oklch(0% 0 0 / 0.6);
  --color-success: oklch(70% 0.19 150);
  --color-danger: oklch(65% 0.22 25);
  --color-surface: oklch(15% 0.005 260);
  --color-primary: oklch(90% 0 0);
  --color-on-primary: oklch(20% 0 270);
  --color-secondary: oklch(60% 0 0);
  --color-on-secondary: oklch(10% 0 270);
  --color-ghost: oklch(25% 0 0);
  --color-disabled: oklch(30% 0 0);
}
```

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).

## Contributing

We welcome contributions to the `@halvaradop/ui` library! Please read the [Contributing Guide](./CONTRIBUTING.md) for details on our process, code standards, and how to get started. All contributors are expected to follow our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).

## Architecture

For an in-depth look at the monorepo structure, package layout, build and development workflow, design principles, and guidelines for extending the library, refer to the [ARCHITECTURE.md](./ARCHITECTURE.md) document.
