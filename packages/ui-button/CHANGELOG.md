# CHANGELOG - @halvaradop/ui-button

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [1.0.0] - 2025-06-09

> **Stable release for React 19**
>
> Version **1.0.0** is published as the first stable release of the library, now fully compatible and optimized for **React 19**.
>
> **This version is a direct promotion of the latest pre-release (`1.0.0-next.n`)** after successfully passing stability and regression tests in real-world environments. It includes all changes, improvements, and fixes introduced during the `next` phase.
>
> **Recommended update for all users**
>
> It is strongly recommended to update to this stable version to take advantage of the latest features, performance improvements, and security optimizations. Users who still depend on React 18 can continue using the `legacy/react-18` support branch, available on npm under the `legacy` tag.
>
> ### Main changes in version 1.0.0
>
> - **Full compatibility with React 19:** All components have been reviewed, validated, and optimized to ensure correct and efficient operation with React 19.
> - **Complete migration to Tailwind CSS v4:** Finalizes the migration started in the pre-release, adopting the new capabilities, performance improvements, and configuration changes of Tailwind CSS v4.
> - **Accessibility (a11y) improvements:** The components now includes WAI-ARIA attributes and adjustments for a more inclusive and standards-compliant accessibility experience.

- **Removal of the Radio package:** The `@halvaradop/ui-radio` package has been removed in this release. If your project depends on radio components, please migrate to an alternative or continue using a previous version.
  > ### Important notes
  >
  > - This version **does not introduce additional changes** compared to the pre-release `1.0.0-next.1`, except for its promotion to stable after passing all validation and regression tests.
  > - From this version onward, maintenance and new features will focus on compatibility with React 19 and Tailwind CSS v4.

---

## [1.0.0-next.1] - 2025-06-08 (Version @next for React 19)

> **Pre-release for React 19:** This `next` version is published for testing and validation with **React 19** as the base. It allows evaluation in real-world environments before being promoted to a stable release. The previous `rc` version was based on React 18.  
> [More details about the release strategy: #160](https://github.com/halvaradop/ui/pull/160)

### Breaking Changes

- **Migration to Tailwind CSS v4:** This release migrates the library from **Tailwind CSS v3 to v4**. **This is a breaking change** if your application depends on Tailwind CSS v3 or on specific configurations that have been changed or removed in v4. Most components have been affected. Specifically, the `Button` component now uses Tailwind's native variants instead of custom definitions with `addVariant()`. [#158](https://github.com/halvaradop/ui/pull/158) and [#172](https://github.com/halvaradop/ui/pull/172)

### Changes

- Improved accessibility (a11y) of the `Button` component by adding WAI-ARIA attributes such as `role`, `type`, and `tabIndex`.  
  [#176](https://github.com/halvaradop/ui/pull/176)

### Notes

- This `@next` version acts as a **candidate for the upcoming stable `1.0.0` release**.
- Versioning and publishing are automated via the `release.bash` script.
- The main goal is to test the release workflow and gather feedback from real-world environments.

> The stable `1.0.0` version will be published after successful validation of this `next` version.  
> This release was initiated in response to [#169](https://github.com/halvaradop/ui/issues/169), which details the rationale for moving to a major stable version.

---

## [0.4.0-beta.1] - 2025-02-12 (Beta for React 19 Development)

### Added

- Added new `variant` options: `secondary` and `plain` for extended Button styles.  
  [#103](https://github.com/halvaradop/ui/pull/103)

- Introduced CSS variables for Button customization. Declare these in your main CSS file and configure them in `tailwind.config.ts`.  
  [#103](https://github.com/halvaradop/ui/pull/103)

---

## [0.3.1-beta.1] - 2025-01-15 (Beta for React 19 Development)

### Removed

- Removed `forwardRef` from the Button component based on React 19 upgrade, which supports `ref` natively.  
  [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types in the package build.  
  [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved incompatibility between React 18 and 19 related to `jsx-runtime`.  
  [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), [#72](https://github.com/halvaradop/ui/pull/72)

---

## [0.3.0-beta.0] - 2024-12-19 (Beta for React 19 Development)

> **Beta release for React 19 development:** This version targets early adopters who want to test the library with React 19. It is not intended for production use.

### Changed

- Updated peer dependencies to support React 19.
- Began internal refactoring to align with React 19 features and best practices.

### Notes

- This beta is for development and feedback purposes only. Breaking changes may occur in future releases.
- Please report any issues encountered when using this version with React 19.

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
