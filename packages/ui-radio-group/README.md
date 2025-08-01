# @halvaradop/ui-radio-group

`@halvaradop/ui-radio-group` is an accessible, reusable, and customizable RadioGroup component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

```bash
npm install @halvaradop/ui-radio-group
yarn add @halvaradop/ui-radio-group
pnpm add @halvaradop/ui-radio-group
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-radio-group@legacy
yarn add @halvaradop/ui-radio-group@legacy
pnpm add @halvaradop/ui-radio-group@legacy
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
