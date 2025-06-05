# CHANGELOG - @halvaradop/ui-input

All notable changes to this project are documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Updated CSS variables for improved configuration and compatibility with Tailwind CSS v4. Main changes for the Button component: [#152](https://github.com/halvaradop/ui/pull/152)

  - #### New CSS Variables

    - `--color-surface`
    - `--color-on-surface`
    - `--color-border`
    - `--color-muted`
    - `--color-danger`
    - `--color-disabled`
    - `--size-sm`
    - `--size-base`
    - `--size-md`
    - `--size-lg`

  - #### Deprecated CSS Variables
    - `--color-text-base`
    - `--color-text-inverse`
    - `--color-red`
    - `--color-red-hover`
    - `--color-green`
    - `--color-green-hover`

- Improved accessibility (a11y) for the Button component by adding `role` and `type` props. [#165](https://github.com/halvaradop/ui/pull/165)

---

## [0.5.0] - 2025-02-06

- Introduced CSS variables for Button customization. Declare these in your main CSS file and configure them in `tailwindcss.config.ts`: [#93](https://github.com/halvaradop/ui/pull/93)

  - `--color-primary`
  - `--color-input`
  - `--color-border-input`
  - `--color-input-background`

- Renamed `--color-font-100` and `--color-font-200` to `--color-base` and `--color-inverse` for easier configuration via `tailwind.config.ts`. [#125](https://github.com/halvaradop/ui/pull/125)

## [0.4.0] - 2025-01-15

### Added

- Added `forwardRef` support to the Button component, restoring the `ref` prop functionality removed in [#58](https://github.com/halvaradop/ui/pull/58). [#78](https://github.com/halvaradop/ui/pull/78)

## [0.3.0] - 2024-12-19

### Removed

- Removed `forwardRef` from the Button component due to the React v19 upgrade, which no longer requires it for ref forwarding. [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types in the package build, which caused components to not recognize those types. [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved incompatibility between React 18 and 19 caused by changes in `react` and `react/jsx-runtime` packages, mainly affecting `@halvaradop/ui-core` and the Slot component. Logic is now separated for React 18 (stable) and React 19 (beta). See [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), and [#72](https://github.com/halvaradop/ui/pull/72).

## [0.2.0] - 2024-10-29

### Fixed

- Re-released v0.2.0 to fix an error caused by the `jsx` field in `tsconfig.json` (changed from `preserve` to `react-jsx`). [#23](https://github.com/halvaradop/ui/pull/23)

## [0.1.0] - 2024-10-06

### Added

- Initial release: Introduced the `Input` component with `base`, `outline`, and `required` variants for the `variant` prop; `sm`, `base`, `md`, and `lg` for the `size` prop; `fullWidth` and `fullRounded` props. Implemented using the `cva` function from `class-variance-authority`. [#29](https://github.com/halvaradop/ui/pull/29)
