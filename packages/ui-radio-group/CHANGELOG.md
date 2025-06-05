# CHANGELOG - @halvaradop/ui-radio-group

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- The `Radio` component from the `@halvaradop/ui-radio` package was deprecated in [#153](https://github.com/halvaradop/ui/pull/153) due to issues with Tailwind scanner recognition when re-exported from `@halvaradop/ui-radio-group`. As a result, all code and logic for the `Radio` component have been moved directly into the `@halvaradop/ui-radio-group` package to ensure compatibility and to implement the Compound Component Pattern with the `RadioGroup` component. [#153](https://github.com/halvaradop/ui/pull/153)

- Updated CSS variables for better configuration and compatibility with Tailwind CSS v4. Main changes for the Button component: [#152](https://github.com/halvaradop/ui/pull/152)

  - #### New CSS Variables
    - `--opacity-cursor`
    - `--rounded`
    - `--color-on-primary`
    - `--color-on-secondary`
    - `--color-surface`, `--color-on-surface`
    - `--color-muted`
    - `--color-border`
    - `--color-danger`
    - `--size-sm`
    - `--size-base`
    - `--size-md`
    - `--size-lg`

## [0.3.0] - 2025-03-19

### Added

- Updated CSS variable colors introduced in [#93](https://github.com/halvaradop/ui/pull/93) to address missing values. See [#143](https://github.com/halvaradop/ui/pull/143).

### Changed

- Added `react` and `react-dom` as external dependencies in `tsupConfig`, reducing the bundle size of the components. [#126](https://github.com/halvaradop/ui/pull/126)

### Fixed

- Fixed an error caused by the `useRef` hook in the `@halvaradop/ui-radio-group` package, which was triggered by the Radio component. See [#122](https://github.com/halvaradop/ui/pull/122).

## [0.2.0] - 2025-02-06

### Added

- Integrated `@halvaradop/ui-utils` for configuration, ensuring these utilities are not included in the bundle size. These changes were introduced in [#107](https://github.com/halvaradop/ui/pull/107), which also moved configuration files such as `tsupConfig` and `tsconfig.base.json`.

## [0.1.0] - 2025-01-15

### Added

- Initial release: Introduced the `RadioGroup` component with `row` and `column` variants for the `variant` prop, implemented using the `cva` function from `class-variance-authority`. This component groups radio buttons and sets the `name` property for all radios within it. The `RadioGroup` complements the `Radio` component introduced in [#75](https://github.com/halvaradop/ui/pull/75), adding new functionality to support the Compound Component Pattern, enabling shared state between components exported by the package. [#76](https://github.com/halvaradop/ui/pull/76)
