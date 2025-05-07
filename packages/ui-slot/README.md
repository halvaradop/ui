# @halvaradop/ui-slot

The `@halvaradop/ui-slot` package provides a reusable `Slot` component, designed to enhance flexibility in React applications. It allows you to dynamically replace the default HTML tag of a component with the tag specified by its children. Additionally, it exports TypeScript types to facilitate seamless integration. Components like `Button` in the `@halvaradop/ui` library utilize this package.

## Installation

This template package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-slot
yarn add @halvaradop/ui-slot
pnpm add @halvaradop/ui-slot
```

### For React 19

Install the beta version:

```bash
npm install @halvaradop/ui-slot@beta
yarn add @halvaradop/ui-slot@beta
pnpm add @halvaradop/ui-slot@beta
```

## Usage

The `Slot` component is highly customizable and supports additional props for enhanced functionality. Below is an example of how to use it:

```tsx
import { Slot, type SlotProps } from "@halvaradop/ui-slot"

export default function Card({ children, asChild, ...props }: SlotProps<"div">) {
  const Component = asChild ? Slot : "div"
  return <Component {...props}>{children}</Component>
}
```

### Prop Values

| Prop    | Values      | Default |
| ------- | ----------- | ------- |
| asChild | true, false | false   |

## Notes

The beta version is functional but may have minor changes or issues compared to the stable version. If you encounter any problems, please report them in an [Issue](https://github.com/halvaradop/ui/issues) with details.
