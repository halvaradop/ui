# @halvaradop/ui-label

`@halvaradop/ui-label` is an accessible, reusable, and customizable Label component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

```bash
npm install @halvaradop/ui-label
yarn add @halvaradop/ui-label
pnpm add @halvaradop/ui-label
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-label@legacy
yarn add @halvaradop/ui-label@legacy
pnpm add @halvaradop/ui-label@legacy
```

## Usage

The `Label` component offers additional props for customization: `variant`, `size`, and `asChild`.

```tsx
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

### Advanced Usage

The `Label` component leverages the `Slot` component from [`@halvaradop/ui-slot`](https://github.com/halvaradop/ui/blob/master/packages/ui-slot/src/index.ts). To enable this, set the `asChild` prop to `true`:

```tsx
import { Label } from "@halvaradop/ui-label"

export default function App() {
  return (
    <Label variant="base" size="md" asChild>
      <span>Username</span>
    </Label>
  )
}
```

### Prop Reference

| Prop      | Accepted Values           | Default  | Description                                                                                 |
| --------- | ------------------------- | -------- | ------------------------------------------------------------------------------------------- |
| `variant` | `"base", "error", "flex"` | `"base"` | Defines the visual style - base is standard, error shows validation issues, flex for layout |
| `size`    | `"sm", "base", "md"`      | `"base"` | Controls the font size and spacing of the label                                             |
| `asChild` | `true, false`             | `false`  | Renders the label as a different HTML element while keeping the styling                     |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --color-muted: oklch(65% 0.01 260);
  --color-danger: oklch(65% 0.2 25);
  --color-on-surface: oklch(20% 0.02 260);
}
```

### Dark Theme Support

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --color-muted: oklch(70% 0.01 260);
  --color-danger: oklch(65% 0.22 25);
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
