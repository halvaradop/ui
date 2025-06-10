# @halvaradop/ui-slot

`@halvaradop/ui-slot` provides a reusable Slot component to enhance flexibility in React applications. It allows you to dynamically replace the default HTML tag of a component with the tag specified by its children. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy).

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

| Prop    | Values      | Default |
| ------- | ----------- | ------- |
| asChild | true, false | false   |

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
