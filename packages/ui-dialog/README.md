# @halvaradop/ui-dialog

`@halvaradop/ui-dialog` is an accessible, reusable, and customizable `Dialog` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 19 (stable) and one for React 18 (legacy)..

### React 19 (Stable)

```bash
npm install @halvaradop/ui-dialog
yarn add @halvaradop/ui-dialog
pnpm add @halvaradop/ui-dialog
```

### React 18 (Legacy)

```bash
npm install @halvaradop/ui-dialog@legacy
yarn add @halvaradop/ui-dialog@legacy
pnpm add @halvaradop/ui-dialog@legacy
```

## Usage

The `Dialog` component does not accept any props; it simply applies default styles. Import the `Dialog` component as shown below:

```tsx
"use client"
import { useRef } from "react"
import { Button } from "@halvaradop/ui-button"
import { Dialog, modalVariants } from "@halvaradop/ui-dialog"

export default function App() {
  const modalRef = useRef<HTMLDialogElement>(null)

  const handleToggleModal = (isOpen: boolean): void => {
    if (isOpen) {
      modalRef.current?.showModal()
    } else {
      modalRef.current?.close()
    }
  }

  return (
    <>
      <Button onClick={() => handleToggleModal(true)}>Open</Button>
      <Dialog ref={modalRef}>
        <div className={modalVariants({ variant: "fixed" })}>
          <div>Modal content</div>
          <Button className="mt-4" onClick={() => handleToggleModal(false)}>
            Close
          </Button>
        </div>
      </Dialog>
    </>
  )
}
```

> [!TIP]
> The `Dialog` component represents the dialog HTML tag to create the window at the top layer. The `modalVariants` function contains the styles for the content within the `Dialog` component or just known as `modal`, the function exports a set of styles based in two variants called `variant` and `size`, this variants are similars that the receive like other components like `Button`, `Form`, `Input` and more.

### Prop Reference

| Prop      | Accepted Values                  | Default  |
| --------- | -------------------------------- | -------- |
| `variant` | `"base" \| "inner" \| "fixed"`   | `"base"` |
| `size`    | `"sm" \| "base" \| "md" \| "lg"` | `"base"` |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --rounded: 0.375rem;
  --color-overlay: oklch(0% 0 0 / 0.6);
  --color-muted: oklch(65% 0.01 260);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);
}
```

### Dark Theme Support

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --color-muted: oklch(70% 0.01 260);

  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);
}
```

## About

This component is part of the [`@halvaradop/ui`](https://github.com/halvaradop/ui) library, a collection of production-ready React components built with [TypeScript](https://www.typescriptlang.org/) and [React](https://react.dev/), and styled using [Tailwind CSS](https://tailwindcss.com/) and [Class Variance Authority (CVA)](https://cva.style/). Designed for modern web applications, it aims to deliver accessible, customizable, and maintainable UI building blocks to accelerate your development workflow.

### License

This project is licensed under the `MIT License`. For full details, see the [LICENSE](https://github.com/halvaradop/ui/blob/master/LICENSE) file.

### Contributing

We welcome and appreciate contributions to the `@halvaradop/ui` library!

To get started, please read our [Contributing Guide](https://github.com/halvaradop/ui/blob/main/docs/CONTRIBUTING.md). All contributors are expected to follow our [Code of Conduct](https://github.com/halvaradop/.github/blob/main/.github/CODE_OF_CONDUCT.md).

---

Made with ❤️ by the `@halvaradop/ui` team.
