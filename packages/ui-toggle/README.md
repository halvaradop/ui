# @halvaradop/ui-toggle

`@halvaradop/ui-toggle` is an accessible, reusable, and customizable `Toggle` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

> [!WARNING]
> This is not a real component provided by the `@halvaradop/ui` library. It is a template to facilitate the creation of new components within the library, offering default configurations and documentation. This package helps reduce the time required to build a component from scratch, allowing you to focus on adding new styles and features. For more information, please read the [Contributing Guide](https://github.com/halvaradop/ui/blob/master/.github/CONTRIBUTING.md).

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
| variant  | "base"                   | base    |
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

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
