# @halvaradop/ui-button

`@halvaradop/ui-button` is an accessible, reusable, and customizable `Button` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy).

### React 19 (Stable)

```bash
npm install @halvaradop/ui-button
yarn add @halvaradop/ui-button
pnpm add @halvaradop/ui-button
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-button@legacy
yarn add @halvaradop/ui-button@legacy
pnpm add @halvaradop/ui-button@legacy
```

## Usage

The `Button` component supports five additional props for customization: `variant`, `size`, `fullWidth`, `fullRounded`, and `asChild`. Import and use the component as follows:

```tsx
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return (
    <Button variant="outline" size="md" fullWidth fullRounded>
      Click Me
    </Button>
  )
}
```

### Advanced Usage

`Button` uses the `Slot` component from [`@halvaradop/ui-slot`](https://github.com/halvaradop/ui/blob/master/packages/ui-slot/src/index.ts), allowing you to render a different HTML tag by setting the `asChild` prop:

```tsx
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return (
    <Button variant="outline" size="md" fullWidth fullRounded asChild>
      <a href="/home">Home</a>
    </Button>
  )
}
```

### Prop Reference

| Prop          | Accepted Values                                                                       | Default  | Description                                                              |
| ------------- | ------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ |
| `variant`     | `"base" \| "secondary" \| "ghost" \| "link" \| "destructive" \| "outline" \| "plain"` | `"base"` | Defines the visual style and color scheme of the button                  |
| `size`        | `"sm" \| "base" \| "md" \| "lg"`                                                      | `"base"` | Controls the size and padding of the button                              |
| `fullWidth`   | `true \| false`                                                                       | `false`  | Makes the button take the full width of its container                    |
| `fullRounded` | `true \| false`                                                                       | `false`  | Applies fully rounded corners to the button                              |
| `asChild`     | `true \| false`                                                                       | `false`  | Renders the button as a different HTML element while keeping the styling |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --opacity-cursor: 80%;
  --rounded: 0.375rem;

  --color-danger: oklch(65% 0.2 25);

  --color-primary: oklch(30% 0 270);
  --color-on-primary: oklch(95% 0 0);

  --color-secondary: oklch(60% 0 270);
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
  --color-primary: oklch(90% 0 0);
  --color-on-primary: oklch(20% 0 270);

  --color-secondary: oklch(60% 0 0);
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

To get started, please read our [Contributing Guide](https://github.com/halvaradop/ui/blob/master/docs/CONTRIBUTING.md). All contributors are expected to follow our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).

---

Made with ❤️ by the `@halvaradop/ui` team.
