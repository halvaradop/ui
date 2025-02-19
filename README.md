# @halvaradop/ui

This is a library of accessible, reusable, and customizable UI components for web applications built with React and styled using TailwindCSS. It provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Version Compatibility

This library supports both `React 18` and `React 19`. Refer to the table below to select the appropriate version of the library based on your React version:

| React version | Library version            |
| ------------- | -------------------------- |
| React 18      | Latest version ^x.y.z      |
| React 19      | Beta version ^x.y.z-beta.n |

## Installation

To install the available components, you can refer to the [packages](https://github.com/halvaradop/ui/tree/master/packages) and add the package name with the `@halvaradop` prefix. Then, run one of the following commands based on your package manager and the React version you are using:

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-component
yarn add @halvaradop/ui-component
pnpm add @halvaradop/ui-component
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-component@beta
yarn add @halvaradop/ui-component@beta
pnpm add @halvaradop/ui-component@beta
```

## Usage

Import components and start building your application:

```tsx
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return <Button variant="outline">Click Me</Button>
}
```

Check the full list of components in the [packages directory](https://github.com/halvaradop/ui/tree/master/packages).

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

## CSS Variables

The components support CSS variables to customize your components based on your application's design system. To set the CSS variables, define the required variables in your project's `.css` file. Then, extend the `colors` field in the `tailwind.config.ts` file to create new color names using the values of the previously defined CSS variables.

Below are some of the CSS variables used by the components of the `@halvaradop/ui` library. For a complete list of CSS variables, refer to the [index.css](https://github.com/halvaradop/ui/blob/master/index.css) file:

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

### Multi theming

The library supports only the `Dark Theme`. To update the CSS variables based on the dark theme, use the following code:

```css
/* Dark theme color scheme */
:is(html, body).dark {
  /* Primary colors in dark theme */
  --color-primary: oklch(92% 0 0);
  --color-primary-hover: oklch(95% 0 0);

  /* Secondary colors in dark theme */
  --color-secondary: oklch(13% 0 100);
  --color-secondary-hover: oklch(28% 0 100);

  /* Text colors in dark theme */
  --color-font-100: oklch(13% 0 100);
  --color-font-200: oklch(96% 0 360);

  /* Input colors in dark theme */
  --color-input: oklch(92% 0 0);
  --color-input-background: oklch(13% 0 100);
}
```

## Import CSS Variables in Tailwind Config

After defining the colors for your project using your design system or the default styles provided by the library, the next step is to create new color references using the CSS variables. The following code snippet demonstrates how to create some colors using these CSS variables. For more details, refer to the [tailwind.config.ts](https://github.com/halvaradop/ui/blob/master/tailwind.config.ts) file.

```ts
import type { Config } from "tailwindcss"s

const config: Config = {
  content: ["./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
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
        input: {
          DEFAULT: "var(--color-input)",
          background: "var(--color-input-background)",
        },
      },
    },
  },
}

export default config
```

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.

## Contributing

We welcome contributions to the `@halvaradop/ui` library. If you have an idea, find an issue, or have any advice, please feel free to open an issue or create a pull request. We offer a guide on how to contribute to the project and the necessary steps to do so. Please read [Contributing Guide](https://github.com/halvaradop/ui/blob/master/.github/CONTRIBUTING.md).

# Code Of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
