# CHANGELOG - @halvaradop/ui-label

All notable changes to this project are documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Migrated from Tailwind CSS v3 to v4. Updated internal CSS variable system to use native support from Tailwind v4 and the `@theme` directive. Old variables were removed and new ones were added. This affected the Label component’s styling and structure.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Renamed color-related CSS variables such as `--color-font-100` and `--color-font-200` to `--color-base` and `--color-inverse` for naming consistency.  
  [#125](https://github.com/halvaradop/ui/pull/125)

- Removed dependency on `@halvaradop/ui-core` and switched to the new `@halvaradop/ui-slot` package for Slot functionality, reducing package size.  
  [#151](https://github.com/halvaradop/ui/pull/151)

### Notes

- The migration to Tailwind CSS v4 removes the need for defining variants in `tailwind.config.ts`, allowing simpler native theming.
- Ensure all usages of `Slot` are updated to use `@halvaradop/ui-slot`.

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

- Introduced CSS variables for styling the Label component.  
  [#93](https://github.com/halvaradop/ui/pull/93)

---

## [0.3.0] - 2025-01-15

### Changed

- Reintroduced `forwardRef` to support `useRef` usage in React 18.  
  [#78](https://github.com/halvaradop/ui/pull/78)

---

## [0.2.0] - 2024-12-19

### Removed

- Removed `forwardRef` in preparation for React 19 usage, where it is no longer required for refs.  
  [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types in the package build.  
  [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved compatibility issues between React 18 and 19 caused by updates in `jsx-runtime` and shared slot logic.  
  [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), [#72](https://github.com/halvaradop/ui/pull/72)

---

## [0.1.0] - 2024-10-07

### Added

- Initial release of the Label component with support for `base`, `error`, and `flex` variants, and sizes `sm`, `base`, and `md`. Includes Slot composition via `@halvaradop/ui-core`.  
  [#36](https://github.com/halvaradop/ui/pull/36)
