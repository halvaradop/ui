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

| Prop          | Type                                             | Default      | Description                          |
| ------------- | ------------------------------------------------ | ------------ | ------------------------------------ |
| `variant`     | `"base" \| "line" \| "sensitive"`                | `"base"`     | Visual style variant                 |
| `size`        | `"sm" \| "base" \| "md" \| "lg"`                 | `"base"`     | Size of the textarea                 |
| `resize`      | `"none" \| "vertical" \| "horizontal" \| "both"` | `"vertical"` | Resize behavior                      |
| `fullWidth`   | `boolean`                                        | `true`       | Whether textarea takes full width    |
| `fullRounded` | `boolean`                                        | `false`      | Whether to use fully rounded corners |

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
