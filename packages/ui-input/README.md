# @halvaradop/ui-input

`@halvaradop/ui-input` is an accessible, reusable, and customizable `Input` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy).

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

| Prop        | Values                      | Default |
| ----------- | --------------------------- | ------- |
| variant     | "base", "line", "sensitive" | "base"  |
| size        | "sm", "base", "md", "lg"    | "base"  |
| fullWidth   | true, false                 | true    |
| fullRounded | true, false                 | false   |

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

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
