# CHANGELOG - @halvaradop/ui-submit

All notable changes to this project will be documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Migrated from Tailwind CSS v3 to v4. Replaced legacy custom variants with native support using the `@theme` directive. This simplifies the component's variant logic.  
  [#152](https://github.com/halvaradop/ui/pull/152)

- Updated color token naming to align with Tailwind v4 standards.  
  [#125](https://github.com/halvaradop/ui/pull/125)

### Notes

- All variant definitions and sizing logic were simplified thanks to Tailwind’s native support for state-based selectors like `:user-valid` and `:placeholder-shown`.

---

## [0.3.0] - 2025-02-06

### Added

- Introduced base theming variables for customizing Submit button appearance.  
  [#93](https://github.com/halvaradop/ui/pull/93)

---

## [0.2.0] - 2025-01-15

### Changed

- Reintroduced `forwardRef` to ensure React 18 compatibility with `ref` forwarding.  
  [#78](https://github.com/halvaradop/ui/pull/78)

---

## [0.1.0] - 2024-12-19

### Added

- Initial release of the Submit component, built with `cva`, supporting `variant` (`base`, `destructive`, `ghost`) and `size` (`sm`, `base`, `md`, `lg`) props.  
  [#50](https://github.com/halvaradop/ui/pull/50)
