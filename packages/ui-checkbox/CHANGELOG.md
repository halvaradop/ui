# CHANGELOG - @halvaradop/ui-checkbox

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Updated CSS variables for improved configuration and compatibility with Tailwind CSS v4. Main changes for the Checkbox component: [#152](https://github.com/halvaradop/ui/pull/152)

  - #### New CSS Variables
    - `--color-primary`
    - `--color-secondary`
    - `--color-muted`
    - `--color-danger`
    - `--color-success`
  - #### Deprecated CSS Variables
    - `--color-primary`
    - `--color-primary-hover`
    - `--color-red`
    - `--color-red-hover`
    - `--color-green`
    - `--color-green-hover`
    - `--color-blue`
    - `--color-blue-hover`
    - `--color-yellow`
    - `--color-yellow-hover`

- Added a new `secondary` variant to the `color` prop, utilizing the `--color-secondary` CSS variable for styling. [#152](https://github.com/halvaradop/ui/pull/152)

### Removed

- Removed the `blue` and `yellow` variants from the `color` prop. [#152](https://github.com/halvaradop/ui/pull/152)

### Improved

- Enhanced accessibility (a11y) for the Checkbox component by adding `role`, `type`, and `tabIndex` props. [#165](https://github.com/halvaradop/ui/pull/165)

---

## [0.4.0]

### Added

- Introduced CSS variables for Checkbox customization. Declare these in your main CSS file and configure them in `tailwindcss.config.ts`: [#93](https://github.com/halvaradop/ui/pull/93)

  - `--color-primary`
  - `--color-primary-hover`
  - `--color-red`
  - `--color-red-hover`
  - `--color-green`
  - `--color-green-hover`
  - `--color-blue`
  - `--color-blue-hover`
  - `--color-yellow`
  - `--color-yellow-hover`

- Added missing `fullRounded` prop to the component, now accessible via the `cva` function. [#108](https://github.com/halvaradop/ui/pull/108)

---

## [0.3.0]

### Added

- Added the missing `ref` prop for direct access to the component via the `useRef` hook, using `forwardRef`. [#67](https://github.com/halvaradop/ui/pull/67)
- Spread additional props to the Checkbox component, allowing users to pass extra props not used internally. [#67](https://github.com/halvaradop/ui/pull/67)

---

## [0.2.0]

### Fixed

- Resolved incompatibility between React 18 and 19 caused by changes in `react` and `react/jsx-runtime` packages, mainly affecting `@halvaradop/ui-core` and the Slot component. Logic is now separated for React 18 (stable) and React 19 (beta). See [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), and [#72](https://github.com/halvaradop/ui/pull/72).

---

## [0.1.0]

### Added

- Initial release: Introduced the `Checkbox` component with `sm`, `base`, `md`, and `lg` options for the `size` prop; `green`, `blue`, `red`, `yellow`, and `black` for the `color` prop; and `fullWidth` and `fullRounded` props. Implemented using the `cva` function from `class-variance-authority`. [#63](https://github.com/halvaradop/ui/pull/63)
