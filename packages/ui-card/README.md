# @halvaradop/ui-card

`@halvaradop/ui-card` is an accessible, reusable, and customizable `Card` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

```bash
npm install @halvaradop/ui-card
yarn add @halvaradop/ui-card
pnpm add @halvaradop/ui-card
```

## Usage

The `Card` component offers several additional props for customization. Import the `Card` component as shown below:

```tsx
import { Card } from "@halvaradop/ui-card"
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return (
    <Card variant="shadow" size="md" className="p-6">
      <h2 className="text-lg font-semibold mb-2">Welcome!</h2>
      <p className="mb-4 text-muted">
        This is an example of the <code>Card</code> component. You can customize its appearance using props and
        TailwindCSS classes.
      </p>
      <Button variant="primary">Get Started</Button>
    </Card>
  )
}
```

### Advanced Usage

`Card` uses the `Slot` component from [`@halvaradop/ui-slot`](https://github.com/halvaradop/ui/blob/master/packages/ui-slot/src/index.ts), allowing you to render a different HTML tag by setting the `asChild` prop:

```tsx
import { Card } from "@halvaradop/ui-card"
import { Link } from "react-router-dom|next/link"

export default function CardLinkExample() {
  return (
    <Card asChild>
      <Link to="/dashboard" className="block hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-bold mb-2">Go to Dashboard</h3>
        <p className="text-muted">Click to navigate to your dashboard.</p>
      </Link>
    </Card>
  )
}
```

### Prop Reference

| Prop      | Accepted Values                  | Default  |
| --------- | -------------------------------- | -------- |
| `variant` | `"base" \| "outline"`            | `"base"` |
| `size`    | `"sm" \| "base" \| "md" \| "lg"` | `"base"` |
| `asChild` | `true \| false`                  | `false`  |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --breakpoint-base: 900px;
  --opacity-cursor: 80%;

  --color-border: oklch(70% 0.02 260);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);

  --color-ghost: oklch(94% 0.01 260);
}
```

### Dark Theme Support

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --color-border: oklch(35% 0.01 260);

  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);
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
