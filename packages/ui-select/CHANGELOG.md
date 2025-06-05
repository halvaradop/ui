# CHANGELOG - @halvaradop/ui-select

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Updated CSS variables for improved configuration and compatibility with Tailwind CSS v4. Main changes for the Button component: [#152](https://github.com/halvaradop/ui/pull/152)

  - #### New CSS Variables
    - `--opacity-cursor`
    - `--rounded`
    - `--color-primary`
    - `--color-on-primary`
    - `--color-surface`
    - `--color-muted`
    - `--color-border`
    - `--color-ghost`
    - `--color-disabled`
    - `--size-sm`
    - `--size-base`
    - `--size-md`
    - `--size-lg`

## [0.1.0] - 2025-04-06

### Added

- Initial release: Introduced the `Select` suite, which implements the Compound Component Pattern to share state between related components: `Select`, `SelectTrigger`, `SelectOption`, and `SelectList`. [#139](https://github.com/halvaradop/ui/pull/139)

  - Implemented the `Select` component for streamlined dropdown selection.
  - Added `SelectTrigger` to manage user interactions.
  - Included `SelectOption` to define selectable values.
  - Integrated `SelectList` for structured option presentation.

- Implemented CSS variables as defined in [#93](https://github.com/halvaradop/ui/pull/93) and [#125](https://github.com/halvaradop/ui/pull/125). [#139](https://github.com/halvaradop/ui/pull/139)

- Added a merge function from the `@halvaradop/ui-core` package to correctly merge Tailwind CSS classes. [#139](https://github.com/halvaradop/ui/pull/139)

- Added WAI-ARIA attributes for accessibility. [#139](https://github.com/halvaradop/ui/pull/139)
