# @halvaradop/ui-slot

`@halvaradop/ui-slot` provides a reusable Slot component to enhance flexibility in React applications. It allows you to dynamically replace the default HTML tag of a component with the tag specified by its children. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

```bash
npm install @halvaradop/ui-slot
yarn add @halvaradop/ui-slot
pnpm add @halvaradop/ui-slot
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-slot@legacy
yarn add @halvaradop/ui-slot@legacy
pnpm add @halvaradop/ui-slot@legacy
```

## Usage

The `Slot` component is highly customizable and supports additional props for enhanced functionality. Example usage:

```tsx
import { Slot, type SlotProps } from "@halvaradop/ui-slot"

export default function Card({ children, asChild, ...props }: SlotProps<"div">) {
  const Component = asChild ? Slot : "div"
  return <Component {...props}>{children}</Component>
}
```

### Prop Reference

| Prop      | Accepted Values | Default |
| --------- | --------------- | ------- |
| `asChild` | `true \| false` | `false` |

## About

This component is part of the [`@halvaradop/ui`](https://github.com/halvaradop/ui) library, a collection of production-ready React components built with [TypeScript](https://www.typescriptlang.org/) and [React](https://react.dev/), and styled using [Tailwind CSS](https://tailwindcss.com/) and [Class Variance Authority (CVA)](https://cva.style/). Designed for modern web applications, it aims to deliver accessible, customizable, and maintainable UI building blocks to accelerate your development workflow.

### License

This project is licensed under the `MIT License`. For full details, see the [LICENSE](https://github.com/halvaradop/ui/blob/master/LICENSE) file.

### Contributing

We welcome and appreciate contributions to the `@halvaradop/ui` library!

To get started, please read our [Contributing Guide](https://github.com/halvaradop/ui/blob/main/docs/CONTRIBUTING.md). All contributors are expected to follow our [Code of Conduct](https://github.com/halvaradop/.github/blob/main/.github/CODE_OF_CONDUCT.md).

---

Made with ❤️ by the `@halvaradop/ui` team.
