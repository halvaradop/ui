# @halvaradop/ui-button

The `@halvaradop/ui-button` is an accessible, reusable, and customizable `Button` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This button package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-button
yarn add @halvaradop/ui-button
pnpm add @halvaradop/ui-button
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-button@beta
yarn add @halvaradop/ui-button@beta
pnpm add @halvaradop/ui-button@beta
```

## Usage

The `Button` component offers five additional props for customization: `variant`, `size`, `fullWidth`, `fullRounded` and `asChild`. Import the `Button` component as shown below:

```tsx
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return (
    <Button variant="outline" size="md" fullWidth fullRounded>
      Click Me
    </Button>
  )
}
```

### Advanced Usage

The `Button` component utilizes the `Slot` component from [`@halvaradop/ui-core`](https://github.com/halvaradop/ui/blob/master/packages/ui-core/src/slot.ts). This allows you to replace the button's HTML tag with the tag of its children. To enable this functionality, set the `asChild` prop to `true`.

```tsx
import { Button } from "@halvaradop/ui-button"

export default function App() {
  return (
    <Button variant="outline" size="md" fullWidth fullRounded asChild>
      <a href="/home">Home</a>
    </Button>
  )
}
```

### Prop Values

| Prop        | Values                                            | Default |
| ----------- | ------------------------------------------------- | ------- |
| variant     | "base", "ghost", "link", "destructive", "outline" | "base"  |
| size        | "sm", "base", "md", "lg"                          | "base"  |
| fullWidth   | true, false                                       | false   |
| fullRounded | true, false                                       | false   |
| asChild     | true, false                                       | false   |

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
