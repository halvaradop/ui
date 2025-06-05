# CHANGELOG - @halvaradop/ui-input

All notable changes to this project are documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Migrated from Tailwind CSS v3 to v4. Deprecated legacy CSS variables and introduced new auto-generated ones via the `@theme` directive. This simplifies the configuration of the Input component and improves theme consistency.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Improved accessibility by adding WAI-ARIA attributes such as `role` and `type` to the Input component.  
  [#165](https://github.com/halvaradop/ui/pull/165)

### Notes

- The Tailwind v4 migration eliminates the need for custom variants and external theme configuration via `tailwind.config.ts`.

---

## [0.5.0] - 2025-02-06

### Added

- Introduced new CSS variables to support Input customization and theming.  
  [#93](https://github.com/halvaradop/ui/pull/93)

### Changed

- Renamed `--color-font-100` and `--color-font-200` to `--color-base` and `--color-inverse` to follow the new naming convention in Tailwind CSS v4.  
  [#125](https://github.com/halvaradop/ui/pull/125)

---

## [0.4.0] - 2025-01-15

### Changed

- Reintroduced `forwardRef` to restore compatibility with `useRef` in React 18.  
  [#78](https://github.com/halvaradop/ui/pull/78)

---

## [0.3.0] - 2024-12-19

### Removed

- Removed `forwardRef` when upgrading to React 19, which no longer requires this hook for `ref` usage.  
  [#58](https://github.com/halvaradop/ui/pull/58)

### Fixed

- Fixed missing `cva` types, which prevented proper typing and usage.  
  [#67](https://github.com/halvaradop/ui/pull/67)

- Resolved issues between React 18 and 19 related to `react/jsx-runtime` and shared slot logic.  
  [#66](https://github.com/halvaradop/ui/issues/66), [#71](https://github.com/halvaradop/ui/pull/71), [#72](https://github.com/halvaradop/ui/pull/72)

---

## [0.2.0] - 2024-10-29

### Fixed

- Re-released v0.2.0 to correct an error related to the `jsx` field in `tsconfig.json`, changing it from `preserve` to `react-jsx`.  
  [#23](https://github.com/halvaradop/ui/pull/23)

---

## [0.1.0] - 2024-10-06

### Added

- Initial release of the Input component. Includes `base`, `outline`, and `required` variants, size options (`sm`, `base`, `md`, `lg`), and support for `fullWidth` and `fullRounded`. Built using `cva`.  
  [#29](https://github.com/halvaradop/ui/pull/29)
