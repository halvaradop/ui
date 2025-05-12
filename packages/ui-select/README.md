# @halvaradop/ui-select

The `@halvaradop/ui-select` is an accessible, reusable, and customizable `Select` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This select package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-select
yarn add @halvaradop/ui-select
pnpm add @halvaradop/ui-select
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-select@beta
yarn add @halvaradop/ui-select@beta
pnpm add @halvaradop/ui-select@beta
```

## Usage

The `Select` component is highly customizable and comes with several additional props to suit your needs. Below is an example of how to use the `Select` component along with its subcomponents:

```tsx
import { Select, SelectTrigger, SelectList, SelectOption } from "@halvaradop/ui-select"

export default function App() {
  return (
    <Select name="example" defaultValue="option1">
      <SelectTrigger>Select an option</SelectTrigger>
      <SelectList>
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </SelectList>
    </Select>
  )
}
```

### Components Overview

The `@halvaradop/ui-select` package includes the following components, which can be imported either collectively or individually:

- **`Select`**: The main wrapper component that provides context and state management for the select functionality.
- **`SelectTrigger`**: The button that toggles the dropdown menu.
- **`SelectList`**: The container that holds the list of selectable options.
- **`SelectOption`**: Represents an individual option within the dropdown.

#### Importing Components Individually

For optimized imports, you can access each component directly by its entry point:

```tsx
import { Select } from "@halvaradop/ui-select/select"
import { SelectTrigger } from "@halvaradop/ui-select/trigger"
import { SelectList } from "@halvaradop/ui-select/list"
import { SelectOption } from "@halvaradop/ui-select/option"
```

### Prop Reference

The table below outlines the available props for each component, along with their accepted values and default settings:

| Component       | Prop           | Accepted Values      | Default     |
| --------------- | -------------- | -------------------- | ----------- |
| `Select`        | `name`         | `string`             | `undefined` |
| `Select`        | `defaultValue` | `string` or `number` | `undefined` |
| `SelectTrigger` | `children`     | `ReactNode`          | `undefined` |
| `SelectList`    | `children`     | `ReactNode`          | `undefined` |
| `SelectOption`  | `value`        | `string` or `number` | `undefined` |

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

The `Select` component supports CSS variables to customize its styles based on your design system. To set the CSS variables, define the required variables in your project's `.css` file. Then, extend the `colors` field in the `tailwind.config.ts` file to create new color names using the values of the previously defined CSS variables.

Below are some of the CSS variables used by the `@halvaradop/ui-select` component. For a complete list of CSS variables, refer to the [index.css](https://github.com/halvaradop/ui/blob/master/index.css) file:

```css
/* Default color scheme for light theme */
:root {
  /* Primary colors */
  --color-primary: oklch(13% 0 100);
  --color-primary-hover: oklch(28% 0 100);

  /* Secondary colors */
  --color-secondary: oklch(92% 0 0);
  --color-secondary-hover: oklch(95% 0 0);

  /* Red color */
  --color-red: oklch(67% 0.2343 13);
  --color-red-hover: oklch(81% 0.2343 13);

  /* Blue color */
  --color-blue: oklch(62% 0.22 250);
  --color-blue-hover: oklch(76% 0.22 250);

  /* Green color */
  --color-green: oklch(86% 0.32 147);
  --color-green-hover: oklch(100% 0.32 147);

  /* Yellow color */
  --color-yellow: oklch(87% 0.2 90);
  --color-yellow-hover: oklch(100% 0.2 90);

  /* Text colors */
  --color-font-100: oklch(96% 0 360);
  --color-font-200: oklch(13% 0 100);

  /* Ghost color used by the Button component */
  --color-ghost: oklch(92% 0 0);

  /* Input colors */
  --color-input: oklch(13% 0 100);
  --color-input-background: oklch(99% 0 0);

  /* Color for components with the disabled HTML attribute */
  --color-disabled: oklch(92% 0 0);

  /* Modal colors */
  --color-modal: oklch(99.7% 0.001 360);
  --color-dialog: oklch(75.51% 0.001 360 / 50.27%);

  /* Border colors */
  --color-border: oklch(93.55% 0.001 360);
}
```

### Multi-Theme Support

The library supports only the `Dark Theme`. To update the CSS variables based on the dark theme, use the following code:

```css
:is(html, body).dark {
  --color-primary: oklch(92% 0 0);
  --color-secondary: oklch(13% 0 100);
}
```

### Integrating CSS Variables with TailwindCSS Configuration

After defining the colors for your project using your design system or the default styles provided by the library, the next step is to create new color references using the CSS variables. The following code snippet demonstrates how to create some colors using these CSS variables. For more details, refer to the [tailwind.config.ts](https://github.com/halvaradop/ui/blob/master/tailwind.config.ts) file.

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
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
        input: {
          DEFAULT: "var(--color-input)",
          background: "var(--color-input-background)",
        },
        modal: "var(--color-modal)",
        ghost: "var(--color-ghost)",
        dialog: "var(--color-dialog)",
        border: "var(--color-border)",
        disabled: "var(--color-disabled)",
      },
    },
  },
}

export default config
```

## Notes

The beta version is functional but may have minor changes or issues compared to the stable version. If you encounter any problems, please report them in an [Issue](https://github.com/halvaradop/ui/issues) with details.
