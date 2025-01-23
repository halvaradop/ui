# @halvaradop/ui-radio

The `@halvaradop/ui-radio` is an accessible, reusable, and customizable `Radio` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This radio package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-radio
yarn add @halvaradop/ui-radio
pnpm add @halvaradop/ui-radio
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-radio@beta
yarn add @halvaradop/ui-radio@beta
pnpm add @halvaradop/ui-radio@beta
```

## Usage

The `Radio` component offers two additional props for customization: `color` and `size`. Import the `Radio` component as shown below:

```tsx
import { Radio } from "@halvaradop/ui-Radio"

export default function App() {
  return (
    <Label>
      Username
      <Radio value="pizza" />
    </Label>
  )
}
```

### Prop Values

| Prop  | Values                                    | Default |
| ----- | ----------------------------------------- | ------- |
| color | "green", "blue", "red", "yellow", "black" | "base"  |
| size  | "sm", "base", "md", "lg"                  | "base"  |

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
