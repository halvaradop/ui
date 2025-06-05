# CHANGELOG - @halvaradop/ui-core

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed

- Removed `slot.ts` and moved it to the new `@halvaradop/ui-slot` package, reducing bundle size for packages that do not use the `Slot` component. [#151](https://github.com/halvaradop/ui/pull/151)

## [0.5.0] - 2025-02-6

### Removed

- Removed `tsup.config.base.ts` and moved its contents to the new `@halvaradop/ui-utils` package for better organization. [#107](https://github.com/halvaradop/ui/pull/107)

## [0.4.0] - 2025-1-15

### Added

- Added utility types [#77](https://github.com/halvaradop/ui/pull/77):
  - `HTMLTag`: Represents all HTML tags available in React and possible JSX constructors.
  - `WithChildrenProps<Props>`: Adds a required `children` prop.
  - `HTMLTagAttributes<Tag>`: Returns the attributes for a given HTML tag or React component.
  - `ComponentProps<Tag, ExcludedAttributes>`: Extends `HTMLTagAttributes` with an option to exclude specific attributes.

## [0.3.0] - 2024-12-19

### Added

- Added the `ref` prop to components using `SlotProps` when `asChild` is set to `true`, ensuring only minimal classes are provided to avoid prop conflicts between the main component and its child element. [#59](https://github.com/halvaradop/ui/pull/59)

- Revised the conditional logic for spreading props to child elements in components using `Slot`. The previous solution in [#55](https://github.com/halvaradop/ui/pull/55) only addressed React 19 and did not work for React 18, necessitating separate branches for each version. [#69](https://github.com/halvaradop/ui/pull/69)

## [0.2.1] - 2024-11-26

### Fixed

- Fixed an error in the `Slot` component where cloning a valid child element could result in undefined props, causing errors (focused on React 19). [#55](https://github.com/halvaradop/ui/pull/55)

## [0.2.0] - 2024-10-04

### Added

- Added the `Slot` component to enable extensible React components. [#30](https://github.com/halvaradop/ui/pull/30)

- Updated `SlotProps` to accept a second argument for intelligent recognition of the HTML tag used by components implementing `Slot`. [#58](https://github.com/halvaradop/ui/pull/58)

## [0.1.0] - 2024-09-13

### Added

- Added the `merge` function, re-exported from the `tailwind-merge` and `clsx` dependencies, for internal use across all packages in the @halvaradop/ui library. This creates a comprehensive merge function for all Tailwind class merging scenarios. [#6](https://github.com/halvaradop/ui/pull/6)

- Added `tsupConfig` configuration for building all packages in the @halvaradop/ui library. [#13](https://github.com/halvaradop/ui/pull/13)
