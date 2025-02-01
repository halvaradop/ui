# Contributing Guide

We welcome contributions to the `@halvaradop/ui` library. If you have an idea, find an issue, or have any advice, please feel free to open an issue or create a pull request. Please read our general [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md) for more information.

## For Contributors

If you want to contribute to the library, please keep the following in mind:

- Pull requests need approval from a `core` maintainer before merging.
- There are two major branches:
  - The `master` branch supports `React 18`.
  - The `beta` branch supports `React 19`.
- The project is written entirely in `TypeScript`.
- We use `prettier` for code formatting. Please run `pnpm format` or `pnpm format:check` before committing new changes.
- We use `turborepo` and `pnpm` for managing packages.
- We use `storybook` to visualize UI changes in the components. Run `pnpm storybook` to start it.

## Structure

```sh
ui/
│
├── .github/                              # GitHub Configuration and Standard Files
├── .storybook/                           # Configuration for Storybook
├── packages                              # Contains the components provided by the library
│     ├── ui-...                          # List of components
│     ├── ui-core                         # Configurations commonly used by the components
│     └── ui-template                     # Template to create new components
├── tests                                 # Contains the tests using Playwright
├── index.css                             # Styles and configuration of CSS variables
├── tailwind.config.ts                    # Integrates CSS variables and variants
└── turbo.json                            # Configuration to execute scripts using Turborepo
```

## Installation

To set up and install the project, follow these steps:

### Clone Repository

```bash
git clone git@github.com:halvaradop/ui.git
cd ui
```

### Scripts

The project uses `pnpm` as the package manager. To install the dependencies, build, and develop the project, run the following scripts:

```bash
# Install dependencies
pnpm install

# Build packages
pnpm build

# Develop the project
pnpm dev
```

## Adding a New Component

If you want to add a new component to the library, you can create it based on the [UI Template](https://github.com/halvaradop/ui/tree/master/packages/ui-template). Adjust the template to fit the new component. The template includes default names, documentation, and setup for components that are part of the `@halvaradop/ui` ecosystem.

### Copy Template

```bash
cd packages
cp -r ui-template ui-new-component
```

### Update Default Name

After copying the template, update the default name of the package in the `package.json` of the new component:

```json
{
  "name": "@halvaradop/ui-new-component",
  "version": "0.1.0",
  "private": false,
  "description": "A customizable new-component for @halvaradop/ui library with Tailwind CSS styling."
}
```

### Update Documentation

In the `README.md` file within the folder of the new component, update the default documentation with the adjusted values, configuration, and more details about the new package.

```md
- # @halvaradop/ui-template

* # @halvaradop/ui-new-component
```
