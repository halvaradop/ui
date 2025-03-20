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
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config
```

### Customizing with CSS Variables

The `Label` component supports CSS variables to customize its styles based on your design system. To set the CSS variables, define the required variables in your project's `.css` file. Then, extend the `colors` field in the `tailwind.config.ts` file to create new color names using the values of the previously defined CSS variables.

Below are some of the CSS variables used by the `@halvaradop/ui-label` component. For a complete list of CSS variables, refer to the [index.css](https://github.com/halvaradop/ui/blob/master/index.css) file:

```css
/* Default color scheme for light theme */

:root {
  /* Primary colors used by base variant (Default variant) */
  --color-primary: oklch(13% 0 100);
}
```

### Multi-Theming Support

The library supports only the `Dark Theme`. To update the CSS variables based on the dark theme, use the following code:

```css
/* Dark theme color scheme */

:is(html, body).dark {
  --color-primary: oklch(13% 0 100);
}
```

### Integrating CSS Variables with TailwindCSS Configuration

After defining the colors for your project using your design system or the default styles provided by the library, the next step is to create new color references using the CSS variables. The following code snippet demonstrates how to create some colors using these CSS variables. For more details, refer to the [tailwind.config.ts](https://github.com/halvaradop/ui/blob/master/tailwind.config.ts) file.

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extends: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
        },
      },
    },
  },
}

export default config
```

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
