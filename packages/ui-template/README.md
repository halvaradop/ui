> [!WARNING]
> This is not a real component provided by the `@halvaradop/ui` library. It is a template to facilitate the creation of new components within the library, offering default configurations and documentation. This package helps reduce the time required to build a component from scratch, allowing you to focus on adding new styles and features. For more information, please read the [Contributing Guide](https://github.com/halvaradop/ui/blob/master/.github/CONTRIBUTING.md).

# @halvaradop/ui-template

The `@halvaradop/ui-template` is an accessible, reusable, and customizable `Template` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This template package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-template
yarn add @halvaradop/ui-template
pnpm add @halvaradop/ui-template
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-template@beta
yarn add @halvaradop/ui-template@beta
pnpm add @halvaradop/ui-template@beta
```

## Usage

The `Template` component offers several additional props for customization. Import the `Template` component as shown below:

```tsx
import { Template } from "@halvaradop/ui-template"

export default function App() {
  return <Template />
}
```

### Prop Values

| Prop    | Values                   | Default |
| ------- | ------------------------ | ------- |
| variant |                          |         |
| size    | "sm", "base", "md", "lg" | "base"  |

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
