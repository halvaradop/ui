# @halvaradop/ui-dialog

`@halvaradop/ui-dialog` is an accessible, reusable, and customizable `Dialog` component from the `@halvaradop/ui` React library. Built with React and styled using TailwindCSS v4, it provides pre-styled components to accelerate UI development.

## Installation

There are two versions available: one for React 18 (stable) and one for React 19 (beta).

### React 18 (Stable)

```bash
npm install @halvaradop/ui-dialog
yarn add @halvaradop/ui-dialog
pnpm add @halvaradop/ui-dialog
```

### React 19 (Beta)

```bash
npm install @halvaradop/ui-dialog@beta
yarn add @halvaradop/ui-dialog@beta
pnpm add @halvaradop/ui-dialog@beta
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

| Prop    | Values                   | Default |
| ------- | ------------------------ | ------- |
| variant | "base", "inner", "fixed" | "base"  |
| size    | "sm", "base", "md", "lg" | "base"  |

## Styling

The component supports TailwindCSS v4. To customize colors, use the following CSS variables. For the full theme, see [the theme file](https://github.com/halvaradop/ui/blob/master/tailwind.css).

```css
@import "tailwindcss";

@theme {
  --color-overlay: oklch(0% 0 0 / 0.6);

  --color-surface: oklch(98% 0 0);
  --color-on-surface: oklch(20% 0.02 260);
}
```

### Dark Theme Support

The library currently supports only a dark theme. To enable it, update the CSS variables as follows:

```css
:is(html, body).dark {
  --color-overlay: oklch(0% 0 0 / 0.6);

  --color-surface: oklch(15% 0.005 260);
  --color-on-surface: oklch(95% 0.01 260);
}
```

## Notes

The beta version may have minor changes or issues compared to the stable version. Please report any problems via [GitHub Issues](https://github.com/halvaradop/ui/issues).
