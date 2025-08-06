# @halvaradop/ui-textarea

`@halvaradop/ui-textarea` is an accessible, reusable, and customizable `Textarea` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides a professional textarea component with multiple variants, sizes, and resize options.

## Installation

```bash
npm install @halvaradop/ui-textarea
yarn add @halvaradop/ui-textarea
pnpm add @halvaradop/ui-textarea
```

## Usage

The `Textarea` component offers several props for customization including variants, sizes, and resize options. Import the `Textarea` component as shown below:

```tsx
import { Textarea } from "@halvaradop/ui-textarea"

export default function App() {
  return <Textarea placeholder="Enter your message..." />
}
```

### Prop Reference

| Prop          | Type                                                | Default      | Description                                             |
| ------------- | --------------------------------------------------- | ------------ | ------------------------------------------------------- |
| `variant`     | `"base"`                                            | `"base"`     | Defines the visual style of the textarea                |
| `size`        | `"sm" \| "base" \| "md" \| "lg"`                    | `"base"`     | Controls the height and padding of the textarea         |
| `resize`      | `"content" \| "both" \| "horizontal" \| "vertical"` | `"vertical"` | Defines which directions the textarea can be resized    |
| `fullWidth`   | `boolean`                                           | `true`       | Makes the textarea take the full width of its container |
| `fullRounded` | `boolean`                                           | `false`      | Applies fully rounded corners to the textarea           |

## Styling

The component uses CSS custom properties from your design system. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --rounded: 0.375rem;
  --opacity-cursor: 80%;

  --color-muted: oklch(65% 0.01 260);
  --color-border: oklch(70% 0.02 260);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);

  --size-sm: 1.75rem;
  --size-base: 2.25rem;
  --size-md: 2.75rem;
  --size-lg: 3.25rem;
}
```

### Dark Theme Support

The component automatically supports dark mode when the `dark` class is applied to the HTML element:

```css
:is(html, body).dark {
  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);
  --color-border: oklch(35% 0.01 260);
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
