# @halvaradop/ui-label

The `@halvaradop/ui-label` is an accessible, reusable, and customizable `Label` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This label package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-label
yarn add @halvaradop/ui-label
pnpm add @halvaradop/ui-label
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-label@beta
yarn add @halvaradop/ui-label@beta
pnpm add @halvaradop/ui-label@beta
```

## Usage

The `Label` component offers three additional props for customization: `variant`, `size` and `asChild`. Import the `Label` component as shown below:

```tsx
import { Label } from "@halvaradop/ui-label"

export default function App() {
  return (
    <Label>
      Username
      <Input name="username" />
    </Label>
  )
}
```

### Advanced Usage

The `Label` component leverages the `Slot` component from [`@halvaradop/ui-core`](https://github.com/halvaradop/ui/blob/master/packages/ui-core/src/slot.ts). This feature allows you to replace the label's HTML tag with the tag of its children. To enable this functionality, set the `asChild` prop to `true`.

```tsx
import { Label } from "@halvaradop/ui-label"

export default function App() {
  return (
    <Label variant="base" size="md" asChild>
      <span>Username</span>
    </Label>
  )
}
```

The `error` variant uses the pseudo-selectors `:user-valid` and `:user-invalid`, which are not supported by `TailwindCSS` by default. To use this variant, you need to extend TailwindCSS with a custom plugin. Below is an example of how to set up this plugin:

```ts
import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("usinvalid", "&:user-invalid")
      addVariant("usvalid", "&:user-valid")
      addVariant("input-empty", "&:is(:usinvalid:placeholder-shown, :placeholder-shown)")
      addVariant("peer-usinvalid", ".peer:user-invalid ~ &")
      addVariant("peer-usinvalid-empty", ".peer:user-invalid:placeholder-shown ~ &")
    }),
  ],
}

export default config
```

### Prop Values

| Prop    | Values                  | Default |
| ------- | ----------------------- | ------- |
| variant | "base", "error", "flex" | "base"  |
| size    | "sm", "base", "md"      | "base"  |
| asChild | true, false             | false   |

## Styles

To add styles from the library to any of the components in your project, you need to add the pattern `"./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"` within the `tailwind.config.ts` file. This will allow TailwindCSS to recognize the classes used in the library and apply the styles to the components.

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"],
}

export default config
```

## Customizing The Design System

The library uses CSS variables to define the design system. You can customize these variables to match your project's design requirements. Here are the available CSS variables and how to set them.

### Available CSS Variables

The following CSS variables are a few of the variables configured. If you want to see all of the CSS variables provided by the library, [please see](https://github.com/halvaradop/ui/blob/master/index.css).

#### CSS Config

```css
:root {
  --color-primary: oklch(13% 0 100);
  --color-secondary: oklch(92% 0 0);
  --color-ghost: oklch(92% 0 0);
  --color-red: oklch(67% 0.2343 13);
  --color-blue: oklch(62% 0.22 250);
  --color-green: oklch(86% 0.32 147);
  --color-yellow: oklch(87% 0.2 90);
  --color-font-100: oklch(96% 0 360);
  --color-font-200: oklch(13% 0 100);
}
```

#### Multi-Theme Support

If your application supports multiple themes, such as a dark theme, you can update the CSS variables accordingly. For example:

```css
:is(html, body).dark {
  --color-primary: oklch(92% 0 0);
  --color-secondary: oklch(13% 0 100);
}
```

#### Tailwind Config

Set the CSS variables in the `tailwind.config.{js|ts}` file as shown below

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  theme: {
    extends: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ghost: "var(--color-ghost)",
        ...
      }
    }
  }
}

export default config
```

By following these steps, you can effectively document how to set and customize the CSS variables used by your library to define the design system.

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
