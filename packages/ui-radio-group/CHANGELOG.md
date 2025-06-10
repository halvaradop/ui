# CHANGELOG - @halvaradop/ui-radio-group

All notable changes to this project are documented in this file.

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format  
and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [0.4.0] - 2025-06-09 (Version @legacy for React 18)

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

---

## [0.3.3-rc.1] - 2025-06-07

### Added

- Migrated the `Radio` component from `@halvaradop/ui-radio` into this package. This unifies the logic using the Compound Component Pattern and avoids TailwindCSS scanning issues.  
  [#153](https://github.com/halvaradop/ui/pull/153)

- Updated CSS variables to align with Tailwind CSS v4 theming and token generation. Variables include support for cursor opacity, border color, and component sizes.  
  [#152](https://github.com/halvaradop/ui/pull/152)

### Notes

- Tailwind v4 compatibility is now fully native. Custom variants have been replaced by semantic tokens exposed via `@theme`.
- This package now contains both `RadioGroup` and `Radio`, and consumers should migrate usage accordingly.
- This is a **release candidate** published under the `rc` tag to validate changes in preparation for the upcoming `1.0.0` major release.  
  See [#170](https://github.com/halvaradop/ui/pull/170)
- Versioning and publishing were automated using the `release.bash` script.  
  See [#170](https://github.com/halvaradop/ui/pull/170)
- The purpose of this release is to test the release workflow in real environments before finalizing the stable release.  
  See [#170](https://github.com/halvaradop/ui/pull/170)

> No breaking changes have been introduced in this release candidate.  
> The final release will follow after successful validation.

This release was initiated based on [#169](https://github.com/halvaradop/ui/issues/169), which outlines the reasoning for upgrading to a stable major version.

---

## [0.3.0] - 2025-03-19

### Added

- Updated color-related CSS variables initially introduced in [#93](https://github.com/halvaradop/ui/pull/93) to include additional tokens.  
  [#143](https://github.com/halvaradop/ui/pull/143)

### Changed

- Marked `react` and `react-dom` as external in `tsupConfig`, improving bundle size and avoiding duplication.  
  [#126](https://github.com/halvaradop/ui/pull/126)

### Fixed

- Fixed `useRef` error related to the `Radio` component after integration with `RadioGroup`.  
  [#122](https://github.com/halvaradop/ui/pull/122)

---

## [0.2.0] - 2025-02-06

### Added

- Integrated shared utility package `@halvaradop/ui-utils`, removing bundled configuration code like `tsupConfig` and `tsconfig.base.json`.  
  [#107](https://github.com/halvaradop/ui/pull/107)

---

## [0.1.0] - 2025-01-15

### Added

- Initial release of the `RadioGroup` component, implementing `row` and `column` layout variants. Supports compound pattern logic with nested radio buttons.  
  [#76](https://github.com/halvaradop/ui/pull/76)

- Intended to complement the original `Radio` component released in [#75](https://github.com/halvaradop/ui/pull/75), now fully migrated here.
