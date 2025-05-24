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

The `@halvaradop/ui-radio-group` package simplifies the use of radio buttons by managing shared logic through the `RadioGroup` component. Some props, such as `variant`, `defaultValue`, and `onChange`, can be set directly on the `RadioGroup` component.

```tsx
import { RadioGroup } from "@halvaradop/ui-radio-group"
import { Radio } from "@halvaradop/ui-radio-group/radio"

export default function App() {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <RadioGroup variant="row" name="food" onChange={handleChange}>
      <Radio value="pizza" />
      <Radio value="hamburger" />
    </RadioGroup>
  )
}
```

### Prop Reference

| Prop         | Values               | Default   |
| ------------ | -------------------- | --------- |
| variant      | `"row", "column"`    | "column"  |
| defaultValue | `string`             | undefined |
| onChange     | `(e: Event) => void` | undefined |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --breakpoint-base: 900px;
  --opacity-cursor: 80%;
  --color-muted: oklch(65% 0.01 260);
  --color-border: oklch(70% 0.02 260);
  --color-overlay: oklch(30% 0.02 260 / 0.3);
  --color-success: oklch(75% 0.18 140);
  --color-danger: oklch(65% 0.2 25);
  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);
  --color-primary: oklch(30% 0 270);
  --color-on-primary: oklch(95% 0 0);
  --color-secondary: oklch(60% 0 270);
  --color-on-secondary: oklch(10% 0 0);
  --color-ghost: oklch(94% 0.01 260);
  --color-disabled: oklch(92% 0 0);
  --color-on-disabled: oklch(60% 0.01 260);
}
```

### Dark Theme Support

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --opacity-cursor: 80%;
  --color-muted: oklch(70% 0.01 260);
  --color-border: oklch(35% 0.01 260);
  --color-success: oklch(70% 0.19 150);
  --color-danger: oklch(65% 0.22 25);
  --color-overlay: oklch(0% 0 0 / 0.6);
  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);
  --color-primary: oklch(90% 0 0);
  --color-on-primary: oklch(20% 0 270);
  --color-secondary: oklch(60% 0 0);
  --color-on-secondary: oklch(10% 0 270);
  --color-ghost: oklch(25% 0 0);
  --color-disabled: oklch(30% 0 0);
}
```

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
