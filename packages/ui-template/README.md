# @halvaradop/ui-template

`@halvaradop/ui-template` is an accessible, reusable, and customizable `Template` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

> [!WARNING]
> This is not a real component provided by the `@halvaradop/ui` library. It is a template to facilitate the creation of new components within the library, offering default configurations and documentation. This package helps reduce the time required to build a component from scratch, allowing you to focus on adding new styles and features. For more information, please read the [Contributing Guide](https://github.com/halvaradop/ui/blob/master/.github/CONTRIBUTING.md).

## Installation

There are two versions available: one for React 18 (stable) and one for React 19 (beta).

### React 18 (Stable)

```bash
npm install @halvaradop/ui-template
yarn add @halvaradop/ui-template
pnpm add @halvaradop/ui-template
```

### React 19 (Beta)

```bash
npm install @halvaradop/ui-template@beta
yarn add @halvaradop/ui-template@beta
pnpm add @halvaradop/ui-template@beta
```

## Usage

The `Template` component offers several additional props for customization. Import the `Template` component as shown below:

```tsx
import { Template } from "@halvaradop/ui-template"

export default function App() {
  return <Template />
}
```

### Prop Reference

| Prop    | Values                   | Default |
| ------- | ------------------------ | ------- |
| variant |                          |         |
| size    | "sm", "base", "md", "lg" | "base"  |

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
