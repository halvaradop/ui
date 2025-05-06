# @halvaradop/ui-radio-group

The `@halvaradop/ui-radio-group` is an accessible, reusable, and customizable `RadioGroup` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

> [!NOTE]
> This package uses the `Radio` component imported from the `@halvaradop/ui-radio` package to customize the radio component for use with the `RadioGroup` component. It employs the Compound Component Pattern to share logic internally between connected components. However, due to this implementation, TailwindCSS may not recognize the classes used by the `Radio` component, leading to errors and unexpected behavior. To resolve this issue, the team recommends installing the `@halvaradop/ui-radio` package directly. This ensures that TailwindCSS can properly recognize and apply the required classes for the `Radio` component.
> For more detailed information and potential solutions, please read the [open discussion #144](https://github.com/halvaradop/ui/issues/144).

## Installation

This radio-group package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
# Install Radio
## npm
npm install @halvaradop/ui-radio

## yarn
yarn add @halvaradop/ui-radio

## pnpm
pnpm add @halvaradop/ui-radio

# Install RadioGroup
## npm
npm install @halvaradop/ui-radio-group

## yarn
yarn add @halvaradop/ui-radio-group

## pnpm
pnpm add @halvaradop/ui-radio-group
```

### For React 19

Install the beta version:

```bash
# Install Radio

## npm
npm install @halvaradop/ui-radio@beta

## yarn
yarn add @halvaradop/ui-radio@beta

## pnpm
pnpm add @halvaradop/ui-radio@beta

# Install RadioGroup
## npm
npm install @halvaradop/ui-radio-group@beta

## yarn
yarn add @halvaradop/ui-radio-group@beta

## pnpm
pnpm add @halvaradop/ui-radio-group@beta
```

## Usage

The `RadioGroup` component offers an additional prop for customization: `variant`. Import the `RadioGroup` component as shown below:

```tsx
import { Radio } from "@halvaradop/ui-radio"
import { RadioGroup } from "@halvaradop/ui-radio-group"

export default function App() {
  return (
    <RadioGroup>
      <Radio value="pizza" />
      <Radio value="hamburger" />
    </RadioGroup>
  )
}
```

### Prop Values

| Prop    | Values          | Default  |
| ------- | --------------- | -------- |
| variant | "row", "column" | "column" |

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

The `RadioGroup` component does not support CSS variables for customizing its styles directly, as it primarily serves to group `Radio` inputs. For styling customization, consider applying CSS variables to the individual `Radio` components within the `RadioGroup`.

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
