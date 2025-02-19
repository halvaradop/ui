# @halvaradop/ui-form

The `@halvaradop/ui-form` is an accessible, reusable, and customizable `Form` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This form package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-form
yarn add @halvaradop/ui-form
pnpm add @halvaradop/ui-form
```

### For React 19

Install the beta version:

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

### Prop Values

| Prop    | Values                           | Default |
| ------- | -------------------------------- | ------- |
| variant | "base", "outline", "filled"      | "base"  |
| size    | "sm", "base", "md", "lg", "full" | "base"  |

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

The `Form` component supports CSS variables to customize its styles based on your design system. To set the CSS variables, define the required variables in your project's `.css` file. Then, extend the `colors` field in the `tailwind.config.ts` file to create new color names using the values of the previously defined CSS variables.

Below are some of the CSS variables used by the `@halvaradop/ui-button` component. For a complete list of CSS variables, refer to the [index.css](https://github.com/halvaradop/ui/blob/master/index.css) file:

```css
/* Default color scheme for light theme */
:root {
  /* Border colors */
  --color-border: oklch(93.55% 0.001 360);
}
```

### Multi-Theming Support

The library supports only the `Dark Theme`. To update the CSS variables based on the dark theme, use the following code:

```css
/* Dark theme color scheme */
:is(html, body).dark {
  --color-border: oklch(93.55% 0.001 360);
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
        border: "var(--color-border)",
      },
    },
  },
}

export default config
```

By following these steps, you can effectively document how to set and customize the CSS variables used by your library to define the design system.

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
