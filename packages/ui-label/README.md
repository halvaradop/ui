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

| Prop    | Values                  | Default |
| ------- | ----------------------- | ------- |
| variant | "base", "error", "flex" | "base"  |
| size    | "sm", "base", "md"      | "base"  |
| asChild | true, false             | false   |

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

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
