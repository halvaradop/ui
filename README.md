# @halvaradop/ui

This is a library of accessible, reusable, and customizable UI components for web applications built with React and styled using TailwindCSS. It provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Version Compatibility

This library supports both `React 18` and `React 19`. Refer to the table below to select the appropriate version of the library based on your React version:

| React version | Library version            |
| ------------- | -------------------------- |
| React 18      | Latest version ^x.y.z      |
| React 19      | Beta version ^x.y.x-beta.n |

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
}

export default config
```

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.

## Contributing

Welcome to contribute to `@halvaradop/ui library` if you have an idea, find an issue or you have an amazing advices, please feel free to open an issue or create a pull request. We offer a guide on how to contribute to the project and the necessary steps to do so. Here's how you can contribute, Read our [Contribuing Guideline](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

# Code Of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
