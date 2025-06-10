# CHANGELOG - @halvaradop/ui-button

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [0.7.0] - 2025-06-09 (Version @legacy for React 18)

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

## [0.6.0-rc.1] - 2025-06-07

### Changed

- Migrated from Tailwind CSS v3 to v4. Removed deprecated CSS variables and added new auto-generated variables using the `@theme` directive. These changes improve consistency and reduce manual configuration. This change affected the Button component.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Improved accessibility (a11y) by adding WAI-ARIA attributes such as `role`, `type`, and `tabIndex` to the Button component.  
  [#165](https://github.com/halvaradop/ui/pull/165)

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
