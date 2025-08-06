# @halvaradop/ui-select

`@halvaradop/ui-select` is an accessible, reusable, and customizable Select component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

```bash
npm install @halvaradop/ui-select
yarn add @halvaradop/ui-select
pnpm add @halvaradop/ui-select
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-select@legacy
yarn add @halvaradop/ui-select@legacy
pnpm add @halvaradop/ui-select@legacy
```

## Usage

The `Select` component is flexible and easy to integrate into your React application. Below are examples demonstrating both the standard and dot notation usage patterns.

### Basic Example

Here's a simple example using the individual component imports:

```tsx
import { useState } from "react"
import { Select, SelectTrigger, SelectList, SelectOption } from "@halvaradop/ui-select"

export default function App() {
  const [selectedValue, setSelectedValue] = useState("")

  return (
    <Select name="example" defaultValue="option1" onValueChange={setSelectedValue}>
      <SelectTrigger>Select an option</SelectTrigger>
      <SelectList>
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </SelectList>
    </Select>
  )
}
```

### Controlled Component Example

To fully control the open state and selected value, use the `open`, `onOpenChange`, `value`, and `onValueChange` props:

```tsx
import { useState } from "react"
import { Select, SelectTrigger, SelectList, SelectOption } from "@halvaradop/ui-select"

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState("option1")

  return (
    <Select
      name="example"
      value={selectedValue}
      onValueChange={setSelectedValue}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SelectTrigger>Select an option</SelectTrigger>
      <SelectList>
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </SelectList>
    </Select>
  )
}
```

### Dot Notation Pattern

You can also use the dot notation pattern to access subcomponents directly from the `Select` component, which can help keep your imports cleaner:

```tsx
import { useState } from "react"
import { Select } from "@halvaradop/ui-select"

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState("option1")

  return (
    <Select
      name="example"
      value={selectedValue}
      onValueChange={setSelectedValue}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Select.Trigger>Select an option</Select.Trigger>
      <Select.List>
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
        <Select.Option value="option3">Option 3</Select.Option>
      </Select.List>
    </Select>
  )
}
```

### Prop Reference

| Component       | Prop            | Accepted Values            | Default     | Description                                |
| --------------- | --------------- | -------------------------- | ----------- | ------------------------------------------ |
| `Select`        | `name`          | `string`                   | `default`   | HTML name attribute for the select element |
| `Select`        | `defaultValue`  | `string`                   | `undefined` | Initially selected option value            |
| `Select`        | `defaultOpen`   | `boolean`                  | `false`     | Whether the select is initially open       |
| `Select`        | `value`         | `string`                   | `""`        | Current selected value (controlled)        |
| `Select`        | `onValueChange` | `(value: string) => void`  | `undefined` | Callback when selection changes            |
| `Select`        | `open`          | `boolean`                  | `false`     | Whether the select is open (controlled)    |
| `Select`        | `onOpenChange`  | `(value: boolean) => void` | `undefined` | Callback when open state changes           |
| `SelectTrigger` | `children`      | `ReactNode`                | `undefined` | Content to display in the trigger button   |
| `SelectList`    | `children`      | `ReactNode`                | `undefined` | List of select options                     |
| `SelectOption`  | `value`         | `string`                   | `undefined` | Value of the individual option             |
| `SelectOption`  | `disabled`      | `boolean`                  | `false`     | Whether the option is disabled             |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --rounded: 0.375rem;
  --color-border: oklch(70% 0.02 260);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);

  --color-primary: oklch(30% 0 270);
  --color-on-primary: oklch(95% 0 0);

  --color-ghost: oklch(94% 0.01 260);

  --color-disabled: oklch(92% 0 0);
  --color-on-disabled: oklch(60% 0.01 260);

  --size-sm: 1.75rem;
  --size-base: 2.25rem;
  --size-md: 2.75rem;
  --size-lg: 3.25rem;
}
```

### Dark Theme Support

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --color-border: oklch(35% 0.01 260);

  --color-primary: oklch(90% 0 0);
  --color-on-primary: oklch(20% 0 270);

  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);

  --color-ghost: oklch(25% 0 0);
  --color-disabled: oklch(30% 0 0);
}
```

## About

This component is part of the [`@halvaradop/ui`](https://github.com/halvaradop/ui) library, a collection of production-ready React components built with [TypeScript](https://www.typescriptlang.org/) and [React](https://react.dev/), and styled using [Tailwind CSS](https://tailwindcss.com/) and [Class Variance Authority (CVA)](https://cva.style/). Designed for modern web applications, it aims to deliver accessible, customizable, and maintainable UI building blocks to accelerate your development workflow.

### License

This project is licensed under the `MIT License`. For full details, see the [LICENSE](https://github.com/halvaradop/ui/blob/master/LICENSE) file.

### Contributing

We welcome and appreciate contributions to the `@halvaradop/ui` library!

To get started, please read our [Contributing Guide](https://github.com/halvaradop/ui/blob/master/docs/CONTRIBUTING.md). All contributors are expected to follow our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).

---

Made with ❤️ by the `@halvaradop/ui` team.
