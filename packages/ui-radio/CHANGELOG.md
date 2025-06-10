# CHANGELOG - @halvaradop/ui-radio

All notable changes to this project are documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [0.3.0] - 2025-06-09 (Version @legacy for React 18)

> **Release: React 18 Support**
>
> Version **0.y.z** marks the official release of our component library with full **React 18** compatibility. This version is a **direct promotion of the latest pre-release (`0.y.z-rc.n`)** and has passed all stability and regression tests in real-world environments. It includes all changes, improvements, and fixes introduced during the `rc` phase.
>
> While this release contains substantial updates (such as the complete migration to Tailwind CSS v4 and accessibility enhancements) similar to those in the main (`latest`) version, its purpose is to provide a dedicated support line for projects that still rely on React 18. Active development has moved to the `master` branch, which targets React 19.
>
> **Recommended update for React 18 users!**
>
> We strongly recommend updating to this version if your project still depends on React 18 to benefit from the latest fixes and optimizations. You can install it using the `legacy` tag on npm:
>
> ```bash
> npm install @halvaradop/ui@legacy
> ```
>
> We encourage users to plan their migration to React 19 to take advantage of the latest features and optimizations available in the `master` branch.

### Breaking Changes

- The `Radio` component has been removed from this package and is now available in the `@halvaradop/ui-radio-group` package to address Tailwind CSS scanning issues.  
  [#153](https://github.com/halvaradop/ui/pull/153), [#144](https://github.com/halvaradop/ui/issues/144)

#### Migration

- Please migrate to `@halvaradop/ui-radio-group`, which now contains the logic and styles previously provided by this package.

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
