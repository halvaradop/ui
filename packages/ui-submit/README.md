# @halvaradop/ui-submit

`@halvaradop/ui-submit` is an accessible, reusable, and customizable Submit component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy).

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

| Prop        | Values                   | Default |
| ----------- | ------------------------ | ------- |
| variant     | "base", "inverted"       | "base"  |
| size        | "sm", "base", "md", "lg" | "base"  |
| fullWidth   | true, false              | false   |
| fullRounded | true, false              | false   |

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

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
