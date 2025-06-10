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

| Prop        | Values                                                                  | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| variant     | "base", "secondary", "ghost", "link", "destructive", "outline", "plain" | "base"  |
| size        | "sm", "base", "md", "lg"                                                | "base"  |
| fullWidth   | true, false                                                             | false   |
| fullRounded | true, false                                                             | false   |
| asChild     | true, false                                                             | false   |

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

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
