# @halvaradop/ui-dialog

The `@halvaradop/ui-dialog` is an accessible, reusable, and customizable `Dialog` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

## Installation

This dialog package offers two versions: one for React 18 and another for React 19.

### For React 18

Install the stable version:

```bash
npm install @halvaradop/ui-dialog
yarn add @halvaradop/ui-dialog
pnpm add @halvaradop/ui-dialog
```

### For React 19

Install the beta version:

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

### Variant Values

| Prop    | Values                   | Default |
| ------- | ------------------------ | ------- |
| variant | "base", "inner", "fixed" | "base"  |
| size    | "sm", "base", "md", "lg" | "base"  |

## Styles

To add styles from the library to any of the components in your project, you need to add the pattern `"./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"` within the `tailwind.config.ts` file. This will allow TailwindCSS to recognize the classes used in the library and apply the styles to the components.

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config
```

### Customizing with CSS Variables

The `Dialog` component supports CSS variables to customize its styles based on your design system. To set the CSS variables, define the required variables in your project's `.css` file. Then, extend the `colors` field in the `tailwind.config.ts` file to create new color names using the values of the previously defined CSS variables.

Below are some of the CSS variables used by the `@halvaradop/ui-dialog` component. For a complete list of CSS variables, refer to the [index.css](https://github.com/halvaradop/ui/blob/master/index.css) file:

```css
/* Default color scheme for light theme */
:root {
  /* Modal color used by interalModal */
  --color-modal: oklch(99.7% 0.001 360);

  /* Dialog color used by Modal component */
  --color-dialog: oklch(75.51% 0.001 360 / 50.27%);
}
```

### Multi-Theming Support

The library supports only the `Dark Theme`. To update the CSS variables based on the dark theme, use the following code:

```css
/* Dark theme color scheme */
:is(html, body).dark {
  --color-modal: oklch(99.7% 0.001 360);
  --color-dialog: oklch(75.51% 0.001 360 / 50.27%);
}
```

### Integrating CSS Variables with TailwindCSS Configuration

After defining the colors for your project using your design system or the default styles provided by the library, the next step is to create new color references using the CSS variables. The following code snippet demonstrates how to create some colors using these CSS variables. For more details, refer to the [tailwind.config.ts](https://github.com/halvaradop/ui/blob/master/tailwind.config.ts) file.

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./node_modules/@halvaradop/ui-*/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extends: {
      colors: {
        modal: "var(--color-modal)",
        dialog: "var(--color-dialog)",
      },
    },
  },
}

export default config
```

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
