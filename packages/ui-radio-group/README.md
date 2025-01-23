# @halvaradop/ui-radio-group

The `@halvaradop/ui-radio-group` is an accessible, reusable, and customizable `RadioGroup` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

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

| Prop    | Values       | Default |
| ------- | ------------ | ------- |
| variant | "row", "col" | "base"  |

## Styles

To add styles from the library to any of the components in your project, you need to add the pattern `"./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"` within the `tailwind.config.ts` file. This will allow TailwindCSS to recognize the classes used in the library and apply the styles to the components.

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"],
}

export default config
```

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
