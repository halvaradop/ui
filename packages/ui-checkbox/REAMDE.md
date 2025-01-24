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

| Prop        | Values                                    | Default |
| ----------- | ----------------------------------------- | ------- |
| color       | "green", "blue", "red", "yellow", "black" | "green" |
| size        | "sm", "base", "md", "lg"                  | "base"  |
| fullRounded | true, false                               | false   |

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
