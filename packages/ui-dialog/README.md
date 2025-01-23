# @halvaradop/ui-dialog

The `@halvaradop/ui-dialog` is an accessible, reusable, and customizable `Modal` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.

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

The `Modal` component offers two additional props for customization: `variant` and `size`. Import the `Modal` component as shown below:

```tsx
"use client"
import { useRef } from "react"
import { Button } from "@halvaradop/ui-button"
import { Modal, innerDialogVariants } from "@halvaradop/ui-dialog"

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
      <Modal ref={modalRef}>
        <div className={innerDialogVariants({ variant: "fixed" })}>
          <div>Modal content</div>
          <Button className="mt-4" onClick={() => handleToggleModal(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  )
}
```

> [!TIP]
> The `Modal` component represents the dialog HTML tag to create the window at the top layer. The `innerDialogVariants` function contains the styles for the content within the `Modal` component.

### Prop Values

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
}

export default config
```

## Notes

The beta version works, however, it may have minor changes or issues compared to the stable version. If you find a problem or issue, please report it in an [Issue](https://github.com/halvaradop/ui/issues) with the details.
