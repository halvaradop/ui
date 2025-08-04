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

| Prop     | Values                   | Default |
| -------- | ------------------------ | ------- |
| variant  | "base"                   | "base"  |
| size     | "sm", "base", "md", "lg" | "base"  |
| checked  | true, false              | false   |
| disabled | true, false              | false   |

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
