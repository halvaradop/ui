# CHANGELOG - @halvaradop/ui-button

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Updated CSS variables for better configuration and compatibility with Tailwind CSS v4. Main changes for the Button component: [#152](https://github.com/halvaradop/ui/pull/152)

  - #### New CSS Variables
    - `--opacity-cursor`
    - `--color-on-primary`
    - `--color-on-secondary`
    - `--color-surface`
      `--color-on-surface`
    - `--color-muted`
    - `--color-danger`
    - `--size-sm`
    - `--size-base`
    - `--size-md`
    - `--size-lg`
  - #### Deprecated CSS Variables
    - `--color-primary-hover`
    - `--color-secondary-hover`
    - `--color-text-base`
    - `--color-text-inverse`

- Improved accessibility (a11y) for the Button component by adding `role`, `type`, and `tabIndex` props. [#165](https://github.com/halvaradop/ui/pull/165)

---

## [0.6.0] - 2025-02-06

### Added

- Added new `variant` options: `secondary` and `plain` for extended Button styles. [#93](https://github.com/halvaradop/ui/pull/93)

- Introduced CSS variables for Button customization. Declare these in your main CSS file and configure them in `tailwindcss.config.ts`: [#93](https://github.com/halvaradop/ui/pull/93)

  - `--color-font-100`
  - `--color-font-200`
  - `--color-primary`
  - `--color-primary-hover`
  - `--color-secondary`
  - `--color-secondary-hover`
  - `--color-ghost`
  - `--color-red`
  - `--color-red-hover`

- Renamed `--color-font-100` and `--color-font-200` to `--color-base` and `--color-inverse` for easier configuration via `tailwind.config.ts`. [#125](https://github.com/halvaradop/ui/pull/125)

---

## [0.5.0] - 2025-01-15

### Added

- Added `forwardRef` support to the Button component, restoring the `ref` prop functionality removed in [#58](https://github.com/halvaradop/ui/pull/58). [#78](https://github.com/halvaradop/ui/pull/78)

---

## [0.4.0] - 2024-12-19

### Removed

- Removed `forwardRef` from the Button component due to React upgrade to v19, which no longer requires it for ref forwarding. [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types in the package build, which caused components to not recognize those types. [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved incompatibility between React 18 and 19 caused by changes in `react` and `react/jsx-runtime` packages, mainly affecting `@halvaradop/ui-core` and the Slot component. Logic is now separated for React 18 (stable) and React 19 (beta). See [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), and [#72](https://github.com/halvaradop/ui/pull/72).

---

## [0.3.0] - 2024-10-03

### Added

- Implement the `Slot` component from `@halvaradop/ui-core` for customization and extensible React components via the `asChild` prop. [#30](https://github.com/halvaradop/ui/pull/30)

---

## [0.2.1] - 2024-09-23

### Fixed

- Re-released v0.2.0 to fix an error caused by the `jsx` field in `tsconfig.json` (changed from `preserve` to `react-jsx`). [#23](https://github.com/halvaradop/ui/pull/23)

---

## [0.2.0] - 2024-09-17

### Added

- Added `destructive` and `outline` variants for the `variant` prop.
- Integrated `merge` function from `@halvaradop/ui-core` to combine component and user classes. [#7](https://github.com/halvaradop/ui/pull/7)

### Fixed

- Re-released v0.1.0 to address issues and implement the `merge` function from `@halvaradop/ui-core` for improved consistency. [#12](https://github.com/halvaradop/ui/pull/12)

---

## [0.1.0] - 2024-09-17

### Added

- Initial release: Introduced the `Button` component with `base`, `ghost`, and `link` variants for the `variant` prop; `sm`, `base`, `md`, and `lg` for the `size` prop; `fullWidth` and `fullRounded` props. Implemented using the `cva` function from `class-variance-authority`. [#4](https://github.com/halvaradop/ui/pull/4)
