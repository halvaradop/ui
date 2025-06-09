# CHANGELOG

All notable changes to this project will be documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and reflects changes across the entire monorepo.  
Per-package version history is maintained inside each package’s own `CHANGELOG.md`.

---

## [Unreleased]

---

## [next pre-publish] - 2025-06-08

- Published pre-release (`next`) versions for all major monorepo packages ([#170](https://github.com/halvaradop/ui/pull/170)):

  - `@halvaradop/ui-button`
  - `@halvaradop/ui-checkbox`
  - `@halvaradop/ui-core`
  - `@halvaradop/ui-dialog`
  - `@halvaradop/ui-form`
  - `@halvaradop/ui-input`
  - `@halvaradop/ui-label`
  - `@halvaradop/ui-radio-group`
  - `@halvaradop/ui-radio`
  - `@halvaradop/ui-select`
  - `@halvaradop/ui-slot`
  - `@halvaradop/ui-submit`
  - `@halvaradop/ui-template`
  - `@halvaradop/ui-utils`

  Each package was incremented to a new pre-release version (`next.0`, `next.1`, etc.) and published to npm under the `next` tag. These releases are intended for testing and validation ahead of the upcoming stable release.

## Breaking Changes

- **`@halvaradop/ui-radio` package**  
  The Radio component was deprecated and merged into `@halvaradop/ui-radio-group` to avoid duplication and Tailwind scanning issues.  
  → [PR #153](https://github.com/halvaradop/ui/pull/153), [Issue #144](https://github.com/halvaradop/ui/issues/144)

## Added

- **Theming system with CSS variables**  
  Introduced a token-based system using Tailwind CSS v4’s native `@theme` directive for color and layout consistency across components.  
  Affects: `@halvaradop/ui-button`, `@halvaradop/ui-input`, `@halvaradop/ui-checkbox`, `@halvaradop/ui-submit`, `@halvaradop/ui-dialog`, etc.  
  → [PR #152](https://github.com/halvaradop/ui/pull/152)

- **WAI-ARIA accessibility enhancements**  
  Added semantic ARIA roles and attributes across all interactive components to improve accessibility.  
  Affects: `@halvaradop/ui-button`, `@halvaradop/ui-form`, `@halvaradop/ui-select`, `@halvaradop/ui-checkbox`, etc.  
  → [PR #165](https://github.com/halvaradop/ui/pull/165)

- **New packages introduced**
  - [`@halvaradop/ui-slot`](https://github.com/halvaradop/ui/pull/151): Encapsulates logic for flexible slot rendering, previously in `ui-core`.
  - [`@halvaradop/ui-radio-group`](https://github.com/halvaradop/ui/pull/153): Includes both `RadioGroup` and `Radio` using the Compound Component Pattern.
  - [`@halvaradop/ui-utils`](https://github.com/halvaradop/ui/pull/107): Centralized build and configuration utilities (`tsup`, `tsconfig`, etc.).

## Changed

- **Tailwind CSS v4 Migration**  
  All component packages migrated from Tailwind CSS v3 to v4. Custom variants and manual CSS variable setup in `tailwind.config.ts` were removed.  
  → [PR #152](https://github.com/halvaradop/ui/pull/152)

- **CSS token renaming**  
  Renamed variables like `--color-font-100` to `--color-base` and others for clarity and design consistency.  
  → [PR #125](https://github.com/halvaradop/ui/pull/125)

- **React 19 compatibility**  
  Several packages updated to work with React 19's new ref handling and JSX runtime behavior.  
  → [PR #58](https://github.com/halvaradop/ui/pull/58), [Issue #66](https://github.com/halvaradop/ui/issues/66), [PR #71](https://github.com/halvaradop/ui/pull/71), [PR #72](https://github.com/halvaradop/ui/pull/72)

- **Ref forwarding reintroduced**  
  After being removed in React 19 migration, `forwardRef` was re-added to restore compatibility with React 18’s `useRef`.  
  → [PR #78](https://github.com/halvaradop/ui/pull/78)

## Removed

- **Legacy configuration files**  
  Removed duplicated config files (`tsup.config.base.ts`, `tsconfig.base.json`, etc.) from each package. These were replaced by the centralized `@halvaradop/ui-utils` package.  
  → [PR #107](https://github.com/halvaradop/ui/pull/107)

## Notes

- Each package maintains its own detailed `CHANGELOG.md` file with versioned history.
- This file documents architectural, cross-cutting, or shared changes at the monorepo level.
