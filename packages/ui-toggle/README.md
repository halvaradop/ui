# @halvaradop/ui-toggle

`@halvaradop/ui-toggle` is an accessible, reusable, and customizable `Toggle` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

```bash
npm install @halvaradop/ui-toggle
yarn add @halvaradop/ui-toggle
pnpm add @halvaradop/ui-toggle
```

## Usage

The `Toggle` component offers three additional props for customization: `variant`, `size`, `checked` and `disabled`. Import the `Toggle` component as shown below:

```tsx
import { Toggle } from "@halvaradop/ui-toggle"

export default function App() {
  return <Toggle checked={false} />
}
```

### Prop Reference

| Prop       | Accepted Values                  | Default  |
| ---------- | -------------------------------- | -------- |
| `variant`  | `"base"`                         | `"base"` |
| `size`     | `"sm" \| "base" \| "md" \| "lg"` | `"base"` |
| `checked`  | `true \| false`                  | `false`  |
| `disabled` | `true \| false`                  | `false`  |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --color-border: oklch(70% 0.02 260);
  --color-surface: oklch(98% 0 0);
  --color-success: oklch(75% 0.18 140);
  --color-disabled: oklch(92% 0 0);
}
```

### Dark Theme Support

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --color-border: oklch(35% 0.01 260);
  --color-success: oklch(70% 0.19 150);
  --color-surface: oklch(15% 0.005 260);
  --color-disabled: oklch(30% 0 0);
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
