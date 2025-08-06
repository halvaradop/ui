# @halvaradop/ui-submit

`@halvaradop/ui-submit` is an accessible, reusable, and customizable Submit component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

```bash
npm install @halvaradop/ui-submit
yarn add @halvaradop/ui-submit
pnpm add @halvaradop/ui-submit
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-submit@legacy
yarn add @halvaradop/ui-submit@legacy
pnpm add @halvaradop/ui-submit@legacy
```

## Usage

The `Submit` component offers several additional props for customization: `variant`, `size`, `fullWidth`, and `fullRounded`.

```tsx
import { Form } from "@halvaradop/ui-form"
import { Input } from "@halvaradop/ui-input"
import { Label } from "@halvaradop/ui-label"
import { Submit } from "@halvaradop/ui-submit"

export default function App() {
  return (
    <Form>
      <Label>
        Username
        <Input />
      </Label>
      <Submit value="Log In" />
    </Form>
  )
}
```

### Prop Reference

| Prop          | Accepted Values                  | Default  | Description                                                                  |
| ------------- | -------------------------------- | -------- | ---------------------------------------------------------------------------- |
| `variant`     | `"base" \| "secondary"`          | `"base"` | Defines the visual style - base is primary, secondary is alternative styling |
| `size`        | `"sm" \| "base" \| "md" \| "lg"` | `"base"` | Controls the size and padding of the submit button                           |
| `fullWidth`   | `true \| false`                  | `false`  | Makes the button take the full width of its container                        |
| `fullRounded` | `true \| false`                  | `false`  | Applies fully rounded corners to the button                                  |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables and classes. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --opacity-cursor: 80%;
  --rounded: 0.375rem;

  --color-primary: oklch(30% 0 270);
  --color-on-primary: oklch(95% 0 0);

  --color-secondary: oklch(60% 0 270);
  --color-on-secondary: oklch(10% 0 0);

  --color-on-surface: oklch(20% 0.02 260);

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
  --color-primary: oklch(90% 0 0);
  --color-on-primary: oklch(20% 0 270);

  --color-secondary: oklch(60% 0 0);
  --color-on-secondary: oklch(10% 0 270);

  --color-on-surface: oklch(95% 0.01 260);

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
