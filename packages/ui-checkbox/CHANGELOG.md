# CHANGELOG - @halvaradop/ui-checkbox

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [0.5.0] - 2025-06-09 - (Version @legacy for React 18)

> **Release: React 18 Support**
>
> Version **0.y.z** marks the official release of our component library with full **React 18** compatibility. This version is a **direct promotion of the latest pre-release (`0.y.z-rc.n`)** and has passed all stability and regression tests in real-world environments. It includes all changes, improvements, and fixes introduced during the `rc` phase.
>
> While this release contains substantial updates (such as the complete migration to Tailwind CSS v4 and accessibility enhancements) similar to those in the main (`latest`) version, its purpose is to provide a dedicated support line for projects that still rely on React 18. Active development has moved to the `master` branch, which targets React 19.
>
> **Recommended update for React 18 users!**
>
> We strongly recommend updating to this version if your project still depends on React 18 to benefit from the latest fixes and optimizations. You can install it using the `legacy` tag on npm:
>
> ```bash
> npm install @halvaradop/ui@legacy
> ```
>
> We encourage users to plan their migration to React 19 to take advantage of the latest features and optimizations available in the `master` branch.

---

## [0.4.0-rc.1] - 2025-06-07

### Changed

- Migrated from Tailwind CSS v3 to v4. Deprecated older CSS variables and introduced new ones using the `@theme` directive. This affects the configuration and structure of the Checkbox component.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Improved accessibility (a11y) by adding WAI-ARIA attributes such as `role`, `type`, and `tabIndex` to the Checkbox component.  
  [#165](https://github.com/halvaradop/ui/pull/165)

### Removed

- Removed the `blue` and `yellow` variants from the `color` prop, which were inconsistent with the new CSS variable structure in Tailwind CSS v4.  
  [#152](https://github.com/halvaradop/ui/pull/152)

### Notes

- This is a **release candidate** published under the `rc` tag to validate changes in preparation for the upcoming `1.0.0` major release.  
  See [#170](https://github.com/halvaradop/ui/pull/170)
- Versioning and publishing were automated using the `release.bash` script.  
  See [#170](https://github.com/halvaradop/ui/pull/170)
- The purpose of this release is to test the release workflow in real environments before finalizing the stable release.  
  See [#170](https://github.com/halvaradop/ui/pull/170)

> No breaking changes have been introduced in this release candidate.  
> The final release will follow after successful validation.

This release was initiated based on [#169](https://github.com/halvaradop/ui/issues/169), which outlines the reasoning for upgrading to a stable major version.

---

## [0.4.0] - 2025-02-06

### Added

- Introduced CSS variables for customization.  
  [#93](https://github.com/halvaradop/ui/pull/93)

- Added `fullRounded` support to the Checkbox component using `cva`.  
  [#108](https://github.com/halvaradop/ui/pull/108)

---

## [0.3.0] - 2025-01-15

### Changed

- Added `forwardRef` to support `ref` usage with React 18.  
  [#67](https://github.com/halvaradop/ui/pull/67)

- Enabled spreading of additional props to Checkbox component.  
  [#67](https://github.com/halvaradop/ui/pull/67)

---

## [0.2.0] - 2024-12-19

### Fixed

- Resolved incompatibility between React 18 and 19 caused by `jsx-runtime` changes and type errors in shared packages.  
  [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), [#72](https://github.com/halvaradop/ui/pull/72)

---

## [0.1.0] - 2024-12-13

### Added

- Initial release of the Checkbox component. Includes support for `sm`, `base`, `md`, and `lg` sizes; `green`, `blue`, `red`, `yellow`, and `black` colors; and `fullWidth` / `fullRounded` props. Built using `cva`.  
  [#63](https://github.com/halvaradop/ui/pull/63)
