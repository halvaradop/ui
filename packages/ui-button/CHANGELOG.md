# CHANGELOG - @halvaradop/ui-button

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Migrated from Tailwind CSS v3 to v4. Removed deprecated CSS variables and added new auto-generated variables using the `@theme` directive. These changes improve consistency and reduce manual configuration. This change affected the Button component.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Improved accessibility (a11y) by adding WAI-ARIA attributes such as `role`, `type`, and `tabIndex` to the Button component.  
  [#165](https://github.com/halvaradop/ui/pull/165)

### Notes

- Tailwind CSS v4 changes impacted most components. The Button component now uses native variants instead of custom `addVariant()` definitions.

---

## [0.6.0] - 2025-02-06

### Added

- Added new `variant` options: `secondary` and `plain` for extended Button styles.  
  [#93](https://github.com/halvaradop/ui/pull/93)

- Introduced CSS variables for Button customization. Declare these in your main CSS file and configure them in `tailwind.config.ts`.  
  [#93](https://github.com/halvaradop/ui/pull/93)

- Renamed `--color-font-100` and `--color-font-200` to `--color-base` and `--color-inverse`.  
  [#125](https://github.com/halvaradop/ui/pull/125)

---

## [0.5.0] - 2025-01-15

### Changed

- Reintroduced `forwardRef` to restore support for `ref` prop in React 18.  
  [#78](https://github.com/halvaradop/ui/pull/78)

---

## [0.4.0] - 2024-12-19

### Removed

- Removed `forwardRef` from the Button component based on React 19 upgrade, which supports `ref` natively.  
  [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types in the package build.  
  [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved incompatibility between React 18 and 19 related to `jsx-runtime`.  
  [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), [#72](https://github.com/halvaradop/ui/pull/72)

---

## [0.3.0] - 2024-10-03

### Added

- Added `Slot` component support via `asChild` for enhanced composition.  
  [#30](https://github.com/halvaradop/ui/pull/30)

---

## [0.2.1] - 2024-09-23

### Fixed

- Re-released to fix an error with `jsx` config in `tsconfig.json`.  
  [#23](https://github.com/halvaradop/ui/pull/23)

---

## [0.2.0] - 2024-09-17

### Added

- Added `destructive` and `outline` variants.  
  [#7](https://github.com/halvaradop/ui/pull/7)

### Fixed

- Reworked internal merging using `@halvaradop/ui-core`.  
  [#12](https://github.com/halvaradop/ui/pull/12)

---

## [0.1.0] - 2024-09-17

### Added

- Initial release of the Button component. Includes support for variants (`base`, `ghost`, `link`) and sizes (`sm`, `base`, `md`, `lg`). Also supports `fullWidth` and `fullRounded` props.  
  [#4](https://github.com/halvaradop/ui/pull/4)
