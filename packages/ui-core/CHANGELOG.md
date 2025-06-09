# CHANGELOG - @halvaradop/ui-core

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

### Changed

- Rename `WithChildrenProps` to `PropsWithChildren` type. [#173](https://github.com/halvaradop/ui/pull/173)

### Removed

- Removed `ArgsFunction` type from `types.ts` file. [#173](https://github.com/halvaradop/ui/pull/173)

- Removed `slot.ts` and migrated its contents to the new `@halvaradop/ui-slot` package. This reduces bundle size for packages that do not use the Slot component. The removal of `slot.ts` impacts packages relying on `SlotProps`. Ensure they import from `@halvaradop/ui-slot` moving forward. [#156](https://github.com/halvaradop/ui/pull/156)

### Notes

- This `@next` version acts as a **candidate for the upcoming stable `1.0.0` release**.
- Versioning and publishing are automated via the `release.bash` script.
- The main goal is to test the release workflow and gather feedback from real-world environments.

> The stable `1.0.0` version will be published after successful validation of this `next` version.  
> This release was initiated in response to [#169](https://github.com/halvaradop/ui/issues/169), which details the rationale for moving to a major stable version.

---

## [0.3.0-beta.1] - 2025-02-12 (Beta for React 19 Development)

### Removed

- Removed `tsup.config.base.ts` and moved its contents to a new `@halvaradop/ui-utils` package for better organization of build and configuration utilities. [#113](https://github.com/halvaradop/ui/pull/113)

---

## [0.2.1-beta.1] - 2025-01-15 (Beta for React 19 Development)

### Added

- Added utility types to improve type safety and reuse:
  - `ArgsFunction`: for functions with arguments
  - `SlotProps` type
  - `HTMLTag`: All HTML tags in React.
  - `WithChildrenProps<Props>`: Enforces `children` prop.
  - `HTMLTagAttributes<Tag>`: Attributes for a given HTML tag or component.
  - `ComponentProps<Tag, ExcludedAttributes>`: Extends `HTMLTagAttributes` with exclusion support.  
    [#79](https://github.com/halvaradop/ui/pull/79)

---

## [0.2.1-beta.0] - 2024-12-19 (Beta for React 19 Development)

> **Beta release for React 19 development:** This version targets early adopters who want to test the library with React 19. It is not intended for production use.

### Changed

- Updated peer dependencies to support React 19.
- Began internal refactoring to align with React 19 features and best practices.

### Notes

- This beta is for development and feedback purposes only. Breaking changes may occur in future releases.
- Please report any issues encountered when using this version with React 19.

## [0.2.1] - 2024-11-26

### Fixed

- Fixed issue in `Slot` component where cloning a valid child element could yield undefined props, causing runtime errors (React 19).  
  [#55](https://github.com/halvaradop/ui/pull/55)

---

## [0.2.0] - 2024-10-04

### Added

- Added the `Slot` component to enable extensible React components via the Compound Component Pattern.  
  [#30](https://github.com/halvaradop/ui/pull/30)

- Updated `SlotProps` to accept a second argument for better HTML tag inference in components that implement `Slot`.  
  [#58](https://github.com/halvaradop/ui/pull/58)

---

## [0.1.0] - 2024-09-13

### Added

- Added `merge` function, re-exported from `tailwind-merge` and `clsx`, providing a comprehensive Tailwind class merging utility.  
  [#6](https://github.com/halvaradop/ui/pull/6)

- Added `tsupConfig` configuration for building all packages in the `@halvaradop/ui` library.  
  [#13](https://github.com/halvaradop/ui/pull/13)
