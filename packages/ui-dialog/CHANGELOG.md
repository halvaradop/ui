# CHANGELOG - @halvaradop/ui-dialog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Migrated from Tailwind CSS v3 to v4. Deprecated legacy CSS variables and introduced new auto-generated ones using the `@theme` directive. These changes improve consistency and reduce configuration overhead for the Dialog component.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Improved accessibility (a11y) by adding WAI-ARIA attributes like `role`, `aria-modal`, and `tabIndex` to the Dialog component.  
  [#165](https://github.com/halvaradop/ui/pull/165)

### Notes

- Tailwind v4 changes affect how theming and variants are handled. Ensure that variable prefixes and accessibility props are aligned with the updated implementation.

---

## [0.5.0] - 2025-03-19

### Changed

- Renamed the component from `Modal` to `Dialog` for consistency with HTML semantics and internal naming conventions.  
  [#124](https://github.com/halvaradop/ui/pull/124)

---

## [0.4.0] - 2025-02-06

### Added

- Introduced new CSS variables to support consistent theming for dialog elements.  
  [#93](https://github.com/halvaradop/ui/pull/93)

---

## [0.3.0] - 2025-01-15

### Changed

- Reintroduced `forwardRef` for compatibility with `useRef` in React 18.  
  [#78](https://github.com/halvaradop/ui/pull/78)

---

## [0.2.0] - 2024-12-19

### Removed

- Removed `forwardRef` based on the assumption that React 19 no longer required it.  
  [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types in the build output.  
  [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved compatibility issues between React 18 and 19 caused by differences in `jsx-runtime`.  
  [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), [#72](https://github.com/halvaradop/ui/pull/72)

---

## [0.1.0] - 2024-10-27

### Added

- Initial release of the `Modal` component (now `Dialog`) using the native `<dialog>` HTML tag, with variants and `DialogProps` support.  
  [#42](https://github.com/halvaradop/ui/pull/42)
