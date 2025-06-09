# @halvaradop/ui-core

`@halvaradop/ui-core` provides shared types and utilities for the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it ensures consistent functionality and design across all packages by centralizing these resources.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

```bash
npm install @halvaradop/ui-core
yarn add @halvaradop/ui-core
pnpm add @halvaradop/ui-core
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-core@legacy
yarn add @halvaradop/ui-core@legacy
pnpm add @halvaradop/ui-core@legacy
```

## Usage

The core package provides essential utilities and types to streamline development with `@halvaradop/ui`.

### Types

You can import the following types to ensure type safety and consistency across your components:

- **`HTMLTag`**: Represents valid HTML tag names.
- **`PropsWithChildren`**: Ensures the `children` prop is required.
- **`HTMLTagAttributes`**: Retrieves the attributes for a given HTML tag.
- **`ComponentProps`**: Similar to `HTMLTagAttributes`, but allows you to omit specific attributes.

Types are available from both the main entry point and the `/types` subpath.

### Utilities

- **`merge`**: A utility function to combine multiple class names, making it easier to manage TailwindCSS classes in your components.

**Example:**

```tsx
import { merge, HTMLTag, PropsWithChildren } from "@halvaradop/ui-core"

function Button({ className, children }: PropsWithChildren & { className?: string }) {
  return <button className={merge("px-4 py-2", className)}>{children}</button>
}
```

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
