# CHANGELOG - @halvaradop/ui-label

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Updated CSS variables for improved configuration and compatibility with Tailwind CSS v4. Main changes for the Button component: [#152](https://github.com/halvaradop/ui/pull/152)
  - #### New CSS Variables
    - `--opacity-cursor`
    - `--color-on-primary`
    - `--color-on-secondary`
    - `--color-surface`
    - `--color-on-surface`
    - `--color-muted`
    - `--color-danger`
  - #### Deprecated CSS Variables
    - `--color-primary-hover`
    - `--color-text-base`
    - `--color-text-inverse`

### Changed

- Renamed `--color-font-100` and `--color-font-200` to `--color-base` and `--color-inverse` for easier configuration via `tailwind.config.ts`. [#125](https://github.com/halvaradop/ui/pull/125)
- The Slot component was moved to the new agnostic package `@halvaradop/ui-slot` to reduce the size of packages that do not use the Slot component. The dependency on `@halvaradop/ui-core` was removed and replaced with `@halvaradop/ui-slot` where appropriate. [#151](https://github.com/halvaradop/ui/pull/151)

## [0.4.0] - 2025-02-06

- Introduced CSS variables for Button customization. Declare these in your main CSS file and configure them in `tailwindcss.config.ts`: [#93](https://github.com/halvaradop/ui/pull/93)
  - `--color-primary`

## [0.3.0] - 2025-01-15

### Added

- Added `forwardRef` support to the Button component, restoring the `ref` prop functionality removed in [#58](https://github.com/halvaradop/ui/pull/58). [#78](https://github.com/halvaradop/ui/pull/78)

## [0.2.0] - 2024-12-19

### Removed

- Removed `forwardRef` from the Button component due to the React upgrade to v19, which no longer requires it for ref forwarding. [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types in the package build, which caused components to not recognize those types. [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved incompatibility between React 18 and 19 caused by changes in `react` and `react/jsx-runtime` packages, mainly affecting `@halvaradop/ui-core` and the Slot component. Logic is now separated for React 18 (stable) and React 19 (beta). See [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), and [#72](https://github.com/halvaradop/ui/pull/72).

## [0.1.0] - 2024-10-07

### Added

- Initial release: Introduced the `Label` component with `base`, `error`, and `flex` variants for the `variant` prop, and `sm`, `base`, and `md` for the `size` prop. Implemented using the `cva` function from `class-variance-authority`. Also includes the `Slot` component from `@halvaradop/ui-core` to extend the React component. [#36](https://github.com/halvaradop/ui/pull/36)
