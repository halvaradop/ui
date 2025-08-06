# @halvaradop/ui-checkbox

`@halvaradop/ui-checkbox` is an accessible, reusable, and customizable `Checkbox` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy).

### React 19 (Stable)

```bash
npm install @halvaradop/ui-checkbox
yarn add @halvaradop/ui-checkbox
pnpm add @halvaradop/ui-checkbox
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-checkbox@legacy
yarn add @halvaradop/ui-checkbox@legacy
pnpm add @halvaradop/ui-checkbox@legacy
```

## Usage

The `Checkbox` component offers three additional props for customization: `color`, `size`, and `fullRounded`. Import the `Checkbox` component as shown below:

```tsx
import { Checkbox } from "@halvaradop/ui-checkbox"

export default function App() {
  return (
    <Label>
      pizza
      <Checkbox value="pizza" />
    </Label>
  )
}
```

### Prop Reference

| Prop          | Accepted Values                                | Default     | Description                                                    |
| ------------- | ---------------------------------------------- | ----------- | -------------------------------------------------------------- |
| `color`       | `"primary" \| "secondary" \| "green" \| "red"` | `"primary"` | Defines the color theme for the checked state of the checkbox  |
| `size`        | `"sm" \| "base" \| "md" \| "lg"`               | `"base"`    | Controls the size of the checkbox                              |
| `fullRounded` | `true \| false`                                | `false`     | Applies fully rounded corners instead of slightly rounded ones |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --rounded: 0.375rem;
  --opacity-cursor: 80%;

  --color-muted: oklch(65% 0.01 260);
  --color-border: oklch(70% 0.02 260);

  --color-success: oklch(75% 0.18 140);
  --color-danger: oklch(65% 0.2 25);

  --color-primary: oklch(30% 0 270);
  --color-on-primary: oklch(95% 0 0);

  --color-secondary: oklch(60% 0 270);
  --color-on-secondary: oklch(10% 0 0);

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

  --color-success: oklch(70% 0.19 150);

  --color-primary: oklch(90% 0 0);
  --color-on-primary: oklch(20% 0 270);

  --color-secondary: oklch(60% 0 0);
  --color-on-secondary: oklch(10% 0 270);
}
```

## About

This component is part of the [`@halvaradop/ui`](https://github.com/halvaradop/ui) library, a collection of production-ready React components built with [TypeScript](https://www.typescriptlang.org/) and [React](https://react.dev/), and styled using [Tailwind CSS](https://tailwindcss.com/) and [Class Variance Authority (CVA)](https://cva.style/). Designed for modern web applications, it aims to deliver accessible, customizable, and maintainable UI building blocks to accelerate your development workflow.

### License

This project is licensed under the `MIT License`. For full details, see the [LICENSE](https://github.com/halvaradop/ui/blob/master/LICENSE) file.

### Contributing

We welcome and appreciate contributions to the `@halvaradop/ui` library!

To get started, please read our [Contributing Guide](https://github.com/halvaradop/ui/blob/master/docs/CONTRIBUTING.md). All contributors are expected to follow our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).

---

Made with ❤️ by the `@halvaradop/ui` team.
