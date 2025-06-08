# CHANGELOG - @halvaradop/ui-radio

All notable changes to this project are documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Updated CSS variables introduced in [#93](https://github.com/halvaradop/ui/pull/93) to address missing values and improve Tailwind v4 support.  
  [#143](https://github.com/halvaradop/ui/pull/143)

### Fixed

- Fixed an issue triggered by the `useRef` hook in the `@halvaradop/ui-radio-group` package, which was indirectly affected by the `Radio` component.  
  [#122](https://github.com/halvaradop/ui/pull/122)

### Deprecated

- **Deprecated**: This package is now deprecated and will no longer receive updates or bug fixes.  
  The `Radio` component was moved into the `@halvaradop/ui-radio-group` package to avoid Tailwind CSS scanning issues.  
  [#153](https://github.com/halvaradop/ui/pull/153), [#144](https://github.com/halvaradop/ui/issues/144)

### Notes

- Consumers should migrate to `@halvaradop/ui-radio-group`, which now includes the logic and styles previously contained here.

---

## [0.2.0] - 2025-02-06

### Added

- Introduced CSS variables for customization of the Radio component using Tailwind CSS v4.  
  [#93](https://github.com/halvaradop/ui/pull/93)

---

## [0.1.0] - 2025-01-15

### Added

- Initial release of the `Radio` component with support for `sm`, `base`, `md`, and `lg` sizes, and `green`, `blue`, `red`, `yellow`, and `black` color options. Built with `cva`.  
  [#75](https://github.com/halvaradop/ui/pull/75)

- Added `forwardRef` support to restore `ref` compatibility for React 18.  
  [#78](https://github.com/halvaradop/ui/pull/78)
