# Contributing Guide

We welcome contributions to the `@halvaradop/ui` library. If you have an idea, find an issue, or have any advice, please feel free to open an issue or create a pull request. Please read our general [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md) for more information.

## For Contributors

If you want to contribute to the library, please keep the following in mind:

- Pull requests require approval from a `core` maintainer before merging. Refer to the `CODEOWNERS` file for details.
- The repository has two main branches:
  - `master`: Supports `React 18`.
  - `beta`: Supports `React 19`.
- The project is written entirely in `TypeScript`.
- Code formatting is enforced using `prettier`. Run `pnpm format` or `pnpm format:check` before committing changes.
- Package management and build processes are handled using `turborepo` and `pnpm`.
- Use `storybook` to visualize UI changes. Start it with `pnpm storybook`.
- Use `@halvaradop/ui-template` to create new components with a basic template.
- Use `@halvaradop/ui-core` for utilities like the `merge` function used across components.
- Use `@halvaradop/ui-utils` for configuration files and code excluded from package bundles.
- Use the `[SYNC]` prefix in pull requests and commits to indicate changes synchronized from another branch. This is typically used to sync changes from `master` to `beta`, with necessary adjustments for compatibility between `React 18` and `React 19`.

## Project Structure

```sh
ui/
│
├── .github/                              # GitHub configuration and standard files
│     ├── workflows/                      # GitHub Actions workflows
│     ├── CODEOWNERS                      # Code ownership rules
│     └── CONTRIBUTING.md                 # Contribution guidelines
├── .storybook/                           # Storybook configuration
├── packages                              # Library components
│     ├── ui-*                            # Individual components
│     ├── ui-core                         # Core utilities (e.g., Slot, types, merge function)
│     ├── ui-utils                        # Shared configurations and utilities
│     └── ui-template                     # Template for creating new components
├── tests                                 # Playwright tests
├── index.css                             # CSS styles and variables
├── tailwind.config.ts                    # Tailwind CSS configuration
└── turbo.json                            # Turborepo configuration
```

## Installation

To set up the project, follow these steps:

### Clone the Repository

```bash
git clone git@github.com:halvaradop/ui.git
cd ui
```

### Scripts

The project uses `pnpm` as the package manager. Below are some commonly used scripts. For a full list, refer to the [package.json](https://github.com/halvaradop/ui/blob/master/package.json) or the `package.json` files in the `packages` directory:

```bash
# Install dependencies
pnpm install

# Build packages
pnpm build

# Start development server
pnpm dev

# Run Storybook
pnpm storybook

# Clean all build artifacts and dependencies
pnpm clean

# Clean only the `dist` folder
pnpm clean:dist

# Clean only the `node_modules` folder
pnpm clean:modules

# Clean only the `.turbo` folder
pnpm clean:turbo
```

## Switching Between Branches

When switching between the `master` and `beta` branches, dependencies may differ. To avoid issues, run the following commands:

```sh
pnpm clean && rm -rf node_modules pnpm-lock.yaml .turbo && pnpm install && echo "Branch is ready to work"
```

## Adding a New Component

To add a new component, use the [ui-template](https://github.com/halvaradop/ui/tree/master/packages/ui-template) as a starting point. Follow these steps:

### Copy the Template

```bash
# Navigate to the packages folder
cd packages

# Copy the ui-template
cp -r ui-template ui-new-component

# Navigate to the new component folder
cd ui-new-component

# Clean the new component
pnpm clean

# Install dependencies
pnpm install
```

### Update the Package Name

Edit the `package.json` file in the new component folder:

```diff
{
- "name": "@halvaradop/ui-template",
+ "name": "@halvaradop/ui-new-component",
  "version": "0.1.0",
  "private": false,
  "description": "A customizable new-component for @halvaradop/ui library with Tailwind CSS styling."
}
```

### Update Documentation

Update the `README.md` file in the new component folder:

```diff
- # @halvaradop/ui-template
- The `@halvaradop/ui-template` is an accessible, reusable, and customizable `Template` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.
+ # @halvaradop/ui-new-component
+ The `@halvaradop/ui-new-component` is an accessible, reusable, and customizable `NewComponent` component that is part of the `@halvaradop/ui` library for React. Built with `React` and styled using `TailwindCSS`, it provides a set of pre-styled components designed to streamline and accelerate the development of user interfaces.
```

### Implement the Component

Edit the `index.tsx` file to define the new component:

```diff
import { forwardRef } from "react"
import { merge, type ArgsFunction, type ComponentProps } from "@halvaradop/ui-core"
import { cva, type VariantProps } from "class-variance-authority"

- export type IndexProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"div">
-
- export const indexVariants = cva("", {
-  variants: {},
- })
-
- export const Index = forwardRef(() => {
-  return <div></div>
- })

+ export type NewComponentProps<T extends ArgsFunction> = VariantProps<T> & ComponentProps<"div">
+
+ export const newComponentVariants = cva("", {
+  variants: {},
+ })
+
+ export const NewComponent = forwardRef(() => {
+  return <div></div>
+ })
```

### Create a Story for the Component

Update the `index.stories.tsx` file to add a Storybook story for the new component:

```diff
import type { Meta, StoryObj } from "@storybook/react"
- import { Index } from "./index.jsx"
+ import { NewComponent } from "./index.jsx"
import { decorator } from "@halvaradop/ui-utils/decorator"
import { DocsPage } from "@halvaradop/ui-utils/docs-page"

const meta: Meta = {
-  title: "ui-index",
+  title: "ui-new-component",
  tags: ["autodocs"],
-  component: Index,
+  component: NewComponent,
  args: {},
  argTypes: {},
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      grid: true,
    },
    docs: {
      page: () => <DocsPage subtitle="New component powered by React & TailwindCSS" />,
    },
  },
  decorators: [decorator],
- } satisfies Meta<typeof Index>
+ } satisfies Meta<typeof NewComponent>
```
