# @halvaradop/ui-label

The `@halvaradop/ui-label` is an accessible, reusable, and customizable `Label` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This label package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-label
yarn add @halvaradop/ui-label
pnpm add @halvaradop/ui-label
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-label@beta
yarn add @halvaradop/ui-label@beta
pnpm add @halvaradop/ui-label@beta
```

## Usage

The `Label` component offers three additional props for customization: `variant`, `size` and `asChild`. Import the `Label` component as shown below:

```tsx
import { Label } from "@halvaradop/ui-label"

export default function App() {
  return (
    <Label>
      Username
      <Label value="pizza" />
    </Label>
  )
}
```

### Advanced Usage

The `Label` component utilizes the `Slot` component from [`@halvaradop/ui-core`](https://github.com/halvaradop/ui/blob/master/packages/ui-core/src/slot.ts). This allows you to replace the button's HTML tag with the tag of its children. To enable this functionality, set the `asChild` prop to `true`.

```tsx
import { Label } from "@halvaradop/ui-label"

export default function App() {
  return (
    <Label variant="outline" size="md" asChild>
      <span>Username</span>
    </Label>
  )
}
```

### Prop Values

| Prop    | Values                  | Default |
| ------- | ----------------------- | ------- |
| variant | "base", "error", "flex" | "base"  |
| size    | "sm", "base", "md"      | "base"  |
| asChild | true, false             | false   |

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
