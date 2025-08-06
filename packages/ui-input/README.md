# @halvaradop/ui-input

`@halvaradop/ui-input` is an accessible, reusable, and customizable `Input` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

Install the stable version:

```bash
npm install @halvaradop/ui-input
yarn add @halvaradop/ui-input
pnpm add @halvaradop/ui-input
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-input@legacy
yarn add @halvaradop/ui-input@legacy
pnpm add @halvaradop/ui-input@legacy
```

## Usage

The `Input` component offers four additional props for customization: `variant`, `size`, `fullWidth` and `fullRounded`. Import the `Input` component as shown below:

```tsx
import { Input } from "@halvaradop/ui-input"
import { Label } from "@halvaradop/ui-label"

export default function App() {
  return (
    <Label>
      Username
      <Input name="username" />
    </Label>
  )
}
```

### Prop Reference

| Prop          | Accepted Values                   | Default  | Description                                                                           |
| ------------- | --------------------------------- | -------- | ------------------------------------------------------------------------------------- |
| `variant`     | `"base" \| "line" \| "sensitive"` | `"base"` | Defines the visual style - base is standard, line is minimal, sensitive for passwords |
| `size`        | `"sm" \| "base" \| "md" \| "lg"`  | `"base"` | Controls the height and padding of the input field                                    |
| `fullWidth`   | `true \| false`                   | `true`   | Makes the input take the full width of its container                                  |
| `fullRounded` | `true \| false`                   | `false`  | Applies fully rounded corners to the input field                                      |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --rounded: 0.375rem;

  --color-muted: oklch(65% 0.01 260);
  --color-border: oklch(70% 0.02 260);

  --color-danger: oklch(65% 0.2 25);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);

  --color-on-secondary: oklch(10% 0 0);

  --color-ghost: oklch(94% 0.01 260);

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

  --color-danger: oklch(65% 0.22 25);

  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);

  --color-on-secondary: oklch(10% 0 270);

  --color-ghost: oklch(25% 0 0);
}
```

## About

This component is part of the [`@halvaradop/ui`](https://github.com/halvaradop/ui) library, a collection of production-ready React components built with [TypeScript](https://www.typescriptlang.org/) and [React](https://react.dev/), and styled using [Tailwind CSS](https://tailwindcss.com/) and [Class Variance Authority (CVA)](https://cva.style/). Designed for modern web applications, it aims to deliver accessible, customizable, and maintainable UI building blocks to accelerate your development workflow.

### License

This project is licensed under the `MIT License`. For full details, see the [LICENSE](https://github.com/halvaradop/ui/blob/master/LICENSE) file.

### Contributing

We welcome and appreciate contributions to the `@halvaradop/ui` library!

To get started, please read our [Contributing Guide](https://github.com/halvaradop/ui/blob/main/docs/CONTRIBUTING.md). All contributors are expected to follow our [Code of Conduct](https://github.com/halvaradop/.github/blob/main/.github/CODE_OF_CONDUCT.md).

---

Made with ❤️ by the `@halvaradop/ui` team.
