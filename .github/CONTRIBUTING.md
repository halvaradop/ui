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
- We use `storybook` to visualize UI changes in the components. Run `pnpm storybook` to start it.

## Structure

## Adding a New Component

If you want to add a new component to the library, you can create it based on the [Template](https://github.com/halvaradop/ui/tree/master/packages/ui-template). Adjust the template to fit the new component. The template includes default names, documentation, and setup for components that are part of the `@halvaradop/ui` ecosystem.

```bash
cd packages
cp -r ui-template ui-new-component
```

### Update Default Name

After copying the template, update the default name in the `package.json` of the new component:

```json
{
  "name": "@halvaradop/ui-new-component",
  "version": "0.1.0",
  "private": false,
  "description": "A customizable NewComponent component for @halvaradop/ui library with Tailwind CSS styling."
}
```

In the `README.md` file within the `ui-new-component` folder, update the default name provided by `ui-template` to `ui-new-component` and adjust the default names and values within the `README.md` file.

```md
# @halvaradop/ui-new-component
```
