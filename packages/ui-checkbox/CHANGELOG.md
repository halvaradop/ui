# CHANGELOG - @halvaradop/ui-checkbox

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Migrated from Tailwind CSS v3 to v4. Deprecated older CSS variables and introduced new ones using the `@theme` directive. This affects the configuration and structure of the Checkbox component.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Improved accessibility (a11y) by adding WAI-ARIA attributes such as `role`, `type`, and `tabIndex` to the Checkbox component.  
  [#165](https://github.com/halvaradop/ui/pull/165)

### Removed

- Removed the `blue` and `yellow` variants from the `color` prop, which were inconsistent with the new CSS variable structure in Tailwind CSS v4.  
  [#152](https://github.com/halvaradop/ui/pull/152)

### Notes

- The migration to Tailwind CSS v4 affects all components that relied on older variant definitions or hardcoded variable names.

---

## [0.4.0-rc.1] - 2025-06-07

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
