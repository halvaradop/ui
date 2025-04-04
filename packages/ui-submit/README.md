# @halvaradop/ui-submit

The `@halvaradop/ui-submit` is an accessible, reusable, and customizable `Submit` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This submit package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-submit
yarn add @halvaradop/ui-submit
pnpm add @halvaradop/ui-submit
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-submit@beta
yarn add @halvaradop/ui-submit@beta
pnpm add @halvaradop/ui-submit@beta
```

## Usage

The `Submit` component offers four additional props for customization: `variant`, `size`, `fullWidth` and `fullRounded`. Import the `Submit` component as shown below:

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

### Prop Values

| Prop        | Values                   | Default |
| ----------- | ------------------------ | ------- |
| variant     | "base", "inverted"       | "base"  |
| size        | "sm", "base", "md", "lg" | "base"  |
| fullWidth   | true, false              | false   |
| fullRounded | true, false              | false   |

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

The `Submit` component supports CSS variables to customize its styles based on your design system. To set the CSS variables, define the required variables in your project's `.css` file. Then, extend the `colors` field in the `tailwind.config.ts` file to create new color names using the values of the previously defined CSS variables.

Below are some of the CSS variables used by the `@halvaradop/ui-submit` component. For a complete list of CSS variables, refer to the [index.css](https://github.com/halvaradop/ui/blob/master/index.css) file:

```css
/* Default color scheme for light theme */
:root {
  /* Primary colors */
  --color-primary: oklch(13% 0 100);
  --color-primary-hover: oklch(28% 0 100);

  /* Secondary colors */
  --color-secondary: oklch(92% 0 0);
  --color-secondary-hover: oklch(95% 0 0);
}
```

### Multi-Theme Support

The library supports only the `Dark Theme`. To update the CSS variables based on the dark theme, use the following code:

```css
:is(html, body).dark {
  --color-primary: oklch(13% 0 100);
  --color-primary-hover: oklch(28% 0 100);

  --color-secondary: oklch(92% 0 0);
  --color-secondary-hover: oklch(95% 0 0);
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
      },
    },
  },
}

export default config
```

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
