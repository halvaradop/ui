# @halvaradop/ui-form

`@halvaradop/ui-form` is an accessible, reusable, and customizable `Form` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

```bash
npm install @halvaradop/ui-form
yarn add @halvaradop/ui-form
pnpm add @halvaradop/ui-form
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-form@legacy
yarn add @halvaradop/ui-form@legacy
pnpm add @halvaradop/ui-form@legacy
```

## Usage

The `Form` component offers two additional props for customization: `variant` and `size`. Import the `Form` component as shown below:

```tsx
import { Form } from "@halvaradop/ui-form"
import { Label } from "@halvaradop/ui-label"
import { Input } from "@halvaradop/ui-input"

export default function App() {
  return (
    <Form>
      <Label>
        Username
        <Input name="username" />
      </Label>
      <Label>
        Password
        <Input name="password" type="password" />
      </Label>
    </Form>
  )
}
```

### Prop Reference

| Prop    | Values                           | Default |
| ------- | -------------------------------- | ------- |
| variant | "base", "outline", "filled"      | "base"  |
| size    | "sm", "base", "md", "lg", "full" | "base"  |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --rounded: 0.375rem;

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

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --color-border: oklch(35% 0.01 260);

  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);
}
```
