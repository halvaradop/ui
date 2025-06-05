# CHANGELOG - @halvaradop/ui-radio

All notable changes to this project are documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Updated the CSS variable colors introduced in [#93](https://github.com/halvaradop/ui/pull/93) to address missing values. See [#143](https://github.com/halvaradop/ui/pull/143).

### Fixed

- Fixed an error caused by the `useRef` hook in the `@halvaradop/ui-radio-group` package, which was triggered by the Radio component. See [#122](https://github.com/halvaradop/ui/pull/122).

### Removed

- **Deprecation:** This package is now deprecated and will no longer receive updates or bug fixes. It caused issues with loading TailwindCSS classes in the RadioGroup component from the `@halvaradop/ui-radio-group` package, as discussed in [#144](https://github.com/halvaradop/ui/issues/144). Although temporary workarounds were considered, the maintainers have decided to deprecate this package and migrate its content to the `@halvaradop/ui-radio-group` package for better compatibility with the TailwindCSS scanner. [#153](https://github.com/halvaradop/ui/pull/153)

## [0.2.0] - 2025-02-06

### Added

- Introduced CSS variables for Radio customization. Declare these in your main CSS file and configure them in `tailwindcss.config.ts`. See [#93](https://github.com/halvaradop/ui/pull/93):

  - `--color-primary`
  - `--color-green`
  - `--color-blue`
  - `--color-red`
  - `--color-yellow`

## [0.1.0] - 2025-01-15

### Added

- Initial release: Added the `Checkbox` component with support for `sm`, `base`, `md`, and `lg` values for the `size` prop, and `green`, `blue`, `red`, `yellow`, and `black` for the `color` prop. Implemented using the `cva` function from `class-variance-authority`. See [#75](https://github.com/halvaradop/ui/pull/75).

- Added `forwardRef` support to the Radio component, restoring the `ref` prop functionality removed in [#58](https://github.com/halvaradop/ui/pull/58). See [#78](https://github.com/halvaradop/ui/pull/78).
