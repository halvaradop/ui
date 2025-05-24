# @halvaradop/ui-select

`@halvaradop/ui-select` is an accessible, reusable, and customizable Select component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 18 (stable) and one for React 19 (beta).

### React 18 (Stable)

```bash
npm install @halvaradop/ui-select
yarn add @halvaradop/ui-select
pnpm add @halvaradop/ui-select
```

### React 19 (Beta)

```bash
npm install @halvaradop/ui-select@beta
yarn add @halvaradop/ui-select@beta
pnpm add @halvaradop/ui-select@beta
```

## Usage

The `Select` component is highly customizable and comes with several additional props to suit your needs. Example usage:

```tsx
import { Select, SelectTrigger, SelectList, SelectOption } from "@halvaradop/ui-select"

export default function App() {
  return (
    <Select name="example" defaultValue="option1">
      <SelectTrigger>Select an option</SelectTrigger>
      <SelectList>
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </SelectList>
    </Select>
  )
}
```

### Prop Reference

| Component       | Prop           | Accepted Values      | Default     |
| --------------- | -------------- | -------------------- | ----------- |
| `Select`        | `name`         | `string`             | `undefined` |
| `Select`        | `defaultValue` | `string` or `number` | `undefined` |
| `SelectTrigger` | `children`     | `ReactNode`          | `undefined` |
| `SelectList`    | `children`     | `ReactNode`          | `undefined` |
| `SelectOption`  | `value`        | `string` or `number` | `undefined` |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
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
