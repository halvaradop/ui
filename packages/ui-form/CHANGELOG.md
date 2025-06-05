# CHANGELOG - @halvaradop/ui-form

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Updated CSS variables for better configuration and compatibility with Tailwind CSS v4. Main changes for the Button component: [#152](https://github.com/halvaradop/ui/pull/152)

  - #### New CSS Variables
    - `--color-surface`
    - `--color-on-surface`
    - `--size-sm`
    - `--size-base`
    - `--size-md`
    - `--size-lg`

- Improved accessibility (a11y) for the Button component by adding `role` props. [#165](https://github.com/halvaradop/ui/pull/165)

## [0.4.0] - 2025-02-06

### Added

- Introduced CSS variables for Button customization. Declare these in your main CSS file and configure them in `tailwindcss.config.ts`: [#93](https://github.com/halvaradop/ui/pull/93)

  - `--color-border`

## [0.3.0] - 2025-01-15

### Added

- Added `forwardRef` support to the Form component, restoring the `ref` prop functionality removed in [#58](https://github.com/halvaradop/ui/pull/58). [#78](https://github.com/halvaradop/ui/pull/78)

## [0.2.0] - 2024-12-19

### Added

- Implement the `merge` function imported from `@halvaradop/ui-core` for merging classes, special for size variants which was created unexpected styles [#57](https://github.com/halvaradop/ui/pull/57)

### Fixed

- Fixed missing `cva` types in the package build, which caused components to not recognize those types. [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved incompatibility between React 18 and 19 caused by changes in `react` and `react/jsx-runtime` packages, mainly affecting `@halvaradop/ui-core` and the Slot component. Logic is now separated for React 18 (stable) and React 19 (beta). See [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), and [#72](https://github.com/halvaradop/ui/pull/72).

### Removed

- Removed `forwardRef` from the Form component due to React upgrade to v19, which no longer requires it for ref forwarding. [#58](https://github.com/halvaradop/ui/pull/58)

## [0.1.0] - 2024-10-09

### Added

- Initial release: Introduced the `Form` component with `base`, `outline`, and `filled` variants for the `variant` prop; `sm`, `base`, `md`, and `lg` for the `size` prop. Implemented using the `cva` function from `class-variance-authority`. [#38](https://github.com/halvaradop/ui/pull/38)
