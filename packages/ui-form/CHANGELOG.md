# CHANGELOG - @halvaradop/ui-form

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Migrated from Tailwind CSS v3 to v4. Replaced deprecated variables and introduced auto-generated ones via the `@theme` directive. The configuration is now handled natively without `tailwind.config.ts`. This affected the Form component.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Improved accessibility (a11y) by adding the `role` attribute to the Form component to enhance WAI-ARIA compliance.  
  [#165](https://github.com/halvaradop/ui/pull/165)

### Notes

- These changes reduce configuration overhead and increase clarity for consumers using Tailwind v4.

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

- Introduced new CSS variables to support theming for the Form component.  
  [#93](https://github.com/halvaradop/ui/pull/93)

---

## [0.3.0] - 2025-01-15

### Changed

- Reintroduced `forwardRef` to restore compatibility with `useRef` in React 18.  
  [#78](https://github.com/halvaradop/ui/pull/78)

---

## [0.2.0] - 2024-12-19

### Changed

- Introduced the `merge` function from `@halvaradop/ui-core` for class composition, improving consistency and fixing styling issues with size variants.  
  [#57](https://github.com/halvaradop/ui/pull/57)

### Fixed

- Fixed missing `cva` types which were causing issues during build and usage.  
  [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved incompatibilities between React 18 and 19 caused by runtime JSX differences.  
  [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), [#72](https://github.com/halvaradop/ui/pull/72)

### Removed

- Removed `forwardRef` during the React 19 update under the assumption that it was no longer necessary.  
  [#58](https://github.com/halvaradop/ui/pull/58)

---

## [0.1.0] - 2024-10-09

### Added

- Initial release of the Form component with support for `base`, `outline`, and `filled` variants, as well as `sm`, `base`, `md`, and `lg` sizes. Built using `cva`.  
  [#38](https://github.com/halvaradop/ui/pull/38)
