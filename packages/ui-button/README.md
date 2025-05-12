# @halvaradop/ui-button

The `@halvaradop/ui-button` is an accessible, reusable, and customizable `Button` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This button package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-button
yarn add @halvaradop/ui-button
pnpm add @halvaradop/ui-button
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-button@beta
yarn add @halvaradop/ui-button@beta
pnpm add @halvaradop/ui-button@beta
```

## Usage

The `Button` component offers five additional props for customization: `variant`, `size`, `fullWidth`, `fullRounded` and `asChild`. Import the `Button` component as shown below:

```tsx
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return (
    <Button variant="outline" size="md" fullWidth fullRounded>
      Click Me
    </Button>
  )
}
```

### Advanced Usage

The `Button` component utilizes the `Slot` component from [`@halvaradop/ui-core`](https://github.com/halvaradop/ui/blob/master/packages/ui-core/src/slot.ts). This allows you to replace the button's HTML tag with the tag of its children. To enable this functionality, set the `asChild` prop to `true`.

```tsx
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return (
    <Button variant="outline" size="md" fullWidth fullRounded asChild>
      <a href="/home">Home</a>
    </Button>
  )
}
```

### Prop Values

| Prop        | Values                                                                  | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| variant     | "base", "secondary", "ghost", "link", "destructive", "outline", "plain" | "base"  |
| size        | "sm", "base", "md", "lg"                                                | "base"  |
| fullWidth   | true, false                                                             | false   |
| fullRounded | true, false                                                             | false   |
| asChild     | true, false                                                             | false   |

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

The `Button` component supports CSS variables to customize its styles based on your design system. To set the CSS variables, define the required variables in your project's `.css` file. Then, extend the `colors` field in the `tailwind.config.ts` file to create new color names using the values of the previously defined CSS variables.

Below are some of the CSS variables used by the `@halvaradop/ui-button` component. For a complete list of CSS variables, refer to the [index.css](https://github.com/halvaradop/ui/blob/master/index.css) file:

```css
/* Default color scheme for light theme */
:root {
  /* Primary colors used by base variant (Default variant) */
  --color-primary: oklch(13% 0 100);
  --color-primary-hover: oklch(28% 0 100);

  /* Secondary colors used by secondary variant */
  --color-secondary: oklch(92% 0 0);
  --color-secondary-hover: oklch(95% 0 0);

  /* Text colors */
  --color-font-100: oklch(96% 0 360);
  --color-font-200: oklch(13% 0 100);

  /* Ghost color used by ghost variant */
  --color-ghost: oklch(92% 0 0);

  /* Red color used by destructive variant */
  --color-red: oklch(67% 0.2343 13);
  --color-red-hover: oklch(81% 0.2343 13);
}
```

### Multi-Theming Support

The library supports only the `Dark Theme`. To update the CSS variables based on the dark theme, use the following code:

```css
/* Dark theme color scheme */
:is(html, body).dark {
  --color-primary: oklch(13% 0 100);
  --color-primary-hover: oklch(28% 0 100);

  --color-secondary: oklch(92% 0 0);
  --color-secondary-hover: oklch(95% 0 0);

  --color-font-100: oklch(96% 0 360);
  --color-font-200: oklch(13% 0 100);

  --color-ghost: oklch(92% 0 0);

  --color-red: oklch(67% 0.2343 13);
  --color-red-hover: oklch(81% 0.2343 13);
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
          hover: "var(--color-primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          hover: "var(--color-secondary-hover)",
        },
        color: {
          100: "var(--color-font-100)",
          200: "var(--color-font-200)",
        },
        red: {
          DEFAULT: "var(--color-red)",
          hover: "var(--color-red-hover)",
        },
        ghost: "var(--color-ghost)",
      },
    },
  },
}

export default config
```

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
