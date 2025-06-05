# CHANGELOG - @halvaradop/ui-core

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed

- Removed `slot.ts` and migrated its contents to the new `@halvaradop/ui-slot` package. This reduces bundle size for packages that do not use the Slot component.  
  [#151](https://github.com/halvaradop/ui/pull/151)

- Removed `tsup.config.base.ts` and moved its contents to a new `@halvaradop/ui-utils` package for better organization of build and configuration utilities.  
  [#107](https://github.com/halvaradop/ui/pull/107)

### Notes

- The removal of `slot.ts` impacts packages relying on `SlotProps`. Ensure they import from `@halvaradop/ui-slot` moving forward.

---

## [0.5.0] - 2025-02-06

### Removed

- Removed `tsup.config.base.ts` and its contents moved to `@halvaradop/ui-utils` to separate build configurations.  
  [#107](https://github.com/halvaradop/ui/pull/107)

---

## [0.4.0] - 2025-01-15

### Added

- Added utility types to improve type safety and reuse:
  - `HTMLTag`: All HTML tags in React.
  - `WithChildrenProps<Props>`: Enforces `children` prop.
  - `HTMLTagAttributes<Tag>`: Attributes for a given HTML tag or component.
  - `ComponentProps<Tag, ExcludedAttributes>`: Extends `HTMLTagAttributes` with exclusion support.  
    [#77](https://github.com/halvaradop/ui/pull/77)

---

## [0.3.0] - 2024-12-19

### Added

- Added `ref` prop support in components using `SlotProps` when `asChild` is true, ensuring minimal class leakage.  
  [#59](https://github.com/halvaradop/ui/pull/59)

- Revised logic for prop spreading in `Slot` components. Separate branches now handle React 18 and React 19 compatibility.  
  [#69](https://github.com/halvaradop/ui/pull/69)

---

## [0.2.1] - 2024-11-26

### Fixed

- Fixed issue in `Slot` component where cloning a valid child element could yield undefined props, causing runtime errors (React 19).  
  [#55](https://github.com/halvaradop/ui/pull/55)

---

## [0.2.0] - 2024-10-04

### Added

- Added the `Slot` component to enable extensible React components via the Compound Component Pattern.  
  [#30](https://github.com/halvaradop/ui/pull/30)

- Updated `SlotProps` to accept a second argument for better HTML tag inference in components that implement `Slot`.  
  [#58](https://github.com/halvaradop/ui/pull/58)

---

## [0.1.0] - 2024-09-13

### Added

- Added `merge` function, re-exported from `tailwind-merge` and `clsx`, providing a comprehensive Tailwind class merging utility.  
  [#6](https://github.com/halvaradop/ui/pull/6)

- Added `tsupConfig` configuration for building all packages in the `@halvaradop/ui` library.  
  [#13](https://github.com/halvaradop/ui/pull/13)
