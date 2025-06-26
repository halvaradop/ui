# CHANGELOG - @halvaradop/ui-utils

> [!NOTE]
> This package is used internally within the @halvaradop/ui monorepo and does not have published versions. All configuration files and utilities exported by this package are excluded from the final bundle, so they do not impact the size of dependent packages. This changelog documents all notable changes for internal reference.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2025-02-06

### Added

- Initial release of `@halvaradop/ui-utils`, a utility package to centralize configuration files and shared build settings across the monorepo. [#107](https://github.com/halvaradop/ui/pull/107)

- Added base configuration files for `tsup` and TypeScript:
  - `tsup.config.base.ts`
  - `tsconfig.base.json`

- Declared `react` and `react-dom` as external dependencies in the build process for consistency and bundle size optimization.

### Notes

- This package is intended for internal tooling and is not meant to be published as a user-facing component library.
- It replaces legacy config duplication across component packages.

---

## [0.0.0] - 2025-02-03

### Added

- Added `tsupConfig` for building packages with tsup. [#107](https://github.com/halvaradop/ui/pull/107)

- Introduced the `decorator` component for use as a Storybook stories decorator. [#107](https://github.com/halvaradop/ui/pull/107)

- Added a parameter to the `decorator` component to allow skipping the decorator in stories that set this parameter to `true`. Useful for base or default stories to avoid unnecessary content. [#108](https://github.com/halvaradop/ui/pull/108)

- Added the `DocsPage` component, which implements Docs Blocks as a default/template documentation for stories. [#109](https://github.com/halvaradop/ui/pull/109)

- Set the `sourcemap` field to `true` in the `tsup` configuration when not in production. [#123](https://github.com/halvaradop/ui/pull/123)

- Added the `Palette` story to display the library's color palette. [#125](https://github.com/halvaradop/ui/pull/125)

- Set the `minify` and `bundle` fields to `true` in the `tsup` configuration when in production. [#123](https://github.com/halvaradop/ui/pull/123)

- Added `react` and `react-dom` as external dependencies in the `tsup` configuration. [#88](https://github.com/halvaradop/ui/pull/88)

- Added `"use client"` as a banner for all components using the `tsup` configuration.

- It replaces legacy config duplication across component packages.
