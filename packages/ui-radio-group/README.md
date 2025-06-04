# @halvaradop/ui-radio-group

`@halvaradop/ui-radio-group` is an accessible, reusable, and customizable RadioGroup component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 18 (stable) and one for React 19 (beta).

### React 18 (Stable)

```bash
npm install @halvaradop/ui-radio-group
yarn add @halvaradop/ui-radio-group
pnpm add @halvaradop/ui-radio-group
```

### React 19 (Beta)

```bash
npm install @halvaradop/ui-radio-group@beta
yarn add @halvaradop/ui-radio-group@beta
pnpm add @halvaradop/ui-radio-group@beta
```

## Usage

The `RadioGroup` component offers an additional prop for customization: `variant`.

```tsx
import { RadioGroup, Radio } from "@halvaradop/ui-radio-group"

export default function App() {
  return (
    <RadioGroup>
      <Radio value="pizza" />
      <Radio value="hamburger" />
    </RadioGroup>
  )
}
```

### Prop Reference

| Prop    | Values          | Default  |
| ------- | --------------- | -------- |
| variant | "row", "column" | "column" |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --color-border: oklch(70% 0.02 260);

  --color-success: oklch(75% 0.18 140);
  --color-danger: oklch(65% 0.2 25);

  --color-surface: oklch(98% 0 0);
  --color-primary: oklch(30% 0 270);

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
  --color-border: oklch(35% 0.01 260);

  --color-success: oklch(70% 0.19 150);
  --color-danger: oklch(65% 0.22 25);

  --color-surface: oklch(15% 0.005 260);
  --color-primary: oklch(90% 0 0);
}
```

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
