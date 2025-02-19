# @halvaradop/ui-checkbox

The `@halvaradop/ui-checkbox` is an accessible, reusable, and customizable `Checkbox` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This checkbox package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-checkbox
yarn add @halvaradop/ui-checkbox
pnpm add @halvaradop/ui-checkbox
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-checkbox@beta
yarn add @halvaradop/ui-checkbox@beta
pnpm add @halvaradop/ui-checkbox@beta
```

## Usage

The `Checkbox` component offers three additional props for customization: `color`, `size`, and `fullRounded`. Import the `Checkbox` component as shown below:

```tsx
import { Checkbox } from "@halvaradop/ui-checkbox"

export default function App() {
  return (
    <Label>
      pizza
      <Checkbox value="pizza" />
    </Label>
  )
}
```

### Prop Values

| Prop        | Values                                      | Default |
| ----------- | ------------------------------------------- | ------- |
| color       | "green", "blue", "red", "yellow", "primary" | "green" |
| size        | "sm", "base", "md", "lg"                    | "base"  |
| fullRounded | true, false                                 | false   |

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

The `Checkbox` component supports CSS variables to customize its styles based on your design system. To set the CSS variables, define the required variables in your project's `.css` file. Then, extend the `colors` field in the `tailwind.config.ts` file to create new color names using the values of the previously defined CSS variables.

Below are some of the CSS variables used by the `@halvaradop/ui-checkbox` component. For a complete list of CSS variables, refer to the [index.css](https://github.com/halvaradop/ui/blob/master/index.css) file:

```css
/* Default color scheme for light theme */
:root {
  /* Primary colors used by color variant */
  --color-primary: oklch(13% 0 100);
  --color-primary-hover: oklch(28% 0 100);

  /* Red color used by color variant */
  --color-red: oklch(67% 0.2343 13);
  --color-red-hover: oklch(81% 0.2343 13);

  /* Blue color used by color variant */
  --color-blue: oklch(62% 0.22 250);
  --color-blue-hover: oklch(76% 0.22 250);

  /* Green color used by color variant (Default color variant) */
  --color-green: oklch(86% 0.32 147);
  --color-green-hover: oklch(100% 0.32 147);

  /* Yellow color used by color variant */
  --color-yellow: oklch(87% 0.2 90);
  --color-yellow-hover: oklch(100% 0.2 90);
}
```

### Multi-Theme Support

The library supports only the `Dark Theme`. To update the CSS variables based on the dark theme, use the following code:

```css
/* Dark theme color scheme */
:is(html, body).dark {
  --color-primary: oklch(13% 0 100);
  --color-primary-hover: oklch(28% 0 100);

  --color-red: oklch(67% 0.2343 13);
  --color-red-hover: oklch(81% 0.2343 13);

  --color-blue: oklch(62% 0.22 250);
  --color-blue-hover: oklch(76% 0.22 250);

  --color-green: oklch(86% 0.32 147);
  --color-green-hover: oklch(100% 0.32 147);

  --color-yellow: oklch(87% 0.2 90);
  --color-yellow-hover: oklch(100% 0.2 90);
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
        red: {
          DEFAULT: "var(--color-red)",
          hover: "var(--color-red-hover)",
        },
        blue: {
          DEFAULT: "var(--color-blue)",
          hover: "var(--color-blue-hover)",
        },
        green: {
          DEFAULT: "var(--color-green)",
          hover: "var(--color-green-hover)",
        },
        yellow: {
          DEFAULT: "var(--color-yellow)",
          hover: "var(--color-yellow-hover)",
        },
      },
    },
  },
}

export default config
```

By following these steps, you can effectively document how to set and customize the CSS variables used by your library to define the design system.

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
