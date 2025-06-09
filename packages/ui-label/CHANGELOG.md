# CHANGELOG - @halvaradop/ui-label

All notable changes to this project are documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [1.0.0-next.1] - 2025-06-08 (Version @next for React 19)

> **Pre-release for React 19:** This `next` version is published for testing and validation with **React 19** as the base. It allows evaluation in real-world environments before being promoted to a stable release. The previous `rc` version was based on React 18.  
> [More details about the release strategy: #160](https://github.com/halvaradop/ui/pull/160)

### Breaking Changes

- **Migration to Tailwind CSS v4:** This release migrates the library from **Tailwind CSS v3 to v4**. **This is a breaking change** if your application depends on Tailwind CSS v3 or on specific configurations that have been changed or removed in v4. Most components have been affected. [#158](https://github.com/halvaradop/ui/pull/158) and [#172](https://github.com/halvaradop/ui/pull/172)

### Changed

- Removed dependency on `@halvaradop/ui-core` and switched to the new `@halvaradop/ui-slot` package for Slot functionality, reducing package size.  
  [#151](https://github.com/halvaradop/ui/pull/151)

### Notes

- The migration to Tailwind CSS v4 removes the need for defining variants in `tailwind.config.ts`, allowing simpler native theming.
- Ensure all usages of `Slot` are updated to use `@halvaradop/ui-slot`.

### Notes

- This `@next` version acts as a **candidate for the upcoming stable `1.0.0` release**.
- Versioning and publishing are automated via the `release.bash` script.
- The main goal is to test the release workflow and gather feedback from real-world environments.

> The stable `1.0.0` version will be published after successful validation of this `next` version.  
> This release was initiated in response to [#169](https://github.com/halvaradop/ui/issues/169), which details the rationale for moving to a major stable version.

---

## [0.2.0-beta.1] - 2025-02-12

### Added

- Introduced CSS variables for styling the Label component.  
  [#103](https://github.com/halvaradop/ui/pull/103)

---

## [0.1.2-beta.0] - 2024-12-19

> **Beta release for React 19 development:** This version targets early adopters who want to test the library with React 19. It is not intended for production use.

### Changed

- Updated peer dependencies to support React 19.
- Began internal refactoring to align with React 19 features and best practices.

### Removed

- Removed `forwardRef` from the Button component based on React 19 upgrade, which supports `ref` natively.  
  [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types in the package build.  
  [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved compatibility issues between React 18 and 19 caused by updates in `jsx-runtime` and shared slot logic.  
  [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), [#72](https://github.com/halvaradop/ui/pull/72)

### Notes

- This beta is for development and feedback purposes only. Breaking changes may occur in future releases.
- Please report any issues encountered when using this version with React 19.

---

## [0.1.0] - 2024-10-07

### Added

- Initial release of the Label component with support for `base`, `error`, and `flex` variants, and sizes `sm`, `base`, and `md`. Includes Slot composition via `@halvaradop/ui-core`.  
  [#36](https://github.com/halvaradop/ui/pull/36)
