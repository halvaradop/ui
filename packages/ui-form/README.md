# @halvaradop/ui-form

`@halvaradop/ui-form` is an accessible, reusable, and customizable `Form` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 18 (stable) and one for React 19 (beta).

### React 18 (Stable)

```bash
npm install @halvaradop/ui-form
yarn add @halvaradop/ui-form
pnpm add @halvaradop/ui-form
```

### React 19 (Beta)

```bash
npm install @halvaradop/ui-form@beta
yarn add @halvaradop/ui-form@beta
pnpm add @halvaradop/ui-form@beta
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
  --color-border: oklch(70% 0.02 260);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);
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

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
