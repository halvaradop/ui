# @halvaradop/ui-radio-group

The `@halvaradop/ui-radio-group` is an accessible, reusable, and customizable `RadioGroup` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Key Features

- Implements the Compound Component Pattern for managing state and values between the `RadioGroup` and its child components.
- Includes the `Radio` component from the `@halvaradop/ui-radio` package, re-exported for convenience.
- Fully customizable and styled with TailwindCSS.

> [!Note]
> The `Radio` component is already included and re-exported from the `/radio` entry point of this package. You do not need to install `@halvaradop/ui-radio` separately. However, we recommend using the `Radio` component provided by this package to fully leverage the Compound Component Pattern and its associated logic.

## Installation

This radio-group package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-radio-group
yarn add @halvaradop/ui-radio-group
pnpm add @halvaradop/ui-radio-group
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-radio-group@beta
yarn add @halvaradop/ui-radio-group@beta
pnpm add @halvaradop/ui-radio-group@beta
```

## Usage

The `@halvaradop/ui-radio-group` package simplifies the use of radio buttons by managing shared logic through the `RadioGroup` component. Some props, such as `variant`, `defaultValue`, and `onChange`, can be set directly on the `RadioGroup` component.

```tsx
import { RadioGroup } from "@halvaradop/ui-radio-group"
import { Radio } from "@halvaradop/ui-radio-group/radio"

export default function App() {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <RadioGroup variant="row" name="food" onChange={handleChange}>
      <Radio value="pizza" />
      <Radio value="hamburger" />
    </RadioGroup>
  )
}
```

### Prop Values

| Prop         | Values               | Default   |
| ------------ | -------------------- | --------- |
| variant      | `"row", "column"`    | "column"  |
| defaultValue | `string`             | undefined |
| onChange     | `(e: Event) => void` | undefined |

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
